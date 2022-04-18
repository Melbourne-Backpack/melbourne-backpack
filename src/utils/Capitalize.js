const Capitalize = (input) => {
    // To use with fetched data, use a condition to make sure that the input string is not undefined.
    let temp = input[0].toUpperCase()
    if (input.length > 1) {
        temp += input.slice(1, input.length)
    }
    if (temp.length > 1) {
        for (let i = 1; i < temp.length; i++) {
            if (temp[i - 1] === " " || temp > 1 && temp.slice(i - 2, i) === ", ") {
                temp = temp.slice(0, i) + temp[i].toUpperCase() + temp.slice(i + 1, temp.length)
            }
        }
    }

    return temp
}

export default Capitalize