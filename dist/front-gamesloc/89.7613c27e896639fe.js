"use strict";(self.webpackChunkfront_gamesloc=self.webpackChunkfront_gamesloc||[]).push([[89],{4089:(J,d,c)=>{c.r(d),c.d(d,{HomeModule:()=>D});var s=c(6814),g=c(1896),e=c(5879),f=c(589),u=c(9034),_=c(9229);function x(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",3),e.NdJ("click",function(){const r=e.CHM(o).$implicit,l=e.oxw();return e.KtG(l.navigateToGameDetails(r.gameId,r.gameName))}),e._UZ(1,"app-card-item",4),e.qZA()}if(2&t){const o=a.$implicit;e.xp6(1),e.Q6J("game",o)}}let m=(()=>{var t;class a{constructor(n,i,r,l){this.getService=n,this.gameService=i,this.router=r,this.toastr=l,this.images=[{imageSrc:"https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",imageAlt:"nature1"},{imageSrc:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",imageAlt:"nature2"},{imageSrc:"https://images.unsplash.com/photo-1640844444545-66e19eb6f549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",imageAlt:"person1"},{imageSrc:"https://images.unsplash.com/photo-1490730141103-6cac27aaab94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",imageAlt:"person2"}],this.games$=[]}ngOnInit(){this.getService.getData("product/games").subscribe({next:n=>{this.games$=n}})}navigateToGameDetails(n,i){this.gameService.setSelectedGameId(n),this.router.navigate(["game",i])}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(f.t),e.Y36(u.h),e.Y36(g.F0),e.Y36(_._W))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home-page"]],decls:3,vars:2,consts:[[3,"images"],[1,"flexCard"],["class","clickable-card",3,"click",4,"ngFor","ngForOf"],[1,"clickable-card",3,"click"],[1,"cardItem",3,"game"]],template:function(n,i){1&n&&(e._UZ(0,"app-carrousel",0),e.TgZ(1,"div",1),e.YNc(2,x,2,1,"div",2),e.qZA()),2&n&&(e.Q6J("images",i.images),e.xp6(2),e.Q6J("ngForOf",i.games$))},styles:[".flexCard[_ngcontent-%COMP%]{margin:auto;height:600px;overflow:hidden;overflow-y:scroll}@media (min-width: 480px){.flexCard[_ngcontent-%COMP%]{width:70%}}@media (min-width: 768px){.flexCard[_ngcontent-%COMP%]{width:100%}}"]}),a})();var h=c(8051);const M=[{path:"",component:m},{path:"game/:name",component:h.p}];let v=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(M),g.Bz]}),a})();var p=c(6843);const O=function(t){return{"image-active":t}};function P(t,a){if(1&t&&e._UZ(0,"img",6),2&t){const o=a.$implicit,n=a.index,i=e.oxw(2);e.Q6J("src",o.imageSrc,e.LSH)("alt",o.imageAlt)("ngClass",e.VKq(3,O,i.selectedIndex===n))}}const w=function(t){return{active:t}};function b(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"span",9),e.NdJ("click",function(){const r=e.CHM(o).index,l=e.oxw(3);return e.KtG(l.selectedImage(r))}),e.qZA()}if(2&t){const o=a.index,n=e.oxw(3);e.Q6J("ngClass",e.VKq(1,w,n.selectedIndex===o))}}function y(t,a){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,b,1,3,"span",8),e.qZA()),2&t){const o=e.oxw(2);e.xp6(1),e.Q6J("ngForOf",o.images)}}function I(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",10)(1,"ng-icon",11),e.NdJ("click",function(){e.CHM(o);const i=e.oxw(2);return e.KtG(i.onPrevClick())}),e.qZA()()}}function H(t,a){if(1&t){const o=e.EpF();e.TgZ(0,"div",12)(1,"ng-icon",13),e.NdJ("click",function(){e.CHM(o);const i=e.oxw(2);return e.KtG(i.onNextClick())}),e.qZA()()}}function Z(t,a){if(1&t&&(e.TgZ(0,"div",1),e.YNc(1,P,1,5,"img",2),e.YNc(2,y,2,1,"div",3),e.YNc(3,I,2,0,"div",4),e.YNc(4,H,2,0,"div",5),e.qZA()),2&t){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",o.images),e.xp6(1),e.Q6J("ngIf",o.indicators),e.xp6(1),e.Q6J("ngIf",o.controls),e.xp6(1),e.Q6J("ngIf",o.controls)}}let A=(()=>{var t;class a{constructor(){this.images=[],this.indicators=!0,this.controls=!0,this.selectedIndex=0}selectedImage(n){this.selectedIndex=n}onPrevClick(){0===this.selectedIndex?this.selectedIndex=this.images.length-1:this.selectedIndex--}onNextClick(){this.selectedIndex===this.images.length-1?this.selectedIndex=0:this.selectedIndex++}}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-carrousel"]],inputs:{images:"images",indicators:"indicators",controls:"controls"},decls:1,vars:1,consts:[["class","carousel-container",4,"ngIf"],[1,"carousel-container"],["class","fade",3,"src","alt","ngClass",4,"ngFor","ngForOf"],["class","carousel-dot-container",4,"ngIf"],["class","btn-carousel btn-prev",4,"ngIf"],["class","btn-carousel btn-next",4,"ngIf"],[1,"fade",3,"src","alt","ngClass"],[1,"carousel-dot-container"],["class","dot",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"dot",3,"ngClass","click"],[1,"btn-carousel","btn-prev"],["name","bootstrapArrowLeftCircle",3,"click"],[1,"btn-carousel","btn-next"],["name","bootstrapArrowRightCircle",3,"click"]],template:function(n,i){1&n&&e.YNc(0,Z,5,4,"div",0),2&n&&e.Q6J("ngIf",i.images&&i.images.length>0)},dependencies:[s.mk,s.sg,s.O5,p.Fv],styles:[".carousel-container[_ngcontent-%COMP%]{position:relative;height:350px;margin:1rem}.carousel-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:none}.carousel-container[_ngcontent-%COMP%]   img.image-active[_ngcontent-%COMP%]{display:block;width:100%;height:350px}.carousel-container[_ngcontent-%COMP%]   .fade[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_fade;animation-duration:1.5s}.carousel-container[_ngcontent-%COMP%]   .fade[_ngcontent-%COMP%]:not(.show){opacity:1}.carousel-container[_ngcontent-%COMP%]   .carousel-dot-container[_ngcontent-%COMP%]{transform:translateY(-100%);display:flex;justify-content:center}.carousel-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{cursor:pointer;height:13px;width:13px;margin:0 5px;background-color:#fbfbfb;border-radius:50%;transition:opacity .6s ease;opacity:.5;margin-bottom:1rem}.carousel-container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%], .carousel-container[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:hover{opacity:1}@keyframes _ngcontent-%COMP%_fade{0%{opacity:.4}to{opacity:1}}@media (max-width: 768px){.carousel-container[_ngcontent-%COMP%]{display:none}}.carousel-container[_ngcontent-%COMP%]   .btn-carousel[_ngcontent-%COMP%]{position:absolute;display:flex;align-items:center;justify-content:center;width:auto;text-align:center;color:#faebd7;margin:0 1rem;top:50%;transform:translateY(-50%)}.carousel-container[_ngcontent-%COMP%]   .btn-prev[_ngcontent-%COMP%]{left:0;font-size:3rem}.carousel-container[_ngcontent-%COMP%]   .btn-next[_ngcontent-%COMP%]{right:0;font-size:3rem}"]}),a})();var T=c(6208),C=c(2150),k=c(5631);let F=(()=>{var t;class a{constructor(n,i){this.parent=n,this.fileService=i,this.image=""}ngOnInit(){this.fileService.getFile(this.game.image).subscribe({next:n=>this.image=URL.createObjectURL(n)})}}return(t=a).\u0275fac=function(n){return new(n||t)(e.Y36(m),e.Y36(k.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-card-item"]],inputs:{game:"game"},decls:15,vars:7,consts:[[1,"articleCard"],[1,"articleImage"],[3,"src","alt"],[1,"articleDescription"],[1,"articleEnd"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"h3"),e._uU(5),e.qZA(),e.TgZ(6,"p"),e._uU(7),e.qZA()(),e.TgZ(8,"div",4)(9,"p"),e._uU(10),e.qZA(),e.TgZ(11,"p"),e._uU(12),e.qZA(),e.TgZ(13,"p"),e._uU(14),e.qZA()()()),2&n&&(e.xp6(2),e.s9C("alt",i.game.gameName),e.Q6J("src",i.image,e.LSH),e.xp6(3),e.Oqu(i.game.gameName),e.xp6(2),e.Oqu(i.game.gameDescr),e.xp6(3),e.Oqu(i.game.editor.name),e.xp6(2),e.Oqu(i.game.type.name),e.xp6(2),e.hij("",i.game.gamePrice,"\u20ac"))},styles:[".articleCard[_ngcontent-%COMP%]{display:flex;flex-direction:column;box-shadow:0 0 5px 1px #000;margin:1rem;background-color:var(--whitegray)}@media (min-width: 768px){.articleCard[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between}}.articleCard[_ngcontent-%COMP%]   .articleImage[_ngcontent-%COMP%]{display:flex}@media (min-width: 768px){.articleCard[_ngcontent-%COMP%]   .articleImage[_ngcontent-%COMP%]{flex-basis:20%}}.articleCard[_ngcontent-%COMP%]   .articleImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:150px;border-bottom:4px solid var(--primary)}@media (min-width: 480px){.articleCard[_ngcontent-%COMP%]   .articleImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border:none}}@media (min-width: 768px){.articleCard[_ngcontent-%COMP%]   .articleImage[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:175px}}@media (min-width: 768px){.articleCard[_ngcontent-%COMP%]   .articleDescription[_ngcontent-%COMP%]{flex-basis:40%;flex-grow:1;margin:auto}}.articleCard[_ngcontent-%COMP%]   .articleDescription[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.4rem;color:var(--blue-primary);text-align:center}@media (min-width: 480px){.articleCard[_ngcontent-%COMP%]   .articleDescription[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.8rem;font-weight:700}}.articleCard[_ngcontent-%COMP%]   .articleDescription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;color:#666;display:-webkit-box;text-align:center;margin:6px;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}@media (min-width: 768px){.articleCard[_ngcontent-%COMP%]   .articleDescription[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{-webkit-line-clamp:6;font-size:16px}}.articleCard[_ngcontent-%COMP%]   .articleEnd[_ngcontent-%COMP%]{background-color:var(--blue-primary);color:#fff;display:flex;justify-content:space-between;align-items:center;padding:6px}@media (min-width: 768px){.articleCard[_ngcontent-%COMP%]   .articleEnd[_ngcontent-%COMP%]{flex-basis:15%;flex-direction:column;font-weight:700;letter-spacing:1px}}.articleCard[_ngcontent-%COMP%]   .articleEnd[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;text-align:center}"]}),a})(),D=(()=>{var t;class a{}return(t=a).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[s.ez,v,T.m,p.sU.withIcons({bootstrapArrowLeftCircle:C.C68,bootstrapArrowRightCircle:C.D2})]}),a})();e.B6R(m,function(){return[s.sg,A,F]},[])}}]);