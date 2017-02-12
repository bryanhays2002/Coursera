(function (window) {
  var helloSpeaker = {};
  var speakWord = "Hello";
  helloSpeaker.speak = function () {
    console.log (speakWord + helloSpeaker.speak);
  }

  window.helloSpeaker = helloSpeaker;

})(window);