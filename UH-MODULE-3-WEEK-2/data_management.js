let products = [
    {id: 1, name: "Batterie", price: 10.00},
    {id: 2, name: "Computer", price: 100.00},
    {id: 3, name: "Mouse", price: 5.00},
    {id: 4, name: "Screen", price: 60.00},
    {id: 5, name: "CPU", price: 85.00}
]

function validateObjet() {
    if ( !products["id"] || !products["name"] || !products["price"]) {
        console.log("Product not valid")
    } else {
        console.log("Product valid")
    }
}

let myArray = [1,2,3,4,4,5,3,2,6,7,8,9]
console.log("myArray", ...myArray)

let updatedArray = new Set(myArray)
console.log("updatedArray with Set", ...updatedArray)

updatedArray.add(5)
console.log("\nupdatedArray.add(5) =", ...updatedArray)

updatedArray.add(10)
console.log("updatedArray.add(10) =", ...updatedArray)

console.log("" +
    "When we add a new number that doesnt exist on the array, it will be added, but if we add a " +
    "number that already exist, it wont be added" +
    "")

console.log("\nupdatedArray:", ...updatedArray)
console.log("updatedArray.has(5) =", updatedArray.has(5))
console.log("updatedArray.has(20) =", updatedArray.has(20))
console.log("Method '.has()' will return 'true' or 'false' if the number was found on the array")

updatedArray.delete(3)
console.log("\nupdatedArray.delete(3) =", ...updatedArray)
console.log("Method '.delete()' removes the element from the Set if it's found")

console.log("\n'for ... of' to iterate a Set")
for (const element of updatedArray) {
    console.log(element)
}

//Create a 'Map' that has key=category and value=name
const productsMap = new Map()

productsMap.set("food", "eggs");
productsMap.set("liquor", "tequila");
productsMap.set("cleaning", "gloves");
productsMap.set("food", "meat");
productsMap.set("others", "batteries");

console.log("\nIterate 'productsMap' using '.forEach()'")
productsMap.forEach((value, key) => {
    console.log(`Category: ${key} | Name: ${value}`);
});

//Iterare the object using for..in
for (let key in products) {
    console.log(`${key}: ${products[key]}`)
}

//Iterate the Set using for...of
for (const data of updatedArray) {
    console.log(data)
}

//Iterate the Map using for...each
productsMap.forEach((value, index) => {
    console.log(`Index ${index} has value ${value}`);
});

//Use of Object.keys()
console.log("The method Object.keys() show only the keys of the object, not the value of them")
console.log(products.keys())

//Use of Object.values()
console.log("The method Object.values() show only the values of the object, not the key of them")
console.log(products.values())

//Use of Object.entries()
console.log("The method Object.entries() show both keys and values of the object")
console.log(products.entries())

