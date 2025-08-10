const username = document.getElementById('username');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('confirmPass');

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

function usernameCheck(){
  const usernameValue = username.value;

  if(usernameValue === ''){
    username.style.border = '1px solid gray';
    document.getElementsByClassName('warning')[0].innerHTML = '';
  }else{
    if(usernameValue.length < 3 || usernameValue.length > 25){
      document.getElementsByClassName('warning')[0].innerHTML = 'Username must be between 3 and 25 characters.';
      username.style.border = '2px solid rgb(230, 0, 0)';
    }else{
      document.getElementsByClassName('warning')[0].innerHTML = '';
      username.style.border = '2px solid green';
    }
  }
}

function emailCheck(){
  const emailValue = email.value;

  if(emailValue === ''){
    email.style.border = '1px solid gray';
    document.getElementsByClassName('warning')[1].innerHTML = '';
  }else{
    if(emailPattern.test(emailValue)){
      document.getElementsByClassName('warning')[1].innerHTML = '';
      email.style.border = '2px solid green';
    }else{
      document.getElementsByClassName('warning')[1].innerHTML = 'Please enter a valid email address.';
      email.style.border = '2px solid rgb(230, 0, 0)';
    }
  }
}

function passCheck(){
  const passValue = pass.value;
  const confirmPassValue = confirmPass.value;

  if(passValue === ''){
    pass.style.border = '1px solid gray';
    document.getElementsByClassName('warning')[2].innerHTML = '';
    document.getElementsByClassName('warning')[3].innerHTML = '';
    confirmPass.style.border = '1px solid gray';
  }else{
    if(passPattern.test(passValue)){
      document.getElementsByClassName('warning')[2].innerHTML = '';
      pass.style.border = '2px solid green';
    }else{
      document.getElementsByClassName('warning')[2].innerHTML = 'Password must has at least 8 characters that include at least 1 lowercase letter, 1 uppercase letter, 1 number, and 1 special character in (!@#$%^&*).';
      pass.style.border = '2px solid rgb(230, 0, 0)';
    }
  }

  if(passValue===''){
    document.getElementsByClassName('warning')[3].innerHTML = '';
    confirmPass.style.border = '1px solid gray';
  }else{
    if(passValue === confirmPassValue){
      document.getElementsByClassName('warning')[3].innerHTML = '';
      confirmPass.style.border = '2px solid green';
    }else{
      if(confirmPassValue === ''){
        document.getElementsByClassName('warning')[3].innerHTML = '';
        confirmPass.style.border = '1px solid gray';
      }else{
        document.getElementsByClassName('warning')[3].innerHTML = 'Password do not match.';
        confirmPass.style.border = '2px solid rgb(230, 0, 0)';
      }
    }
  }
}

function confirmPassCheck(){
  const passValue = pass.value;
  const confirmPassValue = confirmPass.value;

  if(passValue===''){
    document.getElementsByClassName('warning')[3].innerHTML = '';
    confirmPass.style.border = '1px solid gray';
  }else{
    if(passValue === confirmPassValue){
      document.getElementsByClassName('warning')[3].innerHTML = '';
      confirmPass.style.border = '2px solid green';
    }else{
      document.getElementsByClassName('warning')[3].innerHTML = 'Password do not match.';
      confirmPass.style.border = '2px solid rgb(230, 0, 0)';
    }
  }

  if(confirmPassValue === ''){
    document.getElementsByClassName('warning')[3].innerHTML = '';
    confirmPass.style.border = '1px solid gray';
  }
}

function signUp(event){
  event.preventDefault();

  const usernameValue = username.value;
  const emailValue = email.value;
  const passValue = pass.value;
  const confirmPassValue = confirmPass.value;

  if(usernameValue === '' || emailValue === '' || passValue === '' || confirmPassValue === ''){
    alert('Please fill in all fields!');
  }else if(username.style.border === '2px solid rgb(230, 0, 0)' || email.style.border === '2px solid rgb(230, 0, 0)' || pass.style.border === '2px solid rgb(230, 0, 0)' || confirmPass.style.border === '2px solid rgb(230, 0, 0)'){
    alert('You have not correctly filled out one of the fields!');
  }else{
    alert('Sign Up successful!');
    document.getElementById('form').submit()  
  }
}

function visibility(x){
  const passValue = pass.value;
  const confirmPassValue = confirmPass.value;

  const currentType0 = pass.type;
  const currentType1 = confirmPass.type;

  if(x===0){
    if(passValue === ''){
      return;
    }else{
      if(currentType0 === 'password'){
        pass.type = 'text';
      }else{
        pass.type = 'password';
      }
    }
  }else{
    if(confirmPassValue === ''){
      return;
    }else{
      if(currentType1 === 'password'){
        confirmPass.type = 'text';
      }else{
        confirmPass.type = 'password';
      }
    }
  }
}

