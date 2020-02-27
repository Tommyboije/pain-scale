(this["webpackJsonppain-scale"]=this["webpackJsonppain-scale"]||[]).push([[0],{26:function(e,a,t){e.exports=t(37)},31:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(16),c=t.n(r),s=(t(31),t(9)),i=t(11),m=t(22),o=t(17),d=t(18),u=t(24),p=t(19),b=t(25),v=t(5),E=t(2),g=Object(E.a)(),N=t(7),k=function(e,a){return e===a?"active":""},f=function(e){var a=e.title,t=e.description,n=e.number,r=e.scaleNum,c=e.buttonHandler,s=e.reactKey,i=e.fieldValue,m="";return 0!==s&&(m=null===i?"disabled-field":""),l.a.createElement("div",{className:"field ".concat(m)},l.a.createElement("div",{className:"field-content"},l.a.createElement("div",null,l.a.createElement("b",{className:"field-number"},n,". ")),l.a.createElement("div",null,l.a.createElement("h4",{className:"field-title"},a),l.a.createElement("p",{className:"field-description"},t),l.a.createElement("i",{className:"word-break"}),function(e,a,t,n){switch(e){case 1:return l.a.createElement("div",{className:"scale-info","data-id":t},l.a.createElement("a",{href:"# ",className:"button ".concat(k(0,n)),onClick:a,"data-value":"0"},"Inte alls"),l.a.createElement("a",{href:"# ",className:"button ".concat(k(1,n)),onClick:a,"data-value":"1"},"S\xe4llan"),l.a.createElement("a",{href:"# ",className:"button ".concat(k(2,n)),onClick:a,"data-value":"2"},"Ibland"),l.a.createElement("a",{href:"# ",className:"button ".concat(k(3,n)),onClick:a,"data-value":"3"},"Ofta"));case 2:return l.a.createElement("div",{className:"scale-info","data-id":t},l.a.createElement("a",{href:"# ",className:"button ".concat(k(0,n)),onClick:a,"data-value":"0"},"Inte alls"),l.a.createElement("a",{href:"# ",className:"button ".concat(k(1,n)),onClick:a,"data-value":"1"},"Lite"),l.a.createElement("a",{href:"# ",className:"button ".concat(k(2,n)),onClick:a,"data-value":"2"},"M\xe5ttligt"),l.a.createElement("a",{href:"# ",className:"button ".concat(k(3,n)),onClick:a,"data-value":"3"},"Mycket"));default:return l.a.createElement(l.a.Fragment,null)}}(r,c,s,i))))},h=function(e){var a=e.state,t=e.title,n=e.settingsHandler,r=e.changeHandler;return l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav-container"},l.a.createElement("h1",{className:"title"},t),l.a.createElement("a",{href:"# ",onClick:n,className:"settings-link"},l.a.createElement("i",{className:"settings-icon"}))),l.a.createElement("div",{className:"popup ".concat(a.hidePopup?"hidden":"")},l.a.createElement("div",{className:"popup-module"},l.a.createElement("div",{className:"popup-content"},l.a.createElement("div",{className:"popup-top-bar"},l.a.createElement("h3",{className:"sub-title"},"Bed\xf6mning skickas till..."),l.a.createElement("a",{href:"# ",onClick:n,className:"close-link"},l.a.createElement("i",{className:"close"}))),l.a.createElement("input",{className:"input-text input-popup",type:"email",name:"receiverEmailInput",value:a.receiverEmailInput,onChange:r,placeholder:"E-post..."}),l.a.createElement("a",{href:"# ",onClick:n,className:"link popup-link"},"Spara")),l.a.createElement("div",{className:"popup-section"},l.a.createElement("p",{className:"text-gray"},"Det h\xe4r verktyget \xe4r en digital variant av sm\xe4rtskattningsskalan ",l.a.createElement("a",{href:"http://media.palliativ.se/2015/08/AbbeyPalliativ2011Sve1.pdf",target:"_blank",rel:"noopener no referrer"},"Abbey Pain Scale"),", en sm\xe4rtskattningsskala f\xf6r anv\xe4ndning vid v\xe5rd av personer med nedsatta funktioner eller som inte kan verbalisera sin sm\xe4rta.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("span",{className:"text-medium"},"Du kan l\xe4sa mer om skattning av sm\xe4rta p\xe5 "),l.a.createElement("a",{href:"https://www.vardhandboken.se/vard-och-behandling/akut-bedomning-och-skattning/smartskattning-av-akut-och-postoperativ-smarta/smartskattningsinstrument/",target:"_blank",rel:"noopener noreferrer"},"vardhandboken.se"))),l.a.createElement("div",{className:"popup-section"},l.a.createElement("h3",{className:"copyright"},"Appen \xe4r utvecklad av Max p\xe5 Hbg Works."),l.a.createElement("p",{className:"text-gray"},"Har du ocks\xe5 en id\xe9 till en l\xf6sning som skulle f\xf6renkla livet i din verksamhet?"),l.a.createElement("a",{href:"mailto:hbgworks@helsingborg.se",target:"_blank",rel:"noopener noreferrer",className:"link cta-button"},"H\xf6r av dig! \u2764\ufe0f")))))},y=function(e){var a=e.state,t=e.buttonHandler,n=e.settingsHandler,r=e.changeHandler;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"pain-scale"},l.a.createElement(h,{title:"Sm\xe4rtskattning",state:a,settingsHandler:n,changeHandler:r}),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"inner-content"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{className:"card-image",src:"./scale-faces.png",alt:""}),l.a.createElement("div",{className:"card-child"},l.a.createElement("h3",{className:"card-title"},"Hur g\xf6r jag?"),l.a.createElement("p",{className:"card-description"},"I f\xf6ljande 6 steg, observera personen och ange vad du ser. F\xf6r steg 2. ",l.a.createElement("b",null,"Ansiktsuttryck"),", kan du anv\xe4nda bilden ovan som hj\xe4lp."))),function(e,a){return e.fields.map((function(e,t){return l.a.createElement(f,{title:e.title,description:e.description,number:t+1,key:t,reactKey:t,scaleNum:e.scaleNum,buttonHandler:a,fieldValue:e.fieldValue})}))}(a,t),l.a.createElement(N.a,{className:"link link-results ".concat(a.disableShowResults?"disabled disabled-link":""),to:"/results"},"Se resultat ")),l.a.createElement("img",{src:"./watermark.svg",alt:"Watermark logo",className:"watermark"}))))},x=t(23),H=function(e){var a=e.state,t=e.settingsHandler,r=e.changeHandler,c=Object(n.useState)({sent:"",error:"",spinner:!1}),s=Object(x.a)(c,2),i=s[0],m=s[1];Object(n.useEffect)((function(){window.scrollTo(0,0),a.disableShowResults&&g.push("/")}),[]);var o=function(e,t){var n=a.painPoints;return n>=e&&n<=t?"":"inactive"};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"result"},l.a.createElement(h,{title:"Resultat",state:a,settingsHandler:t,changeHandler:r}),l.a.createElement("div",{className:"section"},l.a.createElement("div",{className:"inner-content"},l.a.createElement("div",{className:"result-content"},l.a.createElement("div",{className:"result-scale"},l.a.createElement("h3",{className:"sub-title"},"Obeserverad sm\xe4rtniv\xe5"),l.a.createElement("p",{className:"sub-description"},l.a.createElement("b",null,"Dina observation tyder p\xe5 att personens antagna sm\xe4rtniv\xe5 \xe4r:")),l.a.createElement("div",{className:"indications"},l.a.createElement("div",null,l.a.createElement("span",{className:"none ".concat(o(0,2))},"Ingen"),l.a.createElement("span",{className:"mild ".concat(o(3,7))},"Mild"),l.a.createElement("span",{className:"moderate ".concat(o(8,13))},"M\xe5ttlig"),l.a.createElement("span",{className:"accute ".concat(o(14,18))},"Sv\xe5r")),l.a.createElement("div",null,l.a.createElement("span",{className:"none ".concat(o(0,2))},"0-2"),l.a.createElement("span",{className:"mild ".concat(o(3,7))},"3-7"),l.a.createElement("span",{className:"moderate ".concat(o(8,13))},"8-13"),l.a.createElement("span",{className:"accute ".concat(o(14,18))},"14+")))),l.a.createElement("form",{className:"result-form",onSubmit:function(e){e.preventDefault(),e.persist(),m({spinner:!0});var t="\n        <ul>\n          ".concat(a.fields.map((function(e,a){return"<li>\n                <span>".concat(a+1,". ").concat(e.title,": </span>\n                <b>").concat(e.fieldValue,"</b>\n              </li>")})).join(""),"\n        </ul>\n\n        <span><b>Total: </b>").concat(a.painPoints,"</span>\n\n        <br></br>\n\n        <span><b>Sm\xe4rtniv\xe5: </b></span>\n        ").concat("inactive"===o(0,2)?"":"<span>Ingen (0-2)</span>","\n        ").concat("inactive"===o(3,7)?"":"<span>Mild (3-7)</span>","\n        ").concat("inactive"===o(8,13)?"":"<span>M\xe5ttlig (8-13)</span>","\n        ").concat("inactive"===o(14,18)?"":"<span>Sv\xe5r (14-18)</span>","\n\n        <br></br>\n        <br></br>\n\n        <span>Typ av sm\xe4rta</span>\n        <ul>\n          <li>\n            <b>L\xe5ngvarig: </b>").concat(a.lasting?"Ja":"Nej","\n          </li>\n          <li>\n            <b>Akut: </b>").concat(a.accute?"Ja":"Nej","\n          </li>\n          <li>\n            <b>Blandad: </b>").concat(a.mixed?"Ja":"Nej","\n          </li>\n        </ul>\n\n        <span><b>Namn p\xe5 patient: </b>").concat(a.patientName,"</span>\n        <br></br>\n        <span><b>Ditt namn: </b>").concat(a.yourName,"</span>\n      "),n={to_email:a.receiverEmailInput,from_name:"Pain Scale App",from_email:"max.frederiksen@ecsolutions.se",reply_to:"max.frederiksen@ecsolutions.se",to_name:a.yourName,message_html:t};window.emailjs.send("gmail","template_BxjtD38x",n).then((function(){m({sent:"Bed\xf6mning skickad!",spinner:!1})})).catch((function(e){return m({error:"Ett fel intr\xe4ffade: V\xe4nliged fyll i en giltig e-postadress"})}))}},l.a.createElement("h3",{className:"sub-title"},"Typ av sm\xe4rta"),l.a.createElement("br",null),l.a.createElement("div",{className:"checkboxes"},l.a.createElement("div",{className:"checkbox-button"},l.a.createElement("label",null,l.a.createElement("input",{className:"".concat(a.lasting?"active":""),type:"checkbox",name:"lasting",checked:a.lasting,onChange:r}),l.a.createElement("span",null,"L\xe5ngvarig"))),l.a.createElement("div",{className:"checkbox-button"},l.a.createElement("label",null,l.a.createElement("input",{className:"".concat(a.accute?"active":""),type:"checkbox",name:"accute",checked:a.accute,onChange:r}),l.a.createElement("span",null,"Akut"))),l.a.createElement("div",{className:"checkbox-button"},l.a.createElement("label",null,l.a.createElement("input",{className:"".concat(a.mixed?"active":""),type:"checkbox",name:"mixed",checked:a.mixed,onChange:r}),l.a.createElement("span",null,"Blandad")))),l.a.createElement("label",{htmlFor:"patient-name"},l.a.createElement("h3",{className:"sub-title"},"Patient")),l.a.createElement("input",{className:"input-text",type:"text",name:"patientName",value:a.patientName,onChange:r,placeholder:"Namn eller rumsnummer"}),l.a.createElement("label",{htmlFor:"your-name"},l.a.createElement("h3",{className:"sub-title"},"Sjuksk\xf6terska / L\xe4kare")),l.a.createElement("input",{className:"input-text",type:"text",name:"yourName",value:a.yourName,onChange:r,placeholder:"Ditt namn"}),l.a.createElement("div",null,l.a.createElement("div",{className:"bottom-buttons"},l.a.createElement("div",null,l.a.createElement(N.a,{to:"pain-scale",className:"link previous"},l.a.createElement("i",{className:"arrow-back"})," Tillbaka till observationen")),l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"link ".concat(a.receiverEmailInput?"":"disabled disabled-link")},l.a.createElement("span",{class:"tooltiptext ".concat(a.receiverEmailInput?"hidden":"")},"Email eller telefon m\xe5ste fyllas i under inst\xe4llningar."),"Skicka bed\xf6mmningen"))),l.a.createElement("span",null,l.a.createElement("div",{className:"spinner ".concat(i.spinner?"":"hidden")},l.a.createElement("div",{className:"bounce1"}),l.a.createElement("div",{className:"bounce2"}),l.a.createElement("div",{className:"bounce3"})))),l.a.createElement("span",{className:"sent"},i.sent),l.a.createElement("span",{className:"error"},i.error)))),l.a.createElement("img",{src:"./watermark.svg",alt:"Watermark logo",className:"watermark"}))))},S=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(u.a)(this,Object(p.a)(a).call(this))).buttonHandler=function(a){a.preventDefault(),a.persist();var t=a.target.parentNode,n=t.parentNode.parentNode.parentNode.nextSibling,l=t.getAttribute("data-id"),r=t.querySelectorAll(".button"),c=t.querySelector(".active")?t.querySelector(".active").getAttribute("data-value"):0,s=a.target.getAttribute("data-value"),i=parseInt(s)-parseInt(c),o=Object(m.a)(e.state.fields),d=document.querySelectorAll(".disabled-field");if(n.classList.remove("disabled-field"),o[l].fieldValue=Number(s),d.length<=0&&e.setState({disableShowResults:!1}),-1===Array.from(a.target.classList).indexOf("active")){var u=!0,p=!1,b=void 0;try{for(var v,E=r[Symbol.iterator]();!(u=(v=E.next()).done);u=!0){v.value.classList.remove("active")}}catch(g){p=!0,b=g}finally{try{u||null==E.return||E.return()}finally{if(p)throw b}}a.target.classList.add("active"),e.setState({painPoints:e.state.painPoints+i,fields:o})}},e.infoHandler=function(a){a.preventDefault(),a.persist(),e.setState((function(e){return{hideInfoBox:!e.hideInfoBox,infoIconFilled:!e.infoIconFilled}}))},e.settingsHandler=function(a){a.preventDefault(),a.persist(),document.getElementsByTagName("body")[0].classList.toggle("noscroll"),e.setState((function(e){return{hidePopup:!e.hidePopup}}))},e.changeHandler=function(a){a.persist();var t=a.target.value,n=a.target.name,l=a.target.type,r=a.target.checked;"checkbox"===l?e.setState(Object(i.a)({},e.state,Object(s.a)({},n,r))):e.setState(Object(i.a)({},e.state,Object(s.a)({},n,t)))},e.state={infoIconFilled:!1,disableShowResults:!0,hidePopup:!0,painPoints:0,patientName:"",yourName:"",receiverEmailInput:"",receiverTelInput:"",lasting:"",accute:"",mixed:"",fields:[{title:"R\xf6stuttryck/ljud",description:"Tex om personen gnyr, j\xe4mrar sig eller l\xe5ter",scaleNum:1,fieldValue:null},{title:"Ansiktsuttryck",description:"Tex sp\xe4nd, rynkar n\xe4san, grimaserar eller ser r\xe4dd ut",scaleNum:1,fieldValue:null},{title:"F\xf6r\xe4ndrat kroppsspr\xe5k",description:"Tex rastl\xf6s, vaggar, skyddar en kroppsdel eller ihopkrupen",scaleNum:2,fieldValue:null},{title:"F\xf6r\xe4ndrat beteende",description:"Tex \xf6kad f\xf6rvirring, matv\xe4gran, \xf6kad eller minskad kroppsaktivitet",scaleNum:2,fieldValue:null},{title:"Fysiologisk f\xf6r\xe4ndring",description:"Tex f\xf6r\xe4ndrad kroppstemperatur, puls eller blodtryck, svettningar, rodnad eller blekhet i hyn",scaleNum:2,fieldValue:null},{title:"Kroppsliga f\xf6r\xe4ndringar",description:"Tex rivet skinn, tryckskador, kontrakturer eller andra skador",scaleNum:2,fieldValue:null}]},e}return Object(b.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"page-content"},l.a.createElement(v.b,{history:g,basename:"/pain-scale"},l.a.createElement(v.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(y,Object.assign({},a,{state:e.state,buttonHandler:e.buttonHandler,settingsHandler:e.settingsHandler,changeHandler:e.changeHandler}))}}),l.a.createElement(v.a,{exact:!0,path:"/pain-scale",render:function(a){return l.a.createElement(y,Object.assign({},a,{state:e.state,buttonHandler:e.buttonHandler,settingsHandler:e.settingsHandler,changeHandler:e.changeHandler}))}}),l.a.createElement(v.a,{exact:!0,path:"/results",render:function(a){return l.a.createElement(H,Object.assign({},a,{state:e.state,settingsHandler:e.settingsHandler,changeHandler:e.changeHandler}))}}))))}}]),a}(n.Component);c.a.render(l.a.createElement(S,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.a01315d1.chunk.js.map