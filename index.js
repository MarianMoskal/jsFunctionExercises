// 1. Please write a function that shows the usage of closures

const a = 'I love';
const b = 'Java'

function showClosures() {
  const b = 'JavaScript';

  function insideClosure() { return `${a} ${b}` };
  
  return insideClosure();
}

// console.log(showClosures()); //solution



// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const arr = [9, 1, 22, 0, 2];

function countSum() {
  return arr.reduce((acc, next) => {return acc += next }, 0);
}

// console.log(countSum(arr)); //solution


// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const array = [[2, [4, [44, 5, 6]]], [4, 5, 6], [[2, 4], 4], 5];

function flattensList(arr) {
  return arr.flat(3);
}

// console.log(flattensList(array)); //solution


// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const arrA = ['b', 3, 4, 76, 'c'];
const arrB = ['a', 'b', 4, 76, 21, 'e'];

function findCommonEl(a, b) {
  const result = [];

  a.forEach(el => {
    if (b.includes(el)) {
      result.push(el)
    }
  });

  return result;
}

// console.log(findCommonEl(arrA, arrB)); //solution



// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const arr1 = ['b', 3, 4, 76, 'c'];
const arr2 = ['a', 'b', 4, 76, 21, 'e'];

function findDifferentEl(a, b) {

  const x = a.filter(i => !b.includes(i));
  const y = b.filter(i => !a.includes(i));

  return [...x, ...y];
}

// console.log(findDifferentEl(arr1, arr2)); //solution

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const firstArr = [1, 2, 3];
const secondArr = [4, 5, 6, 7];

function makeTuples(a, b) {
  const result = [];

  for (let i = 0; i < a.length; i++) {
    b.forEach((el, idx) => {
      if (i === idx) {
        result.push([a[i], el])
      }
    }) 
  }

  return result
}

// console.log(makeTuples(firstArr, secondArr)); //solution


// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const keys = ['a', 'b', 'c', 'd'];
const obj = { a: { b: { c: { d: '23' } } } };

function returnValue(a, b) {
  let result;

  for (el in b) {
    result = b[el];

    a.forEach(k => {
      if (k !== el) {
        result = result[k];
      }
    })
  }
  
  return result;
}

// console.log(returnValue(keys, obj)); // solution


// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const obj1 = { a: 'b', c: 'd' };
const obj2 = { c: 'd', a: 'b' };
const obj3 = { c: 'd', a: 'b', q: 's' };


function compareObjects(a, b) {
  const entriesA = Object.entries(a).sort().toString();
  const entriesB = Object.entries(b).sort().toString();

  if (entriesA !== entriesB) { return false };

  return true;
}

// console.log(compareObjects(obj1, obj2)); //solution, expected true
// console.log(compareObjects(obj1, obj3)); //solution, expected false


// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const keysArray = ['color', 'size']; 
const object = { color: 'Blue', id: '22', size: 'xl' };

function removeFromObjectByKey(keys, obj) {
  keys.forEach(key => {
    delete obj[key]
  });

  return obj;
}

// console.log(removeFromObjectByKey(keysArray, object)); //solution

