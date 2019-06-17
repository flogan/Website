$(document).ready(function(){
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });

    var $navlinks = $('#sidenav>li>a');
    var $sections = $($('section').get().reverse());
    var sectionIdTonavigationLink = {};
        $sections.each( function(){
            var id = $(this).attr('id');
            sectionIdTonavigationLink[ $(this).attr('id') ] = $('#sidenav> li > a[href=\\#' + $(this).attr('id') + ']');
    });
 
    $(window).scroll(function() {
        var position = $(this).scrollTop();
        $($sections.each(function() {
            var target = $(this).offset().top;
            if (position >= target - 10) {
                var id = $(this).attr('id');
                var $navigationlink = sectionIdTonavigationLink[id]
                if (!$navigationlink.hasClass('active')){
                    $navlinks.removeClass('active');
                    $navigationlink.addClass('active');
                }
                return false;
            }
        }));
    });
})





// function toggle(id) {
// var txt = document.getElementById(id);

// var tabs = document.getElementsByClassName("tab");
// console.log(tabs)
// for (i = 0; i < tabs.length; i++) {
//     tabs[i].style.display = "none";
// }

// console.log("here now")
// txt.style.display = "block";
// console.log(txt)

// }

// function offhome(id) {
//     var txt = document.getElementById(id);

//     document.getElementById("landing").style.display = "none";
//     document.getElementById("header").style.display = "flex";

//     txt.style.display = "block";
// }

// function onhome(id) {
//     var elem = document.getElementById(id);

//     document.getElementById("header").style.display = "none";
//     var tabs = document.getElementsByClassName("tab");
//     for (i = 0; i < tabs.length; i++) {
//     tabs[i].style.display = "none";

//     elem.style.display = "flex";
// }
    
// }
