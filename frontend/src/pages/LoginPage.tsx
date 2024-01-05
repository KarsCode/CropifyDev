import React, { FC, useState, ChangeEvent, FormEvent, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { VITE_API_URL } from '../setupEnv';
import { UserContext } from '../UserContext.tsx';



const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirect,setRedirect]= useState(false);
  const {setUser} = useContext(UserContext);
  const handleLoginSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      const {data} = await axios.post(`${VITE_API_URL}/login`, { email, password },{withCredentials:true});
      setUser(data);
      alert('Login successful');
      setRedirect(true);
    } catch (e) {
      alert('Login failed');
    }
  };

  const handleEmailChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
  };

  const handlePasswordChange = (ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  if(redirect){
    return <Navigate to={'/'}/>
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="primary">Login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have an account yet?{' '}
            <Link className="underline text-foreground" to={'/register'}>
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;