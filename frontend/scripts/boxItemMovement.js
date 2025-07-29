console.log("Javascript Successfully Connected!")

/* Listen if something has been clicked */
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains("boxItem")) {
        onMouseDown(e)
    }
})

let itemBox, initialPositionX, initialPositionY, initialLeft, initialRight;

function onMouseDown(e) {
    document.addEventListener("mouseup", onMouseUp)

    itemBox = e.target;

    console.log((parseInt(itemBox.style.left) || 0))

    initialPositionX = e.clientX
    initialPositionY = e.clientY


    initialLeft = (parseInt(itemBox.style.left) || 0);
    initialTop = (parseInt(itemBox.style.top) || 0);


    console.log(initialPositionX)

    itemBox.style.position = 'relative'

    document.addEventListener("mousemove", onMouseDrag)
    
}

function onMouseDrag(e) {
    itemBox.style.left = (e.clientX - initialPositionX + initialLeft) + 'px';
    itemBox.style.top = (e.clientY - initialPositionY + initialTop) + 'px';

    console.log(e.clientX, e.clientY)
}

function onMouseUp(e) {
    console.log("Mouse UP", e)
    document.removeEventListener("mouseup", onMouseUp)
    document.removeEventListener("mousemove", onMouseDrag)
    itemBox.style.position = 'relative'
    itemBox = null
}
