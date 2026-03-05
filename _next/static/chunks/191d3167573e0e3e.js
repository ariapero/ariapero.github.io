(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,78942,e=>{"use strict";var t=e.i(43476),r=e.i(22016),o=e.i(71645);let i=()=>{let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t,r,o,i,n=e.current;if(!n)return;let a=n.getContext("webgl2");if(!a)return;let s=window.devicePixelRatio,l=`#version 300 es
    #ifdef GL_FRAGMENT_PRECISION_HIGH
    precision highp float;
    #else
    precision mediump float;
    #endif
    
    in vec2 position;
    
    void main(void) {
        gl_Position = vec4(position, 0., 1.);
    }
    `,c=`#version 300 es
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
    `,f=[],d=()=>{let{innerWidth:e,innerHeight:t}=window;n.width=e*s,n.height=t*s,a.viewport(0,0,e*s,t*s)},p=(e,t)=>{a.shaderSource(e,t),a.compileShader(e),a.getShaderParameter(e,a.COMPILE_STATUS)||console.error(a.getShaderInfoLog(e))},m=e=>{a.clearColor(0,0,0,1),a.clear(a.COLOR_BUFFER_BIT),a.useProgram(o),a.bindBuffer(a.ARRAY_BUFFER,r),a.uniform1f(t,.001*e),a.uniform2f(i,n.width,n.height),a.drawArrays(a.TRIANGLES,0,.5*f.length),requestAnimationFrame(m)};return(()=>{let e=a.createShader(a.VERTEX_SHADER),n=a.createShader(a.FRAGMENT_SHADER);if(!e||!n||!(o=a.createProgram()))return;p(e,l),p(n,c),a.attachShader(o,e),a.attachShader(o,n),a.linkProgram(o),a.getProgramParameter(o,a.LINK_STATUS)||console.error(a.getProgramInfoLog(o)),f=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1],r=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,r),a.bufferData(a.ARRAY_BUFFER,new Float32Array(f),a.STATIC_DRAW);let s=a.getAttribLocation(o,"position");a.enableVertexAttribArray(s),a.vertexAttribPointer(s,2,a.FLOAT,!1,0,0),t=a.getUniformLocation(o,"time"),i=a.getUniformLocation(o,"resolution")})(),d(),m(0),window.addEventListener("resize",d),()=>{window.removeEventListener("resize",d)}},[]),(0,t.jsx)("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};function n(){return(0,t.jsxs)("div",{className:"min-h-screen p-8 relative",children:[(0,t.jsx)(i,{}),(0,t.jsx)("div",{className:"max-w-6xl mx-auto relative z-10",children:(0,t.jsx)("header",{className:"mb-12",children:(0,t.jsxs)("h1",{className:"h-screen flex justify-center items-center flex-col text-center text-white font-inter transform transition-transform duration-[1700ms] ease-cubic-bezier",children:[(0,t.jsx)("span",{className:"inline-block whitespace-nowrap font-grand text-4xl",style:{textShadow:"2px 2px 4px rgba(0,0,0, 0.5)"},children:"Oops! This page still needs some work."}),(0,t.jsxs)("span",{className:"inline-block whitespace-nowrap mt-4 font-zen text-xl",style:{textShadow:"2px 2px 4px rgba(0,0,0, 0.5)"},children:["Feel free to reference"," ",(0,t.jsx)(r.default,{href:"https://ariapero.myportfolio.com/",target:"_blank",rel:"noopener noreferrer",className:"text-white underline hover:opacity-80 inline",children:"my previous portfolio site"})," ","for more content."]})]})})})]})}e.s(["default",()=>n])}]);