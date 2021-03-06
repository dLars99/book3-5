// Answer to Lightning Exercises under "Reduce,"
// separate from main application

const reduceExercises = () => {

    // First Lightning Exercise: Sum the numbers
    
    const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]
    
    const totalRainfall = monthlyRainfall.reduce(
        (currentTotal, nextValue) => currentTotal += nextValue, 0
    )
        
    console.log(totalRainfall)

    // Second Lightning Exercise: build a sentence

    const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

    const sentence = words.reduce(
        (sentenceFragment, nextWord) => sentenceFragment += `${nextWord} `, ""
    )

    console.log(sentence)
    
}

export default reduceExercises