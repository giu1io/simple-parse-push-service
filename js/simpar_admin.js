jQuery(document).ready( function($) {
	/*
	 * Variables
	 * ====================== */
    var $matchContainer    = $('#simpar_matchSelectorContainer');
    var $matchDivMain = $('#simpar_matchSelectorDiv');
    var $addButton = $('#simpar_addCategory');
    var $delButton = $('.simpar_delCategory');


	/*
	 * Initializations
	 * ====================== */
    


	/*
	 * Functionality
	 * ====================== */
    $addButton.click(function(event) {  
        var clonedDiv=$matchDivMain.clone();
        clonedDiv.removeAttr('id');
		clonedDiv.find('.simpar_matchSelectorText').val("");
        clonedDiv.appendTo($matchContainer);
    });
    
    $delButton.live("click",function(event) {  
        $(this).closest("tr").remove();
    });

});