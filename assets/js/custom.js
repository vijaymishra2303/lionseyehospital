
$('.mySlider').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        }

    }
})


$('.ourSlide').owlCarousel({
    loop:true,
    margin:15,
    nav:false,
    navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/iconColor.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/iconColor1.svg'></div>"],
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }

    }
})

$('.facilitySlide').owlCarousel({
    loop:true,
    nav:false,
    navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/iconColor.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/iconColor1.svg'></div>"],
    autoplay:true,
    autoplayTimeout:1500,
  autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:3
        }

    }
})

$('.clientSlide').owlCarousel({
  loop:true,
  margin:15,
  nav:false,
  autoplay:true,
  navText:[" <div  class='nav-btn prev-slide'><img src='assets/images/iconColor.svg'></div>","<div class='nav-btn next-slide'><img src='assets/images/iconColor1.svg'></div>"],
  autoplayTimeout:1500,
autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }

  }
})

$(document).ready(function(){
    $(".openMenu").click(function(){
      $(".myNav").addClass("active");
    });
    $(".hideMe").click(function(){
        $(".myNav").removeClass("active");
      });
      
  });



  $(document).ready(function(){
    $(".SubMenu").click(function(){
      $(this).find('.megaMenu').slideToggle();
    });
  });

  $(window).scroll(function(){
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".myHeader").addClass("header_fixed");
  } else {
    $(".myHeader").removeClass("header_fixed");
  }
});




$( function() {
  $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
  $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
} );


$(document).ready(function(){
  $('.list').click(function(){
      const value = $(this).attr('data-filter');
      if (value == 'all'){
          $('.itembox').show('1000');
      }
      else {
          $('.itembox').not('.'+value).hide('1000');
          $('.itembox').filter('.'+value).show('1000');
        }
  })
  });
  // add active class on selected item
  $('.list').click(function(){
      $(this).addClass('active').siblings().removeClass('active')
  });
