// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let row = document.getElementById("inputHeight");
let col = document.getElementById("inputWeight");
let grid = document.getElementById("pixelCanvas");
document.getElementById("sizePicker").onsubmit = function(event) {
    event.preventDefault();
    rebuild_Grid();
    makeGrid();
};
function makeGrid() {
    for (var i = 0; i < row.value; i++) {
        const r = grid.insertRow(i);
        for (var j = 0; j < col.value; j++) {
            const c = r.insertCell(j);
            c.addEventListener("click", click_color);
        }
    }
}
function click_color() {
    this.setAttribute("style", `background-color: ${document.getElementById("colorPicker").value}`);
}
function rebuild_Grid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}