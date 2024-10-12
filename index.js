import{S as u}from"./assets/vendor-CgTBfC_f.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const f="https://pixabay.com/api/",d="46457503-330abda4e6a20c9fb19d2e08a";function c(o){return fetch(`${f}?key=${d}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const p=o=>o.map(({largeImageURL:r,webformatURL:n,tags:s,likes:e,views:t,comments:l,downloads:a})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img
            class="gallery-image"
            src="${n}"
            alt="${s}"
          />
        </a>
        <div class="gallery-info">
          <p><b>Likes:</b> ${e}</p>
          <p><b>Views:</b> ${t}</p>
          <p><b>Comments:</b> ${l}</p>
          <p><b>Downloads:</b> ${a}</p>
        </div>
      </li>`).join(""),m=()=>{new u(".gallery .gallery-item a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300}).refresh()},y=document.querySelector(".js-search-form"),i=document.querySelector(".js-gallery");c("flowers").then(console.log).catch(console.error);y.addEventListener("submit",h);function h(o){o.preventDefault();const r=o.currentTarget,n=r.elements.user_query.value.trim();i.innerHTML="";const s=document.querySelector(".loader");s.style.display="block",c(n).then(e=>{console.log(e.hits);const t=p(e.hits);i.insertAdjacentHTML("beforeend",t),m()}).catch(console.error).finally(()=>{s.style.display="none",r.reset()})}
//# sourceMappingURL=index.js.map
