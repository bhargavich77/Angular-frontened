export interface User {
  id?: string;
}
export interface Signup {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
export interface Signin {
  email: string;
  password: string;
}
export interface Fmail {
 
  email: string;
 
}
export interface ICreateNote {
 
 title:string;
 description:string;
 
}
