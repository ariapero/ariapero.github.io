(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let o=(0,t.forwardRef)(({color:e="currentColor",size:o=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:a,iconNode:c,...d},f)=>(0,t.createElement)("svg",{ref:f,...i,width:o,height:o,stroke:e,strokeWidth:s?24*Number(n)/Number(o):n,className:r("lucide",l),...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(a)?a:[a]])),n=(e,i)=>{let n=(0,t.forwardRef)(({className:n,...s},l)=>(0,t.createElement)(o,{ref:l,iconNode:i,className:r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...s}));return n.displayName=`${e}`,n};e.s(["default",()=>n],75254)},71689,e=>{"use strict";let t=(0,e.i(75254).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>t],71689)},7428,e=>{"use strict";e.i(47167);var t=e.i(43476),r=e.i(71645),i=e.i(21476),o=e.i(47414),n=r,s=e.i(37806);class l extends n.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){let e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function a({children:e,isPresent:r}){let i=(0,n.useId)(),o=(0,n.useRef)(null),a=(0,n.useRef)({width:0,height:0,top:0,left:0}),{nonce:c}=(0,n.useContext)(s.MotionConfigContext);return(0,n.useInsertionEffect)(()=>{let{width:e,height:t,top:n,left:s}=a.current;if(r||!o.current||!e||!t)return;o.current.dataset.motionPopId=i;let l=document.createElement("style");return c&&(l.nonce=c),document.head.appendChild(l),l.sheet&&l.sheet.insertRule(`
          [data-motion-pop-id="${i}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            top: ${n}px !important;
            left: ${s}px !important;
          }
        `),()=>{document.head.removeChild(l)}},[r]),(0,t.jsx)(l,{isPresent:r,childRef:o,sizeRef:a,children:n.cloneElement(e,{ref:o})})}let c=({children:e,initial:n,isPresent:s,onExitComplete:l,custom:c,presenceAffectsLayout:f,mode:u})=>{let h=(0,o.useConstant)(d),m=(0,r.useId)(),p=(0,r.useCallback)(e=>{for(let t of(h.set(e,!0),h.values()))if(!t)return;l&&l()},[h,l]),v=(0,r.useMemo)(()=>({id:m,initial:n,isPresent:s,custom:c,onExitComplete:p,register:e=>(h.set(e,!1),()=>h.delete(e))}),f?[Math.random(),p]:[s,p]);return(0,r.useMemo)(()=>{h.forEach((e,t)=>h.set(t,!1))},[s]),r.useEffect(()=>{s||h.size||!l||l()},[s]),"popLayout"===u&&(e=(0,t.jsx)(a,{isPresent:s,children:e})),(0,t.jsx)(i.PresenceContext.Provider,{value:v,children:e})};function d(){return new Map}var f=e.i(31178),u=e.i(83164);let h=e=>e.key||"";function m(e){let t=[];return r.Children.forEach(e,e=>{(0,r.isValidElement)(e)&&t.push(e)}),t}var p=e.i(74008);let v=({children:e,exitBeforeEnter:i,custom:n,initial:s=!0,onExitComplete:l,presenceAffectsLayout:a=!0,mode:d="sync"})=>{(0,u.invariant)(!i,"Replace exitBeforeEnter with mode='wait'");let v=(0,r.useMemo)(()=>m(e),[e]),x=v.map(h),g=(0,r.useRef)(!0),w=(0,r.useRef)(v),y=(0,o.useConstant)(()=>new Map),[R,b]=(0,r.useState)(v),[A,C]=(0,r.useState)(v);(0,p.useIsomorphicLayoutEffect)(()=>{g.current=!1,w.current=v;for(let e=0;e<A.length;e++){let t=h(A[e]);x.includes(t)?y.delete(t):!0!==y.get(t)&&y.set(t,!1)}},[A,x.length,x.join("-")]);let E=[];if(v!==R){let e=[...v];for(let t=0;t<A.length;t++){let r=A[t],i=h(r);x.includes(i)||(e.splice(t,0,r),E.push(r))}"wait"===d&&E.length&&(e=E),C(m(e)),b(v);return}let{forceRender:j}=(0,r.useContext)(f.LayoutGroupContext);return(0,t.jsx)(t.Fragment,{children:A.map(e=>{let r=h(e),i=v===A||x.includes(r);return(0,t.jsx)(c,{isPresent:i,initial:(!g.current||!!s)&&void 0,custom:i?void 0:n,presenceAffectsLayout:a,mode:d,onExitComplete:i?void 0:()=>{if(!y.has(r))return;y.set(r,!0);let e=!0;y.forEach(t=>{t||(e=!1)}),e&&(null==j||j(),C(w.current),l&&l())},children:e},r)})})};e.s(["AnimatePresence",()=>v],7428)},1720,e=>{"use strict";var t=e.i(43476),r=e.i(57688),i=e.i(22016),o=e.i(71645),n=e.i(46932),s=e.i(7428),l=e.i(71689);let a=()=>{let e=(0,o.useRef)(null);return(0,o.useEffect)(()=>{let t,r,i,o,n=e.current;if(!n)return;let s=n.getContext("webgl2");if(!s)return;let l=window.devicePixelRatio,a=`#version 300 es
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
      vec3 greenWithBlack = mix(vec3(0.0, 0.21, 0.11), vec3(0.0), col);
      vec3 blackWithGreen = mix(vec3(0.0), vec3(0.0, 0.21, 0.11), col);

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
        col = greenWithBlack;
      } else {
        col = blackWithGreen;
      }

      fragColor = vec4(col, 1);
    }
    `,d=[],f=()=>{let{innerWidth:e,innerHeight:t}=window;n.width=e*l,n.height=t*l,s.viewport(0,0,e*l,t*l)},u=(e,t)=>{s.shaderSource(e,t),s.compileShader(e),s.getShaderParameter(e,s.COMPILE_STATUS)||console.error(s.getShaderInfoLog(e))},h=e=>{s.clearColor(0,0,0,1),s.clear(s.COLOR_BUFFER_BIT),s.useProgram(i),s.bindBuffer(s.ARRAY_BUFFER,r),s.uniform1f(t,.001*e),s.uniform2f(o,n.width,n.height),s.drawArrays(s.TRIANGLES,0,.5*d.length),requestAnimationFrame(h)};return(()=>{let e=s.createShader(s.VERTEX_SHADER),n=s.createShader(s.FRAGMENT_SHADER);if(!e||!n||!(i=s.createProgram()))return;u(e,a),u(n,c),s.attachShader(i,e),s.attachShader(i,n),s.linkProgram(i),s.getProgramParameter(i,s.LINK_STATUS)||console.error(s.getProgramInfoLog(i)),d=[-1,-1,1,-1,-1,1,-1,1,1,-1,1,1],r=s.createBuffer(),s.bindBuffer(s.ARRAY_BUFFER,r),s.bufferData(s.ARRAY_BUFFER,new Float32Array(d),s.STATIC_DRAW);let l=s.getAttribLocation(i,"position");s.enableVertexAttribArray(l),s.vertexAttribPointer(l,2,s.FLOAT,!1,0,0),t=s.getUniformLocation(i,"time"),o=s.getUniformLocation(i,"resolution")})(),f(),h(0),window.addEventListener("resize",f),()=>{window.removeEventListener("resize",f)}},[]),(0,t.jsx)("canvas",{ref:e,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:-1}})};function c(){let[e,c]=(0,o.useState)(0),d=[{src:"/shelf-1.png",alt:"Completed shelf design 1"},{src:"/shelf-2.png",alt:"Completed shelf design 2"},{src:"/shelf-3.png",alt:"Completed shelf design 3"}];return(0,o.useEffect)(()=>{let e=setInterval(()=>{c(e=>(e+1)%d.length)},3e3);return()=>clearInterval(e)},[]),(0,t.jsxs)("div",{className:"pt-6 sm:pt-8 md:pt-12 px-4 sm:px-8 md:px-16 lg:px-24",children:[(0,t.jsx)("title",{children:"ari peró | fabrication"}),(0,t.jsx)(a,{}),(0,t.jsxs)("div",{className:"max-w-7xl mx-auto",children:[(0,t.jsxs)("header",{className:"flex justify-between items-end mb-4 sm:mb-6 md:mb-8 font-share",children:[(0,t.jsx)("h1",{className:"text-[#fff] text-3xl sm:text-5xl tracking-[-.1em] italic",children:"fabrication"}),(0,t.jsx)("h2",{className:"text-base",children:(0,t.jsxs)(i.default,{href:"/work",className:"inline-flex items-center hover:underline hover:text-white transition-colors",children:[(0,t.jsx)(l.ArrowLeft,{className:"mr-2",size:20}),(0,t.jsx)("span",{className:"hidden sm:block",children:"BACK TO WORK"}),(0,t.jsx)("span",{className:"block sm:hidden",children:"BACK"})]})})]}),(0,t.jsx)("main",{className:"flex justify-center",children:(0,t.jsxs)("section",{className:"flex flex-col md:flex-row gap-2 w-full sm:ml-10",children:[(0,t.jsx)("div",{className:"overflow-hidden w-full md:w-2/3 aspect-video",children:(0,t.jsx)("iframe",{src:"https://www.youtube.com/embed/fVvTyd1kWi0?autoplay=1&playlist=fVvTyd1kWi0&loop=1",className:"w-full h-full object-cover",allow:"autoplay",allowFullScreen:!0})}),(0,t.jsx)("section",{className:"relative w-full md:w-1/3 aspect-video",children:(0,t.jsx)(s.AnimatePresence,{mode:"wait",children:(0,t.jsx)(n.motion.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},className:"relative w-full h-full",children:(0,t.jsx)(r.default,{src:d[e].src,alt:d[e].alt,width:800,height:600,priority:!0,className:"object-contain w-full h-full"})},e)})})]})})]})]})}e.s(["default",()=>c])}]);