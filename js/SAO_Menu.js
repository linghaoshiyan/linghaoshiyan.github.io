window.document.oncontextmenu=function(e){return!!e.ctrlKey||(!!/Android|webOS|BlackBerry/i.test(navigator.userAgent)||("turnOff"===localStorage.getItem("SAOSwitch")||popMenu(e)))};var dv=document.getElementById("SAO-menu"),x=0,y=0,l=0,t=0,isDown=!1;function SAOclose(){document.getElementById("SAO-back").style.display="none"}function SAOinit(){var e=document.querySelectorAll(".active");if(e)for(i=0;i<e.length;i++)e[i].classList.remove("active")}function Menuinit(e){var t=e.querySelectorAll(".active");if(t)for(i=0;i<t.length;i++)t[i].classList.remove("active")}function linkStart(e){e.includes("https://")||e.includes("http://")?window.location.href=e:pjax?pjax.loadUrl(e):window.location.href=e}function clickAudio(){var e=document.getElementById("SAOClick");e&&e.play()}function panelAudio(){var e=document.getElementById("SAOPanel");e&&e.play()}function alertAudio(){var e=document.getElementById("SAOAlert");e&&e.play()}function confirmLogout(){setTimeout((function(){window.opener=null,window.open("","_self"),window.close()}),500)}function openLogout(){SAOclose(),document.getElementById("SAO-logout").classList.add("activeLogout")}function cancelLogout(){document.getElementById("SAO-logout").classList.remove("activeLogout")}function UtilsClick(){var e=event.target,t=e.parentElement.querySelector(".menu-list"),n=e.parentElement.querySelector(".user-panel");e.parentElement.querySelector(".active")?(t&&t.className.indexOf("active")>-1&&t.classList.remove("active"),n&&n.className.indexOf("active")>-1&&n.classList.remove("active")):(SAOinit(),t&&t.classList.add("active"),n&&n.classList.add("active"))}function MenusClick(){var e=event.target,t=e.parentElement.querySelector(".menu-child"),n=e.parentElement.parentElement;t&&(t.className.indexOf("active")>-1?t.classList.remove("active"):(Menuinit(n),t.classList.add("active")))}function popMenu(e){SAOinit();var t=document.getElementById("SAOlauncher");t&&t.play(),document.getElementById("SAO-back").style.display="block";var n=document.getElementById("SAO-menu"),o=document.documentElement.clientWidth||document.body.clientWidth,c=document.documentElement.clientHeight||document.body.clientHeight;n.style.display="block";var i=e.clientX,l=e.clientY;return n.style.left=i<230?n.clientWidth/2+230+"px":o-i<320?n.clientWidth/2-320+o+"px":i+n.clientWidth/2+"px",l<n.clientHeight/2+130?n.style.top="130px":c-l<80+n.clientHeight/2?n.style.top=c-n.clientHeight-80+"px":n.style.top=e.clientY-n.clientHeight/2+"px",!1}function openSearch(){document.body.style.cssText="width: 100%;overflow: hidden",document.querySelector("#local-search .search-dialog").style.display="block",document.querySelector("#local-search-input input").focus(),btf.fadeIn(document.getElementById("search-mask"),.5),loadFlag||(search(GLOBAL_CONFIG.localSearch.path),loadFlag=!0),document.addEventListener("keydown",(function e(t){"Escape"===t.code&&(closeSearch(),document.removeEventListener("keydown",e))}))}function ToComment(){document.getElementById("post-comment")?window.location.href="#post-comment":linkStart("/comments/")}function ToComment(){document.getElementById("post-comment")?window.location.href="#post-comment":linkStart("/comments/")}function SAOKeepOff(){localStorage.setItem("SAOSwitch","turnOff"),SAOclose()}function SAOSwitch(){"turnOff"===localStorage.getItem("SAOSwitch")?(localStorage.setItem("SAOSwitch","turnOn"),popMenu(event)):SAOKeepOff()}dv.onmousedown=function(e){x=e.clientX,y=e.clientY,l=dv.offsetLeft,t=dv.offsetTop,isDown=!0,dv.style.cursor="move"},window.onmousemove=function(e){if(0!=isDown){var n=e.clientX,o=e.clientY,c=n-(x-l),i=o-(y-t);dv.style.left=c+"px",dv.style.top=i+"px"}},dv.onmouseup=function(){isDown=!1,dv.style.cursor="default"},document.addEventListener("click",(function(e){"SAO-back"===e.target.id&&SAOclose()}));