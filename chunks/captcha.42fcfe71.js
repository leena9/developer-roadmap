class o{constructor(){this.onDOMLoaded=this.onDOMLoaded.bind(this),this.bindValidation=this.bindValidation.bind(this),this.validateCaptchaBeforeSubmit=this.validateCaptchaBeforeSubmit.bind(this)}validateCaptchaBeforeSubmit(a){const t=a.target,e=t.querySelector(".recaptcha-field");if(e){const n=e.dataset.recaptchaId,i=window.grecaptcha.getResponse(n);if(!i)return a.preventDefault(),alert("Please verify that you are human first"),!1;t.querySelector(".recaptcha-response").value=i}return t.closest(".popup").classList.add("hidden"),!0}bindValidation(){document.querySelectorAll("[captcha-form]").forEach(t=>{t.addEventListener("submit",this.validateCaptchaBeforeSubmit)})}onDOMLoaded(){this.bindValidation()}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const d=new o;d.init();
