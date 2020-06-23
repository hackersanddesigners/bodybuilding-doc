var to;

const init = function(){
    pageScroll();

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

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});



/**
 * Kick it off
 */
init();