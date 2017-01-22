function Organism(x, y) {
    var radius = 50;
    var canvasID = "myCanvas";
    var canvas = document.getElementById(canvasID);
    var context = canvas.getContext("2d");
    this.create = function() {
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fillStyle = "yellow";
        context.fill();
        context.strokeStyle = "black";
        context.stroke();
        context.closePath();
    };
}
