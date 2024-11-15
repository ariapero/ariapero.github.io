'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2');
    if (!gl) return;

    const dpr = window.devicePixelRatio;

    const vertexSource = `#version 300 es
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif
    
    in vec2 position;
    
    void main(void) {
        gl_Position = vec4(position, 0., 1.);
    }
    `;

    const fragmentSource = `#version 300 es
    /*********
    * made by Matthias Hurrle (@atzedent)
    */
    
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif
    
    out vec4 fragColor;
    
    uniform vec2 resolution;
    uniform float time;
    
    #define S smoothstep
    #define T .112358+time
    
    float rnd(vec2 p) {
      return fract(
        sin(
          dot(
            p,
            vec2(12.9898, 78.233)
          )
        )*43758.5453123
      );
    }
    
    float noise(vec2 p) {
      vec2 f=fract(p), i=floor(p);
      float
      a=rnd(i),
      b=rnd(i+vec2(1,0)),
      c=rnd(i+vec2(0,1)),
      d=rnd(i+vec2(1,1));
    
      vec2 u = f*f*(3.-2.*f);
    
      return mix(a,b,u.x)+
        (c-a)*u.y*(1.-u.x)+
        (d-b)*u.y*u.x;
    }
    
    void main(void) {
      vec2 uv = (
        gl_FragCoord.xy -.5 * resolution.xy
      )/min(resolution.x, resolution.y);

      float t = T*.1;
      vec3 col = vec3(0);
      vec2 p = vec2(0);
      p.x = noise(uv+vec2(0,1));
      p.y = noise(uv+vec2(1,0));

      p = 8.*(
        vec2(
          sin(t),
          -cos(t)
        )*.15-p
      );

      float s = .35;
      
      for(float i=.0;i<6.;i++) {
        p.x += s*sin(2.*t-i*1.5*p.y)+t;
        p.y += s*cos(2.*t+i*1.5*p.x)-t;
      }

      col+= sin(t+p.x+p.y);
      col = pow(S(vec3(0),vec3(1),col), vec3(.4));

      // Define our two color schemes
      vec3 greenWithWhite = mix(vec3(0.5, 0.8, 0.5), vec3(1.0), col);
      vec3 whiteWithGreen = mix(vec3(1.0), vec3(0.5, 0.8, 0.5), col);

      float stp = 2.,
            prog = T * .2,
            anim = floor(mod(prog - .5, stp));

      if (anim == .0) {
        prog -= length(uv) * .2;
      } else {
        prog -= min(abs(uv.x), abs(uv.y)) * .2;
      }
      
      float scene = floor(mod(prog, stp));
      
      // Switch between color schemes instead of inverting
      if (scene == .0) {
        col = greenWithWhite;
      } else {
        col = whiteWithGreen;
      }

      fragColor = vec4(col, 1);
    }
    `;
    
    // void main(void) {
    //   vec2 uv = (
    //     gl_FragCoord.xy -.5 * resolution.xy
    //   )/min(resolution.x, resolution.y);
    
    //   float t = T*.1;
    //   vec3 col = vec3(0);
    //   vec2 p = vec2(0);
    //   p.x = noise(uv+vec2(0,1));
    //   p.y = noise(uv+vec2(1,0));
    
    //   p = 8.*(
    //     vec2(
    //       sin(t),
    //       -cos(t)
    //     )*.15-p
    //   );
    
    //   float s = .35;
      
    //   for(float i=.0;i<6.;i++) {
    //     p.x += s*sin(2.*t-i*1.5*p.y)+t;
    //     p.y += s*cos(2.*t+i*1.5*p.x)-t;
    //   }
    
    //   col+= sin(t+p.x+p.y);
    //   col = pow(S(vec3(0),vec3(1),col), vec3(.4));
    //   // col = mix(vec3(.7,.6,.4)*col, col, col);
    //   col = mix(vec3(0.5, 0.3, 0.5) * col, vec3(0.5, 0.2, 0.5) * col, col);
    
    //   float
    //   stp = 2.,
    //   prog = T*.2,
    //   anim = floor(mod(prog-.5,stp));
      
    //   if(anim == .0) {
    //     prog -= length(uv)*.2;
    //   } else {
    //     prog -= min(abs(uv.x),abs(uv.y))*.2;
    //   }
    //   float scene = floor(mod(prog,stp));
    //   if(scene == .0) {
    //     col = 1.-col;
    //   } 
    
    //   fragColor = vec4(col,1);
    // }
    // `;

    let time: WebGLUniformLocation | null;
    let buffer: WebGLBuffer | null;
    let program: WebGLProgram | null;
    let resolution: WebGLUniformLocation | null;
    let vertices: number[] = [];

    const resize = () => {
      const { innerWidth: width, innerHeight: height } = window;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      gl.viewport(0, 0, width * dpr, height * dpr);
    };

    const compile = (shader: WebGLShader, source: string) => {
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
      }
    };

    const setup = () => {
      const vs = gl.createShader(gl.VERTEX_SHADER);
      const fs = gl.createShader(gl.FRAGMENT_SHADER);

      if (!vs || !fs) return;

      program = gl.createProgram();
      if (!program) return;

      compile(vs, vertexSource);
      compile(fs, fragmentSource);

      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(gl.getProgramInfoLog(program));
      }

      vertices = [
        -1.0, -1.0,
        1.0, -1.0,
        -1.0, 1.0,
        -1.0, 1.0,
        1.0, -1.0,
        1.0, 1.0
      ];

      buffer = gl.createBuffer();

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

      const position = gl.getAttribLocation(program, "position");

      gl.enableVertexAttribArray(position);
      gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

      time = gl.getUniformLocation(program, "time");
      resolution = gl.getUniformLocation(program, 'resolution');
    };

    const draw = (now: number) => {
      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

      gl.uniform1f(time, now * 0.001);
      gl.uniform2f(
        resolution,
        canvas.width,
        canvas.height
      );
      gl.drawArrays(gl.TRIANGLES, 0, vertices.length * 0.5);
    };

    const loop = (now: number) => {
      draw(now);
      requestAnimationFrame(loop);
    };

    const init = () => {
      setup();
      resize();
      loop(0);
    };

    init();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  );
};

export default function Component() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const slides = [
    "/filter_NRM.jpg?height=3208&width=4537",
    "/globe.svg?height=2481&width=3508",
    "/vercel.svg?height=2481&width=3508"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen p-8 relative">
      <AnimatedBackground />
      <div className="max-w-6xl mx-auto relative z-10">
        <header className="mb-12">
          <h1 className="text-[#000] text-5xl font-semibold mb-4 font-sloop">Sketchbook</h1>
          <Link href="/" target="_blank" rel="noopener noreferrer" className="text-[#000] hover:underline">
            Read here
          </Link>
        </header>

        <main className="space-y-12">
          <section>
            <p className="text-[#000] mb-4">
              My first composition when the lockdowns kicked in was the cheese plant in our living room, which we gave the moniker Kashka V. It was perched on a stool in a corner of the room, illuminated by a red lamp.
            </p>
            <p className="text-[#000]">
              It was my first attempt at embroidery, one of many crafts I reached for in the months that followed. I began to see my everyday differently, taking pleasure in the new leaves that emerged from my thriving plants, paying close attention to them, like a helicopter mom.
            </p>
          </section>

          <section className="flex gap-4">
            <Image src="/filter_NRM.jpg?height=2373&width=3380" alt="Sketch 1" width={3380} height={2373} className="w-[56%] h-auto" />
            <Image src="/filter_NRM.jpg?height=2175&width=3076" alt="Sketch 2" width={3076} height={2175} className="w-[40%] h-auto" />
          </section>

          <section className="flex">
            <div className="w-1/2 text-right pr-4">
              <p className="text-[#000]">
                Our flat dinners became my new idée fixe, a mid-week routine that soon became a ritual. Each dinner was commemorated with a quick sketch: there were pen drawings with streaks of gouache to highlight items of interest, reimagined realities brought to life with detailed acrylic pieces.
              </p>
            </div>
            <div className="w-1/2"></div>
          </section>

          <section className="relative h-[600px] w-5/6">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
              className="absolute inset-0"
            >
              <Image src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} layout="fill" objectFit="contain" />
            </motion.div>
          </section>

          <section className="flex">
            <div className="w-5/12"></div>
            <div className="w-5/12">
              <p className="text-[#5da93d]">
                "...In retrospect I realise green was my lodestar; the rich emerald of an empty wine bottle, an over-ripe lime, or the edge of a leaf peeking through crevices.<br /><br />
                Three lockdowns in and a series of (un)finished projects later, the simple act of pen on paper underpins moments of reprieve from the screen.<br /><br />
                Between lockdowns my sketchbook has been a trusty companion on site visits to projects I have worked on. From dwelling briefly in the gardens at Lambeth Palace Library, observing the way the trees seemed to wrap around the buildings, to tracking a frolicking duck in the pond from the entrance hall, sketching was my way of keeping records of closely held sentiments at any point in time."
              </p>
            </div>
          </section>

          <section className="flex justify-end">
            <div className="w-5/12">
              <Image src="/filter_NRM.jpg?height=3401&width=2408" alt="Final sketch" width={2408} height={3401} className="w-full h-auto" />
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}