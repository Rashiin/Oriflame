(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{2949:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(19756);function i(e,t){if(null==e)return{};var n,i,r=(0,a.Z)(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}},87353:function(e,t,n){"use strict";n.d(t,{$:function(){return p}});var a=n(96156),i=n(2949),r=n(99019),o=n(85893),s=["animation"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c=(0,r.styled)(r.Skeleton)({transform:"none"}),p=function(e){var t=e.animation,n=void 0===t?"pulse":t,a=(0,i.Z)(e,s);return(0,o.jsxs)("div",d(d({},a),{},{children:[(0,o.jsx)(c,{animation:n,height:210}),(0,o.jsx)(c,{variant:"text",height:19,width:"60%",animation:n,style:{marginTop:"18px"}}),(0,o.jsx)(c,{variant:"text",height:19,width:"40%",animation:n,style:{marginTop:"8px"}}),(0,o.jsx)(c,{variant:"text",height:25,width:"65px",animation:n,style:{marginTop:"38px"}})]}))}},64552:function(e,t,n){"use strict";n.d(t,{s:function(){return i},w:function(){return r}});var a="\n  ".concat("\n  fragment ProductLabels on ProductLabel {\n    labelKey\n    productLabelDomain\n    title\n  }\n","\n  fragment BaseConcept on Concept {\n    brand {\n      name\n    }\n    conceptCode\n    labels {\n      ...ProductLabels\n    }\n    productName\n    ratingAverage\n  }\n"),i="\n  ".concat(a,"\n  fragment BaseProduct on Product {\n    backInStockAvailability {\n      showBackInStockNotification\n    }\n    concept {\n      ...BaseConcept\n    }\n    formattedPrice {\n      price {\n        basicCataloguePrice\n        currentPrice\n      }\n    }\n    labels {\n      ...ProductLabels\n    }\n    price {\n      price {\n        currentPrice\n      }\n    }\n    imageUrl\n    productCode\n  }\n"),r="\n  ".concat(i,"\n  fragment ProductWithShades on Product {\n    ...BaseProduct\n    concept {\n      ...BaseConcept\n      products {\n        colorHexCode\n        colorImageUrl\n        productCode\n      }\n    }\n  }\n")},87145:function(e){var t=1/0,n=9007199254740991,a=NaN,i="[object Function]",r="[object GeneratorFunction]",o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,d=/^0o[0-7]+$/i,c=/^(?:0|[1-9]\d*)$/,p=parseInt,g=Object.prototype.toString,u=Math.ceil,m=Math.max;function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){return e?(e=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return a;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=l.test(e);return n||d.test(e)?p(e.slice(2),n?2:8):s.test(e)?a:+e}(e))===t||e===-1/0?17976931348623157e292*(e<0?-1:1):e===e?e:0:0===e?e:0}var f,y=function(e,t,a){return a&&"number"!=typeof a&&function(e,t,a){if(!h(a))return!1;var o=typeof t;return!!("number"==o?function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=n}(e.length)&&!function(e){var t=h(e)?g.call(e):"";return t==i||t==r}(e)}(a)&&function(e,t){return!!(t=null==t?n:t)&&("number"==typeof e||c.test(e))&&e>-1&&e%1==0&&e<t}(t,a.length):"string"==o&&t in a)&&function(e,t){return e===t||e!==e&&t!==t}(a[t],e)}(e,t,a)&&(t=a=void 0),e=x(e),void 0===t?(t=e,e=0):t=x(t),function(e,t,n,a){for(var i=-1,r=m(u((t-e)/(n||1)),0),o=Array(r);r--;)o[a?r:++i]=e,e+=n;return o}(e,t,a=void 0===a?e<t?1:-1:x(a),f)};e.exports=y},95188:function(e,t,n){"use strict";n.d(t,{J:function(){return r},s:function(){return o}});var a=n(49704),i=n(64552);const r=a.Ps`
    fragment BestOffersBanners on BestOffersBanner {
        fontColor
        mobileFontColor
        headline
        imageUrl
        link {
            relativeUrl
            title
        }
    }
`,o=a.Ps`
    ${r}
    ${i.w}
    query GetBestOffers($validityDate: Date) {
        application {
            frontpage {
                digitalPromotions(validityDate: $validityDate, channel: Website) {
                    bestOffersBanners {
                        ...BestOffersBanners
                    }
                    bestOffersProducts {
                        ...ProductWithShades
                    }
                }
            }
        }
    }
`},5327:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});const a=1366},76863:function(e,t,n){"use strict";n.d(t,{E:function(){return i},v:function(){return r}});var a=n(49704);const i=a.Ps`
    fragment CampaignBanners on CampaignBanner {
        imageUrl
        headline
        tagline
        shortText
        fontColor
        link {
            title
            relativeUrl
        }
    }
`,r=a.Ps`
    ${i}
    query GetCampaignBanner($validityDate: Date) {
        application {
            frontpage {
                digitalPromotions(validityDate: $validityDate, channel: Website) {
                    campaignBanners {
                        ...CampaignBanners
                    }
                }
            }
        }
    }
`},74700:function(e,t,n){"use strict";n.d(t,{K:function(){return r},F:function(){return o}});var a=n(49704),i=n(64552);const r=a.Ps`
    fragment CategoryBanners on CategoryBanner {
        headline
        shortText
        imageUrl
        fontColor
        mobileFontColor
        link {
            title
            relativeUrl
        }
        tagline
        validFrom
        validTo
    }
`,o=a.Ps`
    ${r}
    ${i.w}
    query GetCategory($validityDate: Date) {
        application {
            frontpage {
                digitalPromotions(validityDate: $validityDate, channel: Website) {
                    categoryBanners {
                        ...CategoryBanners
                    }
                    categoryProducts {
                        ...ProductWithShades
                    }
                }
            }
        }
    }
`},78744:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return kn},default:function(){return jn}});var a=n(36689),i=n(93164),r=n(47498),o=n(54176),s=n(38295),l=n(95891),d=n(6339),c=n(21636),p=n(4595),g=n(99019),u=n(9012),m=n(49639),h=n(26793),x=n(49704);const f=x.Ps`
    fragment BeautyEdit on Frontpage {
        beautyEdit {
            editorialArticles {
                categoryTitle
                image {
                    alt
                    url
                }
                link {
                    relativeUrl
                }
                title
            }
            imageUrl
            text
        }
    }
`,y=x.Ps`
    ${f}
    query GetBeautyEdit {
        application {
            frontpage {
                ...BeautyEdit
            }
        }
    }
`,b=e=>e.filter((e=>null!==e)).map((({image:e,link:t,title:n})=>({localBannerTitle:n??"",media:e?.url?[e.url]:[],target:t?.relativeUrl??""})));let v;!function(e){e.ReadMore="Read more"}(v||(v={}));var w=n(52524),j=n(85893);const k=(0,g.styled)("img")((()=>({borderRadius:5,height:"100%",width:"100%"}))),T=({alt:e,url:t})=>(0,j.jsxs)("picture",{children:[(0,j.jsx)(k,{loading:"lazy",src:t,alt:e}),(0,j.jsx)("source",{media:"(min-width: 1280px)",srcSet:"/img/1920.avif 1x, /img/1920_2x.avif 2x",type:"image/avif"}),(0,j.jsx)("source",{media:"(min-width: 1280px)",srcSet:"/img/1920.webp 1x, /img/1920_2x.webp 2x",type:"image/webp"}),(0,j.jsx)("source",{media:"(min-width: 1280px)",srcSet:"/img/1920.jpg 1x, /img/1920_2x.jpg 2x",type:"image/jpeg"}),(0,j.jsx)("source",{media:"(min-width: 600px)",srcSet:"/img/1280.avif 1x, /img/1280_2x.avif 2x",type:"image/avif"}),(0,j.jsx)("source",{media:"(min-width: 600px)",srcSet:"/img/1280.webp 1x, /img/1280_2x.webp 2x",type:"image/webp"}),(0,j.jsx)("source",{media:"(min-width: 600px)",srcSet:"/img/1280.jpg 1x, /img/1280_2x.jpg 2x",type:"image/jpeg"}),(0,j.jsx)("source",{srcSet:"/img/600.avif 1x, /img/600_2x.avif 2x",type:"image/avif"}),(0,j.jsx)("source",{srcSet:"/img/600.webp 1x, /img/600_2x.webp 2x",type:"image/webp"}),(0,j.jsx)("source",{srcSet:"/img/600.jpg 1x, /img/600_2x.jpg 2x",type:"image/jpeg"})]}),C=(0,g.styled)(g.Link)((({theme:e})=>({maxWidth:"600px",textDecoration:"none"}))),S=(0,g.styled)("div")((()=>({display:"flex",flexDirection:"column",position:"relative",textAlign:"center"}))),B=(0,g.styled)("div")((({theme:e})=>({overflow:"hidden",position:"relative",maxWidth:"600px","&::before":{content:'""',display:"block",height:"100%",left:"0",position:"absolute",top:"0",width:"100%"},"&:hover":{"&::before":{backgroundColor:e.palette.common.black,borderRadius:5,opacity:.3}}}))),P=(0,g.styled)("div")((()=>({width:"100%"}))),q=(0,g.styled)("div")((({theme:e})=>({"-webkit-box-orient":"vertical","-webkit-line-clamp":2,color:e.palette.text.secondary,display:"-webkit-box",fontSize:"30px",fontWeight:e.typography.fontWeightBold,marginBottom:e.spacing(3),marginTop:e.spacing(4),overflow:"hidden",padding:e.spacing(0,3),textOverflow:"ellipsis",[e.breakpoints.down("sm")]:{fontSize:"20px",marginTop:"8px"},[e.breakpoints.up("md")]:{height:90},"&:hover":{opacity:"0.75"}}))),I=(0,g.styled)(g.Button)((({theme:e})=>({alignSelf:"center",backdropFilter:"blur(30px)",borderRadius:24,color:e.palette.text.primary,fontSize:"14px",height:"45px",marginTop:e.spacing(2),WebkitBackdropFilter:"blur(30px)","> span":{textTransform:"capitalize"}}))),$=(0,g.styled)("div")((({theme:e})=>({color:e.palette.text.primary,fontSize:"14px",fontWeight:e.typography.fontWeightBold,marginTop:"20px",textTransform:"uppercase"}))),A=({categoryTitle:e,image:t,link:n,linkText:a,position:i,title:r})=>{const{getTestId:o}=(0,s.default)(),l=(0,m.useCallback)((()=>{window.dispatchEvent(new CustomEvent(w.V,{detail:{banners:b([{image:t,link:n,title:r}]),placement:u.ug.BeautyEditBanner,position:i}}))}),[t,n,i,r]);return(0,j.jsx)(C,{href:n?.relativeUrl??"#",onClick:l,children:(0,j.jsxs)(S,{children:[t?.url?(0,j.jsx)(B,{children:(0,j.jsx)(T,{alt:t.alt??"",url:t.url})}):null,(0,j.jsxs)(P,{children:[(0,j.jsx)($,{children:e}),(0,j.jsx)(q,{children:r}),a?(0,j.jsx)(I,{"data-testid":o("read-more"),color:"default",variant:"outlined",children:a}):null]})]})})},U=({testId:e})=>(0,j.jsx)("svg",{"data-testid":e,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"80.009",viewBox:"0 0 150 80.009",children:(0,j.jsxs)("g",{transform:"translate(0 -74.389)",children:[(0,j.jsx)("path",{d:"M1002.428,694.189h6.971l.662,2.2-.19.106a9.045,9.045,0,0,0-.778-1.112,2.609,2.609,0,0,0-.643-.549,2.012,2.012,0,0,0-.733-.25,10.325,10.325,0,0,0-1.366-.061h-1.414v4.2h.717a5.982,5.982,0,0,0,1.071-.068,1.567,1.567,0,0,0,.6-.256,1.246,1.246,0,0,0,.391-.5,3.848,3.848,0,0,0,.236-.907h.191v3.8h-.191a3.754,3.754,0,0,0-.25-.907,1.294,1.294,0,0,0-.383-.494,1.5,1.5,0,0,0-.609-.26,5.729,5.729,0,0,0-1.053-.071h-.717v3.373a1.125,1.125,0,0,0,.218.827,1.488,1.488,0,0,0,.922.193h.844a3.293,3.293,0,0,0,1.843-.419,6.283,6.283,0,0,0,1.482-1.834l.2.085-.513,2.507h-7.5v-.184c.525-.066.851-.188.974-.369a2.761,2.761,0,0,0,.188-1.306v-5.895a2.786,2.786,0,0,0-.184-1.3c-.126-.185-.453-.308-.978-.375Z",transform:"translate(-910.79 -563.141)"}),(0,j.jsx)("path",{style:{fill:"none"},d:"M1131.814,697.72a4.722,4.722,0,0,0-2.405-.539c-.737,0-1.178.1-1.324.29a1.457,1.457,0,0,0-.1.717v6.985a1.77,1.77,0,0,0,.085.733.891.891,0,0,0,.527.253,4.266,4.266,0,0,0,.966.1,4.836,4.836,0,0,0,1.634-.271,3.382,3.382,0,0,0,1.253-.756,3.851,3.851,0,0,0,.9-1.486,5.883,5.883,0,0,0,.324-1.971,6.033,6.033,0,0,0-.449-2.358A3.431,3.431,0,0,0,1131.814,697.72Z",transform:"translate(-1024.865 -565.859)"}),(0,j.jsx)("path",{d:"M1109.625,695.847a4.1,4.1,0,0,0-2.473-2.062,7.417,7.417,0,0,0-2.217-.288c-.269,0-.7.011-1.3.033q-.775.03-1.24.03h-1.837v.182c.525.067.852.189.978.375a2.781,2.781,0,0,1,.183,1.3v5.895a2.774,2.774,0,0,1-.187,1.307q-.186.271-.974.369v.184h1.619l2.246.071a8.614,8.614,0,0,0,3.067-.454,3.952,3.952,0,0,0,1.862-1.469,5.2,5.2,0,0,0,.846-3.015A5.119,5.119,0,0,0,1109.625,695.847Zm-1.2,4.549a3.844,3.844,0,0,1-.9,1.486,3.377,3.377,0,0,1-1.253.756,4.835,4.835,0,0,1-1.634.271,4.292,4.292,0,0,1-.966-.1.892.892,0,0,1-.527-.253,1.772,1.772,0,0,1-.084-.733V694.84a1.458,1.458,0,0,1,.1-.717c.146-.194.588-.29,1.324-.29a4.725,4.725,0,0,1,2.405.538,3.431,3.431,0,0,1,1.405,1.695,6.036,6.036,0,0,1,.449,2.359A5.868,5.868,0,0,1,1108.427,700.4Z",transform:"translate(-999.946 -562.511)"}),(0,j.jsx)("path",{d:"M1223.382,694.372c-.527.067-.852.188-.975.371a2.785,2.785,0,0,0-.187,1.3v5.895a2.828,2.828,0,0,0,.183,1.3q.19.275.98.373v.184h-3.669v-.184q.79-.1.975-.369a2.8,2.8,0,0,0,.187-1.307v-5.895a2.819,2.819,0,0,0-.183-1.3c-.127-.185-.452-.308-.979-.375v-.182h3.669Z",transform:"translate(-1108.212 -563.141)"}),(0,j.jsx)("path",{d:"M1270.457,700.724v-.184c.524-.066.851-.188.977-.369a2.719,2.719,0,0,0,.192-1.307v-7.408h-1.718a2.945,2.945,0,0,0-.832.085,1.327,1.327,0,0,0-.61.461,18.75,18.75,0,0,0-1.024,1.579l-.2-.071L1268,690.8h.192a.7.7,0,0,0,.394.239,3.6,3.6,0,0,0,.822.07h5.782a3.6,3.6,0,0,0,.818-.07.709.709,0,0,0,.394-.239h.188l.755,2.709-.2.071a16.54,16.54,0,0,0-1.125-1.7,1.309,1.309,0,0,0-.847-.409c-.079-.009-.241-.014-.485-.014h-1.718v7.408a2.842,2.842,0,0,0,.182,1.3c.128.183.453.307.981.373v.184Z",transform:"translate(-1151.4 -560.064)"}),(0,j.jsx)("path",{style:{fill:"none"},d:"M682.475,393.075c1.312.443,4.328,1.143,6.472-.793a6.335,6.335,0,0,0,2.214-2.839l.486-1.321c.107-.366.2-.757.282-1.183a2.672,2.672,0,0,0-.36-1.457,1.733,1.733,0,0,0-.967-.7c-.033,0-.07,0-.1-.007a2.539,2.539,0,0,0-.263-.016c-.03,0-.063,0-.094,0-3.781.126-8.32,8.062-8.32,8.062l.653.248Z",transform:"translate(-619.493 -282)"}),(0,j.jsx)("path",{style:{fill:"none"},d:"M1328.725,320.371l.032-.156-.075.146Z",transform:"translate(-1207.219 -223.354)"}),(0,j.jsxs)("g",{transform:"translate(0 74.389)",children:[(0,j.jsx)("path",{d:"M43.869,160.4h0a12.087,12.087,0,0,0-1.85.292c-2.266.421-8.565,1.966-18.728,7.24,11.206-8,16.843-13.909,19.615-18.076.282-.35.533-.684.742-.995,0,0,2.157-3.011,1.8-5.932a2.72,2.72,0,0,0-.3-1.171c-.011-.029-.023-.05-.034-.074-.04-.1-.082-.192-.13-.286a4.393,4.393,0,0,0-3.606-2.557c-4.222-.922-16.024,5.4-25.949,11.391V139.341a10.75,10.75,0,0,0,0-3.464v-.14l-.029.006c-.67-2.734-3.134-1.095-3.134-1.095-1.228,1.151,0,4.692,0,4.693.313,2.461.74,6.464,1.1,12.141C5.92,156.06,0,160.108,0,160.108l.723.723s5.571-3.852,12.72-8.166c.234,3.935.435,8.61.546,14.075l.036.565c.008.143,1.032,21.187,1.117,21.932l.289,1.134V151.478c9.707-5.727,21.5-11.721,26.381-10.354,0,0,10.825,1.245-16.863,24.03l-4.037,4.04H21.92s27.174-12.126,33.542-4.208a11.091,11.091,0,0,1-.061,9.69c-.594.861-1.261,1.8-1.931,2.687a13.186,13.186,0,0,1-3.287,3.267,24.053,24.053,0,0,1-2.775,2.2c-.431.276-.946.6-1.538.972l-.071.04c-11.027,6.287-41.35,22.5-45.224,22.972l-.009.288L2.6,208.706s19.478-10.752,31.259-16.9a91.74,91.74,0,0,0,8.406-4.122c.034-.018.434-.239,1.084-.614.926-.534,1.87-1.1,2.812-1.7,3.9-2.469,9.488-6.457,10.724-9.711h0a10.511,10.511,0,0,0,1.811-7.9S58.645,158.27,43.869,160.4Z",transform:"translate(0 -128.697)"}),(0,j.jsx)("path",{d:"M748.8,83.621c-.18-.219-.541.036-1.947.682s-14.276,4.905-14.276,4.905l-7.642,2.127c.035-.069.058-.11.058-.11l3.257-7.641c2.056-5.3.253-8.186.253-8.186-.9-2.272-2.668,0-2.668,0a54.236,54.236,0,0,0-2.09,5.879l-1.081,5.731a49.017,49.017,0,0,1-1.26,5.2l-5.157,1.217-.757.25v2.272l1.982-.683,3.123-.918-8.117,15.01c-2.018,4.3-3.128,3.636-3.128,3.636-.916-.7-.188-7.513.336-10.269.371-1.447.1-1.941-.216-2.085a.648.648,0,0,0-.577,0c-.513-.032-1.091,1.393-1.574,2.99-.609,1.73-3.171,8.189-4.564,11.881,0,0-1.832,2.312-2.975-.459a57.458,57.458,0,0,1-1.7-9.454c.006-.255.017-.5.032-.741a48.938,48.938,0,0,1,1.983-6.275c1.045-2.772-.289-2.844-.289-2.844-1.218-.128-1.685,1.12-1.893,1.872v0c-.006.02-.014.051-.025.1a1.716,1.716,0,0,1-.136.445,3.845,3.845,0,0,0-.093.707,59.179,59.179,0,0,0-1.044,7.835c.143,1.2-1.153,7.429-1.153,7.429a10.059,10.059,0,0,1-1.371,3.352c-1.625,3.02-2.457,2.394-2.787,1.842-.488-1.069-1.219-2.932-2.316-6.15a3.474,3.474,0,0,0-1.53-1.9s-.44-.333-.663.245c0,.006,0,.014-.006.02-.735,1.478-2.37,8.784-2.37,8.784-1.318,3.584-3.1,4.81-4.343,5.209a3.388,3.388,0,0,1-.813-.037,4.212,4.212,0,0,1-1.831-1.884l-.577-1.513c-.007-.022-.014-.049-.02-.072-.785-3.143.6-9.612,1.074-10.942a23.216,23.216,0,0,1,2.6-3.99,33.191,33.191,0,0,1,2.549-2.253c1.781-1.542,1.082.373,2.379.076a1.3,1.3,0,0,0,1.028-.985c-.019-2.337-1.381-2.266-1.8-2.19.337-.139-2.2-.426-3.384.754a9.194,9.194,0,0,0-2.219,2.286c-.71,1.224-8.957,18.508-10.839,22.46-1.835,2.113-3.165,1.373-3.165,1.373-6.24-2.885-3.914-14.248-3.751-15.013,2.056.547,8.01,1.543,10.011-4.563.064-.118.1-.181.1-.181a9.742,9.742,0,0,0,.883-3.527h0s1.042-3.58-4.1-3.722c0,0-4.327.684-7.432,8.127a11.456,11.456,0,0,0-.939,3.511c-.481,2.374-1.181,7.385.436,11.16.008.035.014.067.021.1,0,0,1.622,6.072,5.163,6.058a4.62,4.62,0,0,0,2.962-1.3,6.364,6.364,0,0,0,.866-1.224h0l0,0c1.41-2.356,3.59-7.034,3.59-7.034l1.823-4.151.854-1.641c0,.026-.009.057-.013.086a4.657,4.657,0,0,0-.159,1.349,27.845,27.845,0,0,0,.211,5.582c1.484,5.909,5.813,4.144,5.813,4.144,2.6-.832,4.685-8.627,4.685-8.627l.121-.33c.89-2.193,2.279-.392,2.55-.006l.014.019c.011.018.019.032.025.041a12.527,12.527,0,0,1,.822,1.461c.008.03,1.022,3.679,2.492,3.074a1.235,1.235,0,0,0,.7-.346l.035-.017c-.007,0-.018.009-.035.017a1.08,1.08,0,0,0,.092-.087,14.759,14.759,0,0,0,2.938-4.129c1-1.676,1.351-4.918,1.426-5.748a19.339,19.339,0,0,0,2.589,6.8c.452.885.959,1.556,1.5,1.687,0,0,1.121,1.025,2.234-2.7h0s2.7-7.749,2.849-8.218a6.572,6.572,0,0,1,1.586-1.843,18.477,18.477,0,0,1-.181,2.49,15.687,15.687,0,0,0,.047,2.349h0v0a4.107,4.107,0,0,0,.818,2.406s.508.972,1.155.829a3.071,3.071,0,0,0,.695-.516h0a6.935,6.935,0,0,0,1.4-1.945l.017-.028c1-1.675,2.784-4.641,2.861-4.8l5.423-10.825,0-.005c-.006.022-7.2,24.258,0,29.238a4.675,4.675,0,0,0,3.364-4.544A18.21,18.21,0,0,0,724,120.1l1.262-6.725s1.284-2.607.668-3.516a1.264,1.264,0,0,0-1.367.649,3.056,3.056,0,0,0-.4,1.9s-.653,7.8-1.736,10.442a8.919,8.919,0,0,1-.468.761s-3.112,3.648-3.342-6.138v-.008c0-.032.06-2.142.2-4.9a60.809,60.809,0,0,1,1.36-8.4h0a67.356,67.356,0,0,1,3.788-10.8l6.416-1.881,11.753-3.823s2.378-.286,2.884-.286,3.461-.11,3.785-1.478S748.981,83.834,748.8,83.621Zm-79.158,19.145c.031,0,.064,0,.094,0a2.528,2.528,0,0,1,.263.016c.034,0,.07,0,.1.007a1.732,1.732,0,0,1,.967.7,2.672,2.672,0,0,1,.36,1.458c-.08.425-.175.817-.282,1.183l-.486,1.321a6.335,6.335,0,0,1-2.214,2.839c-2.144,1.936-5.16,1.237-6.472.793h0l-.653-.248S665.862,102.891,669.643,102.765ZM720.5,97.017l-.044-.01.075-.146Z",transform:"translate(-598.994 -74.389)"}),(0,j.jsx)("path",{d:"M1426.416,302.385h0c.363-.7.653-1.233.653-1.233,1.3-3.2-.938-3.169-1.513-2.954s-1.154,4.075-1.262,5.552a11.321,11.321,0,0,1-1.226,3.535s-2.416,5.117-3.731,6.2c0,0-1.173,1.552-1.749-.219a23,23,0,0,1-.613-5.009,62.63,62.63,0,0,1,.468-6.453c.289-.937.686-3.065-.793-3.1,0,0-1.73-.614-1.84,2.7l.758,4.473s.4,7.641,1.622,9.084c0,0,1.334,2.037,2.306,1.018a7.874,7.874,0,0,0,1.912-3.587l1.693-3.7c.113-.246.181.254.181.254l-.192,2.143c-.052.452-.155,1.436-.255,2.856v.009h0a108.52,108.52,0,0,0,.06,15.219s1.167,14.492,2.451,19.179c.594,2.165.913,3.328,1.085,3.955v0h0l.2.727s.494,2.178,1.544.937c.975-.227-.709-4.975-.709-4.975C1419.782,317.131,1426.416,302.385,1426.416,302.385Z",transform:"translate(-1285.475 -277.663)"})]})]})}),W=(0,g.styled)("div")((({theme:e})=>({alignItems:"center",display:"flex",flexDirection:"column",marginBlockEnd:e.spacing(20),[e.breakpoints.down("sm")]:{marginBlockEnd:e.spacing(12),padding:e.spacing(0,3)}}))),E=(0,g.styled)("div")((({theme:e})=>({display:"flex",flexWrap:"wrap",justifyContent:"center",gap:"30px","&:nth-child(1)":{[e.breakpoints.up("md")]:{marginRight:e.spacing(6)},[e.breakpoints.down("md")]:{marginBottom:e.spacing(4)}}}))),D=(0,g.styled)(g.Typography)((({theme:e})=>({marginBottom:e.spacing(6),marginTop:e.spacing(4),maxWidth:600,minHeight:45,textAlign:"center"}))),R=({query:e})=>{const[t]=(0,h.$)(),{getTestId:n}=(0,s.default)(),{data:a}=(0,c.a)(e??y),{editorialArticles:i,text:r}=a?.application.frontpage?.beautyEdit??{},o=i?.filter((e=>e));return(0,m.useEffect)((()=>{o&&r&&window.dispatchEvent(new CustomEvent(p.V,{detail:{banners:b(o.slice(0,2)),placement:u.ug.BeautyEditBanner}}))}),[o,r]),o?.length&&r?(0,j.jsxs)(W,{"data-testid":n("root"),children:[(0,j.jsx)(U,{testId:n("logo")}),(0,j.jsx)(D,{"data-testid":n("description"),component:"p",variant:"body1",children:r}),(0,j.jsx)(E,{"data-testid":n("articles"),children:o.slice(0,2).map(((e,n)=>(0,j.jsx)(A,{linkText:t(v.ReadMore),position:n,...e},e?.title)))})]}):null},N=({apolloServerSideCache:e,config:t,query:n,translations:c})=>{const{currentLanguage:p,graphqlUrl:g,tenant:u}=(0,i.S)(t),{formattedToken:m,customerId:h}=(0,r.d)(),x=(0,o.x)({clientToken:m,currentLanguage:p,customerId:h,graphqlUrl:g,tenant:u});return e&&x.cache.restore(e),m?(l.ZP.init({lng:"default",resources:{default:{translation:c}},keySeparator:"::"}),(0,j.jsx)(d.a,{i18n:l.ZP,children:(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"beauty-edit",children:(0,j.jsx)(a.e,{client:x,children:(0,j.jsx)(R,{query:n})})})})):null},O=(0,g.styled)("div")((({theme:e})=>({boxSizing:"border-box",display:"flex",alignItems:"center",flexDirection:"column",marginBlockEnd:e.spacing(20),[e.breakpoints.down("sm")]:{marginBlockEnd:e.spacing(12)}})));var L=n(17896),z=n(71517);let F;!function(e){e.play="Play"}(F||(F={}));const V=(0,g.styled)("div")((()=>({position:"relative"}))),_=(0,g.styled)("video")((({theme:e})=>({width:"800px",[e.breakpoints.down("sm")]:{width:"100%"}}))),M=(0,g.styled)("div",{shouldForwardProp:e=>(0,L.Z)(e)})((({isVisible:e,theme:t})=>({background:"rgba(0, 0, 0, 0.6)",borderRadius:"50%",display:e?"inherit":"none",height:"85px",left:"50%",position:"absolute",top:"50%",transform:"translate(-50%, -50%)",width:"85px","&:hover":{background:"rgba(0, 0, 0, 0.9)"},[t.breakpoints.down("sm")]:{height:"60px",width:"60px"}}))),Z=(0,g.styled)(z.ArrowRight)((({theme:e})=>({position:"absolute",color:e.palette.common.white,top:"50%",left:"50%",transform:"translate(-50%, -50%)",fontSize:"54px"}))),G=({id:e,playInLoop:t})=>{const{getTestId:n}=(0,s.default)(),[a]=(0,h.$)(),i=(0,m.useRef)(null),[r,o]=(0,m.useState)(!1),l=(0,m.useCallback)((()=>{o((e=>!e))}),[]),d=(0,m.useCallback)((e=>{"Enter"===e.key&&l()}),[l]);return(0,m.useEffect)((()=>{i.current&&(r?i.current.play().catch((()=>{})):i.current.pause())}),[r]),e?(0,j.jsxs)(V,{children:[(0,j.jsx)(M,{"aria-label":a(F.play),isVisible:!r,role:"button",tabIndex:-1,onClick:l,onKeyDown:d,children:(0,j.jsx)(Z,{fontSize:"inherit"})}),(0,j.jsx)(_,{ref:i,muted:!0,playsInline:!0,"data-testid":n("video"),loop:t??!1,src:`${e}#t=0.001`,onClick:l})]}):null},H=(0,g.styled)(g.Button)((({theme:e})=>({alignSelf:"center",fontSize:"14px",height:"45px",marginTop:e.spacing(6),width:"266px"}))),K=({relativeUrl:e,title:t})=>{const{getTestId:n}=(0,s.default)();return e&&t?(0,j.jsx)(H,{href:e,"data-testid":n("button"),variant:"outlined",color:"default",children:t}):null},J=x.Ps`
    fragment BeautyVideo on Frontpage {
        beautyVideo {
            video {
                id
                playInLoop
            }
            link {
                title
                relativeUrl
            }
        }
    }
`,Q=x.Ps`
    ${J}
    query GetBeautyVideo {
        application {
            frontpage {
                ...BeautyVideo
            }
        }
    }
`,X=({query:e})=>{const{data:t}=(0,c.a)(e??Q),{link:n,video:a}=t?.application.frontpage?.beautyVideo??{},{getTestId:i}=(0,s.default)();return n&&a?(0,j.jsxs)(O,{"data-testid":i("root"),children:[(0,j.jsx)(G,{...a}),(0,j.jsx)(K,{...n})]}):null},Y=({apolloServerSideCache:e,config:t,query:n,translations:c})=>{const{currentLanguage:p,graphqlUrl:g,tenant:u}=(0,i.S)(t),{formattedToken:m,customerId:h}=(0,r.d)(),x=(0,o.x)({clientToken:m,currentLanguage:p,customerId:h,graphqlUrl:g,tenant:u});return m?(e&&x.cache.restore(e),l.ZP.init({lng:"default",resources:{default:{translation:c??{}}},keySeparator:"::"}),(0,j.jsx)(d.a,{i18n:l.ZP,children:(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"beauty-video",children:(0,j.jsx)(a.e,{client:x,children:(0,j.jsx)(X,{query:n})})})})):null};var ee=n(78834),te=n(6202),ne=n(43339);const ae=x.Ps`
    fragment CategoryNavigation on Frontpage {
        categoryNavigation {
            title
            relativeUrl
        }
    }
`,ie=x.Ps`
    ${ae}
    query GetCategoryNavigation {
        application {
            frontpage {
                ...CategoryNavigation
            }
        }
    }
`,re=(0,g.styled)("div")((({theme:e,ownerState:t})=>({display:"grid",flex:"none",placeItems:"center",position:"relative",width:48,color:e.palette.text.secondary,cursor:"pointer",fontSize:18,WebkitTapHighlightColor:"transparent",opacity:t.disabled?0:1}))),oe=(0,g.styled)(z.ArrowLeftThin)((()=>({marginTop:"-3px"}))),se=(0,g.styled)(z.ArrowRightThin)((()=>({marginTop:"-3px"}))),le=e=>{const{direction:t,onClick:n}=e,a=(0,m.useMemo)((()=>"left"===t?oe:se),[t]),i=(0,m.useCallback)((()=>{n&&n()}),[n]);return(0,j.jsx)(re,{role:"button",tabIndex:-1,ownerState:e,onClick:n,onKeyDown:i,children:(0,j.jsx)(a,{fontSize:"inherit"})})},de=(0,g.styled)(g.Tabs)((({theme:e})=>({backgroundColor:e.palette.grey[50],height:48,marginBlockEnd:e.spacing(6),width:"100%",[e.breakpoints.up("md")]:{marginBlockEnd:e.spacing(12)}}))),ce=(0,g.styled)(g.Tab)((({theme:e})=>({color:e.palette.text.primary,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightBold,letterSpacing:1.2,lineHeight:"24px",marginRight:20,minWidth:60,textTransform:"uppercase",opacity:1,"&:hover":{color:e.palette.text.secondary},"&:focus":{color:e.palette.text.secondary},"&:active":{color:e.palette.text.secondary},[e.breakpoints.up("md")]:{fontSize:e.typography.pxToRem(12),marginRight:50}}))),pe=["select_category","Quick links"],ge=({relativeUrl:e,title:t,catalogueNavigationUrl:n,index:a})=>{const i=(0,m.useCallback)((()=>{const n=[...pe,e,t,(a+1).toString()];te.dispatch(n)}),[a,e,t]);return(0,j.jsx)(ce,{icon:e===n?(0,j.jsx)(z.Catalogue,{}):void 0,iconPosition:"start",label:t,component:"a",href:e,onClick:i})},ue=({query:e})=>{const{data:t}=(0,c.a)(e??ie),{getTestId:n}=(0,s.default)(),{tenant:a,staticApiUrl:i=""}=(0,ee.U)(),r=(()=>{const{currentLanguage:e,tenant:t,staticApiUrl:n=""}=(0,ee.U)(),a=(0,ne.c)({baseUrl:n});return(0,m.useCallback)((async n=>{const i={excludeChildren:!1,lang:e};return(await a.getTenantApplicationsNavigationNavigation(t,n,i)).navigationCollection}),[e,a,t])})(),[o,l]=(0,m.useState)([]);(0,m.useEffect)((()=>{r("ShopSection").then((e=>l(e)))}),[r,i,a]);const d=o.find((e=>"Catalogue"===e.linkType))?.url,{categoryNavigation:p}=t?.application.frontpage??{},g=p?.filter((e=>e));return g?.length?(0,j.jsx)(de,{value:!1,"data-testid":n("tabs"),variant:"scrollable",scrollButtons:"auto",ScrollButtonComponent:le,children:g.map(((e,t)=>e?.relativeUrl&&e.title&&(0,j.jsx)(ge,{title:e.title,relativeUrl:e.relativeUrl,catalogueNavigationUrl:d,index:t},e.relativeUrl)))}):null},me=({apolloServerSideCache:e,config:t,query:n})=>{const{currentLanguage:l,graphqlUrl:d,tenant:c}=(0,i.S)(t),{formattedToken:p,customerId:g}=(0,r.d)(),u=(0,o.x)({clientToken:p,currentLanguage:l,customerId:g,graphqlUrl:d,tenant:c});return p?(e&&u.cache.restore(e),(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"category-listing",children:(0,j.jsx)(a.e,{client:u,children:(0,j.jsx)(ue,{query:n})})})):null};var he=n(64375),xe=n(26075);const fe=x.Ps`
    fragment MotivationContent on Frontpage {
        motivationContent {
            headline
            text
        }
    }
`,ye=x.Ps`
    ${fe}
    query GetMotivationContent {
        application {
            frontpage {
                ...MotivationContent
            }
        }
    }
`,be=(0,g.styled)("div")((({theme:e})=>({border:"2px solid #80CDD0",borderRadius:"5px",height:"0px",marginTop:e.spacing(6),opacity:1,width:"86px"}))),ve=(0,g.styled)("div")((({theme:e})=>({marginBlockEnd:e.spacing(20),[e.breakpoints.down("sm")]:{marginBlockEnd:e.spacing(12)}}))),we=(0,g.styled)("div")((({theme:e})=>({maxWidth:"600px",[e.breakpoints.down("sm")]:{maxWidth:"345px"}}))),je=(0,g.styled)("div")((()=>({alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"}))),ke=(0,g.styled)(g.Typography)((({theme:e})=>({color:e.palette.text.primary,fontSize:"40px",letterSpacing:"0px",opacity:1,textAlign:"center",[e.breakpoints.down("sm")]:{fontSize:"30px"}}))),Te=(0,g.styled)("div")((({theme:e})=>({color:e.palette.grey[900],letterSpacing:"0px",marginTop:e.spacing(4),maxWidth:"600px",[e.breakpoints.down("sm")]:{color:"#707070",maxWidth:"345px",paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},opacity:1,textAlign:"center"}))),Ce=({query:e})=>{const{getTestId:t}=(0,s.default)(),n=(0,xe.x)(),{data:a}=(0,c.a)(e??ye,{client:n}),{headline:i,text:r}=a?.application.frontpage?.motivationContent??{};return i&&r?(0,j.jsx)(ve,{"data-testid":t("root"),children:(0,j.jsxs)(je,{children:[(0,j.jsx)(we,{children:(0,j.jsx)(ke,{"data-testid":t("header"),variant:"h4",children:i})}),(0,j.jsx)(Te,{"data-testid":t("description"),children:r}),(0,j.jsx)(be,{})]})}):null},Se=({apolloServerSideCache:e,config:t,query:n})=>{const{currentLanguage:l,graphqlUrl:d,tenant:c}=(0,i.S)(t),{formattedToken:p,customerId:g}=(0,r.d)(),u={clientToken:p,currentLanguage:l,customerId:g,graphqlUrl:d,tenant:c},m=(0,o.x)(u);return p?(e&&m.cache.restore(e),(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"motivation-content",children:(0,j.jsx)(a.e,{client:m,children:(0,j.jsx)(Ce,{query:n})})})):null},Be=x.Ps`
    fragment ProductStandards on Frontpage {
        productStandards {
            headline
            text
            images {
                title
                subTitle
                url
            }
        }
    }
`,Pe=x.Ps`
    ${Be}
    query GetProductStandards {
        application {
            frontpage {
                ...ProductStandards
            }
        }
    }
`;var qe=n(26857);const Ie=(0,g.styled)("img")((({theme:e})=>({height:"162px",marginRight:e.spacing(2),width:"162px",[e.breakpoints.down("sm")]:{height:"110px",marginRight:e.spacing(1),width:"110px"}}))),$e=({url:e,title:t})=>{const n=(0,g.useTheme)();if(!e||!t)return null;const a={backgroundColor:n.palette.grey[100],params:[{width:110,quality:95},{width:165,quality:90},{width:248,quality:80},{width:289,quality:70},{width:303,quality:60},{width:330,quality:50},{width:371,quality:45},{width:440,quality:40}],url:e},i=(0,qe.C)(a);return(0,j.jsx)(Ie,{alt:t,loading:"lazy",src:i[i.length-1]?.url,srcSet:(0,qe.G)(i),sizes:" (max-width: 959px) 110px, 162px "})},Ae=(0,g.styled)("div")((({theme:e})=>({marginBlockEnd:e.spacing(20),[e.breakpoints.down("sm")]:{marginBlockEnd:e.spacing(12)}}))),Ue=(0,g.styled)("div")((()=>({alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center"}))),We=(0,g.styled)(g.Typography)((({theme:e})=>({textAlign:"center",color:e.palette.text.primary,fontSize:"40px",letterSpacing:"0px",opacity:1}))),Ee=(0,g.styled)("div")((({theme:e})=>({color:e.palette.text.primary,fontSize:"40px",letterSpacing:"0px",opacity:1,textAlign:"center"}))),De=(0,g.styled)(Ee)((()=>({maxWidth:"718px"}))),Re=(0,g.styled)(g.Typography)((({theme:e})=>({color:e.palette.grey[900],[e.breakpoints.down("sm")]:{color:"#707070",paddingLeft:e.spacing(3),paddingRight:e.spacing(3)},letterSpacing:"0px",maxWidth:"600px",opacity:1,textAlign:"center"}))),Ne=(0,g.styled)(Re)((({theme:e})=>({marginTop:e.spacing(4),maxWidth:"600px",position:"relative"}))),Oe=(0,g.styled)("div")((({theme:e})=>({alignContent:"center",display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:e.spacing(4),position:"relative"}))),Le=({query:e})=>{const{getTestId:t}=(0,s.default)(),n=(0,xe.x)(),{data:a}=(0,c.a)(e??Pe,{client:n}),{headline:i,text:r,images:o}=a?.application.frontpage?.productStandards??{};if(!i||!r||!o||!o.length)return null;const l=o.filter((e=>null!==e));return(0,j.jsx)(Ae,{"data-testid":t("section"),children:(0,j.jsxs)(Ue,{children:[(0,j.jsx)(De,{"data-testid":t("title"),children:(0,j.jsx)(We,{variant:"h4",children:i})}),(0,j.jsx)(Ne,{"data-testid":t("description"),children:(0,j.jsx)(Re,{variant:"body1",children:r})}),(0,j.jsx)(Oe,{"data-testid":t("images"),children:l.map((e=>(0,j.jsx)($e,{...e},e.title)))})]})})},ze=({apolloServerSideCache:e,config:t,query:n})=>{const{currentLanguage:l,graphqlUrl:d,tenant:c}=(0,i.S)(t),{formattedToken:p,customerId:g}=(0,r.d)(),u=(0,o.x)({clientToken:p,currentLanguage:l,customerId:g,graphqlUrl:d,tenant:c});return p?(e&&u.cache.restore(e),(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"product-standards",children:(0,j.jsx)(a.e,{client:u,children:(0,j.jsx)(Le,{query:n})})})):null};var Fe="link-click";let Ve;!function(e){e.viewAllBrands="ViewAllBrands"}(Ve||(Ve={}));const _e=x.Ps`
    fragment TopBrands on Frontpage {
        topBrands {
            brands {
                name
                logo {
                    url
                }
                url
            }
            title
        }
    }
`,Me=x.Ps`
    ${_e}
    query GetTopBrands {
        application {
            frontpage {
                ...TopBrands
            }
        }
    }
`,Ze=(0,g.styled)("div")((({theme:e})=>({display:"flex",flexDirection:"column",marginBlockEnd:e.spacing(20),[e.breakpoints.down("sm")]:{marginBlockEnd:e.spacing(12)}}))),Ge=(0,g.styled)("img")((({theme:e})=>({borderRadius:"50%",height:200,objectFit:"cover",width:200,[e.breakpoints.down("sm")]:{height:154,width:154}}))),He=({url:e,name:t})=>{const n={url:e,backgroundColor:(0,g.useTheme)().palette.grey[100],params:[{width:150,quality:90},{width:200,quality:80},{width:225,quality:70},{width:250,quality:65},{width:300,quality:60},{width:382,quality:55},{width:450,quality:50},{width:600,quality:45}]},a=(0,qe.C)(n);return(0,j.jsx)(Ge,{src:a[a.length-1]?.url,alt:t??"",srcSet:(0,qe.G)(a),sizes:" (max-width: 959px) 150px, 200px ",loading:"lazy"})},Ke=(e,t)=>{window.dispatchEvent(new CustomEvent(Fe,{detail:{globalName:"",localName:e,placement:u.ug.TopBrands,target:t}}))},Je=(0,g.styled)("div")((({theme:e})=>({color:e.palette.text.primary,fontSize:40,fontWeight:e.typography.fontWeightBold,lineHeight:"57px",marginBottom:e.spacing(6),textAlign:"center"}))),Qe=(0,g.styled)("div")((({theme:e})=>({display:"grid",gap:50,gridTemplateColumns:"200px 200px 200px 200px",justifyContent:"center",[e.breakpoints.down("sm")]:{gap:"20px 30px",gridTemplateColumns:"154px 154px",gridTemplateRows:"154px 154px"}}))),Xe=(0,g.styled)(g.Button)((({theme:e})=>({alignSelf:"center",borderColor:e.palette.grey[600],color:e.palette.text.primary,fontSize:14,height:45,marginTop:e.spacing(6),textTransform:"uppercase",[e.breakpoints.down("sm")]:{height:44}}))),Ye=({query:e})=>{const[t]=(0,h.$)(),n=(0,xe.x)(),{getTestId:a}=(0,s.default)(),{data:i}=(0,c.a)(e??Me,{client:n}),r=(0,m.useCallback)((()=>Ke(t(Ve.viewAllBrands),"/brands")),[t]),{topBrands:o}=i?.application.frontpage??{};if(!o)return null;const l=o.brands?.filter((e=>e))?.slice(0,4);return l?.length?(0,j.jsxs)(Ze,{"data-testid":a("root"),children:[o.title?(0,j.jsx)(Je,{children:o.title}):null,(0,j.jsx)(Qe,{"data-testid":a("brands"),children:l.map((e=>{if(e?.logo&&e.logo[0]?.url){const t=e.name??"",n=e.url??"";return n?(0,j.jsx)("a",{href:n,onClick:()=>Ke(t,n),children:(0,j.jsx)(He,{url:e.logo[0]?.url,name:t})},n):(0,j.jsx)(He,{url:e.logo[0]?.url,name:t},n)}return null}))}),(0,j.jsx)(Xe,{color:"default","data-testid":a("button"),href:"/brands",variant:"outlined",onClick:r,children:t(Ve.viewAllBrands)})]}):null};var et=n(97031);const tt="default",nt="translation",at=({children:e,preloadedTranslations:t})=>{const n=(0,m.useMemo)((()=>{const e=(0,l.Fs)({lng:tt,defaultNS:nt,resources:{},keySeparator:"::",react:{useSuspense:!1,bindI18n:"added",bindI18nStore:"added"},interpolation:{escapeValue:!1,prefix:"{",suffix:"}"},...t&&{resources:{[tt]:{[nt]:t}}}});return e.use(et.Db).init(),e}),[]);return(0,m.useEffect)((()=>{t&&n.addResourceBundle(tt,nt,t)}),[t,n]),(0,j.jsxs)(d.a,{i18n:n,children:[" ",e]})},it=({apolloServerSideCache:e,config:t,translations:n,query:l})=>{const{currentLanguage:d,graphqlUrl:c,tenant:p}=(0,i.S)(t),{formattedToken:g,customerId:u}=(0,r.d)(),m=(0,o.x)({clientToken:g,currentLanguage:d,customerId:u,graphqlUrl:c,tenant:p});return g?(e&&m.cache.restore(e),(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"top-brands",children:(0,j.jsx)(at,{preloadedTranslations:n,children:(0,j.jsx)(a.e,{client:m,children:(0,j.jsx)(Ye,{query:l})})})})):null},rt=(0,g.styled)(g.Skeleton)({transform:"none"}),ot=((0,g.styled)(Ze)({alignItems:"center"}),(0,g.styled)("div")((({theme:e})=>({marginTop:e.spacing(6),display:"grid",gap:50,gridTemplateColumns:"200px 200px 200px 200px",justifyContent:"center",[e.breakpoints.down("sm")]:{gap:"20px 30px",gridTemplateColumns:"154px 154px",gridTemplateRows:"154px 154px"},[e.breakpoints.down("xs")]:{gap:10}}))),(0,g.styled)(rt)((({theme:e})=>({width:e.spacing(40),height:e.spacing(40),borderRadius:999}))),(0,g.styled)(rt)((({theme:e})=>({height:e.spacing(9),marginTop:e.spacing(6),width:160,borderRadius:24}))),(0,g.styled)(g.Button)((({theme:e})=>({alignSelf:"center",height:"45px",marginTop:e.spacing(6),[e.breakpoints.up("sm")]:{marginTop:e.spacing(3)}})))),st=({relativeUrl:e,title:t})=>{const{getTestId:n}=(0,s.default)(),a=(0,m.useCallback)((()=>{window.dispatchEvent(new CustomEvent(Fe,{detail:{globalName:"",localName:t??"",placement:u.ug.VipCustomerBenefits,target:e??""}}))}),[e,t]);return e&&t?(0,j.jsx)(ot,{color:"default","data-testid":n("cta-button"),href:e,variant:"outlined",onClick:a,children:t}):null},lt=(0,g.styled)("img")((({theme:e})=>({width:27,[e.breakpoints.up("sm")]:{width:41}}))),dt=({url:e})=>{const t=(0,g.useTheme)();if(!e)return null;const n={backgroundColor:t.palette.grey[100],params:[{width:27,quality:95},{width:54,quality:90},{width:74,quality:85},{width:108,quality:80}],url:e},a=(0,qe.C)(n);return(0,j.jsx)(lt,{src:a[a.length-1]?.url,srcSet:(0,qe.G)(a),sizes:" (max-width: 959px) 27px, 41px ",alt:""})},ct=(0,g.styled)("li")((({theme:e})=>({display:"flex",flex:"auto",flexFlow:"row wrap",textAlign:"left",[e.breakpoints.up("sm")]:{flex:1,flexFlow:"column wrap",textAlign:"center"}}))),pt=(0,g.styled)("div")((()=>({flex:"47px 0 0"}))),gt=(0,g.styled)("div")((()=>({display:"flex",flex:1,flexFlow:"column wrap"}))),ut=(0,g.styled)(g.Typography)((({theme:e})=>({marginTop:e.spacing(2),[e.breakpoints.up("md")]:{fontSize:12}}))),mt=({title:e,subTitle:t,url:n})=>e&&t?(0,j.jsxs)(ct,{children:[(0,j.jsx)(pt,{children:(0,j.jsx)(dt,{url:n??""})}),(0,j.jsxs)(gt,{children:[(0,j.jsx)(g.Typography,{variant:"h6",component:"h2",children:e}),(0,j.jsx)(ut,{variant:"body1",children:t})]})]}):null,ht=x.Ps`
    fragment VipBenefits on Frontpage {
        vipBenefits {
            link {
                title
                relativeUrl
            }
            images {
                title
                subTitle
                url
            }
        }
    }
`,xt=x.Ps`
    ${ht}
    query GetVipBenefits {
        application {
            frontpage {
                ...VipBenefits
            }
        }
    }
`,ft=(0,g.styled)("section")((({theme:e})=>({alignItems:"center",background:"rgba(178, 175, 239, 0.2)",boxSizing:"border-box",color:e.palette.text.secondary,display:"flex",flexDirection:"column",marginBlockEnd:e.spacing(12),padding:e.spacing(6),width:"100%","& *":{boxSizing:"inherit"},[e.breakpoints.up("sm")]:{marginBlockEnd:e.spacing(20),padding:e.spacing(10,6,6,6)}}))),yt=(0,g.styled)("ul")((({theme:e})=>({display:"flex",flexDirection:"row",gap:e.spacing(4),justifyContent:"space-between",maxWidth:"1100px",width:"100%",[e.breakpoints.down("sm")]:{flexDirection:"column"}}))),bt=({query:e})=>{const{getTestId:t}=(0,s.default)(),{data:n}=(0,c.a)(e??xt),{link:a,images:i}=n?.application.frontpage?.vipBenefits??{};if(!a||!i||!i.length)return null;const r=i.filter((e=>null!==e)).map((e=>(0,m.createElement)(mt,{...e,key:e.title})));return(0,j.jsxs)(ft,{"data-testid":t("section"),children:[(0,j.jsx)(yt,{"data-testid":t("list"),children:r}),(0,j.jsx)(st,{...a})]})},vt=({apolloServerSideCache:e,config:t,query:n})=>{const{currentLanguage:l,graphqlUrl:d,tenant:c}=(0,i.S)(t),{token:p,customerId:g}=(0,r.d)(),u=(0,o.x)({clientToken:p,currentLanguage:l,customerId:g,graphqlUrl:d,tenant:c});return p?(e&&u.cache.restore(e),(0,j.jsx)(s.TestIdProvider,{team:s.Team.Presentation,project:"vip-benefits",children:(0,j.jsx)(a.e,{client:u,children:(0,j.jsx)(bt,{query:n})})})):null};var wt=n(9008),jt=n(87353),kt=n(87145),Tt=n.n(kt);const Ct=(0,g.styled)(g.Skeleton)({transform:"none"}),St=(0,g.styled)("div")((({theme:e})=>({display:"grid",gap:e.spacing(3),gridArea:"products",gridTemplateColumns:"repeat(4, 1fr)",height:"100%",width:"100%",[e.breakpoints.down("sm")]:{gap:e.spacing(2),gridTemplateColumns:"1fr 1fr",gridTemplateRows:"1fr 1fr"}}))),Bt=(0,g.styled)("section")((({theme:e})=>({display:"grid",gap:e.spacing(6,3),gridTemplateAreas:"\n        'title title'\n        'products banner'\n        ",gridTemplateColumns:"4fr 1fr",justifyContent:"center",justifyItems:"center",maxWidth:`calc(1366px - ${e.spacing(12)})`,margin:e.spacing(0,"auto",12),padding:e.spacing(0,6),position:"relative",[e.breakpoints.down("sm")]:{gap:e.spacing(3),gridTemplateAreas:"\n            'title'\n            'banner'\n            'products'\n            'view-offers'\n            ",gridTemplateColumns:"minmax(min-content, 727px)",padding:e.spacing(0,3)},[e.breakpoints.down("xs")]:{gridTemplateColumns:"minmax(min-content, 480px)"}}))),Pt=(0,g.styled)(Ct)((({theme:e})=>({margin:e.spacing("auto",0),gridArea:"title-start",justifySelf:"start",borderRadius:25,[e.breakpoints.down("sm")]:{gridArea:"view-offers"}}))),qt=(0,g.styled)(Ct)((({theme:e})=>({alignSelf:"stretch",borderRadius:5,gridArea:"banner",marginTop:-50,[e.breakpoints.down("sm")]:{borderRadius:5,marginTop:0}}))),It=(0,g.styled)(Ct)({alignSelf:"center",gridArea:"title"}),$t=Tt()(4),At=(0,m.memo)((()=>(0,j.jsxs)(Bt,{children:[(0,j.jsx)(It,{variant:"text",width:182,height:48}),(0,j.jsx)(Pt,{width:133,height:45}),(0,j.jsx)(qt,{height:453,width:300}),(0,j.jsx)(St,{children:$t.map((e=>(0,j.jsx)("div",{children:(0,j.jsx)(jt.$,{animation:"pulse"})},e)))})]})));var Ut=n(5152);const Wt=(0,Ut.default)((async()=>Promise.all([n.e(7646),n.e(9814),n.e(3552)]).then(n.bind(n,43552)).then((e=>e.BestOffersApp))),{ssr:!1,loading:()=>(0,j.jsx)(At,{})});var Et=n(5327);const Dt=(0,g.styled)(g.Skeleton)({transform:"none"}),Rt=(0,g.styled)("div")((({theme:e})=>({alignItems:"center",boxSizing:"border-box",display:"flex",flexDirection:"column",marginBlockEnd:e.spacing(20),padding:e.spacing(8,0),width:"100%","& *":{boxSizing:"inherit"},[e.breakpoints.down("sm")]:{overflow:"hidden"}}))),Nt=(0,g.styled)("div")((({theme:e})=>({display:"grid",justifyContent:"center",position:"relative",maxWidth:Et.N,width:"100%",gridTemplateColumns:"0.5fr 0.5fr",gridTemplateRows:"434px",[e.breakpoints.down("sm")]:{gridTemplateColumns:"1fr",gridTemplateRows:"250px 238px"}}))),Ot=(0,g.styled)(Dt)((({theme:e})=>({marginTop:e.spacing(6),textTransform:"uppercase",borderRadius:25,[e.breakpoints.down("sm")]:{marginBottom:e.spacing(6),justifySelf:"center"}}))),Lt=(0,g.styled)("div")((({theme:e})=>({display:"grid",flexDirection:"column",gridTemplateColumns:"73%",justifyContent:"center",alignContent:"center",[e.breakpoints.down("sm")]:{textAlign:"center",gridRow:1},[e.breakpoints.down("xs")]:{gridTemplateColumns:"1fr"}}))),zt=(0,g.styled)(Dt)((({theme:e})=>({marginBottom:e.spacing(6),[e.breakpoints.down("sm")]:{marginTop:e.spacing(4)}}))),Ft=(0,g.styled)(Dt)((({theme:e})=>({height:"19px",marginTop:e.spacing(2)}))),Vt=()=>(0,j.jsx)(Rt,{children:(0,j.jsxs)(Nt,{children:[(0,j.jsx)(Dt,{}),(0,j.jsxs)(Lt,{children:[(0,j.jsx)(zt,{width:350,height:37}),(0,j.jsx)(Ft,{width:"100%"}),(0,j.jsx)(Ft,{width:"100%"}),(0,j.jsx)(Ft,{width:"65%"}),(0,j.jsx)(Ot,{width:138,height:45})]})]})}),_t=(0,Ut.default)((async()=>n.e(8268).then(n.bind(n,68268)).then((e=>e.CampaignBannerApp))),{ssr:!1,loading:()=>(0,j.jsx)(Vt,{})}),Mt=(0,g.styled)(g.Skeleton)({transform:"none"}),Zt=(0,g.styled)("section")((({theme:e})=>({display:"grid",gap:e.spacing(3),gridTemplateAreas:"\n        'headline headline'\n        'shortText shortText'\n        'banner products'\n      ",gridTemplateColumns:"minmax(595px, 9fr) minmax(400px,11fr)",gridTemplateRows:"38px minmax(50px, min-content) minmax(379px, min-content)",justifyContent:"center",margin:e.spacing(0,"auto",20),maxWidth:1342,position:"relative",[e.breakpoints.between("md",1367)]:{paddingRight:e.spacing(4)},[e.breakpoints.down("sm")]:{padding:e.spacing(0,3),gridTemplateAreas:"\n          'headline'\n          'shortText'\n          'banner'\n          'products'\n          'button'\n        ",gridTemplateColumns:"minmax(min-content, 727px)",gridTemplateRows:"41px 66px minmax(220px, min-content) auto"}}))),Gt=(0,g.styled)(Mt)((({theme:e})=>({gridArea:"banner",position:"relative",borderRadius:"0px 5px 5px 0px",[e.breakpoints.down("sm")]:{borderRadius:e.spacing(1)}}))),Ht=(0,g.styled)("div")((({theme:e})=>({gridArea:"products",display:"grid",gap:e.spacing(3),gridTemplateColumns:"repeat(3, 1fr)",[e.breakpoints.down("xs")]:{"& >:nth-child(3)":{display:"none"},gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)"}}))),Kt=(0,g.styled)(g.Typography)((({theme:e})=>({gridArea:"headline",placeSelf:"center",[e.breakpoints.between("md",1367)]:{fontSize:40}}))),Jt=(0,g.styled)("div")({gridArea:"shortText",placeSelf:"center",maxWidth:600,width:"100%",margin:"0 auto 8px auto"}),Qt=(0,g.styled)(Mt)((({theme:e})=>({height:e.typography.pxToRem(14),margin:"8px auto 0 auto"}))),Xt=(0,g.styled)(Mt)({right:0,position:"absolute",gridArea:"headline-end",borderRadius:25}),Yt=Tt()(3),en=()=>(0,j.jsxs)(Zt,{children:[(0,j.jsx)(Kt,{variant:"h4",children:(0,j.jsx)(Mt,{width:300})}),(0,j.jsxs)(Jt,{children:[(0,j.jsx)(Qt,{width:"100%"}),(0,j.jsx)(Qt,{width:"60%"})]}),(0,j.jsx)(Gt,{}),(0,j.jsx)(Ht,{children:Yt.map((e=>(0,j.jsx)(jt.$,{animation:"pulse"},e)))}),(0,j.jsx)(Xt,{width:156,height:41})]}),tn=(0,Ut.default)((async()=>Promise.all([n.e(7646),n.e(9814),n.e(9561)]).then(n.bind(n,79561)).then((e=>e.CategoryListingApp))),{ssr:!1,loading:()=>(0,j.jsx)(en,{})}),nn=(0,Ut.default)((async()=>n.e(7413).then(n.bind(n,34820)).then((e=>e.NewsletterPopupApp))),{ssr:!1,loading:()=>(0,j.jsx)("div",{})}),an=(0,g.styled)(g.Skeleton)({transform:"none"}),rn=(0,g.styled)("section")((({theme:e})=>({display:"grid",gap:e.spacing(4,3),gridTemplateAreas:"\n        'title title'\n        'banner products'\n        ",gridTemplateColumns:"9fr 11fr",justifyContent:"center",justifyItems:"center",margin:e.spacing(0,"auto",20),maxWidth:"1346px",padding:e.spacing(0,4),position:"relative",[e.breakpoints.between("md",1367)]:{marginLeft:0,marginRight:e.spacing(4),padding:0},[e.breakpoints.down("sm")]:{gridTemplateAreas:"\n            'title'\n            'banner'\n            'products'\n            'view-all'\n            ",gridTemplateColumns:"minmax(min-content, 732px)",gap:e.spacing(3)},[e.breakpoints.down("xs")]:{gridTemplateColumns:"minmax(min-content, 478px)"}}))),on=(0,g.styled)(g.Typography)((({theme:e})=>({gridArea:"title",alignSelf:"center",fontSize:"40px",[e.breakpoints.between("md",1367)]:{lineHeight:1.35,marginLeft:e.spacing(4)}}))),sn=(0,g.styled)(an)((({theme:e})=>({gridArea:"title-start / products-start",alignSelf:"end",justifySelf:"end",margin:e.spacing(0,1),borderRadius:25,[e.breakpoints.down("sm")]:{gridArea:"view-all",justifySelf:"center"}}))),ln=(0,g.styled)(an)((({theme:e})=>({gridArea:"banner",alignSelf:"stretch",borderRadius:"0 5px 5px 0",position:"relative",[e.breakpoints.down("sm")]:{borderRadius:"5px",paddingTop:"62.5%"}}))),dn=(0,g.styled)("div")((({theme:e})=>({gridArea:"products",display:"grid",gap:e.spacing(3),gridTemplateColumns:"repeat(3, 1fr)",listStyle:"none",width:"100%",[e.breakpoints.down("xs")]:{gap:e.spacing(2),gridTemplateColumns:"repeat(2, 1fr)","& >:nth-child(3)":{display:"none"}}}))),cn=Tt()(3),pn=(0,m.memo)((()=>(0,j.jsxs)(rn,{children:[(0,j.jsx)(on,{variant:"h4",children:(0,j.jsx)(an,{variant:"text",width:150})}),(0,j.jsx)(sn,{width:110,height:45}),(0,j.jsx)(ln,{width:"100%"}),(0,j.jsx)(dn,{children:cn.map((e=>(0,j.jsx)(jt.$,{animation:"pulse"},e)))})]}))),gn=(0,Ut.default)((async()=>Promise.all([n.e(7646),n.e(9814),n.e(7428)]).then(n.bind(n,27428)).then((e=>e.WhatsNewApp))),{ssr:!1,loading:()=>(0,j.jsx)(pn,{})}),un=(0,Ut.default)((async()=>Promise.all([n.e(4218),n.e(5522),n.e(3554),n.e(2933),n.e(1220)]).then(n.bind(n,77947)).then((e=>e.OlapicWidget))),{ssr:!1,loading:()=>(0,j.jsx)("div",{})});var mn=n(95188),hn=n(76863),xn=n(74700),fn=n(9827),yn=n(64552);const bn=x.Ps`
    fragment VipCustomerBanner on Query {
        vipCustomerBanner {
            linkTitle
            linkUrl
        }
    }
`;x.Ps`
    ${bn}
    query GetVipCustomerBanner {
        ...VipCustomerBanner
    }
`;var vn=n(56448);const wn=x.Ps`
    ${fe}
    ${_e}
    ${J}
    ${Be}
    ${ht}
    ${f}
    ${ae}
    ${fn.$H}
    ${fn.CM}
    ${mn.J}
    ${vn.iG}
    ${xn.K}
    ${hn.E}
    ${bn}
    ${yn.w}
    query GetFrontPage($validityDate: Date) {
        application {
            frontpage {
                ...MotivationContent
                ...TopBrands
                ...BeautyVideo
                ...ProductStandards
                ...VipBenefits
                ...BeautyEdit
                ...CategoryNavigation
                ...BenefitBanner
                digitalPromotions(validityDate: $validityDate, channel: Website) {
                    heroBanners {
                        ...HeroBanner
                    }
                    bestOffersBanners {
                        ...BestOffersBanners
                    }
                    bestOffersProducts {
                        ...ProductWithShades
                    }
                    whatsNewBanners {
                        ...WhatsNewBanners
                    }
                    whatsNewProducts {
                        ...ProductWithShades
                    }
                    categoryBanners {
                        ...CategoryBanners
                    }
                    categoryProducts {
                        ...ProductWithShades
                    }
                    campaignBanners {
                        ...CampaignBanners
                    }
                }
            }
        }
        ...VipCustomerBanner
    }
`,jn=(x.Ps`
    ${yn.s}
    query GetProduct($productCode: ID!) {
        product(productCode: $productCode) {
            ...BaseProduct
            concept {
                ...BaseConcept
                benefits
                brand {
                    name
                    url
                }
                categories {
                    taxonomyId
                }
                productDescription
                products {
                    backInStockAvailability {
                        showBackInStockNotification
                    }
                    color
                    colorHexCode
                    colorImageUrl
                    formattedPrice {
                        price {
                            basicCataloguePrice
                            currentPrice
                        }
                    }
                    imageUrl
                    labels {
                        labelKey
                        productLabelDomain
                        title
                    }
                    price {
                        bp
                    }
                    productCode
                    volume
                    volumeUnit
                }
                ratingCount
            }
            pdpUrl {
                relativeUrl
            }
        }
    }
`,({apolloServerSideCache:e,currentLanguage:t,graphqlUrl:n,tenant:a,translations:i,olapicConfig:o})=>{const{customerId:s}=(0,r.d)(),l={apolloServerSideCache:e,config:JSON.stringify({graphqlUrl:n,tenant:a,customerId:s,currentLanguage:t}),query:wn,translations:i??{}};return(0,j.jsx)(g.StyledEngineProvider,{injectFirst:!0,children:(0,j.jsxs)(g.ThemeProvider,{enableCacheProvider:!0,cacheKey:"front-page",children:[(0,j.jsx)(he.P,{...l,HeadComponent:wt.default}),(0,j.jsx)(me,{...l}),(0,j.jsx)(gn,{...l}),(0,j.jsx)(Wt,{...l}),(0,j.jsx)(_t,{...l}),o?(0,j.jsx)(un,{...o}):null,(0,j.jsx)(tn,{...l}),(0,j.jsx)(N,{...l}),(0,j.jsx)(vt,{...l}),(0,j.jsx)(Se,{...l}),(0,j.jsx)(it,{...l}),(0,j.jsx)(Y,{...l}),(0,j.jsx)(ze,{...l}),(0,j.jsx)(nn,{graphqlUrl:n??"",tenant:a??"",currentLanguage:t??""})]})})});var kn=!0},56448:function(e,t,n){"use strict";n.d(t,{iG:function(){return r},VL:function(){return o}});var a=n(49704),i=n(64552);const r=a.Ps`
    fragment WhatsNewBanners on WhatsNewBanner {
        fontColor
        mobileFontColor
        headline
        imageUrl
        link {
            relativeUrl
            title
        }
    }
`,o=(a.Ps`
    ${i.w}
    fragment WhatsNew on DigitalPromotions {
        whatsNewBanners {
            fontColor
            mobileFontColor
            headline
            imageUrl
            link {
                relativeUrl
                title
            }
        }
        whatsNewProducts {
            ...ProductWithShades
        }
    }
`,a.Ps`
    ${r}
    ${i.w}
    query GetWhatsNew($validityDate: Date) {
        application {
            frontpage {
                digitalPromotions(validityDate: $validityDate, channel: Website) {
                    whatsNewBanners {
                        ...WhatsNewBanners
                    }
                    whatsNewProducts {
                        ...ProductWithShades
                    }
                }
            }
        }
    }
`)},39225:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(78744)}])}},function(e){e.O(0,[4174,515,3966,6772,3108,3852,9774,2888,179],(function(){return t=39225,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
//# sourceMappingURL=index-389643d4202fc3943775.js.map