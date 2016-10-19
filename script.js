var stopFixedScroll = function( slideNum ){
	
$(window).scroll( function() {
  var id = "slide" + slideNum;
  var className = '.slide' + slideNum;
  var container = '.container' + slideNum;

  var mult = slideNum / (slideNum + 1);
  var wrapBottom = ( $(container).position().top + $(container).outerHeight(true) ) * mult;
  var scrollPos = $(window).scrollTop();

  if ( scrollPos > wrapBottom ){
      if( document.getElementById( id ).hasAttribute('style') ){
          $( className ).removeAttr( 'style' );
      }
      $( className ).css( { position: 'absolute', 
                                        top: wrapBottom + 'px'
                                      });
  }
  else {
      if( document.getElementById( id ).hasAttribute('style') ){
          $( className ).removeAttr( 'style' );
      }
      $( className ).css( { position: 'fixed', 'margin-top': '0px'});
  }
});
	
};

stopFixedScroll(1);
stopFixedScroll(2);