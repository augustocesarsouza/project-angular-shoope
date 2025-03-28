import './polyfills.server.mjs';
import{b as $}from"./chunk-VE6TNQIS.mjs";import"./chunk-OVKOPP4G.mjs";import{c as F}from"./chunk-FRU3QYDG.mjs";import{a as T}from"./chunk-2YO3BE36.mjs";import"./chunk-DYQUNNN6.mjs";import{$ as r,H as O,I as a,K as g,L as u,M as U,P as d,Ua as S,Va as I,W as l,Xa as E,_ as i,aa as m,ab as w,bb as D,f as y,fa as f,ga as x,i as M,j as P,l as b,la as c,ma as h,ob as C,pb as z}from"./chunk-GIN22B5O.mjs";import"./chunk-S6KH3LOX.mjs";var N=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275cmp=u({type:t,selectors:[["app-order-updates"]],standalone:!1,decls:5,vars:0,consts:[[1,"container-main"],[1,"container-img-no-order-update"],["src","https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728819618/img-shopee/4e653cf704e352fd_bdm30f.png","alt","no-order-update"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1),m(2,"img",2),r(),i(3,"h1"),c(4,"Nenhuma atualiza\xE7\xE3o de pedido ainda"),r()())},styles:[".container-main[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-direction:column;width:950px;height:100%;gap:10px}.container-main[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#000c}.container-img-no-order-update[_ngcontent-%COMP%]{display:flex}.container-img-no-order-update[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100px;height:100px}"]})}}return t})();var H=(()=>{class t{constructor(e){this._http=e,this.baseUrl=T.BASE_URL||"/api"}getByUserIdAll(e){let o={headers:new w({"Content-Type":"application/json"})};return this._http.get(`${this.baseUrl}/public/promotion-user/get-by-user-id-all-to-promotion-user/${e}`,o).pipe(y(1))}static{this.\u0275fac=function(n){return new(n||t)(b(D))}}static{this.\u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Q(t,s){if(t&1&&m(0,"img",20),t&2){let e=s.$implicit;x("src",e,O)}}function X(t,s){if(t&1&&(i(0,"div",18,0),d(2,Q,1,1,"img",19),r()),t&2){let e=f(2).$implicit;a(2),l("ngForOf",e.promotionDTO.listImgInner)}}function Y(t,s){if(t&1&&(i(0,"div",9)(1,"div",10),m(2,"img",11),r(),i(3,"div",12)(4,"h1",13),c(5),r(),i(6,"div",14)(7,"span",15),c(8),r(),d(9,X,3,1,"div",16),i(10,"span",17),c(11),r()()()()),t&2){let e=f().$implicit,n=f(2);a(2),x("src",e.promotionDTO.img,O),x("alt",e.promotionDTO.title),a(3),h(e.promotionDTO.title),a(3),h(e.promotionDTO.description),a(),l("ngIf",e.promotionDTO.whatIsThePromotion===2),a(2),h(n.formatDateUser(e.promotionDTO.date))}}function Z(t,s){if(t&1&&(i(0,"div",6),d(1,Y,12,6,"div",7),i(2,"div",8)(3,"button"),c(4,"Ver Detalhes"),r()()()),t&2){let e=s.$implicit;a(),l("ngIf",e.promotionDTO!==null)}}function tt(t,s){if(t&1&&(i(0,"div",4),d(1,Z,5,1,"div",5),r()),t&2){let e=f();a(),l("ngForOf",e.promotionUser)}}var A=(()=>{class t{constructor(e,n){this.router=e,this.promotionUserService=n}ngOnInit(){let e=F();if(e.isNullUserLocalStorage){localStorage.removeItem("user"),this.router.navigate(["/buyer/login"]);return}if(!e.isNullUserLocalStorage){let n=e.user;this.userObjState=n,n&&this.promotionUserService.getByUserIdAll(n.id).subscribe({next:o=>{let p=o.data;this.promotionUser=p},error:o=>{o.status===400&&console.log(o),o.status===403&&(localStorage.removeItem("user"),this.router.navigate(["/buyer/login"]))}})}}formatDateUser(e){let n=e.split("T"),o=n[0].split("-"),p=`${o[2]}/${o[1]}/${o[0]}`,v=n[1].split("-")[0].split(":"),j=`${v[0]}:${v[1]}`;return`${p} ${j}`}static{this.\u0275fac=function(n){return new(n||t)(g(C),g(H))}}static{this.\u0275cmp=u({type:t,selectors:[["app-promotion"]],standalone:!1,decls:5,vars:1,consts:[["containerSecondImgInner",""],[1,"container-main"],[1,"container-header"],["class","container-body",4,"ngIf"],[1,"container-body"],["class","container-first-promotion",4,"ngFor","ngForOf"],[1,"container-first-promotion"],["class","container-first-inner-promotion",4,"ngIf"],[1,"container-button-detail"],[1,"container-first-inner-promotion"],[1,"container-img-inner"],[3,"src","alt"],[1,"container-title-and-description"],[1,"header-title"],[1,"container-description-imgs-date"],[1,"span-description"],["class","container-second-img-inner",4,"ngIf"],[1,"span-date-validate-cupon"],[1,"container-second-img-inner"],["alt","alt-img-of-list","class","img-of-list",3,"src",4,"ngFor","ngForOf"],["alt","alt-img-of-list",1,"img-of-list",3,"src"]],template:function(n,o){n&1&&(i(0,"div",1)(1,"div",2)(2,"h1"),c(3,"Marcar todas as mensagens como lidas"),r()(),d(4,tt,2,1,"div",3),r()),n&2&&(a(4),l("ngIf",o.promotionUser!==null))},dependencies:[S,I],styles:[".container-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:950px}.container-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:30px}.container-header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:14px;font-weight:300;color:#00000042;cursor:pointer}.container-header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]:hover{color:red}.container-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}.container-first-promotion[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-first-inner-promotion[_ngcontent-%COMP%]{display:flex}.container-img-inner[_ngcontent-%COMP%]{display:flex;margin-right:20px}.container-img-inner[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:80px;height:80px}.container-title-and-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.container-title-and-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:16px;font-weight:400;padding-bottom:5px;margin:0}.container-description-imgs-date[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.4;font-size:15px}.container-description-imgs-date[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:400;color:#0000007d}.container-button-detail[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{font-size:12px;border:1px solid rgba(16,16,16,.05);padding:6px;color:#0009;cursor:pointer}.container-button-detail[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{border-color:#ff5722;color:#ff5722}.container-second-inner-promotion[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-second-title-and-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.container-second-title-and-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:16px;font-weight:400;padding-bottom:5px}.container-second-title-and-description[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#0000007d}.container-img-and-title-description[_ngcontent-%COMP%]{display:flex}.container-second-img-inner[_ngcontent-%COMP%]{display:flex;margin-bottom:15px}.container-second-img-inner[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100px;height:100px}"]})}}return t})();var R=(()=>{class t{constructor(e){this.router=e}static{this.\u0275fac=function(n){return new(n||t)(g(C))}}static{this.\u0275cmp=u({type:t,selectors:[["app-wallet"]],standalone:!1,decls:5,vars:0,consts:[[1,"container-main"],[1,"container-none-update"],["src","https://res.cloudinary.com/dyqsqg7pk/image/upload/v1728827788/img-shopee/71532df534188bbb_nru33m.png","alt","img-none-update-yet"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1),m(2,"img",2),r(),i(3,"h1"),c(4,"Nenhuma atualiza\xE7\xE3o ainda"),r()())},styles:[".container-main[_ngcontent-%COMP%]{width:950px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;height:100%}.container-main[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:15px;font-weight:400;color:#4d4d4d;margin:0}.container-none-update[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100px;height:100px}"]})}}return t})();var L=(()=>{class t{constructor(e){this._http=e,this.baseUrl=T.BASE_URL||"/api"}getByUserIdAll(e,n){let p={headers:new w({"Content-Type":"application/json",Authorization:`Bearer ${n}`,uid:e})};return this._http.get(`${this.baseUrl}/shopee-update-user/get-by-user-id-all/${e}`,p).pipe(y(1))}static{this.\u0275fac=function(n){return new(n||t)(b(D))}}static{this.\u0275prov=M({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function nt(t,s){if(t&1&&(i(0,"div",8)(1,"div",9),m(2,"img",10),r(),i(3,"div",11)(4,"h1",12),c(5),r(),i(6,"div",13)(7,"span"),c(8),r(),i(9,"span"),c(10),r()()()()),t&2){let e=f().$implicit,n=f(2);a(2),x("src",e.shopeeUpdateDTO.img,O),x("alt",e.shopeeUpdateDTO.title),a(3),h(e.shopeeUpdateDTO.title),a(3),h(e.shopeeUpdateDTO.description),a(2),h(n.formatDateUser(e.shopeeUpdateDTO.date))}}function ot(t,s){if(t&1&&(i(0,"div",5),d(1,nt,11,5,"div",6),i(2,"div",7)(3,"button"),c(4,"Ver Detalhes"),r()()()),t&2){let e=s.$implicit;a(),l("ngIf",e.shopeeUpdateDTO!==null)}}function it(t,s){if(t&1&&(i(0,"div",3),d(1,ot,5,1,"div",4),r()),t&2){let e=f();a(),l("ngForOf",e.shopeeUpdateUser)}}var k=(()=>{class t{constructor(e,n){this.router=e,this.shopeeUpdateUserService=n}ngOnInit(){let e=F();if(e.isNullUserLocalStorage){localStorage.removeItem("user"),this.router.navigate(["/buyer/login"]);return}if(!e.isNullUserLocalStorage){let n=e.user;this.userObjState=n,n&&this.shopeeUpdateUserService.getByUserIdAll(n.id,n.token).subscribe({next:o=>{let p=o.data;console.log(p),this.shopeeUpdateUser=p},error:o=>{o.status===400&&console.log(o),o.status===403&&(localStorage.removeItem("user"),this.router.navigate(["/buyer/login"]))}})}}formatDateUser(e){let n=e.split("T"),o=n[0].split("-"),p=`${o[2]}/${o[1]}/${o[0]}`,v=n[1].split("-")[0].split(":"),j=`${v[0]}:${v[1]}`;return`${p} ${j}`}static{this.\u0275fac=function(n){return new(n||t)(g(C),g(L))}}static{this.\u0275cmp=u({type:t,selectors:[["app-shopee-updates"]],standalone:!1,decls:5,vars:1,consts:[[1,"container-main"],[1,"container-header"],["class","container-body",4,"ngIf"],[1,"container-body"],["class","container-first-promotion",4,"ngFor","ngForOf"],[1,"container-first-promotion"],["class","container-first-inner-promotion",4,"ngIf"],[1,"container-button-detail"],[1,"container-first-inner-promotion"],[1,"container-img-inner"],[3,"src","alt"],[1,"container-title-and-description"],[1,"header-title"],[1,"container-description-imgs-date"]],template:function(n,o){n&1&&(i(0,"div",0)(1,"div",1)(2,"h1"),c(3,"Marcar todas as mensagens como lidas"),r()(),d(4,it,2,1,"div",2),r()),n&2&&(a(4),l("ngIf",o.shopeeUpdateUser!==null))},dependencies:[S,I],styles:[".container-main[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:950px}.container-header[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;margin-bottom:30px}.container-header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:14px;font-weight:300;color:#00000042;cursor:pointer}.container-header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]:hover{color:red}.container-body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:30px}.container-first-promotion[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-first-inner-promotion[_ngcontent-%COMP%]{display:flex}.container-img-inner[_ngcontent-%COMP%]{display:flex;margin-right:20px;width:80px;height:80px}.container-img-inner[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100%;height:auto;object-fit:cover}.container-title-and-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px;width:750px}.container-title-and-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:16px;font-weight:400;padding-bottom:5px;margin:0}.container-description-imgs-date[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.4;font-size:15px}.container-description-imgs-date[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-weight:400;color:#0000007d}.container-button-detail[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]{font-size:12px;border:1px solid rgba(16,16,16,.05);padding:6px;color:#0009;cursor:pointer}.container-button-detail[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover{border-color:#ff5722;color:#ff5722}.container-second-inner-promotion[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.container-second-title-and-description[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:3px}.container-second-title-and-description[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%]{font-size:16px;font-weight:400;padding-bottom:5px}.container-second-title-and-description[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{font-size:14px;font-weight:400;color:#0000007d}.container-img-and-title-description[_ngcontent-%COMP%]{display:flex}.container-second-img-inner[_ngcontent-%COMP%]{display:flex;margin-bottom:15px}.container-second-img-inner[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{width:100px;height:100px}"]})}}return t})();var rt=[{path:"",component:$,children:[{path:"order",component:N},{path:"promotion",component:A},{path:"wallet",component:R},{path:"shopee",component:k},{path:"",redirectTo:"order",pathMatch:"full"},{path:"**",redirectTo:"order"}]},{path:"",pathMatch:"full",redirectTo:"profile"}],q=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=U({type:t})}static{this.\u0275inj=P({imports:[z.forChild(rt),z]})}}return t})();var Et=(()=>{class t{static{this.\u0275fac=function(n){return new(n||t)}}static{this.\u0275mod=U({type:t})}static{this.\u0275inj=P({imports:[E,q]})}}return t})();export{Et as NotificationsModule};
