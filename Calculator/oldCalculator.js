

//var keys = document.getElementsByClassName("keys");
var keys = document.querySelectorAll('#calculator span');
// this returns an array like object with the operators
var operators = document.getElementsByClassName("operator");

console.log(operator);

for (var x = 0; x < keys.length; x++) {
    keys[x].onclick(function (e) {
        var valueEntered = document.querySelectorAll('.screen');
        var input = valueEntered.innerHTML;
        var buttonInput = this.innerHTML;
        var decimalAdded = false;

        if (buttonInput = 'C') {
            valueEntered.innerHTML = '';
            var decimalAdded = false;
        }

        else if (buttonInput == '=') {
            var calculation = input;
            var lastNumber = calculation[calculation.length - 1];

            if (operators.indexOf(lastChar) > -1 || lastChar == '.') {
                calculation = calculation.replace(/.$/, '');
            }

            if (calculation) {
                valueEntered.innerHTML = total(calculation);
                decimalAdded = false;
            }


        }
    })
}


