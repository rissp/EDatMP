window.__tnt||(window.__tnt={}),function(t,e,i,a){var s=a.ads||(a.ads={}),n=function(t,e,i){return t.toString()+"x"+e.toString()+" "+i+" ad"},l=function(t){switch(t){case"slow":return 1e3;case"medium":return 500;case"fast":return 250;case"instant":return 0;default:return 500}},r=function(t){var e=new i.Deferred;switch(t.start_open){case"1":c(t,0),"0"!==t.auto_limit?setTimeout(function(){c(t)},1e3*t.auto_limit):i(t.positionDiv).find(".tnt-expandable-small").on("click",function(){c(t)});break;case"2":i(t.positionDiv).on("mouseover mouseout",function(){c(t)});break;case"3":c(t,0),i(t.positionDiv).find(".tnt-expandable-small").addClass("click-to-close"),"0"!==t.auto_limit?(setTimeout(function(){c(t)},1e3*t.auto_limit),setTimeout(function(){i(t.positionDiv).on("mouseover mouseout",function(){c(t)})},1e3*t.auto_limit+500)):i(t.positionDiv).find(".tnt-expandable-small").hasClass("click-to-close")&&i(t.positionDiv).find(".tnt-expandable-small").on("click hover",function(){c(t)});break;default:i(t.positionDiv).find(".tnt-expandable-small").on("click",function(){c(t)})}return e.resolve(t),e.promise()},d=function(t){var e=new i.Deferred;return t.clickuri&&(i(t.positionDiv).find(".tnt-expandable-big img").wrap('<a href="'+t.clickuri+'"></a>'),0!=t.start_open&&i(t.positionDiv).find(".tnt-expandable-small img").wrap('<a href="'+t.clickuri+'"></a>')),e.resolve(t),e.promise()},o=function(t){var e=new i.Deferred;return i(t.positionDiv).css({position:"relative"}),e.resolve(t),e.promise()},c=function(t,e){var a=new i.Deferred,s=i(t.positionDiv).find(".tnt-expandable-big"),n=0===e?e:l(t.transition_speed);switch(t.overlay_content){case"0":s.addClass("noOverlay");break;case"1":s.addClass("overlay")}switch(t.transition_direction){case"left":s.css({position:"absolute",top:0,"z-index":999,right:t.width}).stop().animate({width:"toggle"},n);break;case"right":s.css({position:"absolute",top:0,left:t.width,"z-index":999}).stop().animate({width:"toggle"},n);break;case"up":s.css({position:"absolute",bottom:t.height,left:0,"z-index":999}).stop().slideToggle(n);break;default:s.css({left:0,"z-index":999}).stop().slideToggle(n)}return a.resolve(t),a.promise()};s.expandable=function(t){var e='<div class="tnt-expandable-small" style="cursor: pointer"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" src="'+t.smallImage+'"/></div>',i='<div class="tnt-expandable-big" style="display: none;"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" src="'+t.largeImage+'" /></div>',a=e+i;h(t,a).then(o(t)).then(d(t)).then(r(t)).then()},s.curl=function(t){if("undefined"!=typeof t.clickuri)var e=t.clickuri.replace(/"/g,"&quot;");var i='<div class="small-ad"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" src="'+t.smallImage+'"/></div>',a='<div class="large-ad"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" src="'+t.largeImage+'"/></div>';if(t.clickuri)var s='<div class="hidden-sm hidden-xs page-curl page-curl-image"><a target="_blank" href="'+e+'"><div class="cover"></div></a>'+i+a+"</div>";else var s='<div class="hidden-sm hidden-xs page-curl page-curl-image"><div class="cover"></div>'+i+a+"</div>";var l=s;h(t,l)},s.html=function(t){t.width||(t.width=i(t.positionDiv).closest(".tncms-region-ads").prev().data("tnt-ads-tmp").width),h(t,t.html)},s.popup=function(t){function s(){i("#blox-ad-position-_popup1").remove(),i("#BlackOutDiv").remove()}var l=e.createElement("div");l.setAttribute("id","BlackOutDiv"),l.style.position="fixed",l.style.top=0,l.style.left=0,l.style.width="100%",l.style.height="100%",l.style.zIndex=10000001,l.style.backgroundColor="black",l.style.opacity=.9,l.style.filter="alpha(opacity=90)";var r=(t.width/2,t.height/2,"");if(r+=a.svg()?'<span><i class="fas tnt-times tnt-2x"></i></span>':'<span><i class="fa fa-2x fa-close"></i></span>',"video"==t.type){var d="video/mp4";null!=t.asseturl.match(/\.flv\?/)&&(d="video/x-flv"),t.clickuri&&(r+='<a style="display: block; height: 100%; position: absolute; width: 100%;" target="_blank" href="'+t.clickuri+'"></a>'),r+='<video class="tnt-popup-video" autoplay><source src="'+t.asseturl+'" type="'+d+'"/></video>'}else if("text"==t.type){var o=p(t);if(("undefined"==typeof o||null===o)&&(o="Advertisement"),t.clickuri){var c=t.clickuri.replace(/"/g,"&quot;");r+='<div class="tnt-text-ad-container"><a href="'+c+'" target="'+t.target+'">'+t.title+"</a><br/>"+t.text+'<br/><span class="tnt-text-ad-flag">'+o+"</span></div>"}else r+='<div class="tnt-text-ad-container"><strong>'+t.title+"</strong><br/>"+t.text+'<br/><span class="tnt-text-ad-flag">'+o+"</span></div>"}else if("image"==t.type){if("undefined"!=typeof t.clickuri)var v="http://"+t.clickuri.replace(/"/g,"&quot;");r+=""===t.clickuri?'<img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" class="img-responsive" width="'+t.width+'" height="'+t.height+'" src="'+t.asseturl+'">':'<a target="'+t.target+'" href="'+v+'"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" class="img-responsive" width="'+t.width+'" height="'+t.height+'" src="'+t.asseturl+'"></a>'}else if("html"==t.type)r+='<div style="width: 100%; height: 100%; max-width:'+t.width+"px; max-height:"+t.height+'px;">',r+=t.html,r+="</div>";else if("html5"==t.type){var u="";u+="//"+t.cdn+"/content/tncms/ads/__html5/"+t.uuid+"/"+t.html5_id+"/"+t.htmlfile,t.clickuri&&(u+="?clickTag="+encodeURIComponent(t.clickuri)),r+='<div style="width: 100%; height: 100%; max-width:'+t.width+"px; max-height:"+t.height+'px;">',r+='<iframe id="html5-ad-frame-'+t.uuid+'" width="'+t.width+'" height="'+t.height+'" marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" src="'+u+'">',r+="</iframe>",r+="</div>"}r+="</div>","undefined"!=typeof l.addEventListener?l.addEventListener("click",s,!1):("BackCompat"==e.compatMode&&(l.style.width="110%",l.style.height="110%",l.style.position="absolute"),l.attachEvent("onclick",s)),e.getElementsByTagName("body")[0].appendChild(l),TNCMS.AdManager.renderAd(t),h(t,r)},s.image=function(t){if("undefined"!=typeof t.clickuri)var i=t.clickuri.replace(/"/g,"&quot;");if("wallpaper"==t.display){var s="",l="",r=t.height,d=e.getElementsByTagName("body")[0];s+=d.style.backgroundImage="url("+t.asseturl+")",s+=d.style.height=r+"px",s+=d.className+=" wallpaper-ad ",t.clickuri&&(l+='<a href="'+t.clickuri+'" target="'+t.target+'" style="width:100%; height: 100%; display:block"></a>')}else if("anchor"==t.display)var o=a.svg()?"fas tnt-times":"fa fa-close",l=""===t.clickuri?'<a href="#" class="close" data-dismiss="alert"><span class="'+o+'"></span></a><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" style="width: '+t.width+'px; height: auto; " src="'+t.asseturl+'" />':'<a href="#" class="close" data-dismiss="alert"><span class="'+o+'"></span></a><a href="'+i+'" target="'+t.target+'" style="display:block"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" style="width: '+t.width+'px; height: auto; " src="'+t.asseturl+'" /></a>';else var l=""===t.clickuri?'<img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" src="'+t.asseturl+'" style="width: 100%;" />':'<a href="'+i+'" target="'+t.target+'" style="display:block"><img alt="advertisement" title="'+n(t.width,t.height,t.type)+'" src="'+t.asseturl+'" style="width: 100%;" /></a>';h(t,l,s)},s.text=function(t){t.width||(t.width=i(t.positionDiv).closest(".tncms-region-ads").prev().data("tnt-ads-tmp").width);var e=p(t);if(("undefined"==typeof e||null===e)&&(e="Advertisement"),t.clickuri)var a=t.clickuri.replace(/"/g,"&quot;"),s='<div class="tnt-text-ad-container"><a href="'+a+'" target="'+t.target+'">'+t.title+"</a><br/>"+t.text+'<br/><span class="tnt-text-ad-flag">'+e+"</span></div>";else var s='<div class="tnt-text-ad-container"><strong>'+t.title+"</strong><br/>"+t.text+'<br/><span class="tnt-text-ad-flag">'+e+"</span></div>";h(t,s)},s._resize=function(){var e,a=i(t).width();i(t).on("resize",function(){i(t).width()!=a&&(clearTimeout(e),e=setTimeout(function(){s._render()},500),a=i(t).width())})},s._render=function(){i("div[data-tnt-ads]").each(function(e,s){var n=i(s.id.indexOf("-debug-")>-1?"#"+s.id.replace("-debug",""):this),l=i(this).data("tnt-ads"),r=n.width()>=l.width,d=l.width<=320&&320==i(t).width(),o=l.width<=728&&768==i(t).width(),c=i(this).is(":visible"),p="wallpaper"==l.display,h="popup"==l.display&&0==v;((r||d||o)&&c||p||h)&&(u(l),n.parents("#sticky-anchor").length>0&&a.regions.stickyAnchor.renderClose())})};var p=function(t){if(i(t.positionDiv).closest(".tncms-region-ads").prev().attr("data-tnt-ads-tmp"))var e=i(t.positionDiv).closest(".tncms-region-ads").prev().data("tnt-ads-tmp").overline;else if(i(t.positionDiv).attr("data-tnt-ads"))var e=i(t.positionDiv).data("tnt-ads").overline;return e},h=function(e,a){var s=new i.Deferred,n="";"anchor"==e.display&&(n+=" tnt-ads-anchor ",n+=" alert "),"popup"==e.display&&(n+=" tnt-ads-popup "),n+="tnt-"+e.type+"-ad-wrapper";var l=["tnt-ads",n].join(" ");if("wallpaper"==e.display)i("#wallpaper-left").empty().append(a),i("#wallpaper-right").empty().append(a);else if("popup"==e.display)i(e.positionDiv).empty().removeAttr("style").removeClass().addClass(l).css({"max-width":e.width+"px","max-height":e.height+"px"}).append(a);else if(i(e.positionDiv).empty().removeAttr("style").removeClass().addClass(l).css({"max-width":e.width+"px"}).append(a),320==i(t).width()&&e.width<=320&&e.width>i(e.positionDiv).width()){var r=Math.round((i(e.positionDiv).width()-e.width)/2);i(e.positionDiv).css({margin:"0 "+r+"px"})}if("text"!=e.type){var d=p(e);if(d&&i(e.positionDiv).siblings(".tnt-ads-overline").length<1){var o='<div class="tnt-ads-overline">'+d+"</div>";i(e.positionDiv).before(o)}}return s.resolve(e),s.promise()},v=!1,u=function(t){v=!0,"position"==t.type&&TNCMS.AdManager.render({region:t.region,slot:t.slot,fold:t.fold,width:t.width,display:t.display})}}(window,document,jQuery,__tnt);
//# sourceMappingURL=tnt.ads.init.268d506f5612e6efd0d8bda4b9ab9389.js.map