
// 그래픽카드
$('.btn1').click(function(e) { 
  jQuery( ".card" ).animate({right : 0}, 300 ); 

}); 
$('.card').mouseleave(function(e) {
  jQuery( ".card" ).animate({right: '-300px'}, 300 );
}); 


// 모니터
$('.btn2').click(function(e) { 
  jQuery( ".monitor" ).animate({right : 0}, 300 ); 
});
$('.monitor').mouseleave(function(e) {
  jQuery( ".monitor" ).animate({right: '-300px'}, 300 );
});


// 렘
$('.btn3').click(function(e) { 
  jQuery( ".rem" ).animate({right : 0}, 300 ); 
});  
$('.rem').mouseleave(function(e) {
  jQuery( ".rem" ).animate({right: '-300px'}, 300 );
}); 


// 파워
$('.btn4').click(function(e) { 
  jQuery( ".power" ).animate({right : 0}, 300 ); 
});
$('.power').mouseleave(function(e) {
  jQuery( ".power" ).animate({right: '-300px'}, 300 );
});


// cpu
$('.btn5').click(function(e) { 
  jQuery( ".cpu" ).animate({right : 0}, 300 ); 
});  
$('.cpu').mouseleave(function(e) {
  jQuery( ".cpu" ).animate({right: '-300px'}, 300 );
}); 

// 메인보드
$('.btn6').click(function(e) { 
  jQuery( ".board" ).animate({right : 0}, 300 ); 
}); 
$('.board').mouseleave(function(e) {
  jQuery( ".board" ).animate({right: '-300px'}, 300 );
}); 

// 기타
$('.btn7').click(function(e) { 
  jQuery( ".gita" ).animate({right : 0}, 300 ); 
});
$('.gita').mouseleave(function(e) {
  jQuery( ".gita" ).animate({right: '-300px'}, 300 );
});

// 견적 
$('.btn8').click(function(e) { 
  jQuery( ".inquire" ).animate({right : 0}, 300 ); 
});
$('.inquire').mouseleave(function(e) {
  jQuery( ".inquire" ).animate({right: '-300px'}, 300 );
});


$(".container div a").css("color", "black");
