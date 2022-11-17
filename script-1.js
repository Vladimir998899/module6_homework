// JavaScript Практика Задание 1.


let x = [5, 33, 6, 58, 76, 15, 24, 44, null, undefined];
let even = [];
let odd = [];
let zero = [];

function amountElements(array, even, odd, zero) {
    array.forEach((el) => {
        if (typeof el === "number" && !isNaN(el)) {
            switch (true) {
                case el === 0:
                    zero.push(el);
                    break;
                case el % 2 === 0:
                    even.push(el);
                    break;
                case el % 2 !== 0:
                    odd.push(el);
                    break;
            }
        }
    });
    console.log("Количество четных элементов " + even.length);
    console.log("Количество нечетных элементов " + odd.length);
    console.log("Количество нулевых элементов " + zero.length);
}
amountElements(x, even, odd, zero);