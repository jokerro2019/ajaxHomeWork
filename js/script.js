'use strict';
$(document).ready(function () {
    $.getJSON("data/employees.json", function (data) {
    var items = [];
    $.each(data, function (key, val) {

        var x = val.inoffice;
        

        if (x == false) {
            items.push("<li class='out'>" + val.name + val.inoffice + "</li>");
        } else {
            items.push("<li class='in'>" + val.name + val.inoffice + "</li>");
        }
      
        


    });
    console.log(items);
    items = items.join(',');
    var list = document.querySelector('.bulleted');
    list.innerHTML = items;
});



})