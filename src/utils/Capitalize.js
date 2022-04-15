const Capitalize = (input) => {
    let temp = input

    for (let i = 1; i < temp.length; i++) {
        if (temp[i - 1] === " " || temp > 1 && temp.slice(i - 2, i) === ", ") {
            temp = temp.slice(0, i) + temp[i].toUpperCase() + temp.slice(i + 1, temp.length)
        }
    }

    return temp
}

export default Capitalize