import LoginData from "../../models/LoginData";
import { fire } from "../../api/firebaseConfig";

export const login = async (data: LoginData) => (
    await fire.auth().signInWithEmailAndPassword(data.email, data.password).then(res => (
        { email: (res.user && res.user.email) || ""}
    )).catch(error => {
        console.log("error", error);
        return {error: error.message};
    })
);

export const signout = async () => {
    await fire.auth().signOut()
    .catch(error => {
        console.log(error);
    })
};

export const register = async ({email, password}: LoginData) => (
    fire.auth().createUserWithEmailAndPassword(email, password).then(res => ({user: true}))
    .catch(error => {
        console.log(error);
        return {error: error.message};
    })
);