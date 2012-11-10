$(function () {  
    $(document).on('click','#users .pagination li:not(.disabled) a',function (e) {  
        $.get(this.href, null, null, 'script');  
        e.preventDefault();
    });  
});  