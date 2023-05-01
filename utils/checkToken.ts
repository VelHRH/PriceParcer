import jwt from "jsonwebtoken";

export const createToken = (login: string, password: string): string => {
 const expirationDate = new Date();
 expirationDate.setDate(expirationDate.getDate() + 1);
 const token = jwt.sign(
  { login, password, exp: expirationDate.getTime() / 1000 },
  "mySecret"
 );
 return token;
};

export const checkToken = (): boolean => {
 if (typeof window !== "undefined") {
  console.log(process.env.PASSWORD + ", " + process.env.LOGIN);
  const token = localStorage.getItem("myToken");
  if (token) {
   const decodedToken = jwt.decode(token) as {
    login: string;
    password: string;
    exp: number;
   };
   if (
    decodedToken.exp * 1000 > Date.now() &&
    decodedToken.password === process.env.PASSWORD &&
    decodedToken.login === process.env.LOGIN
   ) {
    return true;
   } else {
    localStorage.removeItem("myToken");
   }
  }
 }
 return false;
};
