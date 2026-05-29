// W06 - Array Methods
// Exercise 1: forEach

const numbers = [1, 2, 3, 4, 5];

function numFunction(item) {
    console .log(item * 11);
}

numbers.forEach(numFunction);

// Exercise 2: map

const numbers2 = [6, 7, 8, 9, 10];
const newArr = numbers2.map(numFunction2);
console.log(newArr);

function numFunction2(num) {
    return num * 11;
}

// Exercise 3: filter

const ages = [12, 63, 16, 42, 28, 19, 8];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
} 
console.log(result);

// Exercise 4: reduce
const numbers4 = [235, 15, 5];

document.getElementById("output").innerHTML = numbers4.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

// Exercise 5: indexOf
const fruits = ["apple", "banana", "cherry", "mango", "grape"];
const index = fruits.indexOf("cherry");
console.log(index);




// Exercise 6: JavaScript Object 
const person = {
    name: "John doe",
    age: 22,
    city: "Rexburg"
};
console.log(person);

// 
// Exercise 7: Template Literals
 const personID = `
    <div class='person'>
        <h3>${person.name}</h2>
        <p>Age: ${person.age}</p>
        <p>City: ${person.city}</p>
    </div>
`;
document.getElementById("output2").innerHTML = personID;
