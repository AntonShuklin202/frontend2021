function getCapacity(...arg) {
    let values = arg;
    if (values.length < 3) {
        while (values.length < 3) {
            values.push(1);
        }
    }
    let res = values[0] * values[1] * values[2];
    return res;
}
let output = getCapacity(3, 2);
document.getElementsByTagName("body") += output;

let arr1 = [1, 4, 7, 3];
let arr2 = [2, 8, 9, 5];
let arr3 = [...arr1, ...arr2];
document.getElementsByTagName("body") += arr3;
let auto = {
    wheels: 4,
    type: 'sedan',
    na_hody: true,
    ne_bita: true,
    ne_krashena: true
}
let lada = {
    ...auto,
    ne_bita: false,
    ne_krashena: false
}
let MAN = {
    ...auto,
    wheels: 6
}
let bmw = {
    ...auto
}
document.getElementsByTagName("body") += lada;
document.getElementsByTagName("body") += MAN;
document.getElementsByTagName("body") += bmw;