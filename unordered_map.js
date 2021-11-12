class unordered_map {

  static bucket;
  static bucket_size;
  static map_size;

  constructor() {
    this.map_size = 0;
    this.bucket_size = 11;
    this.bucket = [];
    for(let index = 0; index < this.bucket_size; index++) {
      this.bucket.push([]);
    }
  }

  // Calculates hash value of a string
  string_hash(str) {
    const P = 31;
    let result = 0, count = str.length - 1;

    for(let index = 0; index < str.length; index++) {
      result += str.charCodeAt(index) * Math.pow(P, count--);
    }

    return result % this.bucket_size;
  }

  get_hash_value(element) {

    const type_of_element = typeof element;
    switch(type_of_element) {
      case "boolean":
        return element % this.bucket_size;
      case "string":
        return this.string_hash(element);
      /*
        If it's a symbol, object, undefined, bigint or floating point value:
        convert to string
      */
      case "number":
        if(element.toString().includes(".") === false) {
          // Integer value
          return element % this.bucket_size;
        }
      case "symbol":
      case "object":
      case "undefined":
      case "bigint":
        let str_value = element.toString();
        return this.string_hash(str_value);
    }
  }

  // Checks if number is prime or not
  is_prime(num) {

    if(num <= 1) {
      return false;
    }

    if(num <= 3) {
      return true;
    }

    if(num % 2 == 0 || num % 3 == 0) {
      return false;
    }

    for(let index = 5; index * index <= num; index += 6) {
      if(num % index === 0 || num % (index + 2) === 0) {
        return false;
      }
    }

    return true;
  }

  // Responsible to get next bucket size: makes sure it's prime
  next_bucket_size(size) {

      // Base case
      if (size <= 1) {
          return 2;
      }

      let prime = size, found = false;
      while(!found) {
          prime++;
          if(this.is_prime(prime)) {
              found = true;
          }
      }

      return prime;
  }

  // Increases the bucket size and redistributes the element
  create_new_bucket() {

    console.log('create new bucket', this.bucket_size);

    // Getting nearest prime >= 2 * size
    this.bucket_size = this.next_bucket_size(this.bucket_size * 2);

    let temp_bucket = [];
    for(let index = 0; index < this.bucket_size; index++) {
      temp_bucket.push([]);
    }

    for(let index = 0; index < this.bucket.length; index++) {
      for(let j_index = 0; j_index < this.bucket[index].length; j_index++) {
        // Hashing again as the bucket size has changed
        const hash_value = this.get_hash_value(this.bucket[index][j_index]['value']);
        temp_bucket[hash_value].push(this.bucket[index][j_index]);
      }
    }

    this.bucket = temp_bucket;
  }

  // Search for an element in hash map
  search(element) {
    const index = this.get_hash_value(element);
    for(let j_index = 0; j_index < this.bucket[index].length; j_index++) {
      if(this.bucket[index][j_index]['value'] === element) {
        return { 'found': true, 'j_index': j_index };
      }
    }

    return { 'found': false, 'j_index': null };
  }

  // Inserts an element in hashmap
  insert_element(element, count=0) {

    const index = this.get_hash_value(element);
    const { found, j_index } = this.search(element);

    if(found === false) {
      this.bucket[index].push({ 'value': element, 'count': count });
      if(++this.map_size ===  this.bucket_size) {
        // Redestribution
        this.create_new_bucket();
      }
    } else {
      this.bucket[index][j_index]['count'] = count;
    }
  }

  // Increase the count of an element if it exists, else add the value
  increase_count(element, count=0) {

    if(count < 0) {
      console.log('Negative values not allowed for increase_count');
      return;
    }

    const index = this.get_hash_value(element);
    const { found, j_index } = this.search(element);

    if(found === false) {
      // If element is not found, we add it with count = count
      this.bucket[index].push({ 'value': element, 'count': count });
      if(++this.map_size ===  this.bucket_size) {
        // Redistribution
        this.create_new_bucket();
      }
    } else {
      this.bucket[index][j_index]['count'] += count;
    }
  }

  // Decrease the count of an element if it exists, else add the value
  decrease_count(element, count=0) {

    if(count < 0) {
      console.log('Negative values not allowed for decrease_count');
      return;
    }

    const index = this.get_hash_value(element);
    const { found, j_index } = this.search(element);

    if(found === false) {
      // If element is not found, we add it with count 0
      this.bucket[index].push({ 'value': element, 'count': 0 });
      if(++this.map_size ===  this.bucket_size) {
        // Redistribution
        this.create_new_bucket();
      }
    } else {
      this.bucket[index][j_index]['count'] -= count;
      // Minimum count can be 0
      this.bucket[index][j_index]['count'] = Math.max(this.bucket[index][j_index]['count'], 0);
    }
  }

  // Removes element from the hashmap if it exists
  remove_element(element) {
    const index = this.get_hash_value(element);
    const { found, j_index } = this.search(element);
    if(found === true) {
      this.bucket[index].splice(j_index, 1);
    }
  }

  // Returns frequency corresponding to an element if it exists, else returns 0
  count(element) {
    const index = this.get_hash_value(element);
    for(let j_index = 0; j_index < this.bucket[index].length; j_index++) {
      if(this.bucket[index][j_index]['value'] === element) {
        return this.bucket[index][j_index]['count'];
      }
    }

    return 0;
  }

}

module.exports = unordered_map;