$(document).ready(function() {
  var iL = 0;
    if (typeof jQuery === 'undefined') {
        // jQuery is NOT available
        console.log('jQuery is not detected');
    } else {
        var tkn = $('#chatBot_tkn_ul').val() || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkaXNwbGF5bmFtZSI6IkRlbW9Vc2VyIiwidXNlcm5hbWUiOiJkZW1vdXNlckBoY2wuY29tIiwidG9rZW5pemVkX2xvZ2luIjp0cnVlLCJyZXNwb25kX3Rva2VuIjp0cnVlLCJpYXQiOjE1Nzg2NDUyMDJ9.1iNadmOzgF_ZrbWumdK7WcEgqzVJOz8LYBPU4nxmTE0";
        var chaturl = 'https://one-lucy-dev.mybluemix.net/t/' + tkn
      
        $('body').append('<style>*,:before,:after {-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box}.preloader-wrapper.small {width: 36px;height: 36px}.preloader-wrapper.active {-webkit-animation: container-rotate 1568ms linear infinite;-moz-animation: container-rotate 1568ms linear infinite;animation: container-rotate 1568ms linear infinite}@-webkit-keyframes container-rotate {to {-webkit-transform: rotate(360deg);transform: rotate(360deg)}}@keyframes container-rotate {to {-webkit-transform: rotate(360deg);transform: rotate(360deg)}}.spinner-layer {position: absolute;width: 100%;height: 100%;opacity: 0;border-color: #26a69a}.spinner-cyan,.spinner-cyan-only {border-color: #00A3E0}.circle-clipper,.circle-clipper .circle,.gap-patch {height: 100%;border-color: inherit}.active .spinner-layer.spinner-cyan {-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;-moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(.4, 0, .2, 1) infinite both}.active .spinner-layer,.active .spinner-layer.spinner-cyan-only {opacity: 1;-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;-moz-animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both;animation: fill-unfill-rotate 5332ms cubic-bezier(.4, 0, .2, 1) infinite both}@-webkit-keyframes fill-unfill-rotate {12.5% {-webkit-transform: rotate(135deg)}25% {-webkit-transform: rotate(270deg)}37.5% {-webkit-transform: rotate(405deg)}50% {-webkit-transform: rotate(540deg)}62.5% {-webkit-transform: rotate(675deg)}75% {-webkit-transform: rotate(810deg)}87.5% {-webkit-transform: rotate(945deg)}to {-webkit-transform: rotate(1080deg)}}@keyframes fill-unfill-rotate {12.5% {-webkit-transform: rotate(135deg);transform: rotate(135deg)}25% {-webkit-transform: rotate(270deg);transform: rotate(270deg)}37.5% {-webkit-transform: rotate(405deg);transform: rotate(405deg)}50% {-webkit-transform: rotate(540deg);transform: rotate(540deg)}62.5% {-webkit-transform: rotate(675deg);transform: rotate(675deg)}75% {-webkit-transform: rotate(810deg);transform: rotate(810deg)}87.5% {-webkit-transform: rotate(945deg);transform: rotate(945deg)}to {-webkit-transform: rotate(1080deg);transform: rotate(1080deg)}}@-webkit-keyframes blue-fade-in-out {100%, 25%, 90%, from {opacity: 1}26%,89% {opacity: 0}}@keyframes blue-fade-in-out {100%, 25%, 90%, from {opacity: 1}26%,89% {opacity: 0}}.gap-patch {position: absolute;top: 0;left: 45%;width: 10%;overflow: hidden}.gap-patch .circle {width: 1000%;left: -450%}.circle-clipper {display: inline-block;position: relative;width: 50%;overflow: hidden}.circle-clipper .circle {width: 200%;border-width: 3px;border-style: solid;border-bottom-color: #E8E8E8!important;border-radius: 50%;-webkit-animation: none;-moz-animation: none;animation: none;position: absolute;top: 0;right: 0;bottom: 0}.circle-clipper.left .circle {left: 0;border-right-color: #E8E8E8!important;-webkit-transform: rotate(129deg);-moz-transform: rotate(129deg);-ms-transform: rotate(129deg);-o-transform: rotate(129deg);transform: rotate(129deg)}.circle-clipper.right .circle {left: -100%;border-left-color: #E8E8E8!important;-webkit-transform: rotate(-129deg);-moz-transform: rotate(-129deg);-ms-transform: rotate(-129deg);-o-transform: rotate(-129deg);transform: rotate(-129deg)}.active .circle-clipper.left .circle {-webkit-animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;-moz-animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;animation: left-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both}.active .circle-clipper.right .circle {-webkit-animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;-moz-animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both;animation: right-spin 1333ms cubic-bezier(.4, 0, .2, 1) infinite both}@-webkit-keyframes left-spin {from, to {-webkit-transform: rotate(130deg)}50% {-webkit-transform: rotate(-5deg)}}@keyframes left-spin {from, to {-webkit-transform: rotate(130deg);transform: rotate(130deg)}50% {-webkit-transform: rotate(-5deg);transform: rotate(-5deg)}}@-webkit-keyframes right-spin {from, to {-webkit-transform: rotate(-130deg)}50% {-webkit-transform: rotate(5deg)}}@keyframes right-spin {from, to {-webkit-transform: rotate(-130deg);transform: rotate(-130deg)}50% {-webkit-transform: rotate(5deg);transform: rotate(5deg)}}.ripple {background: transparent radial-gradient(closest-side at 50% 50%, rgba(12, 105, 176, 0) 0%, rgba(12, 105, 176, 0.043137254901960784) 47%, rgba(12, 105, 176, 0.10980392156862745) 75%, rgba(12, 105, 176, 0.1843137254901961) 100%) 0 0 no-repeat padding-box;position: absolute;width: 124px;height: 124px;z-index: -1;left: 50%;top: 50%;opacity: 0;margin: -62px 0 0 -62px;border-radius: 50%;animation: ripple 2s infinite}@keyframes ripple {0% {opacity: 1}25% {opacity: 1;transform: scale3d(0, 0, 0)}50% {opacity: 0;transform: scale3d(0.1, 0.1, 0.1)}to {opacity: 1}}#chatBotWidget {position: fixed;bottom: 3%;right: 20px;background: #fff 0 0 no-repeat padding-box;box-shadow: 0 0 20px rgba(0, 0, 0, .16);border-radius: 56px;opacity: 1;-webkit-animation-name: bounce;animation-name: bounce;-webkit-animation-duration: 2.5s;animation-duration: 2.5s;-webkit-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation-timing-function: linear; animation-timing-function: linear; animation-iteration-count: infinite; -webkit-animation-iteration-count: infinite;z-index: 999;border: none;height: 56px;width: 56px;text-align: center;transition-property: width, border-radius;transition-duration: 5s;transition-timing-function: linear;transform-origin: bottom right}@-webkit-keyframes slideInRight {from {transform: translate3d(100%, 0, 0);visibility: visible}to {transform: translate3d(0, 0, 0)}}@keyframes slideInRight {from {transform: translate3d(100%, 0, 0);visibility: visible}to {transform: translate3d(0, 0, 0)}}#chatBotWidget.openWidget {border-radius: 20px;animation: scaleLarge .5s ease-in-out forwards;padding: 0;}@-webkit-keyframes scaleLarge {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 680px;height: 75%;border-radius: 20px}}@keyframes scaleLarge {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 680px;height: 75%;border-radius: 20px}}#chatBotWidget iframe {width: 100%;height: calc(100% - 56px);border: 0;bottom: 0;position: absolute;right: 0;border-radius:20px 20px 20px 20px}#chatBotWidgetTopBar {color: #949499;text-align: center;font-size: 14px;letter-spacing: 1px;border-bottom: 1px solid #ddd;padding: 10px}#chatBotMinimizeWidget {width: 30px;height: 30px;position: absolute;right: 0;top: 0;padding: 2px 36px 0 0;line-height: 30px;color: #0c69b0;cursor: pointer}#chatBotsvgicon img {cursor: pointer}#chatBotUserBubble {background: #fcfcfc 0 0 no-repeat padding-box;box-shadow: 0 0 20px rgba(17, 17, 34, .18);opacity: 1;padding: 15px 20px;position: fixed;border-radius: 10px 10px 0 10px;right: 116px;bottom: 3%;transition-duration: 2s;transition-delay: 2s;-webkit-animation: scaleInUserBubble .4s ease-in-out forwards;animation: scaleInUserBubble .4s ease-in-out forwards;z-index: 1;font-weight: 600;min-height: 86px;cursor:pointer}@-webkit-keyframes scaleInUserBubble {0% {width: 0;height: 0}100% {min-width: 204px;min-height: 86px}}@keyframes scaleInUserBubble {0% {opacity: 0;width: 0;height: 0}100% {opacity: 1;-webkit-transform: scale(1, 1);-moz-transform: scale(1, 1);transform: scale(1, 1);min-width: 204px;min-height: 86px}}#chatBotUserBubble.hideBubble {animation: scaleOutUserBubble .2s ease-in-out forwards}@-webkit-keyframes scaleOutUserBubble {0% {min-width: 148px;min-height: 86px;opacity: 1}100% {width: 0;height: 0;opacity: 0}}@keyframes scaleOutUserBubble {0% {min-width: 148px;min-height: 86px;opacity: 1}100% {width: 0;height: 0;opacity: 0}}#chatBotUserBubble:before {content: "";position: absolute;border-top: 16px solid transparent;border-left: 12px solid #fff;border-right: 0 solid transparent;border-bottom: 0 solid transparent;right: -12px;bottom: 0}#chatBotUserBubble span p {text-align: left;font-size: 14px;letter-spacing: 0;color: #343439;margin: 0;line-height: 32px;font-weight: 500}#chatBotUserBubble span.chatBotneedhelp {text-align: left;font-size: 14px;letter-spacing: 0;color: #343439;font-weight: 500;opacity:0}#chatBotUserBubble span.close-bubble {display:none;position: absolute;bottom: -30px;font-size: 16px;letter-spacing: 0;color: #949499;opacity: .84;background: #fff;text-align: center;border-radius: 4px;box-shadow: 0 0 20px rgba(17, 17, 34, .18);padding: 0 5px;right: 0}@-webkit-keyframes slideOutRight {from {transform: translate3d(0, 0, 0)}to {visibility: hidden;transform: translate3d(100%, 0, 0)}}@keyframes slideOutRight {from {transform: translate3d(0, 0, 0)}to {visibility: hidden;transform: translate3d(100%, 0, 0)}}.slideOutRight {animation-name: slideOutRight}@-webkit-keyframes slideOutLeft {from {transform: translate3d(0, 0, 0)}to {visibility: hidden;transform: translate3d(-200%, 0, 0)}}@keyframes slideOutLeft {from {transform: translate3d(0, 0, 0)}to {visibility: hidden;transform: translate3d(-200%, 0, 0)}}@media (min-width:768px) and (max-width:1024px) {#chatBotWidget.openWidget {border-radius: 20px;transform: translateY(0);transform: scale(1, 1);animation-name: scaleMedium}#chatBotMinimizeWidget {right: 0}}@-webkit-keyframes scaleMedium {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 65%;height: 80%;border-radius: 20px}}@keyframes scaleMedium {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 65%;height: 80%;border-radius: 20px}}@media (max-width:480px) {#chatBotWidget iframe {border-radius: 0}#chatBotUserBubble span.close-bubble {bottom: 81%;right: -30px}#chatBotUserBubble {bottom: 3%;min-width: 160px}#chatBotWidget.openWidget {bottom: 0;right: 0;border-radius: 0;box-shadow: none;width: 100%;height: 100%;transform: translateY(0);animation: scaleSmall .9s ease-in-out forwards;padding: 0;transform-origin: bottom right;transition-property: width, border-radius;transition-duration: 5s;transition-timing-function: linear;transform: scale(1, 1)}#chatBotMinimizeWidget {right: 0}}@-webkit-keyframes scaleSmall {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 100%;height: 100%;border-radius: 0}}@keyframes scaleSmall {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 100%;height: 100%;border-radius: 0}}@media (min-width:1368px) {#chatBotWidgetTopBar {font-size: 16px}@-webkit-keyframes scaleLarge {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 47%;height: 80%;border-radius: 20px}}@keyframes scaleLarge {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 47%;height: 80%;border-radius: 20px}}}@media (min-width:1441px) {@-webkit-keyframes scaleLarge {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 680px;height: 680px;border-radius: 20px}}@keyframes scaleLarge {0% {width: 60px;height: 60px;border-radius: 60px}100% {width: 680px;height: 680px;border-radius: 20px}}}#chatBotOpenChat p{opacity: 0;-webkit-animation: fadeInUp 0.4s ease-in-out 0.6s forwards;-moz-animation: fadeInUp 0.4s ease-in-out 0.6s forwards;animation: fadeInUp 0.4s ease-in-out 0.6s forwards;}#chatBotOpenChat.chatBotneedhelp {-webkit-animation: fadeInUp2 0.4s ease-in-out 0.6s forwards;-moz-animation: fadeInUp2 0.4s ease-in-out 0.6s forwards;animation: fadeInUp2 0.4s ease-in-out 0.6s forwards;}@-webkit-keyframes fadeInUp {from {opacity: 0;-webkit-transform: translate3d(-10%, 0, 0);transform: translate3d(-10%, 0, 0)}to {opacity: 1;-webkit-transform: none;transform: none}}@keyframes fadeInUp {from {opacity: 0;-webkit-transform: translate3d(-10%, 0, 0);transform: translate3d(-10%, 0, 0)}to {opacity: 1;-webkit-transform: none;transform: none}}@-webkit-keyframes fadeInUp2 {from {opacity: 0;margin-left: -10%;}to {opacity: 1;margin-left: 0;}}@keyframes fadeInUp2 {from {opacity: 0;margin-left: -10%;}to {opacity: 1;margin-left: 0;}}#chatBotpreloader {position: absolute;top: 50%;left: 50%;margin-top: -18px;margin-left: -18px}.animated {-webkit-animation-duration: 1s;-moz-animation-duration: 1s;animation-duration: 1s;-webkit-animation-fill-mode: both;-moz-animation-fill-mode: both;animation-fill-mode: both}.zoomIn {-webkit-animation-name: zoomIn;-moz-animation-name: zoomIn;animation-name: zoomIn}@keyframes zoomIn {0% {opacity: 0;-webkit-transform: scale3d(.3, .3, .3);-moz-transform: scale3d(.3, .3, .3);transform: scale3d(.3, .3, .3)}50% {opacity: 1}}.left {float: left}.right {float: right}.animated {-webkit-animation-duration: 2.5s;animation-duration: 2.5s;-webkit-animation-fill-mode: both;animation-fill-mode: both;-webkit-animation-timing-function: linear; animation-timing-function: linear; animation-iteration-count: infinite; -webkit-animation-iteration-count: infinite;} @-webkit-keyframes bounce {0%, 20%, 40%, 60%, 80%, 100% {-webkit-transform: translateY(0);}50% {-webkit-transform: translateY(-10px);}} @keyframes bounce {  0%, 20%, 40%, 60%, 80%, 100% {transform: translateY(0);}  50% {transform: translateY(-10px);}} .bounce { -webkit-animation-name: bounce;animation-name: bounce;}.openWidget #chatBotsvgicon{display:none}</style>');
        
        $('body').append('<div id="chatBotWidget" style="" class="animated bounce"><div id="chatBotsvgicon"><img src="images/chat-icon.png"></span></div><iframe is="x-frame-bypass" id="chatBotframeload" style="" src="' + chaturl + '"></iframe></div></div>');
        checkIframeLoaded();
        var name = $('.em-c-hero__desc').text().replace(/"/g, '').split(',')[0];
        if (name.split('(').length > 1) {
            name = name.split('(')[1].replace(')', '');
        }
        
        function checkIframeLoaded() {
            // Get a handle to the iframe element
            var ifr = document.getElementById('chatBotframeload');
            ifr.onload = function() {
                iL = 1;
                frameLoaded = true;
                setTimeout(function() {
                    
                    
                    $('#chatBotsvgicon').show();
                    $('#chatBotWidget').show().addClass("animated bounce");
                    $('#chatBotWidget').attr('class','');
                    $('#svgchatBoticon').attr('class','');
                    $('#chatBotsvgicon').click(function() {
                        if (iL == 0) {
                            $('#chatBotUserBubble').empty();
                            $('#chatBotUserBubble').addClass('hideBubble');
                            $('#chatBotUserBubble').hide();
                            $('#chatBotUserBubble').remove();
                            $('#chatBotsvgicon').hide();


                            $('#chatBotWidget').addClass('openWidget');
                            setTimeout(function() {

                                $('#framediv').show()
                            }, 500);
                        } else {
                            $('#chatBotsvgicon').hide();
                            $('#framediv').show();
                            $('#chatBotUserBubble').empty();
                            $('#chatBotUserBubble').addClass('hideBubble');
                            $('#chatBotWidget').addClass('openWidget');
                             
                            //setTimeout(function() {$('#framediv').show()},500);
                        }
                    });

                    $(document).on('click', '#chatBotCloseBubble', function() {
                        
                        $('#chatBotUserBubble').empty();
                        $('#chatBotUserBubble').addClass('hideBubble');
                        $('#chatBotUserBubble').hide();
                        $('#chatBotUserBubble').remove();
                        evt.stopPropagation();
                    });

                    $(document).on('click', '#chatBotUserBubble', function() {
                        $('#chatBotUserBubble').empty();
                        $('#chatBotUserBubble').addClass('hideBubble');
                        $('#chatBotUserBubble').hide();
                        $('#chatBotUserBubble').remove();
                        $('#chatBotsvgicon').hide();
                        $('#chatBotWidget').addClass('openWidget');
                        if ($('#framediv').length || iL == 1) {
                            $('#chatBotWidget').append('<div id="framediv" style="width:100%; height:100%"><div id="chatBotWidgetTopBar">chatBot<span id="chatBotMinimizeWidget"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="3" viewBox="0 0 22 3"><defs><style>.a{fill:#545459;}</style></defs><path class="a" d="M22,11H2c-.6,0-1,.6-1,1.5S1.4,14,2,14H22c.6,0,1-.6,1-1.5S22.6,11,22,11Z" transform="translate(-1 -11)"/></svg></span></div><iframe is="x-frame-bypass" id="chatBotframeload" style="" src="' + chaturl + '"></iframe></div>');
                            setTimeout(function() {
                                $('#framediv').show()
                            }, 500);
                        } else {
                            $('#chatBotWidget').append('<div id="framediv" style="width:100%; height:100%"><div id="chatBotWidgetTopBar">chatBot<span id="chatBotMinimizeWidget"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="3" viewBox="0 0 22 3"><defs><style>.a{fill:#545459;}</style></defs><path class="a" d="M22,11H2c-.6,0-1,.6-1,1.5S1.4,14,2,14H22c.6,0,1-.6,1-1.5S22.6,11,22,11Z" transform="translate(-1 -11)"/></svg></span></div><iframe is="x-frame-bypass" id="chatBotframeload" style="" src="' + chaturl + '"></iframe></div>');
                        }
                    });

                    $(document).on('click', '#chatBotMinimizeWidget', function() {
                        iL = 1;
                        $('#framediv').hide();
                        $('#chatBotsvgicon').show()
                        $('#chatBotWidget').removeClass('openWidget');
                        if ($('#chatBotsvgicon').length) {
                            //$('#chatBotsvgicon').show()
                            $('#framediv').hide();
                        } else {
                            $('#chatBotWidget').append('<div id="chatBotsvgicon"><img src="images/chat-icon.png"></div>');
                        }
                    });
                    setTimeout(function() {
                        if ($("#chatBotWidget").length > 0) {
                            $('body').append('<div id="chatBotUserBubble" style=""></div>');
                        }
                    }, 1000);
                    setTimeout(function() {
                        if ($("#chatBotUserBubble").length > 0) {
                            $('#chatBotUserBubble').append('<span class="openChat" id="chatBotOpenChat"><p>Hi ' + name + ', I\'m Lucy.</p></span><span class="close-bubble" id="chatBotCloseBubble"><svg class="em-c-icon" style="width: 12px; height: 12px;"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/XOM/Content/Icons/em-icons.svg#icon-x"></use></svg></span>');
                        }
                        setTimeout(function(){
                            $('#chatBotUserBubble').append('<span class="openChat chatBotneedhelp" id="chatBotOpenChat">Your Virtual Assistant</span>');
                        }, 1000)
                    }, 1000);
                }, 5000);
            };
        }
    }
})