/* eslint-disable */

import fetch from 'node-fetch';

let resultArray = [];
let values = [10, 20, 30];
let url = `${this.urls[0]}${this.values[0]}`;
let urls = [
  'https://kodaktor.ru/api/m/',
  'https://kodaktor.ru/api/MS2/',
  'https://kodaktor.ru/api/MS3/'
];

(async () => {
  for (let i = 0; i < this.urls.length; i++) {
    if (i > 0) {
      url = `${urls[i]}${values[i]}/${resultArray[i - 1].response}`;
    }
    const response = await fetch(url)
      .then((res) => res.text())
      .then((res) => parseInt(res.match(/(\d+)\w+/g)[0], 10));

    resultArray.push({
      url,
      response,
    });
  }
})();
