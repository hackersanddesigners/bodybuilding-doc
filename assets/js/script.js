var to;

const init = function(){
    // pageScroll();

    document.addEventListener( 'click', function () {
        if( to ) {
            clearTimeout( to );
            to = null;
        } else {
            pageScroll();
        }
    });
    
}

const pageScroll = function () {
    window.scrollBy(0,1);
    to = setTimeout(pageScroll,50);
}





/**
 * Kick it off
 */
init();