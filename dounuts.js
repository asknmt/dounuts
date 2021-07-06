/*スクロールでヘッダーの背景色変更*/
jQuery(window).on('scroll', function () {
 
  if ($('header').height() < $(this).scrollTop()) { 
 $('header').addClass('change-color');
}else {
  $('header').removeClass('change-color'); 
} });

  /*スライドイン*/
  $(function(){
    $(window).on('load scroll',function (){
      $('.message-center').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height){
          //クラスを付与
          $(this).addClass('active');
        }
      });
    });
  });
  
  $(function(){
    $(window).on('load scroll',function (){
      $('.item').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height){
          //クラスを付与
          $(this).addClass('active');
        }
      });
    });
  });
  $(function(){
    $(window).on('load scroll',function (){
      $('.sns').each(function(){
        //ターゲットの位置を取得
        var target = $(this).offset().top;
        //スクロール量を取得
        var scroll = $(window).scrollTop();
        //ウィンドウの高さを取得
        var height = $(window).height();
        //ターゲットまでスクロールするとフェードインする
        if (scroll > target - height){
          //クラスを付与
          $(this).addClass('active');
        }
      });
    });
  });
