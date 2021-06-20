const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 == 0
};

const filterArray = (arrToFilter, filterFn) => {
    const filteredArr = [];

    arrToFilter.forEach(num => {
        if (filterFn(num)) {
            filteredArr.push(num);
        }


    })

    return filteredArr
}



console.log(filterArray(mixedArray, isEven));