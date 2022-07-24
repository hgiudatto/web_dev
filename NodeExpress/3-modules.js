// Modules

const names = require("./4-names");
const greetings = require("./5-utils");
console.log(
  "-------------------------- modules - variables ---------------------------------"
);
console.log(names);

console.log(JSON.stringify(names));
console.log(
  "-------------------------- extras ---------------------------------"
);
// Destructuring
let { john, peter } = names;
console.log(john);
console.log(peter);

// Spread operator
const spreaded = {
  ...names,
  flavors: ["strawberry", "banana", "kiwi"],
  zip_post_code: "BD",
};

console.table(spreaded);
console.log(
  "-------------------------- modules - functions ---------------------------------"
);
const data = require("./6-alternative-flavor");
const { items, singlePerson } = data;
console.log(`Items: `, items);
console.log(`Person: `, singlePerson);
greetings("susan");
greetings(john);
greetings(peter);
console.log(
  "------------------------------ mind-grenade ----------------------"
);
require("./7-mind-grenade");
