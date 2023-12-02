import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [isLogIn, setIsLogIn] = useState(true);
    const { login, signup, currentUser } = useAuth();
    console.log(currentUser);


    async function submitHandler() {
        if (!email || !password) {
            setError("Please enter valid email and password");
            return;
        }
        if (isLogIn) {
            try {
                await login(email, password);
            } catch (err) {
                setError('Incorrect email and password')
            }
            return;
        }
        await signup(email, password);
    }
    return (
        <div className="flex-1 flex flex-col justify-center items-center gap-4 bg-gray-200 pt-72 pb-72">
            <h1 className="font-extrabold text-2xl select-none">{isLogIn ? 'LOGIN' : "REGISTER"}</h1>
            {error && (
                <div className="w-full max-w-[35ch] border-rose-300 text-rose-300 py-2 border border-solid text-center">
                    {error}
                </div>
            )}
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="outline-none text-slate-900 p-2 w-full max-w-[35ch] "
                placeholder="Email address..."
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="outline-none text-slate-900 p-2 w-full max-w-[35ch]"
                placeholder="Password..."
            />
            <button
                onClick={submitHandler}
                className="w-full max-w-[35ch] border border-white border-solid py-2 uppercase"
            >
                Submit
            </button>
            <h2 className="duration-300 hover:scale-110 cursor-pointer" onClick={() => setIsLogIn(!isLogIn)}>{!isLogIn ? 'Login' : 'Register'}</h2>
        </div>
    );
};

export default Login;
