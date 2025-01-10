export const data = [
    {
        "magnitude": 7.80,
        "date": "1940-01",
        "deaths": 45,
        "stroke": "black"
    },
    {
        "magnitude": 7.90,
        "date": "2023-01",
        "deaths": 35,
        "stroke": "dashed" 
    },
    {
        "magnitude": 6.9,
        "date": "1988-01",
        "deaths": 40,
        "stroke": "black" 
    },
    {
        "magnitude": 7.70,
        "date": "1999-09",
        "deaths": 30,
        "stroke": "black" 
    }
]

function randomDate(start, end) {
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function generateRandomData(num) {
    const randomData = [];
    for (let i = 0; i < num; i++) {
        randomData.push({
            "magnitude": (Math.random() * (8 - 4.1) + 4.1).toFixed(1),
            "date": randomDate(new Date(1901, 0, 1), new Date(2023, 11, 31)),
            "deaths": Math.floor(Math.random() * 7),
        });
    }
    return randomData;
}

data.push(...generateRandomData(196));