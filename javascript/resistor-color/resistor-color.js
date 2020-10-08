//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorCode = (color) => {
  for(col of COLORS) {
    if (color === col) {
      return COLORS.indexOf(col)
    }
  }
};
 
const COLORS = ["Black", "Brown", "Red", "Orange", "Yellow", "Green", "Blue", "Violet", "Grey", "White"];

console.log(colorCode("Yellow"));