(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
  
  
   $('.dropdown-trigger').dropdown({
	 alignment: 'right',
	 hover:'true',
	 onOpenStart:function(){
		 $('body').append('<div class="overlay-dark"></div>');
		 },
	onCloseEnd:function(){
		 $('.overlay-dark').remove();
		 }
	 });
  
})(jQuery); // end of jQuery name space
