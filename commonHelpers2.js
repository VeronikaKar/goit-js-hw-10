import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as t}from"./assets/vendor-77e16229.js";const a="/goit-js-hw-10/assets/bi_exclamation-triangle-abfc0c5e.svg",n=document.querySelector(".form");n.addEventListener("submit",m);function m(o){o.preventDefault();const e=o.currentTarget.elements.delay.value,s=o.currentTarget.elements.state.value.toLowerCase();if(e<=0){c(a,"You forgot important data","#ffc40c ");return}new Promise((i,r)=>{setTimeout(()=>{console.log(e,s),s==="fulfilled"?i():r()},e)}).then(()=>{t.success({position:"topRight",message:`✅ Fulfilled promise in ${e}ms`,messageSize:"16px",messageWeight:"400",backgroundColor:"#59a10d",messageColor:"#fff"})}).catch(()=>{t.error({messageSize:"16px",messageWeight:"400",backgroundColor:"#ef4040",messageColor:"#fff",position:"topRight",message:`❌ Rejected promise in ${e}ms`})})}function c(o,e,s){t.show({iconUrl:o,message:e,messageColor:"White",backgroundColor:s,position:"topRight",timeout:3e3})}
//# sourceMappingURL=commonHelpers2.js.map
