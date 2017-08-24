$('h3').click(function() {
    $('.xxk-bottom').eq($(this).index()).show().siblings().hide();

    // 不要放在同一个父级元素里面
})