import{i as u,S as f}from"./assets/vendor-5ObWk2rO.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",d="46457503-330abda4e6a20c9fb19d2e08a";function l(o){return fetch(`${m}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.totalHits>0)return t.hits;u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:2e3,color:"#FF0000",messageColor:"#FFFFFF"})})}const p=o=>o.map(({largeImageURL:t,webformatURL:n,tags:s,likes:e,views:r,comments:i,downloads:c})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${s}"
          />
        </a>
        <div class="gallery-info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${r}</p>
          <p><b>Comments:</b> ${i}</p>
          <p><b>Downloads:</b> ${c}</p>
        </div>
      </li>`).join(""),y=()=>{new f(".gallery .gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300}).refresh()},h=document.querySelector(".js-search-form"),a=document.querySelector(".js-gallery");l("flowers").then(console.log).catch(console.error);h.addEventListener("submit",g);function g(o){o.preventDefault();const t=o.currentTarget,n=t.elements.user_query.value.trim();a.innerHTML="";const s=document.querySelector(".loader");s.style.display="block",l(n).then(e=>{const r=p(e);a.insertAdjacentHTML("beforeend",r),y()}).catch(console.error).finally(()=>{s.style.display="none",t.reset()})}
//# sourceMappingURL=index.js.map
