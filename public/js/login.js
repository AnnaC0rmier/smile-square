

const logIn = async (event) => {

    
    console.log('button clicked')
    event.preventDefault();
  
    
    const userName = document.querySelector('#typeEmailX').value;
    const password = document.querySelector('#typePasswordX').value;
  
    if (userName && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });

      console.log(response.status);
      console.log(await response.json());

  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign in');
      }
    }}
  

  
  document
    .querySelector('.login').addEventListener('click', logIn);