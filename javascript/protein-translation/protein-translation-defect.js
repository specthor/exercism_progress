//
// This is only a SKELETON file for the 'Protein Translation' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export const translate = (sequence) => {
    let protein = [];
    let codons = [];
    let stopCodons = ["UAA", "UAG", "UGA"];

    let spliceSequence = () => {
        try {
            for (let i = 0; i < sequence.length; i += 3) {
                if (i <= sequence.length - 3) {
                    codons.push(sequence.substr(i, 3));
                } else {
                    throw Error("Invalid codon");
                }
            }
        } catch (e) {
            console.log(e)
        }
        console.log(codons)
    }

    let translateCodons = () => {
        let translation;
        try {
            for (codon of codons) {
                console.log(codon)
                if (stopCodons.includes(codon)) {
                    return protein;
                } else if (codon === "AUG") {
                    translation = "Methionine"
                } else if (codon === "UUU" || "UUC") {
                    translation = "Phenylalanine"
                } else if (codon === "UUA" || "UUG") {
                    translation = "Leucine"
                } else if (codon === "UCU" || "UCC" || "UCA" || "UCG") {
                    translation = "Serine"
                } else if (codon === "UAU" || "UAC") {
                    translation = "Tyrosine"
                } else if (codon === "UGU" || "UGC") {
                    translation = "Cysteine"
                } else if (codon === "UGG") {
                    translation = "Tryptophan"
                } else {
                    throw Error("Invalid codon")
                }
                protein.push(translation);
            }
        } catch (e) {
            console.log(e)
        }
    }

    spliceSequence()
    translateCodons()
    return protein
};

console.log(translate("KIZ"));