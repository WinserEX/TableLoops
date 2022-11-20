let animals = ["Cat", "Dog", "Giraffe", "Croc"]
let table = document.querySelector("#table")

for (animal of animals) {
    let a = document.createElement("tr");
    let b = document.createElement("td");
    table.append(a);
    table.append(b);
    b.append(animal);
}