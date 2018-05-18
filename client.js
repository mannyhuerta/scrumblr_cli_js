require('es6-promise').polyfill();
require('isomorphic-fetch');
 
fetch('http://localhost:8080/test/card', 
    {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        colour:"yellow",
        id:"card60456203211",
        rot:-4.169039659413691,
        text:"Testing!",
        x:58,
        y:466
    })
  })
    .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(stories) {
        console.log(stories);
    });