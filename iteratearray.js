/*Task 1: Using forEach()
1. Create an array of five of your favorite cities.
2. Use forEach( ) to log each city name to the console in uppercase.
3. Add comments to your code that show the expected output as it would be
formatted in the console.*/

let favoriteCities = ["New York", "London", "Tokyo", "Barcelona", "Florence"];

favoriteCities.forEach(city => {
    console.log(city.toUpperCase());
});

/*Task 2: Transforming with map()
1. Create an array called numbers with the numbers 1-5.
2. Use map( ) to create a new array called squares where each number is
squared.
3. Log the new array.
4. Add comments to your code that show the expected output as it would be
formatted in the console.*/

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(num => num * num);
console.log(squares); // Expected output: [1, 4, 9, 16, 25]


/*Task 3: Filtering with filter()
1. Create an array called scores containing the numbers 85, 42, 90, 75, 30, and
100.
2. Use filter() to create a new array called highScores that contains only the
scores greater than or equal to 80.
3. Log the new array.
4. Add comments to your code that show the expected output as it would be
formatted in the console.*/

let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(greaterThan => greaterThan >= 80);
console.log(highScores); // Expected output: [85, 90, 100]

/*Task 4: Finding with find() and findIndex()
1. Create an array called favoriteFood that contains a list of your favorite
dishes. Try to add 5 or 6 elements.
2. Use find() to locate the first food with more than 4 letters.
3. Use findIndex( ) to find the index of that food.
4. Log each of these results.
5. Add comments to your code that show the expected output as it would be
formatted in the console.*/

let favoriteFood = ["Fried Shrimp", "Ice Cream", "Pizza", "Chicken Tikka Masala", "Korean BBQ", "Penne Alla Vodka"]; 
let foundFood = favoriteFood.find(food => food.length > 4);
let indexFood = favoriteFood.findIndex(food => food.length > 4);
console.log(foundFood); // Expected output: "Fried Shrimp"
console.log(indexFood); // Expected output: 0



/*Task 5: Checking conditions with some() and every()
1. Create an array called temperatures that contains a list of 5 temperatures
from the forecast for your city.
2. Use some() to check whether any temperatures are above 90 degrees.
3. Use every() to check if all temperatures are above 50 degrees.
4. Log the results as a single array.
5. Add comments to your code that show the expected output as it would be
formatted in the console.*/

let temperatures = [52, 49, 71, 63, 67];
let tempHigh = temperatures.some(temp => temp > 90);
let tempLow = temperatures.every(temp => temp > 50);
console.log([tempHigh, tempLow]); // Expected output: [false, false]




/*Task 6: Reducing with reduce()
1. Decide on a total budget for birthday gifts.
2. Create an array called prices that contains the price of 4 items you would
like to purchase as gifts.
3. Use reduce() to subtract each item’s price from your total budget. If the
number is 0 or greater, you will know these items fit within your budget.
4. Log the results.
5. Add comments to your code that show the expected output as it would be
formatted in the console.*/

let budget = 2000;
let prices = [ 125, 300, 1199, 1500];
let updatedBudget = prices.reduce((total, price) => total - price, budget);
console.log(updatedBudget); // Expected output: -1124