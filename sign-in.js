document.addEventListener('DOMContentLoaded', ()=>{
  const form = document.getElementById('signin-form');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const msg = document.getElementById('auth-msg');

  function setMessage(text, type){
    msg.textContent = text;
    msg.className = 'auth-msg';
    if(type) msg.classList.add(type);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    setMessage('');
    const em = (email.value || '').trim();
    const pw = password.value || '';
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){
      setMessage('Please enter a valid email address.', 'error');
      email.focus();
      return;
    }
    if(pw.length < 4){
      setMessage('Password must be at least 4 characters.', 'error');
      password.focus();
      return;
    }

    // Mock auth: store a simple token in localStorage
    const user = {email: em, token: 'mock-'+Date.now()};
    localStorage.setItem('enigmatic_user', JSON.stringify(user));
    setMessage('Signed in — redirecting...', 'success');
    setTimeout(()=>{
      window.location.href = 'index.html';
    }, 700);
  });
});
