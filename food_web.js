
function togglePopup(show) {
    const popup = document.getElementById('login-popup');
    popup.style.display = show ? 'flex' : 'none';
  }
  
 
  function toggleState() {
    const currentState = document.getElementById('popup-title').textContent;
    const title = document.getElementById('popup-title');
    const form = document.getElementById('login-form');
    const toggleText = document.getElementById('toggle-text');
  
    if (currentState === 'Login') {
      title.textContent = 'Sign Up';
      form.querySelector('button[type="submit"]').textContent = 'Create account';
      form.querySelector('#name').style.display = 'block'; // Show name field
      toggleText.innerHTML = 'Already have an account? <span onclick="toggleState()">Login here</span>';
    } else {
      title.textContent = 'Login';
      form.querySelector('button[type="submit"]').textContent = 'Login';
      form.querySelector('#name').style.display = 'none'; // Hide name field
      toggleText.innerHTML = 'Create a new account? <span onclick="toggleState()">Click here</span>';
    }
  }
  

  function handleFormSubmit(event) {
    event.preventDefault(); 
  
    const title = document.getElementById('popup-title').textContent;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    const validEmail = 'sk@gmail.com';
    const validPassword = '123';
  
    if (title === 'Login') {
      if (email === validEmail && password === validPassword) {
        alert('Login successful!');
        window.location.href = 'index.html'; 
      } else {
        alert('Invalid email or password. Please try again.');
      }
    } else {
      alert('Sign-up successful!');
      window.location.href = 'index.html'; 
    }
  }
  document.getElementById('sign-in-button').addEventListener('click', () => {
    togglePopup(true);
  });
  document.querySelector('.login-popup-title img').onclick = () => togglePopup(false);
  


document.getElementById('logout-link').addEventListener('click', function(event) {
    event.preventDefault();
    alert('You have been logged out successfully.');
    window.location.href = 'index.html'; 
  });
  
