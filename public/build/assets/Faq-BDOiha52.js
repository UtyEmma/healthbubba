import{r as C,j as t}from"./app-D7nhYm9e.js";import{e as D,c as q,m as v,a as T,b as P,d as G,S as O,f as V,g as Z}from"./swiper-react-BCpcusuH.js";import{a as I,A as E,q as Q}from"./GuestLayout-D2yXlZyi.js";function X({title:i,titleId:e,...p},n){return C.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},p),i?C.createElement("title",{id:e},i):null,C.createElement("path",{fillRule:"evenodd",d:"M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const Y=C.forwardRef(X);function _({title:i,titleId:e,...p},n){return C.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":e},p),i?C.createElement("title",{id:e},i):null,C.createElement("path",{fillRule:"evenodd",d:"M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z",clipRule:"evenodd"}))}const U=C.forwardRef(_);function J(i,e,p,n){return i.params.createElements&&Object.keys(n).forEach(r=>{if(!p[r]&&p.auto===!0){let d=D(i.el,`.${n[r]}`)[0];d||(d=q("div",n[r]),d.className=n[r],i.el.append(d)),p[r]=d,e[r]=d}}),p}function A(i){return i===void 0&&(i=""),`.${i.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function K(i){let{swiper:e,extendParams:p,on:n,emit:r}=i;const d="swiper-pagination";p({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:a=>a,formatFractionTotal:a=>a,bulletClass:`${d}-bullet`,bulletActiveClass:`${d}-bullet-active`,modifierClass:`${d}-`,currentClass:`${d}-current`,totalClass:`${d}-total`,hiddenClass:`${d}-hidden`,progressbarFillClass:`${d}-progressbar-fill`,progressbarOppositeClass:`${d}-progressbar-opposite`,clickableClass:`${d}-clickable`,lockClass:`${d}-lock`,horizontalClass:`${d}-horizontal`,verticalClass:`${d}-vertical`,paginationDisabledClass:`${d}-disabled`}}),e.pagination={el:null,bullets:[]};let $,b=0;function M(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function B(a,s){const{bulletActiveClass:l}=e.params.pagination;a&&(a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&(a.classList.add(`${l}-${s}`),a=a[`${s==="prev"?"previous":"next"}ElementSibling`],a&&a.classList.add(`${l}-${s}-${s}`)))}function z(a){const s=a.target.closest(A(e.params.pagination.bulletClass));if(!s)return;a.preventDefault();const l=P(s)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===l)return;e.slideToLoop(l)}else e.slideTo(l)}function y(){const a=e.rtl,s=e.params.pagination;if(M())return;let l=e.pagination.el;l=v(l);let o,g;const j=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,S=e.params.loop?Math.ceil(j/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(g=e.previousRealIndex||0,o=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(o=e.snapIndex,g=e.previousSnapIndex):(g=e.previousIndex||0,o=e.activeIndex||0),s.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const c=e.pagination.bullets;let x,h,L;if(s.dynamicBullets&&($=T(c[0],e.isHorizontal()?"width":"height"),l.forEach(m=>{m.style[e.isHorizontal()?"width":"height"]=`${$*(s.dynamicMainBullets+4)}px`}),s.dynamicMainBullets>1&&g!==void 0&&(b+=o-(g||0),b>s.dynamicMainBullets-1?b=s.dynamicMainBullets-1:b<0&&(b=0)),x=Math.max(o-b,0),h=x+(Math.min(c.length,s.dynamicMainBullets)-1),L=(h+x)/2),c.forEach(m=>{const f=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(u=>`${s.bulletActiveClass}${u}`)].map(u=>typeof u=="string"&&u.includes(" ")?u.split(" "):u).flat();m.classList.remove(...f)}),l.length>1)c.forEach(m=>{const f=P(m);f===o?m.classList.add(...s.bulletActiveClass.split(" ")):e.isElement&&m.setAttribute("part","bullet"),s.dynamicBullets&&(f>=x&&f<=h&&m.classList.add(...`${s.bulletActiveClass}-main`.split(" ")),f===x&&B(m,"prev"),f===h&&B(m,"next"))});else{const m=c[o];if(m&&m.classList.add(...s.bulletActiveClass.split(" ")),e.isElement&&c.forEach((f,u)=>{f.setAttribute("part",u===o?"bullet-active":"bullet")}),s.dynamicBullets){const f=c[x],u=c[h];for(let w=x;w<=h;w+=1)c[w]&&c[w].classList.add(...`${s.bulletActiveClass}-main`.split(" "));B(f,"prev"),B(u,"next")}}if(s.dynamicBullets){const m=Math.min(c.length,s.dynamicMainBullets+4),f=($*m-$)/2-L*$,u=a?"right":"left";c.forEach(w=>{w.style[e.isHorizontal()?u:"top"]=`${f}px`})}}l.forEach((c,x)=>{if(s.type==="fraction"&&(c.querySelectorAll(A(s.currentClass)).forEach(h=>{h.textContent=s.formatFractionCurrent(o+1)}),c.querySelectorAll(A(s.totalClass)).forEach(h=>{h.textContent=s.formatFractionTotal(S)})),s.type==="progressbar"){let h;s.progressbarOpposite?h=e.isHorizontal()?"vertical":"horizontal":h=e.isHorizontal()?"horizontal":"vertical";const L=(o+1)/S;let m=1,f=1;h==="horizontal"?m=L:f=L,c.querySelectorAll(A(s.progressbarFillClass)).forEach(u=>{u.style.transform=`translate3d(0,0,0) scaleX(${m}) scaleY(${f})`,u.style.transitionDuration=`${e.params.speed}ms`})}s.type==="custom"&&s.renderCustom?(c.innerHTML=s.renderCustom(e,o+1,S),x===0&&r("paginationRender",c)):(x===0&&r("paginationRender",c),r("paginationUpdate",c)),e.params.watchOverflow&&e.enabled&&c.classList[e.isLocked?"add":"remove"](s.lockClass)})}function k(){const a=e.params.pagination;if(M())return;const s=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let l=e.pagination.el;l=v(l);let o="";if(a.type==="bullets"){let g=e.params.loop?Math.ceil(s/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&g>s&&(g=s);for(let j=0;j<g;j+=1)a.renderBullet?o+=a.renderBullet.call(e,j,a.bulletClass):o+=`<${a.bulletElement} ${e.isElement?'part="bullet"':""} class="${a.bulletClass}"></${a.bulletElement}>`}a.type==="fraction"&&(a.renderFraction?o=a.renderFraction.call(e,a.currentClass,a.totalClass):o=`<span class="${a.currentClass}"></span> / <span class="${a.totalClass}"></span>`),a.type==="progressbar"&&(a.renderProgressbar?o=a.renderProgressbar.call(e,a.progressbarFillClass):o=`<span class="${a.progressbarFillClass}"></span>`),e.pagination.bullets=[],l.forEach(g=>{a.type!=="custom"&&(g.innerHTML=o||""),a.type==="bullets"&&e.pagination.bullets.push(...g.querySelectorAll(A(a.bulletClass)))}),a.type!=="custom"&&r("paginationRender",l[0])}function F(){e.params.pagination=J(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const a=e.params.pagination;if(!a.el)return;let s;typeof a.el=="string"&&e.isElement&&(s=e.el.querySelector(a.el)),!s&&typeof a.el=="string"&&(s=[...document.querySelectorAll(a.el)]),s||(s=a.el),!(!s||s.length===0)&&(e.params.uniqueNavElements&&typeof a.el=="string"&&Array.isArray(s)&&s.length>1&&(s=[...e.el.querySelectorAll(a.el)],s.length>1&&(s=s.filter(l=>G(l,".swiper")[0]===e.el)[0])),Array.isArray(s)&&s.length===1&&(s=s[0]),Object.assign(e.pagination,{el:s}),s=v(s),s.forEach(l=>{a.type==="bullets"&&a.clickable&&l.classList.add(...(a.clickableClass||"").split(" ")),l.classList.add(a.modifierClass+a.type),l.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.type==="bullets"&&a.dynamicBullets&&(l.classList.add(`${a.modifierClass}${a.type}-dynamic`),b=0,a.dynamicMainBullets<1&&(a.dynamicMainBullets=1)),a.type==="progressbar"&&a.progressbarOpposite&&l.classList.add(a.progressbarOppositeClass),a.clickable&&l.addEventListener("click",z),e.enabled||l.classList.add(a.lockClass)}))}function N(){const a=e.params.pagination;if(M())return;let s=e.pagination.el;s&&(s=v(s),s.forEach(l=>{l.classList.remove(a.hiddenClass),l.classList.remove(a.modifierClass+a.type),l.classList.remove(e.isHorizontal()?a.horizontalClass:a.verticalClass),a.clickable&&(l.classList.remove(...(a.clickableClass||"").split(" ")),l.removeEventListener("click",z))})),e.pagination.bullets&&e.pagination.bullets.forEach(l=>l.classList.remove(...a.bulletActiveClass.split(" ")))}n("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const a=e.params.pagination;let{el:s}=e.pagination;s=v(s),s.forEach(l=>{l.classList.remove(a.horizontalClass,a.verticalClass),l.classList.add(e.isHorizontal()?a.horizontalClass:a.verticalClass)})}),n("init",()=>{e.params.pagination.enabled===!1?H():(F(),k(),y())}),n("activeIndexChange",()=>{typeof e.snapIndex>"u"&&y()}),n("snapIndexChange",()=>{y()}),n("snapGridLengthChange",()=>{k(),y()}),n("destroy",()=>{N()}),n("enable disable",()=>{let{el:a}=e.pagination;a&&(a=v(a),a.forEach(s=>s.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),n("lock unlock",()=>{y()}),n("click",(a,s)=>{const l=s.target,o=v(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&o&&o.length>0&&!l.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&l===e.navigation.nextEl||e.navigation.prevEl&&l===e.navigation.prevEl))return;const g=o[0].classList.contains(e.params.pagination.hiddenClass);r(g===!0?"paginationShow":"paginationHide"),o.forEach(j=>j.classList.toggle(e.params.pagination.hiddenClass))}});const R=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=v(a),a.forEach(s=>s.classList.remove(e.params.pagination.paginationDisabledClass))),F(),k(),y()},H=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:a}=e.pagination;a&&(a=v(a),a.forEach(s=>s.classList.add(e.params.pagination.paginationDisabledClass))),N()};Object.assign(e.pagination,{enable:R,disable:H,render:k,update:y,init:F,destroy:N})}function le({categories:i}){const[e,p]=C.useState(0);return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"flex justify-center items-center gap-2 md:gap-3 flex-wrap",children:i==null?void 0:i.map((n,r)=>t.jsx("button",{onClick:()=>p(r),className:`border-2 text-sm items-center space-x-1 p-1 px-2 md:px-3 hover:bg-black hover:border-black hover:text-white hover:shadow-lg transition-all duration-300 rounded-[50px] ${r==e?" border-black bg-black shadow-lg text-white":"bg-gray-100"}`,children:n.category_name}))}),t.jsx("div",{children:i==null?void 0:i.map((n,r)=>t.jsx(W,{category:n,active:e,index:r},`${r}-category`))})]})}const W=({category:i,index:e,active:p})=>t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"md:block hidden",children:t.jsx("div",{className:`${e==p?"grid grid-cols-4 gap-5":"hidden"}`,children:i.tests.map((n,r)=>t.jsx(I,{show:r<4,children:t.jsx(O,{test:n})},"test-md-"+r))})}),t.jsx("div",{className:"md:hidden",children:t.jsx("div",{className:`${e==p?"flex":"hidden"}`,children:t.jsx(V,{slidesPerView:2,spaceBetween:10,pagination:{clickable:!0,enabled:!1},modules:[K],children:i.tests.map((n,r)=>t.jsx(I,{show:r<4,children:t.jsx(Z,{children:t.jsx(O,{test:n})})},"test-"+r))})})})]}),ee=({title:i,content:e,open:p=!1})=>t.jsx(t.Fragment,{children:t.jsx(E,{as:"div",defaultOpen:p,className:"p-5 space-y-3",children:({open:n})=>t.jsxs(t.Fragment,{children:[t.jsxs(E.Button,{className:"flex w-full justify-between",role:"button",children:[t.jsx("h4",{className:"font-semibold text-left",children:i}),t.jsx("div",{className:"w-1/12 text-end flex justify-end",children:n?t.jsx(Y,{className:"w-5 h-5"}):t.jsx(U,{className:"w-5 h-5"})})]}),t.jsx(Q,{enter:"duration-200 ease-out",enterFrom:"opacity-0 -translate-y-6",enterTo:"opacity-100 translate-y-0",leave:"duration-300 ease-out",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 -translate-y-6",children:t.jsx(E.Panel,{children:t.jsx("p",{className:"w-11/12 text-muted",children:e})})})]})})}),ie=({faqs:i})=>t.jsx(I,{show:i.length>0,children:t.jsx("section",{className:"md:py-20 py-10 max-w-7xl mx-auto space-y-5 md:space-y-10 px-4",children:t.jsxs("div",{className:"md:w-2/4 mx-auto space-y-10",children:[t.jsx("div",{className:"flex justify-center",children:t.jsxs("div",{className:"mx-auto inline-flex border shadow text-sm items-center space-x-1 p-2 px-3 rounded-[50px]",children:[t.jsx("svg",{width:22,height:20,viewBox:"0 0 22 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.76953 3.95833C3.76953 3.15292 4.42245 2.5 5.22786 2.5H17.3112C18.1166 2.5 18.7695 3.15292 18.7695 3.95833V14.375C18.7695 15.1804 18.1166 15.8333 17.3112 15.8333H14.0828C14.0342 15.8333 13.9872 15.8503 13.9499 15.8812L12.2013 17.3299C11.6592 17.779 10.8736 17.7768 10.3341 17.3245L8.61321 15.882C8.5757 15.8506 8.52832 15.8333 8.47938 15.8333H5.22786C4.42245 15.8333 3.76953 15.1804 3.76953 14.375V3.95833ZM11.2695 5.83333C11.5325 5.83333 11.7457 6.04653 11.7457 6.30952C11.7457 7.24346 11.9526 7.80724 12.2907 8.14543C12.6289 8.48361 13.1927 8.69048 14.1266 8.69048C14.3896 8.69048 14.6028 8.90367 14.6028 9.16667C14.6028 9.42966 14.3896 9.64286 14.1266 9.64286C13.1927 9.64286 12.6289 9.84972 12.2907 10.1879C11.9526 10.5261 11.7457 11.0899 11.7457 12.0238C11.7457 12.2868 11.5325 12.5 11.2695 12.5C11.0065 12.5 10.7933 12.2868 10.7933 12.0238C10.7933 11.0899 10.5865 10.5261 10.2483 10.1879C9.91011 9.84972 9.34632 9.64286 8.41239 9.64286C8.14939 9.64286 7.9362 9.42966 7.9362 9.16667C7.9362 8.90367 8.14939 8.69048 8.41239 8.69048C9.34632 8.69048 9.91011 8.48361 10.2483 8.14543C10.5865 7.80724 10.7933 7.24346 10.7933 6.30952C10.7933 6.04653 11.0065 5.83333 11.2695 5.83333Z",fill:"#11244A"})}),t.jsx("span",{children:"FAQ"})]})}),t.jsxs("div",{className:"text-center  mb-20",children:[t.jsx("h2",{className:"text-2xl md:text-3xl font-semibold",children:"Frequently Asked Questions (FAQs)"}),t.jsx("p",{className:"text-muted",children:"Lorem ipsum dolor sit amet consectetur. Montes posuere non lorem tempus mus. Vitae laoreet ipsum mi sagittis id vehicula semper. Sed enim mollis pulvinar."})]}),t.jsx("div",{className:"border rounded-2xl divide-y",children:i.map((e,p)=>t.jsx(ee,{title:e.question,open:p==0,content:e.answer}))})]})})});export{ie as F,le as P};