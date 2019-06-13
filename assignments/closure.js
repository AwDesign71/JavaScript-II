// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const myClosure = () =>{
  let company = 'Sky_Tech';
  const showName = () => {
    console.log(company);
  }
  return showName;
}
const showClosure = myClosure();
showClosure();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return function counter() {
  count += 1;
  console.log(count);
  return count;
  }    
};

let new_count = counter();
new_count();
new_count();
new_count();
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let num_counter = 0;
    let increment = () => ++num_counter;
    let decrement = () => --num_counter;
    let bothCount = {
      increment, decrement
    }
    return bothCount;
};
let countBoth = counterFactory()
console.log(countBoth.increment());
console.log(countBoth.decrement());
