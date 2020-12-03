let testInput = [
    1721,
    979,
    366,
    299,
    675,
    1456,
]

function computeDay1() {
    for (let i = 0; i < testInput.length; i++) {
        for (let j = i + 1; j < testInput.length; j++) {
            if (testInput[i] + testInput[j] == 2020) {
                console.log("wining numbers", testInput[i], testInput[j])
                return testInput[i] * testInput[j]
            }
        }
    }
}

function computePart2(input) {
    for (let i = 0; i < testInput.length; i++) {
        for (let j = i + 1; j < testInput.length; j++) {
            for (let k = j + 1; k < testInput.length; k++) {
                if (testInput[i] + testInput[j] + testInput[k] == 2020) {
                    console.log("wining numbers", testInput[i], testInput[j], testInput[k])
                    return testInput[i] * testInput[j] * testInput[k]
                }
            }
        }
    }
}

console.log(computeDay1())
