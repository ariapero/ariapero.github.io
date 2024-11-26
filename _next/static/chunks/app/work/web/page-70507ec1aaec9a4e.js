(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[487],{9549:(e,t,a)=>{Promise.resolve().then(a.bind(a,9746))},9746:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var s=a(5155),i=a(2115),r=a(5683),n=a(444),l=a(7396),o=a(5565),d=a(7364);let c=(0,a(7401).A)("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);var h=a(3518),u=a(6967),m=a(4085),g=a(5007),p=a(9602);let b=[{title:"Unsubscribe MIT",description:"A platform to help MIT students discover free food, share surplus items, and manage dormspam. Winner of the Webby/People's Choice Award in the 2024 MIT WebLab web development competition.",link:"https://unsubscribe.mit.edu",technologies:["React","Express","Next.js","Node.js","Tailwind CSS","MongoDB","Mongoose","WebSocket","Socket.IO","OAuth/OpenID","Google Login API","MIT Shibboleth","Material-UI","ReactTimeAgo","FullCalendar"],pages:[{title:"Landing Page",description:"Secure access for MIT students via MIT Touchstone authentication, ensuring a safe and personalized experience while maintaining a clean, minimalist design.",image:"/unsubscribe-landing.png?height=450&width=800",thumbnail:"/unsubscribe-landing.png?height=100&width=150"},{title:"Dashboard (Food Posts Feed)",description:"A real-time feed of free food posts with seamless integration of collected mailing list emails. Users can upload photos, mark items as 'gone', and connect with the community.",image:"/unsubscribe-dash.png?height=450&width=800",thumbnail:"/unsubscribe-dash.png?height=100&width=150"},{title:"Dark Mode",description:"A real-time feed of free food posts with seamless integration of collected mailing list emails. Users can upload photos, mark items as 'gone', and connect with the community.",image:"/unsubscribe-dark.png?height=450&width=800",thumbnail:"/unsubscribe-dark.png?height=100&width=150"},{title:"Scheduled Food (Calendar View)",description:"An interactive calendar of scheduled free food events, allowing users to plan and share their own events, fostering a culture of sharing and sustainability.",image:"/unsubscribe-calendar.png?height=450&width=800",thumbnail:"/unsubscribe-calendar.png?height=100&width=150"},{title:"Scheduled Food (Grid View)",description:"View scheduled food in grid view, or click on a calendar item to be led to the corresponding food card post in grid view.",image:"/unsubscribe-scheduled.png?height=450&width=800",thumbnail:"/unsubscribe-scheduled.png?height=100&width=150"}],keyFeatures:["Real-time updates and notifications using WebSocket and Socket.IO","Secure authentication via OAuth/OpenID clients, Google Login API, and MIT Shibboleth","Responsive multiplatform UI using Tailwind, MUI, ReactTimeAgo, and FullCalendar","Seamless integration of mailing list emails into visually appealing feed posts","Interactive calendar for scheduled free food events","Personalized user profiles with dynamic user data updates to avoid deadnaming, showcasing the project's commitment to inclusivity and respect."]}];function f(){let[e,t]=(0,i.useState)(0),[a,f]=(0,i.useState)(0),x=()=>{let t=b[e];f(e=>(e+1)%t.pages.length)},v=()=>{let t=b[e];f(e=>(e-1+t.pages.length)%t.pages.length)};return(0,s.jsxs)("div",{className:"min-h-screen text-white p-16 z-0 font-zen",children:[(0,s.jsxs)(l.default,{href:"/work",className:"inline-flex items-center text-white hover:text-gray-300 transition-colors mb-8",children:[(0,s.jsx)(d.A,{className:"mr-2",size:20}),"Back to Work"]}),(0,s.jsx)("h1",{className:"text-4xl font-bold mb-8 font-grand",children:"Web Development &  UI"}),(0,s.jsx)("div",{className:"space-y-16",children:b.map((e,t)=>(0,s.jsxs)("div",{className:"space-y-6",children:[(0,s.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-4",children:[(0,s.jsxs)("div",{className:"flex-1 max-w-4xl",children:[(0,s.jsx)("h2",{className:"text-2xl font-bold mb-2",children:e.title}),(0,s.jsx)("p",{className:"text-gray-200 mb-4 max-w-2xl",children:e.description}),(0,s.jsx)("div",{className:"flex flex-wrap gap-2 mb-4",children:e.technologies.map((e,t)=>(0,s.jsx)("span",{className:"bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-sm",children:e},t))})]}),(0,s.jsxs)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center whitespace-nowrap text-white hover:text-gray-300 transition-colors",children:["Visit Project ",(0,s.jsx)(c,{className:"ml-2",size:16})]})]}),(0,s.jsx)(g.Zp,{className:"border-0 bg-white/5 backdrop-blur-sm overflow-hidden",children:(0,s.jsxs)(g.Wu,{className:"p-0 relative",children:[(0,s.jsxs)("div",{className:"relative aspect-[16/9] overflow-hidden",children:[(0,s.jsx)(r.N,{mode:"wait",children:(0,s.jsxs)(n.P.div,{initial:{opacity:0,x:100},animate:{opacity:1,x:0},exit:{opacity:0,x:-100},transition:{duration:.3},className:"absolute inset-0",children:[(0,s.jsx)(o.default,{src:e.pages[a].image,alt:e.pages[a].title,fill:!0,className:"object-cover"}),(0,s.jsx)("div",{className:"absolute inset-0 bg-gradient-to-t from-black/65 to-transparent"}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 p-6",children:[(0,s.jsx)("h3",{className:"text-xl text-white font-bold mb-2",children:e.pages[a].title}),(0,s.jsx)("p",{className:"text-gray-200",children:e.pages[a].description})]})]},a)}),(0,s.jsx)(m.$,{variant:"ghost",size:"icon",className:"absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white",onClick:v,children:(0,s.jsx)(h.A,{className:"h-8 w-8"})}),(0,s.jsx)(m.$,{variant:"ghost",size:"icon",className:"absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white",onClick:x,children:(0,s.jsx)(u.A,{className:"h-8 w-8"})})]}),(0,s.jsx)("div",{className:"relative bg-black/40 p-4",children:(0,s.jsx)("div",{className:"flex justify-center gap-2 overflow-x-auto",children:e.pages.map((e,t)=>(0,s.jsx)("button",{onClick:()=>f(t),className:(0,p.cn)("relative w-24 h-16 overflow-hidden rounded transition-all",a===t?"border-2 border-white":"opacity-50 hover:opacity-75"),children:(0,s.jsx)(o.default,{src:e.thumbnail,alt:e.title,fill:!0,className:"object-cover"})},t))})})]})}),(0,s.jsxs)("div",{className:"mt-8",children:[(0,s.jsx)("h3",{className:"text-xl font-bold mb-4",children:"Key Features"}),(0,s.jsx)("ul",{className:"list-disc list-inside space-y-2",children:e.keyFeatures.map((e,t)=>(0,s.jsx)("li",{className:"text-gray-200",children:e},t))})]})]},t))})]})}},4085:(e,t,a)=>{"use strict";a.d(t,{$:()=>d});var s=a(5155),i=a(2115),r=a(2317),n=a(652),l=a(9602);let o=(0,n.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300",{variants:{variant:{default:"bg-neutral-900 text-neutral-50 shadow hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",destructive:"bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-neutral-50 dark:hover:bg-red-900/90",outline:"border border-neutral-200 bg-white shadow-sm hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",secondary:"bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80",ghost:"hover:bg-neutral-100 hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",link:"text-neutral-900 underline-offset-4 hover:underline dark:text-neutral-50"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:a,variant:i,size:n,asChild:d=!1,...c}=e,h=d?r.DX:"button";return(0,s.jsx)(h,{className:(0,l.cn)(o({variant:i,size:n,className:a})),ref:t,...c})});d.displayName="Button"},5007:(e,t,a)=>{"use strict";a.d(t,{Wu:()=>d,ZB:()=>o,Zp:()=>n,aR:()=>l});var s=a(5155),i=a(2115),r=a(9602);let n=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("rounded-xl border border-neutral-200 bg-white text-neutral-950 shadow dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-50",a),...i})});n.displayName="Card";let l=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex flex-col space-y-1.5 p-6",a),...i})});l.displayName="CardHeader";let o=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("font-semibold leading-none tracking-tight",a),...i})});o.displayName="CardTitle",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("text-sm text-neutral-500 dark:text-neutral-400",a),...i})}).displayName="CardDescription";let d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("p-6 pt-0",a),...i})});d.displayName="CardContent",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,r.cn)("flex items-center p-6 pt-0",a),...i})}).displayName="CardFooter"},9602:(e,t,a)=>{"use strict";a.d(t,{cn:()=>r});var s=a(3463),i=a(9795);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.QP)((0,s.$)(t))}},3518:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]])},6967:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(7401).A)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]])},5565:(e,t,a)=>{"use strict";a.d(t,{default:()=>i.a});var s=a(4146),i=a.n(s)},4146:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return o},getImageProps:function(){return l}});let s=a(306),i=a(666),r=a(7970),n=s._(a(5514));function l(e){let{props:t}=(0,i.getImgProps)(e,{defaultLoader:n.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}}let o=r.Image}},e=>{var t=t=>e(e.s=t);e.O(0,[839,970,183,181,429,441,517,358],()=>t(9549)),_N_E=e.O()}]);