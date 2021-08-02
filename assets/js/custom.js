// funciton for initializing first carousel
$(document).ready(function(){
    $('#car-one').carousel();


// function for next slide
//also accessible from enter or spacebar
    $('.next').click(function(){
        $('#car-one').carousel('next');
    });

});
// function for initializing second carousel
$(document).ready(function(){
    $('#car-two').carousel();

// function for next slide
//also accessible enter or spacebar
    $('.previous').click(function(){
        $('#car-two').carousel('prev');
    });
});
