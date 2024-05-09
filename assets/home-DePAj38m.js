import{u,r as x,I as j,s as v,b as g,j as e,N as b,i as c,a as f,J as N,K as w,C as k}from"./index-B0mTSIFs.js";import{C as y,a as C,B as S,d as $}from"./cardSkeleton-D4mi2g3B.js";import{P as A}from"./pagination-ZtmbnzZH.js";import{S as p}from"./searchBar-Dl2rofYD.js";const F=()=>{var d;const n=u(),[r,t]=x.useState(1);x.useEffect(()=>{n(j(`/blogs?sort=-createdAt&${v}&page=${r}`))},[r]);const{data:a,loading:o,error:i}=g(s=>s.blogs);return i?e.jsx(b,{to:`/${c}/error`}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-medium text-lg mb-4",children:"Recent blogs"}),o?e.jsx(e.Fragment,{children:[...Array(8)].map((s,l)=>e.jsx(y,{},l))}):e.jsx("div",{className:"flex flex-col gap-y-5",children:(d=a==null?void 0:a.results)==null?void 0:d.map((s,l)=>e.jsx(C,{item:s},l))}),e.jsx("div",{className:"mt-6 pb-5",children:e.jsx(A,{totalPages:a==null?void 0:a.total_pages,setCurrPage:t})})]})},P=()=>{const n=f(),[r,t]=x.useState(!1),a=o=>{n(`/${c}/filter/${o}`)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:block hidden",children:e.jsx(p,{})}),e.jsx("h1",{className:"font-medium text-md md:mt-4 mb-4",children:"You might like"}),e.jsxs("ul",{className:"tags flex items-center gap-4 flex-wrap relative",children:[N.map((o,i)=>!r&&i>15?null:e.jsx("li",{onClick:()=>a(o.name),className:"px-4 py-1 font-medium capitalize rounded-3xl bg-slate-100/90 hover:bg-black/80 hover:text-white cursor-pointer transition-all duration-300",children:o.name},i)),e.jsx("div",{className:"absolute bottom-0 right-2 bg-gradient-to-b from-transparent to-white p-2",children:!r&&e.jsxs("button",{onClick:()=>t(!0),className:"hover:text-black duration-300 transition-all font-medium text-sm text-slate-500 flex items-center gap-1.5 ",children:["See more ",e.jsx(S,{})]})})]})]})},B=()=>{var d;const n=u(),r=f();x.useEffect(()=>{setTimeout(()=>{n(w("/blogs?sort=likes&select=heading createdAt author _id likes"))},600)},[]);const{data:t,loading:a,error:o}=g(s=>s.trendingBlogs),i=s=>{r(`/${c}/detail/${s}`)};return o?r(`/${c}/error`):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"pt-5",children:[e.jsx("h1",{className:"font-medium mb-2",children:"Trending now "}),e.jsx("ul",{className:"flex flex-col gap-y- last:border-b w-full overflow-hidden",children:a?e.jsx(e.Fragment,{children:[...Array(8)].map((s,l)=>e.jsxs("div",{className:"flex items-center gap-3 w-full border-t p-2",children:[e.jsxs("h1",{className:"text-5xl text-gray-200 font-bold w-[15%] shrink-0 mt-auto",children:[l<9&&"0",l+1]}),e.jsx("div",{className:"w-full",children:e.jsx(k,{count:1.8,height:22})})]},l))}):e.jsx("div",{className:"flex flex-col",children:(d=t==null?void 0:t.results)==null?void 0:d.map((s,l)=>{var m,h;return e.jsxs("li",{onClick:()=>i(s==null?void 0:s._id),className:"flex gap-3 items-center cursor-pointer p-2 border-t group/card hover:bg-slate-100/90  duration-300 transition-all w-full",children:[e.jsxs("h1",{className:"text-5xl text-gray-200 font-bold min-w-[13%] max-w-fit shrink-0 montserrat",children:[l<9&&"0",l+1]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"w-7 h-7 shrink-0 rounded-full overflow-hidden bg-black",children:e.jsx("img",{src:(m=s==null?void 0:s.author)==null?void 0:m.avatar,alt:"avatar",className:"w-full h-full object-cover object-center"})}),e.jsxs("small",{className:"font-medium whitespace-nowrap overflow-hidden w-full flex items-center text-ellipsis text-[13px]",children:["@",(h=s==null?void 0:s.author)==null?void 0:h.username," Published on"," ",$(s==null?void 0:s.createdAt,"d mmm yyyy")]})]}),e.jsx("h1",{className:"font-medium text-lg ellipsis group-hover/card:opacity-95 w-full overflow-hidden",children:s==null?void 0:s.heading})]})]},l)})})})]})})},D=()=>(x.useEffect(()=>{var n,r,t,a;document.title=`${((r=(n=c)==null?void 0:n.charAt(0))==null?void 0:r.toUpperCase())+((a=c)==null?void 0:a.slice(1,(t=c)==null?void 0:t.length))} - Homepage`},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:hidden w-4/5 mx-auto mt-5",children:e.jsx(p,{})}),e.jsxs("div",{className:"flex w-screen md:px-[10%] px-[5%] md:flex-nowrap gap-y-10 flex-wrap mt-5",children:[e.jsx("div",{className:"md:w-2/3 w-full shrink-0 md:border-r md:pr-4 pt-2 ",children:e.jsx(F,{})}),e.jsxs("div",{className:"w-full md:pl-4 pt-2 max-[500px]:px-[5%]",children:[e.jsx(P,{}),e.jsx(B,{})]})]})]}));export{D as default};
