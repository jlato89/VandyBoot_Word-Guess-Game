var userText = document.getElementById('user-text');
var gameWords = ['computer', 'remote', 'monitor', 'keyboard', 'desktop', 'laptop', 'headset', 'mouse', 'joystick', 'gamepad'];
var number = Math.floor(Math.random() * gameWords.length);
var selectedWord = document.getElementById('selected-word');

document.onkeyup = function(event) {
      userText.textContent = event.key;
};
