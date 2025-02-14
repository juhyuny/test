import '@/pages/login/login.css'
import pb from '@/api/pocketbase';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'


pb

const data = await pb.collection('products').getFullList({
  sort: '-price'
})

console.log(data);


function renderlLogin(){
  
  const tag = /* html */`
    <div class="container">
    <h1>로그인</h1>
    <hr />
    <form>
      <div>
        <label for="idField"></label>
        <input type="email" id="idField" placeholder="아이디(이메일)" />
      </div>
      <div>
        <label for="pwField"></label>
        <input type="password" id="pwField" placeholder="비밀번호" />
      </div>
      <button type="submit" class="login">LOGIN</button>
    </form>

    <a class="register" href="/src/pages/register/">간편 회원가입</a>
  </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', tag);
}


async function handleLogin(e){
  e.preventDefault();
  
  console.log('click');
  
    // const id = document.querySelector('#idField').value;
    // const pw = document.querySelector('#pwField').value;
    
  try {
    const id = 'dengju@gmail.com';
    const pw = 'dkssud123!@';
    
    console.log(id, pw);
    
    await pb.collection('users')
    .authWithPassword(id,pw)
    
    const {record, token} = JSON.parse(localStorage.getItem('pocketbase_auth'));
    
    localStorage.setItem('auth', JSON.stringify({
      isAuth: !!record,
      user:record,
      token: token,
    }))
    
    
    Swal.fire({
      title: 'hello',
      text: '로그인 성공! 메인 페이지로 이동합니다.',
      icon: "success",
      confirmButtonText: '단기',
    }).then((res)=> {
      setTimeout(()=>{
        console.log(res);
        location.href = '/index.html'
      }, 300)
    })
    
    // alert('로그인 성공! 메인 페이지로 이동합니다.');
    // location.href = '/index.html'
    
    // console.log(auth);
  }
  catch {
    Swal.fire({
      title: '로그인 실패',
      text: '아이디 또는 비밀번호가 맞지 않습니다.',
      icon: "error"
    })
    console.log('err!');
  }
}

renderlLogin();


const loginButton = document.querySelector('.login');

loginButton.addEventListener('click', handleLogin)