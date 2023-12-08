function greetUser() {
    const userName = document.getElementById("userName").value;
    const userMood = document.getElementById("userMood").value;
    const userNumber = Math.abs(Math.round(parseFloat(document.getElementById("userNumber").value)));

    const greeting = document.getElementById("greeting");
    greeting.innerHTML = `Velasco Designs where design meets perfection, ${userName}!<br>We're glad you're doing ${userMood}!<br>`;
    
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
    alert("You look you'd build a crappy webpage!");
}

function calculateTax() {
    // Function to calculate tax (replace with your own calculation)
    alert("Tax calculation: You owe $1000.");
}

function provideQuote() {
    // Function to provide an inspirational quote
    alert("Inspirational Quote: 'Success is not final, failure is not fatal: It is the courage to continue that counts.' - Winston Churchill");
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