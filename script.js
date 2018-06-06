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
const user = {name: 'Abraham'},
getUserName = function(){return this.name;};
user.getName = getUserName;
console.log(user.getName());

//4
console.log('---n4---');
let elem = {
    height: 10,
    increment: function () {
		this.height += 1
	return this.height 
	}
};
console.log(elem.height);
console.log(elem.increment());
console.log(elem.height);

//5
console.log('---n5---');
const numerator = {
    value: 1,
    double: function () {this.value += this.value; return this;},
    plusOne: function () { this.value = this.value + 1; return this; },
    minusOne: function () { this.value = this.value - 1; return this; },
};

console.log(numerator.double().plusOne().plusOne().minusOne());
console.log(numerator.value);

//6
console.log('---n6---');
const user1 = {name: 'Abraham'},
otherUser = {
	name: 'John',
	getName: function() {return this.name}
}
console.log(user1.getName); //undefined не може знайти параметер getName, оскільки його немає в обєкті
user1.getName = otherUser.getName
console.log(user1.getName()); // 'Abraham' присвоїли параметер getName до обєкту user1 і використали його
console.log(otherUser.getName()); // 'John' визвали функцію яка присвоєна в цьому обєкті, і функція повернуло результат



//7
console.log('---n7---');
function getList(){return this.list}
let users = {
    length: 4,
    list: ['Abraham', 'James', 'John', 'Steven']
};

console.log(getList()); //Результат - undefined, this визиває функцію getList() і пробує знайти list якого немає
users.getList = getList;
console.log(users.getList()); // Результат - ["Abraham", "James", "John", "Steven"], this вказує на об'єкт для якого було визвано ф-ю
                //і в обєкті є list, тому і видає значення свойства list
console.log(getList.call(users)); // Результат - ["Abraham", "James", "John", "Steven"], визиваємо функцію з вказаним значенням this
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
console.log('---n11---№№№');
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
