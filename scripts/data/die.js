define(["ko"], function(ko) {
  var dieFaces = ["1", "2", "3", "Heart", "Paw", "Energy"];

  return function() {
    var dieFace = Math.floor(Math.random() * 6)

    var die = {
      faceShowing: dieFaces[dieFace],
      kept: ko.observable(false),
      toggleKept: function() {
        die.kept(!die.kept());
      }
    }

    return die;
  };
})
