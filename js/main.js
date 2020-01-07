$(document).ready(function(){

    
    //Config page eventos
    $('.btn-collapse').click(function(){        
        $('.collapse').collapse('hide');       
        //$(this).css('filter', 'brightness(.35) hue-rotate(190deg)');        
    });  
    
    $('.btn-collapse').on('click', function(e) {
        e.preventDefault();       

        tamView = $(document).width();

        var id = $(this).attr('data-target'),        
        targetOffset = $(id).offset().top;        

        if (tamView <= 320) {
            $('html, body').animate({            
                scrollTop: targetOffset + 1600
            }, 500);
        }
        else if (tamView <= 425) {
            $('html, body').animate({            
                scrollTop: targetOffset + 1200
            }, 500);
        }
        else if (tamView <= 768) {
            $('html, body').animate({            
                scrollTop: targetOffset + 600
            }, 500);
        }
        

    });

      


    
    //Menu fixo
    var offset = $('#header').offset().top;
    var $meuMenu = $('#header');
    $(document).on('scroll', function () {
        if (offset < $(window).scrollTop()) {
            $meuMenu.addClass('fixed-top');
            $('#btn-contato-header').addClass('btn-padrao');
        } else {
            $meuMenu.removeClass('fixed-top');
            $('#btn-contato-header').removeClass('btn-padrao');
        }    
    });

    //OwlCarousel
    $(".owl-carousel").owlCarousel({
        autoplay:false,
        loop:false,
        margin:10,
        nav:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            }                        
        }
    });


    

});