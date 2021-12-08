$(document).ready(function(){
    //TOP 버튼:메뉴 스크롤 부드럽게 움직이기
    $("#goTop").css("cursor", "pointer").click(function(
        ){$('body, html').animate({scrollTop:0}, 500);
        return false;
    });

    //스크롤시 top 버튼 show 및 상단 이동시 hide
    $(window).scroll(function(){        
        if($(this).scrollTop() > 0){
            $("#goTop").fadeIn("slow");
        }else{$("#goTop").fadeOut("slow");}
    });

    //COOK: 스크롤시, 상세보기 리뷰 고정
    var btnOffset = $(".detailBtn").offset();
    $(window).scroll(function(){
        if($(document).scrollTop() + 50 > btnOffset.top){
            $(".detailBtn").addClass("btnFixed");
        }else{$(".detailBtn").removeClass("btnFixed");}
    });
    //COOK: 상세보기 리뷰 클릭시 스크롤 이동
    $(".detailBtn>div>a").click(function(event){ event.preventDefault(); $('html,body').animate({scrollTop:$(this.hash).offset().top-100}, 1000); 
    });

    //COOK 담기/바로결제시 셀렉박스 및 닫기 버튼 노출, 닫기 클릭시 셀렉박스 숨기기, Top버튼 위치 조정
    $("#cooklnb>ul>li>a").click(function(){
        $(".selectQuan").fadeIn("fast");
        $(".selectXbox").fadeIn("fast");
        $("#goTop").css("bottom","150px");
        $("#cooklnb>ul>li>a").click(function(){
            if($(".selectQuan").css("display") == "block"){$("#wrap>#header>.center p>span>a>img").attr("src","../../img/cart2.png");}else{$("#wrap>#header>.center p>span>a>img").attr("src","../../img/cart.png");}
        });        
    });
    $(".selectXbox").click(function(){
        $(".selectQuan").fadeOut("fast");
        $(".selectXbox").fadeOut("fast");
        $("#goTop").css("bottom","90px");
    });
    $("#cooklnb>ul>li>a").click(function(){
        
    });
    

    //COOK 상세보기 +,- 클릭시 수량 변화 및 금액 변화
    // This button will increment the value
    $('[data-quantity="plus"]').click(function(e){
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If is not undefined
        if (!isNaN(currentVal)) {
            // Increment
            $('input[name='+fieldName+']').val(currentVal + 1);
            $('.price').html((currentVal+1)*6900+"원");
            $('.price2').html((currentVal+1)*31900+"원");
            //$(this).parent().parent().sibling().children(".price").html((currentVal+1)*6900+"원");
            //$(this).parent().parent().sibling().children(".price2").html((currentVal+1)*31900+"원");
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(0);
        }
    });
    // This button will decrement the value till 0
    $('[data-quantity="minus"]').click(function(e) {
        // Stop acting like a button
        e.preventDefault();
        // Get the field name
        fieldName = $(this).attr('data-field');
        // Get its current value
        var currentVal = parseInt($('input[name='+fieldName+']').val());
        // If it isn't undefined or its greater than 0
        if (!isNaN(currentVal) && currentVal > 1) {
            // Decrement one
            $('input[name='+fieldName+']').val(currentVal - 1);
            $('.price').html((currentVal -1)*6900+"원");
            $('.price2').html((currentVal-1)*31900+"원");
        } else {
            // Otherwise put a 0 there
            $('input[name='+fieldName+']').val(1);
            $('.price').html(6900+"원");
        }
    });

    /* PICK 휴지통 클릭시 빈페이지*/

    $("#pickList .menu").click(function(){
       $(this).parent().parent().hide();
       /* 목록에 있는 내용이 모두 display none일때 빈페이지 노출*/
       if($("#pickList>.center>div:first-of-type").css("display")=="none"&&$("#pickList>.center>div:nth-of-type(2)").css("display")=="none"){
           $("#pickList2").show();
        }
    });

    /*MY 로그인전 포인트/쿠폰/구매내역/리뷰 클릭시 로그인하세요 창노출 */
    $(".myMain>.myMenu>ul>li>a").click(function(){
        alert("로그인 후 이용해주세요 :)");
    });

});
/* COOK 북마크 */
$(function(){
    //북마크 on/off
    var toggle = 0;
    $("#cookLlist span>img, #cookDetail span>img").click(function(){
    if(toggle==0){
        $(this).attr("src","../../img/bookmark-on.png");
        toggle = 1;
        
    }else{
        $(this).attr("src","../../img/bookmark-off.png");
        toggle = 0;
    }
        //$(this).attr("src","img/icon02.png");
    });
});
