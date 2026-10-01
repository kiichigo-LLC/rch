(()=>{function v(){let t=document.querySelectorAll(".tab");t.length&&t.forEach(i=>{let l=i.parentElement;if(!l)return;let c=()=>[...i.querySelectorAll('[role="tab"]')],d=e=>{let o=e.dataset.tab;c().forEach(n=>{let r=n===e;n.classList.toggle("is-active",r),n.setAttribute("aria-selected",r?"true":"false"),n.tabIndex=r?0:-1}),l.querySelectorAll(".tab-body").forEach(n=>{let r=n.dataset.panel===o;n.classList.toggle("is-active",r),n.hidden=!r}),e.focus()};i.addEventListener("click",e=>{let o=e.target.closest('[role="tab"]');!o||!i.contains(o)||d(o)}),i.addEventListener("keydown",e=>{let o=c(),n=e.target.closest('[role="tab"]');if(!n||!i.contains(n))return;let r=o.indexOf(n);if(r<0)return;let a=-1;if(e.key==="ArrowRight"||e.key==="ArrowDown")a=(r+1)%o.length;else if(e.key==="ArrowLeft"||e.key==="ArrowUp")a=(r-1+o.length)%o.length;else if(e.key==="Home")a=0;else if(e.key==="End")a=o.length-1;else return;e.preventDefault(),d(o[a])})})}function w(){let t=document.getElementById("fix_cta"),i=document.getElementById("cta"),l=document.getElementById("footer");if(!t||!i||!l)return;let c=!0,d=!1,e=()=>{t.classList.toggle("is-show",!c&&!d)},o=new IntersectionObserver(([r])=>{c=r.isIntersecting,e()},{threshold:0}),n=new IntersectionObserver(([r])=>{d=r.isIntersecting,e()},{threshold:0});o.observe(i),n.observe(l),e()}function L(){let t=document.getElementById("pagetop");if(!t)return;let i=400,l=()=>{t.classList.toggle("is-show",window.scrollY>i)};window.addEventListener("scroll",l,{passive:!0}),l(),t.addEventListener("click",()=>{let c=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";window.scrollTo({top:0,behavior:c})})}var s=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          width: 1em;
          height: 1em;
        }
        svg {
          width: 100%;
          height: 100%;
          display: block;
        }
      </style>
      ${this.getSvgContent()}
    `}getSvgContent(){return""}};var C=class extends s{getSvgContent(){return`
      <svg viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L7 7L1 13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `}};customElements.define("arw-icon",C);var g=class extends s{getSvgContent(){return`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M21 14.25H7.5V7.5H21V14.25ZM21 6H7.5V4.5H21V6ZM7.5 3H21C21.828 3 22.5 3.672 22.5 4.5V14.25C22.5 15.078 21.828 15.75 21 15.75H7.5C6.672 15.75 6 15.078 6 14.25V4.5C6 3.672 6.672 3 7.5 3ZM3 19.5H16.5V17.25H18V19.5C18 20.328 17.328 21 16.5 21H3C2.172 21 1.5 20.328 1.5 19.5V9.75C1.5 8.922 2.172 8.25 3 8.25H4.5V9.75H3V19.5Z" fill="currentColor"/>
      </svg>
    `}};customElements.define("blank-icon",g);var m=class extends s{getSvgContent(){return`
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.5056 7.87275H20.2556V2.25H22.5056V7.87275ZM31.1715 6.41878L29.5808 4.82803L25.083 9.32578L26.6738 10.9165L31.1715 6.41878ZM7.26123 24.1721L11.795 28.7216L28.0805 22.7344L13.3272 7.92824L7.26123 24.1721ZM17.6068 31.4306L21.1798 30.1166C21.7569 29.904 22.0573 29.2594 21.8491 28.68L21.452 27.5752L15.7663 29.6666L16.1589 30.7556C16.2624 31.0402 16.4683 31.2664 16.7416 31.3946C17.0161 31.5206 17.3233 31.5341 17.6068 31.4306ZM8.54599 31.4925C8.62249 31.4925 8.66411 31.4509 8.67761 31.4374L9.99724 30.111L5.87524 25.9744L4.55336 27.2996C4.48249 27.3727 4.48249 27.4897 4.55449 27.5629L8.41549 31.4374L8.41607 31.438C8.43012 31.452 8.47055 31.4925 8.54599 31.4925ZM13.3137 5.62537C13.8627 5.62537 14.4196 5.83124 14.8584 6.27112L29.7309 21.1976C30.8682 22.3395 30.4362 24.2812 28.9242 24.828L23.5647 26.799L23.9664 27.9172C24.5919 29.6565 23.6896 31.5904 21.956 32.2282L18.3819 33.5422C18.0039 33.6817 17.609 33.7515 17.2164 33.7515C16.7304 33.7515 16.2455 33.6446 15.7921 33.432C14.9697 33.0506 14.3499 32.37 14.0427 31.5172L13.6557 30.4429L12.3834 30.9097L10.2684 33.0337C9.79249 33.5119 9.16924 33.7504 8.54599 33.7504C7.92386 33.7504 7.29949 33.5119 6.82474 33.0337L2.96261 29.1592C2.01311 28.2052 2.01311 26.6572 2.96261 25.7032L5.07986 23.5792L11.2415 7.08112C11.5767 6.14849 12.4362 5.62537 13.3137 5.62537ZM33.7501 15.7443H28.1273V13.4943H33.7501V15.7443Z" fill="currentColor"/>
      </svg>
    `}};customElements.define("spkr-icon",m);var u=class extends s{getSvgContent(){return`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 8.79005 1.34298 5.88396 3.51431 3.78028L5.15662 5.37127C3.40559 7.06778 2.32258 9.41137 2.32258 12C2.32258 14.5887 3.40562 16.9323 5.15667 18.6288L3.51436 20.2198C1.343 18.1161 0 15.21 0 12ZM20.4849 3.77954L18.8426 5.37053C20.5941 7.0671 21.6774 9.41099 21.6774 12C21.6774 14.589 20.5941 16.933 18.8426 18.6295L20.4849 20.2205C22.6567 18.1168 24 15.2104 24 12C24 8.78967 22.6567 5.88328 20.4849 3.77954ZM3.87097 12C3.87097 9.82558 4.78067 7.857 6.2515 6.43193L7.89381 8.02292C6.84329 9.04082 6.19355 10.4469 6.19355 12C6.19355 13.5531 6.84331 14.9592 7.89386 15.9771L6.25155 17.5681C4.78069 16.1431 3.87097 14.1744 3.87097 12ZM17.7477 6.43119L16.1054 8.02218C17.1564 9.04013 17.8065 10.4465 17.8065 12C17.8065 13.5535 17.1564 14.9599 16.1054 15.9779L17.7477 17.5689C19.219 16.1437 20.129 14.1748 20.129 12C20.129 9.82521 19.219 7.85631 17.7477 6.43119ZM12 15.375C13.9241 15.375 15.4839 13.864 15.4839 12C15.4839 10.136 13.9241 8.625 12 8.625C10.0759 8.625 8.51613 10.136 8.51613 12C8.51613 13.864 10.0759 15.375 12 15.375Z" fill="currentColor"/>
      </svg>
    `}};customElements.define("stream-icon",u);var p=class extends s{getSvgContent(){return`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.1293 21.9499C19.1224 22.4013 20.25 21.6753 20.25 20.5843L20.25 3.41383C20.25 2.5854 19.5784 1.91383 18.75 1.91383L5.25 1.91383C4.42157 1.91383 3.75 2.5854 3.75 3.41383L3.75 20.5843C3.75 21.6753 4.87756 22.4013 5.87071 21.9499L11.3793 19.446C11.7737 19.2667 12.2263 19.2667 12.6207 19.446L18.1293 21.9499Z" fill="currentColor"/>
      </svg>
    `}};customElements.define("tag-icon",p);var f=class extends s{getSvgContent(){return`
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 1.5C17.799 1.5 22.5 6.201 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.201 22.5 1.5 17.799 1.5 12C1.5 6.201 6.201 1.5 12 1.5ZM12 3C7.03725 3 3 7.03725 3 12C3 16.9628 7.03725 21 12 21C16.9628 21 21 16.9628 21 12C21 7.03725 16.9628 3 12 3ZM12.75 11.5059L17.5449 13.5605L16.9551 14.9395L11.25 12.4941V5.25H12.75V11.5059Z" fill="currentColor"/>
      </svg>
    `}};customElements.define("time-icon",f);document.addEventListener("DOMContentLoaded",()=>{v(),w(),L()});})();
