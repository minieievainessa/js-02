//for (let i = 100; i>=  0; i--) {
//if (i % 2 === 1) {
//    continue;
//}
//    console.log(i);
//
//}

//let i = 0;
//
//while (i <= 100) {
//    console.log(i);
//    i++;
//
//}

//let i = 0;
//do {
//    console.log(i);
//    i++;
//}while (i > 100);

//let num = parseInt(prompt('Please enter a number'));
//while (Number.isNaN(num)) {
//    alert('please enter a number!');
//    num = parseInt(prompt('Please enter a number'));
//}

// let num;
// do {
//     num = parseInt(prompt('Please enter a number'));
// } while (Number.isNaN(num));


let productNames = ['Xiaoma M8', 'Chevrolet', 'Sony'];
productNames.push('Tesla X');
productNames.push('iPhone 8');
productNames.push('Banana');
productNames.push('Toyota corolla');

console.log(productNames[2]);
console.log(productNames.length);

//for (let = 0; i < productNames.length; i++) {
//    console.log(productNames[i]);
//}

productNames.forEach(function (el) {
    console.log(el);
});


