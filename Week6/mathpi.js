const descriptor =  Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor);

const chai = {
    name: 'Ginger Chai',
    price: 200,
    isAvailable: true
}
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, 'name'));