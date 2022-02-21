let path = document.querySelector('path')
let pathLength = path.getTotalLength()

path.style.strokeDasharray = pathLength + " " + pathLength;

path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
    // how many percent did we scrolled down
    let scrollPer = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight)

    // length to offset the dashes
    let drawLength = pathLength * scrollPer
    // draw in reverse
    path.style.strokeDashoffset = pathLength - drawLength
})