// You should implement your task here.

module.exports = function towelSort(matrix) {
    let finalArr = [];
    if (typeof matrix !== "undefined") {
        for (let i = 0; i < matrix.length; i++) {
            i % 2 == 0
                ? (finalArr = finalArr.concat(matrix[i]))
                : (finalArr = finalArr.concat(matrix[i].reverse()));
        }
        return finalArr;
    } else return finalArr;
};
