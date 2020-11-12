const hamburger = document.getElementById('menu')
const nav = document.getElementById('nav')
const menuBg = document.getElementById('menu-bg')
const obj = document.getElementById('im-an-object')
const satelliteMenu = document.getElementById('satellite-menu')

const userPanel = document.getElementById('user-panel')
const form = document.querySelector('form')

let satelliteData = [{id: 0, name: "sat one", type: "active"},{id: 1, name: "sat two", type: "inactive"},{id: 2, name: "sat three", type: "debris"},
{id: 3, name: "sat four", type: "debris"},{id: 4, name: "sat five", type: "inactive"},{id: 5, name: "sat six", type: "active"},
{id: 6, name: "sat seven", type: "debris"},{id: 7, name: "sat eight", type: "inactive"},{id: 8, name: "sat nine", type: "active"},
{id: 9, name: "sat ten", type: "debris"},{id: 10, name: "sat eleven", type: "inactive"},{id: 11, name: "sat twelve", type: "active"},
{id: 12, name: "sat thirteen", type: "debris"},{id: 13, name: "sat fourteen", type: "inactive"},{id: 14, name: "sat fifteen", type: "active"},
{id: 15, name: "sat sixteen", type: "debris"},{id: 16, name: "sat seventeen", type: "inactive"},{id: 17, name: "sat eighteen", type: "active"},]


function main(){
    // change pixel sizing of 'menus' to use VH
    // add more cyber-punk looking theme
    // create an effect for how the "sat-view" will show up
    // create a "Authors" link at the bottom, or use a (?) icon

    // change hamburger menu to part form, part list
    showAllSatellites()
    formListener()
    satelliteSelector()
}

main()
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function formListener(){
    form.addEventListener("change", e => {
        nav.innerHTML = ''
        if (e.target.value === 'show-all'){
            showAllSatellites()
        } else {showFilteredSatellites(e.target.value)}

        // takes back type select, and renders only those with that type
    })
}

function showAllSatellites(){
    satelliteData.forEach(sat =>{
        const li = document.createElement('li')
        li.id = sat.id

        li.innerText = `${sat['name']}, type is ${sat['type']}`

        nav.append(li)
    })
}

function showFilteredSatellites(type){
    satelliteData.forEach(sat =>{
        if (sat.type === type){
            const li = document.createElement('li')
            li.id = sat.id

            li.innerText = `${sat['name']}, type is ${sat['type']}`

            nav.append(li)
        }
    })
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function satelliteSelector(){
    nav.addEventListener("click", e => {
        satelliteMenu.innerHTML = ''
        displaySatellite(e.target.id)
        satelliteMenu.classList.toggle("show-sat-view")
    })
}

function displaySatellite(satelliteId){
    const theSatellite = satelliteData[satelliteId] // or something like this

    const h1 = document.createElement('h1')
    h1.innerText = theSatellite.name

    const p = document.createElement('p')
    p.innerText = `current satellite id: ${theSatellite.id}`

    const p2 = document.createElement('p')
    p.innerText = `current satellite type: ${theSatellite.type}`

    satelliteMenu.append(h1, p, p2)
}
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
function onClickMenu(){
    hamburger.classList.toggle("change")
    nav.classList.toggle("change")
    userPanel.classList.toggle("user-change")

    menuBg.classList.toggle("change-bg")
}

// function onSatelliteClick(){
//     satelliteMenu.classList.toggle("show-sat-view")
// }
