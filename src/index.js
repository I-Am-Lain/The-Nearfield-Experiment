const hamburger = document.getElementById('menu')
const nav = document.getElementById('nav')
const menuBg = document.getElementById('menu-bg')
const obj = document.getElementById('im-an-object')
const satelliteMenu = document.getElementById('satellite-menu')


function main(){
    // change pixel sizing of 'menus' to use VH
    // add more cyber-punk looking theme
    // create an effect for how the "sat-view" will show up
    // create a "Authors" link at the bottom, or use a (?) icon

    // change hamburger menu to part form, part list
}

main()
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function onClickMenu(){
    hamburger.classList.toggle("change")

    nav.classList.toggle("change")

    menuBg.classList.toggle("change-bg")
}

function onSatelliteClick(){
    satelliteMenu.classList.toggle("show-sat-view")
}