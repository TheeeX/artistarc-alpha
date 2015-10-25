/*-----------------------------------------*/

      $(document).ready(function() {
      Materialize.toast('<span>5 Notifications</span><a href="#">&nbsp; READ</a>', 4000, 'rounded') ;
      });
      

$(document).ready(function() {
    $('#form_sign_up').submit(function(){
         var data = $(this).serialize();
//          alert (data);
        $.ajax({
	        url  : 'assets/php/_register.php',
	        type : 'POST',
	        data:data,
	        
	        success: function() {
	                //display message back to user here
	                //$('#result-f').html(data);
			alert ('sucess!');
		    }
	    });
	      return false;
          });
});

/*-----------------Sign In------------------*/
/*
$(document).ready(function() {
    $('#form_sign_in').submit(function(){
         var data = $(this).serialize();
         alert (data);
        $.ajax({
	        url  : 'assets/php/_signin.php',
	        type : 'POST',
	        data:data,
	        success: function() {
	                //display message back to user here
	                //$('#result-f').html(data);
			alert ('sucess!');
		    }
	    });
	      return false;
          });
});
*/
/*--------------- /Sign In------------------*/

/*---------------Post Update----------------*/

$(document).ready(function() {
    $('#form_update_post').submit(function(){
         var data = $(this).serialize();
         alert (data);
        $.ajax({
	        url  : 'assets/php/_updatestatus.php',
	        type : 'POST',
	        data:data,
	        success: function() {
	                //display message back to user here
	                //$('#result-f').html(data);
			alert ('sucess!');
		    }
	    });
	      return false;
          });
});

/*------------ / Post Update -------------*/


/*-------------Create Troop---------------*/

$(document).ready(function() {
    $('#form_create_troupe').submit(function(){
         var data = $(this).serialize();
         alert (data);
        $.ajax({
	        url  : 'assets/php/_createtroupe.php',
	        type : 'POST',
	        data:data,
	        success: function() {
	                //display message back to user here
	                //$('#result-f').html(data);
			alert ('sucess!');
		    }
	    });
	      return false;
          });
    
    $('#form_create_troupe').submit(function(){
         var data = $(this).serialize();
         alert (data);
        $.ajax({
	        url  : 'assets/php/_createtroupe.php',
	        type : 'POST',
	        data:data,
	        success: function() {
	                //display message back to user here
	                //$('#result-f').html(data);
			alert ('sucess!');
		    }
	    });
	      return false;
          });
});


/*----------- / Create Troop -------------*/

/*------------- Ad Comment ---------------*/

    $('#comment-mar').click(function(){
         $('#no-comment').toggle();
});

    $('#form_add_comment').submit(function(){
         var data = $(this).serialize();
         alert (data);
        $.ajax({
	        url  : 'assets/php/_addcomment.php',
	        type : 'POST',
	        data:data,
	        success: function() {
	                //display message back to user here
	                //$('#result-f').html(data);
			alert ('sucess!');
		    }
	    });
	      return false;
          });

/*------------/ Ad Comment ---------------*/
$(window).scroll(function() {
    if ($(document).scrollTop() < 50) {
        $('.navbar-top').removeClass('artist-header_shrink');
    }
});


$('#body').bind('mousewheel DOMMouseScroll', function (event) {           
     if (event.originalEvent.wheelDelta/ 120 > 0) {
          //up
	  // alert('up');
// 	  $('.navbar-top').removeClass('artist-header_shrink');
     }
     else {
          //down
	  // alert('down');
	     if ($(document).scrollTop() > 50) {
	         $('.navbar-top').addClass('artist-header_shrink');
	     }
     }
});

$(document).ready(function() {
 	if ($(document).scrollTop() > 50) {
	   $('.navbar-top').addClass('artist-header_shrink');
	}
});
    