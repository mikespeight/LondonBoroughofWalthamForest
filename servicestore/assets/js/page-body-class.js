/**
 * Created by Mike on 19/08/2017.
 */



var pageBodyClass = function () {

    var pagename = window.location.pathname,
        pageNameArr,
        pageClass;

    if(pagename === '/') {
        pageClass = ' home-page';
    }
    else {

        pageNameArr = pagename.split(('/'));
        pagename = pageNameArr.pop();
        pageClass = ' ' + pagename;

    }


    document.querySelector('body').className += pageClass;

};


window.onload = function() {
    pageBodyClass();
};



