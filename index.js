const unordered_map = require("./unordered_map.js");

const map1 = new unordered_map();

// To print the map values
function print_map() {
  for(let index = 0; index < map1.bucket.length; index++) {
    let str = "";
    for(let j_index = 0; j_index < map1.bucket[index].length; j_index++) {
      const element = map1.bucket[index][j_index];
      if(typeof element['value'] === "string") {
        str += `"${element['value']}" :  ${element['count']}; `;
      } else if(typeof element['value'] === "object") {
        str += JSON.stringify(element['value']) + ` :  ${element['count']}; `;
      } else if(typeof element['value'] === "bigint") {
        str += `${element['value']}n :  ${element['count']}; `;
      } else {
        str += `${element['value']} :  ${element['count']}; `;
      }
    }
    if(str !== "") {
      console.log(str);
    }
  }
  console.log("\n");
}

function change_in_bucket_size() {
  for(let index = 0; index < 1000; index++) {
    map1.increase_count(index, index);
  }
}

// Test case: 1 - For inserting 1000 unique values, how is the tradeoff in bucket size
// change_in_bucket_size();

// Test case: 2 - Testing increase_element, increase_count, decrease_count and count function with strings as keys
/*  map1.insert_element("Himanshu");
  map1.increase_count("Kumaraojdiwn93204u099999999999999999999999999999999999999999999999999999", 1000);
  map1.increase_count("Himanshu", 2000);
  map1.decrease_count("Himanshu", 1000);
  print_map();
  console.log(map1.count("Himanshu"));
*/


// Test case: 3 - Testing with double values
/* map1.increase_count(100.213231, 1);
  map1.increase_count(100.213231, 100);
  map1.insert_element("100.213231", 100);
  print_map();
*/

// Test case: 4 - Testing the search and count functions
/* map1.insert_element(1);
  map1.increase_count(1, 1000);
  map1.decrease_count(1, 913);
  map1.increase_count("1", 100);
  print_map();
  console.log(map1.count(1));
  console.log(map1.search(1).found);
  console.log(map1.search(2).found);
  console.log(map1.count("1"));
  console.log(map1.search("1").found);
*/

// Test case: 5 - Testing decrease count, insert_element and remove_element functions
/* map1.decrease_count(1);
  print_map();
  map1.insert_element(1, 1);
  print_map();
  map1.insert_element(2, 1);
  print_map();
  map1.insert_element(2, 1);
  print_map();
  map1.insert_element("2", 1);
  print_map();
  map1.insert_element(2, 3);
  print_map();
  map1.remove_element(1);
  print_map();
  map1.remove_element(2);
  print_map();
*/

// Test case: 6 - Checking for object types
/*
let object = {
  name: "Himanshu",
  age: 21,
  Interest: "Software development"
}

map1.insert_element(object, 100);
print_map();
*/

// Test case: 7 - Checking for boolean type
/* map1.insert_element(true, 10000000);
  map1.insert_element(false, 12);
  print_map();
*/

// Test case 8 - Checking for bigint type
/*map1.insert_element(100n, 100);
  map1.insert_element(100, 29);
  print_map();
*/

// Test case 9 - testing for functions and array types
/*map1.insert_element((a, b) => a + b, 101);
  map1.insert_element([], 405);
  print_map();
*/

// Test case 10 - some more edge cases
/*map1.increase_count("XYZ", 400);
  map1.decrease_count(1000, -100);
  map1.increase_count("XYZ", 300);
  map1.decrease_count("xyz", 400n);
  map1.insert_element(40000000000000000000000000000000000000000n, 1);
  print_map();
*/