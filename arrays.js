let arr = [1, 3, 2, 6, 8];

// Methods
arr.sort(); // Sort the array descending like the string (a, b, c) or (1, 2, 3)
arr.reverse(); // Sorting in reverse order
newArr = arr.concat([34, 19, 20]); // Concatenating elements to existing array;
arr.slice(2, 4); // Getting the copy of values of array "arr" from index (2) to (4) not including index(4)
arr.pop(); // Delete the last element of array and return it's value.
arr.push(19); // Add the new element to array.
arr.unshift(22); // Add the element to beggining of array.
arr.shift(); // Removing the first element of array.
console.log(`The length of array: ${arr.length} elements`);

// This loop for getting each value from array
for (let el of arr) {
    console.log(el);
}

// We can't break the forEach cycle, but the construction {for...of} can be broken.
arr.forEach(function(item, index, thisArr) {
    console.log(`Index - ${index}, value - ${item}, this array - ${thisArr}`);
});


// Methods for iterating the array
arr.map();
arr.filter();
arr.every();
arr.some();
arr.reduce();
arr.forEach(function(item, index, thisArr) {});


// SPLIT method. Divides the sentence by separator.
text = 'This banana is great!';
splitArr = text.split(' ');
console.log(splitArr)

// JOIN method join the elements of array to one sentence.
text = splitArr.join(' ');
console.log(text);