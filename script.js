//logoの表示
$(window).on('load',function(){
  $("#splash").delay(2000).fadeOut('slow');
  $("#splash_logo").delay(1700).fadeOut('slow');
});

// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime(){

  //ふわっと動くきっかけのクラス名と動きのクラス名の設定
  $('.fadeUpTrigger').each(function(){ //fadeInUpTriggerというクラス名が
  　　var elemPos = $(this).offset().top-10; //要素より、50px上の
  　　var scroll = $(window).scrollTop();
  　　var windowHeight = $(window).height();
  　　if (scroll >= elemPos - windowHeight){
  　　$(this).addClass('fadeUp');
  　　// 画面内に入ったらfadeInというクラス名を追記
  　　}else{
  　　　$(this).removeClass('fadeUp');
  　　// 画面外に出たらfadeInというクラス名を外す
  　　}
  　　});
  
  //関数でまとめることでこの後に違う動きを追加することが出来ます
  $('.fadeDownTrigger').each(function(){ //fadeInDownTriggerというクラス名が
  　　var elemPos = $(this).offset().top-50; //要素より、50px上の
  　　var scroll = $(window).scrollTop();
  　　var windowHeight = $(window).height();
  　　if (scroll >= elemPos - windowHeight){
  　　$(this).addClass('fadeDown');
  　　// 画面内に入ったらfadeDownというクラス名を追記
  　　}else{
  　　　$(this).removeClass('fadeDown');
  　　// 画面外に出たらfadeDownというクラス名を外す
  　　}
  　　});
  
  
  }//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定
  
  // 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function (){
      fadeAnime();/* アニメーション用の関数を呼ぶ*/
    });// ここまで画面をスクロールをしたら動かしたい場合の記述
  
    // 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


// Hamburger Menu 
document.querySelector('.hamburger').addEventListener('click',function(){
  this.classList.toggle('active');
  document.querySelector('.slide-menu').classList.toggle('active');
  document.body.classList.toggle("hidden");
})

  //スクロールした際の動きを関数でまとめる
  function PageTopAnime() {

    var scroll = $(window).scrollTop(); //スクロール値を取得
    if (scroll >= 200){//200pxスクロールしたら
      $('#page-top').removeClass('DownMove');		// DownMoveというクラス名を除去して
      $('#page-top').addClass('UpMove');			// UpMoveというクラス名を追加して出現
    }else{//それ以外は
      if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名が既に付与されていたら
        $('#page-top').removeClass('UpMove');	//  UpMoveというクラス名を除去し
        $('#page-top').addClass('DownMove');	// DownMoveというクラス名を追加して非表示
      }
    }
    
    var wH = window.innerHeight; //画面の高さを取得
    var footerPos =  $('#footer').offset().top; //footerの位置を取得
    if(scroll+wH >= (footerPos+10)) {
      var pos = (scroll+wH) - footerPos+10 //スクロールの値＋画面の高さからfooterの位置＋10pxを引いた場所を取得し
      $('#page-top').css('bottom',pos);	//#page-topに上記の値をCSSのbottomに直接指定してフッター手前で止まるようにする
    }else{//それ以外は
      if($('#page-top').hasClass('UpMove')){//UpMoveというクラス名がついていたら
        $('#page-top').css('bottom','10px');// 下から10pxの位置にページリンクを指定
      }
    }
  }
  
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
  });
  
  
  // #page-topをクリックした際の設定
  $('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0//ページトップまでスクロール
    }, 500);//ページトップスクロールの速さ。数字が大きいほど遅くなる
    return false;//リンク自体の無効化
  });


  //アコーディオンパネル//

  "use strict";

  const accordionItem = document.getElementsByClassName("accordion__item");
  const accordionBtn = document.getElementsByClassName("accordion__head");

  for(let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click",function(){
      accordionItem[i].classList.toggle("active");
    });
  }
