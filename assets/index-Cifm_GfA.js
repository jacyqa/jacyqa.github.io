/* empty css                  *//* empty css                 */import{u as e,r as a,_ as s}from"./index-gVn7TGDK.js";import{g as t}from"./getQueryString-CpgA1tFZ.js";import{f as n,a as l,e as i,q as o,t as r,M as d,O as c,R as p,U as u,aB as m,p as v,S as g}from"./vue-DnAlJlYy.js";import{E as f,k as h}from"./element-plus-VJLrbKIK.js";import"./pinia-Xa3vNIcj.js";const y={class:"container abb"},b={class:"forms-container"},w={class:"signin-signup"},k={key:1,action:"#",class:"sign-in-form"},x={action:"#",class:"sign-up-form"};const j=s({setup(){const s=e(),o=n((()=>!s.isLoggedIn)),r=l(""),d=l("");return i((()=>{const e=document.querySelector("#sign-in-btn"),a=document.querySelector("#sign-up-btn"),s=document.querySelector(".container");a.addEventListener("click",(()=>{s.classList.add("sign-up-mode")})),e.addEventListener("click",(()=>{s.classList.remove("sign-up-mode")}))})),{logout:function(){e().logout()},showSignInForm:o,login:function(){const s=e();if("admin"!==d.value||"admin"!==r.value)return confirm("用户名或密码错误"),r.value="",void(d.value="");{s.login();const e=a.resolve({name:Object.freeze(t("redirect"))||"index"});a.push(e.fullPath)}},password:r,username:d}}},[["render",function(e,a,s,t,n,l){const i=f,j=h;return v(),o("main",null,[r("div",y,[r("div",b,[r("div",w,[t.showSignInForm?p("",!0):(v(),d(i,{key:0,onClick:t.logout,type:"primary"},{default:c((()=>a[2]||(a[2]=[g("退登")]))),_:1},8,["onClick"])),t.showSignInForm?(v(),o("form",k,[a[4]||(a[4]=r("h2",{class:"title"},"登录",-1)),u(j,{modelValue:t.username,"onUpdate:modelValue":a[0]||(a[0]=e=>t.username=e),type:"text",style:{width:"240px"},placeholder:"用户名",clearable:""},null,8,["modelValue"]),u(j,{modelValue:t.password,"onUpdate:modelValue":a[1]||(a[1]=e=>t.password=e),type:"password",style:{width:"240px"},placeholder:"密码","show-password":""},null,8,["modelValue"]),u(i,{onClick:t.login,type:"primary",class:"btn solid"},{default:c((()=>a[3]||(a[3]=[g("登录")]))),_:1},8,["onClick"])])):p("",!0),r("form",x,[a[6]||(a[6]=r("h2",{class:"title"},"注册?",-1)),u(j,{type:"text",style:{width:"240px"},placeholder:"用户名"}),u(j,{type:"email",style:{width:"240px"},placeholder:"邮箱"}),u(j,{type:"password",style:{width:"240px"},placeholder:"密码"}),u(i,{type:"primary",class:"btn"},{default:c((()=>a[5]||(a[5]=[g("立即注册")]))),_:1})])])]),a[7]||(a[7]=m('<div class="panels-container" data-v-43669e96><div class="panel left-panel" data-v-43669e96><div class="content" data-v-43669e96><h3 data-v-43669e96>加入我们</h3><p data-v-43669e96>加入我们，成为本站的一份子。</p><button class="btn transparent" id="sign-up-btn" data-v-43669e96>去注册</button></div><img src="/assets/log-K9faiaUD.svg" class="image" alt="" data-v-43669e96></div><div class="panel right-panel" data-v-43669e96><div class="content" data-v-43669e96><h3 data-v-43669e96>已有帐号？</h3><p data-v-43669e96>立即登录已有帐号，享受独家权益。</p><button class="btn transparent" id="sign-in-btn" data-v-43669e96>去登录</button></div><img src="/assets/register-k43rnQUb.svg" class="image" alt="" data-v-43669e96></div></div>',1))])])}],["__scopeId","data-v-43669e96"]]);export{j as default};