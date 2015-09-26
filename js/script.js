// Nav animation 
$(document).ready(function(){ 

$('.element-nav').click( function() {
	$('.element-nav').removeClass("selection");
	$(this).addClass("selection");
});


var i,c;
// i=image, c=courant

 $('.slides li').first().stop(true,true).addClass('active').animate({opacity:1},500);
 $('.nav li a').click(function(){

 // La nav clickeé bullet/image = i
 i=$(this).attr('nav_id');

 // Le courant active image = c
 c=$('.slides li[class="active"]').attr('img_id');

 // remontre l'image précedente si la même image est clickée
 if(c==i)return false; 

 // Enlève la classe de l'image courante 
 $('li[img_id="'+c+'"]').css({'opacity':.8}).removeClass('active');
 $('li[img_id="'+i+'"]').animate({'opacity':1},400).addClass('active');

 // Change l'état du boutton en actif 
 $('li a[nav_id="'+c+'"]').removeClass('active');
 $('li a[nav_id="'+i+'"]').addClass('active');

 return false;
 });
});

