'use strict';

const countryData = document.querySelector('.country-data');
const country = document.querySelector('.country');
const state = document.querySelector('.state');
const btn = document.querySelector('.submit');

const renderData = function (data) {
  // btn.addEventListener('click', function () {
  // });

  const html = `
    <div class="render-data">
    <h2 class="text-row">Confirmed 💯 : <span class="dt1">${data.India.Maharashtra.confirmed}</span></h2>
    <h2 class="text-row">Deaths ☠ : <span class="dt2">${data.India.Maharashtra.deaths}</span></h2>
    <h2 class="text-row">Recovered 👍 : <span class="dt3">${data.India.Maharashtra.recovered}</span></h2>
    <h2 class="text-row">Updated on 🔄 : <span class="dt4">${data.India.Maharashtra.updated}</span></h2>
  </div>`;
  countryData.insertAdjacentHTML('beforeend', html);
  countryData.style.opacity = 1;
};
const getData = function () {
  fetch(`https://covid-api.mmediagroup.fr/v1/cases/`)
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.India.Maharashtra);
      renderData(data);
    })
    .catch(err => alert(`Something went wrong ${err}`));
};
getData();
