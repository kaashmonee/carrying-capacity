function Smile(x, y) {
    var radius = 50;
    var canvasID = "myCanvas";
    var c = document.getElementById(canvasID);
    var draw = c.getContext("2d");
    this.x = x;
    this.y = y;
    var drawFace = function() {
        //to draw a surface on canvas element pass 2d as an argument in the getContext function
        //to start a new path invoke BeginPath function.
        //Call this function when you want to create a new path
        draw.beginPath();
        //to specify a color or style for your canvas use fillStyle property
        draw.fillStyle = "yellow";
        //to create a full circle invoke the arc method and in that method
        //pass the value for x and y, radius, start point,
        draw.arc(this.x, this.y, radius, 0, Math.PI * 2, true);
        //to close the path invoke the closePath function
        draw.closePath();
        //invoke fill function to fill the canvas with a circle and in that circle a color of yellow
        draw.fill();
    };
    var drawEye = function() {
        //moveTo function is used to move the starting point of the canvas to a new point
        //x value is 55 and y value is 50
        eye.moveTo(this.x - 20, this.y - 25);
        //from the new point, begin a new path
        eye.beginPath();
        //fill the style with color black
        eye.fillStyle = "black";
        //left round eye
        eye.arc(this.x - 25, this.y - 25, 4, 0, Math.PI * 2, true);
        eye.closePath();
        eye.fill();
        //move to the new sub path from the current point and create a right eye
        eye.moveTo(this.x + 28, this.y - 26);
        eye.beginPath();
        eye.fillStyle = "black";
        //right round eye
        eye.arc(this.x + 25, this.y - 25, 4, 0, Math.PI * 2, true);
        eye.closePath();
        eye.fill();
    };
    var drawSmile = function() {
        //105 means x it will go the left side and 75 means y it will go upward of //downward
        smile.moveTo(this.x + 30, this.y);
        smile.beginPath();
        smile.strokeStyle = "red";
        smile.arc(this.x, this.y, 30, 0, Math.PI, false);
        //to draw a half rounded circle with a line stroke we can invoke the stroke function
        smile.stroke();
    };
}
