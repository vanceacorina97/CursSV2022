export const person = {
  name: "Alex"
}

export class Car{
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  honk() {
    console.log("beep beep!")
  }
}

export default (function() {
  const privateVar = "my private var"; // privateVar only exists in the context of the function
  return {
    publicVar: "my public var",
    getPrivate: () => privateVar // getPrivate keeps a reference to 'privateVar' after it is returned outside the context of the function
  }
})()