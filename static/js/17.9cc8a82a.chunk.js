(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[17],{1019:function(e,n,t){},1062:function(e,n,t){"use strict";t.r(n);var a=t(16),c=t(3),i=t(30),o=(t(1019),t(0)),u=t.n(o),r=t(14),l=t(777),d=t(705),s=t(706),f=t(912),O=t(42),m=t(856),D=t(710),b=Array(52).fill(1).reduce((function(e,n,t){return[].concat(Object(r.a)(e),[n+t])}),[]),h=Array(5).fill(2022).reduce((function(e,n,t){return[].concat(Object(r.a)(e),[n+t])}),[]),v=function(e){var n=e.userConfig,t=e.userConfigHandle,a=Object(D.b)((function(e){return e.diaDiem})).diaDiemData,c=Object(D.b)((function(e){return e.thucDon})).hienThiTatCaNoiPhucVu,i=null===a||void 0===a?void 0:a.id,o=n.yearId,r=n.weekId,v=(null===t||void 0===t?void 0:t.setConfig)?t.setConfig:O.noop;return u.a.createElement(d.a,{className:"justify-content-center",gutter:[5,5]},u.a.createElement(s.a,null,u.a.createElement(l.a,{defaultCantinId:i,style:{width:"170px"},selectCantin:function(e){return v(["coSoId"],e)},manualCoSoArray:[a],isCoSo:!0})),c?null:u.a.createElement(s.a,null,u.a.createElement(m.a,{userConfigHandle:t,userConfig:n,style:{width:230}})),u.a.createElement(s.a,null,u.a.createElement(f.a,{value:r,style:{width:"70px"},onChange:function(e){return v(["weekId"],e)}},b.map((function(e){return u.a.createElement(f.a.Option,{key:e,value:e},e)})))),u.a.createElement(s.a,null,u.a.createElement(f.a,{style:{width:"100px"},value:o,onChange:function(e){return v(["yearId"],e)}},h.map((function(e){return u.a.createElement(f.a.Option,{key:e,value:e},e)})))))};v.defaultProps={userConfig:{}};var C=v,_=t(670),g=t(811),j=t(291),E=t(305),N=t(295),p=t(293),A=t(292),y=(t(309),t(921),t(414),t(713)),L=t(284);var M=t(11),H=t.n(M),I=t(25),S=t(721),U=t(66),T=t.n(U),k=t(134),w=function(e){var n=e.modalId||y.a.thucDonModal,t=Object(D.a)(),a=Object(D.b)((function(e){return e.form})).modal,c=u.a.useMemo((function(){var e;return!!(null===a||void 0===a||null===(e=a[n])||void 0===e?void 0:e.open)}),[a[n]]);function i(){return o.apply(this,arguments)}function o(){return(o=Object(I.a)(H.a.mark((function e(){var a,c;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(""),a=T()(),c=Object(k.e)(a),console.log(c),t(Object(L.a)({modalId:n}));case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return u.a.createElement(S.MyModal,{title:u.a.createElement("div",null,"Ch\u1ee9c N\u0103ng Kh\xe1c"),visible:c,onClose:function(){t(Object(L.a)({modalId:n}))},onOkModal:i,width:900,modalId:n,footer:!1},u.a.createElement(A.a,{onClick:i},"Ch\u1ecdn tu\u1ea7n hi\u1ec7n t\u1ea1i"))},G=u.a.lazy((function(){return Promise.all([t.e(1),t.e(29)]).then(t.bind(null,1048))})),x=u.a.lazy((function(){return t.e(22).then(t.bind(null,1071))})),P=Object(o.memo)((function(e){var n=e.history,t=Object(D.a)(),r=Object(D.b)((function(e){return e.thucDonDuTruSetting})),l=r.shiftsArray,d=r.nhomGiaMonAns,s=r.nhomGiaMonAnData,f=(r.khachHangs,Object(D.b)((function(e){return e.diaDiem})).diaDiemData),m=null===f||void 0===f?void 0:f.id,b=Object(g.a)({child:["thucDonDuTruConfig"]}),h=Object(i.a)(b,1)[0],v=(null===h||void 0===h?void 0:h.thucDonDuTruConfig)||{},A=v.customerId,y=v.yearId,L=v.weekId,M=Object(o.useState)({}),H=Object(i.a)(M,2),I=H[0],S=H[1],U=function(e){var n=!Object(O.get)(I,[e],!0);S(Object(c.a)(Object(c.a)({},I),{},Object(a.a)({},e,n)))};return u.a.useEffect((function(){t(Object(N.b)(A))}),[d,A]),u.a.useEffect((function(){t(Object(j.b)(null===s||void 0===s?void 0:s.id))}),[s]),u.a.useEffect((function(){m&&(t(Object(N.c)(m)),t(Object(N.f)(m)),t(Object(N.i)(m)),t(Object(N.g)(m)))}),[m]),u.a.useEffect((function(){return t(Object(p.e)(m,y,L)),function(){Object(p.l)()}}),[m,y,L]),u.a.useEffect((function(){t(Object(j.e)()),t(Object(E.b)()),t(Object(N.h)())}),[]),u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"mt-2"},u.a.createElement(C,{userConfig:v,userConfigHandle:h})),u.a.createElement("div",null,l.map((function(e){var n=!1===I[null===e||void 0===e?void 0:e.id]?{display:"none"}:{};return u.a.createElement(o.Suspense,{key:null===e||void 0===e?void 0:e.id,fallback:u.a.createElement(_.a,{className:"osac-spin"})},u.a.createElement(G,{userConfig:v,userConfigHandle:h,isHideStyle:n,onHideDuTru:U,shiftData:e}))}))),u.a.createElement(o.Suspense,{fallback:u.a.createElement(_.a,{className:"osac-spin"})},u.a.createElement(x,{userConfig:v,userConfigHandle:h,onCancel:function(){return n.push("?")},customerId:A})),u.a.createElement(w,null))}));n.default=P},713:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var a={addDoanhThuThemBCC:"ADD_DOANH_THU_THEM_BCC_MODAL",addChiPhiMuaQuayNuoc:"ADD_CHI_PHI_MUA_QUAY_NUOC_MODAL",addTonCuoi:"ADD_TON_CUOI_MODAL",nguyenLieuModal:"NGUYEN_LIEU_MODAL",xuatNguyenLieuKhacModal:"XUAT_NGUYEN_LIEU_KHAC_MODAL",taoDonDatHangCom:"TAO_DON_DAT_HANG_COM_MODAL",donDangXuLyModal:"DON_DANG_XU_LY_MODAL",donDaNhanModal:"DON_DA_NHAN_MODAL",soLuongThuc:"SO_LUONG_THUC_MODAL",giaNguyenLieu:"GIA_NGUYEN_LIEU_MODAL",tongDinhLuong:"TONG_DINH_LUONG_MODAL",transferNhaCungCap:"TRANSFER_NHA_CUNG_CAP_MODAL",layNguyenLieuChung:"LAY_NGUYEN_LIEU_CHUNG_MODAL",nguyenLieuAddSoLuong:"NGUYEN_LIEU_ADD_SO_LUONG_MODAL",donDDHNMoiModal:"DON_DDHN_MOI_MODAL",donDatHangNuoc:"DON_DAT_HANG_NUOC_MODAL",addSoLuongDDHN:"ADD_SO_LUONG_DDHN_MODAL",thucDonModal:"THUC_DON_MODAL"}},746:function(e,n,t){},776:function(e,n){},777:function(e,n,t){"use strict";var a=t(14),c=t(30),i=(t(746),t(0)),o=t.n(i),u=t(670),r=t(317),l=t(912),d=t(10),s=t(42),f=t(710),O=Object(i.memo)((function(e){var n=e.showSearch,t=e.selectCantin,s=e.classNames,O=e.disabled,m=Object(f.b)((function(e){return e.diaDiem})),D=m.diaDiemData,b=m.diaDiemsArray,h=Object(i.useState)(D.id),v=Object(c.a)(h,2),C=v[0],_=v[1];return o.a.createElement(i.Suspense,{fallback:o.a.createElement(u.a,{className:"osac-spin"})},o.a.createElement(r.a,{title:"Ch\u1ecdn c\u0103n tin"},o.a.createElement(l.a,{showSearch:n,value:C,placeholder:"Ch\u1ecdn \u0111\u1ecba \u0111i\u1ec3m",onChange:function(e){_(e),t&&t(e)},filterOption:d.m,className:["selectCantin"].concat(Object(a.a)(s)).join(" "),disabled:O},b?b.map((function(e){return o.a.createElement(l.a.Option,{key:e.id,value:e.id},e.name)})):null)))}));O.defaultProps={selectCantin:s.noop,showSearch:!0,disabled:!1,classNames:[]},n.a=O},783:function(e,n){},784:function(e,n){},811:function(e,n,t){"use strict";var a=t(3),c=t(14),i=t(30),o=t(0),u=t.n(o),r=t(10),l=t(317),d=t(292),s=t(918),f=t(9),O=t(710);n.a=function(e){var n=e.child,t=Object(r.j)(),m=Object(O.b)((function(e){return e.diaDiem})).diaDiemData,D=f.a.database().ref("".concat(m.id,"/configs/userConfig/").concat(t)),b=Object(o.useState)({}),h=Object(i.a)(b,2),v=h[0],C=h[1],_=Object(o.useState)(!1),g=Object(i.a)(_,2),j=g[0],E=g[1],N=null===n||void 0===n?void 0:n[0],p=null===v||void 0===v?void 0:v[null===n||void 0===n?void 0:n[0]];Object(o.useEffect)((function(){var e=null;return t&&(e=f.a.database().ref("".concat(m.id,"/configs/userConfig/").concat(t))).on("value",(function(e){var n=e.val();C(n)})),function(){e&&e.off()}}),[t]);return[Object(a.a)(Object(a.a)({},v),{},{child:n,childConst:N,userConfig:p,getSettingIcon:function(){return u.a.createElement(l.a,{key:"settingFilled",title:"Thi\u1ebft l\u1eadp"},u.a.createElement(d.a,{danger:j,onClick:function(){return E(!j)}},u.a.createElement(s.a,{style:{fontSize:18}})))},isOpenModal:j,onCancelModal:function(){return E(!1)},setConfig:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;D.child([].concat(Object(c.a)(n),Object(c.a)(e)).join("/")).set(t)}})]}},856:function(e,n,t){"use strict";var a=t(3),c=t(0),i=t.n(c),o=t(1032),u=t(912),r=t(42),l=t(710),d=t(295),s=function(e){var n=e.mode,t=e.viewIds,s=e.style,f=e.userConfig,O=e.userConfigHandle,m=f.customerId,D=(null===O||void 0===O?void 0:O.setConfig)?O.setConfig:r.noop,b=Object(l.a)(),h=Object(l.b)((function(e){return e.thucDonDuTruSetting})),v=h.khachHangs,C=h.khachHangsArray,_=Object(l.b)((function(e){return e.diaDiem})).diaDiemData,g=null===_||void 0===_?void 0:_.id;return Object(c.useEffect)((function(){g&&b(Object(d.f)(g))}),[g]),"view"===n?i.a.createElement("div",null,t.map((function(e){var n;return i.a.createElement(o.a,{key:e},(null===v||void 0===v||null===(n=v[e])||void 0===n?void 0:n.name)||e)}))):i.a.createElement(u.a,{value:(null===C||void 0===C?void 0:C.length)?"".concat(m):null,style:Object(a.a)({width:"140px"},s),onChange:function(e){return D(["customerId"],e)},mode:n},(C||[]).map((function(e){return i.a.createElement(u.a.Option,{key:e.id,value:"".concat(e.id)},e.name)})))};s.defaultProps={style:{},userConfig:{},externalWrapperContainer:[],coSoDispatch:r.noop,mode:null,isfilteredAfterSelect:!1,viewIds:[],existedCustomers:[]},n.a=s}}]);