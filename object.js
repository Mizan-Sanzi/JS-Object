const country = new String('Bangladesh'); //object type
console.log(typeof country);

console.log(country.length);

// String: LowerCase, UpperCase and Trim ---vid: 20.2
let subject = 'Chemistry';
let book = 'chemistry';

if (subject === book){
    console.log('It is will not be printed because Chemistry and chemistry are not same');
}
else {
    console.log('Correction your spelling to see the first console message!');
}

//------------------------------------------------- Lowercase

if (subject.toLowerCase() === book.toLowerCase()){
    console.log('Text 2: It is now printing because Chemistry and chemistry are converted to lowercase');
}
else {
    console.log('Text 2: Correction your spelling to see the first console message!');
}

//Trim ---first two variable value have space in the beginning and end...now see the function of 'Trim'
const drink = 'water';
const liquid = 'water ';

if (drink === liquid){
    console.log('First text: you are seeing it now because trim has been used and space has been removed');
}
else {
    console.log('second text: you are seeing this because liquid value has a space!')
}

//------------------------------------------------------------------------------------
if (drink.trim() === liquid.trim()){
    console.log('First text: you are seeing it now because trim has been used and space has been removed');
}
else {
    console.log('second text: you are seeing this because liquid value has a space!')
}

// slice of string
const district = 'Nowakhali';
const part = district.slice(0, 4);
console.log(part);

// Introduction to Object Properties and Values / vid: 20.5
// const bottle = 'what?';
const bottleColor = 'white';
const bottlePrice = 45;
const bottleBrand = 'Walton';
const bottleDrinks = 'Milk';

//bottle can be declared as an object instead of declaring various properties as above!

const bottle = {
    brand: 'Walton',
    price: 45,
    color: 'white',
    drinks: 'milk',
    isClean: true,
    'like product': false,
    client: {
        Panchagarh: 30,
        Dinajpur: 50,
        Rangpur: 60,
        Chattogram: 70
    }
}

//dot notation
console.log('is the bottle clean?', bottle.isClean);
var color = bottle.color;
console.log('the color of the bottle is:', color);

//bracket notation --with third bracket
console.log('is there any similar product as Walton bottle?', bottle['like product']);

//keys of object
var allKeys = Object.keys(bottle);
console.log(allKeys);

// values of object
var allValues = Object.values(bottle);
console.log(allValues);

//values of nested object
// var bottleClient = Object.values(bottle.client.Chattogram);
console.log('bottle Client of dinajpur is:', bottle.client.Dinajpur);
// console.log(Object.values(bottle.client.Panchagarh)); //why error ? support session!