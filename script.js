let animals = ["Cat", "Dog", "Giraffe", "Croc"]
let table = document.querySelector("#table")

for (animal of animals) {
    let a = document.createElement("tr");
    let b = document.createElement("td");
    table.append(a);
    table.append(b);
    b.append(animal);
}



let table2 = document.querySelector("#table2")

let zoo = [
    {name: "Cat", id: 1},
    {name: "Dog", id: 2},
    {name: "Parrot", id: 3},
    {name: "Monkey", id: 4},
    {name: "Lion", id: 5}
]
//Tests
console.log(zoo[0].name, zoo[0].id);

for (beast of zoo) {
    let a = document.createElement("tr");
    let b = document.createElement("td");
    let c = document.createElement("td");
    table2.append(a);
    a.append(b,c);
    b.append(beast.id)
    c.append(beast.name)  
}
