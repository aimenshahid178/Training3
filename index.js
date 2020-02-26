// https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089

// Sample Object to be copied
let testArray = [{
    description: 'Random description.',
    testNumber: 123456789,
    testBoolean: true,
    testObject: {
      testString: 'test string',
      testNumber: 12345
    },
    testArray: [{
      myName: 'test name',
      myNumber: 123245
    }]
  },{
    description: 'Random description.',
    testNumber: 123456789,
    testBoolean: true,
    testObject: {
      testString: 'test string',
      testNumber: 12345
    },
    testArray: [{
      myName: 'test name',
      myNumber: 123245
    }]
  }];

  // Array has two elements, both are objects. Objects are identical, with 3 primitive value keys, one object and one array 
  // containing a single object



const deepCopyFunction = inObject => {
    let outObject, value, key;
  
    //Handle null, undefined or primitive types
    if(typeof inObject !== "object" || inObject === null) {
      return inObject;
    }
  
    // Copy is either an array or an object
    if(Array.isArray(inObject)){
      outObject = [];
    }
    else{
      outObject = {};
    }
  
    //Handle objects
    for (key in inObject) {
      value = inObject[key];
      if(typeof value === "object" && value !== null){
        outObject[key] = deepCopyFunction(value);
      }
      else{
        outObject[key] = value;
      }
    }
    
    return outObject;
  };

  let copy = deepCopyFunction(testArray);
  copy[0].description = 'Nothing';
  copy[1].testArray[0].myName = 'Aimen';

  console.log('testArray', testArray);
  console.log('copy', copy);
  