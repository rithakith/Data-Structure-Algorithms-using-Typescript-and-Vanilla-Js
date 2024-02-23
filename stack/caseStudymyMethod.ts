import ArrayStack from "./stack-classes";

// check if the value entered is symmetrical using found methods

function isSymmetric(text:string):boolean {
    let stack2 = new ArrayStack<string>;
    if (text.length%2!==0) {
        console.log("Text should be even no");
        return false;
    }
    for (let index = 0; index < text.length; index++) {
        const element = text[index];
        stack2.push(element);
    }

    for (let i = 0; i < text.length/2; i++) {
        const elem = text[i];
        if(stack2.pop()!==elem){
            console.log("false");
            return false;
        }
    }
    console.log("true");
    return true;
}

isSymmetric("hey");
isSymmetric("[]][");
isSymmetric("hell");
isSymmetric("heeh");
