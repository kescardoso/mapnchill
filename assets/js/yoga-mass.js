var data;

function preload() {
  data = loadJSON("assets/json/yoga-mass.json");
}

function setup() {
  noCanvas();
  var yoga = data.yoga;

  for (var i = 0; i < yoga.length; i++) {
    createElement('h1', yoga[i].category);
    var name = yoga[i].name;
    for (var j = 0; j < name.length; j++) {
      createDiv(name[j]);
    }
  }
}