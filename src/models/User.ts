import { loginState } from "../store/data/user/user.reducer";

export default interface User{
    isLoggedIn: loginState;
    email: string;
};