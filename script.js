var win = $(window);

var stopFixedScroll = function( slideNum ){

  var id = "slide" + slideNum;
  var mult = slideNum / (slideNum + 1);

  win.ready( function(){ //wait 'til the DOM is ready

    var $slide = $('.slide' + slideNum ); //get the selectors
    var $container = $('.container' + slideNum );
   
    win.scroll( function() { //when the user scrolls do this stuff
      
      var wrapBottom = ( $container.outerHeight(true) ) * mult; //find out the height of the container, subtract the size of the slide
      var scrollPos = win.scrollTop();

      if ( scrollPos > wrapBottom ){ //if the window is scrolled past the bottom of the container...
          if( document.getElementById( id ).hasAttribute('style') ){
              $slide.removeAttr( 'style' ); //...remove the style attribute on the slide if there is one...
          }
          $slide.css( { position: 'absolute', 
                                            top: wrapBottom + 'px'
                                          }); //then add this one with absolute positioning
      }
      else { //if it's not past the bottom of the container (like if the user is scrolling back up)...
          if( document.getElementById( id ).hasAttribute('style') ){
              $slide.removeAttr( 'style' );//...remove the style attribute on the slide if there is one...
          }
          $slide.css( { position: 'fixed', 'margin-top': '0px'}); //then add this one with fixed positioning
      }
    });
  });
};

stopFixedScroll(1);
stopFixedScroll(2);