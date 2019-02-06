require(["esri/Map", "esri/views/MapView", "esri/Graphic"], function(
  Map,
  MapView,
  Graphic
) {
  // Code to create the map and view will go here
  var map = new Map({
    basemap: "streets"
  });
  var view = new MapView({
    container: "viewDiv", // Reference to the scene div created in step 5
    map: map, // Reference to the map object created before the scene
    zoom: 15, // Sets zoom level based on level of detail (LOD)
    center: [46.70240879, 24.68045354] // Sets center point of view using longitude,latitude
  });

  // Create a line geometry with the coordinates of the line
  var polyline = {
    type: "polyline", // autocasts as new Polyline()
    paths: [
      [46.69361115, 24.67822194],
      [46.61938906, 24.78706598],
      [46.73929453, 24.70382094]
    ]
  };

  // Create a simple line symbol for rendering the line in the view
  var lineSymbol = {
    type: "simple-line", // autocasts as new SimpleLineSymbol()
    color: [226, 119, 40], // RGB color values as an array
    width: 4
  };

  // Create a simple object containing useful information relating to the feature
  var lineAtt = {
    Name: "Keystone Pipeline", // The name of the pipeline
    Owner: "TransCanada", // The owner of the pipeline
    Length: "3,456 km" // The length of the pipeline
  };

  // Create the graphic
  var polylineGraphic = new Graphic({
    geometry: polyline, // Add the geometry created in step 4
    symbol: lineSymbol, // Add the symbol created in step 5
    attributes: lineAtt // Add the attributes created in step 6
  });

  // Add the graphic to the view's default graphics view
  // If adding multiple graphics, use addMany and pass in the array of graphics.
  view.graphics.add(polylineGraphic);
});

function confirmFileSubmit() {
  var input = document.getElementById("fileUpload"); // get the input
  var file = input.files[0]; // assuming single file, no multiple
  var reader = new FileReader();
  let lng = "";
  let lat = "";
  reader.onload = function(e) {
    var text = reader.result; // the entire file
    var lines = text.split("\n"); // split lines to array
    for (let l = 1; l < lines.length; l++) {
      const line = lines[l];
      lng = line.split(",")[1];
      lat = line.split(",")[2];
      console.log(lng, ":", lat);
    }
    // lng = text.split("\n")[1].split(",")[1];
    // lat = text.split("\n")[1].split(",")[2];
  };
  reader.readAsText(file, "UTF-8"); // or whatever encoding you're using
  // UTF-8 is default, so this argument
}
