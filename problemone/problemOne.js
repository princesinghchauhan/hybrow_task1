function countCharacters(input) {
    let count = {}
    let result = ""
    input = input.toUpperCase()

    for (let i = 0; i < input.length; i++) {
        let char = input[i]
        if (char === ' ') continue

        if (!count[char]) {
            count[char] = 1
            result += char + "-"
        } else {
            count[char]++
        }
    }

    let output = ""
    for (let i = 0; i < result.length; i += 2) {
        let char = result[i]
        if (char) {
            output += `${char}-${count[char]}\n`

        }
    }
    return output.trim()
}

console.log(countCharacters("Amolya Sharma"))
console.log(countCharacters("Chinmay Kulkarni"))

/////////////////////////////////
