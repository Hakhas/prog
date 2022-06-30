let takegrid = document.getElementsByClassName("grid")
let doodlerLeftSpase = 0;
let doodlerbottom = 0;
const doodler = document.createElement("div")
let grid = takegrid[0]
let platformcount = 5
let platforms = []

class Platform {
    constructor(newPlatBottom) {
        this.left = Math.random() * 315
        this.bottom = newPlatBottom
        this.visual = document.createElement("div")
        const visual = this.visual
        visual.classList.add("platform")
        visual.style.left = this.left + "px"
        visual.style.bottom = this.bottom + "px"
        grid.appendChild(visual)

    }
}

function createPlatforms() {
    for (let i = 0; i < platformcount; i++) {
        let platGap = 600 / platformcount
        let newPlatBottom = 100 + i * platGap

        platforms.push(new Platform(newPlatBottom))


    }
}
function createDoodler() {
    grid.appendChild(doodler)
    doodler.classList.add("doodler")
    doodlerLeftSpase = platforms[0].left
    doodler.style.left = doodlerLeftSpase + "px"
    doodler.style.top = doodlerbottom + 385 + "px"
}
function control(a) {
    if (a.key === 'ArrowLeft') {
        // gnum a dzax
        console.log("left");

    }
    else if (a.key === 'ArrowRight') {
        //gnum a aj
        console.log("right");

    }
    else if (a.key === 'ArrowUp') {
        //gnum a verev
        console.log("up");

    }
}



function movePlatforms(){
platforms.forEach(platform => {
   platform.bottom =  platform.bottom -4
  platform.visual.style.bottom =  platform.bottom + "px";
  if(platform.bottom<16){
let firstPlatForm = platforms[0].visual
firstPlatForm.classList.remove("platform")
platforms.shift()
let newPlat =new Platform(600)
platforms.push(newPlat)
  }
})
}

function start() {

    createPlatforms()
    createDoodler()
    //setInterval(movePlatforms,30)
    addEventListener("keyup", control)
}
start()




// let arr = [1, 2, 3, 4, 5,];
// arr.forEach(item => console.log( item*10));



// setInterval(5000)