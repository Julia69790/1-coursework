(function (_, Kotlin, $module$kotlin_react_dom, $module$kotlin_react, $module$kotlinx_html_js, $module$kotlin_react_router_dom, $module$kotlin_react_redux, $module$kotlin_extensions, $module$kotlin_redux, $module$redux) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var toString = Kotlin.toString;
  var Unit = Kotlin.kotlin.Unit;
  var functionalComponent = $module$kotlin_react.react.functionalComponent_1klik0$;
  var child = $module$kotlin_react.react.child_9r8yuv$;
  var attributesMapOf = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_jyasbz$;
  var LI_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.LI;
  var RDOMBuilder_init = $module$kotlin_react_dom.react.dom.RDOMBuilder;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var H3_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H3;
  var UL_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.UL;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var navLink = $module$kotlin_react_router_dom.react.router.dom.navLink_bcialx$;
  var SPAN_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.SPAN;
  var TD_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TD;
  var TR_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TR;
  var H2_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H2;
  var TABLE_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.TABLE;
  var route = $module$kotlin_react_router_dom.react.router.dom.route_9tkfd6$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var route_0 = $module$kotlin_react_router_dom.react.router.dom.route_oxctnt$;
  var switch_0 = $module$kotlin_react_router_dom.react.router.dom.switch_jg12zk$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var H1_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.H1;
  var NAV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.NAV;
  var HEADER_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.HEADER;
  var P_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.P;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var set_defaultValue = $module$kotlin_react_dom.react.dom.set_defaultValue_q3v29f$;
  var throwCCE = Kotlin.throwCCE;
  var enumEncode = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributes.enumEncode_m4whry$;
  var attributesMapOf_0 = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.attributesMapOf_alerag$;
  var INPUT_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.INPUT;
  var BUTTON_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.BUTTON;
  var DIV_init = $module$kotlin_react_dom.$$importsForInline$$['kotlinx-html-js'].kotlinx.html.DIV;
  var RComponent_init = $module$kotlin_react.react.RComponent_init_8bz2yq$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var RComponent = $module$kotlin_react.react.RComponent;
  var rConnect = $module$kotlin_react_redux.react.redux.rConnect_aavpjk$;
  var getCallableRef = Kotlin.getCallableRef;
  var invoke = $module$kotlin_react.react.invoke_adv8my$;
  var toMutableMap = Kotlin.kotlin.collections.toMutableMap_abgq59$;
  var getValue = Kotlin.kotlin.collections.getValue_t9ocha$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var rConnect_0 = $module$kotlin_react_redux.react.redux.rConnect_hfg8n2$;
  var rConnect_1 = $module$kotlin_react_redux.react.redux.rConnect_yelmmk$;
  var getKClass = Kotlin.getKClass;
  var get_js = Kotlin.kotlin.js.get_js_1yb8b7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var get_rClass = $module$kotlin_react.react.get_rClass_zdekks$;
  var rEnhancer = $module$kotlin_redux.redux.rEnhancer_287e2$;
  var compose = $module$redux.compose;
  var createStore = $module$redux.createStore;
  var hashRouter = $module$kotlin_react_router_dom.react.router.dom.hashRouter_jg12zk$;
  var provider = $module$kotlin_react_redux.react.redux.provider_6c40e8$;
  var render = $module$kotlin_react_dom.react.dom.render_2955dm$;
  var RAction = $module$kotlin_redux.redux.RAction;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var minus = Kotlin.kotlin.collections.minus_4pa84t$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var plus = Kotlin.kotlin.collections.plus_e8164j$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  Link.prototype = Object.create(RComponent.prototype);
  Link.prototype.constructor = Link;
  VisibilityFilter.prototype = Object.create(Enum.prototype);
  VisibilityFilter.prototype.constructor = VisibilityFilter;
  function li$lambda(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h3$lambda(closure$classes) {
    return function (it) {
      return new H3_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AnyFullProps() {
  }
  AnyFullProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullProps',
    interfaces: []
  };
  function fAnyFull$lambda(closure$rComponent) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h3$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(toString(props.obj.second));
      $receiver.child_2usv9w$($receiver_0.create());
      footer($receiver);
      var $receiver_0_0 = new RDOMBuilder_init(ul$lambda(null));
      var closure$rComponent_0 = closure$rComponent;
      var $receiver_1 = props.subobjs;
      var destination = ArrayList_init($receiver_1.size);
      var tmp$;
      tmp$ = $receiver_1.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var tmp$_1, tmp$_2;
        var filterValue = (tmp$_2 = (tmp$_1 = props.relation) != null ? tmp$_1.get_11rb$(item.key) : null) != null ? tmp$_2 : false;
        var cssClass = filterValue ? 'filter' : 'not_filter';
        var $receiver_0_1 = new RDOMBuilder_init(li$lambda(null));
        closure$rComponent_0($receiver_0_1, item.value, cssClass, props.onClick(item.key));
        tmp$_0.call(destination, $receiver_0_0.child_2usv9w$($receiver_0_1.create()));
      }
      $receiver.child_2usv9w$($receiver_0_0.create());
      return Unit;
    };
  }
  function fAnyFull(rComponent) {
    return functionalComponent(fAnyFull$lambda(rComponent));
  }
  function anyFull$lambda(closure$obj, closure$subobjs, closure$relation, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.obj = closure$obj;
      $receiver.attrs.subobjs = closure$subobjs;
      $receiver.attrs.relation = closure$relation;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function anyFull($receiver, rComponent, obj, subobjs, relation, onClick) {
    return child($receiver, withDisplayName_0('Full', fAnyFull(rComponent)), void 0, anyFull$lambda(obj, subobjs, relation, onClick));
  }
  function span$lambda(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function td$lambda(closure$classes) {
    return function (it) {
      return new TD_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function tr$lambda(closure$classes) {
    return function (it) {
      return new TR_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h2$lambda(closure$classes) {
    return function (it) {
      return new H2_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function table$lambda(closure$classes) {
    return function (it) {
      return new TABLE_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AnyListProps() {
  }
  AnyListProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListProps',
    interfaces: []
  };
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda(it) {
    return Unit;
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda(closure$rObj, closure$obj) {
    return function ($receiver) {
      closure$rObj($receiver, closure$obj.value, 'normal', fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda);
      return Unit;
    };
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$(' Edit ');
    return Unit;
  }
  function fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(closure$props, closure$obj) {
    return function (it) {
      closure$props.remove(closure$obj.key);
      return Unit;
    };
  }
  function fAnyList$lambda(closure$name, closure$path, closure$rObj) {
    return function ($receiver, props) {
      var $receiver_0 = new RDOMBuilder_init(h2$lambda(null));
      $receiver_0.unaryPlus_pdl1vz$(closure$name);
      $receiver.child_2usv9w$($receiver_0.create());
      var $receiver_0_0 = new RDOMBuilder_init(span$lambda('fakeLink'));
      $receiver_0_0.unaryPlus_pdl1vz$('Add');
      set_onClickFunction($receiver_0_0.attrs, props.add);
      $receiver.child_2usv9w$($receiver_0_0.create());
      var $receiver_0_1 = new RDOMBuilder_init(table$lambda(null));
      var closure$path_0 = closure$path;
      var closure$rObj_0 = closure$rObj;
      var $receiver_1 = props.objs;
      var destination = ArrayList_init($receiver_1.size);
      var tmp$;
      tmp$ = $receiver_1.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var $receiver_0_2 = new RDOMBuilder_init(tr$lambda(null));
        var $receiver_0_3 = new RDOMBuilder_init(td$lambda(null));
        navLink($receiver_0_3, closure$path_0 + '/' + item.key, void 0, void 0, void 0, void 0, void 0, void 0, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda(closure$rObj_0, item));
        $receiver_0_2.child_2usv9w$($receiver_0_3.create());
        var $receiver_0_4 = new RDOMBuilder_init(td$lambda(null));
        navLink($receiver_0_4, closure$path_0 + '/' + item.key + '/edit', void 0, void 0, void 0, void 0, void 0, void 0, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda_0);
        $receiver_0_2.child_2usv9w$($receiver_0_4.create());
        var $receiver_0_5 = new RDOMBuilder_init(td$lambda(null));
        var $receiver_0_6 = new RDOMBuilder_init(span$lambda('fakeLink'));
        $receiver_0_6.unaryPlus_pdl1vz$(' Delete');
        set_onClickFunction($receiver_0_6.attrs, fAnyList$lambda$lambda$lambda$lambda$lambda$lambda$lambda_0(props, item));
        $receiver_0_5.child_2usv9w$($receiver_0_6.create());
        $receiver_0_2.child_2usv9w$($receiver_0_5.create());
        tmp$_0.call(destination, $receiver_0_1.child_2usv9w$($receiver_0_2.create()));
      }
      $receiver.child_2usv9w$($receiver_0_1.create());
      return Unit;
    };
  }
  function fAnyList(name, path, rObj) {
    return functionalComponent(fAnyList$lambda(name, path, rObj));
  }
  function li$lambda_0(closure$classes) {
    return function (it) {
      return new LI_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function ul$lambda_0(closure$classes) {
    return function (it) {
      return new UL_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function h1$lambda(closure$classes) {
    return function (it) {
      return new H1_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function nav$lambda(closure$classes) {
    return function (it) {
      return new NAV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function header$lambda(closure$classes) {
    return function (it) {
      return new HEADER_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function p$lambda(closure$classes) {
    return function (it) {
      return new P_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function AppProps() {
  }
  AppProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AppProps',
    interfaces: []
  };
  function RouteNumberResult() {
  }
  RouteNumberResult.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'RouteNumberResult',
    interfaces: []
  };
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Books by authors');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Books by genres');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Authors');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Genres');
    return Unit;
  }
  function fApp$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda(this$) {
    return function () {
      return this$.invoke_eb8iu4$(bookAListContainer, fApp$lambda$lambda$lambda$lambda);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_0($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_0(this$) {
    return function () {
      return this$.invoke_eb8iu4$(bookGListContainer, fApp$lambda$lambda$lambda$lambda_0);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_1($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_1(this$) {
    return function () {
      return this$.invoke_eb8iu4$(authorListContainer, fApp$lambda$lambda$lambda$lambda_1);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_2($receiver) {
    return Unit;
  }
  function fApp$lambda$lambda$lambda_2(this$) {
    return function () {
      return this$.invoke_eb8iu4$(genreListContainer, fApp$lambda$lambda$lambda$lambda_2);
    };
  }
  function fApp$lambda$lambda$lambda_3(closure$props) {
    return function (it) {
      return closure$props.authors.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_3(closure$index, closure$author) {
    return function ($receiver) {
      $receiver.attrs.obj = to(closure$index, closure$author);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_4(this$) {
    return function (index, author) {
      return this$.invoke_eb8iu4$(authorFullContainer, fApp$lambda$lambda$lambda$lambda_3(index, author));
    };
  }
  function fApp$lambda$lambda$lambda_5(closure$props) {
    return function (it) {
      return closure$props.books.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_4(closure$index, closure$book) {
    return function ($receiver) {
      $receiver.attrs.obj = to(closure$index, closure$book);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_6(this$) {
    return function (index, book) {
      return this$.invoke_eb8iu4$(bookFullContainer, fApp$lambda$lambda$lambda$lambda_4(index, book));
    };
  }
  function fApp$lambda$lambda$lambda_7(closure$props) {
    return function (it) {
      return closure$props.books.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_5(closure$index, closure$book) {
    return function ($receiver) {
      $receiver.attrs.obj = to(closure$index, closure$book);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_8(this$) {
    return function (index, book) {
      return this$.invoke_eb8iu4$(bookByGenreFullContainer, fApp$lambda$lambda$lambda$lambda_5(index, book));
    };
  }
  function fApp$lambda$lambda$lambda_9(closure$props) {
    return function (it) {
      return closure$props.genres.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_6(closure$index, closure$genre) {
    return function ($receiver) {
      $receiver.attrs.obj = to(closure$index, closure$genre);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_10(this$) {
    return function (index, genre) {
      return this$.invoke_eb8iu4$(genreFullContainer, fApp$lambda$lambda$lambda$lambda_6(index, genre));
    };
  }
  function fApp$lambda$lambda$lambda_11(closure$props) {
    return function (it) {
      return closure$props.authors.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_7(closure$index, closure$author) {
    return function ($receiver) {
      $receiver.attrs.author = to(closure$index, closure$author);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_12(this$) {
    return function (index, author) {
      return this$.invoke_eb8iu4$(authorEditContainer, fApp$lambda$lambda$lambda$lambda_7(index, author));
    };
  }
  function fApp$lambda$lambda$lambda_13(closure$props) {
    return function (it) {
      return closure$props.books.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_8(closure$index, closure$book) {
    return function ($receiver) {
      $receiver.attrs.book = to(closure$index, closure$book);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_14(this$) {
    return function (index, book) {
      return this$.invoke_eb8iu4$(bookEditContainer, fApp$lambda$lambda$lambda$lambda_8(index, book));
    };
  }
  function fApp$lambda$lambda$lambda_15(closure$props) {
    return function (it) {
      return closure$props.books.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_9(closure$index, closure$book) {
    return function ($receiver) {
      $receiver.attrs.book = to(closure$index, closure$book);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_16(this$) {
    return function (index, book) {
      return this$.invoke_eb8iu4$(bookEditContainer, fApp$lambda$lambda$lambda$lambda_9(index, book));
    };
  }
  function fApp$lambda$lambda$lambda_17(closure$props) {
    return function (it) {
      return closure$props.genres.get_11rb$(it);
    };
  }
  function fApp$lambda$lambda$lambda$lambda_10(closure$index, closure$genre) {
    return function ($receiver) {
      $receiver.attrs.genre = to(closure$index, closure$genre);
      return Unit;
    };
  }
  function fApp$lambda$lambda$lambda_18(this$) {
    return function (index, genre) {
      return this$.invoke_eb8iu4$(genreEditContainer, fApp$lambda$lambda$lambda$lambda_10(index, genre));
    };
  }
  function fApp$lambda$lambda(closure$props) {
    return function ($receiver) {
      route($receiver, '/booksA', true, void 0, fApp$lambda$lambda$lambda($receiver));
      route($receiver, '/booksG', true, void 0, fApp$lambda$lambda$lambda_0($receiver));
      route($receiver, '/authors', true, void 0, fApp$lambda$lambda$lambda_1($receiver));
      route($receiver, '/genres', true, void 0, fApp$lambda$lambda$lambda_2($receiver));
      route_0($receiver, '/authors/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_3(closure$props), fApp$lambda$lambda$lambda_4($receiver)));
      route_0($receiver, '/booksA/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_5(closure$props), fApp$lambda$lambda$lambda_6($receiver)));
      route_0($receiver, '/booksG/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_7(closure$props), fApp$lambda$lambda$lambda_8($receiver)));
      route_0($receiver, '/genres/:number', true, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_9(closure$props), fApp$lambda$lambda$lambda_10($receiver)));
      route_0($receiver, '/authors/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_11(closure$props), fApp$lambda$lambda$lambda_12($receiver)));
      route_0($receiver, '/booksA/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_13(closure$props), fApp$lambda$lambda$lambda_14($receiver)));
      route_0($receiver, '/booksG/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_15(closure$props), fApp$lambda$lambda$lambda_16($receiver)));
      route_0($receiver, '/genres/:number/edit', void 0, void 0, renderObject($receiver, fApp$lambda$lambda$lambda_17(closure$props), fApp$lambda$lambda$lambda_18($receiver)));
      return Unit;
    };
  }
  function fApp$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(header$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(h1$lambda(null));
    $receiver_0_0.unaryPlus_pdl1vz$('App');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(nav$lambda(null));
    var $receiver_0_2 = new RDOMBuilder_init(ul$lambda_0(null));
    var $receiver_0_3 = new RDOMBuilder_init(li$lambda_0(null));
    navLink($receiver_0_3, '/booksA', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda);
    $receiver_0_2.child_2usv9w$($receiver_0_3.create());
    var $receiver_0_4 = new RDOMBuilder_init(li$lambda_0(null));
    navLink($receiver_0_4, '/booksG', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_0);
    $receiver_0_2.child_2usv9w$($receiver_0_4.create());
    var $receiver_0_5 = new RDOMBuilder_init(li$lambda_0(null));
    navLink($receiver_0_5, '/authors', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_1);
    $receiver_0_2.child_2usv9w$($receiver_0_5.create());
    var $receiver_0_6 = new RDOMBuilder_init(li$lambda_0(null));
    navLink($receiver_0_6, '/genres', void 0, void 0, void 0, void 0, void 0, void 0, fApp$lambda$lambda$lambda$lambda$lambda$lambda_2);
    $receiver_0_2.child_2usv9w$($receiver_0_6.create());
    $receiver_0_1.child_2usv9w$($receiver_0_2.create());
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    switch_0($receiver, fApp$lambda$lambda(props));
    return Unit;
  }
  function fApp() {
    return functionalComponent(fApp$lambda);
  }
  function renderObject$lambda(closure$selector, closure$rElement, this$renderObject) {
    return function (route_props) {
      var tmp$;
      var num = (tmp$ = toIntOrNull(route_props.match.params.number)) != null ? tmp$ : -1;
      var obj = closure$selector(num);
      var tmp$_0;
      if (obj != null)
        tmp$_0 = closure$rElement(num, obj);
      else {
        var $receiver = this$renderObject;
        var $receiver_0 = new RDOMBuilder_init(p$lambda(null));
        $receiver_0.unaryPlus_pdl1vz$('Object not found');
        tmp$_0 = $receiver.child_2usv9w$($receiver_0.create());
      }
      return tmp$_0;
    };
  }
  function renderObject($receiver, selector, rElement) {
    return renderObject$lambda(selector, rElement, $receiver);
  }
  function span$lambda_0(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function button$lambda(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function AuthorProps() {
  }
  AuthorProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorProps',
    interfaces: []
  };
  function fAuthor$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_0(it.cssClass));
    $receiver_0.unaryPlus_pdl1vz$(it.author.name);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fAuthor;
  function author$lambda(closure$author, closure$cssClass, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.author = closure$author;
      $receiver.attrs.cssClass = closure$cssClass;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function author($receiver, author, cssClass, onClick) {
    return child($receiver, withDisplayName_0('Author', fAuthor), void 0, author$lambda(author, cssClass, onClick));
  }
  function AuthorEditProps() {
  }
  AuthorEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorEditProps',
    interfaces: []
  };
  function fAuthorEdit$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$;
      var inputElement = Kotlin.isType(tmp$ = document.getElementById('authorEdit' + closure$props.author.first), HTMLInputElement) ? tmp$ : throwCCE();
      closure$props.onClick(new Author(inputElement.value));
      window.history.back();
      return Unit;
    };
  }
  function fAuthorEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_0(null));
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda(null, null, null, null, null));
    set_id($receiver_0_0.attrs, 'authorEdit' + props.author.first);
    set_defaultValue($receiver_0_0.attrs, props.author.second.name);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(button$lambda(null, null, null, null));
    $receiver_0_1.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_1.attrs, fAuthorEdit$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fAuthorEdit;
  function span$lambda_1(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_0(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function button$lambda_0(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function BookProps() {
  }
  BookProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookProps',
    interfaces: []
  };
  function fBook$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_1(it.cssClass));
    $receiver_0.unaryPlus_pdl1vz$(it.book.title);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fBook;
  function book$lambda(closure$book, closure$cssClass, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.book = closure$book;
      $receiver.attrs.cssClass = closure$cssClass;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function book($receiver, book, cssClass, onClick) {
    return child($receiver, withDisplayName_0('Book', fBook), void 0, book$lambda(book, cssClass, onClick));
  }
  function BookEditProps() {
  }
  BookEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookEditProps',
    interfaces: []
  };
  function fBookEdit$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$;
      var inputElement = Kotlin.isType(tmp$ = document.getElementById('bookEdit' + closure$props.book.first), HTMLInputElement) ? tmp$ : throwCCE();
      closure$props.onClick(new Book(inputElement.value));
      window.history.back();
      return Unit;
    };
  }
  function fBookEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_1(null));
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda_0(null, null, null, null, null));
    set_id($receiver_0_0.attrs, 'bookEdit' + props.book.first);
    set_defaultValue($receiver_0_0.attrs, props.book.second.title);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(button$lambda_0(null, null, null, null));
    $receiver_0_1.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_1.attrs, fBookEdit$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fBookEdit;
  function span$lambda_2(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function div$lambda(closure$classes) {
    return function (it) {
      return new DIV_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function footer$lambda$lambda($receiver) {
    $receiver.attrs.filter = VisibilityFilter$SHOW_ALL_getInstance();
    $receiver.unaryPlus_pdl1vz$('All');
    return Unit;
  }
  function footer$lambda$lambda_0($receiver) {
    $receiver.attrs.filter = VisibilityFilter$SHOW_FILTER_getInstance();
    $receiver.unaryPlus_pdl1vz$('Filter');
    return Unit;
  }
  function footer($receiver) {
    var $receiver_0 = new RDOMBuilder_init(div$lambda(null));
    var $receiver_0_0 = new RDOMBuilder_init(span$lambda_2(null));
    $receiver_0_0.unaryPlus_pdl1vz$('Show: ');
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    $receiver_0.invoke_eb8iu4$(filterLink, footer$lambda$lambda);
    $receiver_0.invoke_eb8iu4$(filterLink, footer$lambda$lambda_0);
    return $receiver.child_2usv9w$($receiver_0.create());
  }
  function span$lambda_3(closure$classes) {
    return function (it) {
      return new SPAN_init(attributesMapOf('class', closure$classes), it);
    };
  }
  function input$lambda_1(closure$type, closure$formEncType, closure$formMethod, closure$name, closure$classes) {
    return function (it) {
      return new INPUT_init(attributesMapOf_0(['type', closure$type != null ? enumEncode(closure$type) : null, 'formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'name', closure$name, 'class', closure$classes]), it);
    };
  }
  function button$lambda_1(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function GenreProps() {
  }
  GenreProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GenreProps',
    interfaces: []
  };
  function fGenre$lambda($receiver, it) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_3(it.cssClass));
    $receiver_0.unaryPlus_pdl1vz$(it.genre.style);
    set_onClickFunction($receiver_0.attrs, it.onClick);
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fGenre;
  function genre$lambda(closure$genre, closure$cssClass, closure$onClick) {
    return function ($receiver) {
      $receiver.attrs.genre = closure$genre;
      $receiver.attrs.cssClass = closure$cssClass;
      $receiver.attrs.onClick = closure$onClick;
      return Unit;
    };
  }
  function genre($receiver, genre, cssClass, onClick) {
    return child($receiver, withDisplayName_0('Genre', fGenre), void 0, genre$lambda(genre, cssClass, onClick));
  }
  function GenreEditProps() {
  }
  GenreEditProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GenreEditProps',
    interfaces: []
  };
  function fGenreEdit$lambda$lambda$lambda$lambda(closure$props) {
    return function (it) {
      var tmp$;
      var inputElement = Kotlin.isType(tmp$ = document.getElementById('genreEdit' + closure$props.genre.first), HTMLInputElement) ? tmp$ : throwCCE();
      closure$props.onClick(new Genre(inputElement.value));
      window.history.back();
      return Unit;
    };
  }
  function fGenreEdit$lambda($receiver, props) {
    var $receiver_0 = new RDOMBuilder_init(span$lambda_3(null));
    var $receiver_0_0 = new RDOMBuilder_init(input$lambda_1(null, null, null, null, null));
    set_id($receiver_0_0.attrs, 'genreEdit' + props.genre.first);
    set_defaultValue($receiver_0_0.attrs, props.genre.second.style);
    $receiver_0.child_2usv9w$($receiver_0_0.create());
    var $receiver_0_1 = new RDOMBuilder_init(button$lambda_1(null, null, null, null));
    $receiver_0_1.unaryPlus_pdl1vz$('Save');
    set_onClickFunction($receiver_0_1.attrs, fGenreEdit$lambda$lambda$lambda$lambda(props));
    $receiver_0.child_2usv9w$($receiver_0_1.create());
    $receiver.child_2usv9w$($receiver_0.create());
    return Unit;
  }
  var fGenreEdit;
  function button$lambda_2(closure$formEncType, closure$formMethod, closure$type, closure$classes) {
    return function (it) {
      return new BUTTON_init(attributesMapOf_0(['formenctype', closure$formEncType != null ? enumEncode(closure$formEncType) : null, 'formmethod', closure$formMethod != null ? enumEncode(closure$formMethod) : null, 'type', closure$type != null ? enumEncode(closure$type) : null, 'class', closure$classes]), it);
    };
  }
  function LinkProps() {
  }
  LinkProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkProps',
    interfaces: []
  };
  function Link(props) {
    RComponent_init(props, this);
  }
  function Link$render$lambda$lambda(this$Link) {
    return function (it) {
      this$Link.props.onClick();
      return Unit;
    };
  }
  Link.prototype.render_ss14n$ = function ($receiver) {
    var $receiver_0 = new RDOMBuilder_init(button$lambda_2(null, null, null, null));
    set_onClickFunction($receiver_0.attrs, Link$render$lambda$lambda(this));
    this.children_ss14n$($receiver_0);
    $receiver.child_2usv9w$($receiver_0.create());
  };
  Link.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Link',
    interfaces: [RComponent]
  };
  function AnyFullDispatchProps() {
  }
  AnyFullDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullDispatchProps',
    interfaces: []
  };
  function AnyFullStateProps() {
  }
  AnyFullStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullStateProps',
    interfaces: []
  };
  function AnyFullOwnProps() {
  }
  AnyFullOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyFullOwnProps',
    interfaces: []
  };
  function authorFullContainer$lambda($receiver, state, ownProps) {
    $receiver.relation = state.relationAB.get_11rb$(ownProps.obj.first);
    $receiver.subobjs = getVisibleObjects(state.books, $receiver.relation, state.visibilityFilter);
    return Unit;
  }
  function authorFullContainer$lambda$lambda$lambda(closure$dispatch, closure$ownProps, closure$index) {
    return function (it) {
      closure$dispatch(new ChangeAuthorship(closure$ownProps.obj.first, closure$index));
      return Unit;
    };
  }
  function authorFullContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (index) {
      return authorFullContainer$lambda$lambda$lambda(closure$dispatch, closure$ownProps, index);
    };
  }
  function authorFullContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = authorFullContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var authorFullContainer;
  function bookFullContainer$lambda($receiver, state, ownProps) {
    $receiver.subobjs = getVisibleObjects(state.authors, authorship(state, ownProps.obj.first), state.visibilityFilter);
    $receiver.relation = authorship(state, ownProps.obj.first);
    return Unit;
  }
  function bookFullContainer$lambda$lambda$lambda(closure$dispatch, closure$index, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangeAuthorship(closure$index, closure$ownProps.obj.first));
      return Unit;
    };
  }
  function bookFullContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (index) {
      return bookFullContainer$lambda$lambda$lambda(closure$dispatch, index, closure$ownProps);
    };
  }
  function bookFullContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = bookFullContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var bookFullContainer;
  function genreFullContainer$lambda($receiver, state, ownProps) {
    $receiver.relation = state.relationGB.get_11rb$(ownProps.obj.first);
    $receiver.subobjs = getVisibleObjects(state.books, $receiver.relation, state.visibilityFilter);
    return Unit;
  }
  function genreFullContainer$lambda$lambda$lambda(closure$dispatch, closure$ownProps, closure$index) {
    return function (it) {
      closure$dispatch(new ChangeStyle(closure$ownProps.obj.first, closure$index));
      return Unit;
    };
  }
  function genreFullContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (index) {
      return genreFullContainer$lambda$lambda$lambda(closure$dispatch, closure$ownProps, index);
    };
  }
  function genreFullContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = genreFullContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var genreFullContainer;
  function bookByGenreFullContainer$lambda($receiver, state, ownProps) {
    $receiver.subobjs = getVisibleObjects(state.genres, style(state, ownProps.obj.first), state.visibilityFilter);
    $receiver.relation = style(state, ownProps.obj.first);
    return Unit;
  }
  function bookByGenreFullContainer$lambda$lambda$lambda(closure$dispatch, closure$index, closure$ownProps) {
    return function (it) {
      closure$dispatch(new ChangeStyle(closure$index, closure$ownProps.obj.first));
      return Unit;
    };
  }
  function bookByGenreFullContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (index) {
      return bookByGenreFullContainer$lambda$lambda$lambda(closure$dispatch, index, closure$ownProps);
    };
  }
  function bookByGenreFullContainer$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = bookByGenreFullContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var bookByGenreFullContainer;
  function getVisibleObjects(objects, relation, filter) {
    switch (filter.name) {
      case 'SHOW_ALL':
        return objects;
      case 'SHOW_FILTER':
        var authorshipObj = toMutableMap(objects);
        authorshipObj.clear();
        if (relation != null) {
          var destination = LinkedHashMap_init();
          var tmp$;
          tmp$ = relation.entries.iterator();
          while (tmp$.hasNext()) {
            var element = tmp$.next();
            if (element.value) {
              destination.put_xwzc9p$(element.key, element.value);
            }
          }
          var destination_0 = ArrayList_init(destination.size);
          var tmp$_0;
          tmp$_0 = destination.entries.iterator();
          while (tmp$_0.hasNext()) {
            var item = tmp$_0.next();
            var tmp$_1 = destination_0.add_11rb$;
            var key = item.key;
            var value = getValue(objects, item.key);
            authorshipObj.put_xwzc9p$(key, value);
            tmp$_1.call(destination_0, Unit);
          }
        }

        return authorshipObj;
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function AnyListDispatchProps() {
  }
  AnyListDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListDispatchProps',
    interfaces: []
  };
  function AnyListStateProps() {
  }
  AnyListStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnyListStateProps',
    interfaces: []
  };
  function bookListHOC$lambda($receiver, state, f) {
    $receiver.objs = state.books;
    return Unit;
  }
  function bookListHOC$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddBook(new Book('new book')));
      return Unit;
    };
  }
  function bookListHOC$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new DeleteBook(it));
      return Unit;
    };
  }
  function bookListHOC$lambda_0($receiver, dispatch, f) {
    $receiver.add = bookListHOC$lambda$lambda(dispatch);
    $receiver.remove = bookListHOC$lambda$lambda_0(dispatch);
    return Unit;
  }
  var bookListHOC;
  var bookAListRClass;
  var bookAListContainer;
  var bookGListRClass;
  var bookGListContainer;
  function authorListContainer$lambda($receiver, state, f) {
    $receiver.objs = state.authors;
    return Unit;
  }
  function authorListContainer$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddAuthor(new Author('new author')));
      return Unit;
    };
  }
  function authorListContainer$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new DeleteAuthor(it));
      return Unit;
    };
  }
  function authorListContainer$lambda_0($receiver, dispatch, f) {
    $receiver.add = authorListContainer$lambda$lambda(dispatch);
    $receiver.remove = authorListContainer$lambda$lambda_0(dispatch);
    return Unit;
  }
  var authorListContainer;
  function genreListContainer$lambda($receiver, state, f) {
    $receiver.objs = state.genres;
    return Unit;
  }
  function genreListContainer$lambda$lambda(closure$dispatch) {
    return function (it) {
      closure$dispatch(new AddGenre(new Genre('new genre')));
      return Unit;
    };
  }
  function genreListContainer$lambda$lambda_0(closure$dispatch) {
    return function (it) {
      closure$dispatch(new DeleteGenre(it));
      return Unit;
    };
  }
  function genreListContainer$lambda_0($receiver, dispatch, f) {
    $receiver.add = genreListContainer$lambda$lambda(dispatch);
    $receiver.remove = genreListContainer$lambda$lambda_0(dispatch);
    return Unit;
  }
  var genreListContainer;
  function appContainer$lambda($receiver, state, f) {
    $receiver.authors = state.authors;
    $receiver.books = state.books;
    $receiver.genres = state.genres;
    return Unit;
  }
  function appContainer$lambda_0($receiver) {
    $receiver.pure = false;
    return Unit;
  }
  var appContainer;
  function AuthorEditOwnProps() {
  }
  AuthorEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AuthorEditOwnProps',
    interfaces: []
  };
  function authorEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new EditAuthor(closure$ownProps.author.first, it));
      return Unit;
    };
  }
  function authorEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = authorEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var authorEditContainer;
  function BookEditOwnProps() {
  }
  BookEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BookEditOwnProps',
    interfaces: []
  };
  function bookEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new EditBook(closure$ownProps.book.first, it));
      return Unit;
    };
  }
  function bookEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = bookEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var bookEditContainer;
  function GenreEditOwnProps() {
  }
  GenreEditOwnProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GenreEditOwnProps',
    interfaces: []
  };
  function genreEditContainer$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function (it) {
      closure$dispatch(new EditGenre(closure$ownProps.genre.first, it));
      return Unit;
    };
  }
  function genreEditContainer$lambda($receiver, dispatch, ownProps) {
    $receiver.onClick = genreEditContainer$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var genreEditContainer;
  function FilterLinkProps() {
  }
  FilterLinkProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FilterLinkProps',
    interfaces: []
  };
  function LinkStateProps() {
  }
  LinkStateProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkStateProps',
    interfaces: []
  };
  function LinkDispatchProps() {
  }
  LinkDispatchProps.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LinkDispatchProps',
    interfaces: []
  };
  function filterLink$lambda($receiver, state, ownProps) {
    $receiver.authorship = state.visibilityFilter === ownProps.filter;
    return Unit;
  }
  function filterLink$lambda$lambda(closure$dispatch, closure$ownProps) {
    return function () {
      closure$dispatch(new SetVisibilityFilter(closure$ownProps.filter));
      return Unit;
    };
  }
  function filterLink$lambda_0($receiver, dispatch, ownProps) {
    $receiver.onClick = filterLink$lambda$lambda(dispatch, ownProps);
    return Unit;
  }
  var filterLink;
  function Author(name) {
    this.name = name;
  }
  Author.prototype.toString = function () {
    return this.name;
  };
  Author.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Author',
    interfaces: []
  };
  Author.prototype.component1 = function () {
    return this.name;
  };
  Author.prototype.copy_61zpoe$ = function (name) {
    return new Author(name === void 0 ? this.name : name);
  };
  Author.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Author.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function authorList() {
    return [new Author('George Orwell'), new Author('Mikhail Bulgakov'), new Author('Joanne Rowling'), new Author('Arthur Conan Doyle'), new Author('Oscar Wilde'), new Author('John Tolkien'), new Author('Stephen King')];
  }
  function Book(title) {
    this.title = title;
  }
  Book.prototype.toString = function () {
    return this.title;
  };
  Book.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Book',
    interfaces: []
  };
  Book.prototype.component1 = function () {
    return this.title;
  };
  Book.prototype.copy_61zpoe$ = function (title) {
    return new Book(title === void 0 ? this.title : title);
  };
  Book.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.title) | 0;
    return result;
  };
  Book.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.title, other.title))));
  };
  function bookList() {
    return [new Book('1984'), new Book('The Master and Margarita'), new Book("Harry Potter and the Philosopher's Stone"), new Book('The Adventures Of Sherlock Holmes'), new Book('The Picture of Dorian Gray'), new Book('The Hobbit, or There and Back Again'), new Book('Pet Sematary')];
  }
  function Genre(style) {
    this.style = style;
  }
  Genre.prototype.toString = function () {
    return this.style;
  };
  Genre.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Genre',
    interfaces: []
  };
  Genre.prototype.component1 = function () {
    return this.style;
  };
  Genre.prototype.copy_61zpoe$ = function (style) {
    return new Genre(style === void 0 ? this.style : style);
  };
  Genre.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.style) | 0;
    return result;
  };
  Genre.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.style, other.style))));
  };
  function genreList() {
    return [new Genre('anti-utopia'), new Genre('classic'), new Genre('fantasy'), new Genre('detective'), new Genre('mysticism'), new Genre('thriller')];
  }
  function State(books, authors, genres, relationAB, visibilityFilter, relationGB) {
    this.books = books;
    this.authors = authors;
    this.genres = genres;
    this.relationAB = relationAB;
    this.visibilityFilter = visibilityFilter;
    this.relationGB = relationGB;
  }
  State.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'State',
    interfaces: []
  };
  function newId($receiver) {
    var tmp$, tmp$_0;
    var $receiver_0 = $receiver.entries;
    var maxBy$result;
    maxBy$break: do {
      var iterator = $receiver_0.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      if (!iterator.hasNext()) {
        maxBy$result = maxElem;
        break maxBy$break;
      }
      var maxValue = maxElem.key;
      do {
        var e = iterator.next();
        var v = e.key;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
       while (iterator.hasNext());
      maxBy$result = maxElem;
    }
     while (false);
    return ((tmp$_0 = (tmp$ = maxBy$result) != null ? tmp$.key : null) != null ? tmp$_0 : 0) + 1 | 0;
  }
  function authorship($receiver, idBook) {
    var $receiver_0 = $receiver.relationAB;
    var destination = ArrayList_init($receiver_0.size);
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(to(item.key, (tmp$_0 = item.value.get_11rb$(idBook)) != null ? tmp$_0 : false));
    }
    return toMap(destination);
  }
  function style($receiver, idBook) {
    var $receiver_0 = $receiver.relationGB;
    var destination = ArrayList_init($receiver_0.size);
    var tmp$;
    tmp$ = $receiver_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0;
      destination.add_11rb$(to(item.key, (tmp$_0 = item.value.get_11rb$(idBook)) != null ? tmp$_0 : false));
    }
    return toMap(destination);
  }
  function initialState() {
    var $receiver = bookList();
    var destination = ArrayList_init($receiver.length);
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0), item));
    }
    var tmp$_1 = toMap(destination);
    var $receiver_0 = authorList();
    var destination_0 = ArrayList_init($receiver_0.length);
    var tmp$_2, tmp$_0_0;
    var index_0 = 0;
    for (tmp$_2 = 0; tmp$_2 !== $receiver_0.length; ++tmp$_2) {
      var item_0 = $receiver_0[tmp$_2];
      destination_0.add_11rb$(to((tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0), item_0));
    }
    var tmp$_3 = toMap(destination_0);
    var $receiver_1 = genreList();
    var destination_1 = ArrayList_init($receiver_1.length);
    var tmp$_4, tmp$_0_1;
    var index_1 = 0;
    for (tmp$_4 = 0; tmp$_4 !== $receiver_1.length; ++tmp$_4) {
      var item_1 = $receiver_1[tmp$_4];
      destination_1.add_11rb$(to((tmp$_0_1 = index_1, index_1 = tmp$_0_1 + 1 | 0, tmp$_0_1), item_1));
    }
    var tmp$_5 = toMap(destination_1);
    var $receiver_2 = authorList();
    var destination_2 = ArrayList_init($receiver_2.length);
    var tmp$_6, tmp$_0_2;
    var index_2 = 0;
    for (tmp$_6 = 0; tmp$_6 !== $receiver_2.length; ++tmp$_6) {
      var item_2 = $receiver_2[tmp$_6];
      var tmp$_7 = destination_2.add_11rb$;
      var idAuthor = (tmp$_0_2 = index_2, index_2 = tmp$_0_2 + 1 | 0, tmp$_0_2);
      var $receiver_3 = bookList();
      var destination_3 = ArrayList_init($receiver_3.length);
      var tmp$_8, tmp$_0_3;
      var index_3 = 0;
      for (tmp$_8 = 0; tmp$_8 !== $receiver_3.length; ++tmp$_8) {
        var item_3 = $receiver_3[tmp$_8];
        destination_3.add_11rb$(to((tmp$_0_3 = index_3, index_3 = tmp$_0_3 + 1 | 0, tmp$_0_3), false));
      }
      tmp$_7.call(destination_2, to(idAuthor, toMap(destination_3)));
    }
    var tmp$_9 = toMap(destination_2);
    var tmp$_10 = VisibilityFilter$SHOW_ALL_getInstance();
    var $receiver_4 = genreList();
    var destination_4 = ArrayList_init($receiver_4.length);
    var tmp$_11, tmp$_0_4;
    var index_4 = 0;
    for (tmp$_11 = 0; tmp$_11 !== $receiver_4.length; ++tmp$_11) {
      var item_4 = $receiver_4[tmp$_11];
      var tmp$_12 = destination_4.add_11rb$;
      var idGenre = (tmp$_0_4 = index_4, index_4 = tmp$_0_4 + 1 | 0, tmp$_0_4);
      var $receiver_5 = bookList();
      var destination_5 = ArrayList_init($receiver_5.length);
      var tmp$_13, tmp$_0_5;
      var index_5 = 0;
      for (tmp$_13 = 0; tmp$_13 !== $receiver_5.length; ++tmp$_13) {
        var item_5 = $receiver_5[tmp$_13];
        destination_5.add_11rb$(to((tmp$_0_5 = index_5, index_5 = tmp$_0_5 + 1 | 0, tmp$_0_5), false));
      }
      tmp$_12.call(destination_4, to(idGenre, toMap(destination_5)));
    }
    return new State(tmp$_1, tmp$_3, tmp$_5, tmp$_9, tmp$_10, toMap(destination_4));
  }
  function VisibilityFilter(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VisibilityFilter_initFields() {
    VisibilityFilter_initFields = function () {
    };
    VisibilityFilter$SHOW_ALL_instance = new VisibilityFilter('SHOW_ALL', 0);
    VisibilityFilter$SHOW_FILTER_instance = new VisibilityFilter('SHOW_FILTER', 1);
  }
  var VisibilityFilter$SHOW_ALL_instance;
  function VisibilityFilter$SHOW_ALL_getInstance() {
    VisibilityFilter_initFields();
    return VisibilityFilter$SHOW_ALL_instance;
  }
  var VisibilityFilter$SHOW_FILTER_instance;
  function VisibilityFilter$SHOW_FILTER_getInstance() {
    VisibilityFilter_initFields();
    return VisibilityFilter$SHOW_FILTER_instance;
  }
  VisibilityFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VisibilityFilter',
    interfaces: [Enum]
  };
  function VisibilityFilter$values() {
    return [VisibilityFilter$SHOW_ALL_getInstance(), VisibilityFilter$SHOW_FILTER_getInstance()];
  }
  VisibilityFilter.values = VisibilityFilter$values;
  function VisibilityFilter$valueOf(name) {
    switch (name) {
      case 'SHOW_ALL':
        return VisibilityFilter$SHOW_ALL_getInstance();
      case 'SHOW_FILTER':
        return VisibilityFilter$SHOW_FILTER_getInstance();
      default:throwISE('No enum constant enums.VisibilityFilter.' + name);
    }
  }
  VisibilityFilter.valueOf_61zpoe$ = VisibilityFilter$valueOf;
  function withDisplayName(name, kClass) {
    get_rClass(kClass).displayName = name;
    return kClass;
  }
  function withDisplayName_0(name, fComp) {
    var obj = {};
    obj.displayName = name;
    return Object.assign(fComp, obj);
  }
  var store;
  function main$lambda$lambda$lambda$lambda($receiver) {
    return Unit;
  }
  function main$lambda$lambda$lambda($receiver) {
    $receiver.invoke_eb8iu4$(appContainer, main$lambda$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda$lambda($receiver) {
    hashRouter($receiver, main$lambda$lambda$lambda);
    return Unit;
  }
  function main$lambda($receiver) {
    provider($receiver, store, main$lambda$lambda);
    return Unit;
  }
  function main() {
    render(document.getElementById('root'), void 0, main$lambda);
  }
  function ChangeAuthorship(authorID, bookID) {
    this.authorID = authorID;
    this.bookID = bookID;
  }
  ChangeAuthorship.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeAuthorship',
    interfaces: [RAction]
  };
  function AddAuthor(author) {
    this.author = author;
  }
  AddAuthor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddAuthor',
    interfaces: [RAction]
  };
  function DeleteAuthor(id) {
    this.id = id;
  }
  DeleteAuthor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeleteAuthor',
    interfaces: [RAction]
  };
  function EditAuthor(id, newAuthor) {
    this.id = id;
    this.newAuthor = newAuthor;
  }
  EditAuthor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditAuthor',
    interfaces: [RAction]
  };
  function AddBook(book) {
    this.book = book;
  }
  AddBook.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddBook',
    interfaces: [RAction]
  };
  function DeleteBook(id) {
    this.id = id;
  }
  DeleteBook.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeleteBook',
    interfaces: [RAction]
  };
  function EditBook(id, newBook) {
    this.id = id;
    this.newBook = newBook;
  }
  EditBook.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditBook',
    interfaces: [RAction]
  };
  function SetVisibilityFilter(filter) {
    this.filter = filter;
  }
  SetVisibilityFilter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SetVisibilityFilter',
    interfaces: [RAction]
  };
  function ChangeStyle(genreID, bookID) {
    this.genreID = genreID;
    this.bookID = bookID;
  }
  ChangeStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeStyle',
    interfaces: [RAction]
  };
  function AddGenre(genre) {
    this.genre = genre;
  }
  AddGenre.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AddGenre',
    interfaces: [RAction]
  };
  function DeleteGenre(id) {
    this.id = id;
  }
  DeleteGenre.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeleteGenre',
    interfaces: [RAction]
  };
  function EditGenre(id, newGenre) {
    this.id = id;
    this.newGenre = newGenre;
  }
  EditGenre.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EditGenre',
    interfaces: [RAction]
  };
  function authorshipReducer(state, action, id) {
    if (id === void 0)
      id = -1;
    if (Kotlin.isType(action, ChangeAuthorship)) {
      var $receiver = toMutableMap(state);
      var tmp$;
      if ((tmp$ = $receiver.get_11rb$(action.authorID)) != null) {
        var tmp$_0, tmp$_1;
        var old = (tmp$_0 = tmp$.get_11rb$(action.bookID)) != null ? tmp$_0 : false;
        var $receiver_0 = Kotlin.isType(tmp$_1 = tmp$, MutableMap) ? tmp$_1 : throwCCE();
        var key = action.bookID;
        var value = !old;
        $receiver_0.put_xwzc9p$(key, value);
      }
      return $receiver;
    }
     else if (Kotlin.isType(action, DeleteAuthor))
      return minus(state, action.id);
    else if (Kotlin.isType(action, AddAuthor)) {
      var $receiver_1 = first(state.values).keys;
      var result = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_1, 10)), 16));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        result.put_xwzc9p$(element, false);
      }
      return plus(state, to(id, result));
    }
     else if (Kotlin.isType(action, DeleteBook)) {
      var $receiver_2 = toMutableMap(HashMap_init());
      var destination = ArrayList_init(state.size);
      var tmp$_3;
      tmp$_3 = state.entries.iterator();
      while (tmp$_3.hasNext()) {
        var item = tmp$_3.next();
        destination.add_11rb$($receiver_2.put_xwzc9p$(item.key, minus(item.value, action.id)));
      }
      return $receiver_2;
    }
     else if (Kotlin.isType(action, AddBook)) {
      var $receiver_3 = toMutableMap(HashMap_init());
      var destination_0 = ArrayList_init(state.size);
      var tmp$_4;
      tmp$_4 = state.entries.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_0.add_11rb$($receiver_3.put_xwzc9p$(item_0.key, plus(item_0.value, to(id, false))));
      }
      return $receiver_3;
    }
     else
      return state;
  }
  function genreReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, DeleteGenre))
      return minus(state, action.id);
    else if (Kotlin.isType(action, EditGenre)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newGenre;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    }
     else if (Kotlin.isType(action, AddGenre))
      return plus(state, to(newId, action.genre));
    else
      return state;
  }
  function styleReducer(state, action, id) {
    if (id === void 0)
      id = -1;
    if (Kotlin.isType(action, ChangeStyle)) {
      var $receiver = toMutableMap(state);
      var tmp$;
      if ((tmp$ = $receiver.get_11rb$(action.genreID)) != null) {
        var tmp$_0, tmp$_1;
        var old = (tmp$_0 = tmp$.get_11rb$(action.bookID)) != null ? tmp$_0 : false;
        var $receiver_0 = Kotlin.isType(tmp$_1 = tmp$, MutableMap) ? tmp$_1 : throwCCE();
        var key = action.bookID;
        var value = !old;
        $receiver_0.put_xwzc9p$(key, value);
      }
      return $receiver;
    }
     else if (Kotlin.isType(action, DeleteBook)) {
      var $receiver_1 = toMutableMap(HashMap_init());
      var destination = ArrayList_init(state.size);
      var tmp$_2;
      tmp$_2 = state.entries.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$($receiver_1.put_xwzc9p$(item.key, minus(item.value, action.id)));
      }
      return $receiver_1;
    }
     else if (Kotlin.isType(action, AddBook)) {
      var $receiver_2 = toMutableMap(HashMap_init());
      var destination_0 = ArrayList_init(state.size);
      var tmp$_3;
      tmp$_3 = state.entries.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_0.add_11rb$($receiver_2.put_xwzc9p$(item_0.key, plus(item_0.value, to(id, false))));
      }
      return $receiver_2;
    }
     else if (Kotlin.isType(action, DeleteGenre))
      return minus(state, action.id);
    else if (Kotlin.isType(action, AddGenre)) {
      var $receiver_3 = first(state.values).keys;
      var result = LinkedHashMap_init_0(coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver_3, 10)), 16));
      var tmp$_4;
      tmp$_4 = $receiver_3.iterator();
      while (tmp$_4.hasNext()) {
        var element = tmp$_4.next();
        result.put_xwzc9p$(element, false);
      }
      return plus(state, to(id, result));
    }
     else
      return state;
  }
  function authorReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, DeleteAuthor))
      return minus(state, action.id);
    else if (Kotlin.isType(action, EditAuthor)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newAuthor;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    }
     else if (Kotlin.isType(action, AddAuthor))
      return plus(state, to(newId, action.author));
    else
      return state;
  }
  function bookReducer(state, action, newId) {
    if (newId === void 0)
      newId = -1;
    if (Kotlin.isType(action, EditBook)) {
      var $receiver = toMutableMap(state);
      var key = action.id;
      var value = action.newBook;
      $receiver.put_xwzc9p$(key, value);
      return $receiver;
    }
     else if (Kotlin.isType(action, DeleteBook))
      return minus(state, action.id);
    else if (Kotlin.isType(action, AddBook))
      return plus(state, to(newId, action.book));
    else
      return state;
  }
  function visibilityReducer(state, action) {
    if (Kotlin.isType(action, SetVisibilityFilter))
      return action.filter;
    else
      return state;
  }
  function rootReducer(state, action) {
    if (Kotlin.isType(action, AddAuthor)) {
      var id = newId(state.authors);
      return new State(bookReducer(state.books, action), authorReducer(state.authors, action, id), genreReducer(state.genres, action), authorshipReducer(state.relationAB, action, id), visibilityReducer(state.visibilityFilter, action), styleReducer(state.relationGB, action));
    }
     else if (Kotlin.isType(action, AddBook)) {
      var id_0 = newId(state.books);
      return new State(bookReducer(state.books, action, id_0), authorReducer(state.authors, action), genreReducer(state.genres, action), authorshipReducer(state.relationAB, action, id_0), visibilityReducer(state.visibilityFilter, action), styleReducer(state.relationGB, action, id_0));
    }
     else if (Kotlin.isType(action, AddGenre)) {
      var id_1 = newId(state.genres);
      return new State(bookReducer(state.books, action), authorReducer(state.authors, action), genreReducer(state.genres, action, id_1), authorshipReducer(state.relationAB, action), visibilityReducer(state.visibilityFilter, action), styleReducer(state.relationGB, action, id_1));
    }
     else
      return new State(bookReducer(state.books, action), authorReducer(state.authors, action), genreReducer(state.genres, action), authorshipReducer(state.relationAB, action), visibilityReducer(state.visibilityFilter, action), styleReducer(state.relationGB, action));
  }
  var package$component = _.component || (_.component = {});
  package$component.AnyFullProps = AnyFullProps;
  $$importsForInline$$['kotlin-react-dom'] = $module$kotlin_react_dom;
  package$component.fAnyFull_ii9zx$ = fAnyFull;
  package$component.anyFull_8cpqxx$ = anyFull;
  package$component.AnyListProps = AnyListProps;
  package$component.fAnyList_fkdnln$ = fAnyList;
  package$component.AppProps = AppProps;
  package$component.RouteNumberResult = RouteNumberResult;
  package$component.fApp = fApp;
  package$component.renderObject_q6otrr$ = renderObject;
  package$component.AuthorProps = AuthorProps;
  Object.defineProperty(package$component, 'fAuthor', {
    get: function () {
      return fAuthor;
    }
  });
  package$component.author_c8cix9$ = author;
  package$component.AuthorEditProps = AuthorEditProps;
  Object.defineProperty(package$component, 'fAuthorEdit', {
    get: function () {
      return fAuthorEdit;
    }
  });
  package$component.BookProps = BookProps;
  Object.defineProperty(package$component, 'fBook', {
    get: function () {
      return fBook;
    }
  });
  package$component.book_km1qq9$ = book;
  package$component.BookEditProps = BookEditProps;
  Object.defineProperty(package$component, 'fBookEdit', {
    get: function () {
      return fBookEdit;
    }
  });
  package$component.footer_ss14n$ = footer;
  package$component.GenreProps = GenreProps;
  Object.defineProperty(package$component, 'fGenre', {
    get: function () {
      return fGenre;
    }
  });
  package$component.genre_qvdxlb$ = genre;
  package$component.GenreEditProps = GenreEditProps;
  Object.defineProperty(package$component, 'fGenreEdit', {
    get: function () {
      return fGenreEdit;
    }
  });
  package$component.LinkProps = LinkProps;
  package$component.Link = Link;
  var package$container = _.container || (_.container = {});
  package$container.AnyFullDispatchProps = AnyFullDispatchProps;
  package$container.AnyFullStateProps = AnyFullStateProps;
  package$container.AnyFullOwnProps = AnyFullOwnProps;
  Object.defineProperty(package$container, 'authorFullContainer', {
    get: function () {
      return authorFullContainer;
    }
  });
  Object.defineProperty(package$container, 'bookFullContainer', {
    get: function () {
      return bookFullContainer;
    }
  });
  Object.defineProperty(package$container, 'genreFullContainer', {
    get: function () {
      return genreFullContainer;
    }
  });
  Object.defineProperty(package$container, 'bookByGenreFullContainer', {
    get: function () {
      return bookByGenreFullContainer;
    }
  });
  package$container.getVisibleObjects_nrvj6i$ = getVisibleObjects;
  package$container.AnyListDispatchProps = AnyListDispatchProps;
  package$container.AnyListStateProps = AnyListStateProps;
  Object.defineProperty(package$container, 'bookListHOC', {
    get: function () {
      return bookListHOC;
    }
  });
  Object.defineProperty(package$container, 'bookAListRClass', {
    get: function () {
      return bookAListRClass;
    }
  });
  Object.defineProperty(package$container, 'bookAListContainer', {
    get: function () {
      return bookAListContainer;
    }
  });
  Object.defineProperty(package$container, 'bookGListRClass', {
    get: function () {
      return bookGListRClass;
    }
  });
  Object.defineProperty(package$container, 'bookGListContainer', {
    get: function () {
      return bookGListContainer;
    }
  });
  Object.defineProperty(package$container, 'authorListContainer', {
    get: function () {
      return authorListContainer;
    }
  });
  Object.defineProperty(package$container, 'genreListContainer', {
    get: function () {
      return genreListContainer;
    }
  });
  Object.defineProperty(package$container, 'appContainer', {
    get: function () {
      return appContainer;
    }
  });
  package$container.AuthorEditOwnProps = AuthorEditOwnProps;
  Object.defineProperty(package$container, 'authorEditContainer', {
    get: function () {
      return authorEditContainer;
    }
  });
  package$container.BookEditOwnProps = BookEditOwnProps;
  Object.defineProperty(package$container, 'bookEditContainer', {
    get: function () {
      return bookEditContainer;
    }
  });
  package$container.GenreEditOwnProps = GenreEditOwnProps;
  Object.defineProperty(package$container, 'genreEditContainer', {
    get: function () {
      return genreEditContainer;
    }
  });
  package$container.FilterLinkProps = FilterLinkProps;
  package$container.LinkStateProps = LinkStateProps;
  package$container.LinkDispatchProps = LinkDispatchProps;
  Object.defineProperty(package$container, 'filterLink', {
    get: function () {
      return filterLink;
    }
  });
  var package$data = _.data || (_.data = {});
  package$data.Author = Author;
  package$data.authorList = authorList;
  package$data.Book = Book;
  package$data.bookList = bookList;
  package$data.Genre = Genre;
  package$data.genreList = genreList;
  package$data.State = State;
  package$data.newId_hx7udi$ = newId;
  package$data.authorship_gyhnk4$ = authorship;
  package$data.style_gyhnk4$ = style;
  package$data.initialState = initialState;
  Object.defineProperty(VisibilityFilter, 'SHOW_ALL', {
    get: VisibilityFilter$SHOW_ALL_getInstance
  });
  Object.defineProperty(VisibilityFilter, 'SHOW_FILTER', {
    get: VisibilityFilter$SHOW_FILTER_getInstance
  });
  var package$enums = _.enums || (_.enums = {});
  package$enums.VisibilityFilter = VisibilityFilter;
  var package$hoc = _.hoc || (_.hoc = {});
  package$hoc.withDisplayName_7s1bg$ = withDisplayName;
  $$importsForInline$$['kotlin-extensions'] = $module$kotlin_extensions;
  package$hoc.withDisplayName_yqt66y$ = withDisplayName_0;
  Object.defineProperty(_, 'store', {
    get: function () {
      return store;
    }
  });
  _.main = main;
  var package$redux = _.redux || (_.redux = {});
  package$redux.ChangeAuthorship = ChangeAuthorship;
  package$redux.AddAuthor = AddAuthor;
  package$redux.DeleteAuthor = DeleteAuthor;
  package$redux.EditAuthor = EditAuthor;
  package$redux.AddBook = AddBook;
  package$redux.DeleteBook = DeleteBook;
  package$redux.EditBook = EditBook;
  package$redux.SetVisibilityFilter = SetVisibilityFilter;
  package$redux.ChangeStyle = ChangeStyle;
  package$redux.AddGenre = AddGenre;
  package$redux.DeleteGenre = DeleteGenre;
  package$redux.EditGenre = EditGenre;
  package$redux.authorshipReducer_60zrld$ = authorshipReducer;
  package$redux.genreReducer_6s8wz0$ = genreReducer;
  package$redux.styleReducer_60zrld$ = styleReducer;
  package$redux.authorReducer_2eib2i$ = authorReducer;
  package$redux.bookReducer_2b06ms$ = bookReducer;
  package$redux.visibilityReducer_uipuxk$ = visibilityReducer;
  package$redux.rootReducer_mybawf$ = rootReducer;
  fAuthor = functionalComponent(fAuthor$lambda);
  fAuthorEdit = functionalComponent(fAuthorEdit$lambda);
  fBook = functionalComponent(fBook$lambda);
  fBookEdit = functionalComponent(fBookEdit$lambda);
  fGenre = functionalComponent(fGenre$lambda);
  fGenreEdit = functionalComponent(fGenreEdit$lambda);
  authorFullContainer = invoke(rConnect(authorFullContainer$lambda, authorFullContainer$lambda_0), withDisplayName_0('AuthorFull', fAnyFull(getCallableRef('book', function ($receiver, book_0, cssClass, onClick) {
    return book($receiver, book_0, cssClass, onClick);
  }))));
  bookFullContainer = invoke(rConnect(bookFullContainer$lambda, bookFullContainer$lambda_0), withDisplayName_0('BookFull', fAnyFull(getCallableRef('author', function ($receiver, author_0, cssClass, onClick) {
    return author($receiver, author_0, cssClass, onClick);
  }))));
  genreFullContainer = invoke(rConnect(genreFullContainer$lambda, genreFullContainer$lambda_0), withDisplayName_0('GenreFull', fAnyFull(getCallableRef('book', function ($receiver, book_0, cssClass, onClick) {
    return book($receiver, book_0, cssClass, onClick);
  }))));
  bookByGenreFullContainer = invoke(rConnect(bookByGenreFullContainer$lambda, bookByGenreFullContainer$lambda_0), withDisplayName_0('BookByGenreFull', fAnyFull(getCallableRef('genre', function ($receiver, genre_0, cssClass, onClick) {
    return genre($receiver, genre_0, cssClass, onClick);
  }))));
  bookListHOC = rConnect(bookListHOC$lambda, bookListHOC$lambda_0);
  bookAListRClass = withDisplayName_0('BookAList', fAnyList('Book', '/booksA', getCallableRef('book', function ($receiver, book_0, cssClass, onClick) {
    return book($receiver, book_0, cssClass, onClick);
  })));
  bookAListContainer = invoke(bookListHOC, bookAListRClass);
  bookGListRClass = withDisplayName_0('BookGList', fAnyList('Book', '/booksG', getCallableRef('book', function ($receiver, book_0, cssClass, onClick) {
    return book($receiver, book_0, cssClass, onClick);
  })));
  bookGListContainer = invoke(bookListHOC, bookGListRClass);
  authorListContainer = invoke(rConnect(authorListContainer$lambda, authorListContainer$lambda_0), withDisplayName_0('AuthorList', fAnyList('Author', '/authors', getCallableRef('author', function ($receiver, author_0, cssClass, onClick) {
    return author($receiver, author_0, cssClass, onClick);
  }))));
  genreListContainer = invoke(rConnect(genreListContainer$lambda, genreListContainer$lambda_0), withDisplayName_0('GenreList', fAnyList('Genre', '/genres', getCallableRef('genre', function ($receiver, genre_0, cssClass, onClick) {
    return genre($receiver, genre_0, cssClass, onClick);
  }))));
  appContainer = invoke(rConnect_0(appContainer$lambda, appContainer$lambda_0), withDisplayName_0('MyApp', fApp()));
  authorEditContainer = invoke(rConnect_1(authorEditContainer$lambda), withDisplayName_0('AuthorEdit', fAuthorEdit));
  bookEditContainer = invoke(rConnect_1(bookEditContainer$lambda), withDisplayName_0('BookEdit', fBookEdit));
  genreEditContainer = invoke(rConnect_1(genreEditContainer$lambda), withDisplayName_0('GenreEdit', fGenreEdit));
  filterLink = invoke(rConnect(filterLink$lambda, filterLink$lambda_0), get_js(getKClass(Link)));
  var tmp$, tmp$_0, tmp$_1, tmp$_2;
  tmp$ = getCallableRef('rootReducer', function (state, action) {
    return rootReducer(state, action);
  });
  tmp$_0 = initialState();
  tmp$_1 = rEnhancer();
  if (window.__REDUX_DEVTOOLS_EXTENSION__)
    tmp$_2 = window.__REDUX_DEVTOOLS_EXTENSION__();
  else
    tmp$_2 = function (f) {
      return f;
    };
  store = createStore(tmp$, tmp$_0, compose(tmp$_1, tmp$_2));
  main();
  Kotlin.defineModule('kotlinjs', _);
  return _;
}(module.exports, require('kotlin'), require('kotlin-react-dom'), require('kotlin-react'), require('kotlinx-html-js'), require('kotlin-react-router-dom'), require('kotlin-react-redux'), require('kotlin-extensions'), require('kotlin-redux'), require('redux')));

//# sourceMappingURL=kotlinjs.js.map
