(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{1045:function(t,n,e){"use strict";e.r(n);var a=e(10),o=e(16),i=e(3),r=e(30),c=e(0),u=e.n(c),l=e(9),d=e(437),s=e(1047),v=e(13),h=e(42),g=e(706),f=function(t){var n=t.coSoId,e=t.customerId,f=t.yearId,b=t.weekId,m=t.dayId,O=t.isInput,j=t.setIsInput,p=Object(g.b)((function(t){return t.thucDonDuTruSetting})),D=p.nhomGiaMonAnData,T=p.shiftsArray,I=Object(g.b)((function(t){return t.thucDonDuTru})),P=I.tongHopOfShifts,A=I.isLoading,E=Object(c.useState)([]),x=Object(r.a)(E,2),C=x[0],w=x[1],y=Object(c.useState)([]),H=Object(r.a)(y,2),N=H[0],S=H[1];u.a.useEffect((function(){var t=[];if(D&&T.length>0){var n=(null===D||void 0===D?void 0:D.giaPhanAn)||0,a=T.reduce((function(t,n){var e,a=n.id;return t+((null===P||void 0===P||null===(e=P[a])||void 0===e?void 0:e.tongPhanAn)||0)}),0),r=a*n,c=T.reduce((function(t,n){var a=null===I||void 0===I?void 0:I["tongHopDuTruData/".concat(e,"/").concat(null===n||void 0===n?void 0:n.id)];return t+((null===a||void 0===a?void 0:a.tongChiPhi)||0)}),0);t=[Object(i.a)(Object(i.a)({item:"T\u1ed5ng ph\u1ea7n"},T.reduce((function(t,n){var e,a=n.id,r=(null===P||void 0===P||null===(e=P[a])||void 0===e?void 0:e.tongPhanAn)||0;return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},a,r))}),{})),{},{tong:a}),Object(i.a)(Object(i.a)({item:"T\u1ed5ng c. ph\xed"},T.reduce((function(t,n){var a=n.id,r=null===I||void 0===I?void 0:I["tongHopDuTruData/".concat(e,"/").concat(a)],c=(null===r||void 0===r?void 0:r.tongChiPhi)||0;return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},a,c))}),{})),{},{tong:c||0}),Object(i.a)(Object(i.a)({item:"Doanh thu"},T.reduce((function(t,e){var a,r=e.id,c=((null===P||void 0===P||null===(a=P[r])||void 0===a?void 0:a.tongPhanAn)||0)*n;return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},r,c))}),{})),{},{tong:r}),Object(i.a)(Object(i.a)({item:"Cost"},T.reduce((function(t,a){var r,c=a.id,u=null===I||void 0===I?void 0:I["tongHopDuTruData/".concat(e,"/").concat(c)],l=(null===u||void 0===u?void 0:u.tongChiPhi)||0,d=((null===P||void 0===P||null===(r=P[c])||void 0===r?void 0:r.tongPhanAn)||0)*n;return Object(i.a)(Object(i.a)({},t),{},Object(o.a)({},c,Math.round(l/d*100*100)/100))}),{})),{},{tong:Math.round(c/r*100*100)/100})]}w(t)}),[I,e,m,T,D,P]),u.a.useEffect((function(){var t;return t=setTimeout((function(){var t=T.map((function(t){var n=t.id,e=t.name;return{dataIndex:n,title:e,align:"center",width:150,className:"text-small",render:function(t,e){var a;switch(e.item){case"T\u1ed5ng ph\u1ea7n":var o=(null===P||void 0===P||null===(a=P[n])||void 0===a?void 0:a.tongPhanAn)||0;return"tongDoanhThu"===(null===O||void 0===O?void 0:O.type)?u.a.createElement(d.a,{defaultValue:0!==o?o:"",onBlur:function(t){return k(t,n)},size:"small"}):u.a.createElement("div",{className:"hoverClass",onClick:function(){return j({type:"tongDoanhThu"})}},o?Object(v.b)(o):"--");case"Cost":return u.a.createElement("strong",{className:"text-danger"},t,"%");default:return t&&u.a.createElement("div",null,Object(v.b)(t))}}}}));t=t.filter((function(t){var n=t.dataIndex,a=null===I||void 0===I?void 0:I["tongHopDuTruData/".concat(e,"/").concat(n)];return a&&a.tongChiPhi>0}));var n={dataIndex:"tong",title:"T\u1ed5ng",className:"text-small",align:"center",width:120,render:function(t,n){return"Cost"===n.item?u.a.createElement("strong",{className:"text-danger"},t,"%"):t&&u.a.createElement("strong",null,Object(v.b)(t))}},o=[{dataIndex:"item",title:"",width:120,className:"text-small"}].concat(Object(a.a)(t),[n]);S(o)}),300),function(){t&&clearTimeout(t)}}),[I,e,T,P,O]);var k=function(t,a){var o,i=+t.target.value,r=(null===P||void 0===P||null===(o=P[a])||void 0===o?void 0:o.tongPhanAn)||0;if(!Object(h.isEqual)(r,i)){var c=["thucDonDuTru/datas",n,f,b,"tongHopOfDays",m,"customerIds",e,"shiftIds",a,"tongPhanAn"];l.a.database().ref(c.join("/")).set(i).then((function(){return j({})}))}};return u.a.createElement("div",{className:"col-lg-7 mb-2"},u.a.createElement(s.a,{loading:A,rowKey:"item",columns:N,dataSource:C,pagination:!1,size:"small",bordered:!0,footer:null,scroll:{x:220+120*T.length}}))};f.defaultProps={shiftsArray:[],tongHopChiPhi:{}},n.default=f}}]);