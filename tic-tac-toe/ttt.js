'use strict'

$(function() {
  var turn = 0;

  $('.square').on('click', function() {
    var self = $(this);

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
  });

  // $('.square').click( function() { checkWinner()
  //     var self = $(this);
  //
  //     function checkWinner() {
  //       $('.square').toggleClass('x');
  //
  //     }
  //
  //
  // });




});
