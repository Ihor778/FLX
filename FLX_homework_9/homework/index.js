let data = [
    {
        "_id": "5b5e3168c6bf40f2c1235cd6",
        "index": 0,
        "age": 39,
        "eyeColor": "green",
        "name": "Stein",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e3168e328c0d72e4f27d8",
        "index": 1,
        "age": 38,
        "eyeColor": "blue",
        "name": "Cortez",
        "favoriteFruit": "strawberry"
    },
    {
        "_id": "5b5e3168cc79132b631c666a",
        "index": 2,
        "age": 2,
        "eyeColor": "blue",
        "name": "Suzette",
        "favoriteFruit": "apple"
    },
    {
        "_id": "5b5e31682093adcc6cd0dde5",
        "index": 3,
        "age": 19,
        "eyeColor": "green",
        "name": "George",
        "favoriteFruit": "banana"
    }
]

function findTypes() {
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = typeof arguments[i];
    }
    console.log(arr);
}
findTypes(null, 5, "hello");

function executeforEach(el, func) {
    for (let i = 0; i < el.length; i++) {
        func(el[i]);
    }
}
executeforEach([1, 2, 3], function (el) {
    console.log(el)
})

function mapArray(el, func) {
    let newArr = [];
    for (let i = 0; i < el.length; i++) {
        newArr.push(func(el[i]));
    }
    console.log(newArr);
}
mapArray([2, 5, 8], function (el) {
    return el + 3
});

function filterArray(el, func) {
    let newArr = [];
    for (let i = 0; i < el.length; i++) {
        if (func(el[i])) {
            newArr.push(el[i]) ;
        }
    }
    console.log(newArr);
}
filterArray([2, 5, 8], function (el) {
    return el > 3
});

function getAmountOfAdultPeople(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].age > 18) {
            count += 1
        }
    }
    console.log(count);
}
getAmountOfAdultPeople(data);

function getGreenAdultBananaLovers(data) {
    let bananaLovers = [];
    for (let i = 0; i < data.length; i++) {
        if (data[i].favoriteFruit === "banana") {
            bananaLovers.push(data[i].name)
        }
    }
    console.log(bananaLovers);
}
getGreenAdultBananaLovers(data);

function keys(object) {
    let keysArr = []
    for (let key in object) {
        keysArr.push(key);
    }
    console.log(keysArr);
}
keys({ keyOne: 1, keyTwo: 2, keyThree: 3 })

function values(object) {
    let valuesArr = []
    for (let key in object) {
        valuesArr.push(object[key]);
    }
    console.log(valuesArr);
}
values({ keyOne: 1, keyTwo: 2, keyThree: 3 });

function showFormattedDate(date) {
    let options = { month: 'short' };
    let day = date.getDate();
    let month = date.toLocaleString('en-GB', options);
    let year = date.getFullYear();
    console.log("Date: " + day + " of " + month + ", " + year);
}
showFormattedDate(new Date('2019-01-27T01:10:00'));

function isEvenYear(date) {
    let year = date.getFullYear();
    console.log(year % 2 === 0)
}
isEvenYear(new Date('2019-01-27T01:10:00'))

function isEvenMonth(date) {
    let month = date.getMonth();
    console.log(month % 2 !== 0)
}
isEvenMonth(new Date('2019-02-27T01:10:00'))


