const DateFormatter = timestamp => {
    let d = new Date(timestamp)

    const hours = d.getHours()
    const minutes = d.getMinutes()
    const seconds = d.getSeconds()

    const formattedDate = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${formatterNumberWithZero(hours)}:${formatterNumberWithZero(minutes)}:${formatterNumberWithZero(seconds)}`

    return formattedDate
}

function formatterNumberWithZero(number) {
    return ('0' + number).slice(-2)
}

export default DateFormatter