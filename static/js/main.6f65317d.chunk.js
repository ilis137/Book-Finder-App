(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports={App:"App_App__daKDk",flex_row:"App_flex_row__UaoGe"}},26:function(e,a,t){e.exports={layout:"Layout_layout__2Dl7v"}},27:function(e,a,t){e.exports={error:"Error_error__2zbk4"}},28:function(e,a,t){e.exports=t(94)},34:function(e,a,t){},6:function(e,a,t){e.exports={card_container:"moviecard_card_container__Y-JH-",card:"moviecard_card__1ljXm",movie_info:"moviecard_movie_info__2DLp4",btn:"moviecard_btn__2dmIs",content:"moviecard_content__l9YUo",title:"moviecard_title__qFCOo",image_container:"moviecard_image_container__2Ds7m",image:"moviecard_image__3r6Qx"}},7:function(e,a,t){e.exports={search:"Search_search__2gCBm",btn:"Search_btn__U3tBh",searchBoxContainer:"Search_searchBoxContainer__19xQH",searchSuggestions:"Search_searchSuggestions__UfFvg",searchSuggestionsItem:"Search_searchSuggestionsItem__1qQo1",input:"Search_input__3sRe3",emptyQuery:"Search_emptyQuery__1qe5E"}},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),c=t.n(o),s=(t(34),t(8)),l=t(3),i=t(25),m=t.n(i),u=t(26),h=t.n(u),_=function(e){return r.a.createElement("div",{className:h.a.layout},e.children)},d=t(7),g=t.n(d),p=function(e){return r.a.createElement("div",{onKeyPress:e.handlekeyPress},r.a.createElement(l.Col,{s:12,l:6,className:g.a.search},r.a.createElement(l.Col,{s:12,m:9,className:g.a.searchBoxContainer},r.a.createElement(l.Input,{s:12,inline:!0,className:g.a.input,onChange:e.onInput,onFocus:e.handleFocus,onBlur:e.handleFocus,"data-testid":"search-textbox"}),e.searchBarFocus?r.a.createElement("ul",{className:g.a.searchSuggestions},e.searchItems.map(function(a,t,n){return r.a.createElement("li",{className:g.a.searchSuggestionsItem,onClick:e.handleSelectOption,value:n[n.length-t-1]},n[n.length-t-1])})):null),r.a.createElement(l.Button,{waves:"light",className:g.a.btn,onClick:e.makeSearch},"Search"),r.a.createElement(l.Row,null,r.a.createElement(l.Col,{s:12},e.noQueryError?r.a.createElement("p",{className:g.a.emptyQuery,"data-testid":"noqueryerror"},e.noQueryError):null))))},f=t(6),E=t.n(f),v=function(e){return e.resultMovies.map(function(e,a){return r.a.createElement(l.Col,{s:12,m:12,l:6,className:E.a.card_container,key:a},r.a.createElement(l.Card,{className:E.a.card,horizontal:!0},r.a.createElement("div",{className:E.a.movie_info},r.a.createElement("div",{className:E.a.image_container},e.volumeInfo.imageLinks?r.a.createElement("img",{className:E.a.image,src:e.volumeInfo.imageLinks.thumbnail,alt:"book_image"}):"N/A"),r.a.createElement("div",{className:E.a.content},r.a.createElement("h3",{className:E.a.title},e.volumeInfo.title),r.a.createElement("p",null,"By:",e.volumeInfo.authors?e.volumeInfo.authors.join(","):"N/A"),r.a.createElement("p",null,"Published by:",e.volumeInfo.publisher?e.volumeInfo.publisher:"N/A"))),r.a.createElement(l.Button,{className:E.a.btn,node:"a",href:e.volumeInfo.infoLink},"SEE MORE")))})},y=function(){return r.a.createElement(l.Col,{s:12,style:{display:"flex",justifyContent:"center",marginTop:"100px"}},r.a.createElement(l.Preloader,{size:"big",color:"green"}))},S=t(27),b=t.n(S),N=function(e){return console.log(e.error),r.a.createElement("div",null,r.a.createElement("h2",{className:b.a.error},e.error)," ")},w=t(16),I=t.n(w),O=function(e){var a=Object(n.useState)(""),t=Object(s.a)(a,2),o=t[0],c=t[1],i=Object(n.useState)([]),u=Object(s.a)(i,2),h=u[0],d=u[1],g=Object(n.useState)(!1),f=Object(s.a)(g,2),E=f[0],S=f[1],b=Object(n.useState)(""),w=Object(s.a)(b,2),O=w[0],k=w[1],x=Object(n.useState)(""),j=Object(s.a)(x,2),B=j[0],C=j[1],H=Object(n.useState)(!1),F=Object(s.a)(H,2),A=F[0],Q=F[1],J=Object(n.useState)(""),R=Object(s.a)(J,2),D=(R[0],R[1],function(){if(!o)return k("First please enter a query!");k(""),S(!0),m.a.get("https://www.googleapis.com/books/v1/volumes?q=".concat(o,"&maxResults=30&key=").concat("AIzaSyBlruAKHW0ctVTlcWdkDDJHOKylZNgF4dg"),{timeout:2e3}).then(function(e){var a=JSON.parse(localStorage.getItem("searchHistory"));if(console.log(a),a||((a={}).searchHistory=[]),10==a.searchHistory.length&&a.searchHistory.shift(),a.searchHistory=a.searchHistory.concat(o),localStorage.setItem("searchHistory",JSON.stringify(a)),C(""),0==e.data.totalItems)return S(!1),C("NO RESULTS FOUND");var t=e.data.items;d(t),S(!1)}).catch(function(e){"timeout of 2000ms exceeded"==e.message?C("timeout reached"):C(e.message),d([]),S(!1)})});return r.a.createElement("div",null,r.a.createElement(_,null,r.a.createElement(l.Row,null,r.a.createElement("h3",{className:I.a.App,style:E||h.length?null:{marginTop:"200px"}},"Book Finder")),r.a.createElement(l.Row,null,r.a.createElement(p,{onInput:function(e){c(e.target.value)},makeSearch:D,handlekeyPress:function(e){13==e.which&&(document.activeElement.blur(),D())},noQueryError:O,searchBarFocus:A,handleFocus:function(e){Q(!A)},searchItems:JSON.parse(localStorage.getItem("searchHistory"))?JSON.parse(localStorage.getItem("searchHistory")).searchHistory:null,"data-testid":"search-comp"})),r.a.createElement(l.Row,{className:I.a.flex_row},E?r.a.createElement(y,null):B?r.a.createElement(N,{error:B}):r.a.createElement(v,{resultMovies:h}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,1,2]]]);
//# sourceMappingURL=main.6f65317d.chunk.js.map