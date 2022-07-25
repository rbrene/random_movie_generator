export const randomBanner = data => {
    const dataArr = [];
    for (const key in data) {
        dataArr.push(data[`${key}`]);
    };
    return dataArr;
}

export const getRandomData = data => {
    return data[Math.floor(Math.random() * data.length)];
}