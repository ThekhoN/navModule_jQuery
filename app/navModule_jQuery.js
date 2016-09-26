(function($){

var mainWrapperX99 = $('#mainWrapperX_newX999');


$(document).ready(function(){
/// * * * scrollToFixed_inVw_debounced_MODULE * * * ///
// jquery, scrollToFixed, isInvwport, debounce//
var scrollToFixed_inVw_debounced_MODULE = (function() {
    //inner vars for use
    var mainNavX = mainWrapperX99.find('.navMainX_Wrapper');
    var headerBannerX = mainWrapperX99.find('.headerBannerX');
    var navClass = 'navX99';
    var dataScrollToTargetAttr = 'data-target';
    var activeClass = 'activeX99';

    //this sets the nav to fixed onScroll
    headerBannerX.find('img').one('load', function() {
        mainNavX.scrollToFixed();
        //console.log('scrollToFixed running');
        }).each(function() {
            if(this.complete) $(this).load();
    });
    mainNavX.find('[' + dataScrollToTargetAttr +']').on('click', function(e){
        e.preventDefault();
        //get mainNavHeight for calc offset
        var mainNavXHeight = mainNavX.height();
        console.log(mainNavXHeight);
        var $this = $(this),
            targeterino = $(this).attr(dataScrollToTargetAttr),
            activeOneX = $(this).addClass(activeClass).siblings("li").removeClass(activeClass);
        $('html, body').animate({
            scrollTop: $('#' + targeterino).offset().top - (mainNavXHeight)
        }, 1000, "swing");
    });

    function scrollActiv899() {
        $('.scrollToSectionX:in-viewport(100)').run(function() {
          //console.log('scrollActiv899 is running!!!');
            var activ8This = $(this).attr('id');
            //console.log('activ8This: ', activ8This);
            mainNavX.find('[' + dataScrollToTargetAttr +']').each(function() {
                $(this).removeClass(activeClass);
            });
            mainNavX.find('[' + dataScrollToTargetAttr + '="' + activ8This + '"]').addClass(activeClass);
        });
    }
    $(window).scroll($.debounce(250, scrollActiv899));
})();
// end of scrollToFixed_inVw_debounced_MODULE


//detect css transition end dependency jQuery dependency
!function(n,i,t,o){var a=t.body||t.documentElement,a=a.style,e="",s="";""==a.WebkitAnimation&&(e="-webkit-"),""==a.MozAnimation&&(e="-moz-"),""==a.OAnimation&&(e="-o-"),""==a.WebkitTransition&&(s="-webkit-"),""==a.MozTransition&&(s="-moz-"),""==a.OTransition&&(s="-o-"),n.fn.extend({onCSSAnimationEnd:function(i){var t=n(this).eq(0);return t.one("webkitAnimationEnd mozAnimationEnd oAnimationEnd oanimationend animationend",i),(""!=e||"animation"in a)&&"0s"!=t.css(e+"animation-duration")||i(),this},onCSSTransitionEnd:function(i){var t=n(this).eq(0);return t.one("webkitTransitionEnd mozTransitionEnd oTransitionEnd otransitionend transitionend",i),(""!=s||"transition"in a)&&"0s"!=t.css(s+"transition-duration")||i(),this}})}(jQuery,window,document);
// end of detect css transition end
var mainNavX = mainWrapperX99.find('.navMainX_Wrapper');
var x99bgWrap = mainWrapperX99.find('.x99bgWrap');
var innerMenuWrap = mainWrapperX99.find('.menuInnerX99');
var menuSectionX = innerMenuWrap.find('.menuSectionX');
var hamburgerContX = mainWrapperX99.find('.hamburgerContX');
var hamburger = hamburgerContX.find('.scrollTo_menuX99');
var arrowDownX99 = hamburger.find('.arrowDownX99');
var arrowCloseX99 = hamburger.find('.arrowCloseX99');
var scrollTo_menuX99 =  mainNavX.find('.scrollTo_menuX99');
var scrollTo_menuX99_clickEle = mainNavX.find('.scrollTo_menuX99 .clickEle');
var activeClass = 'activeX99';

//toggle
hamburgerContX.data('clickState', true);
hamburgerContX.on('click', function() {
    //console.log('hamburgerContX was clicked!');
    var $this = $(this);
    if ($this.data('clickState') && !innerMenuWrap.hasClass(activeClass) && !hamburger.hasClass(activeClass)) {
        slideInAnim();
    } else {
        slideOutAnim();
    }
    $this.data('clickState', !hamburgerContX.data('clickState'));
});

//emulate click outside
x99bgWrap.on('click', function() {
    var $this = $(this);
    slideOutAnim();
    $this.hide();
    hamburgerContX.data('clickState', hamburgerContX.data('clickState', true));
});

//resize hamburgerContX size on resize
function resize_hamburgerContX() {
    if($(window).width() > 768){
      return;
    }
    else {
      console.log('do something');
      var set_hamburgerContX_dimension = mainNavX.height();
      scrollTo_menuX99.height(set_hamburgerContX_dimension);
      scrollTo_menuX99.width(set_hamburgerContX_dimension);
      scrollTo_menuX99_clickEle.width(set_hamburgerContX_dimension);
      scrollTo_menuX99_clickEle.height(set_hamburgerContX_dimension);

    }
}
//run on load
resize_hamburgerContX();
//debounced
$(window).resize($.debounce(250, resize_hamburgerContX));

function slideInAnim() {
    hamburger.addClass(activeClass).onCSSAnimationEnd(function() {
        innerMenuWrap.addClass(activeClass).onCSSAnimationEnd(function() {
            menuSectionX.each(function() {
                var $this = $(this);
                $this.addClass(activeClass);
            });
            //toggle arrowClass
            arrowDownX99.removeClass(activeClass);
            arrowCloseX99.addClass(activeClass);
        });
    });
    console.log('running slideIn');
    mainWrapperX99.find("li.navType").each(function() {
        var $this = $(this);
        $this.addClass('fadeTransparent');
    });
    x99bgWrap.show();
}

function slideOutAnim() {
    menuSectionX.each(function() {
        var $this = $(this);
        $this.removeClass(activeClass);
    }).onCSSAnimationEnd(function() {
        innerMenuWrap.removeClass(activeClass);
        //toggle arrowClass
        arrowDownX99.addClass(activeClass);
        arrowCloseX99.removeClass(activeClass);
    });
    hamburger.removeClass(activeClass);
    console.log('running slideOut');
    mainWrapperX99.find("li.navType").each(function() {
        var $this = $(this);
        $this.removeClass('fadeTransparent');
    });
    x99bgWrap.hide();
}

});
})(jQuery);
