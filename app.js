import 'regenerator-runtime/runtime';

const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  const inpText = document.querySelector('.inp').value;

  const arr = [];
  arr.push(
    ...inpText[0].toUpperCase(),
    ...inpText.slice(1, inpText.length).toLowerCase()
  );
  const cName = arr.join('');

  getData(cName);
});

const getData = async function (name) {
  try {
    const response = await fetch(
      `https://covid-api.mmediagroup.fr/v1/cases?country=${name}`
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
