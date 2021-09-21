
export const genBgColors = (arr) => {
    let len = arr.length
    let backgroundColor = []
    let colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Cyan', 'Purple']

    if (len < colors.length) {
        backgroundColor = colors.slice(0, len)
    } else {
        backgroundColor = colors
        for (let i = colors.length; i < len; i++) {
            backgroundColor[i] = '#' + (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6)
        }
    }
    return backgroundColor
}
