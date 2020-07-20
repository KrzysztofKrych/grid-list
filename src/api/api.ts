import { db } from "./firebaseConfig";
export const get = async (collection: string) => 
    await db.collection(collection).get().then(snapshot => 
        snapshot.docs.map(doc => {
            return {
                ...doc.data(),
                id: doc.id
            }
        }
    ));