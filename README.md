# mock-get

[![npm](https://img.shields.io/npm/v/mock-get.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/mock-get)
[![license](https://img.shields.io/github/license/LeoAJ/mock-get.svg?maxAge=2592000?style=flat-square)](https://github.com/LeoAJ/mock-get/blob/master/LICENSE)

:arrow_upper_right: Light mock http get request and return Promise

## Install

```
$ npm install --save mock-get
```

## Usage

```js
import get from 'mock-get';

get(delay, mockData, hasError);
```

* `delay` milliseconds you want to delay your request, default value is `0`
* `mockData` json object will be resolve in the Promise (optional)
* `hasError` default is false, set to true if you want the Promise to reject (optional)

Use second parameter as boolean to set `hasError` if you do not have your own mock data.

### Mock Request

```js
get(1000)
.then(response => console.log(response))
.catch(err => console.error(err));
```

will log the response data

### Fire an Error

```js
get(1000, true)
.then(response => console.log(response))
.catch(err => console.error(err));
```

will log error message

### Use your own mock data

```js
import myMockData from './myMockData';

get(1000, myMockData)
.then(response => console.log(response))
.catch(err => console.error(err));
```

## Default Response

This is how default response look like, you can use your own mock data if you want.

```json
[{
  "id": 1,
  "name": "Bruce Banner",
  "title": "Hulk",
  "email": "bbanner@marvel.com",
  "gender": "Male",
  "date": "12/18/1969",
  "age": 46
}, {
  "id": 2,
  "name": "Steve Rogers",
  "title": "Captain America",
  "email": "srogers@marvel.com",
  "gender": "Male",
  "date": "7/4/1918",
  "age": 98
}, {
  "id": 3,
  "name": "Natalia Romanoff",
  "title": "Black Widow",
  "email": "nromanoff@marvel.com",
  "gender": "Female",
  "date": "11/22/1984",
  "age": 31
}, {
  "id": 4,
  "name": "Tony Stark",
  "title": "Iron Man",
  "email": "tstark@marvel.com",
  "gender": "Male",
  "date": "5/29/1970",
  "age": 46
}, {
  "id": 5,
  "name": "Clint Barton",
  "title": "Hawkeye",
  "email": "cbarton@marvel.com",
  "gender": "Male",
  "date": "1/7/1971",
  "age": 45
}]
```

## License

MIT
