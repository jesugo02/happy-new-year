
let list = [0, 1, 2, 3, 4, 5] // we have 6 images to choose from randomly and animate

let wishes = ["Much Food", "Much Burger", "Strong Faith", "Joy Overflow", "Success", "Money"] //correspondance of  the images

let index = 0
let speed = 200

content = ""

var i_ind = 0
var j_ind = 0

const images = document.querySelectorAll(".images img")

function random_item(items){
    return items[Math.floor(Math.random()*items.length)]
}

// the one that needed to call sleep function
async function set_random_bg(){

    let i = random_item(list)

    i_ind = i

    images[i].style.animation = "rotate 4s"
    writing()
    await sleep(5000)
    
    images[i].style.animation = ""
    await sleep(4500)
    set_random_bg()
}

set_random_bg()

// Wait ms second :)
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function writing() {

    content = " ! ".concat(wishes[i_ind].toString().concat("  : ) "))

    if(index < content.length){
        document.getElementById("typing-effect-content").innerHTML += content.charAt(index)
        index++
        setTimeout(writing, speed)
    }

    await sleep(5000)
    index = 0
    document.getElementById("typing-effect-content").innerHTML = ""

}