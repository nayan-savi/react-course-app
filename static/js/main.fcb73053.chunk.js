(this["webpackJsonpreact-course-app"]=this["webpackJsonpreact-course-app"]||[]).push([[0],{115:function(e,t,a){e.exports=a.p+"static/media/TutotPoint_logo.01b09eab.png"},121:function(e,t,a){e.exports=a(156)},126:function(e,t,a){},127:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(28),c=a.n(l),o=(a(126),a(127),a(128),a(129),a(5)),i=a(40),s=a.n(i),u=a(64),m=a(60),d=a.n(m),p=a(25),E=a(105),f=a(106),h=a(45),b=function(){function e(){Object(E.a)(this,e)}return Object(f.a)(e,[{key:"getCourseNames",value:function(){return["Java","React Hooks","Spring Boot","CSS","HTML","AWS","Android","Game Development"]}},{key:"getConfig",value:function(){return{mode:"no-cors",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET, POST, DELETE, PUT"}}}},{key:"getValidationSchema",value:function(){var e=new Date;return h.b({courseName:h.c().required("CourseName is required!"),startDate:h.a().required("StartDate is required!").min(e,"StartDate should be greater than today."),endDate:h.a().required("EndDate is required!"),trainerName:h.c().required("TrainerName is required!"),availability:h.c().required("Availability is required!")})}},{key:"getToastOptions",value:function(){return{autoClose:2e3,position:"top-right",closeButton:!1}}},{key:"getInitialValues",value:function(){return{id:"",courseName:"",startDate:"",endDate:"",trainerName:"",availability:""}}}]),e}(),v=a(19),N=function(e){return r.a.createElement(v.d,{initialValues:e.initialValues,validationSchema:e.validationSchema,onSubmit:e.onSubmit},r.a.createElement(v.c,null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"courseName",className:"float-left"},"Course Name"),r.a.createElement(v.b,{name:"courseName",component:"select",className:"form-control"},r.a.createElement("option",null),e.courseNames.map((function(e,t){return r.a.createElement("option",{key:t},e)}))),r.a.createElement(v.a,{name:"courseName",className:"errors",component:"div"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"startDate",className:"float-left"},"Start Date"),r.a.createElement(v.b,{type:"date",className:"form-control",name:"startDate"}),r.a.createElement(v.a,{name:"startDate",className:"errors",component:"div"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"endDate",className:"float-left"},"End Date"),r.a.createElement(v.b,{type:"date",className:"form-control",name:"endDate"}),r.a.createElement(v.a,{name:"endDate",className:"errors",component:"div"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"trainerName",className:"float-left"},"Trainer Name"),r.a.createElement(v.b,{type:"text",className:"form-control",name:"trainerName"}),r.a.createElement(v.a,{name:"trainerName",className:"errors",component:"div"})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"availability",className:"float-left"},"Availability"),r.a.createElement(v.b,{type:"text",className:"form-control",name:"availability"}),r.a.createElement(v.a,{name:"availability",className:"errors",component:"div"})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-3"},"Submit"),r.a.createElement("button",{type:"reset",className:"btn btn-secondary"},"Reset")),r.a.createElement(p.a,null)))},g=new b,y=g.getConfig(),C=g.getCourseNames(),D=g.getInitialValues(),w=g.getValidationSchema(),S=function(){var e=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.resetForm,e.next=3,d.a.post("http://localhost:8080/api/create",t,y).then((function(e){console.log("saved"),p.b.success("Data saved.",g.getToastOptions()),n()})).catch((function(e){p.b.error("Issue while saving...")}));case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"addCourse"},r.a.createElement("h1",null,"Add Course"),r.a.createElement(N,{initialValues:D,validationSchema:w,courseNames:C,onSubmit:e}))},k=a(93),A=a(162),O=a(110),T=a(90),x=function(e){return r.a.createElement(A.a,{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"CourseName"),r.a.createElement("th",null,"StartDate"),r.a.createElement("th",null,"EndDate"),r.a.createElement("th",null,"Total Days"),r.a.createElement("th",null,"TrainerName"),r.a.createElement("th",null,"Availability"),r.a.createElement("th",null,"Action"))),r.a.createElement("tbody",null,e.courses.length>0?e.courses.map((function(t){var a=t.id,n=t.courseName,l=t.startDate,c=t.endDate,o=t.days,i=t.trainerName,s=t.availability;return r.a.createElement("tr",{key:a.toString()},r.a.createElement("td",null,n),r.a.createElement("td",null,l),r.a.createElement("td",null,c),r.a.createElement("td",null,o),r.a.createElement("td",null,i),r.a.createElement("td",null,s),r.a.createElement("td",null,r.a.createElement(O.a,{className:"btn btn-primary mr-3",onClick:function(){return e.editRow(t)}},r.a.createElement(T.Icon,{type:"indicator",name:"edit"})),r.a.createElement(O.a,{type:"button",className:"btn btn-danger",onClick:function(){return e.handlerClick(t)}},r.a.createElement(T.Icon,{type:"indicator",name:"delete"})," ")))})):r.a.createElement("tr",null,r.a.createElement("td",{colSpan:"7"},"No records found"))))},j=new b,I=j.getConfig(),q=j.getInitialValues(),V=j.getValidationSchema(),F=j.getCourseNames(),R=function(){var e=Object(n.useState)([]),t=Object(k.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(k.a)(c,2),i=o[0],m=o[1],E=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(t),m(!0),a=t,q.id=a.id,q.courseName=a.courseName,q.startDate=a.startDate,q.endDate=a.endDate,q.trainerName=a.trainerName,q.availability=a.availability;case 3:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.put("http://localhost:8080/api/course",t,I).then((function(){p.b.success("Data updated.",j.getToastOptions()),setTimeout((function(){m(!1)}),2e3)})).catch((function(e){p.b.error("Issue while updating...")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){d.a.get("http://localhost:8080/api/courses",I).then((function(e){l(e.data)})).catch((function(e){return console.log(e)}))}),[a]);return r.a.createElement("div",null,i?r.a.createElement("div",{className:"addCourse"},r.a.createElement("h1",null,"Update Course"),r.a.createElement(N,{initialValues:q,validationSchema:V,courseNames:F,onSubmit:f})):r.a.createElement("div",null,r.a.createElement("h1",null,"Course Details"),r.a.createElement(x,{courses:a,editRow:E,handlerClick:function(e){window.confirm("Are you sure you wish to delete "+e.courseName+" course?")&&d.a.delete("http://localhost:8080/api/delete/"+e.id,I).then((function(t){200===t.status&&(p.b.success("Record Deleted.",j.getToastOptions()),l(a.filter((function(t){return t.id!==e.id}))))})).catch((function(e){p.b.error("Issue while deleting...")}))}}),r.a.createElement(p.a,null)))},B=a(164),L=a(165),P=a(163),W=function(){return r.a.createElement(B.a,{bg:"primary",variant:"dark"},r.a.createElement(L.a,{className:"mr-auto"},r.a.createElement(L.a.Link,{href:"/"},"Home"),r.a.createElement(P.a,{title:"Course",id:"basic-nav-dropdown"},r.a.createElement(P.a.Item,{href:"/react-course-app#/addCourse"},"Add Course"),r.a.createElement(P.a.Item,{href:"/react-course-app#/displayCourse"},"Display Course")),r.a.createElement(L.a.Link,{href:"/react-course-app#/about"},"About")))},H=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Course Application"))},J=a(115),M=a.n(J),G=function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("img",{src:M.a,className:"App-logo",width:"300",height:"300",alt:""}),r.a.createElement("br",null),r.a.createElement("br",null),"by ",r.a.createElement("h3",null,"tutor.point@gmail.com"),r.a.createElement("h1",null,"Course Application"),r.a.createElement("p",null,"We can add, modify, update and delete course records"))},U=function(){return r.a.createElement("div",{className:"addCourse"},r.a.createElement("h1",null,"Course Details"))},$=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found"))},_=function(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:H}),r.a.createElement(o.a,{exact:!0,path:"/addCourse",component:S}),r.a.createElement(o.a,{exact:!0,path:"/displayCourse",component:R}),r.a.createElement(o.a,{exact:!0,path:"/editCourse",component:U}),r.a.createElement(o.a,{exact:!0,path:"/about",component:G}),r.a.createElement(o.a,{component:$})))},z=a(116);var K=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(z.a,{basename:"/react-course-app"},r.a.createElement(_,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[121,1,2]]]);
//# sourceMappingURL=main.fcb73053.chunk.js.map