// JavaScript Практика Задание 2.


function isPrime(num) {
    let _true = 'число простое', _false = 'ответ неверный';
    if (num <= 1 && num > 1000) return _false;
    if (num == 2) return _true;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i == 0) {
            return _false;
            for (let i = 3; i <= num / 3; i++) {
                if (num % i == 0) {
                    return _false;
                }
            }
        }
    }
    return _true;
}
console.log(isPrime(2015));
console.log(isPrime(17));