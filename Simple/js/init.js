$(document).ready(function(){

     /* Navigation Arrow */
    
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
    
    /* Fix Bootstrap Issue with Collapse Menu for One Page sites */
    
    $('#navbar ul li a').click(function(){
        $('#navbar').removeClass('show');
    });

    
});