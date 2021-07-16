'use strict';

(function() {

  var button = document.getElementById('button');
  var result = document.getElementById('result');

  button.addEventListener('click', function() {
    fetch(window.config.apiUrl + '/hello', { method: 'GET' })
      .then(function (response) {
        return response.text();
      })
      .then(function (body) {
        result.innerHTML += body;
      });
  });

})();

