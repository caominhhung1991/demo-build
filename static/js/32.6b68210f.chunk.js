(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[32],{1026:function(e,t,a){},1065:function(e,t,a){"use strict";a.r(t);a(1026);var n=a(0),c=a.n(n),o=a(48),r=a(318),u=a(427),i=a(717),l=a(710),d=a(697),s=a(190),m=a(43),h=a(302);var f=function(){var e=Object(l.b)((function(e){return e.khoNuoc})),t=e.routes,a=e.selectedRouteId,n=e.localConst,o=Object(l.a)();return c.a.createElement(d.a,{style:{minWidth:"120px"},selectedKeys:[a],theme:"dark"},t&&t.map((function(e){var t=null===e||void 0===e?void 0:e.url,a=null===e||void 0===e?void 0:e.name;return c.a.createElement(d.a.Item,{key:t},c.a.createElement(s.NavLink,{to:t,onClick:function(){o(Object(h.g)(t)),n&&Object(m.c)(n,t)}},a||t))})))},b=a(331),v=a(14),j=a(9),O=a(50),p=a(49),k=a(83),E=a(82),N=a(84),y=["dieuHanh","khoNuoc","thietLap","sanPham"],P=function(e){Object(k.a)(a,e);var t=Object(E.a)(a);function a(){var e;return Object(p.a)(this,a),(e=t.call(this)).sanPhamPaths=[].concat(y,["datas"]),e.deletedSanPhamPaths=[].concat(y,["deleted"]),e}return Object(O.a)(a)}(N.a),D=a(23);t.default=Object(o.o)((function(e){var t=e.location,a=e.history,d=Object(l.a)();Object(i.e)({child:["Kho"],history:a,roleRefs:["config","dieuHanh","khoNuoc","roles"],routeRefs:["config","dieuHanh","khoNuoc","routes"]});var s=Object(l.b)((function(e){return e.khoNuoc})),O=s.routes,p=s.route,k=s.localConst,E=Object(l.b)((function(e){return e.diaDiem})).diaDiemData,N=c.a.useMemo((function(){return Object(u.b)()}),[]),y={breadcrumbs:[{text:"Kho n\u01b0\u1edbc ".concat(E.name)},{overlay:c.a.createElement(f,null),text:null===p||void 0===p?void 0:p.name}],buttons:[]},g=null===t||void 0===t?void 0:t.pathname,C=c.a.useMemo((function(){if(0===((null===O||void 0===O?void 0:O.length)||0))return g;var e=N.thietLap,t=Object(m.b)(k);return t&&g===N.khoNuoc&&(e=t),O.findIndex((function(e){return e.url===g}))>-1?g:e}),[g,O]);return c.a.useEffect((function(){d(Object(h.c)(g))}),[g]),c.a.useEffect((function(){d(Object(h.d)()),d(Object(b.c)()),d((function(e,t){var a=t().diaDiem.diaDiemData;if(!(null===a||void 0===a?void 0:a.id))return Object(D.a)("Ch\u01b0a ch\u1ecdn \u0111\u1ecba \u0111i\u1ec3m!");var n=new P,c=[a.id].concat(Object(v.a)(n.sanPhamPaths));j.a.database().ref(c.join("/")).once("value",(function(t){var a=t.val()||{},n=Object.values(a);e({type:b.a.GETS,payload:{sanPhamNuocs:a,sanPhamNuocsArray:n}})}))})),d(Object(b.d)())}),[]),c.a.createElement("div",{className:"khoCom"},c.a.createElement(n.Suspense,{fallback:c.a.createElement(r.a,null)},c.a.createElement(o.g,null,O&&O.map((function(e){return c.a.createElement(o.d,{key:e.url,path:e.url,render:function(){return c.a.createElement(e.component,{breadcrumb:y})}})})),c.a.createElement(o.c,{from:N.khoNuoc,to:C}))))}))}}]);