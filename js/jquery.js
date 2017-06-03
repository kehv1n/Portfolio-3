///DOCUMENT READY
$(document).ready(function() {


  function fadeName(){ //Begin fades
    $('#header h1').fadeTo(800, 1.0, function(){
      fadeDev();
    });
  }

  fadeName();
  function fadeDev(){
    $('#header p').fadeTo(800,1.0, function(){
      fadeIcons();
    });
  }

  function fadeIcons(){
    $('#header i').fadeTo(800,1.0, function(){
      fadeQuote();
    });
  }

  function fadeQuote(){ //final fade
    $('.first').find('h1, p, i').fadeTo(800,1.0);
  }

  function backgroundChange(){
    $(window).scroll(function(){
      if ($(this).scrollTop() > 50) {
        $('body, .header').addClass('fadeBg');
        $('.header h1, .header p').addClass('fadeBlackText');
      }
      else {
        $('body, .header').removeClass('fadeBg');
        $('.header h1, .header p').removeClass('fadeBlackText');
      }
    });
  }





  backgroundChange();
  fadeName();





});



//END OF DOCUMENT READY
