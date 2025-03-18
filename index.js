// // Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]



//add cat to the end of the array destructively
function destructivelyAppendCat(name)
{
    return cats.push(name)
}

//add cats to the begginging of the array destructively
function destructivelyPrependCat(name)
{
    return cats.unshift(name)
}
//remove last element from the array

function destructivelyRemoveLastCat(name)
{
    return cats.pop(name)
}

//remove first element of the array
function destructivelyRemoveFirstCat(name)
{
    return cats.shift(name)
}

//non destructiely - creates a copy of a new array and adds an element at the end
function appendCat(name)
{
    return [...cats, name]
}

//non destructiely - - creates a copy of a new array and adds an element at the beggining of the array
function prependCat(name)
{
    return [name, ...cats]
}

function removeLastCat(name)
{
    return cats.slice(0, -1)
}

function removeFirstCat(name)
{
    return cats.slice(1)
}