import{a as l,r as o,j as e,i as t,K as c}from"./index-CF2cXKIB.js";const h=()=>{const s=l(),[r,n]=o.useState("");return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex items-center gap-2 border border-black/30 rounded-3xl overflow-hidden h-10",children:[e.jsx("input",{type:"search",onChange:a=>n(a.target.value),onKeyDown:a=>{a.key==="Enter"&&r&&s(`/${t}/search/${r}`)},placeholder:"Search for blogs",className:"bg-transparent outline-none border-none pl-3 placeholder-slate-900 w-full"}),e.jsx("div",{onClick:()=>{r&&s(`/${t}/search/${r}`)},className:"bg-black h-full px-6 shrink-0 flex items-center justify-center rounded-r-full text-white cursor-pointer",children:e.jsx(c,{className:"text-lg"})})]})})};export{h as S};
