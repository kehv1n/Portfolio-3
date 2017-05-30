///DOCUMENT READY
$(document).ready(function() {


  function fadeName(){ //Begin fades
    $('#header h1').fadeTo(1000, 1.0, function(){
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
    $('#header i').fadeTo(500,1.0, function(){
      fadeQuote();
    });
  }

  function fadeQuote(){ //final fade
    $('.first').find('h1, p, i').fadeTo(500,1.0);
  }

  fadeName();
});
//END OF DOCUMENT READY
