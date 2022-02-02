console.log("LOADED HEADER SCRIPT");
/*----------------------------------------------------
Make sure that #header-background-image height is equal to the browser height.
------------------------------------------------------ */
export const SetBackgroundImageToWindowHeight = () => {
    document.getElementsByClassName("header")[0].style.height = window.innerHeight + "px";

    window.addEventListener("resize", function(){
        document.getElementsByClassName("header")[0].style.height = window.innerHeight + "px";
        document.getElementsByClassName("header")[0].style.width = window.innerWidth + "px"; 
        // 16 = 1rem of scrollbarWidth
    })
}


/*----------------------------------------------------*/
/* Highlight the current section in the navigation bar
------------------------------------------------------*/

// var sections = document.querySelector("section");
// var navigation_links = document.querySelector("#nav-wrap a");

// sections.waypoint({
//   handler: function (event, direction) {
//     var active_section;

//     active_section = document.querySelector(this);
//     if (direction === "up")
//       active_section = active_section.previousElementSibling;

//     var active_link = document.querySelector(
//       '#nav-wrap a[href="#' + active_section.attr("id") + '"]'
//     );

//     navigation_links.parent().removeClass("current");
//     active_link.parent().classList.add("current");
//   },
//   offset: "35%",
// });
