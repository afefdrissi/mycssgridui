$('#check-all').change(function(){

if ($(this).prop('checked')){
    $('.checkbox-for-li').prop('checked', true);
    kito=$('.checkbox-for-li').parent().addClass("checked").length;

}
    else{
    $('.checkbox-for-li').parent().removeClass("checked");
    $('.checkbox-for-li').prop('checked', false);
    }
    if(kito>0){
        $(".kito").text(kito+' selected orders. ');
    }
    if(kito==0){
        $(".kito").contents().remove();
    }

    console.log(kito);
}
);
$("aside>ul>li").click(function(){
    $(this).toggleClass("active");
});
for (var i=0;i<20;i++){
    $(".list>ul").append('<li><input type="checkbox" class="checkbox-for-li" name="" id="">'+
    '<span> Product'+i+'</span><span>Qty</span>'+
    '<span>Unit</span><span>Price</span><span>total</span>'+
    '<span class="delete"></span></li>');
}
$('.delete').click(function(){
   confirm('are you sure?');
});
///order oncheck/uncheck
var kito=0;
    $(".checkbox-for-li").change(function(){
            
            if ($(this).prop( "checked" )){
                kito+=1;

            }
            else{
                kito-=1;
            }
            $('.kito').text(kito+" selected orders.");
            $(this).parent().toggleClass("checked");
            console.log(kito);
        }

    );
        
        
