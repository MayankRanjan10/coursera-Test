(function (window){
	var byespeaker={};
	var speakWord="Goodbye";
	byespeaker.speak = function(name){
		console.log(speakWord+" "+name);
	}
	window.byespeaker=byespeaker;
})(window);