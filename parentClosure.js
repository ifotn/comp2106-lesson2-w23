// created 2 nested functions to see if a child function can access vars from its parent
function parent() {
    let message = 'Hello from parent';

    function child() {
        console.log(message);
    }

    // execute the child function
    child();
}

// execute the parent function
parent();
