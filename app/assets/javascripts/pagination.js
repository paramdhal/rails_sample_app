$(function () {  
    app.endlessPagination.init();
});

var app= {}

app.endlessPagination = (function(window,$){

    "use strict";

    return{
        init:init
    }

    var currentPage,totalPages;

    function init () {
        currentPage=1;
        totalPages = null;
        if($('[data-pagination]').length){
            $('.pagination').hide();
            scrollEvent();
        }   
    }
    

    function scrollEvent () {

        var href = $('.pagination .next a').attr('href');

        $(window).scroll(function(){
            if($(window).scrollTop() === $(document).height() - $(window).height()){
                getNextPage(href);
            }
        });
    }

    function setTotalPages (total) {
        totalPages = total;
    }

    function getNextPage (href) {
        currentPage++;
        
        if(totalPages === null || totalPages >= currentPage){
            $('[data-pagination-loading]').show();
            href = href.slice(0, - 1) ;
            href += currentPage;
            $.getJSON(href, null, function(resp){
                totalPages = resp.totalPages;
                appendContent(resp);
            }, 'script');
        }
    }

    function appendContent(resp){
        $('[data-pagination-loading]').hide();
        $(resp.content).hide().appendTo(resp.selector).fadeIn();
    }

})(window,jQuery);  