(function (){
	var names=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for(var i=0;i<names.length;i++)
	{
		var firstLetter = names[i].charAt(0);
		if(firstLetter=='j' || firstLetter=='J')
		{
			byespeaker.speak(names[i]);
		}
		else
		{
			hellospeaker.speak(names[i]);
		}
	}
})();