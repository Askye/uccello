webpackJsonp([3],{2:function(e,t,n){e.exports=n("22iK")},"22iK":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){var t=n("hHRx"),a=n("dwxp"),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();new(function(){function n(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.lazyLoad()}return r(n,[{key:"lazyLoad",value:function(){switch(e('meta[name="page"]').attr("content")){case"module-manager":new t.a;break;case"menu-manager":new a.a}}}]),n}())}.call(t,n("7t+N"))},dwxp:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return o});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var i=n("M4fF"),o=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.initMenus(),this.initListeners()}return r(t,[{key:"initMenus",value:function(){var t=this;this.itemsNumber=0,this.initMenuHtml("main-menu-structure","menu-main"),this.initMenuHtml("admin-menu-structure","menu-admin"),e(".menu-manager").nestable({maxDepth:3}),this.menuToJson(),e(".menu-manager").on("change",function(e){t.menuToJson(),t.save()})}},{key:"initMenuHtml",value:function(t,n){var r=JSON.parse(e("meta[name='"+t+"']").attr("content"));if("object"===(void 0===r?"undefined":a(r))){var i="",o=!0,u=!1,s=void 0;try{for(var l,c=r[Symbol.iterator]();!(o=(l=c.next()).done);o=!0){var d=l.value;i+=this.buildItem(d)}}catch(e){u=!0,s=e}finally{try{!o&&c.return&&c.return()}finally{if(u)throw s}}e(".menu-manager."+n+" ol.dd-list:first").html(i)}}},{key:"initListeners",value:function(){this.initSaveGroupButtonListener(),this.initSaveRouteLinkButtonListener(),this.initSaveLinkButtonListener(),this.initMenuSwitcherListener(),this.initEditButtonListener(),this.initRemoveButtonListener(),this.initActionsButtonsListener()}},{key:"initMenuSwitcherListener",value:function(){var t=this;e("input#menu-switcher").on("change",function(n){var a=e(n.currentTarget).is(":checked"),r=JSON.parse(e("a.btn-reset").attr("data-config"));a?(e(".menu-manager.menu-admin").show(),e(".menu-manager.menu-main").hide(),r.ajax.params={type:"admin"}):(e(".menu-manager.menu-admin").hide(),e(".menu-manager.menu-main").show(),r.ajax.params={type:"main"}),e("a.btn-reset").attr("data-config",JSON.stringify(r)),t.menuToJson()})}},{key:"menuToJson",value:function(){this.menuStructure=JSON.stringify(e(".menu-manager:visible").nestable("serialize"))}},{key:"save",value:function(){var t=e("meta[name='save-url']").attr("content");e.ajax({url:t,method:"post",data:{_token:e("meta[name='csrf-token']").attr("content"),structure:this.menuStructure,type:e(".menu-manager:visible").data("type")}}).then(function(t){e("span.saved").fadeIn().delay(1e3).fadeOut()}).fail(function(e){swal(uctrans("dialog.error.title","settings"),uctrans("error.save","settings"),"error")})}},{key:"initSaveGroupButtonListener",value:function(){var t=this;e("#save-group").on("click",function(n){var a=e("#groupModal input[name='label']"),r=e("#groupModal input[name='icon']"),i=a.val(),o=r.val();i?o?(t.saveGroup(i,o),e("#groupModal").modal("hide")):r.parent(".form-line").addClass(["focused","error"]):a.parent(".form-line").addClass(["focused","error"])})}},{key:"initSaveRouteLinkButtonListener",value:function(){var t=this;e("#save-route-link").on("click",function(n){var a=e("#routeLinkModal input[name='label']"),r=e("#routeLinkModal input[name='icon']"),i=e("#routeLinkModal input[name='module']"),o=e("#routeLinkModal input[name='route']"),u=a.val(),s=r.val(),l=i.val(),c=o.val();u?s?l?c?(t.saveRouteLink(u,s,l,c),e("#routeLinkModal").modal("hide")):o.parent(".form-line").addClass(["focused","error"]):i.parent(".form-line").addClass(["focused","error"]):r.parent(".form-line").addClass(["focused","error"]):a.parent(".form-line").addClass(["focused","error"])})}},{key:"initSaveLinkButtonListener",value:function(){var t=this;e("#save-link").on("click",function(n){var a=e("#linkModal input[name='label']"),r=e("#linkModal input[name='icon']"),i=e("#linkModal input[name='url']"),o=a.val(),u=r.val(),s=i.val();o?u?s?(t.saveLink(o,u,s),e("#linkModal").modal("hide")):i.parent(".form-line").addClass(["focused","error"]):r.parent(".form-line").addClass(["focused","error"]):a.parent(".form-line").addClass(["focused","error"])})}},{key:"initActionsButtonsListener",value:function(){var t=this;e(".btn-actions").on("click",function(){t.currentItem=null,t.currentItemJson=null,e(".modal input").val(""),e(".modal .form-line").removeClass("focused")})}},{key:"initEditButtonListener",value:function(){var t=this;e(".btn-edit").off("click"),e(".btn-edit").on("click",function(n){var a=e(n.currentTarget).parents("li:first"),r=e(a).data("id");t.currentItem=a,t.retrieveCurrentItemJsonById(r,JSON.parse(t.menuStructure));var i=void 0;switch(a.data("type")){case"group":i=e("#groupModal").modal("show"),e("input[name='label']",i).val(a.data("label")).parent().addClass("focused"),e("input[name='icon']",i).val(a.data("icon")).parent().addClass("focused");break;case"link":i=e("#linkModal").modal("show"),e("input[name='label']",i).val(a.data("label")).parent().addClass("focused"),e("input[name='icon']",i).val(a.data("icon")).parent().addClass("focused"),e("input[name='url']",i).val(a.data("url")).parent().addClass("focused");break;case"route":i=e("#routelinkModal").modal("show"),e("input[name='label']",i).val(a.data("label")).parent().addClass("focused"),e("input[name='icon']",i).val(a.data("icon")).parent().addClass("focused"),e("input[name='module']",i).val(a.data("module")).parent().addClass("focused"),e("input[name='route']",i).val(a.data("route")).parent().addClass("focused")}})}},{key:"initRemoveButtonListener",value:function(){var t=this;e(".btn-remove").off("click"),e(".btn-remove").on("click",function(n){var a=e(n.currentTarget).parents("li:first").data("id");t.retrieveCurrentItemJsonById(a,JSON.parse(t.menuStructure)),t.currentItemJson&&t.currentItemJson.children?swal(uctrans("menu.error.not_empty.title","settings"),uctrans("menu.error.not_empty.description","settings"),"error"):(e(".menu-manager:visible").nestable("remove",a),t.menuToJson(),t.save())})}},{key:"saveGroup",value:function(t,n){if(this.currentItem){if(null!==this.currentItemJson){this.currentItemJson.label=t,this.currentItemJson.icon=n,e(this.currentItem).attr("data-label",t).attr("data-icon",n),e(".icon-label:first",this.currentItem).text(t),e(".material-icons:first",this.currentItem).text(n),e(".menu-manager:visible").nestable("replace",this.currentItemJson);var a=e(this.currentItem).data("id");e("[data-id='"+a+"']").replaceWith(this.currentItem)}}else{var r=this.buildItem({type:"group",label:t,icon:n,color:"green"});e(".menu-manager:visible .dd-list:first").append(r)}e(".menu-manager:visible").trigger("change"),this.initEditButtonListener(),this.initRemoveButtonListener()}},{key:"saveRouteLink",value:function(t,n,a,r){if(this.currentItem){if(null!==this.currentItemJson){this.currentItemJson.label=t,this.currentItemJson.icon=n,this.currentItemJson.module=a,this.currentItemJson.route=r,e(this.currentItem).attr("data-label",t).attr("data-icon",n).attr("data-module",a).attr("data-route",r),e(".icon-label:first",this.currentItem).text(t),e(".material-icons:first",this.currentItem).text(n),e(".menu-manager:visible").nestable("replace",this.currentItemJson);var i=e(this.currentItem).data("id");e("[data-id='"+i+"']").replaceWith(this.currentItem)}}else{var o=this.buildItem({type:"route",module:a,label:t,icon:n,color:"red",route:r});e(".menu-manager:visible .dd-list:first").append(o)}e(".menu-manager:visible").trigger("change"),this.initEditButtonListener(),this.initRemoveButtonListener()}},{key:"saveLink",value:function(t,n,a){if(this.currentItem){if(null!==this.currentItemJson){this.currentItemJson.label=t,this.currentItemJson.icon=n,this.currentItemJson.url=a,e(this.currentItem).attr("data-label",t).attr("data-icon",n).attr("data-url",a),e(".icon-label:first",this.currentItem).text(t),e(".material-icons:first",this.currentItem).text(n),e(".menu-manager:visible").nestable("replace",this.currentItemJson);var r=e(this.currentItem).data("id");e("[data-id='"+r+"']").replaceWith(this.currentItem)}}else{var i=this.buildItem({type:"link",label:t,icon:n,color:"blue",url:a});e(".menu-manager:visible .dd-list:first").append(i)}e(".menu-manager:visible").trigger("change"),this.initEditButtonListener(),this.initRemoveButtonListener()}},{key:"retrieveCurrentItemJsonById",value:function(e,t,n){if("object"==(void 0===t?"undefined":a(t))){var r=!0,i=!1,o=void 0;try{for(var u,s=t[Symbol.iterator]();!(r=(u=s.next()).done);r=!0){var l=u.value;if(l.id==e){this.currentItemJson=l,this.currentItemParentJson=n;break}l.children&&this.retrieveCurrentItemJsonById(e,l.children,l)}}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}}}},{key:"buildItem",value:function(t){var n=this;this.itemsNumber++;var a="";"group"!==t.type&&(a="dd-nochildren");var r="";t.module&&(r='data-module="'+t.module+'"');var o="";t.url&&(o='data-url="'+t.url+'"');var u="";t.route&&(u='data-route="'+t.route+'"');var s="",l=t.label;t.translation&&(s='data-translation="'+t.translation+'"',l=t.translation);var c="";"module"!==t.type&&(c='<div class="dd3-actions">\n                        <i class="material-icons btn-edit">edit</i>\n                        <i class="material-icons btn-remove">delete</i>\n                    </div>');var d='<li class="dd-item dd3-item '+a+'" data-id="'+this.itemsNumber+'" '+r+" "+u+" "+o+' data-type="'+t.type+'" data-label="'+t.label+'" '+s+' data-icon="'+t.icon+'" data-nochildren="'+!!t.noChildren+'" data-color="'+t.color+'">\n                <div class="dd-handle dd3-content">\n                    <i class="material-icons">'+t.icon+'</i>\n                    <span class="icon-label">'+l+'</span>\n                    <span class="pull-right col-'+t.color+'">'+i.capitalize(t.type)+"</span>\n                </div>\n                "+c;return t.children&&(d+='<ol class="dd-list">',e.each(t.children,function(e,t){d+=n.buildItem(t)}),d+="</ol>"),d+="</li>"}}]),t}()}).call(t,n("7t+N"))},hHRx:function(e,t,n){"use strict";(function(e){n.d(t,"a",function(){return r});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();var r=function(){function t(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.initCheckboxListener()}return a(t,[{key:"initCheckboxListener",value:function(){var t=e('meta[name="domain"]').attr("content");e("input[type='checkbox'].module-activation").on("click",function(n){var a=n.currentTarget,r=laroute.route("uccello.settings.module.activation",{domain:t});e.post(r,{_token:e("meta[name='csrf-token']").attr("content"),src_module:e(a).data("module"),active:!0===e(a).is(":checked")?"1":"0"}).fail(function(e){swal(uctrans("dialog.error.title"),uctrans("error.save","settings"),"error")})})}}]),t}()}).call(t,n("7t+N"))}},[2]);