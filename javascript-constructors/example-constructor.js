function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('type of ExampleConstructor.prototype: ', ExampleConstructor.prototype);

var newExampleConstructor = new ExampleConstructor();
console.log('value of newExampleConstructor: ', newExampleConstructor);

console.log('is newExampleConstructor instanceof ExampleConstructor', newExampleConstructor instanceof ExampleConstructor);
