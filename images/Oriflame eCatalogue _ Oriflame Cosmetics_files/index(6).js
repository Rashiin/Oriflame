(function(){let b="v1.0.0",c="https://clientapp-cdn.oriflame.com/static/online-back-in-stock-notification/",d=document.currentScript&&document.currentScript.src?document.currentScript.src:null;if(d){let a=/http(s?):\/\/([\w-]+\.){1}([\w-]+\.?)+/gi,e=a.exec(d);e&&e[0]&&(c=c.replace(a,e[0]))}if("undefined"!==typeof URLSearchParams){let a=new URLSearchParams(window.location.search);a.get("online-back-in-stock-notification")&&(b=a.get("online-back-in-stock-notification"))}
let f=document.getElementsByTagName("body")[0],g=document.createElement("script"),h=document.getElementById("online-back-in-stock-notification-root");if(!h)throw Error("Element #online-back-in-stock-notification-root was not found!");h.setAttribute("data-app-url",`${h.getAttribute("data-app-url")}${b}/`);g.type="text/javascript";g.src=`${c}${b}/index.js`;g.defer=!0;g.crossOrigin="anonymous";f.appendChild(g);}).call(this);
