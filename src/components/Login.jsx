import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import users from "../data/users.json"; 

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // verify if user exist in the file of JSON  
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      sessionStorage.setItem("user", JSON.stringify(user));  
      navigate("/dashboard"); 
    } else {
      alert("Identifiants incorrects !");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 to-teal-400">
      <div className="px-8 py-6 w-96 rounded-md shadow-xl bg-white">
        <h1 className="text-2xl font-bold text-center mb-4">LOGIN 😁</h1>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username" className="block text-gray-700 font-medium">Email :</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your mail ..."
              className="bg-gray-100 my-2 rounded-full h-10 w-full px-4"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium">Password :</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password ..."
              className="bg-gray-100 my-2 rounded-full h-10 w-full px-4"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between mt-4">
            <button type="submit" className="bg-green-500 text-white rounded-full px-6 py-2 w-40">Connecter</button>
            <button type="reset" className="bg-red-500 text-white rounded-full px-6 py-2 w-40">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
