const provinces = [
  'Western Cape',
  'Gauteng',
  'Northern Cape',
  'Eastern Cape',
  'KwaZulu-Natal',
  'Free State',
];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

// Use forEach to console log each name to the console
names.forEach((name) => console.log(name));

//Use forEach to console log each name with a matching province
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

//Using map loop over all province names and turn the string to all uppercase. Log the new array to the console.
const uppercaseProvinces = provinces.map((province) => province.toUpperCase());
console.log(uppercaseProvinces);

//Create a new array with map that has the amount of characters in each name. The result should be: [6, 9, 11, 5, 7, 7]
const newArray = names.map((name) => name.length);
console.log(newArray);

//Using toSorted to sort all provinces alphabetically
const alphabetical = provinces.toSorted();
console.log(alphabetical);

//Use filter to remove all provinces that have the word Cape in them. After filtering the array, return the amount of provinces left. The final value should be 3.
const filtered = provinces.filter((province) => !province.includes('Cape'));
console.log(filtered.length);

//Create a boolean array by using map and some to determine whether a name contains an S character. The result should be [true, true, false, true, true, false]
const boolArray = names.map((name) => {
  return name.split('').some((letter) => letter.toUpperCase() === 'S');
});
console.log(boolArray);

//Using only reduce, turn the above into an object that indicates the province of an individual. In other words:
const reduced = names.reduce((obj, name, index) => {
  obj[name] = provinces[index];
  return obj;
}, {});
console.log(reduced);

const products = [
  { product: 'banana', price: '2' },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: '8' },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

//Use forEach to console.log each product name to the console.
console.log(products.forEach((item) => console.log(item.product)));

//Use filter to filter out products that have a name longer than 5 characters
console.log(products.filter((item) => item.product.length <= 5));

//Using both filter and map. Convert all prices that are strings to numbers,
//and remove all products from the array that do not have prices.
//After this has been done then use reduce to calculate the combined
//price of all remaining products.
console.log(
  products
    .map(({ price }) => parseInt(price))
    .filter((item) => !Number.isNaN(item))
    .reduce((acc, current) => {
      return acc + current;
    }, 0)
);

//Use reduce to concatenate all product names to create the following string:
// banana, mango, potato, avocado, coffee and tea.
console.log(
  products.reduce((acc, item, index) => {
    if (index === 0) {
      return item.product;
    } else if (index === products.length - 1) {
      return `${acc} and ${item.product}.`;
    } else {
      return `${acc}, ${item.product}`;
    }
  }, '')
);

//Use reduce to calculate both the highest and lowest-priced items.
//The names should be returned as the following string: Highest: coffee. Lowest: banana.
console.log(
  `Highest: ${
    products.reduce(
      (acc, curr) => {
        const price = parseFloat(curr.price);
        if (!isNaN(price)) {
          if (acc.highest === null || price > acc.highest.price) {
            acc.highest = { product: curr.product, price: price };
          }
        }
        return acc;
      },
      { highest: null }
    ).highest.product
  }, Lowest: ${
    products.reduce(
      (acc, curr) => {
        const price = parseFloat(curr.price);
        if (!isNaN(price)) {
          if (acc.lowest === null || price < acc.lowest.price) {
            acc.lowest = { product: curr.product, price: price };
          }
        }
        return acc;
      },
      { lowest: null }
    ).lowest.product
  }`
);

// Using only Object.entries and reduce recreate the object with the exact same values.
// However, the following object keys should be changed in the new array:
// product should be changed to name, price should be changed to cost
console.log(
  products.reduce((acc, curr) => {
    const renamedObj = Object.entries(curr).reduce((obj, [key, value]) => {
      if (key === 'product') {
        obj['name'] = value;
      } else if (key === 'price') {
        obj['cost'] = value;
      }
      return obj;
    }, {});
    acc.push(renamedObj);
    return acc;
  }, [])
);
