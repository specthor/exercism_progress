//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const twoFer = (input) => {
    let X;
    let name = input;

    if (name == null) {
        X = "you";
    } else {
        X = name;
    }

    return "One for " + X + ", one for me.";
};