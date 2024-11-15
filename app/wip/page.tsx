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
      vec3 tealWithBlack = mix(vec3(0.0, 0.3, 0.2), vec3(0.0), col);
      vec3 blackWithTeal = mix(vec3(0.0), vec3(0.0, 0.3, 0.2), col);

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
        col = tealWithBlack;
      } else {
        col = blackWithTeal;
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
        <h1 className="h-screen flex justify-center items-center flex-col text-center text-white font-inter transform transition-transform duration-[1700ms] ease-cubic-bezier">
          <span className="inline-block whitespace-nowrap">
            Oops! This page still needs some work. Feel free to reference{' '}
            <Link href="https://ariapero.myportfolio.com/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:opacity-80 inline">
              my previous portfolio site
            </Link>{' '}
            for more content.
          </span>
        </h1>
      </header>
    </div>
    </div>
  )
}