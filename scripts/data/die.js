define(["ko"], function(ko) {
  var dieFaces = ["1", "2", "3", "Heart", "Paw", "Energy"];

  return function() {
    var dieFace = ko.observable(Math.floor(Math.random() * 6));

    var die = {
      faces: dieFaces,
      faceShowing: ko.computed({
        read: function() {return dieFaces[dieFace()] },
        write: function(newVal) {
          dieFace(_.findIndex(dieFaces, function(x) {return x === newVal;}));
        }}),
      kept: ko.observable(false),
      toggleKept: function() {
        die.kept(!die.kept());
      }
    }

    return die;
  };
})
