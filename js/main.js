	/* Паралакс-эффект: */
	/* header */
	$('#parallax .parallax-layer').parallax({
		mouseport: $('#parallax')
	});
	
	/*fancybox*/
	$('.fancybox').fancybox({
        helpers:  {
            title : {
                type : 'inside',
                position: 'bottom'
            }
        }
    });
    
    /*slideshow*/
    $('.main-slide-show').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  speed: 700,
	  fade: true,
	  cssEase: 'linear'
	});

    /*menu-mobile*/
    $(function() {
      function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
        $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
        $('[data-behaviour="toggle-link-icon_2"]').on('click', toggleSubMenu2);
        $('[data-behaviour="toggle-link-icon_3"]').on('click', toggleSubMenu3);
      };
      
      function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
      };
      
      function toggleSubMenu() {
        $(this).toggleClass('nav__link--plus nav__link--minus');
        $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
      };
      function toggleSubMenu2() {
        $(this).toggleClass('nav__link--plus_2 nav__link--minus_2');
        $('[data-behaviour="toggle-sub-menu_2"]').slideToggle('nav__sub-list_2--active');
      };
      function toggleSubMenu3() {
        $(this).toggleClass('nav__link--plus_3 nav__link--minus_3');
        $('[data-behaviour="toggle-sub-menu_3"]').slideToggle('nav__sub-list_3--active');
      };
      
      init()
    });

