var num = 6;
var colors = generateRandomColors(num);
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var squares = document.querySelectorAll(".square");
var resetButton = document.getElementById("btn1");
var messageDisplay = document.getElementById("message");
var mainHead = document.getElementById("main");
var easyButton = document.getElementById("btn2");
var mediumButton = document.getElementById("btn3");
var hardButton = document.getElementById("btn4");

colorDisplay.textContent = pickedColor;
easyButton.addEventListener("click", function ()
{
    num = 3;
    easyButton.classList.add("selected");
    mediumButton.classList.remove("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(num);
    var pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        }
        else {
            squares[i].style.display = "none";
        }
        squares[i].addEventListener("click", function ()
        {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor == pickedColor) {
                changeColors(pickedColor);
                mainHead.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "TRY AGAIN?";
            }
            else {
                messageDisplay.textContent = "Wrong!";
            }
        })
    }
})
mediumButton.addEventListener("click", function ()
{
    num = 6;
    easyButton.classList.remove("selected");
    mediumButton.classList.add("selected");
    hardButton.classList.remove("selected");
    colors = generateRandomColors(num);
    var pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {

            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        }
        else {
            squares[i].style.display = "none";
        }
        squares[i].addEventListener("click", function ()
        {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor == pickedColor) {
                changeColors(pickedColor);
                mainHead.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "TRY AGAIN?";
            }
            else {
                messageDisplay.textContent = "Wrong!";
            }
        })
    }
})
hardButton.addEventListener("click", function ()
{
    num = 9;
    easyButton.classList.remove("selected");
    mediumButton.classList.remove("selected");
    hardButton.classList.add("selected");
    colors = generateRandomColors(num);
    var pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function ()
        {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor == pickedColor) {
                changeColors(pickedColor);
                mainHead.style.backgroundColor = pickedColor;
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "TRY AGAIN?";
            }
            else {
                messageDisplay.textContent = "Wrong!";
            }
        })

    }
})
resetButton.addEventListener("click", function ()
{

    colors = generateRandomColors(num);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
})
for (var i = 0; i < colors.length; i++) {
    if (colors[i]) {
        squares[i].style.backgroundColor = colors[i];
    }
    else {
        squares[i].style.display = "none";
        squares[i].style.backgroundColor = "#232323";

    }
    squares[i].addEventListener("click", function ()
    {
        var clickedColor = this.style.backgroundColor;

        if (clickedColor == pickedColor) {
            changeColors(pickedColor);
            mainHead.style.backgroundColor = pickedColor;
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "TRY AGAIN?";
        }
        else {
            messageDisplay.textContent = "Wrong!";
        }
    })
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function changeColors(color)
{
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function generateRandomColors(num)
{
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    console.log(arr);
    return arr;
}
function randomColor()
{
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    var c = "rgb(" + red + ", " + green + ", " + blue + ")";
    console.log(c);
    return c;
}