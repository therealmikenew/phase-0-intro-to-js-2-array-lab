// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
    return cats.push('Ralph');
}

function destructivelyPrependCat () {
    return cats.unshift('Bob');
}

function destructivelyRemoveLastCat () {
    return cats.pop();
}

function destructivelyRemoveFirstCat () {
    return cats.shift();
}

function appendCat () {
    const newCats = [...cats, 'Broom'];
    return newCats;
}

function prependCat () {
    const newCatsTwo = ['Arnold',...cats];
    return newCatsTwo;
}

function removeLastCat () {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat () {
    return cats.slice(1, cats.length);
}