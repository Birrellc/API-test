/* TIMEOUT METHOD

var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", "http://ci-swapi.herokuapp.com/api/");
xhr.send();

function setData(jsonData) {
    data = jsonData;
}

xhr.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
        data = JSON.parse(this.responseText); 
        
    }
};
setTimeout(function(){
    console.log(data);
}, 500);

*/

/* CALL BACK METHOD 1 

function getData(cb) {
    var xhr = new XMLHttpRequest();



    xhr.open("GET", "http://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));

            }
        };
    }

getData(function(data){
    console.log(data);
}) */

// CALL BACK METHOD 2

function getData(cb) {
    var xhr = new XMLHttpRequest();



    xhr.open("GET", "http://ci-swapi.herokuapp.com/api/");
    xhr.send();

    xhr.onreadystatechange = function () {

            if (this.readyState == 4 && this.status == 200) {
                cb(JSON.parse(this.responseText));

            }
        };
    }

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);