///DOCUMENT READY
$(document).ready(function() {

  function fadeName(){
    $('#header h1').css("visibility","visible").css("transition"," 10s");
  }

  fadeName();
  function fadeDev(){
    $('#header p').hide().fadeIn(1000, function(){
      fadeIcons();
    });
  }

  function fadeIcons(){
    $('#header i').hide().fadeIn(500, function(){
      fadeQuote();
    });
  }

  function fadeQuote(){
    $('.first').find('h1, p, i').hide().fadeIn(1000);
  }

  fadeName();
});
//END OF DOCUMENT READY
