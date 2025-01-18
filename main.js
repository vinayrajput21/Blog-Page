//Header
        $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var height = $("header").outerHeight();
     //>=, not <=
    if (scroll >=height ) {
        //clearHeader, not clearheader - caps H
        $("body").addClass("sticky");
        $("header").addClass("sticky_header");
        $("body").css("padding-top", height);
        console.log(height)
    }else{
      $("body").removeClass("sticky");
        $("header").removeClass("sticky_header");
        $("body").css("padding-top", 0);  
    }
});
//Slider
$('.best_book').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:false,
      autoplay: true,
  autoplaySpeed: 2000,
    dots:true
});

//Blog
$('.home_blog').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    arrows:true,
      autoplay: true,
  autoplaySpeed: 2000,
});

//Testimonial
$('.testminial_box').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
    arrows:false,
      autoplay: true,
  autoplaySpeed: 2000,
});

///Product Slider
$('.product_image').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
    dots:true,
    arrows:false
});

//$('.product_image').slick({
//  slidesToShow: 1,
//  slidesToScroll: 1,
//  arrows: false,
//  fade: true,
//  asNavFor: '.slider-nav'
//});
//$('.slider-nav').slick({
//  slidesToShow: 3,
//  slidesToScroll: 1,
//  asNavFor: '.product_image',
//  dots: true,
//  centerMode: true,
//  focusOnSelect: true
//});




 $(".overlay").click(function(){
    $(".forget_password").hide();
    $(".sign_up").hide();
    $(".login_form").hide();
    $(".overlay").hide();

  });
 $(".header_login").click(function(){
    $(".login_form").show();
    $(".overlay").show();

  });
 $(".signup").click(function(){
    $(".sign_up").show();
    $(".overlay").show();
    $(".login_form").hide();

  });
 $(".login").click(function(){
    $(".login_form").show();
    $(".overlay").show();
    $(".sign_up").hide();
     $(".forget_password").hide();

  });
 $(".forget").click(function(){
    $(".forget_password").show();
    $(".overlay").show();
    $(".login_form").hide();

  });           





