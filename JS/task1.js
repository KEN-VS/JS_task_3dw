const string = "Привет! Как дела?";

//const secondString = "ПРИВЕТ! Мяу-мяу!"

//const thirdString = "Мяу-мяу-мяу!"

const vowels = ['а', 'е', 'и', 'о', "у", "ы", "э", "ю", "я"];

const getVowels = stringToFiler => {

    let extractedVowels = "";
    for (let i = 0; i < stringToFiler.length; i++) {
        const currentLetter = stringToFiler[i].toLowerCase();



        if (vowels.includes(currentLetter)) {
            extractedVowels += currentLetter;
        }

    }


    return extractedVowels;
}


console.log(getVowels(string));