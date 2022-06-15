function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(t);if(e){var o=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(t)}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{LYUz:function(t,e,n){"use strict";n.r(e),n.d(e,"MountsModule",(function(){return $}));var i,o=n("ofXK"),c=n("FTbq"),r=n("aceb"),u=n("3Pt+"),s=n("tyNb"),a=n("wd/R"),l=n("LRne"),f=n("lJxs"),h=n("fXoL"),p=n("XNiG"),d=n("itXk"),m=n("JYL7"),b=n("L7Zs"),g=((i=function(){function t(e){var n=this;_classCallCheck(this,t),this.connectService=e,this.listTrigger=new p.a,this.addTrigger=new p.a,this.unmountTrigger=new p.a,this.unmountAllTrigger=new p.a;var i=this;this.list$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.listTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return e})),t}return _createClass(n)}(m.k)),this.list$.deploy(),this.add$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.addTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return[Object.assign(Object.assign({},e[0]),t),e[1]]})),t}return _createClass(n)}(m.m)),this.add$.deploy(),this.add$.getOutput().subscribe((function(t){0===t[1].length&&n.refreshList()})),this.unmount$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.unmountTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return[Object.assign(Object.assign({},e[0]),t),e[1]]})),t}return _createClass(n)}(m.o)),this.unmount$.deploy(),this.unmount$.getOutput().subscribe((function(t){0===t[1].length&&n.refreshList()})),this.unmountAll$=new(function(t){_inherits(n,t);var e=_createSuper(n);function n(){var t;return _classCallCheck(this,n),(t=e.apply(this,arguments)).prerequest$=Object(d.a)([i.unmountAllTrigger,i.connectService.listCmd$.verify(t.cmd)],(function(t,e){return e})),t}return _createClass(n)}(m.n)),this.unmountAll$.deploy(),this.unmountAll$.getOutput().subscribe((function(t){0===t[1].length&&n.refreshList()}))}return _createClass(t,[{key:"refreshList",value:function(){this.list$.clearCache(),this.listTrigger.next(1)}},{key:"mount",value:function(t){this.addTrigger.next(t)}},{key:"unmount",value:function(t){this.unmountTrigger.next(t)}},{key:"unmountAll",value:function(){this.unmountAllTrigger.next(1)}}]),t}()).\u0275fac=function(t){return new(t||i)(h.ic(b.a))},i.\u0275prov=h.Ub({token:i,factory:i.\u0275fac,providedIn:"root"}),i),y=n("x0Mr"),v=["mountTypeInp"];function C(t,e){if(1&t){var n=h.fc();h.ec(0,"td"),h.Wc(1),h.dc(),h.ec(2,"td"),h.Wc(3),h.dc(),h.ec(4,"td"),h.Wc(5),h.dc(),h.ec(6,"td"),h.ec(7,"button",5),h.mc("click",(function(){h.Kc(n);var t=e.$implicit;return h.oc().unmount(t)})),h.Zb(8,"nb-icon",6),h.dc(),h.dc()}if(2&t){var i=e.$implicit;h.Mb(1),h.Xc(i.Fs),h.Mb(2),h.Xc(i.MountPoint),h.Mb(2),h.Xc(i.MountedTimeHumanReadable)}}function O(t,e){if(1&t&&(h.ec(0,"nb-option",16),h.Wc(1),h.dc()),2&t){var n=e.$implicit;h.wc("value",n),h.Mb(1),h.Yc(" ",n," ")}}function w(t,e){if(1&t){var n=h.fc();h.ec(0,"th"),h.ec(1,"input",7),h.mc("ngModelChange",(function(t){return h.Kc(n),h.oc().newMount.fs=t})),h.dc(),h.dc(),h.ec(2,"th"),h.ec(3,"input",8),h.mc("ngModelChange",(function(t){return h.Kc(n),h.oc().newMount.mountPoint=t})),h.dc(),h.dc(),h.ec(4,"th"),h.ec(5,"input",9,10),h.mc("input",(function(){return h.Kc(n),h.oc().onMountTypeInpChange()})),h.dc(),h.ec(7,"nb-autocomplete",11,12),h.mc("selectedChange",(function(t){return h.Kc(n),h.oc().onMountTypeInpSecChange(t)})),h.Uc(9,O,2,2,"nb-option",13),h.pc(10,"async"),h.dc(),h.dc(),h.ec(11,"th"),h.ec(12,"button",14),h.mc("click",(function(){return h.Kc(n),h.oc().mount()})),h.Zb(13,"nb-icon",15),h.dc(),h.dc()}if(2&t){var i=h.Gc(8),o=h.oc();h.Mb(1),h.wc("ngModel",o.newMount.fs),h.Mb(2),h.wc("ngModel",o.newMount.mountPoint),h.Mb(2),h.wc("nbAutocomplete",i),h.Mb(4),h.wc("ngForOf",h.qc(10,4,o.filteredOptions$))}}var _,k,M,T=function(t){return{"infinte-rotate":t}},P=[{path:"",component:(_=function(){function t(e,n,i){_classCallCheck(this,t),this.mountService=e,this.toastr=n,this.modal=i,this.scrb=[],this.columns=[{key:"Fs",title:"Filesystem",width:"37.5%"},{key:"MountPoint",title:"Mounted point",width:"37.5%"},{key:"MountedTimeHumanReadable",title:"Mounted time",width:"20%"},{key:"",title:"Action",width:"5%"}],this.data=[],this.newMount={fs:"",mountPoint:"",mountType:""}}return _createClass(t,[{key:"filter",value:function(t){var e=t.toLowerCase();return this.options.filter((function(t){return t.toLowerCase().includes(e)}))}},{key:"getFilteredOptions",value:function(t){var e=this;return Object(l.a)(t).pipe(Object(f.a)((function(t){return e.filter(t)})))}},{key:"onMountTypeInpChange",value:function(){this.newMount.mountType=this.mountTypeInp.nativeElement.value,this.filteredOptions$=this.getFilteredOptions(this.mountTypeInp.nativeElement.value)}},{key:"onMountTypeInpSecChange",value:function(t){this.filteredOptions$=this.getFilteredOptions(t)}},{key:"refresh",value:function(){this.mountService.refreshList()}},{key:"mount",value:function(){this.mountService.mount(this.newMount)}},{key:"unmount",value:function(t){this.unmountItem=t,this.mountService.unmount({mountPoint:t.MountPoint})}},{key:"unmountAll",value:function(){var t=this;this.modal.confirm().className("flat-attack").message("Unmount all activated mounts?").isBlocking(!1).open().result.then((function(e){e&&t.mountService.unmountAll()}),(function(){}))}},{key:"ngOnInit",value:function(){var t=this;this.configuration=Object.assign({},c.c),this.configuration.searchEnabled=!1,this.configuration.isLoading=!0,this.options=["mount","cmount","mount2"],this.filteredOptions$=Object(l.a)(this.options),this.scrb.push(this.mountService.list$.getOutput().subscribe((function(e){t.configuration.isLoading=!1,0===e[1].length?t.data=e[0].mountPoints.map((function(t){return Object.assign(Object.assign({},t),{MountedTimeHumanReadable:a(t.MountedOn).fromNow()})})):t.toastr.danger(e[1].join(" \n"),"fetch mounts list failure",{icon:"list-tree",iconPack:"css.gg",destroyByClick:!0,duration:0})}))),this.scrb.push(this.mountService.add$.getOutput().subscribe((function(e){0===e[1].length||t.toastr.danger(e[1].join(" \n"),"Create mount point failure",{icon:"alert-triangle-outline"})}))),this.scrb.push(this.mountService.unmount$.getOutput().subscribe((function(e){0===e[1].length?(t.newMount.fs=t.unmountItem.Fs,t.newMount.mountPoint=t.unmountItem.MountPoint,t.newMount.mountType="",t.toastr.success(t.unmountItem.MountPoint,"Unmount actived mount successfully",{icon:"checkmark-circle-outline"})):t.toastr.danger(e[1].join(" \n"),"Unmount actived mount failure",{icon:"alert-triangle-outline"})}))),this.scrb.push(this.mountService.unmountAll$.getOutput().subscribe((function(e){0===e[1].length?t.toastr.success("","Unmount all mounts successfully",{icon:"checkmark-circle-outline"}):t.toastr.danger(e[1].join(" \n"),"Unmount all mounts failure",{icon:"alert-triangle-outline"})}))),this.refresh()}},{key:"ngOnDestroy",value:function(){this.scrb.forEach((function(t){return t.unsubscribe()})),this.scrb=[]}}]),t}(),_.\u0275fac=function(t){return new(t||_)(h.Yb(g),h.Yb(r.ib),h.Yb(y.a))},_.\u0275cmp=h.Sb({type:_,selectors:[["app-mounts"]],viewQuery:function(t,e){var n;1&t&&h.bd(v,!0),2&t&&h.Fc(n=h.nc())&&(e.mountTypeInp=n.first)},decls:11,vars:7,consts:[[1,"push-to-right"],["icon","trash-2-outline",3,"click"],["icon","sync",3,"ngClass","click"],[3,"configuration","data","columns","filtersTemplate"],["filtersTemplate",""],["nbButton","","status","danger","size","small",3,"click"],["icon","close-outline"],["type","text","nbInput","","fullWidth","","fieldSize","small","placeholder","remote path to be mounted ([remote]:[path])",3,"ngModel","ngModelChange"],["type","text","nbInput","","fullWidth","","fieldSize","small","placeholder","path on server machine",3,"ngModel","ngModelChange"],["nbInput","","type","text","fullWidth","","fieldSize","small","placeholder","mount type",3,"nbAutocomplete","input"],["mountTypeInp",""],[3,"selectedChange"],["auto",""],[3,"value",4,"ngFor","ngForOf"],["nbButton","","status","info","size","small",3,"click"],["icon","plus-outline"],[3,"value"]],template:function(t,e){if(1&t&&(h.ec(0,"nb-card"),h.ec(1,"nb-card-header"),h.Wc(2," Mount Point Manager "),h.ec(3,"nb-actions",0),h.ec(4,"nb-action",1),h.mc("click",(function(){return e.unmountAll()})),h.dc(),h.ec(5,"nb-action",2),h.mc("click",(function(){return e.refresh()})),h.dc(),h.dc(),h.dc(),h.ec(6,"nb-card-body"),h.ec(7,"ngx-table",3),h.Uc(8,C,9,3,"ng-template"),h.dc(),h.dc(),h.dc(),h.Uc(9,w,14,6,"ng-template",null,4,h.Vc)),2&t){var n=h.Gc(10);h.Mb(5),h.wc("ngClass",h.Ac(5,T,e.configuration.isLoading)),h.Mb(2),h.wc("configuration",e.configuration)("data",e.data)("columns",e.columns)("filtersTemplate",n)}},directives:[r.r,r.u,r.g,r.f,o.l,r.q,c.b,r.n,r.C,r.F,u.a,u.e,u.h,r.j,r.i,o.n,r.R],pipes:[o.b],styles:["nb-card-header[_ngcontent-%COMP%] {\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t.push-to-right[_ngcontent-%COMP%] {\n\t\t\t\tmargin-left: auto;\n\t\t\t}"]}),_)}],j=((M=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=h.Wb({type:M}),M.\u0275inj=h.Vb({factory:function(t){return new(t||M)},imports:[[s.g.forChild(P)],s.g]}),M),$=((k=_createClass((function t(){_classCallCheck(this,t)}))).\u0275mod=h.Wb({type:k}),k.\u0275inj=h.Vb({factory:function(t){return new(t||k)},imports:[[o.c,j,c.d,r.v,r.E,r.G,r.k,r.o,u.b,r.h]]}),k)}}]);