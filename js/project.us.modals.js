$(document).ready(function() {
  	
    // $('.modal-body').jScrollPane();
  $('.dropdown-toggle').dropdown();
  $('.chzn-select').chosen();
  
  /*
  $('#summary').editable({
  	'state': 'preview',
  });
  $('.preview-or-edit').on('edit', function() {
  	// test
  });
  */
  
	$('.modal').on('shown', function() {
		
			$('.scrollable').jScrollPane({
		    horizontalGutter:5,
		    verticalGutter:5,
		    'showArrows': false
			});
			
			$('.jspDrag').hide();
			$('.jspScrollable').mouseenter(function(){
		    $(this).find('.jspDrag').stop(true, true).fadeIn('slow');
			});
				$('.jspScrollable').mouseover(function(){
		    $(this).find('.jspDrag').stop(true, true).fadeIn('slow');
			});
			$('.jspScrollable').mouseleave(function(){
		    $(this).find('.jspDrag').stop(true, true).fadeOut('slow');
			});
			
			$('#bird').popover({placement: 'top'});
			$('#giraffe').popover({placement: 'top'});
			$('#cow').popover({placement: 'top'});
			$('#hippo').popover({placement: 'top'});
			
	});

	/*
		$('.modal-body').jScrollPane({
	    horizontalGutter:5,
	    verticalGutter:5,
	    'showArrows': false
		});
		
		
		$('.jspDrag').hide();
		$('.jspScrollable').mouseenter(function(){
	    $(this).find('.jspDrag').stop(true, true).fadeIn('slow');
		});
		$('.jspScrollable').mouseleave(function(){
	    $(this).find('.jspDrag').stop(true, true).fadeOut('slow');
		});
		*/
});