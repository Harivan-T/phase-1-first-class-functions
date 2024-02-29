function receivesAFunction(callback) {
    callback();
}

// Example usage
receivesAFunction(() => {
    console.log("Callback function called!");
});

function returnsANamedFunction() {
    return function namedFunction() {
        
    };
}


const namedFunc = returnsANamedFunction();
console.log(namedFunc.name); 

function returnsAnAnonymousFunction() {
    return function() {
        // Function body
    };
}

// Example usage
const anonymousFunc = returnsAnAnonymousFunction();
console.log(anonymousFunc.name); // Output: ""
