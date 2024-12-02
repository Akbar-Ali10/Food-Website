

const scrollbtn = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", function(){
    if(window.pageYOffset > 2500){
        scrollbtn.style.display = "block"
    }else{
        scrollbtn.style.display= "none"
    }

    scrollbtn.addEventListener("click", function(){
        window.scrollTo({
            top:0,
            behavior:"smooth"

        })
    })
})