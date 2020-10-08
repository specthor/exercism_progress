//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const translate = (sequence) => {
    let protein = [];
    let codons = [];
    let stopCodons = ["UAA", "UAG", "UGA"];

    /* check if sequence is given */
    if (sequence === undefined || sequence.length % 3 != 0) {
        return protein
    }

    /* splice sequences */
    try {
        for (let i = 0; i < sequence.length; i += 3) {
            if (i <= sequence.length - 2) {
                codons.push(sequence.substr(i, 3));
            } else {
                throw Error("Invalid codon");
            }
        }
    } catch (e) {
        console.log(e);
    }
    console.log(codons);

    /* translate codons */
    let translation;
    try {
        for (codon of codons) {
            if (stopCodons.includes(codon)) {
                return protein;
            } else if (codon === "AUG") {
                translation = "Methionine"
            } else if (codon === "UUU" || codon === "UUC") {
                translation = "Phenylalanine"
            } else if (codon === "UUA" || codon === "UUG") {
                translation = "Leucine"
            } else if (codon === "UCU" || codon === "UCC" || codon === "UCA" || codon === "UCG") {
                translation = "Serine"
            } else if (codon === "UAU" || codon === "UAC") {
                translation = "Tyrosine"
            } else if (codon === "UGU" || codon === "UGC") {
                translation = "Cysteine"
            } else if (codon === "UGG") {
                translation = "Tryptophan"
            } else {
                throw 'Invalid codon'
            }
            protein.push(translation);
        }
    } catch (e) {
        return e
    }
    return protein
};

console.log(translate("LOL"));