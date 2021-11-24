function include() {
    document.getElementById("d1").innerHTML = include("code.js");

}
// This alert will export in the main file
alert("Hello Geeks")

/*
(function ($) {
    function MyObject(data) {
        var myFunction = function(){
            console.log('dddd');
        }

        $.extend(this, {

              // methods
              "myFunction": myFunction,

        });
    }
}(jQuery));
*/

function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
}

function testread(file) {
    // var file = document.getElementById("fileForUpload").files[0];




    var reader = new FileReader();
    reader.onload = function(){
      var dataURL = reader.result;
      var output = document.getElementById('code.js');
      output.src = dataURL;
    };
    reader.readAsDataURL(input.files[0]);

}
function tx(){

    fetch('code.txt')
  .then(response => response.text())
  .then(data => {
  	// Do something with your data
      document.getElementById("d1").innerHTML = data ;
  	//console.log(data);
  });
}