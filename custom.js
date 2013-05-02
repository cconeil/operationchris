$(document).ready(function() {
	$('#enter-name').focus(); // put the cursor in the text box

	// hide all other divs
	$('#two').hide();
	$('#three-bio').hide();
	$('#three-portfolio').hide();
	$('#back-button').hide();
	$('#gravity-button').hide();
	$('#ios-description').hide();
	$('#android-description').hide();
	$('#python-description').hide();
	$('#three-contact').hide();
	$('#intro').delay(200).animate({'opacity':'1'}, 2000);

	// handle input of name
	var username;
	$(document).keypress(function(e) {
    if(e.which == 13) {
        username = $('#enter-name').val();
        $('#enter-name').val('');
        $('#one').fadeOut('slow', function() {
        	$('#greeting-username').text(username + ',');
        	$('#two').fadeIn('slow')
        });
    }
	});

	var cur; // keep track of which screen that we are on

	// handle click on bio
	$('#bio').click(function() {
		$('#two').fadeOut('slow', function() {
			$('#back-button').fadeIn('slow');
			$('#three-bio').fadeIn('slow');
			$('#bio-username').text(username + ',');
			cur = '#three-bio';
		});
	});

	// handle click on porfolio
	$('#portfolio').click(function() {
		$('#two').fadeOut('slow', function() {
			$('#back-button').fadeIn('slow');
			$('#three-portfolio').fadeIn('slow');
			cur = '#three-portfolio';
		});
	});

	// handle click on contact
	$('#contact').click(function() {
		$('#two').fadeOut('slow', function() {
			$('#back-button').fadeIn('slow');
			//$('#gravity-button').fadeIn('slow');
			$('#three-contact').fadeIn('slow');
			cur = '#three-contact';
		});
	});

	// handle click on apple
	var apple = false;
	var android = false;
	var python = false;
	var used = false;

	// handle click on apple
	$('#ios').click(function() {
		if (!apple && !used) {
			$('#three-portfolio').animate({top: '-=40%'}, 1000);
			$('#ios-description').slideToggle('slow');
			$('#ios').fadeTo(1,1);
			used = true;
			apple = true;
		} else if (used && android) {
			$('#android-description').hide();
			$('#android').fadeTo(1,.5);
			$('#ios-description').show();
			$('#ios').fadeTo(1,1);
			android = false;
			apple = true;
		} else if (used && python) {
			$('#python-description').hide();
			$('#python').fadeTo(1,.5);
			$('#ios-description').show();
			$('#ios').fadeTo(1,1);
			python = false;
			apple = true;
		} else if (apple && used) {
			$('#ios-description').slideToggle('slow');
			$('#three-portfolio').animate({top: '+=40%'}, 1000);
			$('#ios').fadeTo(1,.5);
			used = false;
			apple = false;
		}
	});

	// handle click on android
	$('#android').click(function() {
		if (!android && !used) {
			$('#three-portfolio').animate({top: '-=40%'}, 1000);
			$('#android-description').slideToggle('slow');
			$('#android').fadeTo(1,1);
			used = true;
			android = true;
		} else if (apple && used) {
			$('#ios-description').hide();
			$('#ios').fadeTo(1,.5);
			$('#android-description').show();
			$('#android').fadeTo(1,1);
			apple = false;
			android = true;
		} else if (python && used) {
			$('#python-description').hide();
			$('#python').fadeTo(1,.5);
			$('#android-description').show();
			$('#android').fadeTo(1,1);
			android = true;
			python = false;
		} else if (android && used) {
			$('#android-description').slideToggle('slow');
			$('#three-portfolio').animate({top: '+=40%'}, 1000);
			$('#android').fadeTo(1,.5);
			used = false;
			android = false;
		}
	});

	// handle click on python
	$('#python').click(function() {
		if (!python && !used) {
			$('#three-portfolio').animate({top: '-=40%'}, 1000);
			$('#python-description').slideToggle('slow');
			$('#python').fadeTo(1,1);
			used = true;
			python = true;
		} else if (android && used) {
			$('#android-description').hide();
			$('#android').fadeTo(1,.5);
			$('#python-description').show();
			$('#python').fadeTo(1,1);
			python = true;
			android = false;
		} else if (apple && used) {
			$('#ios-description').hide();
			$('#ios').fadeTo(1,.5);
			$('#python-description').show();
			$('#python').fadeTo(1,1);
			python = true;
			apple = false;
		} else if (python && used) {
			$('#python-description').slideToggle('slow');
			$('#three-portfolio').animate({top: '+=40%'}, 1000);
			$('#python').fadeTo(1,.5);
			used = false;
			python = false;
		}
	});

	// handle a gravity button click
	$('#gravity-button').click(function() {
		var script = document.createElement( 'script' );
		script.type = 'text/javascript';
		script.src = "http://gravityscript.googlecode.com/svn/trunk/gravityscript-autorun.js";
		$(document).append(script);		
	});

	// handle back button click
	$('#back-button').click(function() {
		$('#back-button').fadeOut('slow');
		$('#gravity-button').fadeOut();
		$(cur).fadeOut('slow', function() {
			$('#greeting-username').text(username + ',');
    	$('#two').fadeIn('slow')
		});
	});


});