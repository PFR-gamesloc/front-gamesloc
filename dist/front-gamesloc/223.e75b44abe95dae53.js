"use strict";(self.webpackChunkfront_gamesloc=self.webpackChunkfront_gamesloc||[]).push([[223],{5631:(T,d,i)=>{i.d(d,{J:()=>C});var t=i(9862),a=i(5879);let C=(()=>{var c;class m{constructor(l){this.http=l,this.baseUrl="http://localhost:8080"}upload(l){const E=new FormData;E.append("file",l);const v=new t.aW("POST",`${this.baseUrl}/admin/game/upload`,E,{reportProgress:!0,responseType:"json"});return this.http.request(v)}getFile(l){return this.http.get(`${this.baseUrl}/product/img/${l}`,{responseType:"blob"})}}return(c=m).\u0275fac=function(l){return new(l||c)(a.LFG(t.eN))},c.\u0275prov=a.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),m})()},7077:(T,d,i)=>{i.d(d,{H:()=>C});var t=i(4336),a=i(5879);let C=(()=>{var c;class m{constructor(){this.control=null,this.errors=null,this.errorMessage=""}ngOnChanges(){if(this.errors&&(this.errors.required&&(this.errorMessage="Champ requis"),this.errors.minlength&&(this.errorMessage=" Champs trop court"),this.errors.passwordMismatch&&(this.errorMessage=" Les mots de passes doivent \xeatre identiques"),this.errors.pattern))switch(this.errorMessage="Format incorrect",this.errors.pattern.requiredPattern){case t.O.nameRegex.toString():this.errorMessage="Veuillez saisir un nom/pr\xe9nom avec au moins 2 caract\xe8res, comportant uniquement des lettres";break;case t.O.emailRegex.toString():this.errorMessage="Veuillez saisir une adresse email valide";break;case t.O.phoneNumberRegex.toString():this.errorMessage="Veuillez saisir un num\xe9ro de t\xe9l\xe9phone de 10 chiffres";break;case t.O.passwordRegex.toString():this.errorMessage="Veuillez saisir un mot de passe d'au moins 8 caract\xe8res avec au moins une majuscule, une minuscule et un caract\xe8re sp\xe9cial";break;case t.O.complementaryNumberRegex.toString():this.errorMessage="la valeur peut \xeatre uniquement BIS/TER/QUARTER";break;default:this.errorMessage="Format incorrect"}}}return(c=m).\u0275fac=function(l){return new(l||c)},c.\u0275cmp=a.Xpm({type:c,selectors:[["app-error-message"]],inputs:{control:"control",errors:"errors"},features:[a.TTD],decls:2,vars:1,consts:[[1,"error-message"]],template:function(l,E){1&l&&(a.TgZ(0,"div",0),a._uU(1),a.qZA()),2&l&&(a.xp6(1),a.hij(" ",E.errorMessage,"\n"))},styles:[".error-message[_ngcontent-%COMP%]{color:red;font-size:.9em}"]}),m})()},9110:(T,d,i)=>{i.d(d,{a:()=>v});var t=i(5879),a=i(6223),C=i(6814),c=i(7077);function m(_,y){if(1&_&&t._UZ(0,"textarea",6),2&_){const h=t.oxw();t.s9C("placeholder",h.placeholderInput),t.s9C("id",h.forInput),t.s9C("formControlName",h.forInput)}}function M(_,y){if(1&_&&t._UZ(0,"input",7),2&_){const h=t.oxw();t.s9C("type",h.typeInput),t.s9C("placeholder",h.placeholderInput),t.s9C("id",h.forInput),t.s9C("formControlName",h.forInput),t.Q6J("readonly",h.readonly)}}function l(_,y){if(1&_&&(t.ynx(0),t._UZ(1,"app-error-message",8),t.BQk()),2&_){const h=t.oxw();t.xp6(1),t.Q6J("errors",h.errors)}}const E=["*"];let v=(()=>{var _;class y{constructor(n){this.rootFormGroup=n,this.readonly=!1,this.isTextArea=!1,this.forInput=""}ngOnInit(){this.form=this.rootFormGroup.control}get errors(){return this.form.get(this.forInput)?.errors}checkValidity(){return this.form.get(this.forInput)?.invalid&&(this.form.get(this.forInput)?.touched||this.form.get(this.forInput)?.dirty)}}return(_=y).\u0275fac=function(n){return new(n||_)(t.Y36(a.sg))},_.\u0275cmp=t.Xpm({type:_,selectors:[["app-input"]],inputs:{forInput:"forInput",textLabel:"textLabel",typeInput:"typeInput",placeholderInput:"placeholderInput",regex:"regex",readonly:"readonly",isTextArea:"isTextArea"},ngContentSelectors:E,decls:9,vars:6,consts:[[3,"formGroup"],[1,"container"],[3,"for"],[3,"placeholder","id","formControlName",4,"ngIf"],[3,"type","placeholder","id","formControlName","readonly",4,"ngIf"],[4,"ngIf"],[3,"placeholder","id","formControlName"],[3,"type","placeholder","id","formControlName","readonly"],[3,"errors"]],template:function(n,e){1&n&&(t.F$t(),t.ynx(0,0),t.TgZ(1,"div",1)(2,"label",2)(3,"div"),t._uU(4),t.qZA()(),t.YNc(5,m,1,3,"textarea",3),t.YNc(6,M,1,5,"input",4),t.YNc(7,l,2,1,"ng-container",5),t.Hsn(8),t.qZA(),t.BQk()),2&n&&(t.Q6J("formGroup",e.form),t.xp6(2),t.s9C("for",e.forInput),t.xp6(2),t.Oqu(e.textLabel),t.xp6(1),t.Q6J("ngIf",e.isTextArea),t.xp6(1),t.Q6J("ngIf",!e.isTextArea),t.xp6(1),t.Q6J("ngIf",e.checkValidity()))},dependencies:[C.O5,a.Fj,a.JJ,a.JL,a.sg,a.u,c.H],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{display:flex;position:relative}.container[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{background-color:#fff;color:#19647e;position:relative;top:8px;left:15px;padding:0 5px}.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{border:.5px solid #19647e;border-radius:10px;padding:10px 5px}@media (min-width: 1024px){.container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:15px 10px}}"]}),y})()},4336:(T,d,i)=>{i.d(d,{O:()=>t});const t={nameRegex:/^[a-zA-Z\xe0\xe1\xe2\xe4\xe3\xe5\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf1\xf2\xf3\xf4\xf6\xf5\xf8\xf9\xfa\xfb\xfc\xfd\xff'\-\s]{2,}$/,emailRegex:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,phoneNumberRegex:/^[0-9]{10}$/,passwordRegex:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&^*,;])[A-Za-z\d@$!%?&^*,;]{8,}$/,streetNumberRegex:/^\d+\s?[a-zA-Z]?(?:\s?-\s?\d+)?$/,complementaryNumberRegex:/^\s?(?:BIS|TER|QUARTER)?$/,postalCodeRegex:/^(?:\d{5}|2A\d{3}|2B\d{3})$/,streetNameRegex:/^[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff]['a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff0-9\s,'\u2019\-]*$/,cityNameRegex:/^[a-zA-Z\xc0-\xd6\xd8-\xf6\xf8-\xff\s'\-]*$/,baseUrl:"http://localhost:8080",integerRegex:/^[0-9]+$/,decimalRegex:/^[0-9]+(\.[0-9]+)?$/}},8337:(T,d,i)=>{i.d(d,{A8:()=>y,Ov:()=>v,Z9:()=>m,eX:()=>E,k:()=>h,o2:()=>c,yy:()=>l});var t=i(3168),a=i(8645),C=i(5879);class c{}function m(n){return n&&"function"==typeof n.connect&&!(n instanceof t.c)}class l{applyChanges(e,s,r,p,o){e.forEachOperation((u,O,x)=>{let g,f;if(null==u.previousIndex){const A=r(u,O,x);g=s.createEmbeddedView(A.templateRef,A.context,A.index),f=1}else null==x?(s.remove(O),f=3):(g=s.get(O),s.move(g,x),f=2);o&&o({context:g?.context,operation:f,record:u})})}detach(){}}class E{constructor(){this.viewCacheSize=20,this._viewCache=[]}applyChanges(e,s,r,p,o){e.forEachOperation((u,O,x)=>{let g,f;null==u.previousIndex?(g=this._insertView(()=>r(u,O,x),x,s,p(u)),f=g?1:0):null==x?(this._detachAndCacheView(O,s),f=3):(g=this._moveView(O,x,s,p(u)),f=2),o&&o({context:g?.context,operation:f,record:u})})}detach(){for(const e of this._viewCache)e.destroy();this._viewCache=[]}_insertView(e,s,r,p){const o=this._insertViewFromCache(s,r);if(o)return void(o.context.$implicit=p);const u=e();return r.createEmbeddedView(u.templateRef,u.context,u.index)}_detachAndCacheView(e,s){const r=s.detach(e);this._maybeCacheView(r,s)}_moveView(e,s,r,p){const o=r.get(e);return r.move(o,s),o.context.$implicit=p,o}_maybeCacheView(e,s){if(this._viewCache.length<this.viewCacheSize)this._viewCache.push(e);else{const r=s.indexOf(e);-1===r?e.destroy():s.remove(r)}}_insertViewFromCache(e,s){const r=this._viewCache.pop();return r&&s.insert(r,e),r||null}}class v{get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}constructor(e=!1,s,r=!0,p){this._multiple=e,this._emitChanges=r,this.compareWith=p,this._selection=new Set,this._deselectedToEmit=[],this._selectedToEmit=[],this.changed=new a.x,s&&s.length&&(e?s.forEach(o=>this._markSelected(o)):this._markSelected(s[0]),this._selectedToEmit.length=0)}select(...e){this._verifyValueAssignment(e),e.forEach(r=>this._markSelected(r));const s=this._hasQueuedChanges();return this._emitChangeEvent(),s}deselect(...e){this._verifyValueAssignment(e),e.forEach(r=>this._unmarkSelected(r));const s=this._hasQueuedChanges();return this._emitChangeEvent(),s}setSelection(...e){this._verifyValueAssignment(e);const s=this.selected,r=new Set(e);e.forEach(o=>this._markSelected(o)),s.filter(o=>!r.has(o)).forEach(o=>this._unmarkSelected(o));const p=this._hasQueuedChanges();return this._emitChangeEvent(),p}toggle(e){return this.isSelected(e)?this.deselect(e):this.select(e)}clear(e=!0){this._unmarkAll();const s=this._hasQueuedChanges();return e&&this._emitChangeEvent(),s}isSelected(e){return this._selection.has(this._getConcreteValue(e))}isEmpty(){return 0===this._selection.size}hasValue(){return!this.isEmpty()}sort(e){this._multiple&&this.selected&&this._selected.sort(e)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(e){e=this._getConcreteValue(e),this.isSelected(e)||(this._multiple||this._unmarkAll(),this.isSelected(e)||this._selection.add(e),this._emitChanges&&this._selectedToEmit.push(e))}_unmarkSelected(e){e=this._getConcreteValue(e),this.isSelected(e)&&(this._selection.delete(e),this._emitChanges&&this._deselectedToEmit.push(e))}_unmarkAll(){this.isEmpty()||this._selection.forEach(e=>this._unmarkSelected(e))}_verifyValueAssignment(e){}_hasQueuedChanges(){return!(!this._deselectedToEmit.length&&!this._selectedToEmit.length)}_getConcreteValue(e){if(this.compareWith){for(let s of this._selection)if(this.compareWith(e,s))return s;return e}return e}}let y=(()=>{var n;class e{constructor(){this._listeners=[]}notify(r,p){for(let o of this._listeners)o(r,p)}listen(r){return this._listeners.push(r),()=>{this._listeners=this._listeners.filter(p=>r!==p)}}ngOnDestroy(){this._listeners=[]}}return(n=e).\u0275fac=function(r){return new(r||n)},n.\u0275prov=C.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),e})();const h=new C.OlP("_ViewRepeater")}}]);