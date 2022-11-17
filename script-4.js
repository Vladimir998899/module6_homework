// JavaScript Практика Задание 4.


function fromTo(a, b) {
    var c = a;
    var intervalId = setInterval(function () {
        console.log(c);
        if (c == b) {
            clearInterval(intervalId);
        }
        c++;
    }, 1000);
}

fromTo(5, 15);


