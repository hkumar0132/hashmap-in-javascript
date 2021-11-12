const unordered_map = require("./unordered_map.js");

const map1 = new unordered_map();

// To print the map values
function print_map() {
  for(let index = 0; index < map1.bucket.length; index++) {
    let str = "";
    for(let j_index = 0; j_index < map1.bucket[index].length; j_index++) {
      str += map1.bucket[index][j_index]['value'] + " : " + map1.bucket[index][j_index]['count'] + "; ";
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
  map1.insert_element(2, 1);
  print_map();
  map1.insert_element(2, 1);
  print_map();
  map1.remove_element(1);
  print_map();
  map1.remove_element(2);
  print_map();
*/