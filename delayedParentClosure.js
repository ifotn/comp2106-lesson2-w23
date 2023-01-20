function parent() {
    let message = 'Hello from parent';

    function child() {
        console.log(message);
    }

    return child; // creates child function but doesn't execute it yet
}

// assign a var to the parent function 
let childFunction = parent();
childFunction();