"use strict";(self.webpackChunkfront_gamesloc=self.webpackChunkfront_gamesloc||[]).push([[186],{623:(P,f,a)=>{a.d(f,{v:()=>_});var n=a(553),c=a(5879),t=a(9862),g=a(589);let _=(()=>{var h;class d{constructor(u,e){this.httpClient=u,this.getService=e,this.baseUrl=n.N.baseUrl}addToFavorites(u){return this.httpClient.post(`${this.baseUrl}/customer/me/favs/add`,u)}removeToFavorites(u){return this.httpClient.post(`${this.baseUrl}/customer/me/favs/remove`,u)}modifyCustomer(u){return this.httpClient.put(`${this.baseUrl}/customer/edit`,u)}modifyAddressCustomer(u){return this.httpClient.put(`${this.baseUrl}/customer/edit/address`,u)}postAComment(u){return this.httpClient.post(this.baseUrl+"/customer/comment/add",u)}getOrders(){return this.getService.getData("/customer/me/orders")}getCities(u){return this.getService.getData("/customer/cities/"+u)}}return(h=d).\u0275fac=function(u){return new(u||h)(c.LFG(t.eN),c.LFG(g.t))},h.\u0275prov=c.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),d})()},3541:(P,f,a)=>{a.r(f),a.d(f,{AuthModule:()=>S});var n=a(6814),c=a(1896),t=a(6223);function g(o){this.message=o}(g.prototype=new Error).name="InvalidCharacterError";var _=typeof window<"u"&&window.atob&&window.atob.bind(window)||function(o){var s=String(o).replace(/=+$/,"");if(s.length%4==1)throw new g("'atob' failed: The string to be decoded is not correctly encoded.");for(var p,r,i=0,m=0,w="";r=s.charAt(m++);~r&&(p=i%4?64*p+r:r,i++%4)?w+=String.fromCharCode(255&p>>(-2*i&6)):0)r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(r);return w};function d(o){this.message=o}(d.prototype=new Error).name="InvalidTokenError";var e=a(5879),v=a(304),l=a(9110),x=a(1538),M=a(7077);function y(o,s){if(1&o&&(e.ynx(0),e._UZ(1,"app-error-message",8),e.BQk()),2&o){const p=e.oxw();e.xp6(1),e.Q6J("errors",p.errors)}}let b=(()=>{var o;class s{constructor(r){this.rootFormGroup=r,this.showPassword=!0,this.forInput=""}toggleShow(){this.showPassword=!this.showPassword}ngOnInit(){this.form=this.rootFormGroup.control}get errors(){return this.form.get(this.forInput)?.errors}checkValidity(){return this.form.get(this.forInput)?.invalid&&(this.form.get(this.forInput)?.touched||this.form.get(this.forInput)?.dirty)}}return(o=s).\u0275fac=function(r){return new(r||o)(e.Y36(t.sg))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-input-password"]],inputs:{forInput:"forInput",textLabel:"textLabel",typeInput:"typeInput",placeholderInput:"placeholderInput"},decls:10,vars:8,consts:[[3,"formGroup"],[1,"container"],[3,"for"],[1,"input-eye"],["placeholder","****",3,"type","id","formControlName"],[3,"click"],[3,"ngClass"],[4,"ngIf"],[3,"errors"]],template:function(r,i){1&r&&(e.ynx(0,0),e.TgZ(1,"div",1)(2,"label",2)(3,"div"),e._uU(4),e.qZA()(),e.TgZ(5,"div",3),e._UZ(6,"input",4),e.TgZ(7,"span",5),e.NdJ("click",function(){return i.toggleShow()}),e._UZ(8,"i",6),e.qZA()(),e.YNc(9,y,2,1,"ng-container",7),e.qZA(),e.BQk()),2&r&&(e.Q6J("formGroup",i.form),e.xp6(2),e.Q6J("for",i.forInput),e.xp6(2),e.Oqu(i.textLabel),e.xp6(2),e.Q6J("type",i.showPassword?"password":"text")("id",i.forInput)("formControlName",i.forInput),e.xp6(2),e.Q6J("ngClass",i.showPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),e.xp6(1),e.Q6J("ngIf",i.checkValidity()))},dependencies:[n.mk,n.O5,t.Fj,t.JJ,t.JL,t.sg,t.u,M.H],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}label[_ngcontent-%COMP%]{display:flex;position:relative}label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fff;color:#19647e;position:relative;top:8px;left:15px;padding:0 5px;z-index:2}.input-eye[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}.input-eye[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:.5px solid #19647e;border-radius:10px;padding:10px;width:100%;position:relative}.input-eye[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:5px;position:absolute;right:10px}@media (min-width: 1024px){.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:15px 10px}}"]}),s})();function T(o,s){1&o&&(e.TgZ(0,"div",13),e._uU(1," Email ou mot de passe incorrect "),e.qZA())}let A=(()=>{var o;class s{constructor(r,i){this.authService=r,this.router=i,this.formGroup=new t.cw({mail:new t.NI(""),password:new t.NI(""),rememberMe:new t.NI("")}),this.showErrorMessage=!1}signin(){let r={username:this.formGroup.get("mail")?.value,password:this.formGroup.get("password")?.value};console.log(r),this.authService.login(r).subscribe({next:i=>this.setTokenInSession(i),error:()=>this.showErrorMessage=!0})}setTokenInSession(r){console.log("ici"),this.authService.isAuth.next(!0);const i=this.formGroup.get("rememberMe")?.value,m=function I(o,s){if("string"!=typeof o)throw new d("Invalid token specified");var p=!0===(s=s||{}).header?0:1;try{return JSON.parse(function h(o){var s=o.replace(/-/g,"+").replace(/_/g,"/");switch(s.length%4){case 0:break;case 2:s+="==";break;case 3:s+="=";break;default:throw"Illegal base64url string!"}try{return decodeURIComponent(_(s).replace(/(.)/g,function(r,i){var m=i.charCodeAt(0).toString(16).toUpperCase();return m.length<2&&(m="0"+m),"%"+m}))}catch{return _(s)}}(o.split(".")[p]))}catch(r){throw new d("Invalid token specified: "+r.message)}}(r.token);!0===i?(localStorage.setItem("token",r.token),localStorage.setItem("subject",m.sub),localStorage.setItem("role",m.role)):(sessionStorage.setItem("token",r.token),sessionStorage.setItem("subject",m.sub),sessionStorage.setItem("role",m.role)),this.router.navigate(["/"])}}return(o=s).\u0275fac=function(r){return new(r||o)(e.Y36(v.e),e.Y36(c.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-connexion-page"]],decls:24,vars:2,consts:[[1,"container"],["action","",1,"cardConnection",3,"formGroup"],["forInput","mail","textLabel","Email","typeInput","texte","placeholderInput","Email"],["forInput","password","textLabel","Mot de passe"],["class","error-message",4,"ngIf"],[1,"check"],[1,"remind-me"],["type","checkbox","name","remind","id","remind","formControlName","rememberMe"],["for","remind"],["routerLink","",1,"link"],["classBtn","btn btn-submit","textBtn","Connexion",3,"click"],[1,"subscribe"],["routerLink","../signin",1,"link"],[1,"error-message"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"h1"),e._uU(2,"Connexion au Compte"),e.qZA(),e.TgZ(3,"h4"),e._uU(4,"D\xe9j\xe0 Client ?"),e.qZA(),e.TgZ(5,"h4"),e._uU(6,"Connectez-vous"),e.qZA(),e.TgZ(7,"form",1),e._UZ(8,"app-input",2)(9,"app-input-password",3),e.YNc(10,T,2,0,"div",4),e.TgZ(11,"div",5)(12,"div",6),e._UZ(13,"input",7),e.TgZ(14,"label",8),e._uU(15,"Se souvenir de moi"),e.qZA()(),e.TgZ(16,"a",9),e._uU(17,"Mot de passe oubli\xe9 ?"),e.qZA()(),e.TgZ(18,"app-btn-component",10),e.NdJ("click",function(){return i.signin()}),e.qZA(),e.TgZ(19,"div",11)(20,"p"),e._uU(21,"Tu n'as pas de compte ?"),e.qZA(),e.TgZ(22,"a",12),e._uU(23,"Enregistre toi ici"),e.qZA()()()()),2&r&&(e.xp6(7),e.Q6J("formGroup",i.formGroup),e.xp6(3),e.Q6J("ngIf",i.showErrorMessage))},dependencies:[n.O5,c.rH,l.a,x.H,b,t._Y,t.Wl,t.JJ,t.JL,t.sg,t.u],styles:[".container[_ngcontent-%COMP%]{padding-bottom:2rem;text-align:center;margin:auto}.container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:var(--font-raleway);font-weight:lighter}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]{border-radius:7px;width:50%;margin:25px auto auto;padding:15px;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   app-input[_ngcontent-%COMP%]{margin:1rem}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media (max-width: 768px){.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]{flex-direction:column}}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   .remind-me[_ngcontent-%COMP%]{display:flex;align-items:center;padding-bottom:15px}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%]   .remind-me[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{margin-right:10px}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{color:var(--blue-primary)}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding-top:30px}@media (min-width: 480px){.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:15px}@media (min-width: 480px){.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-bottom:0}}@media (min-width: 480px){.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]   .subscribe[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{padding-left:10px}}@media (max-width: 768px){.container[_ngcontent-%COMP%]   .cardConnection[_ngcontent-%COMP%]{width:80%;margin-top:1rem;padding:1rem}}@media (max-width: 768px){.container[_ngcontent-%COMP%]{width:80%;margin:auto}}.error-message[_ngcontent-%COMP%]{color:red}"]}),s})();var C=a(7669);const O=o=>{const s=o.get("password"),p=o.get("repeatPassword");return s&&p&&s.value!==p.value?(p.setErrors({passwordMismatch:!0}),{passwordMismatch:!0}):null};var N=a(9229),Z=a(5150);const E=[{path:"",children:[{path:"login",component:A},{path:"signin",component:(()=>{var o;class s{constructor(r,i,m){this.authService=r,this.toaster=i,this.router=m}ngOnInit(){this.form=new t.cw({lastname:new t.NI("",[t.kI.required,t.kI.pattern(C.S.nameRegex)]),firstname:new t.NI("",[t.kI.required,t.kI.pattern(C.S.nameRegex)]),password:new t.NI("",[t.kI.required,t.kI.pattern(C.S.passwordRegex)]),repeatPassword:new t.NI("",[t.kI.required,O]),email:new t.NI("",[t.kI.required,t.kI.pattern(C.S.emailRegex)]),phoneNumber:new t.NI("",[t.kI.required,t.kI.pattern(C.S.phoneNumberRegex)]),streetNumber:new t.NI("",[t.kI.required,t.kI.pattern(C.S.streetNumberRegex)]),complementaryNumber:new t.NI("",[t.kI.pattern(C.S.complementaryNumberRegex)]),streetName:new t.NI("",[t.kI.required,t.kI.pattern(C.S.streetNameRegex)]),complementaryAddress:new t.NI(""),postalCode:new t.NI("",[t.kI.required,t.kI.pattern(C.S.postalCodeRegex)]),cityName:new t.NI("",[t.kI.required,t.kI.pattern(C.S.cityNameRegex)])},{validators:O}),this.form.get("firstname")?.valueChanges.subscribe(()=>{this.formatFirstLetter("firstname")}),this.form.get("lastname")?.valueChanges.subscribe(()=>{this.formatFirstLetter("lastname")}),this.form.get("postalCode")?.valueChanges.subscribe(()=>{this.convertToUppercase("postalCode")}),this.form.get("cityName")?.valueChanges.subscribe(()=>{this.convertToUppercase("cityName")})}isFormValid(){return this.form.valid}submit(){console.log();const r={firstName:this.form.get("firstname")?.value,lastName:this.form.get("lastname")?.value,password:this.form.get("password")?.value,email:this.form.get("email")?.value,phoneNumber:this.form.get("phoneNumber")?.value,numberAddress:this.form.get("streetNumber")?.value,complementaryNumber:this.form.get("complementaryNumber")?.value,streetName:this.form.get("streetName")?.value,complementaryAddress:this.form.get("complementaryAddress")?.value,postalCode:this.form.get("postalCode")?.value,cityName:this.form.get("cityName")?.value};this.authService.createUser(r).subscribe({next:()=>{this.router.navigate(["/"]).then(()=>window.location.reload()).then(()=>this.toaster.success("Utilisateur cr\xe9er !"))},error:()=>this.toaster.error("Erreur lors de la cr\xe9ation")})}formatFirstLetter(r){const i=this.form.get(r)?.value;i&&this.form.get(r)?.setValue(i.charAt(0).toUpperCase()+i.slice(1),{emitEvent:!1})}convertToUppercase(r){const i=this.form.get(r)?.value;i&&this.form.get(r)?.setValue(i.toUpperCase(),{emitEvent:!1})}}return(o=s).\u0275fac=function(r){return new(r||o)(e.Y36(v.e),e.Y36(N._W),e.Y36(c.F0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-inscription-page"]],decls:30,vars:2,consts:[[1,"hugeContainer"],[1,"container"],[1,"welcomeTexte"],[1,"welcomeTexteH1"],[1,"welcomeTexteP"],[1,"formDiv"],[1,"formDivH1"],[3,"formGroup","ngSubmit"],[1,"double-input"],["forInput","lastname","textLabel","Nom *","typeInput","text","placeholderInput","Dupont","id","lastname"],["forInput","firstname","textLabel","Pr\xe9nom *","typeInput","text","placeholderInput","Jean"],["forInput","email","textLabel","E-mail *","typeInput","email","placeholderInput","jean-dupont@gmail.com"],["forInput","password","textLabel","Mot de passe *"],["forInput","repeatPassword","textLabel","R\xe9p\xe9tez le mot de passe *"],["forInput","phoneNumber","textLabel","T\xe9l\xe9phone *","typeInput","phone","placeholderInput","+33606060606"],["forInput","streetNumber","textLabel","N\xb0 Rue *","typeInput","number","placeholderInput","22"],["forInput","complementaryNumber","textLabel","Compl\xe9ment de num\xe9ro","typeInput","text","placeholderInput","BIS, TER"],["forInput","streetName","textLabel","Rue *","typeInput","text","placeholderInput","Rue Dupont"],["forInput","complementaryAddress","textLabel","Compl\xe9ment d'adresse","typeInput","text","placeholderInput","appt 4"],[1,"btn-subscribe"],["classBtn","btn-connexionPage btn","textBtn","Inscription",3,"disabled"]],template:function(r,i){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5,"Bienvenue sur GamesLoc"),e.qZA()(),e.TgZ(6,"div",4)(7,"p"),e._uU(8,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at, culpa cumque earum excepturi, fuga illo ipsum labore modi odit, qui repudiandae sunt totam. Accusamus deleniti ipsa quia similique Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi dolor facere, fuga illo itaque minima nemo non perferendis, quibusdam repellat, sit vero voluptas! Ab consequatur dolores ex molestia Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium beatae commodi exercitationem fugiat in incidunt iure laudantium maiores modi molestias nihil, officiis provident, quidem quod ratione recusandae totam veritatis voluptatibus?"),e.qZA()()(),e.TgZ(9,"div",5)(10,"div",6)(11,"h1"),e._uU(12,"Nous rejoindre"),e.qZA()(),e.TgZ(13,"form",7),e.NdJ("ngSubmit",function(){return i.submit()}),e.TgZ(14,"div",8),e._UZ(15,"app-input",9)(16,"app-input",10),e.qZA(),e._UZ(17,"app-input",11)(18,"app-input-password",12)(19,"app-input-password",13)(20,"app-input",14),e.TgZ(21,"div",8),e._UZ(22,"app-input",15)(23,"app-input",16),e.qZA(),e.TgZ(24,"div",8),e._UZ(25,"app-input",17)(26,"app-input",18),e.qZA(),e._UZ(27,"app-select"),e.TgZ(28,"div",19),e._UZ(29,"app-btn-component",20),e.qZA()()()()()),2&r&&(e.xp6(13),e.Q6J("formGroup",i.form),e.xp6(16),e.Q6J("disabled",!i.isFormValid()))},dependencies:[l.a,x.H,Z.H,b,t._Y,t.JL,t.sg],styles:[".welcomeTexte[_ngcontent-%COMP%]{display:none}.formDiv[_ngcontent-%COMP%]{display:flex;flex-direction:column;text-align:center;padding:20px!important}.formDiv[_ngcontent-%COMP%]   .btn-subscribe[_ngcontent-%COMP%]{padding-top:15px}@media (min-width: 1024px){.hugeContainer[_ngcontent-%COMP%]{padding:40px}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;overflow:hidden;width:80%;margin:auto;border-radius:7px;box-shadow:#32325d40 0 2px 5px -1px,#0000004d 0 1px 3px -1px}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .welcomeTexte[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;text-align:justify;align-items:center;padding:70px;background-color:var(--primary);width:50%}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .welcomeTexte[_ngcontent-%COMP%]   .welcomeTexteH1[_ngcontent-%COMP%]{padding-bottom:25px}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]{width:50%;padding:80px}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   .formDivH1[_ngcontent-%COMP%]{padding-bottom:25px}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   .double-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.hugeContainer[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .formDiv[_ngcontent-%COMP%]   .double-input[_ngcontent-%COMP%]   app-input[_ngcontent-%COMP%]{width:49%}}.invalid[_ngcontent-%COMP%]{background-color:gray}"]}),s})()}]}];let k=(()=>{var o;class s{}return(o=s).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.Bz.forChild(E),c.Bz]}),s})();var U=a(6208);let S=(()=>{var o;class s{}return(o=s).\u0275fac=function(r){return new(r||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[n.ez,k,U.m,t.UX]}),s})()},7077:(P,f,a)=>{a.d(f,{H:()=>t});var n=a(7669),c=a(5879);let t=(()=>{var g;class _{constructor(){this.control=null,this.errors=null,this.errorMessage=""}ngOnChanges(){if(this.errors&&(this.errors.required&&(this.errorMessage="Champ requis"),this.errors.minlength&&(this.errorMessage=" Champs trop court"),this.errors.passwordMismatch&&(this.errorMessage=" Les mots de passes doivent \xeatre identiques"),this.errors.pattern))switch(this.errorMessage="Format incorrect",this.errors.pattern.requiredPattern){case n.S.nameRegex.toString():this.errorMessage="Veuillez saisir un nom/pr\xe9nom avec au moins 2 caract\xe8res, comportant uniquement des lettres";break;case n.S.emailRegex.toString():this.errorMessage="Veuillez saisir une adresse email valide";break;case n.S.phoneNumberRegex.toString():this.errorMessage="Veuillez saisir un num\xe9ro de t\xe9l\xe9phone de 10 chiffres";break;case n.S.passwordRegex.toString():this.errorMessage="Veuillez saisir un mot de passe d'au moins 8 caract\xe8res avec au moins une majuscule, une minuscule et un caract\xe8re sp\xe9cial(#=@$!%?&^*,;_-)";break;case n.S.complementaryNumberRegex.toString():this.errorMessage="la valeur peut \xeatre uniquement BIS/TER/QUARTER";break;default:this.errorMessage="Format incorrect"}}}return(g=_).\u0275fac=function(d){return new(d||g)},g.\u0275cmp=c.Xpm({type:g,selectors:[["app-error-message"]],inputs:{control:"control",errors:"errors"},features:[c.TTD],decls:2,vars:1,consts:[[1,"error-message"]],template:function(d,I){1&d&&(c.TgZ(0,"div",0),c._uU(1),c.qZA()),2&d&&(c.xp6(1),c.hij(" ",I.errorMessage,"\n"))},styles:[".error-message[_ngcontent-%COMP%]{color:red;font-size:.9em}"]}),_})()},9110:(P,f,a)=>{a.d(f,{a:()=>u});var n=a(5879),c=a(6223),t=a(6814),g=a(7077);function _(e,v){if(1&e&&n._UZ(0,"textarea",6),2&e){const l=n.oxw();n.s9C("placeholder",l.placeholderInput),n.s9C("id",l.forInput),n.s9C("formControlName",l.forInput)}}function h(e,v){if(1&e&&n._UZ(0,"input",7),2&e){const l=n.oxw();n.s9C("type",l.typeInput),n.s9C("placeholder",l.placeholderInput),n.s9C("id",l.forInput),n.s9C("formControlName",l.forInput),n.Q6J("readonly",l.readonly)}}function d(e,v){if(1&e&&(n.ynx(0),n._UZ(1,"app-error-message",8),n.BQk()),2&e){const l=n.oxw();n.xp6(1),n.Q6J("errors",l.errors)}}const I=["*"];let u=(()=>{var e;class v{constructor(x){this.rootFormGroup=x,this.readonly=!1,this.isTextArea=!1,this.forInput=""}ngOnInit(){this.form=this.rootFormGroup.control}get errors(){return this.form.get(this.forInput)?.errors}checkValidity(){return this.form.get(this.forInput)?.invalid&&(this.form.get(this.forInput)?.touched||this.form.get(this.forInput)?.dirty)}}return(e=v).\u0275fac=function(x){return new(x||e)(n.Y36(c.sg))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-input"]],inputs:{forInput:"forInput",textLabel:"textLabel",typeInput:"typeInput",placeholderInput:"placeholderInput",regex:"regex",readonly:"readonly",isTextArea:"isTextArea"},ngContentSelectors:I,decls:9,vars:6,consts:[[3,"formGroup"],[1,"container"],[3,"for"],[3,"placeholder","id","formControlName",4,"ngIf"],[3,"type","placeholder","id","formControlName","readonly",4,"ngIf"],[4,"ngIf"],[3,"placeholder","id","formControlName"],[3,"type","placeholder","id","formControlName","readonly"],[3,"errors"]],template:function(x,M){1&x&&(n.F$t(),n.ynx(0,0),n.TgZ(1,"div",1)(2,"label",2)(3,"div"),n._uU(4),n.qZA()(),n.YNc(5,_,1,3,"textarea",3),n.YNc(6,h,1,5,"input",4),n.YNc(7,d,2,1,"ng-container",5),n.Hsn(8),n.qZA(),n.BQk()),2&x&&(n.Q6J("formGroup",M.form),n.xp6(2),n.s9C("for",M.forInput),n.xp6(2),n.Oqu(M.textLabel),n.xp6(1),n.Q6J("ngIf",M.isTextArea),n.xp6(1),n.Q6J("ngIf",!M.isTextArea),n.xp6(1),n.Q6J("ngIf",M.checkValidity()))},dependencies:[t.O5,c.Fj,c.JJ,c.JL,c.sg,c.u,g.H],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;position:relative}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fff;color:#19647e;position:relative;top:8px;left:15px;padding:0 5px}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:.5px solid #19647e;border-radius:10px;padding:10px 5px}@media (min-width: 1024px){.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:15px 10px}}"]}),v})()},7669:(P,f,a)=>{a.d(f,{S:()=>n});const n={nameRegex:/^[a-zA-Z\xe0\xe1\xe2\xe4\xe3\xe5\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf1\xf2\xf3\xf4\xf6\xf5\xf8\xf9\xfa\xfb\xfc\xfd\xff'\-\s]{2,}$/,emailRegex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,phoneNumberRegex:/^[0-9]{10}$/,passwordRegex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#=@$!%?&^*,;_-])[A-Za-z\d#=@$!%?&^*,;_-]{8,50}$/,streetNumberRegex:/^\d+\s?[a-zA-Z]?(?:\s?-\s?\d+)?$/,complementaryNumberRegex:/^\s?(?:BIS|TER|QUARTER)?$/,postalCodeRegex:/^(?:\d{5}|2A\d{3}|2B\d{3})$/,streetNameRegex:/^[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]['a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff0-9\s,'\u2019\-]*$/,cityNameRegex:/^[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff\s'\-]*$/,integerRegex:/^[0-9]+$/,decimalRegex:/^[0-9]+(\.[0-9]+)?$/}}}]);