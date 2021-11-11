# About the project

- It contains unordered_map(`C++ STL`) implementation in `Javascript`
- Following functionalities are supported:
  - `insert_element(element, count)`: Inserts an element in hashmap if it does not exists (count=0 if not specified)
  - `increase_count(element, count)`: Increases the frequency of element by count in hashmap (count=0 if not specified)
    If element does not exists, we add the value with count=0
  - `decrease_count(element, count)`: Decreases the frequency of element by count in hashmap (minimum: 0) (count=0 if not specified).
    If element does not exists, we add the value with count=0
  - `remove_element(element)`: Deletes element from hashmap if it exists
  - `count(element)`: Returns frequency of element. If element does not exists, it will return 0
  - `search(element)`: Searches if particular element exists in hashmap or not
  - `create_new_bucket()`: Creates new bucket whenever map size exceeds the array size to reduce collision
  - `next_bucket_size(size)`: Helper function to get next bucket size
  - `is_prime(num)`: Helper function to get next bucket size
  - `get_hash_value(element)`: Generates a hash value in range 0 to bucket_size-1
  - `string_hash(str)`: Generates hash value for a string

# Prerequisites

Node.js should be installed

# To execute the project

Type `node index.js`
