$(function(){
    //Types. Not Speech Recognition.
    $("#listen").change(function (){
	location.href="#jumbotron";
        var text = $(this).val();
        console.log("Typed=>"+text);
        $(this).val("");
        $.get("http://shinzan.human.waseda.ac.jp:8091/chat/" + text,
              function(reply){
                  $("#chatlog").text("...");//yet
                  setTimeout(function(){
                      $("#chatlog").text(reply).css("color","Black");
                  },100);
                  return false;
              }).fail(function(){
                  $("#chatlog").text("[ ネットワークに接続できていません]").css("color","RED");
              });
    }).focus(function(){
	//SpeechRecognition.
        var text = $(this).val();
	if(text === ''){
	}else{
	    console.log("Recognized=>"+text);
	}
	$(this).val('');
    }).blur(function(){
        if($(this).val() == ''){
            //$(this).val("ここに文章を入力してね");
	}
    });
});

