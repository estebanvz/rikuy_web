(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0446":function(t,e,s){"use strict";s.d(e,"a",(function(){return r})),s.d(e,"c",(function(){return o})),s.d(e,"b",(function(){return c}));s("ac1f"),s("1276");var n=s("bc3a"),a=s.n(n),i=s("4360");function r(){return a.a.get(i["a"].state.session.url+"/readings")}function o(t,e){return""==i["a"].state.session.token?a.a.get(i["a"].state.session.url+"/test",{params:{id:t,speed:e.speed,number_words:e.nWords,number_lines:e.nLines,splited:e.split,template_id:1}}):a.a.post(i["a"].state.session.url+"/test",{id:t,speed:e.speed,number_words:e.nWords,number_lines:e.nLines,splited:e.split,template_id:1},{headers:{Authorization:"Bearer "+i["a"].state.session.token}})}function c(t,e,s){return a.a.put(i["a"].state.session.url+"/questionexams/"+t,{time:e,user_answer:s})}},"0a57":function(t,e,s){"use strict";var n=s("e225"),a=s.n(n);a.a},1276:function(t,e,s){"use strict";var n=s("d784"),a=s("44e7"),i=s("825a"),r=s("1d80"),o=s("4840"),c=s("8aa5"),l=s("50c4"),u=s("14c3"),d=s("9263"),f=s("d039"),p=[].push,h=Math.min,v=4294967295,g=!f((function(){return!RegExp(v,"y")}));n("split",2,(function(t,e,s){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,s){var n=String(r(this)),i=void 0===s?v:s>>>0;if(0===i)return[];if(void 0===t)return[n];if(!a(t))return e.call(n,t,i);var o,c,l,u=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,g=new RegExp(t.source,f+"g");while(o=d.call(g,n)){if(c=g.lastIndex,c>h&&(u.push(n.slice(h,o.index)),o.length>1&&o.index<n.length&&p.apply(u,o.slice(1)),l=o[0].length,h=c,u.length>=i))break;g.lastIndex===o.index&&g.lastIndex++}return h===n.length?!l&&g.test("")||u.push(""):u.push(n.slice(h)),u.length>i?u.slice(0,i):u}:"0".split(void 0,0).length?function(t,s){return void 0===t&&0===s?[]:e.call(this,t,s)}:e,[function(e,s){var a=r(this),i=void 0==e?void 0:e[t];return void 0!==i?i.call(e,a,s):n.call(String(a),e,s)},function(t,a){var r=s(n,t,this,a,n!==e);if(r.done)return r.value;var d=i(t),f=String(this),p=o(d,RegExp),m=d.unicode,b=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(g?"y":"g"),x=new p(g?d:"^(?:"+d.source+")",b),_=void 0===a?v:a>>>0;if(0===_)return[];if(0===f.length)return null===u(x,f)?[f]:[];var C=0,w=0,y=[];while(w<f.length){x.lastIndex=g?w:0;var k,E=u(x,g?f:f.slice(w));if(null===E||(k=h(l(x.lastIndex+(g?0:w)),f.length))===C)w=c(f,w,m);else{if(y.push(f.slice(C,w)),y.length===_)return y;for(var $=1;$<=E.length-1;$++)if(y.push(E[$]),y.length===_)return y;w=C=k}}return y.push(f.slice(C)),y}]}),!g)},"14c3":function(t,e,s){var n=s("c6b6"),a=s("9263");t.exports=function(t,e){var s=t.exec;if("function"===typeof s){var i=s.call(t,e);if("object"!==typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(t,e)}},"155d":function(t,e,s){},2061:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quest"},[s("quest-a",{attrs:{quest:t.quest,answers:t.answers,id:1},on:{picked:t.show}}),s("quest-b",{attrs:{quest:t.quest,answers:t.answers,id:2},on:{picked:t.show}})],1)},a=[],i=s("a8bc"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quest"},[s("div",{staticClass:"field"},[s("p",{staticClass:"questText"},[t._v(" "+t._s(t.quest)+" ")])]),s("section",{staticClass:"answers"},t._l(t.selectedAnswers,(function(e,n){return s("div",{key:n,staticClass:"field"},[s("b-checkbox",{attrs:{"native-value":e.id},on:{input:t.selectedChoices},model:{value:t.selectedAnswers[n].selected,callback:function(e){t.$set(t.selectedAnswers[n],"selected",e)},expression:"selectedAnswers[index].selected"}},[t._v(" "+t._s(e.name)+" ")])],1)})),0)])},o=[];s("4160"),s("b0c0"),s("159b");function c(t){for(var e=t.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),n=[t[s],t[e]];t[e]=n[0],t[s]=n[1]}}var l={props:["id","quest","answers"],data:function(){return{selectedAnswers:[]}},methods:{selectedChoices:function(){this.$emit("picked",{selected:this.selectedAnswers,id:this.id})}},beforeMount:function(){var t=this;this.answers.forEach((function(e){t.selectedAnswers.push({selected:!1,name:e.name,id:e.id})})),c(this.selectedAnswers)}},u=l,d=(s("c071"),s("2877")),f=Object(d["a"])(u,r,o,!1,null,"4328404b",null),p=f.exports,h={name:"Quest",components:{QuestA:i["a"],QuestB:p},data:function(){return{quest:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, possimus\n        doloremque. Ea aliquid labore nam, inventore odio adipisci soluta\n        deserunt architecto tempore fugit ratione eveniet cumque. Est magni\n        totam omnis.",answers:[{name:"Default1",id:1},{name:"Default2",id:2}]}},mounted:function(){},methods:{show:function(t){console.log(t)}}},v=h,g=Object(d["a"])(v,n,a,!1,null,null,null);e["default"]=g.exports},3553:function(t,e,s){"use strict";var n=s("aefe"),a=s.n(n);a.a},"35bd":function(t,e,s){},"44e7":function(t,e,s){var n=s("861d"),a=s("c6b6"),i=s("b622"),r=i("match");t.exports=function(t){var e;return n(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==a(t))}},5319:function(t,e,s){"use strict";var n=s("d784"),a=s("825a"),i=s("7b0b"),r=s("50c4"),o=s("a691"),c=s("1d80"),l=s("8aa5"),u=s("14c3"),d=Math.max,f=Math.min,p=Math.floor,h=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};n("replace",2,(function(t,e,s,n){var m=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=n.REPLACE_KEEPS_$0,x=m?"$":"$0";return[function(s,n){var a=c(this),i=void 0==s?void 0:s[t];return void 0!==i?i.call(s,a,n):e.call(String(a),s,n)},function(t,n){if(!m&&b||"string"===typeof n&&-1===n.indexOf(x)){var i=s(e,t,this,n);if(i.done)return i.value}var c=a(t),p=String(this),h="function"===typeof n;h||(n=String(n));var v=c.global;if(v){var C=c.unicode;c.lastIndex=0}var w=[];while(1){var y=u(c,p);if(null===y)break;if(w.push(y),!v)break;var k=String(y[0]);""===k&&(c.lastIndex=l(p,r(c.lastIndex),C))}for(var E="",$=0,I=0;I<w.length;I++){y=w[I];for(var R=String(y[0]),T=d(f(o(y.index),p.length),0),S=[],L=1;L<y.length;L++)S.push(g(y[L]));var A=y.groups;if(h){var q=[R].concat(S,T,p);void 0!==A&&q.push(A);var P=String(n.apply(void 0,q))}else P=_(R,p,T,S,A,n);T>=$&&(E+=p.slice($,T)+P,$=T+R.length)}return E+p.slice($)}];function _(t,s,n,a,r,o){var c=n+t.length,l=a.length,u=v;return void 0!==r&&(r=i(r),u=h),e.call(o,u,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return s.slice(0,n);case"'":return s.slice(c);case"<":o=r[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>l){var d=p(u/10);return 0===d?e:d<=l?void 0===a[d-1]?i.charAt(1):a[d-1]+i.charAt(1):e}o=a[u-1]}return void 0===o?"":o}))}}))},"56ef8":function(t,e,s){},"5b63":function(t,e,s){"use strict";var n=s("6a93"),a=s.n(n);a.a},6547:function(t,e,s){var n=s("a691"),a=s("1d80"),i=function(t){return function(e,s){var i,r,o=String(a(e)),c=n(s),l=o.length;return c<0||c>=l?t?"":void 0:(i=o.charCodeAt(c),i<55296||i>56319||c+1===l||(r=o.charCodeAt(c+1))<56320||r>57343?t?o.charAt(c):i:t?o.slice(c,c+2):r-56320+(i-55296<<10)+65536)}};t.exports={codeAt:i(!1),charAt:i(!0)}},"6a93":function(t,e,s){},"8aa5":function(t,e,s){"use strict";var n=s("6547").charAt;t.exports=function(t,e,s){return e+(s?n(t,e).length:1)}},9263:function(t,e,s){"use strict";var n=s("ad6d"),a=s("9f7f"),i=RegExp.prototype.exec,r=String.prototype.replace,o=i,c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||l;d&&(o=function(t){var e,s,a,o,d=this,f=l&&d.sticky,p=n.call(d),h=d.source,v=0,g=t;return f&&(p=p.replace("y",""),-1===p.indexOf("g")&&(p+="g"),g=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(h="(?: "+h+")",g=" "+g,v++),s=new RegExp("^(?:"+h+")",p)),u&&(s=new RegExp("^"+h+"$(?!\\s)",p)),c&&(e=d.lastIndex),a=i.call(f?s:d,g),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=d.lastIndex,d.lastIndex+=a[0].length):d.lastIndex=0:c&&a&&(d.lastIndex=d.global?a.index+a[0].length:e),u&&a&&a.length>1&&r.call(a[0],s,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(a[o]=void 0)})),a}),t.exports=o},"949a":function(t,e,s){"use strict";var n=s("d7ef"),a=s.n(n);a.a},"9d36":function(t,e,s){"use strict";var n=s("155d"),a=s.n(n);a.a},"9f7f":function(t,e,s){"use strict";var n=s("d039");function a(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=a("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=a("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a8bc:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"quest"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}}),s("div",{staticClass:"field"},[s("p",{staticClass:"questText"},[t._v(" "+t._s(t.question.question.quest)+" "),t.answered&&1==t.correct?s("b-icon",{attrs:{type:"is-success",icon:"check"}}):t._e(),t.answered&&0==t.correct?s("b-icon",{attrs:{type:"is-danger",icon:"close"}}):t._e()],1)]),s("section",{staticClass:"answers"},t._l(t.answersT,(function(e,n){return s("div",{key:n,staticClass:"field"},[s("b-radio",{attrs:{"native-value":e,disabled:t.answered},on:{input:t.selectedChoice},model:{value:t.selectedAnswer,callback:function(e){t.selectedAnswer=e},expression:"selectedAnswer"}},[t._v(" "+t._s(e)+" ")])],1)})),0)],1)])])},a=[],i=(s("4160"),s("159b"),s("0446"));function r(t){for(var e=t.length-1;e>0;e--){var s=Math.floor(Math.random()*(e+1)),n=[t[s],t[e]];t[e]=n[0],t[s]=n[1]}}var o={props:["question"],data:function(){return{selectedAnswer:null,answersT:[],isLoading:!1,answered:!1,correct:null}},methods:{selectedChoice:function(t){var e=this;this.isLoading=!0,Object(i["b"])(this.question.id,this.question.time,t).then((function(t){console.log(t),void 0!=t.data&&(t.data,e.correct=t.data.correct),e.answered=!0,e.isLoading=!1,e.$store.commit("setExam",t.data.exam)}))}},beforeMount:function(){var t=this;this.question.question.answers.forEach((function(e){t.answersT.push(e)})),r(this.answersT)}},c=o,l=(s("5b63"),s("2877")),u=Object(l["a"])(c,n,a,!1,null,"2bcf9a42",null);e["a"]=u.exports},ac1f:function(t,e,s){"use strict";var n=s("23e7"),a=s("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(t,e,s){"use strict";var n=s("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},aefe:function(t,e,s){},c071:function(t,e,s){"use strict";var n=s("56ef8"),a=s.n(n);a.a},c844:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("b-steps",{attrs:{"has-navigation":!1},on:{input:function(e){return t.stepsChange()}},model:{value:t.steps,callback:function(e){t.steps=e},expression:"steps"}},[s("b-step-item",{attrs:{change:t.updateConfig,label:"Seleciona tu nivel",icon:"account-key"}},[s("div",{staticClass:"read columns is-centered is-vcentered"},[s("div",{staticClass:"column is-4"},[s("section",[s("div",{staticClass:"field blockText",class:{hideText:t.showText}},[s("div",t._l(t.nLineas,(function(e){return s("div",{key:e,staticClass:"columns"},t._l(t.nPalabras,(function(e){return s("div",{key:e,staticClass:"readText column",class:{halfText:t.partir,twoLines:t.nLineas>3&&t.nLineas<5,fiveLines:5==t.nLineas,textSmall:t.nPalabras>3}},[s("h2",[t._v("RIKUY")])])})),0)})),0)]),s("div",{staticClass:"field"},[s("b-field",{attrs:{label:"Velocidad"}},[s("b-slider",{attrs:{size:"is-medium",min:t.config.min,max:t.config.max,step:t.config.step,ticks:""},on:{input:t.changeInterval},model:{value:t.velocidad,callback:function(e){t.velocidad=e},expression:"velocidad"}},[t._l(t.config.common,(function(e){return[s("b-slider-tick",{key:e,attrs:{value:e}},[t._v(t._s(e))])]}))],2)],1)],1),s("div",{staticClass:"field"},[s("b-field",{attrs:{label:"Número de Palabras"}},[s("b-slider",{attrs:{size:"is-medium",min:1,max:5},model:{value:t.nPalabras,callback:function(e){t.nPalabras=e},expression:"nPalabras"}},[t._l([1,2,3,4,5],(function(e){return[s("b-slider-tick",{key:e,attrs:{value:e}},[t._v(t._s(e))])]}))],2)],1)],1),s("div",{staticClass:"field"},[s("b-field",{attrs:{label:"Número de Líneas"}},[s("b-slider",{attrs:{size:"is-medium",min:1,max:5,type:"is-danger"},model:{value:t.nLineas,callback:function(e){t.nLineas=e},expression:"nLineas"}},[t._l([1,2,3,4,5],(function(e){return[s("b-slider-tick",{key:e,attrs:{value:e}},[t._v(t._s(e))])]}))],2)],1)],1),s("div",{staticClass:"field"},[s("b-switch",{model:{value:t.partir,callback:function(e){t.partir=e},expression:"partir"}},[t._v("Partir")])],1),s("div",{staticClass:"field"},[s("b-switch",{attrs:{type:"is-danger",disabled:""}},[t._v("Plantilla")])],1)]),s("section",[s("b-button",{attrs:{type:"is-info",expanded:""},on:{click:function(e){return t.updateConfig()}}},[t._v("Jugar")])],1)])])]),s("b-step-item",{attrs:{label:"Seleciona tu lectura",icon:"account"}},[s("readings",{on:{next:t.nextStep}})],1),s("b-step-item",{attrs:{label:"Comienza a leer",icon:"account-plus"}},[s("speed-read",{ref:"refSpeedRead",on:{next:t.nextStep}})],1),s("b-step-item",{attrs:{label:"Preguntas",icon:"account-plus"}},[s("exam",{ref:"examRef",on:{next:t.nextStep}})],1),s("b-step-item",{attrs:{label:"Puntaje",icon:"account-plus"}},[s("final",{ref:"finalStep",on:{restart:t.restart}})],1)],1)],1)},a=[],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"read columns is-centered"},[s("div",{staticClass:"column is-4"},[t.playing?s("section",[s("div",{staticClass:"field blockText"},[s("div",t._l(t.currentWords,(function(e,n){return s("div",{key:n},[s("div",{staticClass:"readText column",class:{words1:1==t.config.nWords,words2:2==t.config.nWords,words3:3==t.config.nWords,words4:4==t.config.nWords,words5:5==t.config.nWords,halfText:t.config.split,twoLines:t.config.nLines>3&&t.config.nLines<5,fiveLines:5==t.config.nLines}},t._l(e,(function(e,n){return s("span",{key:n},[t._v(" "+t._s(e)+" ")])})),0)])})),0)])]):s("section",{staticClass:"blockText"},[s("b-button",{attrs:{type:"is-success"},on:{click:t.start}},[t._v("START")])],1),s("section",{staticClass:"pt-3"},[s("b-button",{attrs:{type:"is-warning"},on:{click:t.next}},[t._v("PREGUNTAS")])],1)])])])},r=[],o=(s("ac1f"),s("5319"),s("1276"),{name:"Read",data:function(){return{planilla:!1,timer:null,showText:!0,words:[],currentWords:[],currentIndex:0,playing:!1,texto:this.$store.state.currentText.text,config:this.$store.state.config}},beforeDestroy:function(){this.resetInterval()},methods:{next:function(){this.$emit("next")},start:function(){this.texto=this.$store.state.currentText.text,this.playing=!0,this.config=this.$store.state.config,this.words=this.texto.replace(/\s\s+/g," ").split(" "),this.changeInterval()},resetInterval:function(){this.playing=!1,this.currentIndex=0,clearInterval(this.timer)},changeInterval:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){if(t.currentIndex<t.words.length){t.currentWords=[];for(var e=0;e<t.config.nLines&&t.currentIndex<t.words.length;e++){for(var s=[],n=0;n<t.config.nWords&&t.currentIndex<t.words.length;n++)s.push(t.words[t.currentIndex]),t.currentIndex+=1;t.currentWords.push(s)}}else t.playing=!1,t.currentIndex=0,t.currentWords=[],clearInterval(t.timer)}),6e4/this.config.speed)}}}),c=o,l=(s("cf2f"),s("2877")),u=Object(l["a"])(c,i,r,!1,null,"bd8c8c3a",null),d=u.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"columns is-multiline is-centered"},t._l(t.readings,(function(e,n){return s("div",{key:n,staticClass:"column is-4",on:{click:function(s){return t.setText(e)}}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media mb-1"},[s("div",{staticClass:"media-content"},[s("b-button",{attrs:{type:"is-info is-uppercase mb-1",expanded:"",focused:""}},[t._v(t._s(e.title))]),s("a",{attrs:{href:e.link}},[t._v(t._s(e.author))])],1)]),s("div",{staticClass:"content mb-2"},[t._v(" "+t._s(e.abstract)+" ")]),s("b-taglist",{staticClass:"center"},[s("b-tag",{attrs:{type:"is-primary"}},[t._v("Nivel "+t._s(e.level))]),s("b-tag",{attrs:{type:"is-success"}},[t._v(t._s(e.topic.name))]),s("b-tag",{attrs:{type:"is-warning"}},[t._v("Palabras: "+t._s(e.words))]),s("b-tag",{attrs:{type:"is-info is-light"}},[t._v(t._s(e.language))])],1)],1)])])})),0)},p=[],h=s("0446"),v={data:function(){return{readings:[]}},beforeMount:function(){var t=this;this.readings=this.$store.state.readings,Object(h["a"])().then((function(e){void 0!=e.data&&(t.$store.state.readings=e.data,t.readings=t.$store.state.readings)}))},methods:{setText:function(t){this.$store.commit("setText",t),this.$emit("next")}}},g=v,m=(s("3553"),Object(l["a"])(g,f,p,!1,null,"28078770",null)),b=m.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{key:t.examKey,staticClass:"exam"},[s("br"),s("br"),t._l(t.questions,(function(e,n){return s("div",{key:n+t.examKey},[s("quest-a",{attrs:{question:e}}),s("hr"),s("b-loading",{attrs:{"is-full-page":!1,"can-cancel":!0},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}})],1)})),s("div",{staticClass:"buttons is-centered"},[s("b-button",{staticClass:"is-info",on:{click:function(e){return t.next()}}},[t._v(" Finalizar ")])],1)],2)},_=[],C=(s("4160"),s("159b"),s("a8bc")),w={components:{QuestA:C["a"]},data:function(){return{examKey:1,id:null,questions:[],loading:!1}},methods:{next:function(){this.$emit("next")},getQuestions:function(){var t=this;this.examKey+=1,this.id=this.$store.state.currentText.id,this.loading=!0,Object(h["c"])(this.id,this.$store.state.config).then((function(e){console.log(e),void 0!=e.data&&(t.$store.commit("setExam",e.data.exam),t.questions=e.data.questions,t.questions.forEach((function(t){t.question.answers=JSON.parse(t.question.answers)})),t.loading=!1)}))}}},y=w,k=(s("9d36"),Object(l["a"])(y,x,_,!1,null,"68d5bf72",null)),E=k.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"is-centered"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column"},[""==t.$store.state.session.token?s("div",{staticClass:"buttons is-centered"},[s("b-button",{attrs:{type:"is-info"},on:{click:function(e){t.showRegister=!0}}},[t._v("Regístrate")]),s("b-button",{attrs:{type:"is-info"},on:{click:function(e){t.showLogin=!0}}},[t._v("Ingresar")])],1):t._e(),s("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("register",{on:{close:e.close,resetData:t.getData}})]}}]),model:{value:t.showRegister,callback:function(e){t.showRegister=e},expression:"showRegister"}}),s("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"aria-role":"dialog","aria-modal":""},scopedSlots:t._u([{key:"default",fn:function(e){return[s("login",{on:{close:e.close,resetData:t.getData}})]}}]),model:{value:t.showLogin,callback:function(e){t.showLogin=e},expression:"showLogin"}})],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-offset-3 is-half"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[""!=t.$store.state.session.token?s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.$store.state.session.user.name))]),s("p",{staticClass:"subtitle is-6"},[t._v(" "+t._s(t.$store.state.session.user.email)+" ")])])]):t._e(),s("div",{staticClass:"content"},[t._v(" Comprensión: "),s("b-progress",{attrs:{value:t.$store.state.currentExam.score/t.$store.state.currentExam.total*100,"show-value":"",format:"percent"}},[t._v(" "+t._s((t.$store.state.currentExam.score/t.$store.state.currentExam.total*100).toFixed(0))+" % / 100 % ")])],1),s("div",{staticClass:"content"},[t._v(" Velocidad: "),s("b-taglist",{staticClass:"is-centered",attrs:{attached:""}},[s("b-tag",{attrs:{type:"is-dark"}},[t._v(t._s(t.$store.state.config.speed))]),s("b-tag",{attrs:{type:"is-info"}},[t._v("palabras por minuto")])],1),""!=t.$store.state.session.token?s("canvas",{attrs:{height:"250px",id:"velocidad-chart"}}):t._e()],1),t._m(0),s("div",{staticClass:"content"},[s("div",{staticClass:"buttons"},[s("b-button",{attrs:{type:"is-primary",expanded:""},on:{click:t.restart}},[t._v("Juguemos de nuevo")])],1)])])])])])])},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[s("canvas",{attrs:{height:"250px",id:"planet-chart"}})])}],R=(s("fb6a"),s("30ef")),T=s.n(R),S=s("1feb"),L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Ingresar")]),s("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(e){return t.$emit("close")}}})]),s("section",{staticClass:"modal-card-body"},[s("b-field",[s("b-input",{attrs:{placeholder:"Correo",icon:"account"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("b-field",[s("b-input",{attrs:{type:"password",placeholder:"Contraseña",icon:"security","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),s("footer",{staticClass:"modal-card-foot"},[s("b-button",{staticClass:"button is-info",on:{click:function(e){return t.login()}}},[t._v("Ingresar")])],1)])])},A=[],q=s("4a70"),P={methods:{login:function(){var t=this;Object(q["a"])(this.email,this.password).then((function(e){void 0!=e.data&&void 0==e.data.error&&(t.$store.commit("setToken",e.data.success.token),Object(q["c"])().then((function(t){console.log(t)})),t.$emit("resetData"),t.$emit("close"))}))}},data:function(){return{name:"",lastname:"",email:"",password:"",password_c:""}}},j=P,O=Object(l["a"])(j,L,A,!1,null,null,null),D=O.exports,N=s("22b3"),U={components:{Register:S["a"],Login:D},beforeMount:function(){},mounted:function(){},methods:{restart:function(){this.$emit("restart")},getData:function(){var t=this;Object(N["a"])().then((function(e){console.log(e),void 0!=e.data&&(t.dataComprehension=e.data.comprehension,t.mydataComprehension=e.data.mycomprehension,t.myspeed=[],t.dateSpeed=[],e.data.myspeed.forEach((function(e){t.myspeed.push(e.speed),t.dateSpeed.push(e.initial_date.slice(2,10))})),t.drawComprehension(),""!=t.$store.state.session.token&&t.drawSpeed())}))},drawSpeed:function(){var t=document.getElementById("velocidad-chart"),e=new T.a(t,{type:"line",data:{labels:this.dateSpeed,datasets:[{label:"Tu Velocidad de Lectura",data:this.myspeed,backgroundColor:"rgba(0,125,125,0.5)"}]},options:{title:{display:!0,text:"Velocidad de lectura vs Fecha"},scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}});console.log(e)},drawComprehension:function(){var t=document.getElementById("planet-chart"),e=new T.a(t,{type:"scatter",data:{datasets:[{label:"Todos los Intentos",data:this.dataComprehension,backgroundColor:"rgb(125,125,125)"},{label:"Tus intentos",data:this.mydataComprehension,backgroundColor:"rgb(0,125,125)"}]},options:{tooltips:{callbacks:{label:function(t){return"Comprensión "+t.yLabel+"% Velocidad "+t.xLabel+" ppm"}}},title:{display:!0,text:"Comprensión vs Velocidad"},scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{label:"velocidad",type:"linear",position:"bottom",ticks:{callback:function(t){return t}}}]}}});console.log(e)},drawGraphs:function(){var t=document.getElementById("planet-chart"),e=document.getElementById("velocidad-chart"),s=new T.a(t,{type:"scatter",data:{datasets:[{label:"Tus Intentos",data:[{x:450,y:40},{x:500,y:80},{x:350,y:100}],backgroundColor:"rgb(255,0,255)"}]},options:{tooltips:{callbacks:{label:function(t){return"Comprensión "+t.yLabel+"% Velocidad "+t.xLabel+" ppm"}}},title:{display:!0,text:"Comprensión vs Velocidad"},scales:{xAxes:[{label:"velocidad",type:"linear",position:"bottom",ticks:{callback:function(t){return t}}}]}}});console.log(s);var n=new T.a(e,{type:"line",data:{labels:["03-Jun","04-jun","04-jun","04-jun","04-jun","04-jun","04-jun"],datasets:[{label:"Tu Velocidad de Lectura",data:[100,259,375,220,220,255,240],backgroundColor:"rgba(2,22,0,0.5)"}]},options:{title:{display:!0,text:"Velocidad de lectura vs Fecha"}}});console.log(s),console.log(n)}},data:function(){return{showRegister:!1,showLogin:!1,dataComprehension:[],mydataComprehension:[],myspeed:[],dateSpeed:[]}}},W=U,M=(s("0a57"),Object(l["a"])(W,$,I,!1,null,"4b60298c",null)),B=M.exports,V={name:"Read",components:{SpeedRead:d,Exam:E,Readings:b,Final:B},data:function(){return{velocidad:100,nPalabras:1,nLineas:1,partir:!1,planilla:!1,timer:null,showText:!0,steps:0,config:{}}},beforeMount:function(){this.config=this.$store.state.configRead},beforeDestroy:function(){clearInterval(this.timer)},mounted:function(){this.changeInterval()},methods:{restart:function(){this.steps=0,this.stepsChange()},clearReading:function(){this.$refs.refSpeedRead.resetInterval()},stepsChange:function(){0==this.steps&&this.changeInterval(),2==this.steps&&this.clearReading(),3==this.steps&&this.$refs.examRef.getQuestions(),4==this.steps&&this.$refs.finalStep.getData()},changeInterval:function(){var t=this;clearInterval(this.timer),this.timer=setInterval((function(){t.showText=!t.showText}),6e4/this.velocidad)},updateConfig:function(){clearInterval(this.timer),console.log("ON"),this.$store.commit("setConfig",{speed:this.velocidad,nWords:this.nPalabras,nLines:this.nLineas,split:this.partir}),this.steps+=1},nextStep:function(){this.steps+=1,this.stepsChange()}}},K=V,F=(s("949a"),Object(l["a"])(K,n,a,!1,null,"474c51fa",null));e["default"]=F.exports},cf2f:function(t,e,s){"use strict";var n=s("35bd"),a=s.n(n);a.a},d784:function(t,e,s){"use strict";s("ac1f");var n=s("6eeb"),a=s("d039"),i=s("b622"),r=s("9263"),o=s("9112"),c=i("species"),l=!a((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),f=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),p=!a((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var s="ab".split(t);return 2!==s.length||"a"!==s[0]||"b"!==s[1]}));t.exports=function(t,e,s,d){var h=i(t),v=!a((function(){var e={};return e[h]=function(){return 7},7!=""[t](e)})),g=v&&!a((function(){var e=!1,s=/a/;return"split"===t&&(s={},s.constructor={},s.constructor[c]=function(){return s},s.flags="",s[h]=/./[h]),s.exec=function(){return e=!0,null},s[h](""),!e}));if(!v||!g||"replace"===t&&(!l||!u||f)||"split"===t&&!p){var m=/./[h],b=s(h,""[t],(function(t,e,s,n,a){return e.exec===r?v&&!a?{done:!0,value:m.call(e,s,n)}:{done:!0,value:t.call(s,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),x=b[0],_=b[1];n(String.prototype,t,x),n(RegExp.prototype,h,2==e?function(t,e){return _.call(t,this,e)}:function(t){return _.call(t,this)})}d&&o(RegExp.prototype[h],"sham",!0)}},d7ef:function(t,e,s){},e225:function(t,e,s){},f820:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("This is an about page")])])}],i=s("2877"),r={},o=Object(i["a"])(r,n,a,!1,null,null,null);e["default"]=o.exports}}]);
//# sourceMappingURL=about.090919c3.js.map