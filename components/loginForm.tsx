import { useState } from "react";
import { createToken } from "@/utils/checkToken";

export default function LoginForm() {
 const [password, setPassword] = useState("");
 const [login, setLogin] = useState("");
 const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  const token = createToken(login, password);
  localStorage.setItem("myToken", token);
  setPassword("");
  setLogin("");
  window.location.reload();
 };
 return (
  <>
   <form
    onSubmit={handleSubmit}
    className="font-bold ml-[50%] translate-x-[-50%] mt-20 flex flex-col w-[40%] items-center"
   >
    <input
     type="text"
     value={login}
     onChange={(e) => setLogin(e.target.value)}
     placeholder="Login"
     className="p-2 focus:outline-none rounded-sm mb-2 w-full"
    />
    <input
     type="password"
     value={password}
     onChange={(e) => setPassword(e.target.value)}
     placeholder="Password"
     className="p-2 focus:outline-none rounded-sm mb-2 w-full"
    />

    <button
     type="submit"
     className="bg-sky-200 w-[50%] py-1 mt-3 border-2 border-sky-200 hover:bg-transparent hover:text-sky-200 rounded-md duration-300 text-lg"
    >
     Submit
    </button>
   </form>
  </>
 );
}
