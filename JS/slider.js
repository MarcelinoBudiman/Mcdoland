$(document).ready(function () {
    var curr = 0;
    var slides = $('.slide');
    var interval = "";
    var len = slides.length;

    for(i = 0; i < len; i++){
        $('.dot-container').append("<span class='slideshow-dot' id='slide-dot" + i + "'></span>")
    }

    
    
    slides.wrapAll('<div id="slideInner"></div>').css({
            'float': 'left',
            'width': 100 + 'vw'
        });

    $('#slideInner').css('width', 100 * len + 'vw');
    $('.slider-container').css('overflow', 'hidden');
    manageControls(curr); 
    autoSlide();

    $('span.slideshow-dot').click(function(){
        var dotId = $(this).attr('id');
        var currString = dotId.replace('slide-dot','');
        
        curr = parseInt(currString);

        RemoveInterval();
        manageControls(curr);

        $('#slideInner').animate({
            'marginLeft': 100 * (-curr) + 'vw'
        });

        autoSlide();
    });

    $('.control')
        .bind('click', function () {
            curr = ($(this).attr('id') == 'rightControl')
                ? curr + 1 : curr - 1;

            RemoveInterval();        
            manageControls(curr);

            $('#slideInner').animate({
                'marginLeft': 100 * (-curr) + 'vw'
            });
            
            autoSlide();
        });

     
    function RemoveInterval() {
        clearInterval(interval);
    }

    function autoSlide(){
        
        interval = window.setInterval(function(){
            curr++;
            manageControls(curr);
    
            $('#slideInner').animate({
                'marginLeft': 100 * (-curr) + 'vw'
            });
       
           }, 5000);
    }

    function manageControls(position) {

        var currentDotVar = "#slide-dot" + position;
        $(currentDotVar).addClass(" active");

        for(i = 0; i < len; i++){
            if(position != i){
                $("#slide-dot" + i).removeClass("active");
            }
        }


        if (position == 0-1) { 
            curr = len-1;
            manageControls(curr);
        }else if (position == len) { 
            curr = 0;
            manageControls(curr);
        }
    }
});