import LoginData from "../../models/LoginData";
import { fire } from "../../api/firebaseConfig";

export const login = async (data: LoginData) => (
    await fire.auth().signInWithEmailAndPassword(data.email, data.password).then(res => 
        (res.user && res.user.email) || ""
    ).catch(error => {
        console.log("error", error)
    })
);

export const signout = async () => {
    await fire.auth().signOut()
    .catch(error => {
        console.log(error);
    })
};