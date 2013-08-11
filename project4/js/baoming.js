


function count(url,src1,src2) {
	window.location.reload(url)
	  showJian1('img/jiantou.png',src2);
	  showTu1();
	  } 
function showTu1(){
     $("#register1").css("display","block");
	  $("#register2").css("display","none");
	 $("#manager1").css("display","none");
	  $("#manager2").css("display","block");
	  $("#information1").css("display","none");
	  $("#information2").css("display","block");
   }
  
     function showTu2(){
     $("#register1").css("display","none");
	 $("#register2").css("display","block");
	 $("#manager1").css("display","block");
	 $("#manager2").css("display","none");
	 $("#information1").css("display","none");
	 $("#information2").css("display","block");
   }
 
      function showTu3(){
     $("#register1").css("display","none");
	 $("#register2").css("display","block");
	 $("#manager1").css("display","none");
	 $("#manager2").css("display","block");
	 $("#information1").css("display","block");
	 $("#information2").css("display","none");
   }
      function showJian1(src1,src2){

	   document.getElementById("jiantou1").src=src1;
	   document.getElementById("jiantou2").src=src2;
	   document.getElementById("jiantou3").src=src2;
	   document.getElementById("jiantou4").src=src2;
	   }
	    function showJian2(src1,src2){
	   document.getElementById("jiantou2").src=src1;
	     document.getElementById("jiantou1").src=src2;
	   document.getElementById("jiantou3").src=src2;
	   document.getElementById("jiantou4").src=src2;
	   }
	    function showJian3(src1,src2){
	   document.getElementById("jiantou3").src=src1;
	    document.getElementById("jiantou1").src=src2;
	    document.getElementById("jiantou2").src=src2;	  
	   document.getElementById("jiantou4").src=src2;
	   }
	    function showJian4(src1,src2){
	   document.getElementById("jiantou4").src=src1;	
	    document.getElementById("jiantou1").src=src2;
	    document.getElementById("jiantou2").src=src2;	  
         document.getElementById("jiantou3").src=src2;
	   }
      function hideJian4(src){
	    document.getElementById("jiantou4").src=src;
	   }
	  function change1(){
		 $("#iterm1").addClass("touming");
		   }
      function start1(){
		 $("#iterm1").removeClass("touming");
		   }
		    function change2(){
		 $("#iterm2").addClass("touming");
		   }
      function start2(){
		 $("#iterm2").removeClass("touming");
		   }
		    function change3(){
		 $("#iterm3").addClass("touming");
		   }
      function start3(){
		 $("#iterm3").removeClass("touming");
		   }
	$(document).ready(function(){
  $("#zhankai1").click(function(){
	   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai1").css("display","none");
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi1").css("display","block");
		   for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide1").css("display","block");
	 	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
    
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty1").css("display","block");
  });
  	  $("#xinxi1 table").click(function(){
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
		  });
  $("#show1").click(function(){
	   $("#gengduo1").css("display","none");
	   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai1").css("display","none");
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi1").css("display","block");
		   for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide1").css("display","block");
		   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty1").css("display","block");
  });
 
  $("#hide1").click(function(){
	      for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  });
  $("#guanbi1").click(function(){
	    for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });
  
  
    $("#zhankai2").click(function(){
	   $("#gengduo2").css("display","none");
	       for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai2").css("display","none");
   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi2").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide2").css("display","block");
	   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo2").css("display","block");
	      for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty2").css("display","block");
  });
  $("#xinxi2 table").click(function(){
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
		  });
  $("#guanbi2").click(function(){
   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo2").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	   for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
	   }
	    	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	 for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });

 $("#show2").click(function(){
	   $("#gengduo2").css("display","none");
	       for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai2").css("display","none");
   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi2").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide2").css("display","block");
	   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo2").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty2").css("display","block"); 
  });
  $("#hide2").click(function(){
   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo2").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	   for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
	   }
	    	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });
  
  
   $("#zhankai3").click(function(){
	   $("#gengduo3").css("display","none");
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai3").css("display","none");
	   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi3").css("display","block");
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide3").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo3").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty3").css("display","block");
  });
  $("#xinxi3 table").click(function(){
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
		  });
  $("#guanbi3").click(function(){
	   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo3").css("display","block");
	    for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
			
		   }
		      for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });
  
  
   $("#show3").click(function(){
	   $("#gengduo3").css("display","none");
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai3").css("display","none");
	   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi3").css("display","block");
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide3").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo3").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty3").css("display","block");
  });
  $("#hide3").click(function(){
	   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo3").css("display","block");
	    for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		      for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });
  
  
     $("#zhankai4").click(function(){
	   $("#gengduo4").css("display","none");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai4").css("display","none");
   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi4").css("display","block");
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide4").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo4").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty4").css("display","block");
  });
  $("#xinxi4 table").click(function(){
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
		  });
  $("#guanbi4").click(function(){
	   $("#guanbi4").css("display","none");
	     for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		      for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });
  
  
   $("#show4").click(function(){
	   $("#gengduo4").css("display","none");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai4").css("display","none");
   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi4").css("display","block");
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide4").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo4").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty4").css("display","block");
  });
  $("#hide4").click(function(){
	   $("#guanbi4").css("display","none");
	     for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		      for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  }); 
  
  
     $("#zhankai5").click(function(){
	   $("#gengduo5").css("display","none");
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai5").css("display","none");
	   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi5").css("display","block");
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide5").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo5").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty5").css("display","block");
  });
  $("#xinxi5 table").click(function(){
		   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo1").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		   	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
		  });
  $("#guanbi5").click(function(){
	     for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo5").css("display","block");
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
		      for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  });
  
   $("#show5").click(function(){
	   $("#gengduo5").css("display","none");
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
	    $("#zhankai5").css("display","none");
	   for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	    $("#guanbi5").css("display","block");
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
	  $("#hide5").css("display","block");
	     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
	  $("#gengduo5").css("display","block");
	   for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
	  $("#empty5").css("display","block");
  });
  $("#hide5").click(function(){
	     for(var i=1;i<6;i++){
		    $("#guanbi"+i).css("display","none");
		   }
	  $("#gengduo5").css("display","block");
   for(var i=1;i<6;i++){
		    $("#zhankai"+i).css("display","block");
		   }
  for(var i=1;i<6;i++){
		    $("#hide"+i).css("display","none");
		   }
  });
     for(var i=1;i<6;i++){
		    $("#gengduo"+i).css("display","none");
		   }
		    for(var i=1;i<6;i++){
		    $("#empty"+i).css("display","none");
		   }
  
});

