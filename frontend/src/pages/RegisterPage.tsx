import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VITE_API_URL } from '../setupEnv';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';


const RegisterPage = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  async function registerUser(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    try {
      await axios.post(`${VITE_API_URL}/register`, {
        name,
        email,
        password,
      });
      alert('Registration Sucessfull. You Can Login Now');
      navigate(`/login`);
    } catch (e) {
      alert('Registration failed. Please try again later');
    }
    
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64 flex flex-col gap-5 w-[90%]">
        <h1 className="text-4xl font-bold text-center mb-4">Join us today.</h1>
        <form className="max-w-md mx-auto flex flex-col gap-12" onSubmit={registerUser}>
          <Input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className='w-96 flex items-center justify-center'
          />
          <Input
            type="email"
            placeholder="Enter e-mail"
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <Input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />

          <Button>Register Here</Button>
          <div className="text-center py-2 text-gray-500">
            Already a member?{' '}
            <Link className="underline text-foreground" to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;