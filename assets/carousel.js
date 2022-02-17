
var x
var y


function scroller() {
    var elmnt = document.querySelector(".carousel")
    x = elmnt.scrollLeft
    const dots= document.querySelectorAll('.slide-dots')
    dots[0].classList.add('dots-addon')
    if(x>100 && x<450){
        dots[0].classList.remove('dots-addon')
        dots[1].classList.add('dots-addon')
    }
    else
        dots[1].classList.remove('dots-addon')
  }

window.setInterval('scroller()',100)

