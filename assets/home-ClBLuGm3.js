import{u as h,r as m,G as f,s as j,b as g,j as e,N,i,a as u,H as b,I as v,z as w,J as k}from"./index-CF2cXKIB.js";import{C as y,a as C,B as S,d as F}from"./cardSkeleton-SrBsDzo5.js";import{P as $}from"./pagination-RrXD1IrY.js";import{S as p}from"./searchBar-BYx9xTdk.js";const A=()=>{var d;const n=h(),[r,l]=m.useState(1);m.useEffect(()=>{n(f(`/blogs?sort=-createdAt&${j}&page=${r}`))},[r]);const{data:a,loading:o,error:c}=g(s=>s.blogs);return c?e.jsx(N,{to:`/${i}/error`}):e.jsxs(e.Fragment,{children:[e.jsx("h1",{className:"font-medium text-lg mb-4",children:"Recent blogs"}),o?e.jsx(e.Fragment,{children:[...Array(8)].map((s,t)=>e.jsx(y,{},t))}):e.jsx("div",{className:"flex flex-col gap-y-5",children:(d=a==null?void 0:a.results)==null?void 0:d.map((s,t)=>e.jsx(C,{item:s},t))}),e.jsx("div",{className:"mt-6 pb-5",children:e.jsx($,{totalPages:a==null?void 0:a.total_pages,setCurrPage:l})})]})},P=()=>{const n=u(),[r,l]=m.useState(!1),a=o=>{n(`/${i}/filter/${o}`)};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:block hidden",children:e.jsx(p,{})}),e.jsx("h1",{className:"font-medium text-md md:mt-4 mb-4",children:"You might like"}),e.jsxs("ul",{className:"tags flex items-center gap-4 flex-wrap relative",children:[b.map((o,c)=>!r&&c>15?null:e.jsx("li",{onClick:()=>a(o.name),className:"px-4 py-1 font-medium capitalize rounded-3xl bg-slate-100/90 hover:bg-black/80 hover:text-white cursor-pointer transition-all duration-300",children:o.name},c)),e.jsx("div",{className:"absolute bottom-0 right-2 bg-gradient-to-b from-transparent to-white p-2",children:!r&&e.jsxs("button",{onClick:()=>l(!0),className:"hover:text-black duration-300 transition-all font-medium text-sm text-slate-500 flex items-center gap-1.5 ",children:["See more ",e.jsx(S,{})]})})]})]})},B=()=>{var d;const n=h(),r=u();m.useEffect(()=>{n(v("/blogs?sort=likes&select=heading createdAt author _id likes"))},[]);const{data:l,loading:a,error:o}=g(s=>s.trendingBlogs),c=s=>{r(`/${i}/detail/${s}`)};return o?r(`/${i}/error`):e.jsx(e.Fragment,{children:e.jsxs("div",{className:"pt-5",children:[e.jsx("h1",{className:"font-medium mb-2",children:"Trending now "}),e.jsx("ul",{className:"flex flex-col gap-y- last:border-b",children:a?e.jsx(e.Fragment,{children:[...Array(8)].map((s,t)=>e.jsxs("div",{className:"flex items-center gap-3 w-full border-t p-2",children:[e.jsxs("h1",{className:"text-5xl text-gray-200 font-bold w-[15%] shrink-0 mt-auto",children:[t<9&&"0",t+1]}),e.jsx("div",{className:"w-full",children:e.jsx(w,{count:1.8,height:22})})]},t))}):e.jsx("div",{className:"flex flex-col",children:(d=l==null?void 0:l.results)==null?void 0:d.map((s,t)=>{var x;return e.jsxs("li",{onClick:()=>c(s==null?void 0:s._id),className:"flex gap-3 cursor-pointer p-2 border-t group/card hover:bg-slate-100/90  duration-300 transition-all",children:[e.jsxs("h1",{className:"text-5xl text-gray-200 font-bold w-fit shrink-0 mt-auto",children:[t<9&&"0",t+1]}),e.jsxs("div",{className:"",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsxs("small",{className:"font-medium whitespace-nowrap overflow-hidden w-full shrink-0 text-ellipsis",children:["@",(x=s==null?void 0:s.author)==null?void 0:x.username]}),e.jsxs("small",{className:"flex items-center gap-0.5 font-medium text-gray-800 ml-2 whitespace-nowrap overflow-hidden w-full text-ellipsis",children:[e.jsx(k,{className:"mb-0.5"}),F(s==null?void 0:s.createdAt,"d mmm yyyy")]})]}),e.jsx("h1",{className:"font-medium text-lg ellipsis group-hover/card:opacity-95",children:s==null?void 0:s.heading})]})]},t)})})})]})})},R=()=>(m.useEffect(()=>{var n,r,l,a;document.title=`${((r=(n=i)==null?void 0:n.charAt(0))==null?void 0:r.toUpperCase())+((a=i)==null?void 0:a.slice(1,(l=i)==null?void 0:l.length))} - Homepage`},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"md:hidden w-4/5 mx-auto mt-5",children:e.jsx(p,{})}),e.jsxs("div",{className:"flex w-screen md:px-[10%] px-[5%] md:flex-nowrap gap-y-10 flex-wrap mt-5",children:[e.jsx("div",{className:"md:w-2/3 w-full shrink-0 md:border-r md:pr-4 pt-2 ",children:e.jsx(A,{})}),e.jsxs("div",{className:"w-full pl-4 pt-2",children:[e.jsx(P,{}),e.jsx(B,{})]})]})]}));export{R as default};
