

var Agar = (function() {
	gameIsOver = false;
	return {
	tryStart: function()
		{
			//alert('SHOW PREROLL');
			//Agar.game_start();
			window.ads.show();
		},
	game_start: function() {
		Agar.gameIsOver = false;
		var nick = "AgarPaper.io";
		var cookie_skin = Cookies.get('skin');
		var cookie_name = Cookies.get('agarpaper_username');
		//about_open();
		if($('#paperio_p1').val())
		{
			nick = $('#paperio_p1').val();
		}
		else if (cookie_name) {
			nick = cookie_name;
		} 
		else {
			nick = 'AgarPaper.io';
		}
		$('#base').hide();
		startGame(nick);//nick); 
	},
	getToMain: function() {
		window.location.replace("https://agarpaper.io");
	},
	showGameOver: function(seconds, topslot, topscore)
	{
		if(Agar.gameIsOver)
		return;
		
		Agar.gameIsOver = true;
		//about_close();
		$('#base').show();
		var ts = +Cookies.get('agar_topscore');
		var bestScore = ts;
		if (topscore > bestScore) { bestScore = topscore; new_top = true; } else { new_top = false; }
		Cookies.set('agar_topscore', topscore, { expires: 30 });
		
		if(topslot == 'Infinity'||(topslot == Number.POSITIVE_INFINITY || topslot == Number.NEGATIVE_INFINITY))
		{
			topslot = 0;
		}
		
		$('#game_over').empty();
		var  playtime_m = Math.floor(seconds / 60);
		var  playtime_s = seconds;
		if (playtime_m < 10) { playtime_m = '0'+playtime_m; }
		playtime_s = Math.floor(seconds-playtime_m*60);
		if (playtime_s < 10) { playtime_s = '0'+playtime_s; }
		
  // $('<div class="gameover"></div>').appendTo('#game_over').css({'margin-top':-1000}).animate({'margin-top':-260},400,'easeOutBack');
		  $('<div class="gameover"></div>').appendTo('#game_over');
		  $('<div class="go_sc">YOUR SCORE:</div>').appendTo('#game_over').hide().css({'margin-left':-1000}).delay(500).show(1).animate({'margin-left':-148},200);
		  $('<div class="da_sc">'+topscore+'</div>').appendTo('#game_over').hide().css({'zoom':10}).delay(500).show(1).animate({'zoom':1},300);
		 
		  if (new_top) {
			$('<div class="go_bs"><span>NEW </span>BEST SCORE:</div>').appendTo('#game_over').hide().css({'margin-left':-1000}).delay(1000).show(1).animate({'margin-left':-148},200);
		  } else {
			$('<div class="go_bs">BEST SCORE:</div>').appendTo('#game_over').hide().css({'margin-left':-1000}).delay(1000).show(1).animate({'margin-left':-148},200);
		  }
		  $('<div class="da_bs">'+topscore+'</div>').appendTo('#game_over').hide().css({'zoom':10}).delay(1000).show(1).animate({'zoom':1},300);
		  
		  $('<div class="go_pt">TIME PLAYED:</div>').appendTo('#game_over').hide().css({'margin-left':-1000}).delay(1500).show(1).animate({'margin-left':-148},200);
		  $('<div class="da_pt">'+playtime_m+':'+playtime_s+'</div>').appendTo('#game_over').hide().css({'zoom':10}).delay(1500).show(1).animate({'zoom':1},300);

		  $('<div class="go_pk">BEST RATING:</div>').appendTo('#game_over').hide().css({'margin-left':-1000}).delay(2000).show(1).animate({'margin-left':-148},200);
		  $('<div class="da_pk">'+topslot+'</div>').appendTo('#game_over').hide().css({'zoom':10}).delay(2000).show(1).animate({'zoom':1},300);
		  
			$('<div class="button share" style="display: none; width: 160px;" onclick="window.open(\'https://www.facebook.com/sharer/sharer.php?u=http://paper-io.com/sharescore/'+topscore+'/'+playtime_m+':'+playtime_s+'\',\'sharer\',\'toolbar=0,status=0,width=580,height=325\');">SHARE</div><div class="button play" style="display: none" onclick="Agar.tryStart();">PLAY AGAIN</div>').appendTo('#game_over').hide();

		  
		
		  //$('#bottom').css({'top':450});
		
		  $('#pre_game').hide();
		  $('#allUnder').show();
		  $('#game_over').show();
		  $('#dark').hide();
		  
		  $('#left, #right, #bottom, #share, #links').show();
		  
		  //$('#the_game').fadeOut(2200, function() {
		  $('#base #game_over .button.play').html("PLAY AGAIN");
		  $('#base #pre_game .button.play').css({'right':-1000}).show().animate({'right':0}, 300);
		 
			$('#base #game_over .button.play').css({'margin-left':1118}).show().animate({'margin-left':-28}, 300);
			$('#base #game_over .button.share').css({'margin-left':-1118}).show().animate({'margin-left':-208}, 300);
		  
		  $('#base #game_over .button.mode').css({'margin-left':-1118}).show().animate({'margin-left':-158}, 300);
		//});
	}//end showGameOver
	
	}//end return
	
})();