var str = "";
$.get('../json/list.json', function(msg) {
    console.log(msg);
}, 'json')