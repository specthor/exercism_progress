//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const translate = (sequence) => {
    let translation;
    let sequence = "UGG";
    let codons;

    let spliceSequence = () => {
        codons = [sequence];
    }

    spliceSequence();

    switch (codons[0]) {
        case "AUG":
            translation = "Methionine";
            break;
        case "UGG":
            translation = "Tryptophan";
            break;
    }
    console.log(translation);
};