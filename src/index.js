import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css"
import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js"
import ""

function collapseMobileHandler () {
    const collapseMobile = document.getElementById("filter-mobile-collapse");
    const collapseBtnMobile = document.getElementById("filter-mobile-collapse-btn");
    const collapseBtnTextMobile =document.getElementById("filter-mobile-btn-text");
    const filterIconMobile = document.getElementById("filter-mobile-icon")
    const bsCollapseMobile = new Collapse(collapseMobile,{
        toggle:false,
    });


    collapseBtnMobile.addEventListener("click",function(){
        bsCollapseMobile.toggle();
    });
    collapseMobile.addEventListener("show.bs.collapse",function(){
        collapseBtnTextMobile.innerText("收起");
    })

}

