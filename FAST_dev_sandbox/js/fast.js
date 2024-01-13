
function toggleMenu() {
    var menu = document.getElementById('menu');
    if (menu.style.visibility=="visible") {menu.style.visibility="hidden";} else {menu.style.visibility="visible";}
}
function buildProductsOfCultureChoiceScreen() {
    var subTableTd = document.getElementById("choiceArea");
    var subTableTdInner = "<p style='color: white'>Choose a a Mathematical Cultural Festival:</p>";
    subTableTdInner+= "<table  class='cols2rows2'><tr><td onclick='buildNewProductsOfCultureItem(\"Diwali\");')>Join me at a Festival of Lights <br/><br/>- Jamal</td>";
    subTableTdInner+= "<td onclick='buildNewProductsOfCultureItem(\"Día de los Muertos\");'>Join me at the Global Gourmet Gala <br/><br/>- Mia</td></tr>";
    subTableTdInner+= "<tr onclick='buildNewProductsOfCultureItem(\"Eid al-Fitr\");'><td>Join me at a Melody Math Fair <br/><br/>- Isabella</td>";
    subTableTdInner+= "<td onclick='buildNewProductsOfCultureItem(\"Lunar New Year\");'>Join me at the Season of Giving <br/><br/>- Sam</td></tr></table>";
    subTableTd.innerHTML = subTableTdInner;
    
}

function buildNewProductsOfCultureItem(contextLabel, contextPrompt, contextObjectImagePath, maxX, maxY) {
    //Defaults
    var contextLabel = "Diwali";
    var contextPrompt = "Calculate the number of dayas using multiplication.";
    var contextObjectImagePath = "./images/diya-clay-lamp.png"; // Assume square image for sizing for this kind of problem
    var maxX = 9;
    var maxY = 9;
    var rows = randomBetween(2,maxY);
    var cols = randomBetween(2,maxX);
    var correctAnswer=rows*cols;
    while (correctAnswer==answerText.valueOf) { //We don't want to give the student the same problem twice
        var rows = randomBetween(2,maxY);
        var cols = randomBetween(2,maxX);
        var correctAnswer=rows*cols; 
    }

    // Calculate the sixe of object image based on grid and window size
    var maxHeight = (window.innerHeight)/3/rows;
    var maxWidth = (window.innerWidth)/3/cols;
    var maxObjectSize = Math.floor(maxHeight);
    if (maxHeight>maxWidth) {maxObjectSize=Math.floor(maxWidth);};
    // Clear previous screen and add new content 
    var choiceArea = document.getElementById("choiceArea");
    choiceArea.innerHTML="";
    var subTableTd = document.getElementById("subTableTd");
    var subTableTdInner = "<input type='hidden' id='correctAnswer' value='"+correctAnswer+"'></span><div class='prompt'>Calculate the number of diyas (clay lamps) by multiplying rows (" + rows + ") by columns ("+cols+"):</div>";
    subTableTdInner+= "<table class='grid'>";
    for (r=0; r<rows; r++) {
        subTableTdInner+= "<tr>";
        for (c=0; c<cols; c++) {
            subTableTdInner+= "<td><img style='width: " + maxObjectSize + "px;height: "+maxObjectSize+"px;' src='" + contextObjectImagePath + "' alt='image of object to multiply'></img></td>";
        }
        subTableTdInner+= "</tr>";
    }
    subTableTdInner+= "</table><div class='prompt' id='answerFormDiv'><form><label for='answer'>Answer:</label>&nbsp;<input type='number' id='answer' name='answer'>&nbsp;<input type='button' onclick='checkAnswer()' value='Check'>&nbsp;&nbsp;<span id='feedbackArea'></span></form></div>";
    subTableTd.innerHTML = subTableTdInner;
    document.getElementById("mainTable").style.background="#d0b418 url(./images/howards_kids_in_square.png) center/105% no-repeat";
}
function randomBetween(min, max) {  
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
var answerText="";
function checkAnswer() {
    var answer = document.getElementById("answer").value;
    var correctAnswer = document.getElementById("correctAnswer").value;
    answerText=correctAnswer;
    if (isNaN(answer) || answer!=correctAnswer) {
        playAudioFeedback("audio/incorrect.mp3"); 
        document.getElementById("feedbackArea").innerHTML="Try again.";
    } else {
        playAudioFeedback("audio/correct.mp3");
        document.getElementById("feedbackArea").innerHTML="Yes! <input type='button' value='Continue' onclick='buildNewProductsOfCultureItem()'>";
    }
} 
function playAudioFeedback(audioFile) {
    var audioControl = document.getElementById("audioControl");
    audioControl.src = audioFile;
    audioControl.load();
    audioControl.play();
}
function drag_start(event) {
    var dm = document.getElementById('dragme');
    // Compute position clicked within the object relative to the top left of the object, used for precice dropping
    dragoffset.x = dm.offsetLeft - event.clientX;
    dragoffset.y = dm.offsetTop - event.clientY;
} 
function drag_me(event) { 
    event.preventDefault(); 
    draglast.x = event.pageX;
    draglast.y = event.pageY;
    return false; 
} 
function drop_here(event) { 
    event.preventDefault();
    var dm = document.getElementById('dragme');
    dm.style.left = (draglast.x+dragoffset.x) + 'px';
    dm.style.top = (draglast.y+dragoffset.y) + 'px';
    dm.innerHTML = ((draglast.x-centerXY.x) + ", " + (draglast.y-centerXY.y));
    return false;
} 
function find_center() {
    // Find the horizontal center of the viewport field
    var pf = document.getElementById('playingfield');
    centerXY.x = Math.round(pf.clientWidth/2);
    centerXY.y = Math.round(pf.clientHeight/2);
    return true;
}
