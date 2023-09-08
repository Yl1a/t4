/*first task*/

let box = document.querySelector('.box');

box.style.border = '2px solid orange';
box.style.borderRadius = '10px';
box.style.padding = '10px 30px';
box.style.width = '30%';


/*Second task*/
const result = document.querySelector('.res');

let first = +prompt("Введите первое число: ");
let second = +prompt("Введите второе число: ");

if (first === second) {
    /* alert("Покупка совершена"); */
    res = 'Покупка совершена'
} else if (first > second) {
    /* alert(`Для покупки не хватает: ${first - second}р.`); */
    res = `Для покупки не хватает: ${first - second}р.`;
} else {
    /* alert(`Покупка совершена! Ваша сдача ${second - first}p.`); */
    res = `Покупка совершена! Ваша сдача ${second - first}p.`;
}

result.textContent = res; 
