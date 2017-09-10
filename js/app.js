
/// SLIDESHOW ///



///SLIDESHOW INFO //
const LIBRARY = {
  books: [
   {titles: 'How to Win Friend and Influence People', author: 'Dale Carnegie', src: './assets/books/HowToWin.jpg', desc: 'Probably one the most influential books I have ever read. The book aims at breaking down human sociology; how we think, function, interact with one another... If one day I am ever in a position of success, it is thanks to this book here. This novel has taught me so much about not only human nature but also much about myself; whether that be my inital actions, or my reactions.'},
    {titles: 'Way of The Peaceful Warrior', author: 'Dan Millman', src: './assets/books/PeeacefulWarrior.jpg', desc: "Was reccomended this book by a good friend who once struggled with the same issues many of us struggle with today. All of which he overcame with the knowledge within this book. The book describes a who's life seems to be successful. He had fame, recognition, respect, love. He won prizes at athletic competitions, his studies were successful, and had many relationships with many women of his choice. Yet he continues to describe a void in his life that he cannot fill. This book describes his journey across the world in search for peace, an answer, and most importantly, happiness."},
    {titles: 'The Design of Everyday Things', author: 'Don Norman', src: './assets/books/theDesign.jpg', desc: "Often reffered to as The Psychology of Everyday things, this novel aims at easing the communication between object and user. Norman introduces the term affordance as it is applied to design. Things like flat plates on doors meant to be pushed, small finger sized push buttons, and bars that we unintuitevely use as handles. Norman uses case studies to describe the psychology behind what he deems good and bad design, and proposes design principles. He goes to great lengths to define and explain these terms in detail, giving examples following and going against the advice given and pointing out the consequences. "},
    {titles: 'Unshakeable', author: 'Tony Robbins', src: './assets/books/unshakeable.jpg' , desc: 'Tony Robbins has always been one of my favorite authors + motivational speakers. The guy is a powerhouse of a businessman. Tony wrote Unshakeable to point out not only common mistakes people make as investors, but also common mistakes we often make when we take any stance on a business position. Easily one of the best books on this list.'},
    {titles: 'Effective JavaScript', author: 'David Herman', src: './assets/books/effectiveJS.jpg', desc: ''},
    {titles: 'Blockchain', author: 'Melanie Swan', src: './assets/books/blockchain.jpg'},
    {titles: 'The 7 Habits of Highly Effective People', author: 'Stephen R. Covey', src: './assets/books/7effects.jpg'},
    {titles: 'Siddhartha', author: 'Herman Hesse', src: './assets/books/siddarth.jpg'},
    {titles: 'The Angels of Our Nature', author: 'Steven Pinker', src: './assets/books/nature.jpg'},
    {titles: 'The Art of War', author: 'Sun Tzu', src: './assets/books/TAOW.jpg'},
  ]
};



 /// ITS UGLY BUT IT WORKS
 /// SLIDE MOVEMENT

let indexNumForward = 0;
let titles = LIBRARY.books[indexNumForward].titles;
let author = LIBRARY.books[indexNumForward].author;
let desc = LIBRARY.books[indexNumForward].desc;
let src = LIBRARY.books[indexNumForward].src;


  function changeSlideForward(number) {

      if (number === 1) {
        indexNumForward += 1;
        if(indexNumForward >= (LIBRARY.books.length)) {
          indexNumForward = 0;
          changeSlide(indexNumForward);
          return;

        }
        else {
          changeSlide(indexNumForward);
          document.getElementById('bookTitle').innerHTML = titles;
          document.getElementById('bookAuth').innerHTML = author;
          document.getElementById('bookDesc').innerHTML = desc;
          document.getElementById('bookImg').src = src;

        }

      }

        if (number === 0){
        indexNumForward-=1;
          if(indexNumForward < 0) {
          indexNumForward = 10;
          changeSlide(indexNumForward);
          return;
          }
          else {
            changeSlide(indexNumForward);
            document.getElementById('bookTitle').innerHTML = titles;
            document.getElementById('bookAuth').innerHTML = author;
            document.getElementById('bookDesc').innerHTML = desc;
            document.getElementById('bookImg').src = src;

            // return indexNumForward;
          }

      }
  }

  function changeSlide(toThis) {
    titles = LIBRARY.books[toThis].titles;
    author = LIBRARY.books[toThis].author;
    desc = LIBRARY.books[toThis].desc;
    src = LIBRARY.books[toThis].src;
  }



  ////INTERATICE BACK + NEXT BUTTON ///

  function changeStyle(theColor, whichButton) {
    ///THE BACK BUTTON
    let B = $('#back');

    //THE NEXT BUTTON
    let N = $("#nxst");
    switch(whichButton){
      //CASE THE BACK BUTTON
      case B:
        checkColor(theColor, whichButton);
      break;
      //CASE THE NEXT BUTTON

      case N:
        checkColor(theColor, whichButton);
      break;

    }
  }
  //COLOR CHECKER
  function checkColor(aColor, btn){
    if (aColor === 'negative') {
      btn.toggleClass('negative');
    }

    if (aColor === 'positive') {
      btn.toggleClass('positive');
    }

    else {
      console.log('not negative or positive');
    }
  }
