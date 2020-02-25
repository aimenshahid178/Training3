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




// Example of recursive deep cloning function
const deepCopyFunction = inObject => {
    let outObject, value, key;
  
    if(typeof inObject !== "object" || inObject === null) {
      return inObject; // Return the value if inObject is not an object
    }
  
    // Create an array or object to hold the values
    outObject = Array.isArray(inObject) ? [] : {};
  
    for (key in inObject) {
      value = inObject[key];
  
      // Recursively (deep) copy for nested objects, including arrays
      outObject[key] = (typeof value === "object" && value !== null) ? deepCopyFunction(value) : value;
    }
    
    return outObject;
  };
  
  let originalArray = [37, 3700, {hello: "world"}]; 
  console.log(...originalArray); // 37 3700 Object { hello: "world" }
  
  let shallowCopiedArray = originalArray.slice();
  let deepCopiedArray = deepCopyFunction(originalArray);
  
  originalArray[1] = 0; // Will affect the original only
  originalArray[2].hello = "moon"; // Will affect the original and the shallow copy
  
  console.log(...originalArray); // 37 0 Object { hello: "moon" }
  console.log(...shallowCopiedArray); // 37 3700 Object { hello: "moon" }
  console.log(...deepCopiedArray); // 37 3700 Object { hello: "world" }
  