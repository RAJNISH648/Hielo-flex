$("button").click(function(){
$("li").slideToggle();
});


$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        700:{
            items:1
        },
        900:{
            items:1
        },
        1200:{
            items:1
        }
    }
})


