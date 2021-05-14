const login = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#signup_email').value.trim();
    const password = document.querySelector('#signup_password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/cats');
      } else {
        alert('Ooops! Something went wrong!');
      }
    }
  };
  
  const signIn = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#signin_email').value.trim();
    const password = document.querySelector('#signin_password').value.trim();
  
    if ( email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Ooops! Something went wrong!');
      }
    }
  };
  
  document
    .querySelector('#signup')
    .addEventListener('submit', login);
  
  document
    .querySelector('#signin')
    .addEventListener('submit', signIn);



 
  