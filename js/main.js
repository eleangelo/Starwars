$(document).ready(function (){
    $('.slider').owlCarousel({
    //loop:true,
    margin:10,
    nav:true,
    navClass: ['slider-nav-left','slider-nav-right'],
    
    responsive:{
        0:{
            items:1
        },
        576:{
            items:2
        },
        900:{
            items:3
        },
        1200:{
            items:4
        }
    }

})
})