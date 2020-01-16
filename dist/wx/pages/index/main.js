require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonpMpvue([1],{"+2V1":function(t,e){},"/Q/o":function(t,e){},"4v1o":function(t,e,i){"use strict";var s=i("fAMB"),a=i("nA45");var n=function(t){i("mEjK")},r=i("ybqe")(s.a,a.a,n,null,null);e.a=r.exports},"5vTQ":function(t,e,i){"use strict";var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),o=i("4v1o"),c=i("vZbc"),l=i("iy0w"),u=i("pFpv"),h=i("INVV"),v=i("IcnI"),f=i("vccH"),d=i("Yujw"),g=this;e.a={name:"Home",components:{Movies:o.a,Live:c.a,Market:l.a,Weather:u.a,HistorysToday:h.a},computed:{isShowRefresh:function(t){return v.a.getters.isShowRefresh},isNightMode:function(t){return v.a.getters.isNightMode},themeIndex:function(t){return v.a.getters.themeIndex},userLocation:function(t){return v.a.getters.userLocation}},data:function(){return{currentPage:0,tabs:["快讯","行情"],secondTabs:["电影","资讯","行情","冷知识"],circular:!0,refreshLoading:!0,refreshText:"",timer:null,livesList:[],isBtnCommit:!1,weatherInfo:{}}},mounted:function(){this.getLocation(),this.getLives(),this.setNavigationBarStyle(),wx.showShareMenu({withShareTicket:!0})},watch:{isNightMode:function(t,e){t?wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#232323"}):wx.setNavigationBarColor({frontColor:"#000000",backgroundColor:"#ffffff"})},themeIndex:function(t){t&&g.setTheme(t)}},methods:{setNavigationBarStyle:function(){var t=this;this.timer=setTimeout(function(){t.isNightMode?wx.setNavigationBarColor({frontColor:"#ffffff",backgroundColor:"#232323"}):t.setTheme(t.themeIndex)},0)},getLocation:function(){var t=this;v.a.dispatch("getLocation").then(function(e){t.postWeather(e)})},switchPage:function(t){this.currentPage!==t&&(this.currentPage=t)},getLives:function(){var t=this;return r()(a.a.mark(function e(){var i,s,n;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,i=t,t.refreshText="正在刷新当前页面..",e.next=5,f.a.get(d.e,{reading:!1,limit:66,flag:"down"});case 5:s=e.sent,(n=s.data)&&(t.refreshText="刷新完成: )"),n.list.forEach(function(e){t.livesList.push(e)}),clearTimeout(t.timer),t.timer=setTimeout(function(){i.refreshLoading=!1,t.isBtnCommit=!1},1e3),e.next=19;break;case 13:e.prev=13,e.t0=e.catch(0),t.livesList=[],t.refreshLoading=!1,t.refreshText="网络错误: (",t.isBtnCommit=!1;case 19:case"end":return e.stop()}},e,t,[[0,13]])}))()},changePage:function(t){this.currentPage=t.target.current},refreshPage:function(){this.livesList=[],this.isBtnCommit=!0,this.refreshLoading=!0,this.getLives(),this.weatherInfo={},this.getLocation()},setTheme:function(t){this.timer=setTimeout(function(){v.a.commit("pickerThemeChange",t)},0)},postWeather:function(t){var e=this;return r()(a.a.mark(function i(){var s,n,r;return a.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return s=t.city,i.next=3,f.a.get(d.g+"/"+s);case 3:n=i.sent,(r=n.data)&&(e.weatherInfo=r.data);case 6:case"end":return i.stop()}},i,e)}))()}}}},"6x77":function(t,e,i){"use strict";var s=i("HQHH"),a=i("K84J"),n=i("vccH"),r=i("Yujw");e.a={name:"Live",props:{livesList:{required:!0,type:Array,default:function(){return[]}}},data:function(){return{swiperData:[],newsData:[],newLiveData:[]}},components:{MoringNews:s.a,LiveItem:a.a},mounted:function(){this.getBanner(),this.getMorningNews(),this.handleLiveData()},methods:{handleLiveData:function(){var t=this,e="";this.livesList.forEach(function(i,s){i.date===e?t.newLiveData[s].lives.push(i):t.newLiveData.push({date:i.date,lives:i.lives}),e=i.date})},getBanner:function(){var t=this;n.a.get(r.a,{position:"app_index_top"}).then(function(e){200===e.statusCode&&(t.swiperData=e.data)})},getMorningNews:function(){var t=this;n.a.get(r.f,{tag:"金色9：30",limit:1,topic_id:0,flag:"down"}).then(function(e){200===e.statusCode&&(e.data.forEach(function(t){t.title=t.title.replace(/金色/g,"今日")}),t.newsData=e.data)})},loadMore:function(){}}}},"9VlT":function(t,e,i){"use strict";var s=i("IcnI");e.a={name:"MoringNews",props:{newsData:{require:!0,type:Array}},computed:{fontsize:function(t){return Number(s.a.getters.textIndex)},isNightMode:function(t){return s.a.getters.isNightMode}}}},AQqf:function(t,e,i){"use strict";var s=i("IcnI");e.a={name:"Weather",props:{weatherInfo:{type:Object,default:{},required:!0}},computed:{isNightMode:function(t){return s.a.getters.isNightMode}},data:function(){return{weatherIcon:""}},created:function(){this.getWeatherIcon(this.weatherInfo.weather)},methods:{getWeatherIcon:function(t){t.indexOf("晴")>-1?this.weatherIcon="qing":t.indexOf("阴")>-1?this.weatherIcon="ying":t.indexOf("雾")>-1?this.weatherIcon="wu":t.indexOf("雪")>-1?this.weatherIcon="snow":t.indexOf("雨")>-1?this.weatherIcon="rain":t.indexOf("云")>-1?this.weatherIcon="cloud":this.weatherIcon="unknow"}}}},Bknn:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weather-box"},[i("div",{staticClass:"weather-left"},[i("img",{directives:[{name:"show",rawName:"v-show",value:"qing"===t.weatherIcon,expression:"weatherIcon === 'qing'"}],attrs:{src:"../../static/img/weather/qingtian.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"ying"===t.weatherIcon,expression:"weatherIcon === 'ying'"}],attrs:{src:"../../static/img/weather/yintian.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"wu"===t.weatherIcon,expression:"weatherIcon === 'wu'"}],attrs:{src:"../../static/img/weather/shuiwutian.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"rain"===t.weatherIcon,expression:"weatherIcon === 'rain'"}],attrs:{src:"../../static/img/weather/yutian.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"snow"===t.weatherIcon,expression:"weatherIcon === 'snow'"}],attrs:{src:"../../static/img/weather/xuetian.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"cloud"===t.weatherIcon,expression:"weatherIcon === 'cloud'"}],attrs:{src:"../../static/img/weather/cloud.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:"unknow"===t.weatherIcon,expression:"weatherIcon === 'unknow'"}],attrs:{src:"../../static/img/weather/unknow.svg"}})]),t._v(" "),i("div",{staticClass:"weather-right"},[i("div",{staticClass:"weather-address"},[i("img",{attrs:{src:"../../static/img/weather/address.svg"}}),t._v(" "),i("span",{class:{"night-text":t.isNightMode}},[t._v(t._s(t.weatherInfo.address))])]),t._v(" "),i("div",{staticClass:"weather-temp-box",class:{"night-text":t.isNightMode}},[i("span",{staticClass:"weather-temp"},[t._v(t._s(t.weatherInfo.temp))]),t._v(" "),i("span",{staticClass:"weather-content"},[t._v(t._s(t.weatherInfo.weather))])]),t._v(" "),i("div",{staticClass:"weather-detail-box",class:{"night-text":t.isNightMode}},[i("span",{staticStyle:{"margin-right":"10px"}},[t._v(t._s(t.weatherInfo.windDirection)+"风"+t._s(t.weatherInfo.windPower))]),t._v(" "),i("span",[t._v("湿度"+t._s(t.weatherInfo.humidity))])])])])},staticRenderFns:[]};e.a=s},HQHH:function(t,e,i){"use strict";var s=i("9VlT"),a=i("HXu/");var n=function(t){i("mA6c")},r=i("ybqe")(s.a,a.a,n,"data-v-9d7bbd3a",null);e.a=r.exports},"HXu/":function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.newsData,function(e,s){return i("div",{key:e.id,staticClass:"moring-news-box"},[i("header",[i("img",{staticClass:"logo",attrs:{src:"../../static/img/morning.png",alt:"logo"}}),t._v(" "),i("span",{class:{"zl-mini-info":0===t.fontsize,"zl-default-info":1===t.fontsize,"zl-large-info":2===t.fontsize,"night-text":t.isNightMode}},[t._v("区块链早讯")])]),t._v(" "),i("article",[i("section",{class:{"zl-mini-title":0===t.fontsize,"zl-default-title":1===t.fontsize,"zl-large-title":2===t.fontsize}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)],1)}))},staticRenderFns:[]};e.a=s},INVV:function(t,e,i){"use strict";var s=i("KJVw"),a=i("dvmu");var n=function(t){i("mzbf")},r=i("ybqe")(s.a,a.a,n,"data-v-9c3db918",null);e.a=r.exports},K84J:function(t,e,i){"use strict";var s=i("qS71"),a=i("qBm8");var n=function(t){i("Q5Sx")},r=i("ybqe")(s.a,a.a,n,"data-v-14f97b3d",null);e.a=r.exports},KArv:function(t,e,i){"use strict";var s=i("vccH"),a=i("IcnI"),n=i("Yujw");e.a={name:"Coin",filters:{formatPoint:function(t){return parseFloat(t).toFixed(2)}},data:function(){return{param:{page:1,limit:15,offset:0,currency:"",sortby:"market_cap",order:"desc"},list:[],isShowInfo:!1,currentSymbol:"",coinDetail:{supply:"",vol:"",market_cap:""},isLoading:!0,busy:!0,state:1}},computed:{isNightMode:function(t){return a.a.getters.isNightMode}},created:function(){this.getCurrencyList()},methods:{switchInfo:function(t){if(this.currentSymbol===t.symbol&&this.isShowInfo)return this.isShowInfo=!1,!1;this.isShowInfo=!0,this.currentSymbol=t.symbol,this.coinDetail.supply=t.supply,this.coinDetail.vol=t.vol,this.coinDetail.market_cap=t.market_cap},getCurrencyList:function(){var t=this;this.isLoading=!0,this.busy=!0,s.a.get(n.b,this.param).then(function(e){200===e.statusCode&&(t.list=t.list.concat(e.data),t.busy=!1,t.isLoading=!1,t.param.page>=50&&(t.busy=!0,t.state=2,t.isLoading=!0))}).catch(function(){t.isLoading=!1,t.busy=!0})},loadMore:function(){this.param.page++,this.param.offset+=this.param.limit,this.getCurrencyList()}}}},KJVw:function(t,e,i){"use strict";var s=i("Xxa5"),a=i.n(s),n=i("exGp"),r=i.n(n),o=i("IcnI"),c=i("vccH"),l=i("Yujw");e.a={name:"HistorysToday",computed:{fontsize:function(t){return Number(o.a.getters.textIndex)},isNightMode:function(t){return o.a.getters.isNightMode}},data:function(){return{historyStoryList:[],defaultThumb:"this.src=../../static/img/history/fail.png",errText:"",isShowErrorBox:!1}},created:function(){this.getHistoryStoryList()},methods:{getHistoryStoryList:function(){var t=this;return r()(a.a.mark(function e(){var i,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.errText=" ",e.prev=1,e.next=4,c.a.get(l.c,{type:1});case 4:i=e.sent,1===(s=i.data).code&&(t.historyStoryList=s.data,t.isShowErrorBox=!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),t.isShowErrorBox=!0,t.errText=e.t0.errMsg;case 13:case"end":return e.stop()}},e,t,[[1,9]])}))()},navigateToDetail:function(t,e){o.a.commit("setDetailData",t),wx.navigateTo({url:"../detail/main?year="+t.year+"&month="+t.month+"&day="+t.day+"&title="+t.title+"&picUrl="+t.picUrl+"&details="+t.details})}}}},MhDc:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("5nAL"),a=i.n(s),n=i("Qt9A");new a.a(n.a).$mount()},Q5Sx:function(t,e){},Qt9A:function(t,e,i){"use strict";var s=i("5vTQ"),a=i("cQXv");var n=function(t){i("kVvL")},r=i("ybqe")(s.a,a.a,n,"data-v-86b97822",null);e.a=r.exports},Yujw:function(t,e,i){"use strict";i.d(e,"a",function(){return s}),i.d(e,"f",function(){return a}),i.d(e,"e",function(){return n}),i.d(e,"b",function(){return r}),i.d(e,"g",function(){return o}),i.d(e,"c",function(){return c}),i.d(e,"d",function(){return l});var s="https://api.jinse.com/v4/ad/web/slideList",a="https://api.jinse.com/v1/topic/by_tag_list",n="https://api.jinse.com/v4/live/list",r="https://api.jinse.com/v3/coin",o="https://www.mxnzp.com/api/weather/current",c="https://www.mxnzp.com/api/history/today",l="https://douban.uieee.com/v2/movie/in_theaters"},aSE4:function(t,e){},cQXv:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"zl-app",class:t.isNightMode?"night":""},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.refreshLoading&&t.isBtnCommit,expression:"refreshLoading && isBtnCommit"}],ref:"refreshTip",staticClass:"zl-refresh-tip"},[i("span",[t._v(t._s(t.refreshText))])]),t._v(" "),t.weatherInfo&&t.weatherInfo.cityCode?i("Weather",{attrs:{weatherInfo:t.weatherInfo,mpcomid:"0"}}):t._e(),t._v(" "),i("div",{staticClass:"swiper-tab",class:{"night-text":t.isNightMode,"night-line-color":t.isNightMode}},t._l(t.secondTabs,function(e,s){return i("div",{key:s,staticClass:"tab-list-box",class:{"tab-active":t.currentPage===s},attrs:{"data-current-tab":s,eventid:"0-"+s},on:{click:function(e){t.switchPage(s)}}},[t._v("\r\n        "+t._s(e)+"\r\n      ")])})),t._v(" "),i("Swiper",{staticClass:"app",attrs:{current:t.currentPage,duration:300,eventid:"2",mpcomid:"9"},on:{change:t.changePage}},[i("swiper-item",{attrs:{mpcomid:"2"}},[i("Movies",{attrs:{mpcomid:"1"}})],1),t._v(" "),i("swiper-item",{staticClass:"main",attrs:{mpcomid:"4"}},[t.livesList.length>0?i("Live",{attrs:{livesList:t.livesList,eventid:"1",mpcomid:"3"},on:{handleLive:t.getLives}}):t._e()],1),t._v(" "),i("swiper-item",{attrs:{mpcomid:"6"}},[i("Market",{attrs:{mpcomid:"5"}})],1),t._v(" "),i("swiper-item",{attrs:{mpcomid:"8"}},[i("HistorysToday",{attrs:{mpcomid:"7"}})],1)],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowRefresh&&1===t.currentPage,expression:"isShowRefresh && currentPage === 1"}],staticClass:"zl-refresh",attrs:{eventid:"3"},on:{click:t.refreshPage}},[i("img",{attrs:{src:"../../../static/img/fresh.svg",alt:""}})])],1)])},staticRenderFns:[]};e.a=s},dvmu:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("scroll-view",{staticClass:"zl-history-box",attrs:{"scroll-y":"","upper-threshold":"50","lower-threshold":"50","enable-back-to-top":"true"}},[t.isShowErrorBox?i("div",{staticClass:"zl-history__error",class:{"night-text":t.isNightMode}},[t._v("\n    "+t._s(t.errText)+"\n    "),i("div",[i("button",{staticClass:"zl-history__error--try",class:{"night-text":t.isNightMode},attrs:{eventid:"1"},on:{click:t.getHistoryStoryList}},[t._v("刷新重试")])],1)]):i("ul",{staticClass:"zl-history"},t._l(t.historyStoryList,function(e,s){return i("li",{key:s,staticClass:"zl-history__item",class:{"night-border":t.isNightMode},attrs:{eventid:"0-"+s},on:{click:function(i){t.navigateToDetail(e,s)}}},[i("ul",{staticClass:"zl-history__item--info"},[i("li",{staticClass:"zl-history__item--title",class:{"night-text":t.isNightMode}},[t._v(t._s(e.title))]),t._v(" "),i("li",{staticClass:"zl-history__item--publish"},[i("span",{staticClass:"zl-history__item--time",class:{"night-text":t.isNightMode}},[t._v(t._s(e.year)+"."+t._s(e.month<10?"0"+e.month:e.month)+"."+t._s(e.day<10?"0"+e.day:e.day))]),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:!t.isNightMode,expression:"!isNightMode"}],staticClass:"zl-history__tag",attrs:{src:"../../static/img/history/tag.svg"}}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:t.isNightMode,expression:"isNightMode"}],staticClass:"zl-history__tag",attrs:{src:"../../static/img/history/tag-night.svg"}}),t._v(" "),i("span",{staticClass:"zl-history__item--tag",class:{"night-text":t.isNightMode}},[t._v("历史上的今天")])])],1),t._v(" "),i("div",{staticClass:"zl-history__item--thumb"},[i("img",{attrs:{src:e.picUrl?e.picUrl:"../../static/img/history/fail.png",alt:"",onerror:t.defaultThumb}})])],1)}))],1)},staticRenderFns:[]};e.a=s},fAMB:function(t,e,i){"use strict";var s=i("Xxa5"),a=i.n(s),n=i("BO1k"),r=i.n(n),o=i("exGp"),c=i.n(o),l=i("vccH"),u=i("Yujw");e.a={name:"Movies",data:function(){return{movieList:[]}},created:function(){this.getInTheaters()},methods:{getInTheaters:function(){var t=this;return c()(a.a.mark(function e(){var i,s,n,o,c,h,v,f;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.post(u.d,{apikey:"0b2bdeda43b5688921839c8ecb20399b"});case 3:if(i=e.sent,!((s=i.data)&&s.count>0)){e.next=26;break}for(t.movieList=s.subjects.slice(0,6),n=!0,o=!1,c=void 0,e.prev=10,h=r()(t.movieList);!(n=(v=h.next()).done);n=!0)(f=v.value).activeStar=Math.floor(f.rating.stars/10),f.inactiveStar=Math.floor(5-f.rating.stars/10),f.halfActiveStar=f.rating.stars%10>0;e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),o=!0,c=e.t0;case 18:e.prev=18,e.prev=19,!n&&h.return&&h.return();case 21:if(e.prev=21,!o){e.next=24;break}throw c;case 24:return e.finish(21);case 25:return e.finish(18);case 26:e.next=32;break;case 28:e.prev=28,e.t1=e.catch(0),console.log("err",e.t1),t.movieList=[];case 32:case"end":return e.stop()}},e,t,[[0,28],[10,14,18,26],[19,,21,25]])}))()}}}},iy0w:function(t,e,i){"use strict";var s=i("KArv"),a=i("kXOT");var n=function(t){i("/Q/o")},r=i("ybqe")(s.a,a.a,n,"data-v-60e78f4c",null);e.a=r.exports},kVvL:function(t,e){},kXOT:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("scroll-view",{staticClass:"zl-coin-box",attrs:{"scroll-y":"","upper-threshold":"50","lower-threshold":"50","enable-back-to-top":"true",eventid:"1"},on:{scrolltolower:t.loadMore,scrolltoupper:t.getCurrencyList}},[i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"zl-coin",class:{"night-line-color":t.isNightMode}},[i("ul",{staticClass:"zl-coin__simp",attrs:{eventid:"0-"+s},on:{click:function(i){t.switchInfo(e)}}},[i("li",{staticClass:"zl-coin__name",class:{"night-text":t.isNightMode}},[i("img",{attrs:{src:e.icon_url,alt:e.symbol}}),t._v("\n            "+t._s(e.symbol)+"\n          ")]),t._v(" "),i("li",{staticClass:"zl-coin__price",class:{"night-text":t.isNightMode}},[t._v(t._s(e.price))]),t._v(" "),i("li",{staticClass:"zl-coin__gd"},[e.change>0?i("span",{staticClass:"zl-coin__gd--gorw"},[t._v("+"+t._s(t._f("formatPoint")(e.change))+"%")]):e.change<0?i("span",{staticClass:"zl-coin__gd--fall"},[t._v(t._s(t._f("formatPoint")(e.change))+"%")]):i("span",[t._v("+0.00%")])])],1),t._v(" "),t.isShowInfo&&t.currentSymbol==e.symbol?i("ul",{staticClass:"zl-coin__info",class:{"night-bg":t.isNightMode}},[i("li",{staticClass:"zl-coin__info--box",class:{"night-text":t.isNightMode}},[i("span",[t._v("流通量：")]),t._v(" "),i("span",[t._v(t._s(t.coinDetail.supply))])]),t._v(" "),i("li",{staticClass:"zl-coin__info--box",class:{"night-text":t.isNightMode}},[i("span",[t._v("24小时成交额：")]),t._v(" "),i("span",[t._v("¥ "+t._s(t.coinDetail.vol))])]),t._v(" "),i("li",{staticClass:"zl-coin__info--box",class:{"night-text":t.isNightMode}},[i("span",[t._v("市值：")]),t._v(" "),i("span",[t._v("¥ "+t._s(t.coinDetail.market_cap))])])],1):t._e()],1)}))])],1)},staticRenderFns:[]};e.a=s},mA6c:function(t,e){},mEjK:function(t,e){},mzbf:function(t,e){},n95b:function(t,e,i){"use strict";var s={getTime:function(t){"string"==typeof t&&t.indexOf("-")>0?t=t.replace(/-/g,"/"):t*=1e3;var e=new Date(t);return(e.getHours()<10?"0"+e.getHours():e.getHours())+":"+(e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes())}};e.a=s},nA45:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("scroll-view",{staticClass:"zl-movie-box",attrs:{"scroll-y":"","lower-threshold":"50","enable-back-to-top":"true"}},[i("main",{directives:[{name:"show",rawName:"v-show",value:t.movieList.length>0,expression:"movieList.length > 0"}],staticClass:"zl-movie"},[i("p",{staticClass:"zl-movie__title"},[t._v("影院热映")]),t._v(" "),i("ul",{staticClass:"zl-movie__list"},[t._l(t.movieList,function(e,s){return i("li",{key:s,staticClass:"zl-movie__item"},[i("img",{staticClass:"zl-movie__item--thumb",attrs:{src:e.images.small}}),t._v(" "),i("span",{staticClass:"zl-movie__item--title"},[t._v(t._s(e.title))]),t._v(" "),i("p",[t._l(e.activeStar,function(t,e){return i("img",{key:e,staticClass:"zl-movie__item--star",attrs:{src:"../../../static/img/movie/star_active.svg"}})}),t._v(" "),i("img",{directives:[{name:"show",rawName:"v-show",value:e.halfActiveStar,expression:"item.halfActiveStar"}],staticClass:"zl-movie__item--star",attrs:{src:"../../../static/img/movie/star_half.svg"}}),t._v(" "),t._l(e.inactiveStar,function(t,e){return i("img",{key:e,staticClass:"zl-movie__item--star",attrs:{src:"../../../static/img/movie/star_inactive.svg"}})}),t._v(" "),i("span",{staticClass:"zl-movie__item--score"},[t._v(t._s(e.rating.average))])],2)],1)}),t._v(" "),i("p",{staticClass:"zl-movie__clear"})],2)],1)],1)],1)},staticRenderFns:[]};e.a=s},pFpv:function(t,e,i){"use strict";var s=i("AQqf"),a=i("Bknn");var n=function(t){i("aSE4")},r=i("ybqe")(s.a,a.a,n,"data-v-1b2651c6",null);e.a=r.exports},qBm8:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"zl-live"},t._l(t.liveData,function(e,s){return i("div",{key:s},[i("aside",{staticClass:"zl-live__time",class:{"night-bg":t.isNightMode}},[i("ul",{staticClass:"zl-live__time--calendar"},[i("li",{staticClass:"month",class:{"zl-mini-fontsize":0===t.fontsize,"zl-default-fontsize":1===t.fontsize,"zl-large-fontsize":2===t.fontsize,"zl-mini-date":0===t.fontsize,"zl-default-date":1===t.fontsize,"zl-large-date":2===t.fontsize,"night-text":t.isNightMode,"night-text-date":t.isNightMode}},[t._v("\n          "+t._s(e.date)+"\n        ")])],1)],1),t._v(" "),t._l(e.lives,function(e,s){return i("div",{key:s,staticClass:"zl-live__content",class:{"night-text":t.isNightMode,"night-border-left":t.isNightMode}},[5==e.grade?i("p",{staticClass:"zl-important"}):t._e(),t._v(" "),4==e.grade||3==e.grade?i("p",{staticClass:"zl-normal"}):t._e(),t._v(" "),1==e.grade||2==e.grade?i("p",{staticClass:"zl-default"}):t._e(),t._v(" "),i("aside",{staticClass:"zl-live__publishtime",class:{"zl-mini-fontsize":0===t.fontsize,"zl-default-fontsize":1===t.fontsize,"zl-large-fontsize":2===t.fontsize,"night-text":t.isNightMode}},[t._v("\n        "+t._s(e.created_at_new)+"\n      ")]),t._v(" "),i("aside",{staticClass:"zl-live__title",class:{"zl-mini-title-gaps":0===t.fontsize,"zl-default-title-gaps":1===t.fontsize,"zl-large-title-gaps":2===t.fontsize,"night-text":t.isNightMode}},[i("span",{staticClass:"zl-live__title--tag"}),t._v(" "),5==e.grade?i("span",{class:{"zl-mini-title":0===t.fontsize,"zl-default-title":1===t.fontsize,"zl-large-title":2===t.fontsize},staticStyle:{color:"#ea3e3e"}},[t._v(t._s(e.title))]):i("span",{class:{"zl-mini-title":0===t.fontsize,"zl-default-title":1===t.fontsize,"zl-large-title":2===t.fontsize,"night-text":t.isNightMode}},[t._v(t._s(e.title))])]),t._v(" "),i("section",{staticClass:"zl-live__contents",class:{"zl-mini-fontsize":0===t.fontsize,"zl-default-fontsize":1===t.fontsize,"zl-large-fontsize":2===t.fontsize,"night-text":t.isNightMode}},[t._v("\n        "+t._s(e.content)+"\n      ")]),t._v(" "),i("div",{staticClass:"zl-live__operate",class:{"zl-mini-operate":0===t.fontsize,"zl-default-operate":1===t.fontsize,"zl-large-operate":2===t.fontsize}},[i("ul",[i("li",[e.up_counts>e.down_counts?i("img",{class:{"zl-mini-up-img":0===t.fontsize,"zl-default-up-img":1===t.fontsize,"zl-large-up-img":2===t.fontsize},attrs:{src:"../../static/img/live/liveup.svg"}}):t._e(),t._v(" "),e.up_counts<e.down_counts||e.up_counts==e.down_counts?i("img",{class:{"zl-mini-up-img":0===t.fontsize,"zl-default-up-img":1===t.fontsize,"zl-large-up-img":2===t.fontsize},attrs:{src:"../../static/img/live/noliveup.svg"}}):t._e(),t._v(" "),i("span",{staticClass:"zl-bull_num",class:{"zl-mini-fontsize":0===t.fontsize,"zl-default-fontsize":1===t.fontsize,"zl-large-fontsize":2===t.fontsize,"night-text":t.isNightMode}},[t._v("\n              "+t._s(e.up_counts)+"\n            ")])]),t._v(" "),i("li",[e.up_counts<e.down_counts?i("img",{class:{"zl-mini-down-img":0===t.fontsize,"zl-default-down-img":1===t.fontsize,"zl-large-down-img":2===t.fontsize},attrs:{src:"../../static/img/live/livedown.svg"}}):t._e(),t._v(" "),e.up_counts>e.down_counts||e.up_counts==e.down_counts?i("img",{class:{"zl-mini-down-img":0===t.fontsize,"zl-default-down-img":1===t.fontsize,"zl-large-down-img":2===t.fontsize},attrs:{src:"../../static/img/live/nolivedown.svg"}}):t._e(),t._v(" "),i("span",{staticClass:"zl-bull_num",class:{"zl-mini-fontsize":0===t.fontsize,"zl-default-fontsize":1===t.fontsize,"zl-large-fontsize":2===t.fontsize,"night-text":t.isNightMode}},[t._v("\n              "+t._s(e.down_counts)+"\n            ")])])],1)],1)],1)})],2)}))},staticRenderFns:[]};e.a=s},qS71:function(t,e,i){"use strict";var s=i("n95b"),a=i("IcnI");e.a={name:"LiveItem",props:{liveData:{type:Array,default:function(){return[]}}},computed:{fontsize:function(t){return Number(a.a.getters.textIndex)},isNightMode:function(t){return a.a.getters.isNightMode}},data:function(){return{newLiveData:[]}},mounted:function(){this.translateLiveData()},methods:{translateLiveData:function(){this.newLiveData=this.liveData,this.newLiveData.forEach(function(t){t.lives.forEach(function(t){t.created_at_new=s.a.getTime(t.created_at),t.title=t.content.match(/【(.+)?】/)?t.content.slice(t.content.indexOf("【")+1,t.content.indexOf("】")):""})})}}}},tZHZ:function(t,e,i){"use strict";var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("scroll-view",{staticClass:"zl-coin-box",attrs:{"scroll-y":"","lower-threshold":"50","enable-back-to-top":"true",eventid:"0"},on:{scrolltolower:t.loadMore}},[t.newsData&&t.newsData.length>0?i("MoringNews",{attrs:{newsData:t.newsData,mpcomid:"0"}}):t._e(),t._v(" "),i("article",{staticClass:"js-drawer-container js-live"},[i("section",{staticClass:"js-lives"},[t.newLiveData&&t.newLiveData.length>0?i("LiveItem",{attrs:{liveData:t.newLiveData,mpcomid:"1"}}):t._e()],1)],1)],1)],1)},staticRenderFns:[]};e.a=s},vZbc:function(t,e,i){"use strict";var s=i("6x77"),a=i("tZHZ");var n=function(t){i("+2V1")},r=i("ybqe")(s.a,a.a,n,"data-v-3612b2ec",null);e.a=r.exports},vccH:function(t,e,i){"use strict";var s=i("//Fk"),a=i.n(s),n=i("fZjL"),r=i.n(n),o={get:function(t,e){return new a.a(function(i,s){wx.showLoading({title:"loading...",mask:!0}),t=function(t,e){if(e){var i=[];r()(e).forEach(function(t){return i.push(t+"="+e[t])}),-1===t.search(/\?/)?t+="?"+i.join("&"):t+="&"+i.join("&")}return t}(t,e),wx.request({url:""+t,header:{"Content-Type":"application/json"},method:"GET",dataType:"json",success:function(t){wx.hideLoading(),i(t)},fail:function(t){console.warn("err",t),wx.hideLoading(),s(t)},complete:function(){wx.hideLoading()}})})},post:function(t,e){return new a.a(function(i,s){wx.showLoading({title:"loading...",mask:!0}),wx.request({url:""+t,data:e,header:{"Content-Type":"application/json"},method:"POST",dataType:"json",success:function(t){i(t),wx.hideLoading()},fail:function(t){console.warn("err",t),s(t),wx.hideLoading()},complete:function(){wx.hideLoading()}})})}};e.a=o}},["MhDc"]);