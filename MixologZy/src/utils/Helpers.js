import cors from 'cors';

export default {
  getAllDrinks: function(){

    const fetchSettings = {
      method: 'GET',
      mode: 'cors',
      dataType: 'json'
    };
  return fetch('http://addb.absolutdrinks.com/drinks/?apiKey=477a7635dcb248d591a7abdaf035ee32', fetchSettings).then((response) => {
   return response.json();
 });
  }
};
