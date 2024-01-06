import React, { FC, useState, ChangeEvent, FormEvent, useContext } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';
import { VITE_API_URL } from '../setupEnv';
import { UserContext } from '../UserContext.tsx';
import { Input } from '../components/ui/input.tsx';
import { Button } from '../components/ui/button.tsx';
import { useToast } from "../components/ui/use-toast"



const LoginPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [redirect,setRedirect]= useState(false);
  const {setUser} = useContext(UserContext);
  const { toast } = useToast()
  const handleLoginSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    try {
      const {data} = await axios.post(`${VITE_API_URL}/login`, { email, password },{withCredentials:true});
      setUser(data);
      toast({
        title: "Login ",
        description: (
          <pre className="mt-2 w-[340px] rounded-md bg-crophover p-4">
           You have been succesfully logged in.
          </pre>
        ),  
      })
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
    <div className="mt-24 flex flex-col items-center justify-around">
      <div className="mb-64 flex flex-col gap-5">
        <h1 className="text-4xl font-bold text-center pb-4">Begin your journey.</h1>
        <form className="max-w-md mx-auto flex flex-col gap-12" onSubmit={handleLoginSubmit}>
          {/* <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={handleEmailChange}
          /> */}
          <Input 
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={handleEmailChange}
          required/>
          
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={handlePasswordChange}
          />

          <Button>Login</Button>
          {/* <button className="primary">Login</button> */}
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