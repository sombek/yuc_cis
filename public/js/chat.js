// fix footer position to the bottom
$(document).ready( function() {
  $('#footer1').css('margin-top',
    $(document).height()
    - ( $('#header').height() + $('#content').height() )
    - $('#footer').height()
  );
});
// to prevent scrolling when hover on top of text box
$( '.scrollable' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
  var e0 = e.originalEvent,
      delta = e0.wheelDelta || -e0.detail;

  this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
  e.preventDefault();
});
