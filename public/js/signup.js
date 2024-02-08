console.log("it worked")

const signUp = async (event) => {
    console.log('button clicked')
    event.preventDefault();
  
    
    const userName = document.querySelector('#typeEmailX').value;
    const password = document.querySelector('#typePasswordX').value;
  
    if (userName && password) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ userName, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to sign up');
      }
    }
  };
  
  document
    .querySelector('.signup').addEventListener('click', signUp);
  
