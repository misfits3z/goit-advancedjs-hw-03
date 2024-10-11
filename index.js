import"./assets/vendor-Dy2q2e6o.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const a="https://pixabay.com/api/",u="46457503-330abda4e6a20c9fb19d2e08a";function i(o){return fetch(`${a}?key=${u}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const f=({largeImageURL:o,webformatURL:t,tags:n,likes:s,views:e,comments:r,downloads:c})=>`<li class="gallery-item">
      <a class="gallery-link" href="${o}">
        <img
          class="gallery-image"
          src="${t}"
          alt="${n}"
        />
      </a>
      <div class="gallery-info">
        <p><b>Likes:</b> ${s}</p>
        <p><b>Views:</b> ${e}</p>
        <p><b>Comments:</b> ${r}</p>
        <p><b>Downloads:</b> ${c}</p>
      </div>
    </li>`,d=document.querySelector(".js-search-form"),l=document.querySelector(".js-gallery");i("flowers").then(console.log).catch(console.error);d.addEventListener("submit",m);function m(o){o.preventDefault();const t=o.currentTarget,n=t.elements.user_query.value.trim();l.innerHTML="",i(n).then(s=>{console.log(s.hits);const e=f(s.hits);l.insertAdjacentHTML("beforeend",e)}).catch(console.error).finally(()=>t.reset())}
//# sourceMappingURL=index.js.map
