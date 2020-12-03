// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

let audio = document.getElementById('audio');

// Write named functions that change the color of the keys below
const keyPlay = event => {
    event.target.style.backgroundColor = 'purple';
};

const keyReturn = event => {
    event.target.style.backgroundColor = '';
}

const keyAudio = event => {
    event.target.children[1].play();
}

// Write a named function with event handler properties
let eventHandler = note => {
    note.onmousedown = () => {
        keyPlay(event);
        keyAudio(event);
    }
    note.onmouseup = () => {
        keyReturn(event);
    }
}

// Write a loop that runs the array elements through the function
notes.forEach(eventHandler);


// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = () => {
    nextTwo.hidden = false;
    nextOne.hidden = true;
    document.getElementById('letter-note-five').innerHTML = 'G';
    document.getElementById('letter-note-six').innerHTML = 'F';
};

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = () => {
    nextTwo.hidden = true;
    nextThree.hidden = false;
    document.getElementById('letter-note-three').innerHTML = 'C2';
    document.getElementById('letter-note-four').innerHTML = 'A';
    document.getElementById('letter-note-five').innerHTML = 'F';
    document.getElementById('letter-note-six').innerHTML = 'E';
    document.getElementById('word-five').innerHTML = 'DEAR';
    document.getElementById('word-six').innerHTML = 'FRI';
    lastLyric.style.display = 'inline-block';

}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = () => {
    nextThree.hidden = true;
    startOver.hidden = false;
    document.getElementById('letter-note-one').innerHTML = 'A#';
    document.getElementById('letter-note-two').innerHTML = 'A#';
    document.getElementById('letter-note-three').innerHTML = 'A';
    document.getElementById('letter-note-four').innerHTML = 'F';
    document.getElementById('letter-note-five').innerHTML = 'G';
    document.getElementById('letter-note-six').innerHTML = 'F';
    document.getElementById('word-five').innerHTML = 'TO';
    document.getElementById('word-six').innerHTML = 'YOU!';
    lastLyric.style.display = 'none';

}

// This is the event handler property and function for the startOver button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
  document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
}