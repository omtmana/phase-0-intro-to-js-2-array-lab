// Write your solution here!
let cats = [
    "Milo",
    "Otis",
    "Garfield",
]

function  destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    let copyOfCats = cats.slice();
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name) {
    let copyOfCats = cats.slice();
    copyOfCats.unshift(name);
    return copyOfCats;
}

function removeLastCat() {
    let copyOfCats = cats.slice();
    copyOfCats.pop();
    return copyOfCats;
}

function removeFirstCat() {
    let copyOfCats = cats.slice();
    copyOfCats.shift();
    return copyOfCats;
}