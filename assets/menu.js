
const linksToHover=document.querySelectorAll('.links')

for(var i=0;i<linksToHover.length; i++)
{
    var link = linksToHover[i]
    link.addEventListener('mouseenter', (e)=>{
        var linkFocus = e.target
        var linkFocusedDropdown= linkFocus.children[1]
        linkFocusedDropdown.classList.toggle('toggle-dropdown')
    })
    link.addEventListener('mouseleave', (e)=>{
        var linkFocus = e.target
        var linkFocusedDropdown= linkFocus.children[1]
        linkFocusedDropdown.classList.toggle('toggle-dropdown')
    })
}
