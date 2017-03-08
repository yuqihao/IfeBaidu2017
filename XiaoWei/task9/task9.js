$(function(){
	$("#nav ul li").click(
		function(){
			if ($(this).find('ul li:eq(0)').is(":hidden")) 
			{$(this).find('ul li').slideDown();
			$('#nav ul li ul li ul').hide()}
			else
			$(this).find('ul li').slideUp();
			});


	$("#nav ul li ul li").mouseenter(function() {
		
		$(this).find('p:first').css('color', '#FFF');
		$(this).find('img:eq(0)').attr('src', 'img/downLogo.png');
		$(this).find('img:eq(1)').attr('src', 'img/lightFile.png');
		if(!$(this).find('ul').is(":animated"))
		$(this).find('ul').slideDown();
		
			


	}).mouseleave(function() {
		
		$(this).find('p').css('color', '#6e8095');
		$(this).find('img:eq(0)').attr('src', 'img/rightLogo.png');
		$(this).find('img:eq(1)').attr('src', 'img/greyFile.png');
		if(!$(this).find('ul').is(":animated")　)
		$(this).find('ul').slideUp();

	});


	$("#nav ul li ul li ul li").mouseenter(function() {
		
		$(this).find('p:first').css('color', '#FFF');
		$(this).find('img:eq(0)').attr('src', 'img/lightDoc.png');
		
		
	}).mouseleave(function() {
		
		$(this).find('p').css('color', '#6e8095');
			$(this).find('img:eq(0)').attr('src', 'img/greyDoc.png');
		
	});
});
