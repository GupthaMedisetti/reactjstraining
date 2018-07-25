// you can export functions, variables, classes
// #1: you can export during declaration
// export let sum = ( x, y ) => x + y;
let sum = ( x, y ) => x + y;

// Define a class with real and imaginary parts as data members and export the class - use it in index.html and create an object of this class
export default { // the one most important thing exported can be designated as default
    PI: 3.14159,
    e: 2.7182
};

class ImaginaryNumber {
    constructor( realPart, ImaginaryPart ) {
        this.realPart = realPart;
        this.ImaginaryPart = ImaginaryPart;
    }
}

// #2: gather and export all exports at once
export { sum, ImaginaryNumber };