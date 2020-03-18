(this.webpackJsonptest4=this.webpackJsonptest4||[]).push([[0],{40:function(e,t,a){e.exports=a(70)},45:function(e,t,a){},46:function(e,t,a){},52:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),s=a(19),r=a.n(s),c=(a(45),a(26),a(11)),o=a(2),u=a(3),i=a(5),m=a(4),d=a(6),p=(a(46),a(18)),h=a(36),b=function(e){var t=e.user,a=e.component,n=e.render,s=Object(h.a)(e,["user","component","render"]);return t&&n?l.a.createElement(p.b,Object.assign({},s,{render:n})):l.a.createElement(p.b,Object.assign({},s,{render:function(e){return t?l.a.createElement(a,e):l.a.createElement(p.a,{to:"/"})}}))},f=a(9),E=(a(52),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.b,{to:"/sign-out"},"Sign Out"),l.a.createElement(f.b,{to:"/Subjects"},"Subjects"),l.a.createElement(f.b,{to:"/Feeds"},"Feeds"),l.a.createElement(f.b,{to:"/Students"},"Students"))),g=l.a.createElement(l.a.Fragment,null,l.a.createElement(f.b,{to:"/sign-up"},"Sign Up"),l.a.createElement(f.b,{to:"/sign-in"},"Sign In")),v=l.a.createElement(l.a.Fragment,null,l.a.createElement(f.b,{to:"/"},"Home")),j=function(e){var t=e.user;return l.a.createElement("header",{className:"main-header"},l.a.createElement("h1",null,"School App"),l.a.createElement("nav",null,t&&l.a.createElement("span",null,"Welcome, ",t.email),t?E:g,v))},N=a(10),S={production:"https://calm-springs-76319.herokuapp.com/",development:"http://localhost:".concat(5e3,"/api")},O="localhost"===window.location.hostname?S.development:S.production,C=a(8),y=a.n(C),D=function(e){return y.a.post("".concat(O,"/login"),e)},F={signUpSuccess:"Succesfully registered! You've been signed in as well.",signUpFailure:"Registration failed. Email may be taked, or passwords don't match.",signInSuccess:"Welcome!",signInFailure:"Failed to sign in. Check your email and password and try again.",addSubSuccess:"Subject Added successfully!",addSubFailure:"there is some error in add this subject , already Exis!",signOutSuccess:"Come back soon!",changePasswordSuccess:"Password changed successfully!",changePasswordFailure:"Failed to change passwords. Check your old password and try again."},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).Changehandler=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.SubmitHandeler=function(e){e.preventDefault();var t=a.props,n=t.alert,l=t.history,s=t.setUser,r={admin:{Name:a.state.Name,Email:a.state.Email,Password:a.state.Password,Gender:a.state.Gender,Phone:a.state.Phone}};console.log(r),function(e){return y.a.post("".concat(O,"/register"),e)}(r).then((function(){return D(a.state)})).then((function(e){return s(e.data)})).then((function(){return n(F.signUpSuccess,"success")})).then((function(){return l.push("/")})).catch((function(e){console.error(e),a.setState({Name:"",Email:"",Password:"",Gender:"",Phone:""}),n(F.signUpFailure,"danger")}))},a.state={Name:"",Email:"",Password:"",Gender:"",Phone:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Name,a=e.Email,n=e.Password,s=e.Gender,r=e.Phone;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.SubmitHandeler},l.a.createElement("h3",null,"Sign Up"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"Name",value:t,onChange:this.Changehandler,className:"form-control",placeholder:" name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",name:"Email",value:a,onChange:this.Changehandler,className:"form-control",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"Password",value:n,onChange:this.Changehandler,className:"form-control",placeholder:"Enter password"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Gender"),l.a.createElement("input",{type:"text",name:"Gender",value:s,onChange:this.Changehandler,className:"form-control",placeholder:"Gender"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone"),l.a.createElement("input",{type:"text",name:"Phone",value:r,onChange:this.Changehandler,className:"form-control",placeholder:"966-555-555"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Sign Up"),l.a.createElement("p",{className:"forgot-password text-right"},"Already registered ",l.a.createElement("a",{href:"#/sign-in"},"sign in?"))))}}]),t}(n.Component),w=Object(p.f)(k),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).Changehandler=function(e){a.setState(Object(N.a)({},e.target.name,e.target.value))},a.SubmitHandeler=function(e){e.preventDefault();var t=a.props,n=t.alert,l=t.history,s=t.setUser;D(a.state).then((function(e){return s(e.data)})).then((function(){return n(F.signInSuccess,"success")})).then((function(){return l.push("/")})).catch((function(e){console.error(e),a.setState({Email:"",Password:""}),n(F.signInFailure,"danger")}))},a.state={Email:"",Password:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Email,a=e.Password;return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.SubmitHandeler},l.a.createElement("h3",null,"Sign In"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Email address"),l.a.createElement("input",{type:"email",name:"Email",value:t,onChange:this.Changehandler,className:"form-control",placeholder:"Enter email"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Password"),l.a.createElement("input",{type:"password",name:"Password",value:a,onChange:this.Changehandler,className:"form-control",placeholder:"Enter password"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"},"Submit")))}}]),t}(n.Component),A=Object(p.f)(I),L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.alert,a=e.history,n=e.clearUser;(function(e){return y.a.delete("".concat(O,"/logout"),e,{headers:{Authorization:"Bearer ".concat(e.token)}})})(e.user).finally((function(){return t(F.signOutSuccess,"success")})).finally((function(){return a.push("/")})).finally((function(){return n()}))}},{key:"render",value:function(){return""}}]),t}(n.Component),x=Object(p.f)(L),P=a(24),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={show:!0},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return this.state.show?l.a.createElement(P.a,{key:this.props.index,dismissible:!0,variant:this.props.variant,onClose:function(){return e.setState({show:!1})}},l.a.createElement(P.a.Heading,null,this.props.message)):l.a.createElement(l.a.Fragment,null)}}]),t}(l.a.Component),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentWillMount=function(){a.setState({name:a.props.name,subjectCode:a.props.subjectCode,level:a.props.level})},a.updateSubject=function(e){e.preventDefault(),console.log("update",a.state),a.props.updatetheSubjects(a.props.id,a.state)},a.Changehandler=function(e){e.preventDefault(),console.log(e.target.value),a.setState(Object(N.a)({},e.target.name,e.target.value))},a.deleteSubject=function(e){e.preventDefault(),a.props.deleteSubject(a.props.id)},a.state={Name:"",SubjectCode:"",Level:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.subjectCode,n=e.level;return l.a.createElement("div",{className:"subject"},l.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.Changehandler}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"subjectCode",value:a,onChange:this.Changehandler}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"Level",value:n,onChange:this.Changehandler}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.deleteSubject},"Delete"),l.a.createElement("button",{onClick:this.updateSubject},"Update"))}}]),t}(l.a.Component),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).Changehandler=function(e){console.log(e.target.name),a.setState(Object(N.a)({},e.target.name,e.target.value))},a.SubmitHandeler=function(e){var t=a.props,n=t.alert,l=t.history;e.preventDefault(),console.log("this is state",a.state);var s,r={subject:{Name:a.state.Name,SubjectCode:a.state.SubjectCode,Level:a.state.Level}};console.log(r),(s=r,y.a.post("".concat(O,"/AddNewSub"),s)).then((function(){return n(F.addSubSuccess,"success")})).then((function(){return l.push("/")})).then((function(e){console.log("subject  has been added",e.data),a.props.AddSubject(r)})).catch((function(e){console.log("API error",e),a.setState({Name:"",SubjectCode:"",Level:""})}))},a.state={Name:"",SubjectCode:"",Level:"",Teacher:"",Exam:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Name,a=e.SubjectCode,n=e.Level;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.SubmitHandeler},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"Name",value:t,onChange:this.Changehandler,className:"form-control",placeholder:" Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Code"),l.a.createElement("input",{type:"text",name:"SubjectCode",value:a,onChange:this.Changehandler,className:"form-control",placeholder:" Code"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Level"),l.a.createElement("input",{type:"text",name:"Level",value:n,onChange:this.Changehandler,className:"form-control",placeholder:" Level"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"}," ","submit")))}}]),t}(n.Component),R=Object(p.f)(_),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).deleteSubject=function(e){console.log("The Subject ID to Delete",e),function(e){return y.a.delete("".concat(O,"/subjects/").concat(e))}(e).then((function(t){console.log("The Subject with the ID ".concat(e," has been deleted."));var n=a.props.subjects.filter((function(t){return t._id!==e}));a.props.setSubjects(n)})).catch((function(e){console.log("API ERROR:",e)}))},a.updatetheSubjects=function(e,t){console.log("this is state",e,t);var n={subject:{Name:t.name,SubjectCode:t.subjectCode,Level:t.level}};console.log(n),function(e,t){return y.a.patch("".concat(O,"/subjects/").concat(e),t)}(e,n).then((function(t){var l=Object(c.a)(a.props.subjects),s=a.props.subjects.findIndex((function(t){return t._id===e}));console.log("The Subject with the ID ".concat(e," has been updated."),t.data),l.splice(s,1,n),a.props.setSubjects(l)})).catch((function(e){console.log("API error",e),a.setState({Name:"",SubjectCode:"",Level:""})}))},a.state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("".concat(O,"/subjects")).then((function(t){e.props.setSubjects(t.data.subjects)})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){var e=this,t=l.a.createElement("h4",null,"No Subjects!");return this.props.subjects.length>0&&(t=this.props.subjects.map((function(t,a){return l.a.createElement(U,{name:t.Name,subjectCode:t.SubjectCode,level:t.Level,id:t._id,deleteSubject:e.deleteSubject,updatetheSubjects:e.updatetheSubjects,key:a})}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null,"All Subjects"),t,l.a.createElement(R,{AddSubject:this.props.AddSubjects}))}}]),t}(l.a.Component),M=Object(p.f)(H),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentWillMount=function(){a.setState(Object(N.a)({name:a.props.name,description:a.props.description,date:a.props.date},"date",a.props.endDate))},a.updateFeed=function(e){e.preventDefault(),console.log("update",a.state),a.props.updatetheFeeds(a.props.id,a.state)},a.Changehandler=function(e){e.preventDefault(),console.log(e.target.value),a.setState(Object(N.a)({},e.target.name,e.target.value))},a.deleteFeed=function(e){e.preventDefault(),a.props.deleteFeed(a.props.id)},a.state={Name:"",Description:"",Date:"",EndDate:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.description;return l.a.createElement("div",{className:"feed"},l.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.Changehandler}),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",value:a,onChange:this.Changehandler}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.deleteFeed},"Delete"),l.a.createElement("button",{onClick:this.updateFeed},"Update"))}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).Changehandler=function(e){console.log(e.target.name),a.setState(Object(N.a)({},e.target.name,e.target.value))},a.SubmitHandeler=function(e){var t=a.props,n=t.alert,l=t.history;e.preventDefault(),console.log("this is state",a.state);var s,r={subject:{Name:a.state.Name,Description:a.state.Description,Date:a.state.Date,EndDate:a.state.EndDate}};console.log(r),(s=r,y.a.post("".concat(O,"/AddFeed"),s)).then((function(){return n(F.addFeedSuccess,"success")})).then((function(){return l.push("/")})).then((function(e){console.log("feed has been added",e.data),a.props.AddFeed(r)})).catch((function(e){console.log("API error",e),a.setState({Name:"",Description:"",Date:"",EndDate:""})}))},a.state={Name:"",Description:"",Date:"",EndDate:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.Name,a=e.Description;return l.a.createElement("div",null,l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("form",{onSubmit:this.SubmitHandeler},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"Name",value:t,onChange:this.Changehandler,className:"form-control",placeholder:" Name"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"Description",value:a,onChange:this.Changehandler,className:"form-control",placeholder:" Description"})),l.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block"}," ","submit")))}}]),t}(n.Component),B=Object(p.f)(W),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).deleteFeed=function(e){console.log("The Feed ID to Delete",e),function(e){return y.a.delete("".concat(O,"/feeds/").concat(e))}(e).then((function(t){console.log("The Feed with the ID ".concat(e," has been deleted."));var n=a.props.feeds.filter((function(t){return t._id!==e}));a.props.setFeeds(n)})).catch((function(e){console.log("API ERROR:",e)}))},a.updatetheFeeds=function(e,t){console.log("this is state",e,t);var n={feed:{Name:t.name,Description:t.description,Date:t.date,EndDate:t.endDate}};console.log(n),function(e,t){return y.a.patch("".concat(O,"/feeds/").concat(e),t)}(e,n).then((function(t){var l=Object(c.a)(a.props.feeds),s=a.props.feeds.findIndex((function(t){return t._id===e}));console.log("The Article with the ID ".concat(e," has been updated."),t.data),l.splice(s,1,n),a.props.setFeeds(l)})).catch((function(e){console.log("API error",e),a.setState({Name:"",Description:"",Date:"",EndDate:""})}))},a.state={},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.a.get("".concat(O,"/feeds")).then((function(t){e.props.setFeeds(t.data.feeds)})).catch((function(e){console.log("API ERROR:",e)}))}},{key:"render",value:function(){var e=this,t=l.a.createElement("h4",null,"No Feeds!");return this.props.feeds.length>0&&(t=this.props.feeds.map((function(t,a){return l.a.createElement(T,{name:t.Name,description:t.Description,date:t.date,endDate:t.EndDate,id:t._id,deleteFeed:e.deleteFeed,updatetheFeeds:e.updatetheFeeds,key:a})}))),l.a.createElement(l.a.Fragment,null,l.a.createElement("h3",null," Feeds "),t,l.a.createElement(B,{AddFeed:this.props.AddFeeds}))}}]),t}(l.a.Component),z=Object(p.f)(J),Y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onchange=function(e,t){a.setState(Object(N.a)({},t,e.target.value))},a.state={isedit:!1},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;l.a.createElement("div",null);return this.state.isedit&&l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"First name"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"FirstName")},className:"form-control",id:"email",placeholder:"Enter First name",name:"email"})),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"Last name"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"LastName")},className:"form-control",placeholder:"Enter Last name",name:"pswd"})),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"ID"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"ID")},className:"form-control",placeholder:"Enter ID",name:"pswd"}))),l.a.createElement("label",null,"Gender")," ",l.a.createElement("br",null),l.a.createElement("div",{className:"form-check-inline"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{onChange:function(t){e.onchange(t,"Gender")},value:"Male",type:"radio",className:"form-check-input",name:"optradio"}),"Male")),l.a.createElement("div",{className:"form-check-inline"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{onChange:function(t){e.onchange(t,"Gender")},type:"radio",className:"form-check-input",value:"Female",name:"optradio"}),"Female")),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Save")),l.a.createElement("tr",null,l.a.createElement("td",null,this.props.FirstName),l.a.createElement("td",null,this.props.LastName),l.a.createElement("td",null,this.props.id),l.a.createElement("td",null,this.props.all.Gender),l.a.createElement("td",null,l.a.createElement("button",{onClick:function(t){e.props.deleteStudent(e.props.all._id)},className:"btn btn-danger"},"Delete")," ",l.a.createElement("button",{onClick:function(){e.props.editStudent("true",{FirstName:e.props.FirstName,LastName:e.props.LastName,Gender:e.props.all.Gender,ID:e.props.all.ID,_id:e.props.all._id})},className:"btn btn-secondary"},"Edit")))}}]),t}(l.a.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onchange=function(e,t){a.setState(Object(N.a)({},t,e.target.value))},a.SubmitHandeler=function(e){e.preventDefault(),console.log("this is state",a.state);a.state.FirstName,a.state.LastName,a.state.Gender,a.state.ID},a.AddNewStuddent=function(){var e=a.state;console.log("old student array",a.props.students),function(e){return y.a.post("".concat(O,"/students"),{student:e})}(e).then((function(t){console.log(t),console.log(a.props.students);var n=Object(c.a)(a.props.students),l=n.indexOf(t.data);console.log("res data",t.data),console.log("data",e),-1!==l||n.push(t.data.student),console.log("new array",n),a.props.setStudents(n),console.log("main student array from",a.props.students),a.props.setShowform(!1)})).catch((function(e){console.log("API Error:",e)}))},a.state={FirstName:"",LastName:"",Gender:"",ID:"",subject:[]},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;l.a.createElement("option",null," No subjects ");return this.state.subjects&&this.state.subjects.map((function(e,t){return l.a.createElement("option",{key:t,id:e._id}," ",e.Name)})),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"First name"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"FirstName")},className:"form-control",id:"email",placeholder:"Enter First name",name:"email"})),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"Last name"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"LastName")},className:"form-control",placeholder:"Enter Last name",name:"pswd"})),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"ID"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"ID")},className:"form-control",placeholder:"Enter ID",name:"pswd"}))),l.a.createElement("label",null,"Gender")," ",l.a.createElement("br",null),l.a.createElement("div",{className:"form-check-inline"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{onChange:function(t){e.onchange(t,"Gender")},value:"Male",type:"radio",className:"form-check-input",name:"optradio"}),"Male")),l.a.createElement("div",{className:"form-check-inline"},l.a.createElement("label",{className:"form-check-label"},l.a.createElement("input",{onChange:function(t){e.onchange(t,"Gender")},type:"radio",className:"form-check-input",value:"Female",name:"optradio"}),"Female")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",onClick:this.AddNewStuddent,className:"btn btn-primary"},"Save"))}}]),t}(l.a.Component),K=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={students:[],subjects:[],isadd:!1,isedit:!1,tempstudent:{},FirstName:"",LastName:"",ID:""},a.setStudents=function(e){console.log("students",e),a.setState({students:e})},a.setShowform=function(e){a.setState({isadd:e})},a.getAll=function(){(console.log(O),y.a.get("".concat(O,"/students"))).then((function(e){console.log("res",e.data.students),a.setState({students:e.data.students})})).catch((function(e){console.log("api error:",e)}))},a.deleteStudent=function(e){console.log("the student id to delete",e),function(e){return y.a.delete("".concat(O,"/students/").concat(e))}(e).then((function(t){console.log("the student with id ".concat(e," has been deleted."));var n=a.state.students.filter((function(t){return t._id!==e}));a.setState({students:n})})).catch((function(e){console.log("API Error:",e)}))},a.addnewstudent=function(e){e.preventDefault();var t=a.state.isadd;a.setState({isadd:!t})},a.editStudent=function(e,t){console.log("student for update",t),a.setState({isedit:e,tempstudent:t})},a.onchange=function(e,t){e.preventDefault(),a.setState(Object(N.a)({},t,e.target.value)),a.setState({ID:a.state.tempstudent.ID}),a.setState({_id:a.state.tempstudent._id})},a.handleUpdate=function(){var e,t,n={FirstName:a.state.FirstName,LastName:a.state.LastName,ID:a.state.ID,Gender:a.state.tempstudent.Gender,_id:a.state._id};console.log(n),(e=n,t=a.state._id,y.a.patch("".concat(O,"/students/").concat(t),{student:e})).then((function(e){console.log(a.state.students),console.log("temp array for student",a.state.tempstudent);var t=Object(c.a)(a.state.students),l=t.indexOf(a.state.tempstudent),s=a.state.students.findIndex((function(e){return e._id===a.state._id}));console.log("indexOfStudent",s),console.log("res data",e);var r=Object(c.a)(a.state.students);r=t[s],console.log("new student ",r),console.log("index ",l),r=n;var o=Object(c.a)(a.state.students);o[s]=r,console.log("new a",r),a.setStudents(o),a.setState({isedit:!1})})).catch((function(e){console.log("API Error:",e)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAll()}},{key:"render",value:function(){var e=this,t=l.a.createElement("h4",null,"No Students");this.state.students.length>0&&(t=this.state.students.map((function(t,a){return l.a.createElement(Y,{editStudent:e.editStudent,all:t,FirstName:t.FirstName,LastName:t.LastName,key:a,id:t.ID,deleteStudent:e.deleteStudent})})));var a=l.a.createElement("div",null);this.state.isadd&&(a=l.a.createElement(q,{setShowform:this.setShowform,students:this.state.students,setStudents:function(t){e.setStudents(t)}}));var n=l.a.createElement("div",null);return this.state.isedit&&(n=l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"First name"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"FirstName")},className:"form-control",id:"email",placeholder:this.state.tempstudent.FirstName,name:"FirstName",value:this.state.FirstName})),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"Last name"),l.a.createElement("input",{type:"text",onChange:function(t){e.onchange(t,"LastName")},className:"form-control",placeholder:this.state.tempstudent.LastName,name:"LastName",value:this.state.LastName})),l.a.createElement("div",{className:"col"},l.a.createElement("label",null,"ID"),l.a.createElement("input",{disabled:!0,type:"number",onChange:function(t){e.onchange(t,"ID")},className:"form-control",placeholder:this.state.tempstudent.ID,name:"ID"}))),l.a.createElement("label",null,"Gender : ")," ",this.state.tempstudent.Gender,l.a.createElement("br",null),l.a.createElement("button",{onClick:this.handleUpdate,type:"submit",className:"btn btn-primary"},"Save"))),l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"Student List"),a,n,l.a.createElement("br",null),l.a.createElement("button",{className:"btn btn-primary",onClick:this.addnewstudent},"Add new Student"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("table",{className:"table table-hover"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Firstname"),l.a.createElement("th",null,"Lastname"),l.a.createElement("th",null,"ID"),l.a.createElement("th",null,"Gender"),l.a.createElement("th",null,"Actions"))),l.a.createElement("tbody",null,t)))}}]),t}(l.a.Component),Q=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).setUser=function(t){return e.setState({user:t})},e.clearUser=function(){return e.setState({user:null})},e.alert=function(t,a){e.setState({alerts:[].concat(Object(c.a)(e.state.alerts),[{message:t,type:a}])})},e.setSubjects=function(t){e.setState({subjects:t})},e.AddSubjects=function(t){e.setState({subjects:[].concat(Object(c.a)(e.state.subjects),[t])})},e.setFeeds=function(t){e.setState({feeds:t})},e.AddFeeds=function(t){e.setState({feeds:[].concat(Object(c.a)(e.state.feeds),[t])})},e.state={user:null,alerts:[],subjects:[],feeds:[]},e}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.alerts,n=t.user;t.subjects;return l.a.createElement(l.a.Fragment,null,l.a.createElement(j,{user:n}),a.map((function(e,t){return l.a.createElement(G,{key:t,variant:e.type,message:e.message})})),l.a.createElement("main",{className:"container"},l.a.createElement(p.b,{path:"/sign-up",render:function(){return l.a.createElement(w,{alert:e.alert,setUser:e.setUser})}}),l.a.createElement(p.b,{path:"/sign-in",render:function(){return l.a.createElement(A,{alert:e.alert,setUser:e.setUser})}}),l.a.createElement(b,{user:n,path:"/sign-out",render:function(){return l.a.createElement(x,{alert:e.alert,clearUser:e.clearUser,user:n})}}),l.a.createElement(b,{user:n,path:"/Subjects",render:function(){return l.a.createElement(M,{alert:e.alert,user:n,subjects:e.state.subjects,setSubjects:e.setSubjects,AddSubjects:e.AddSubjects})}}),l.a.createElement(b,{user:n,path:"/Students",render:function(){return l.a.createElement(K,null)}}),l.a.createElement(b,{user:n,path:"/Feeds",render:function(){return l.a.createElement(z,{alert:e.alert,user:n,feeds:e.state.feeds,setFeeds:e.setFeeds,AddFeeds:e.AddFeeds})}})))}}]),t}(n.Component),V=l.a.createElement(f.a,null,l.a.createElement(Q,null));r.a.render(V,document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.098b7e24.chunk.js.map