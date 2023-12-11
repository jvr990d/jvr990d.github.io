function setDate(){
    document.getElementById("dateTime").innerHTML = Date();
    setTimeout(setDate, 1000);

const watchChosen = watchChoice[Math.floor(Math.random() * watchChoice.length)];
alert(`Your next watch should be a : "${watchChosen}"`);
}


setDate();
