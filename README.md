# About the project

- It contains unordered_map(`C++ STL`) implementation in `Javascript`
- Following functionalities are supported:
  - `insert_element(element, count)`: Inserts an element in hashmap if it does not exists, else updates the count (count=0 if not specified)
  - `increase_count(element, count)`: Inserts an element in hashmap if it does not exists, else increases the frequency by count
    (count=0 if not specified)
  - `decrease_count(element, count)`: Inserts an element in hashmap if it does not exists, else decreases the frequency by count
    (count=0 if not specified) (minimum frequency: 0)
  - `remove_element(element)`: Deletes element from hashmap if it exists
  - `count(element)`: Returns frequency of element in hashmap. If element does not exists, it will return 0
  - `search(element)`: Searches if particular element exists in hashmap or not
  - `create_new_bucket()`: Creates new bucket and redestributes values whenever map size exceeds the array size to reduce collision
  - `next_bucket_size(size)`: Helper function to get next bucket size
  - `is_prime(num)`: Helper function to get next bucket size
  - `get_hash_value(element)`: Generates a hash value in range 0 to bucket_size-1
  - `string_hash(str)`: Generates hash value for a string

# Prerequisites

Node.js should be installed

# To execute the project

Type `node index.js`
