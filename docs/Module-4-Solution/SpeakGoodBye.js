(function (window) {
  	
  	var byeSpeaker = {
  		speak: function(name) {
  			var speakWord = "Good Bye ";
  			console.log(speakWord + name);
  		}
  	}
  	
  	window.byeSpeaker = byeSpeaker

})(window);