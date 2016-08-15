import cors from 'cors';

export default {
  getAllDrinks: function(drinkNames){

    const fetchSettings = {
      method: 'GET',
      mode: 'no-cors',
      dataType: 'json'
    };

    // return fetch(`https://addb.absolutdrinks.com/quickSearch/drinks/${drinkNames}/?apiKey=477a7635dcb248d591a7abdaf035ee32`, fetchSettings).then((response) => {
    return fetch(`http://localhost:3000/data.json`, fetchSettings).then((response) => {
        return response.json();
    }).catch(() => {
      console.log('error');
    });
  }
};
