const person ={
    name: "John",
    age: 30,
    city: "New York"
}

delete person.age;
person.job = 'Engineer';
person.city = "San Francisco";

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.job);

