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

/* CALL BACK METHOD 2

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

*/

const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            cb(JSON.parse(this.responseText));
        }
    };

    xhr.open("GET", baseURL + type + "/");
    xhr.send();
}

function getTableHeaders(obj) {
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`)
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type) {
    var el = document.getElementById("data");
    el.innerHTML = "";

    getData(type, function(data) {
        var tableRows = [];
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item) {
            // el.innerHTML += "<p>" + item.name + "</p>";
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);
        });

        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;
    });
}