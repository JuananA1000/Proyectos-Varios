const jsonForm = document.querySelector('#jsonForm');
const csvForm = document.querySelector('#csvForm');
const bConvert = document.querySelector('#bConvert');
const small = document.querySelector('small');
const pre = document.querySelector('pre');

bConvert.addEventListener('click', () => convertJSONtoCSV());
small.addEventListener('click', navigator.clipboard.writeText(pre.innerText));

function convertJSONtoCSV() {
  let json;
  let keys = []; // Nombres de las propiedades
  let values = [];

  try {
    json = JSON.parse(jsonForm.value);
  } catch (error) {
    console.log('Formato incorrecto. Introduce JSON', error);
    alert('Formato incorrecto. Introduce JSON');
    return;
  }

  if (Array.isArray(json)) {
    json.forEach((item) => {
      const nKeys = Object.keys(item);

      if (keys.length === 0) {
        keys = [...nKeys];
      } else {
        if (nKeys.length != keys.length) {
          throw new Error('El número de keys es distinto');
        } else {
          console.log('Ok', nKeys);
        }
      }

      const row = keys.map((key) => {
        return item[key];
      });

      values.push([...row]);
    });
    console.log(keys, values);
    values.unshift(keys);
    const text = values.map((v) => v.join(', ')).join('\n');
    csvForm.value = text;
  } else {
    alert('No es un array de objetos');
  }
}
