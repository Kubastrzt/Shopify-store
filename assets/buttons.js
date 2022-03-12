

    const left = document.querySelector('.scroll-left')
    const right = document.querySelector('.scroll-right')
    const items = document.querySelector('.wrap')

    let item_scroll_width= items.scrollWidth
    let items_croll_left= items.scrollLeft

    let size = 0

    right.addEventListener('click', ()=>{
        items_croll_left += 381
        if(items_croll_left>=item_scroll_width)
        {
            items_croll_left = item_scroll_width
        }
        items.scrollLeft = items_croll_left;   
    })

    left.addEventListener('click', ()=>{
        items_croll_left -= 381
        if(items_croll_left<=0){
            items_croll_left=0
        }
        items.scrollLeft = items_croll_left; 
    })