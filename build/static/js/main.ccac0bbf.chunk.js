(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(17),r=a.n(c),i=(a(43),a(5)),o=(a(19),a(14)),s=a(2),m=a(18),u=a(8),d=a(149),g=a(150);a(75);var h=function(){var e=Object(n.useState)({Q1:"",Q2:"",Q3:"",Q4:""}),t=Object(i.a)(e,2),a=t[0],c=t[1],r=function(e){var t=e.target,n=t.name,l=t.value;c(Object(u.a)(Object(u.a)({},a),{},Object(m.a)({},n,l)))},o=Object(s.f)();return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{className:"d-flex align-items-center justify-content-center ",style:{minHeight:"100vh"}},l.a.createElement("div",{className:"w-100",style:{maxWidth:"1000px"}},l.a.createElement("div",{className:"form-container"},l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=fetch("/",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Q1:a.Q1,Q2:a.Q2,Q3:a.Q3,Q4:a.Q4})});404===t.status?window.alert("Questions Failed"):(console.log("Questions Successfull"),console.log(t),o("/Description"))},style:{display:"flex",flexDirection:"column"}},l.a.createElement("legend",{className:"mb-3"},"Please fill out this Questionair ?"),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"mb-3"},"What is your Gender"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q1",value:"Male",onChange:r,className:"me-2"}),"Male"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q1",value:"Female",onChange:r,className:"me-2"}),"Female"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q1",value:"Other",onChange:r,className:"me-2"}),"Other")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"mb-3"},"What is your age?"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q2",value:"18-25",onChange:r,className:"me-2"}),"18-25"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q2",value:"26-35",onChange:r,className:"me-2"}),"26-35"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q2",value:"36-45",onChange:r,className:"me-2"}),"36-45"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q2",value:"older than 45",onChange:r,className:"me-2"}),"45-60")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"mb-3"},"What is your level of education?"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q3",value:"No schooling",onChange:r,className:"me-2"}),"No schooling"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q3",value:"High School",onChange:r,className:"me-2"}),"High School"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q3",value:"College",onChange:r,className:"me-2"}),"College"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q3",value:"Bachelors Degree",onChange:r,className:"me-2"}),"Bachelors Degree"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q3",value:"Master Degree",onChange:r,className:"me-2"}),"Master Degree"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q3",value:"Doctorate Degree",onChange:r,className:"me-2"}),"Doctorate Degree")),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{className:"mb-3"},"Are you a native speaker of English?"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q4",value:"Yes",onChange:r,className:"me-2"}),"Yes"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",name:"Q4",value:"No",onChange:r,className:"me-2"}),"No")),l.a.createElement(g.a,{type:"submit",className:"mt-4",id:"submitBtn",onClick:function(){document.querySelectorAll("input[type='radio']").forEach(function(e){e.checked||e.setAttribute("required","")})}},"Submit"))))))};var E=function(){var e=Object(s.f)(),t=Object(n.useState)(!0),a=Object(i.a)(t,2),c=a[0],r=a[1];return setTimeout(function(){return r(!1)},5e3),l.a.createElement("div",{className:"body",style:{backgroundColor:"#FFFFF",height:"100vh",width:"100%",overflow:"hidden"}},l.a.createElement(d.a,{className:"main-container"},l.a.createElement(d.a,null,l.a.createElement("div",{className:"col-12 mt-5"},l.a.createElement("h1",{className:"text-center fw-medium"},"General Information"))),l.a.createElement("div",{style:{height:"2rem"}}),l.a.createElement("div",{className:"col-12 mt-6"},l.a.createElement("h3",null,"Task Description")),l.a.createElement("div",{className:"col-12 mt-5 "},l.a.createElement("p",null,"In this task, you are going to detect and annotate tumor in ten different images.")),l.a.createElement("div",{style:{height:"1.5rem"}}),l.a.createElement(d.a,null,l.a.createElement("div",{className:"row justify-content-between"},l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("img",{src:"/logo.png",style:{width:"50px"}}),l.a.createElement("h3",{className:"align-self-center mb-0 px-4"},"Task Guidelines")),l.a.createElement("ul",{className:"list-group mt-5"},l.a.createElement("li",{className:"list-group-item py-3"},"Fill out the questionnaire"),l.a.createElement("li",{className:"list-group-item py-3"},"Watch the tutorial \u2013 you can always rewatch it"),l.a.createElement("li",{className:"list-group-item py-3"},"Perform a quick knowledge check"),l.a.createElement("li",{className:"list-group-item py-3"},"Annotate the images"),l.a.createElement("li",{className:"list-group-item py-3"},"Receive your payment code"))),l.a.createElement("div",{className:"col-5"},l.a.createElement("div",{className:"d-flex"},l.a.createElement("img",{src:"/logo2.png",style:{width:"60px"}}),l.a.createElement("h3",{className:"align-self-center mb-0 px-4"},"Interface Instructions")),l.a.createElement("ul",{className:"list-group mt-5"},l.a.createElement("li",{className:"list-group-item py-3"},"Press and hold left mouse button to annotate"),l.a.createElement("li",{className:"list-group-item py-3"},"Press \u201cnext image\u201d when finished with annotating"),l.a.createElement("li",{className:"list-group-item py-3"},"Your progress will be saved automatically"),l.a.createElement("li",{className:"list-group-item py-3"},'For help, you can always rewatch the tutorial with the button \u201chelp"')))),l.a.createElement("div",{className:"text-center my-3"},l.a.createElement("button",{type:"button",className:"py-2 px-5 next",disabled:c,onClick:function(){e("/Tutorial")}},"Next")))))},f=(a(36),a(21)),p=a(64),v=Object(p.a)(function(e){return{width:window.innerWidth,height:window.innerHeight,setSize:function(t){var a=t.width,n=t.height;return e({width:a,height:n})},imageWidth:100,imageHeight:100,setImageSize:function(t){return e(function(){return{imageWidth:t.width,imageHeight:t.height}})},scale:1,setScale:function(t){return e({scale:t})},isDrawing:!1,toggleIsDrawing:function(){return e(function(e){return{isDrawing:!e.isDrawing}})},regions:[],setRegions:function(t){return e(function(e){return{regions:t}})},selectedRigionId:null,selectRegion:function(t){return e({selectedRigionId:t})},brightness:0,setBrightness:function(t){return e({brightness:t})}}}),y=Object(i.a)(v,1)[0];var b=function(){var e=y(function(e){return e.regions}),t=l.a.useRef(null),a=y(function(e){return e.selectedRigionId}),n=y(function(e){return e.selectRegion});return l.a.createElement(f.b,{ref:t},e.map(function(e){var t=e.id===a;return l.a.createElement(l.a.Fragment,{key:e.id},l.a.createElement(f.c,{globalCompositeOperation:"destination-out",points:e.points.flatMap(function(e){return[e.x,e.y]}),fill:"black",listening:!1,closed:!0}),l.a.createElement(f.c,{name:"region",points:e.points.flatMap(function(e){return[e.x,e.y]}),fill:e.color,closed:!0,opacity:t?1:.8,onClick:function(){n(e.id)}}))}))},N=a(65),w=a.n(N);a(148);var x=function(e){var t=e.imageSource,a=w()("image-".concat(t,".jpg"),"photo"),n=Object(i.a)(a,2),c=n[0],r=(n[1],y(function(e){return e.setImageSize})),o=y(function(e){return e.setScale}),s=y(function(e){return e.setSize}),m=y(function(e){return e.width}),u=y(function(e){return e.height}),d=y().brightness;l.a.useEffect(function(){if(c){var e=Math.min(m/c.width,u/c.height);o(e),r({width:c.width,height:c.height});var t=c.width/c.height;s({width:m,height:m/t})}},[c,m,u,o,r,s]);var g=l.a.useRef(null);return l.a.useEffect(function(){g.current.getCanvas()._canvas.style.filter="brightness(".concat(100*(d+1),"%)")},[d]),l.a.createElement(f.b,{ref:g},l.a.createElement(f.a,{image:c}))},S=1;function j(e){var t=e.getAbsoluteTransform().copy();t.invert();var a=e.getStage().getPointerPosition();return t.point(a)}function T(e,t){var a=e.scaleX(),n=e.width()/2,l=e.height()/2,c=n/a-e.x()/a,r=l/a-e.y()/a,i=Math.max(.05,a*t),o={x:-(c-n/i)*i,y:-(r-l/i)*i},s=C(e,Object(u.a)(Object(u.a)({},o),{},{scale:i}));e.to({x:s.x,y:s.y,scaleX:s.scale,scaleY:s.scale,duration:.1})}function C(e,t){var a=e.findOne("Image").getClientRect(),n=-a.width+e.width()/2,l=e.width()/2,c=Math.max(n,Math.min(t.x,l)),r=-a.height+e.height()/2,i=e.height()/2;return{x:c,y:Math.max(r,Math.min(t.y,i)),scale:Math.max(.05,t.scale)}}var Q=function(e,t){var a=e.imageSrc,n=(t.drawing,l.a.useRef()),c=y(function(e){return{width:e.width,height:e.height}}),r=c.width,i=c.height,o=y(function(e){return e.setSize}),s=y(function(e){return e.scale}),m=y(function(e){return e.isDrawing}),d=y(function(e){return e.toggleIsDrawing}),g=y(function(e){return e.regions}),h=y(function(e){return e.setRegions}),E=y(function(e){return e.selectRegion});return l.a.useEffect(function(){function e(){var e=document.querySelector(".Task-container");o({width:e.offsetWidth,height:e.offsetHeight})}return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}},[o,i]),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.d,{ref:n,width:r,height:i,scaleX:s,scaleY:s,className:"canvas",onClick:function(e){"region"!==e.target.name()&&E(null)},onWheel:function(e){e.evt.preventDefault();var t=n.current,a=-e.evt.deltaX,l=-e.evt.deltaY,c=C(t,{x:t.x()+a,y:t.y()+l,scale:t.scaleX()});n.current.position(c)},onMouseDown:function(e){d(!0);var t=j(e.target.getStage()),a={id:S++,color:"#F13E3E",points:[t]};h(g.concat([a]))},onMouseMove:function(e){if(m){var t=Object(u.a)({},g[g.length-1]),a=j(e.target.getStage());t.points=t.points.concat([a]),g.splice(g.length-1,1),h(g.concat([t]))}},onMouseUp:function(e){m&&(g[g.length-1].points.length<3&&(g.splice(g.length-1,1),h(g.concat())),d())}},l.a.createElement(x,{imageSource:a}),l.a.createElement(b,null)),l.a.createElement("div",{className:"zoom-container"},l.a.createElement("button",{onClick:function(){T(n.current,1.2)}},"+"),l.a.createElement("button",{onClick:function(){T(n.current,.8)}},"-")))},O=a(41),k=a.n(O),F=a(67),q=a(42),D=a(69),M=a.n(D),_=Object(q.b)(function(e){var t=e.region,a=e.sortIndex,n=e.onRemove;return l.a.createElement("div",{className:"region",style:{boxShadow:"0 0 5px ".concat(t.color),border:"1px solid ".concat(t.color)}},"Region #",t.id,l.a.createElement("button",{onClick:function(){n(a)}},"Delete"))}),R=Object(q.a)(function(e){var t=e.items,a=e.onRemove;return l.a.createElement("div",{className:"regions-list"},t.map(function(e,t){return l.a.createElement(_,{key:"item-".concat(e.id),index:t,region:e,onRemove:a,sortIndex:t})}))});var A=function(){var e=y(function(e){return e.regions});console.log(e[0]);var t=y(function(e){return e.setRegions}),a=Object(n.useState)(!1),c=Object(i.a)(a,2),r=c[0],o=c[1],s=(y(function(e){return e.selectedRigionId}),y(function(e){return e.selectRegion}),y(function(e){return e.isDrawing}),Object(n.useState)(1)),m=Object(i.a)(s,2),u=m[0],d=m[1],g=Object(n.useState)(!0),h=Object(i.a)(g,2),E=h[0],f=h[1],p=function(){var e=Object(F.a)(k.a.mark(function e(){return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o(!r),u<=7&&(d(u+1),f(!1)),7===u&&(document.querySelector(".sum").innerHTML="Continue"),setTimeout(function(){t([])},1e3);case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return l.a.createElement("div",null,l.a.createElement("div",{className:"Task-container col-md-12"},l.a.createElement(Q,{imageSrc:u})),l.a.createElement(R,{items:e,onSortEnd:function(a){var n=a.oldIndex,l=a.newIndex;t(M()(e,n,l))},onRemove:function(a){e.splice(a,1),t(e.concat())}}),l.a.createElement("div",{className:"d-flex container justify-content-center mt-5"},l.a.createElement("button",{onClick:function(){u>=0&&(document.querySelector(".sum").innerHTML="Next",d(u-1),f(!1),2===u&&f(!0))},className:"previous sub",disabled:E},"\xab Previous"),l.a.createElement("div",{style:{width:"100px"}}),l.a.createElement("button",{onClick:p,className:"next sum"},"Next \xbb"),r&&l.a.createElement("div",null)))};var I=function(){var e=Object(s.f)();return l.a.createElement("div",{className:"container wrapper"},l.a.createElement("div",{className:"text-center"},l.a.createElement("h2",{className:"d-inline-block"},"Annotation Task"),l.a.createElement("h5",{className:"d-inline-block ms-5 tutorial",style:{cursor:"pointer"},onClick:function(){document.querySelector(".tutorial"),e("/Tutorial2")}},"Tutorial",l.a.createElement("img",{src:"/logo.png",style:{width:"50px"}})),l.a.createElement("p",{className:"description me-5"},"Please annotate the tumors regions")),l.a.createElement(A,null))};var H=function(e){var t=e.TestAnswers,a=e.setTestanswers,n=function(e){var n=e.target,l=n.name,c=n.value;a(Object(u.a)(Object(u.a)({},t),{},Object(m.a)({},l,c)))};return l.a.createElement("div",null,l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"row justify-content-around py-4"},l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5"},l.a.createElement("img",{src:"/Testing/Test2_Tumor.jpg",className:"card-img-size img-fluid"}),l.a.createElement("div",{className:"d-flex justify-content-center my-5"},l.a.createElement("input",{type:"radio",className:"ms-3",name:"Q2",value:"C",onChange:n}),l.a.createElement("label",null,"C"))),l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5"},l.a.createElement("img",{src:"/Testing/Test2_No_Tumor.jpg",className:"card-img-size img-fluid"}),l.a.createElement("div",{className:"d-flex justify-content-center my-5"},l.a.createElement("input",{type:"radio",className:"ms-3",name:"Q2",value:"D",onChange:n}),l.a.createElement("label",null,"D"))))))};var z=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),m=o[0],u=o[1],d=Object(s.f)();return l.a.createElement("div",{style:{backgroundColor:"#F0F3F4"}},l.a.createElement("div",{className:"container",style:{backgroundColor:"#FFFFFF",width:"100%",height:"100vh"}},l.a.createElement("h1",{className:"text-center pt-5 mb-5 fw-bold"},"Tutorial"),l.a.createElement("p",{className:"text-center"},"Showing ",a,"/3"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-6 mx-auto",style:{border:"solid 1px black",height:"500px"}},l.a.createElement("img",{src:"/Slideshow/image_0.gif",className:"img-fluid img",style:{width:"100%",height:"100%"}})),l.a.createElement("div",{className:"col-3 mx-auto mt-5 d-flex"},l.a.createElement("button",{onClick:function(){a>=0&&c(function(e){c(e-1);var t=document.querySelector(".img"),n="/Slideshow/image_".concat(e-1)+".gif";t.src=n,document.querySelector(".sum").innerHTML="Next",u(!1),1===a&&u(!0)})},className:"previous sub",disabled:m},"\xab Previous"),l.a.createElement("div",{style:{width:"80px"}}),l.a.createElement("button",{onClick:function(){a<=4&&c(function(e){c(e+1);var t=document.querySelector(".img"),n="/Slideshow/image_".concat(e+1)+".gif";if(t.src=n,u(!1),2===a){var l=document.querySelector(".sum");console.log(a),l.innerHTML="Continue"}3===a&&(console.log("hey"),document.querySelector(".img").src="/Slideshow/image_0.gif",d("/Test"))})},className:"next sum"},"Next \xbb")))))};var P=function(e){var t=e.TestAnswers,a=e.setTestanswers,n=function(e){var n=e.target,l=n.name,c=n.value;a(Object(u.a)(Object(u.a)({},t),{},Object(m.a)({},l,c)))};return l.a.createElement("div",null,l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"row justify-content-around py-4"},l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5"},l.a.createElement("img",{src:"/Testing/Test3_correct_annotated.jpg",className:"card-img-size img-fluid"}),l.a.createElement("div",{className:"d-flex justify-content-center my-5"},l.a.createElement("input",{type:"radio",className:"ms-3",name:"Q3",value:"E",onChange:n}),l.a.createElement("label",null,"E"))),l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5"},l.a.createElement("img",{src:"/Testing/Test3_wrong_annotated.jpg",className:"card-img-size img-fluid"}),l.a.createElement("div",{className:"d-flex justify-content-center my-5"},l.a.createElement("input",{type:"radio",className:"ms-3",name:"Q3",value:"F",onChange:n}),l.a.createElement("label",null,"F"))))))};var B=function(e){var t=e.TestAnswers,a=e.setTestanswers,n=function(e){var n=e.target,l=n.name,c=n.value;a(Object(u.a)(Object(u.a)({},t),{},Object(m.a)({},l,c)))};return l.a.createElement("div",{className:"Container"},l.a.createElement("div",{className:"row justify-content-around py-4"},l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5"},l.a.createElement("img",{src:"/Testing/Test1_Tumor.jpg",className:"card-img-size img-fluid"}),l.a.createElement("div",{className:"d-flex justify-content-center my-5"},l.a.createElement("label",null,"A"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",className:"ms-3",name:"Q1",value:"A",onChange:n,required:!0})))),l.a.createElement("div",{className:"col-sm-6 col-md-6 col-lg-5 col-xxl-6 col-xl-5"},l.a.createElement("img",{src:"/Testing/Test1_No_Tumor.jpg",className:"card-img-size img-fluid"}),l.a.createElement("div",{className:"d-flex justify-content-center my-5"},l.a.createElement("label",null,"B"),l.a.createElement("p",null,l.a.createElement("input",{type:"radio",className:"ms-3",name:"Q1",value:"B",onChange:n}))))))};var L=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({Q1:"",Q2:"",Q3:""}),o=Object(i.a)(r,2),m=o[0],u=o[1],g=["Select which image contains the tumor","Select which image contains the tumor","Select which image is annotated correctly"],h=Object(s.f)();function E(){document.querySelector(".failure").innerText="Test failed please watch the tutorial again"}function f(){var e=fetch("/Test",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({Q1:m.Q1,Q2:m.Q2,Q3:m.Q3})});404===e.status?window.alert("Testing Failed"):(console.log("Test Successfull"),console.log(e),h("/Task"))}return l.a.createElement(d.a,{fluid:!0},l.a.createElement("div",{className:"test-container"},l.a.createElement("div",{className:"header"},l.a.createElement("h1",{className:"d-inline-block text-center"},"Test your knowledge to get to the task"," "),l.a.createElement("h5",{className:"d-inline-block ms-5 tutorial",style:{cursor:"pointer"},onClick:function(){document.querySelector(".tutorial"),h("/Tutorial1")}},"Tutorial",l.a.createElement("img",{src:"/logo.png",style:{width:"50px"}})),l.a.createElement("h5",null,g[a])),l.a.createElement("div",{className:"body cc",style:{flex:"60%"}},0===a?l.a.createElement(B,{TestAnswers:m,setTestanswers:u}):1===a?l.a.createElement(H,{TestAnswers:m,setTestanswers:u}):2===a?l.a.createElement(P,{TestAnswers:m,setTestanswers:u}):void 0),l.a.createElement("div",{className:"text-center failure mb-4",style:{color:"red"}}),l.a.createElement("div",{className:"footer mb-4"},l.a.createElement("button",{className:"previous",disabled:0===a,onClick:function(){c(function(e){return e-1}),document.querySelector(".failure").innerText=""}},"\xabPrevious"),l.a.createElement("div",{style:{width:"80px"}}),l.a.createElement("button",{className:"next",disabled:a===g.length,onClick:function(){a===g.length-1?"A"===m.Q1&&"C"===m.Q2&&"E"===m.Q3?f():"A"===m.Q1&&"C"===m.Q2&&"F"===m.Q3?f():"A"===m.Q1&&"D"===m.Q2&&"E"===m.Q3?f():"A"===m.Q1&&"D"===m.Q2&&"F"===m.Q3?E():"B"===m.Q1&&"C"===m.Q2&&"E"===m.Q3?f():"B"===m.Q1&&"C"===m.Q2&&"F"===m.Q3?E():("B"===m.Q1&&"D"===m.Q2&&m.Q3,E()):document.querySelectorAll("input[type='radio']").forEach(function(e){e.checked||(e.setAttribute("required",""),document.querySelector(".failure").innerText="Select one option"),e.checked&&(c(function(e){return e+1}),document.querySelector(".failure").innerText="")})}},a===g.length-1?"Continue":"Next"))))};var W=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),m=o[0],u=o[1],d=Object(s.f)();return l.a.createElement("div",{style:{backgroundColor:"#F0F3F4"}},l.a.createElement("div",{className:"container",style:{backgroundColor:"#FFFFFF",width:"100%",height:"100vh"}},l.a.createElement("h1",{className:"text-center pt-5 mb-5 fw-bold"},"Slideshow"),l.a.createElement("p",{className:"text-center"},"Showing ",a,"/3"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-6 mx-auto",style:{border:"solid 1px black",height:"500px"}},l.a.createElement("img",{src:"/Slideshow/image_0.gif",className:"img-fluid img",style:{width:"100%",height:"100%"}})),l.a.createElement("div",{className:"col-3 mx-auto mt-5 d-flex"},l.a.createElement("button",{onClick:function(){a>=0&&c(function(e){c(e-1);var t=document.querySelector(".img"),n="/Slideshow/image_".concat(e-1)+".gif";t.src=n,document.querySelector(".sum").innerHTML="Next",u(!1),1===a&&u(!0)})},className:"previous sub",disabled:m},"\xab Previous"),l.a.createElement("div",{style:{width:"80px"}}),l.a.createElement("button",{onClick:function(){a<=4&&c(function(e){c(e+1);var t=document.querySelector(".img"),n="/Slideshow/image_".concat(e+1)+".gif";if(t.src=n,u(!1),2===a){var l=document.querySelector(".sum");console.log(a),l.innerHTML="Continue"}3===a&&(console.log("hey"),document.querySelector(".img").src="/Slideshow/image_0.gif",d("/Test"))})},className:"next sum"},"Next \xbb")))))};var Y=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!0),o=Object(i.a)(r,2),m=o[0],u=o[1],d=Object(s.f)();return l.a.createElement("div",{style:{backgroundColor:"#F0F3F4"}},l.a.createElement("div",{className:"container",style:{backgroundColor:"#FFFFFF",width:"100%",height:"100vh"}},l.a.createElement("h1",{className:"text-center pt-5 mb-5 fw-bold"},"Slideshow"),l.a.createElement("p",{className:"text-center"},"Showing ",a,"/3"),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"col-6 mx-auto",style:{border:"solid 1px black",height:"500px"}},l.a.createElement("img",{src:"/Slideshow/image_0.gif",className:"img-fluid img",style:{width:"100%",height:"100%"}})),l.a.createElement("div",{className:"col-3 mx-auto mt-5 d-flex"},l.a.createElement("button",{onClick:function(){a>=0&&c(function(e){c(e-1);var t=document.querySelector(".img"),n="/Slideshow/image_".concat(e-1)+".gif";t.src=n,document.querySelector(".sum").innerHTML="Next",u(!1),1===a&&u(!0)})},className:"previous sub",disabled:m},"\xab Previous"),l.a.createElement("div",{style:{width:"80px"}}),l.a.createElement("button",{onClick:function(){a<=4&&c(function(e){c(e+1);var t=document.querySelector(".img"),n="/Slideshow/image_".concat(e+1)+".gif";if(t.src=n,u(!1),2===a){var l=document.querySelector(".sum");console.log(a),l.innerHTML="Continue"}3===a&&(console.log("hey"),document.querySelector(".img").src="/Slideshow/image_0.gif",d("/Task"))})},className:"next sum"},"Next \xbb")))))};var X=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,null,l.a.createElement(s.c,null,l.a.createElement(s.a,{path:"/",element:l.a.createElement(h,null)}),l.a.createElement(s.a,{path:"/Description",element:l.a.createElement(E,null)}),l.a.createElement(s.a,{path:"/Tutorial",element:l.a.createElement(z,null)}),l.a.createElement(s.a,{path:"/Tutorial1",element:l.a.createElement(W,null)}),l.a.createElement(s.a,{path:"/Tutorial2",element:l.a.createElement(Y,null)}),l.a.createElement(s.a,{path:"/Test",element:l.a.createElement(L,null)}),l.a.createElement(s.a,{path:"/SlideShow",element:l.a.createElement(B,null)}),l.a.createElement(s.a,{path:"/SlideTwo",element:l.a.createElement(H,null)}),l.a.createElement(s.a,{path:"/FinalSlide",element:l.a.createElement(P,null)}),l.a.createElement(s.a,{path:"/Task",element:l.a.createElement(I,null)}),l.a.createElement(s.a,{path:"/user/:Token",element:l.a.createElement(I,null)}))))};var J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0];return t[1],l.a.createElement(l.a.Fragment,null,a.length>0&&a.map(function(e,t){return l.a.createElement("div",{key:t},"data.token")}),l.a.createElement(X,null))},G=document.getElementById("root");r.a.render(l.a.createElement(J,null),G)},43:function(e,t,a){},71:function(e,t,a){e.exports=a(147)}},[[71,1,2]]]);
//# sourceMappingURL=main.ccac0bbf.chunk.js.map