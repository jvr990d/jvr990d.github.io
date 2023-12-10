function greetUser() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const userNumber = Math.abs(Math.round(parseFloat(document.getElementById("userNumber").value)));

    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `Velasco Designs where design meets perfection, Welcomes you ${userName}!<br>We're glad you're doing ${userMood}!<br>`;
    
    // Determine and display the polygon name
    const polygonName = getPolygonName(userNumber);
    alert(`The polygon with ${userNumber} sides is called a ${polygonName}`);
}

function setDate(){
    document.getElementById("dateTime").innerHTML = Date();
    setTimeout(setDate, 1000);
}

function getPolygonName(sides) {
    const polygonNames = {
        1: "Henagon",
        2: "Digon",
        3: "Trigon",
        4: "Tetragon",
        // Add more polygon names as needed
    };
    return polygonNames[sides] || "Unknown";
}

function provideInsult() {
    // Function to provide a harmless insult
    alert("Your code looks like it was made by a student in 1212");
}

function randomColor() {
    const colorChoice = [
        "Blue",
        "Green",
        "Yellow",
        "Purple",
        "Red",
        "Violet",
        "Brown",
        "Black",
        "White",
        "Gray"
    ];
  
    const colorChosen = colorChoice[Math.floor(Math.random() * colorChoice.length)];
    alert(`Your color is : "${colorChosen}"`);
  }



function provideQuote() {
    // Function to provide an inspirational quote
    alert("Albert Einstein: Imagiination is more important thatn knowledge. Knowledge is limited. Imagination encircles the world");
}

function watchBrands() {
    const watchChoice = [
        "Tag Heuer Monaco",
        "Jaiger-LeCoultre Reverso",
        "Cartier Santos",
        "Breitling Navitimer",
        "Rolex Daytona",
        "Patek Philippe Nautilus",
        "Rolex Datejust",
        "Audemars Piguet Royal Oak",
        "Rolex Submariner",
        "Omega Speedmaster Professional"
    ];
  
    const watchChosen = watchChoice[Math.floor(Math.random() * watchChoice.length)];
    alert(`Your next watch should be a : "${watchChosen}"`);
  }
  

setDate();