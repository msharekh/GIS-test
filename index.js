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
