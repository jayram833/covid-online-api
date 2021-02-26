import 'regenerator-runtime/runtime';

const btn = document.querySelector('.btn');

btn.addEventListener('click', () =>
  getData(document.querySelector('.inp').value)
);

const getData = async function (name) {
  try {
    const cName = name.replace(/\b\w/g, l => l.toUpperCase());
    const response = await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${cName}`
    );
    const data = await response.json();
    console.log(data.All);
    document.querySelector('.name').textContent = data.All.country;
    document.querySelector('.cases').textContent = data.All.confirmed;
    document.querySelector('.deaths').textContent = data.All.deaths;
    document.querySelector('.recovered').textContent = data.All.recovered;
  } catch (err) {
    alert('Please enter valid country name');
    console.error(err.message);
  }
};
