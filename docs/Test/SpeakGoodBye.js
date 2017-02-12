(function (window) {
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  byeSpeaker.speak = function () {
    console.log(speakWord + byeSpeaker.speak);
  }

  window.byeSpeaker = byeSpeaker;

})(window);