import{w as m}from"./works.4841bed5.js";import{r as k,E as f,o as s,a as e,e as o,F as i,b as _,u as h,c as v,H as y,z as d,t as u}from"./entry.efc01a27.js";const w={class:"portfolio"},x={class:"scroll-y"},B=o("h1",{class:"h1"},"Portfolio",-1),$={class:"works"},b={class:"work-date"},D={class:"work-desc"},F={__name:"index",setup(z){const p=k(m),a=(n,r)=>{const l=r==="logo"?".png":".jpg";return`/img/portfolio/gallery/${n.imageDirectory}/${r+l}`};return(n,r)=>{const l=f("router-link");return s(),e("div",w,[o("div",x,[B,o("div",$,[(s(!0),e(i,null,_(h(p),(t,c)=>(s(),v(l,{to:{path:`/portfolio/${c}`},key:c},{default:y(()=>[o("div",{class:"work",style:d({"background-image":`url(${a(t,"0")})`})},[o("div",b,u(t.date),1),o("div",D,[(s(!0),e(i,null,_(t.skills,g=>(s(),e("div",null,u(g),1))),256))]),o("div",{class:"work-logo",style:d({"background-image":`url(${a(t,"logo")})`})},null,4)],4)]),_:2},1032,["to"]))),128))])])])}}};export{F as default};