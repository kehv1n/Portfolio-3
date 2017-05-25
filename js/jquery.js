///DOCUMENT READY
$(document).ready(function() {

  function fadeName(){
    $('#header h1').fadeIn(1000, function(){
      fadeDev();
    });
  }

  function fadeDev(){
    $('#header p').fadeIn(1000, function(){
      fadeIcons();
    });
  }

  function fadeIcons(){
    $('#header i').fadeIn(500, function(){
      fadeQuote();
    });
  }

  function fadeQuote(){
    $('.first').find('h1, p, i').fadeIn();
  }

  fadeName();
});
//END OF DOCUMENT READY
