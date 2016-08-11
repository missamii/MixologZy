export default {
  getDrinks: function(data){

    const fetchSettings = {
      method: 'GET',
    };
  return fetch('http://addb.absolutdrinks.com/drinks/?apiKey=477a7635dcb248d591a7abdaf035ee32', fetchSettings).then((response) => {
   return response.json();
 });
  }
};
