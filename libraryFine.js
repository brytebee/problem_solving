// Library Fine Hackerranks Challenge Answer
function libraryFine(d1, m1, y1, d2, m2, y2) {
    let fine = 0
    if (y1 > y2) {
        return (10000);
    } else if (m1 > m2) {
        fine = 500 * (m1 - m2)
        return (fine);
    } else if (d1 > d2) {
        fine = 15 * (d1 - d2)
        return (fine);
    } else
    return (fine);
}

libraryFine(1, 1, 2018, 31, 12, 2017) //10,000
libraryFine(9, 6, 2015, 6, 6, 2015) //45
libraryFine(14, 7, 2018, 5, 7, 2018) //135
