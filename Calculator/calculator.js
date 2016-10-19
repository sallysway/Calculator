﻿$(document).ready(function () {
    var testNumLength = function (number) {
        if (number.length > 9) {
            totaldiv.text(number.substr(number.length - 9, 9));
            if (number.length > 15) {
                number = "";
                totaldiv.text("Err");
            }
        }
    };
    var number = "";
    var newnumber = "";
    var operator = "";
    var totaldiv = $("#total");
    totaldiv.text("0");

    $("#numbers a").not("#clear,#clearall").click(function () {
        number += $(this).html();
        totaldiv.text(number);
        testNumLength(number);
    }

);
    $("#operators a").not("#equals").click(function () {
        operator = $(this).text();
        newnumber = number;
        number = "";
        totaldiv.text(0);
    });

    $("#clear,#clearall").click(function () {
        number = "";
        totaldiv.text("0");
        if ($(this).attr('id') == "#clearall") {
            newnumber = "";
        }
    });

    $("#equals").click(function () {
        number = parseInt(number, 10);
        newnumber = parseInt(newnumber);

        if (operator == "+") {
            var total = newnumber + number;
            total = total.toString(10);
            totaldiv.text(total);
            testNumLength(total);
            number = "";
            newnumber = "";
        }
        else if (operator == '-') {
            var total = newnumber - number;
            total = total.toString(10);
            totaldiv.text(total);
            testNumLength(total);
            number = "";
            newnumber = "";
        }
        else if (operator == '*') {
            var total = newnumber * number;
            total = total.toString(10);
            totaldiv.text(total);
            testNumLength(total);
            number = "";
            newnumber = "";
        }
        else if (operator == '/') {
            var total = newnumber / number;
            total = total.toString(10);
            totaldiv.text(total);
            testNumLength(total);
            number = "";
            newnumber = "";
        }
    });
});