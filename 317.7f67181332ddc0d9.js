"use strict";(self.webpackChunkangular_blog=self.webpackChunkangular_blog||[]).push([[317],{7317:(nt,f,l)=>{l.r(f),l.d(f,{AdminModule:()=>et});var s=l(9808),u=l(1695),i=l(2382),t=l(5e3),p=l(3985);function Z(n,r){if(1&n&&(t.TgZ(0,"div",10),t._uU(1),t.qZA()),2&n){const e=r.ngIf;t.xp6(1),t.hij(" ",e," ")}}function b(n,r){if(1&n&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.hij(" ",e.message," ")}}function x(n,r){1&n&&(t.TgZ(0,"small"),t._uU(1," Required field "),t.qZA())}function C(n,r){1&n&&(t.TgZ(0,"small"),t._uU(1," Input correct email format *@* "),t.qZA())}function A(n,r){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,x,2,0,"small",13),t.YNc(2,C,2,0,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.form.get("email").errors?null:e.form.get("email").errors.required),t.xp6(1),t.Q6J("ngIf",null==e.form.get("email").errors?null:e.form.get("email").errors.email)}}function T(n,r){1&n&&(t.TgZ(0,"small"),t._uU(1," Required field "),t.qZA())}function q(n,r){if(1&n&&(t.TgZ(0,"small"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.AsE(" Password should have min ",null==e.form.get("password").errors?null:e.form.get("password").errors.minlength.requiredLength," characters. ",(null==e.form.get("password").errors?null:e.form.get("password").errors.minlength.requiredLength)-(null==e.form.get("password").errors?null:e.form.get("password").errors.minlength.actualLength)," characters left. ")}}function w(n,r){if(1&n&&(t.TgZ(0,"div",12),t.YNc(1,T,2,0,"small",13),t.YNc(2,q,2,2,"small",13),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.form.get("password").errors?null:e.form.get("password").errors.required),t.xp6(1),t.Q6J("ngIf",null==e.form.get("password").errors?null:e.form.get("password").errors.minlength)}}const h=function(n){return{invalid:n}};let y=(()=>{class n{constructor(e,o,a){this.auth=e,this.router=o,this.route=a,this.submitted=!1}ngOnInit(){this.message=null,this.route.queryParams.subscribe(e=>{e.loginAgain&&(this.message="You cannot access to this page. Authentification required.")}),this.form=new i.cw({email:new i.NI(null,[i.kI.required,i.kI.email]),password:new i.NI(null,[i.kI.required,i.kI.minLength(6)])})}submit(){if(this.form.invalid)return;const e={email:this.form.value.email,password:this.form.value.password};this.submitted=!0,this.auth.login(e).subscribe(()=>{this.form.reset(),this.submitted=!1,this.router.navigate(["/admin","dashboard"])},()=>{this.submitted=!1})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(p.J),t.Y36(u.F0),t.Y36(u.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-page"]],decls:18,vars:14,consts:[[1,"card",3,"formGroup","ngSubmit"],["class","alert-danger",4,"ngIf"],["class","alert-info",4,"ngIf"],[1,"form-control",3,"ngClass"],["for","email"],["id","email","type","email","formControlName","email"],["class","validation",4,"ngIf"],["for","password"],["id","password","type","password","formControlName","password"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"alert-danger"],[1,"alert-info"],[1,"validation"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(1,"h2"),t._uU(2,"Admin panel"),t.qZA(),t.YNc(3,Z,2,1,"div",1),t.ALo(4,"async"),t.YNc(5,b,2,1,"div",2),t.TgZ(6,"div",3)(7,"label",4),t._uU(8,"Email:"),t.qZA(),t._UZ(9,"input",5),t.YNc(10,A,3,2,"div",6),t.qZA(),t.TgZ(11,"div",3)(12,"label",7),t._uU(13,"Password:"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,w,3,2,"div",6),t.qZA(),t.TgZ(16,"button",9),t._uU(17," Login "),t.qZA()()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("ngIf",t.lcZ(4,8,o.auth.error$)),t.xp6(2),t.Q6J("ngIf",o.message),t.xp6(1),t.Q6J("ngClass",t.VKq(10,h,o.form.get("email").touched&&o.form.get("email").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("email").touched&&o.form.get("email").invalid),t.xp6(1),t.Q6J("ngClass",t.VKq(12,h,o.form.get("password").touched&&o.form.get("password").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("password").touched&&o.form.get("password").invalid),t.xp6(1),t.Q6J("disabled",o.form.invalid||o.submitted))},directives:[i._Y,i.JL,i.sg,s.O5,s.mk,i.Fj,i.JJ,i.u],pipes:[s.Ov],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}.btn[_ngcontent-%COMP%]{margin-top:1rem}"]}),n})();var P=l(7579);let c=(()=>{class n{constructor(){this.alert$=new P.x}success(e){this.alert$.next({type:"success",text:e})}warning(e){this.alert$.next({type:"warning",text:e})}danger(e){this.alert$.next({type:"danger",text:e})}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const I=function(n,r,e){return{"alert-success":n,"alert-warning":r,"alert-danger":e}};function J(n,r){if(1&n&&(t.TgZ(0,"div",1)(1,"div",2)(2,"p"),t._uU(3),t.qZA()()()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngClass",t.kEZ(2,I,"success"===e.type,"warning"===e.type,"danger"===e.type)),t.xp6(2),t.Oqu(e.text)}}let U=(()=>{class n{constructor(e){this.alertService=e,this.delay=5e3,this.type="success"}ngOnInit(){this.aSub=this.alertService.alert$.subscribe(e=>{this.text=e.text,this.type=e.type;const o=setTimeout(()=>{clearTimeout(o),this.text=""},this.delay)})}ngOnDestroy(){this.aSub&&this.aSub.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-alert"]],inputs:{delay:"delay"},decls:1,vars:1,consts:[["class","alert-wrap",4,"ngIf"],[1,"alert-wrap"],[1,"alert",3,"ngClass"]],template:function(e,o){1&e&&t.YNc(0,J,4,6,"div",0),2&e&&t.Q6J("ngIf",o.text)},directives:[s.O5,s.mk],styles:[".alert-wrap[_ngcontent-%COMP%]{position:fixed;top:50px;right:50px;z-index:1;padding:8px 12px;box-sizing:border-box}"]}),n})();const S=function(){return["/admin","dashboard"]},L=function(){return["/admin","create"]};function N(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"ul")(1,"li",4)(2,"a",5),t._uU(3,"Main"),t.qZA()(),t.TgZ(4,"li",4)(5,"a",5),t._uU(6,"Create"),t.qZA()(),t.TgZ(7,"li")(8,"a",6),t.NdJ("click",function(a){return t.CHM(e),t.oxw().logout(a)}),t._uU(9,"Exit"),t.qZA()()()}2&n&&(t.xp6(2),t.Q6J("routerLink",t.DdM(2,S)),t.xp6(3),t.Q6J("routerLink",t.DdM(3,L)))}let Y=(()=>{class n{constructor(e,o){this.router=e,this.auth=o}ngOnInit(){}logout(e){e.preventDefault(),this.auth.logout(),this.router.navigate(["/admin","login"])}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(p.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-admin-layout"]],decls:8,vars:1,consts:[[1,"navbar","bg-primary"],["routerLink","/"],[4,"ngIf"],[1,"container"],["routerLinkActive","active"],[3,"routerLink"],["href","#",3,"click"]],template:function(e,o){1&e&&(t._UZ(0,"app-alert"),t.TgZ(1,"nav",0)(2,"h1")(3,"a",1),t._uU(4,"Admin"),t.qZA()(),t.YNc(5,N,10,4,"ul",2),t.qZA(),t.TgZ(6,"div",3),t._UZ(7,"router-outlet"),t.qZA()),2&e&&(t.xp6(5),t.Q6J("ngIf",o.auth.isAuthenticated()))},directives:[U,u.yS,s.O5,u.Od,u.lC],styles:[""]}),n})();var g=l(5237);let Q=(()=>{class n{transform(e,o=""){return o.trim()?e.filter(a=>a.author.toLowerCase().includes(o.toLowerCase())||a.title.toLowerCase().includes(o.toLowerCase())):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"searchPosts",type:n,pure:!0}),n})();const O=function(n){return["/admin","post",n,"edit"]};function k(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"date"),t.qZA(),t.TgZ(10,"td")(11,"button",5),t._uU(12," Open "),t.qZA(),t.TgZ(13,"a",6),t.NdJ("click",function(){const d=t.CHM(e).$implicit;return t.oxw(2).remove(d.id)}),t._uU(14," Delete "),t.qZA()()()}if(2&n){const e=r.$implicit,o=r.index;t.xp6(2),t.Oqu(o+1),t.xp6(2),t.Oqu(e.author),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(t.gM2(9,5,e.date,"medium",null,"ru")),t.xp6(3),t.Q6J("routerLink",t.VKq(10,O,e.id))}}function F(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",2)(2,"input",3),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().searchStr=a}),t.qZA()(),t.TgZ(3,"table")(4,"thead")(5,"tr")(6,"th"),t._uU(7,"#"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Author"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Title"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Date"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Action"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,k,15,12,"tr",4),t.ALo(18,"searchPosts"),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngModel",e.searchStr),t.xp6(15),t.Q6J("ngForOf",t.xi3(18,2,e.posts,e.searchStr))}}function M(n,r){1&n&&(t.TgZ(0,"p",7),t._uU(1,"Nothing to see here..."),t.qZA())}let E=(()=>{class n{constructor(e,o){this.postService=e,this.alertService=o,this.posts=[],this.searchStr=""}ngOnInit(){this.getAllPosts()}ngOnDestroy(){this.pSub&&this.pSub.unsubscribe(),this.dSub&&this.dSub.unsubscribe()}getAllPosts(){this.pSub=this.postService.getAll().subscribe(e=>{this.posts=e})}remove(e){this.dSub=this.postService.remove(e).subscribe(()=>{this.posts=this.posts.filter(o=>o.id!==e),this.alertService.danger("Post was deleted!")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.L),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loader",""],[1,"form-control"],["type","text","placeholder","Search...",3,"ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"btn","btn-light","open",3,"routerLink"],[1,"btn","btn-danger",3,"click"],[1,"text-center"]],template:function(e,o){if(1&e&&(t.YNc(0,F,19,5,"div",0),t.YNc(1,M,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",o.posts.length)("ngIfElse",a)}},directives:[s.O5,i.Fj,i.JJ,i.On,s.sg,u.rH],pipes:[Q,s.uU],styles:[".open[_ngcontent-%COMP%]{margin-right:10px}"]}),n})();var _=l(8727);function D(n,r){1&n&&(t.TgZ(0,"small"),t._uU(1," Required field "),t.qZA())}function G(n,r){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,D,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.form.get("title").errors?null:e.form.get("title").errors.required)}}function j(n,r){1&n&&(t.TgZ(0,"small"),t._uU(1," Required field "),t.qZA())}function z(n,r){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,j,2,0,"small",11),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",null==e.form.get("author").errors?null:e.form.get("author").errors.required)}}const v=function(n){return{invalid:n}};let $=(()=>{class n{constructor(e,o){this.postService=e,this.alertServie=o}ngOnInit(){this.form=new i.cw({title:new i.NI("",[i.kI.required]),author:new i.NI("",[i.kI.required]),text:new i.NI("",[i.kI.required])})}submit(){if(this.form.invalid)return;const e={title:this.form.value.title,author:this.form.value.author,text:this.form.value.text,date:new Date};this.postService.create(e).subscribe(()=>{this.form.reset(),this.alertServie.success("Post successfully created!")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.L),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-create-page"]],decls:19,vars:10,consts:[[3,"formGroup"],[1,"form-control",3,"ngClass"],["for","title"],["id","title","type","text","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["for","author"],["id","author","type","text","formControlName","author"],["type","submit",1,"btn","btn-block","btn-dark",3,"disabled","click"],[1,"validation"],[4,"ngIf"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"h1"),t._uU(2,"Creating new post"),t.qZA(),t.TgZ(3,"div",1)(4,"label",2),t._uU(5,"Title:"),t.qZA(),t._UZ(6,"input",3),t.YNc(7,G,2,1,"div",4),t.qZA(),t.TgZ(8,"div",5)(9,"label"),t._uU(10,"Content:"),t.qZA(),t._UZ(11,"quill-editor",6),t.qZA(),t.TgZ(12,"div",1)(13,"label",7),t._uU(14,"Author:"),t.qZA(),t._UZ(15,"input",8),t.YNc(16,z,2,1,"div",4),t.qZA(),t.TgZ(17,"button",9),t.NdJ("click",function(){return o.submit()}),t._uU(18," Create post "),t.qZA()()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Q6J("ngClass",t.VKq(6,v,o.form.get("title").touched&&o.form.get("title").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("title").touched&&o.form.get("title").invalid),t.xp6(5),t.Q6J("ngClass",t.VKq(8,v,o.form.get("author").touched&&o.form.get("author").invalid)),t.xp6(4),t.Q6J("ngIf",o.form.get("author").touched&&o.form.get("author").invalid),t.xp6(1),t.Q6J("disabled",o.form.invalid))},directives:[i._Y,i.JL,i.sg,s.mk,i.Fj,i.JJ,i.u,s.O5,_.g6],styles:["form[_ngcontent-%COMP%]{max-width:600px;margin:0 auto}"]}),n})();var X=l(3900);function K(n,r){1&n&&(t.TgZ(0,"small"),t._uU(1," Required field "),t.qZA())}function V(n,r){if(1&n&&(t.TgZ(0,"div",10),t.YNc(1,K,2,0,"small",11),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",null==e.form.get("title").errors?null:e.form.get("title").errors.required)}}const H=function(n){return{invalid:n}};function R(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"form",2),t.NdJ("ngSubmit",function(){return t.CHM(e),t.oxw().submit()}),t.TgZ(2,"div",3)(3,"label",4),t._uU(4,"Title:"),t.qZA(),t._UZ(5,"input",5),t.YNc(6,V,2,1,"div",6),t.qZA(),t.TgZ(7,"div",7)(8,"label"),t._uU(9,"Content:"),t.qZA(),t._UZ(10,"quill-editor",8),t.qZA(),t.TgZ(11,"button",9),t._uU(12," Save post "),t.qZA()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.form),t.xp6(1),t.Q6J("ngClass",t.VKq(4,H,e.form.get("title").touched&&e.form.get("title").invalid)),t.xp6(4),t.Q6J("ngIf",e.form.get("title").touched&&e.form.get("title").invalid),t.xp6(5),t.Q6J("disabled",e.form.invalid||e.submitted)}}function B(n,r){1&n&&(t.TgZ(0,"p",12),t._uU(1,"Loading in progress..."),t.qZA())}let W=(()=>{class n{constructor(e,o,a){this.route=e,this.postService=o,this.alertService=a,this.submitted=!1}ngOnInit(){this.route.params.pipe((0,X.w)(e=>this.postService.getPostById(e.id))).subscribe(e=>{this.form=new i.cw({title:new i.NI(e.title,i.kI.required),text:new i.NI(e.text,i.kI.required)}),this.author=e.author,this.id=e.id})}ngOnDestroy(){this.uSub&&this.uSub.unsubscribe()}submit(){if(this.form.invalid)return;const e={id:this.id,title:this.form.value.title,text:this.form.value.text,author:this.author,date:new Date};this.submitted=!0,this.uSub=this.postService.update(e).subscribe(()=>{this.submitted=!1,this.alertService.warning("Post successfully updated!")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(g.L),t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-edit-page"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[3,"formGroup","ngSubmit"],[1,"form-control",3,"ngClass"],["for","title"],["id","title","type","text","formControlName","title"],["class","validation",4,"ngIf"],[1,"form-control"],["formControlName","text"],["type","submit",1,"btn","btn-primary",3,"disabled"],[1,"validation"],[4,"ngIf"],[1,"text-center"]],template:function(e,o){if(1&e&&(t.YNc(0,R,13,6,"div",0),t.YNc(1,B,2,0,"ng-template",null,1,t.W1O)),2&e){const a=t.MAs(2);t.Q6J("ngIf",o.form)("ngIfElse",a)}},directives:[s.O5,i._Y,i.JL,i.sg,s.mk,i.Fj,i.JJ,i.u,_.g6],styles:[""]}),n})();var tt=l(4466);let m=(()=>{class n{constructor(e,o){this.auth=e,this.router=o}canActivate(e,o){return!!this.auth.isAuthenticated()||(this.auth.logout(),this.router.navigate(["/admin","login"],{queryParams:{loginAgain:!0}}),!1)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(p.J),t.LFG(u.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})(),et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[m,c],imports:[[s.ez,i.u5,i.UX,tt.m,u.Bz.forChild([{path:"",component:Y,children:[{path:"",redirectTo:"/admin/login",pathMatch:"full"},{path:"login",component:y},{path:"dashboard",component:E,canActivate:[m]},{path:"create",component:$,canActivate:[m]},{path:"post/:id/edit",component:W,canActivate:[m]}]}])],u.Bz]}),n})()}}]);