'use strict'

$(function() {
  var turn = 0;

  $('.square').on('click', function() {
    markSquare(this)
    checkWinner()
  });


  function markSquare(square) {

    var self = $(square);

    self.data('position');
    if ( self.text() === '' ) {
      if ( turn  % 2 === 0 ) {
        self.text('X');
        self.addClass("x");
      } else {
        self.text('O');
        self.addClass("o");
      }

    turn++;

    } else {
      alert("I'm sorry...try again");
    }
    // console.log("Marking Square");
  }


  // function checkWinner() {
  //   if ( ( $('.top .left').hasClass("x") && $('.top .center').hasClass("x") && $('.top .right').hasClass("x")) );
  //   ( ( $('.middle .left').hasClass("x") && $('.middle .center').hasClass("x") && $('.middle .right').hasClass("x")) );
  //
  //    {
  //     alert("winner!");
  //
  //   }
  //
  // }
  function checkWinner() {
  if ( $('.top').children('.x').length === 3 ) {
    alert("winner!");
    }
  else if ( $('.middle').children('.x').length === 3 ) {
    alert("winner!");
    }
  else if ( $('.bottom').children('.x').length === 3 ) {
    alert("winner!");
    }
  }





});
