const API = 'http://localhost:3000/login';

export default function Login() {
  useEffect(() => {
    fetch(API).then(res => res.json()).then(data => console.log(data));

    return () => {
      console.log('Data cleanup')
    }
  }, []);

  return (
    <div>
      <div>Login Page</div>
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <button>Login</button>
    </div>
  )
}
