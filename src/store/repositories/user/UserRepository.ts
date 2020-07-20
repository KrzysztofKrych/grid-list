import LoginData from "../../../models/LoginData";
import { fire } from "../../../api/firebaseConfig";

export const login = async (data: LoginData) => {
    return await fire.auth().signInWithEmailAndPassword(data.email, data.password).then(res => 
        (res.user && res.user.email) || ""
    ).catch((e)=>{
        console.log("error", e)
    })
}
