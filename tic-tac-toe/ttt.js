'use strict'

$(function() {
  var turn = 0;
  var boardClone = $(".tictactoe").clone();

  $('.square').on('click', function() {
    markSquare(this)
    checkWinner(".x")
    checkWinner(".o")
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

  function popUp() {
    $('.popup').fadeIn();
    $('.play-again').click( function() {
    $('.popup').fadeOut();
    // board reset
    $(".tictactoe").replaceWith(boardClone.clone());
    // reset the clicking function
      $('.square').on('click', function() {
        markSquare(this)
        checkWinner(".x")
        checkWinner(".o")
      });
    });
  }

  function checkWinner(player) {

    if ( $('.top').children(player).length === 3 ) {
      popUp();
      }
    else if ( $('.middle').children(player).length === 3 ) {
      popUp();
      }
    else if ( $('.bottom').children(player).length === 3 ) {
      popUp();
      }
    else if ( $('.tictactoe').find('.left' + player).length === 3 ) {
      popUp();
      }
    else if ( $('.tictactoe').find('.center' + player).length === 3 ) {
      popUp();
      }
    else if ( $('.tictactoe').find('.right' + player).length === 3 ) {
      popUp();
      }
    else if ( $('.top .left').is(player) && $('.middle .center').is(player) && $('.bottom .right').is(player) ) {
      popUp();
      }
    else if ( $('.bottom .left').is(player) && $('.middle .center').is(player) && $('.top .right').is(player) ) {
      popUp();
      }
    else if ( $('.tictactoe').find('.x').length + $('.tictactoe').find('.o').length === 9 ) {
      popUp();
    }
  }


});
