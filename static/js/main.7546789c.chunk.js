(this["webpackJsonpHouse-Prediction-UI5"]=this["webpackJsonpHouse-Prediction-UI5"]||[]).push([[0],{391:function(e,t,a){e.exports=a(425)},396:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(177),l=a.n(c),o=(a(102),a(389)),u=(a(396),a(428)),i=a(427),s=(a(397),a(28)),m=a(4),b=a.n(m),d=a(10),p=a(16),E=a(368),j=a(370),O=a(371),f=a(381),S=a(161),g=a(71),h=a(160),v=a(52),N=a(157),y=(a(398),a(399),a(400),a(401),a(176),a(175),a(372)),C=a(385),x=a(387);function F(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(1),o=Object(p.a)(l,2),u=o[0],i=o[1],s=Object(n.useState)(),m=Object(p.a)(s,2),F=m[0],q=m[1],w=Object(n.useState)(),k=Object(p.a)(w,2),P=k[0],B=k[1],G=Object(n.useState)(),A=Object(p.a)(G,2),H=A[0],L=A[1],T=Object(n.useState)(),U=Object(p.a)(T,2),W=U[0],I=U[1],J=Object(n.useState)(),Q=Object(p.a)(J,2),Y=Q[0],$=Q[1],R=Object(n.useState)(),z=Object(p.a)(R,2),D=z[0],K=z[1],M=Object(n.useState)(),V=Object(p.a)(M,2),X=V[0],Z=V[1],_=Object(n.useState)(1),ee=Object(p.a)(_,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(),re=Object(p.a)(ne,2),ce=re[0],le=re[1],oe=Object(n.useState)("None"),ue=Object(p.a)(oe,2),ie=ue[0],se=ue[1],me=Object(n.useState)("None"),be=Object(p.a)(me,2),de=be[0],pe=be[1],Ee=Object(n.useState)("None"),je=Object(p.a)(Ee,2),Oe=je[0],fe=je[1],Se=Object(n.useState)("None"),ge=Object(p.a)(Se,2),he=ge[0],ve=ge[1],Ne=Object(n.useState)("None"),ye=Object(p.a)(Ne,2),Ce=ye[0],xe=ye[1],Fe=Object(n.useState)("None"),qe=Object(p.a)(Fe,2),we=qe[0],ke=qe[1],Pe=Object(n.useState)("None"),Be=Object(p.a)(Pe,2),Ge=Be[0],Ae=Be[1],He=Object(n.useState)("None"),Le=Object(p.a)(He,2),Te=Le[0],Ue=Le[1],We=Object(n.useState)("None"),Ie=Object(p.a)(We,2),Je=Ie[0],Qe=Ie[1],Ye=Object(n.useState)("None"),$e=Object(p.a)(Ye,2),Re=$e[0],ze=$e[1],De=Object(n.useState)(!1),Ke=Object(p.a)(De,2),Me=Ke[0],Ve=Ke[1],Xe=Object(n.useRef)();function Ze(){return(Ze=Object(d.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://peaceful-castle-35694.herokuapp.com/wakeup");case 2:return t=e.sent,e.next=5,t.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){!function(){Ze.apply(this,arguments)}()}),[]);return r.a.createElement("div",null,r.a.createElement(E.a,{justifyContent:j.a.Center,wrap:O.a.Wrap,style:S.a.sapUiContentPadding},r.a.createElement(y.a,{title:"House Price Prediction"},r.a.createElement(v.a,{label:"Overall Quality"},r.a.createElement(h.a,{required:!0,valueState:de,onChange:function(e){i(e.detail.selectedOption.dataset.id)}},[{id:1,text:"1"},{id:2,text:"2"},{id:3,text:"3"},{id:4,text:"4"},{id:5,text:"5"},{id:6,text:"6"},{id:7,text:"7"},{id:8,text:"8"},{id:9,text:"9"},{id:10,text:"10"}].map((function(e){return r.a.createElement(N.a,{key:e.id,"data-id":e.id},e.text)})))),r.a.createElement(v.a,{label:"Above Ground Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:ie,onChange:function(e){c(e.target.value)}})),r.a.createElement(v.a,{label:"Lot Area Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:Te,onChange:function(e){K(e.target.value)}})),r.a.createElement(v.a,{label:"Basement Total Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:he,onChange:function(e){B(e.target.value)}})),r.a.createElement(v.a,{label:"Basement Fisnished Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:Oe,onChange:function(e){q(e.target.value)}})),r.a.createElement(v.a,{label:"First Floor Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:Ge,onChange:function(e){$(e.target.value)}})),r.a.createElement(v.a,{label:"Second Floor Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:Ce,onChange:function(e){L(e.target.value)}})),r.a.createElement(v.a,{label:"Year Built"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:we,onChange:function(e){I(e.target.value)}})),r.a.createElement(v.a,{label:"Garage Sq-Ft"},r.a.createElement(g.a,{required:!0,type:"Number",valueState:Je,onChange:function(e){Z(e.target.value)}})),r.a.createElement(v.a,{label:"Garage Cars"},r.a.createElement(h.a,{required:!0,valueState:Re,onChange:function(e){ae(e.detail.selectedOption.dataset.id)}},[{id:1,text:"1"},{id:2,text:"2"},{id:3,text:"3"},{id:4,text:"4"}].map((function(e){return r.a.createElement(N.a,{key:e.id,"data-id":e.id},e.text)})))))),r.a.createElement(E.a,{justifyContent:j.a.Center,wrap:O.a.Wrap,style:S.a.sapUiContentPadding},r.a.createElement(f.a,{onClick:function(e){function t(){return(t=Object(d.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:fetch("https://peaceful-castle-35694.herokuapp.com/predict",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({OverallQual:u,GrLivArea:a,BsmtFinSF1:F,TotalBsmtSF:P,"2ndFlrSF":H,YearBuilt:W,"1stFlrSF":Y,LotArea:D,GarageArea:X,GarageCars:te})}).then((function(e){return e.json()})).then((function(e){le(e.Prediction)}));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}se(null==a||a<0||""===a?"Error":"None"),pe(null==u||u<1||""===u?"Error":"None"),Ue(null==D||D<0||""===D?"Error":"None"),ve(null==P||P<0||""===P?"Error":"None"),fe(null==F||F<0||""===F?"Error":"None"),Ae(null==Y||Y<0||""===Y?"Error":"None"),xe(null==H||H<0||""===H?"Error":"None"),ke(null==W||W<1900||""===W?"Error":"None"),Qe(null==X||X<0||""===X?"Error":"None"),ze(null==te||te<0||""===te?"Error":"None"),!0===(a>=0&&""!==a&&u>0&&""!==u&&F>=0&&""!==F&&P>=0&&""!==P&&H>=0&&""!==H&&W>=1900&&Y>=0&&""!==Y&&D>=0&&""!==D&&X>=0&&""!==X&&te>=0&&""!==te)?(!function(){t.apply(this,arguments)}(),Xe.current.open(e.target)):Ve(!0)},disabled:!1},"Submit")),r.a.createElement("div",null,r.a.createElement(C.a,{title:"Submission Error",open:Me,onClose:function(){Ve(!1)}},"Please ensure all fields are populated with valid entries")),r.a.createElement("div",null,r.a.createElement(x.a,{ref:Xe},"$",ce)))}function q(){var e=Object(s.g)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{logo:r.a.createElement("img",{alt:"logo",src:"react-logo.png"}),profile:r.a.createElement(i.a,{image:"ui5-logo.png"}),primaryTitle:"House Price Prediction",onLogoClick:function(){e.push("./")}}),r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/home",component:F}),r.a.createElement(s.a,{from:"/",to:"/home"})))}var w=a(104);var k=function(){return r.a.createElement(w.a,null,r.a.createElement(o.a,null,r.a.createElement(q,null)))};a(424),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[391,1,2]]]);
//# sourceMappingURL=main.7546789c.chunk.js.map