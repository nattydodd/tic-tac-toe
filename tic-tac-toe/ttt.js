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

    console.log("Marking Square");
  }


  function checkWinner() {
    if ( $('.top').children().hasClass("x") ) {

      console.log("Checking Winner");

    }

  }


});
