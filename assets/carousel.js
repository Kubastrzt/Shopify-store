var x
var y

window.onerror = function(message, url, lineNumber) {  
    return true; 
};

function scroller() {
    var elmnt = document.querySelector(".slider")
    x = elmnt.scrollLeft
    var stala=100;
    var viewportWidth=window.innerWidth;
    const dots= document.querySelectorAll('.slide-dots')
    dots[0].classList.add('dots-addon')
    for(var sliderLength=1;sliderLength<=dots.length;sliderLength++)
    {
        if(x>stala){
            dots[sliderLength-1].classList.remove('dots-addon')
            dots[sliderLength].classList.add('dots-addon')
        }
        else if(stala>x){
            dots[sliderLength].classList.remove('dots-addon')
        }
        stala+=viewportWidth;
    }
  }

window.setInterval('scroller()',100)

