//1
console.log('---n1---');
let rectangle = {
    width: 7,
    height: 3,
    getSquare: function () {
        return this.width * this.height;
    }
};
console.log(rectangle.getSquare());

//2
console.log('---n2---');
const price = {
    price: 10,
    discount: '15%',
    getPrice: function () {return this.price},
    priceWithDiscount: function () {return this.price - parseFloat(this.discount)}
};
console.log(price.getPrice());
console.log(price.priceWithDiscount());

//3
console.log('---n3---');
const user = {name: 'Abraham', getrName: function() {return getUserName}};
let getUserName = function(){return this.name};
//console.log(getUserName);
//user.getUserName = getName;
console.log(user.getrName());

//4
console.log('---n4---');
let elem = {
    height: this.increment,
    increment: function () { return this.height + 1}
};
console.log(elem.height);
console.log(elem.increment());
console.log(elem.height);

//5
console.log('---n5---');
const numerator = {
    value: 1,
    double: function () {return this.value * 2},
    plusOne: function () { return this.double + 1 },
    minusOne: function () { return this.plusOne - 1 },
};

console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

//6
console.log('---n6---');


//7
console.log('---n7---');
function getList(){return this.list;}
let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
};

getList(); //Результат - undefined, this визиває функцію getList() і пробує знайти list якого немає
users.getList = getList;
users.getList(); // Результат - ["Abraham", "James", "John", "Steven"], this вказує на об'єкт для якого було визвано ф-ю
                //і в обєкті є list, тому і видає значення свойства list
getList.call(users); // Результат - ["Abraham", "James", "John", "Steven"], визиваємо функцію з вказаним значенням this
                    // (об'єкт users),з якого потім виводиться параметер list

//8
console.log('---n8---');
const priceList = {
  products: 5,
  price: 8,
  totalPrice: total
};

function total() {
    return this.products * this.price;
}

let res = priceList.totalPrice();
console.log(res);

//9
console.log('---n9---');
const list = {
    products: 5,
    price: 2,
    totalL: totalOfList
};
const productList = {
    products: 15,
    price: 2,
    totalP: list.totalL
};

function totalOfList() {
    return this.products * this.price;
}

console.log(list.totalL());
console.log(productList.totalP());

//10
console.log('---n10---');
let size = {width: 5, height: 10},
    getSquare = function () {
        return this.width * this.height;
    };

console.log(getSquare.call(size));

//11
console.log('---n11---');
let numbers = [4, 12, 0, 10, -2, 4];
//function min(numbers){return Math.min(...this)}
//console.log();

//12
console.log('---n12---');
const element1 = {
  height: '15px',
  marginTop: '5px',
  getFullHeight: function () {
      return parseFloat(this.height) + parseFloat(this.marginTop) + parseFloat(block.marginBottom);
  }
};
const block = {
    height:'5px',
    marginTop: '3px',
    marginBottom: '3px'
};

console.log(element1.getFullHeight());


//13
console.log('---n13---');
let element = {
    height: 25,
    getHeight: function(){return this.height}
};

let getElementHeight = element.getHeight();
console.log(getElementHeight);