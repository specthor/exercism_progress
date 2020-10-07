//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
//export const translate = (sequence) => {
const translate = (input) => {
    let translations = [];
    let codons = [];

    /* *** WIP ***
     * 
     */
    let spliceSequence = () => {
        for (i = 0; i < 9; i += 3) {
            codons.push(input.substr(i, 3));
        };
    };
    spliceSequence(input);
    console.log(codons);

    let translateCodons = (codons) => {
        let translation;
        for (codon of codons) {
            switch (codon) {
                case "AUG":
                    translation = "Methionine";
                    break;
                case "UGG":
                    translation = "Tryptophan";
                    break;
                default:
                    break;
            }
            translations.push(translation);
        }
    }
    translateCodons();
    console.log(translations);
};

translate("ABCDEFGHIJKL");