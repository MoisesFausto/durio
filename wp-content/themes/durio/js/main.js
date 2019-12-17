$(document).ready(function(){

    
    //Config page eventos
    $('.btn-collapse').click(function(){        
        $('.collapse').collapse('hide');           
    });  

    //Active button in page eventos
    $("#content-eventos button.btn-link").click( function(){
        $('#content-eventos button.btn-link .card-img').css('mix-blend-mode', 'unset');
        $(this).find('.card-img').css('mix-blend-mode', 'hard-light');
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

    //Config data-toggle="dropdown" in menu header
    tamView = $(document).width();
    if (tamView <= 720) {                  
        //$('.dropdown-toggle').dropdown();  
        $('#navbarDropdownMenuLink').click( function(e){
            e.preventDefault(); 
        })     
    }

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


    //Envio de Newsletter via AJAX
    $("#form-newsletter").submit(function(e) {   
        
        
        //Pega de forma automatizada os valores dos campos do form
        var formData = $(this).serialize();  
        //Previni o carregamento da pagina
        e.preventDefault();       
        //Desabilita o botão e altera o valor do texto
        $('.btn-assinar').prop('disabled', true).html('Aguarde... <img src="https://oficinadurio.com.br/wp-content/themes/durio/img/icones/loading.gif" width="16" height="auto" alt="Aguarde...">').addClass("disabled");

        $.ajax({

            url: "https://oficinadurio.com.br/wp-content/themes/durio/_get/get-data.php",
            type: "POST",
            data: formData
        
        }).done(function() {

            //Faz dar um pequeno delay de 2s para mostrar a mensagem de sucesso ou de falha
            setTimeout(function(){ 
                $('#form-newsletter').html('<div class="alert alert-success py-5 h4" role="alert">Newsletter Assinada com Sucesso!</div>');
            }, 2000);           
        
        }).fail(function(jqXHR, textStatus ) {

            setTimeout(function(){ 
                $('#form-newsletter').html('<div class="alert alert-danger py-5 h4" role="alert">Houve um problema: '+ textStatus +'</div>');
            }, 2000);            
        
        }).always(function() {

            console.log("Enviado!");

        });

    });

    

});