(function(e){function t(t){for(var s,o,i=t[0],c=t[1],l=t[2],d=0,u=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);m&&m(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,o=1;o<a.length;o++){var i=a[o];0!==n[i]&&(s=!1)}s&&(r.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},o={app:0},n={app:0},r=[];function i(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c98583e7"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};o[e]?t.push(o[e]):0!==o[e]&&a[e]&&t.push(o[e]=new Promise((function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"3c305502"}[e]+".css",n=c.p+s,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===s||d===n))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===s||d===n)return t()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=t,m.onerror=function(t){var s=t&&t.target&&t.target.src||n,r=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete o[e],m.parentNode.removeChild(m),a(r)},m.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){o[e]=0})));var s=n[e];if(0!==s)if(s)t.push(s[2]);else{var r=new Promise((function(t,a){s=n[e]=[t,a]}));t.push(s[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(m);var a=n[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+o+")",u.name="ChunkLoadError",u.type=s,u.request=o,a[1](u)}n[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var m=d;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"1feb":function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[e._v("Registro")]),a("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}})]),a("section",{staticClass:"modal-card-body"},[a("b-field",{attrs:{label:"Nombres"}},[a("b-input",{attrs:{type:"text",placeholder:"Tus nombres",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("b-field",{attrs:{label:"Apellidos"}},[a("b-input",{attrs:{type:"text",placeholder:"Tus apellidos",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),a("b-field",{attrs:{label:"Email"}},[a("b-input",{attrs:{type:"email",placeholder:"Your email",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-field",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("b-field",{attrs:{label:"Password"}},[a("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"Your password",required:""},model:{value:e.password_c,callback:function(t){e.password_c=t},expression:"password_c"}})],1)],1),a("footer",{staticClass:"modal-card-foot"},[a("b-button",{staticClass:"button is-info",on:{click:function(t){return e.register()}}},[e._v("Registro")])],1)])])},o=[],n=(a("b0c0"),a("4a70")),r={methods:{register:function(){var e=this;Object(n["b"])(this.name,this.lastname,this.email,this.password,this.password_c).then((function(t){void 0!=t.data&&void 0==t.data.error&&(e.$store.commit("setToken",t.data.success.token),e.$emit("close"))}))}},data:function(){return{name:"",lastname:"",email:"",password:"",password_c:""}}},i=r,c=a("2877"),l=Object(c["a"])(i,s,o,!1,null,null,null);t["a"]=l.exports},"22b3":function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var s=a("bc3a"),o=a.n(s),n=a("4360");function r(){return""==n["a"].state.session.token?o.a.get(n["a"].state.session.url+"/data"):o.a.post(n["a"].state.session.url+"/data",{},{headers:{Authorization:"Bearer "+n["a"].state.session.token}})}},4360:function(e,t,a){"use strict";var s=a("2b0e"),o=a("2f62");s["a"].use(o["a"]),t["a"]=new o["a"].Store({state:{language:"po",session:{url:"https://api.rikuy.eyachay.com/api",user:{},token:""},config:{speed:100,nWords:1,nLines:1,split:!1},configRead:{speed:[100,200,300,400,500],min:100,max:500,step:50,common:[100,300,500]},currentExam:{score:0,total:0},currentText:{id:1,title:"",author:"",text:"",abstract:"",topic:"",level:"",complexity:"",words:""},readings:[{id:1,title:"Natureza",author:"Camila Pereira De Farias",text:"Natureza, uma palavra muito grande, que envolve tudo o que existe ao redor. É o grande cenário da vida – o que herdamos e o que já existia, mesmo sem a ação humana. A natureza está no Universo e é feita de água, de terra, de minérios, de vegetações. Ela é nossa moldura. É onde começa e termina.\n        Mas o que ela representa? Onde principia? Como a paisagem espelha e reflete nosso olhar, nosso sentir, nosso pensar?\n    Artistas de todos os tempos e lugares sempre perseguiam questões assim, criando suas próprias interpretações para o sentido da natureza.\n        Já maduro, vivendo em sua casa em Giverny, cercada de belos e vastos jardins, Monet confessou que durante toda a sua vida teve um único desejo: “mesclar-se o mais estritamente possível com a natureza”. Foi justamente o que ele conseguiu ao pintar suas séries de ninféias ou nenúfares, tipos de plantas aquáticas.\n        Monet não queria especificar as flores e folhas que retratava com precisão, mas sim propor um clima de natureza, pintando luzes e sombras, claridade e escuridão, folhagens e seus reflexos.\n        Van Gogh, um dos maiores nomes da arte ocidental, confere uma energia emocional a suas telas como nenhum outro artista. Sua maneira de pintar os ciprestes é manifestada por pinceladas nervosas, retorcidas, curvas, entrelaçadas. Ciprestes são árvores verdes-escuras, cuja estrutura é composta de pequenas e numerosas agulhas. Na pintura, eles lembram chamas e parecem adquirir vida. As nuvens também se retorcem e às vezes a paisagem parece prestes \n        a desabar.",abstract:"Natureza, uma palavra muito grande, que envolve tudo o que existe ao redor.",topic:"Natureza",level:"Basic",words:"249",language:"português",link:"https://acessaber.com.br/atividades/interpretacao-de-texto-natureza-4o-ano/"},{id:2,title:"Aconchego aprende uma palavra nova",author:"Helia Pereira",text:" – Comida! Comida! – grita a pequena filhote Aconchego toda vez que está com fome. Como neste momento.\n\n        A mãe dela, a tucano Solar, adora os piados de aconchego, mas ela gostaria que Aconchego aprendesse outras palavras também.\n    \n        É hora do almoço e Aconchego está na cadeirinha de bebê.\n    \n        – Comida! Comida! – ela pia.\n    \n        – Você consegue dizer “sementinhas”? – pergunta Solar, mostrando para Aconchego uma colher cheia de sementes.\n    \n        – Comida! Comida! – Aconchego pia ainda mais alto.\n    \n        Solar dá algumas sementes a Aconchego. Aconchego fica calada enquanto as mastiga.\n    \n        – Comida! Comida! – Aconchego pia novamente, assim que esvazia a boca.\n    \n        – Aconchego, você poderia pelo menos dizer “por favor”? – pede Solar, não tão paciente quanto antes.\n    \n        – Pavor! Pavor! – Aconchego grita estridente. Então, ela inclina a cabeça e pia – Comida!\n    \n        – Não, não “pavor”, Aconchego, você consegue dizer “por favor”? – Solar ri, pegando mais sementes.\n    \n        Aconchego fica tão agitada que começa a bater as asinhas. Uma delas bate na colher e as sementes voam todas pelo chão.\n    \n        – Ai, Aconchego, que bagunça! – Solar suspira. Ela rapidamente varre as sementes.\n    \n        Aconchego observa tudo isso quieta. Quando ela abre a boca para dizer alguma coisa. Solar rapidamente diz:\n    \n        – Comida, por favor! Comida, por favor!\n    \n        A boca de Aconchego se fecha e ela fica observando Solar por um momento. Então, ela diz:\n    \n        – Comida, por favor! Comida, por favor!\n    \n        – Aconchego, você conseguiu! – entoa Solar, toda sentimental.\n    \n        – Comida, por favor! Comida, por favor! – pia Aconchego.\n    \n        E Solar a alimenta, com um grande sorriso.",abstract:"Comida! Comida! – Aconchego pia ainda mais alto.",topic:"Comida",level:"Básico",language:"português",words:"263",link:"https://acessaber.com.br/atividades/interpretacao-de-texto-aconchego-aprende-uma-palavra-nova-4o-ano/"}]},mutations:{setConfig:function(e,t){e.config=t},setText:function(e,t){e.currentText=t},setExam:function(e,t){e.currentExam=t},setToken:function(e,t){e.session.token=t},setUser:function(e,t){e.session.user=t}},actions:{setStorage:function(e){localStorage.setItem("token",e.state.session.token),localStorage.setItem("user",JSON.stringify(e.state.session.user))},loadStorage:function(e){null!=localStorage.getItem("token")&&null!=localStorage.getItem("user")&&(e.commit("setToken",localStorage.getItem("token")),e.commit("setUser",JSON.parse(localStorage.getItem("user"))))}},modules:{}})},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function o(e){var t=n(e);return a(t)}function n(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}o.keys=function(){return Object.keys(s)},o.resolve=n,e.exports=o,o.id="4678"},"4a70":function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return i})),a.d(t,"c",(function(){return c}));var s=a("bc3a"),o=a.n(s),n=a("4360");function r(e,t,a,s,r){return o.a.post(n["a"].state.session.url+"/register",{name:e,lastname:t,email:a,password:s,password_c:r}).catch((function(){return alert("Servidor ocupado vuelva a intentar.")}))}function i(e,t){return o.a.post(n["a"].state.session.url+"/login",{email:e,password:t}).catch((function(){return alert("Servidor ocupado vuelva a intentar.")}))}function c(){return o.a.get(n["a"].state.session.url+"/user",{headers:{Authorization:"Bearer "+n["a"].state.session.token}}).then((function(e){void 0!=e.data&&(n["a"].state.session.user=e.data.success,n["a"].dispatch("setStorage"))})).catch((function(e){console.log(e),localStorage.clear()}))}},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"nav"}},[a("router-link",{attrs:{to:"/"}},[e._v("Portal")]),e._v(" | "),a("router-link",{attrs:{to:"/read"}},[e._v(e._s(e.text.play))]),e._v(" | "),a("router-link",{attrs:{to:"/help"}},[e._v(e._s(e.text.help))]),e._v(" | "),a("router-link",{attrs:{to:"/eyachay"}},[e._v("Eyachay")]),e._v(" | "),a("p",[a("button",{staticClass:"button is-small",on:{click:function(t){return e.setLang("es")}}},[e._v("Español")]),e._v(" | "),a("button",{staticClass:"button is-small",on:{click:function(t){return e.setLang("po")}}},[e._v(" Português ")])])],1),a("router-view",{key:e.test})],1)},n=[],r={methods:{setLang:function(e){this.$store.state.language=e,this.test+=1}},beforeMount:function(){this.$store.dispatch("loadStorage"),"es"==this.$store.state.language&&(this.text.play="Jugar",this.text.home="Portal",this.text.help="Colaborar"),"po"==this.$store.state.language&&(this.text.play="Jogar",this.text.help="Colaborar",this.text.home="Portal")},data:function(){return{text:{},test:0}}},i=r,c=(a("5c0b"),a("2877")),l=Object(c["a"])(i,o,n,!1,null,null,null),d=l.exports,u=(a("d3b7"),a("8c4f")),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("div",{staticClass:"card article"},[a("div",{staticClass:"card-content"},[a("p",{staticClass:"title article-title pb-5"},[e._v(" RIKUY: "+e._s(e.text.title)+" ")]),a("p",[e._v(" "+e._s(e.text.resume)+" ")]),a("router-link",{attrs:{to:"/read"}},[e._v(" "+e._s(e.text.link)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:""!=this.$store.state.session.token,expression:"this.$store.state.session.token != ''"}],staticClass:"columns is-centered is-vcentered"},[a("div",{staticClass:"column"},[a("div",{staticClass:"is-centered"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-offset-3 is-half"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-content"},[a("div",{staticClass:"media"},[a("div",{staticClass:"media-content"},[a("p",{staticClass:"title is-4"},[e._v(" "+e._s(e.$store.state.session.user.name)+" ")]),a("p",{staticClass:"subtitle is-6"},[e._v(" "+e._s(e.$store.state.session.user.email)+" ")])])]),e._m(0),e._m(1),a("div",{staticClass:"content"},[a("div",{staticClass:"buttons"},[a("b-button",{attrs:{type:"is-primary",expanded:""},on:{click:function(t){return e.$router.push("/read")}}},[e._v(e._s(e.text.again))])],1)])])])])])])])]),a("div",{directives:[{name:"show",rawName:"v-show",value:""==this.$store.state.session.token,expression:"this.$store.state.session.token == ''"}],staticClass:"columns is-centered is-vcentered"},[a("div",{staticClass:"column"},[a("div",{staticClass:"container"},[a("div",{staticClass:"container"},[a("div",{staticClass:"columns"},[a("div",{staticClass:"column is-half is-offset-3 is-centered is-vcentered"},[a("h1",{staticClass:"title"},[e._v("Ingresar")]),a("b-field",[a("b-input",{attrs:{placeholder:"Correo",icon:"account"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),a("b-field",[a("b-input",{attrs:{type:"password",placeholder:"Contraseña",icon:"security","password-reveal":""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),a("div",{staticClass:"buttons"},[a("b-button",{attrs:{type:"is-primary"},on:{click:function(t){return e.login()}}},[e._v(e._s(e.text.login))]),a("b-button",{attrs:{type:"is-primary is-light"},on:{click:function(t){e.showRegister=!0}}},[e._v(e._s(e.text.register))])],1)],1)])])])])])],1)])]),a("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},scopedSlots:e._u([{key:"default",fn:function(e){return[a("register",{on:{close:e.close}})]}}]),model:{value:e.showRegister,callback:function(t){e.showRegister=t},expression:"showRegister"}})],1)},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("canvas",{attrs:{height:"250px",id:"velocidad-chart"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("canvas",{attrs:{height:"250px",id:"planet-chart"}})])}],f=(a("4160"),a("fb6a"),a("9911"),a("159b"),a("1feb")),h=a("30ef"),b=a.n(h),v=a("4a70"),g=a("22b3"),j={components:{Register:f["a"]},beforeMount:function(){"es"==this.$store.state.language&&(this.text.resume="Rikuy es una plataforma que busca mejorar la velocidad de lectura usando inteligencia artificial. Este utiliza una técnicas avanzadas de lectura y exámenes para mejorar la comprensión lectora.",this.text.link="Para practicar clic en el boton leer o aquí.",this.text.comprehension="Comprensión",this.text.speed="Velocidad",this.text.ppm="Palabras por minuto",this.text.speedTime="Velocidad de lectura por fecha",this.text.you="Tu",this.text.others="Otros",this.text.comprehensionSpeed="Comprensión vs velocidad",this.text.again="Juguemos de nuevo",this.text.login="Ingresa",this.text.register="Regístrate",this.text.title="Plataforma de lectura rápida"),"po"==this.$store.state.language&&(this.text.resume="\nRikuy é uma plataforma que visa melhorar a velocidade de leitura usando inteligência artificial. Ele usa técnicas avançadas de leitura e teste para melhorar a compreensão da leitura.",this.text.link="Para praticar clique no menu ler ou aqui.",this.text.comprehension="Compreensão",this.text.speed="Rapidez",this.text.ppm="Palavras por minuto",this.text.speedTime="Velocidade de leitura por data",this.text.you="Você",this.text.others="Outros",this.text.comprehensionSpeed="Compreensão vs rapidez",this.text.again="Jogar de novo",this.text.login="Conecte-se",this.text.register="Inscrever-se",this.text.title="Plataforma de leitura rápida")},mounted:function(){Object(v["c"])().then((function(e){console.log(e)})),this.getData()},methods:{getData:function(){var e=this;Object(g["a"])().then((function(t){console.log(t),void 0!=t.data&&(e.dataComprehension=t.data.comprehension,e.mydataComprehension=t.data.mycomprehension,e.myspeed=[],e.dateSpeed=[],t.data.myspeed.forEach((function(t){e.myspeed.push(t.speed),e.dateSpeed.push(t.initial_date.slice(2,10))})),e.drawComprehension(),""!=e.$store.state.session.token&&e.drawSpeed())}))},login:function(){var e=this;Object(v["a"])(this.email,this.password).then((function(t){void 0!=t.data&&void 0==t.data.error&&(e.$store.commit("setToken",t.data.success.token),Object(v["c"])().then((function(e){console.log(e)})))}))},drawSpeed:function(){var e=document.getElementById("velocidad-chart"),t=new b.a(e,{type:"line",data:{labels:this.dateSpeed,datasets:[{label:this.text.you,data:this.myspeed,backgroundColor:"rgba(0,125,125,0.5)"}]},options:{title:{display:!0,text:this.text.speedTime},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});console.log(t)},drawComprehension:function(){var e=document.getElementById("planet-chart"),t=new b.a(e,{type:"scatter",data:{datasets:[{label:this.text.you,data:this.mydataComprehension,backgroundColor:"rgb(0,125,125)"},{label:this.text.others,data:this.dataComprehension,backgroundColor:"rgb(125,125,125)"}]},options:{tooltips:{callbacks:{label:function(e){return this.text.comprehension+e.yLabel+"% "+this.text.speed+e.xLabel+" ppm"}}},title:{display:!0,text:this.text.comprehensionSpeed},scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{label:"velocidad",type:"linear",position:"bottom",ticks:{callback:function(e){return e}}}]}}});console.log(t)}},data:function(){return{showRegister:!1,email:null,password:null,dataComprehension:[],mydataComprehension:[],myspeed:[],text:{},dateSpeed:[]}}},y=j,x=(a("873a"),Object(c["a"])(y,m,p,!1,null,"247f99e4",null)),k=x.exports;s["a"].use(u["a"]);var C=[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/quest",name:"Quest",component:function(){return a.e("about").then(a.bind(null,"2061"))}},{path:"/read",name:"Read",component:function(){return a.e("about").then(a.bind(null,"c844"))}},{path:"/help",name:"Help",component:function(){return a.e("about").then(a.bind(null,"c3ef"))}},{path:"/eyachay",beforeEnter:function(){location.href="http://eyachay.com"}}],w=new u["a"]({mode:"history",base:"/",routes:C}),_=w,z=a("4360"),S=a("289d"),A=a("bc3a"),q=a.n(A);s["a"].use(S["a"]),s["a"].prototype.$http=q.a,s["a"].config.productionTip=!1,new s["a"]({router:_,store:z["a"],render:function(e){return e(d)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),o=a.n(s);o.a},"873a":function(e,t,a){"use strict";var s=a("d5d0"),o=a.n(s);o.a},"9c0c":function(e,t,a){},d5d0:function(e,t,a){}});
//# sourceMappingURL=app.2732e3be.js.map