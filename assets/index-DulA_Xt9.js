/* empty css                  *//* empty css                 */import{g as e,b as a,E as n,d as t,e as r,f as s,h as u,j as m,k as l}from"./element-plus-Bw8yGQXb.js";import{_ as o}from"./lodash-BLKLPQ6u.js";import{u as d,w as i}from"./xlsx-CZyLZ84H.js";import{a as g,Z as p,q as c,t as h,U as v,O as f,T as _,a9 as b,F as C,p as x,S as k}from"./vue-DfCCP4H5.js";import{_ as y}from"./index-mngSadU9.js";import"./pinia-CtYtdWjf.js";var I={exports:{}};!function(e){const a=function(e){e||(e={}),this.timeConstant=e.timeConstant||1e3,this.progress=0,this._running=!1,this._intervalFrequency=100,this.autoStart=e.autoStart||!1,this.parent=e.parent,this.parentStart=e.parentStart,this.parentEnd=e.parentEnd,this.autoStart&&this.start()};a.prototype.start=function(){this._time=0,this._intervalId=setInterval(this._onInterval.bind(this),this._intervalFrequency)},a.prototype._onInterval=function(){this._time+=this._intervalFrequency,this.setProgress(1-Math.exp(-1*this._time/this.timeConstant))},a.prototype.end=function(){this.stop(),this.setProgress(1)},a.prototype.stop=function(){clearInterval(this._intervalId),this._intervalId=null},a.prototype.createSubProgress=function(e){const n=e.start||this.progress,t=e.end||1,r=Object.assign({},e,{parent:this,parentStart:n,parentEnd:t,start:null,end:null});return new a(r)},a.prototype.setProgress=function(e){this.progress=e,this.parent&&this.parent.setProgress((this.parentEnd-this.parentStart)*this.progress+this.parentStart)},e.exports=a}(I);const j=e(I.exports),V=[{num:1,name:"马佐涵",grade:0},{num:2,name:"张潇予",grade:0},{num:3,name:"杨子睿",grade:0},{num:4,name:"丁玺腾",grade:0},{num:5,name:"翟雅荣",grade:0},{num:6,name:"王梦佳",grade:0},{num:7,name:"王子阳",grade:0},{num:8,name:"刘博凌",grade:0},{num:9,name:"丁宜冰",grade:0},{num:10,name:"张星辰",grade:0},{num:11,name:"薛奕洋",grade:0},{num:12,name:"张灵桥",grade:0},{num:13,name:"孟令瑶",grade:0},{num:14,name:"韩瑜章",grade:0},{num:15,name:"赵轩毅",grade:0},{num:16,name:"王峥",grade:0},{num:17,name:"贾济玮",grade:0},{num:18,name:"赵泽寰",grade:0},{num:19,name:"李芷漩",grade:0},{num:20,name:"谢易娜",grade:0},{num:21,name:"张智博",grade:0},{num:22,name:"刘舜华",grade:0},{num:23,name:"马翔",grade:0},{num:24,name:"曹华亭",grade:0},{num:25,name:"陈姝贝",grade:0},{num:26,name:"李婧璇",grade:0},{num:27,name:"王军",grade:0},{num:28,name:"常雨馨",grade:0},{num:29,name:"杜晨曦",grade:0},{num:30,name:"郝欣雨",grade:0},{num:31,name:"周兴",grade:0},{num:32,name:"燕禛",grade:0},{num:33,name:"李卿",grade:0},{num:34,name:"何易",grade:0},{num:35,name:"王子涵",grade:0},{num:36,name:"宋忻豫",grade:0},{num:37,name:"田谨赫",grade:0},{num:38,name:"吉星霖",grade:0},{num:39,name:"张洪睿",grade:0},{num:40,name:"薛星戈",grade:0},{num:41,name:"索嘉澳",grade:0},{num:42,name:"姚思明",grade:0},{num:43,name:"张馨月",grade:0},{num:44,name:"王紫涵",grade:0},{num:45,name:"魏兆骏",grade:0},{num:46,name:"屈睿东",grade:0},{num:47,name:"韩林荣轩",grade:0},{num:48,name:"李昱萱",grade:0},{num:49,name:"李俊霖",grade:0},{num:50,name:"昝瑛畦",grade:0},{num:51,name:"武韵涵",grade:0},{num:52,name:"杨祺",grade:0},{num:53,name:"么雨忱",grade:0},{num:54,name:"林轩",grade:0},{num:55,name:"尹婧琦",grade:0},{num:56,name:"段旻岑",grade:0},{num:57,name:"王欣竹",grade:0},{num:58,name:"段京辰",grade:0},{num:59,name:"王荣美",grade:0},{num:60,name:"张楷浩",grade:0},{num:61,name:"荣鑫宇",grade:0},{num:62,name:"杨紫煜",grade:0},{num:63,name:"王星程",grade:0}],w={class:"result"},P={class:"head"},S={class:"methed"},E={class:"nextButton"},F={class:"info"},G={class:"item"},N={class:"avgChart"},T={class:"chart"};const U=y({setup(){const e=g(""),a=g(!1),n=p(V),t=g(0),r=g(void 0),s=g(""),u=g(void 0),m=g([]),l=g(!1),c=p(new j({timeConstant:5e3}));g(!1);const h=e=>{let a=1;const n=o.chunk(e,7);if(l.value){const e=n.map((e=>o.sum(e)/o.compact(e).length));return o.map(e,(e=>o.toInteger(e))).map((e=>({team:`第${a++}组`,avgGrade:e})))}return n.map((e=>o.sum(e)/e.length)).map((e=>({team:`第${a++}组`,avgGrade:e})))};function v(){n.forEach(((e,a)=>{e.grade=e.grade})),function(){const e=[];let a=1,t=0;n.forEach(((n,r)=>{e.push(n),(r+1)%7==0&&e.push({num:"均分",name:`第${a++}组`,grade:`平均分${m.value[t++].avgGrade.toFixed(2)}`})})),function(e){const a=d.json_to_sheet(e),n=d.book_new();d.book_append_sheet(n,a,"Data"),i(n,"result.xlsx")}(e)}()}return{stautsOfProgrss:e,progress:c,showResult:a,test:function(){},teamGrades:m,data:n,isFullPerson:l,inputNumber:r,showName:s,grade:u,index:t,fetchinputNumber:function(){var e;t.value=(r.value||0)-1,e=t.value,s.value=n[e].name},handleInput:function(){u.value&&u.value>=0?(n[t.value].grade=u.value,u.value=void 0,r.value=void 0,s.value="",m.value=h(n.map((e=>e.grade)))):alert("成绩或学号输入有误")},handleInputToExpert:function(){u.value=void 0,r.value=void 0,s.value="",e.value="",a.value=!0,c.start(),setTimeout((()=>{c.end(),setTimeout((()=>{e.value="success"}),500),m.value=h(n.map((e=>e.grade))),v()}),3e3)},CheckToCalculateGroupAverages:function(){setTimeout((()=>{m.value=h(n.map((e=>e.grade)))}),0)},exportResult:v}}},[["render",function(e,o,d,i,g,p){const y=u,I=m,j=a,V=n,U=t,q=r,O=l,R=s;return x(),c(C,null,[o[7]||(o[7]=h("h1",{class:"title"},null,-1)),o[8]||(o[8]=h("h1",{class:"tlt"},"登分器",-1)),v(j,{modelValue:i.showResult,"onUpdate:modelValue":o[0]||(o[0]=e=>i.showResult=e)},{default:f((()=>[h("div",w,[v(I,{title:"Please wait","sub-title":"We're preparing your result.But you can close this dialog."},{icon:f((()=>[v(y,{type:"circle",status:i.stautsOfProgrss,percentage:parseInt(100*i.progress.progress)},null,8,["status","percentage"])])),_:1})])])),_:1},8,["modelValue"]),h("main",null,[h("div",P,[h("div",S,[h("div",E,[v(V,{onClick:i.handleInput},{default:f((()=>o[4]||(o[4]=[k("Next")]))),_:1},8,["onClick"]),v(V,{onClick:i.handleInputToExpert},{default:f((()=>o[5]||(o[5]=[k("导出")]))),_:1},8,["onClick"]),v(V,{onClick:i.test},{default:f((()=>o[6]||(o[6]=[k("test")]))),_:1},8,["onClick"]),v(U,{modelValue:i.isFullPerson,"onUpdate:modelValue":o[1]||(o[1]=e=>i.isFullPerson=e),onClick:i.CheckToCalculateGroupAverages,label:"是否去除未考式人员"},null,8,["modelValue","onClick"])]),h("div",F,[v(q,{min:1,max:63,class:"item",modelValue:i.inputNumber,"onUpdate:modelValue":o[2]||(o[2]=e=>i.inputNumber=e),size:"large",placeholder:"学号",onChange:i.fetchinputNumber},null,8,["modelValue","onChange"]),h("h2",G,"当前学生："+_(i.showName),1),v(q,{min:0,class:"item",modelValue:i.grade,"onUpdate:modelValue":o[3]||(o[3]=e=>i.grade=e),size:"large",placeholder:"分数",onKeyup:b(i.handleInput,["enter"])},null,8,["modelValue","onKeyup"])])]),h("div",N,[v(R,{data:i.teamGrades,border:""},{default:f((()=>[v(O,{prop:"team",label:"组别"}),v(O,{prop:"avgGrade",label:"平均分"})])),_:1},8,["data"])])]),h("div",T,[v(R,{data:i.data,height:"500",border:"",style:{width:"100%"}},{default:f((()=>[v(O,{prop:"num",label:"学号"}),v(O,{prop:"name",label:"姓名"}),v(O,{prop:"grade",label:"成绩"})])),_:1},8,["data"])])])],64)}],["__scopeId","data-v-3584bf6b"]]);export{U as default};
