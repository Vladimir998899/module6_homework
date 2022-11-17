// JavaScript Практика Задание 3.


function anyNumber(func) {
    func();
    return function (a, b) {
        console.log()
    }
}
function argFunc() {
    console.log(1 + 2)
}
const resultFunc = anyNumber(argFunc);
resultFunc(); // 3
