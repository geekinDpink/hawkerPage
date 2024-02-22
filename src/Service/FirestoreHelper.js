//Firebase Firestore
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Timestamp,
  getDocs,
  doc,
} from "firebase/firestore";

initializeApp({
  apiKey: process.env.REACT_APP_FIRESTORE_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSG_SENDING_ID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREID,
});

const db = getFirestore();

export function addVolunteer(name, email, phone, interest, msg) {
  try {
    const docRef = addDoc(collection(db, "volunteers"), {
      name: name,
      email: email,
      phone: phone,
      interest: interest,
      msg: msg,
      volunteerStatus: "Open",
      timeStamp: Timestamp.now(),
    });

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

//#3 Solution with async and await and push doc.data into [] instead of creating own json
export async function getAllStall() {
  const querySnapshot = await getDocs(collection(db, "hawkers"));

  var allStall = [];

  querySnapshot.forEach((doc) => {
    var stall = doc.data();

    allStall.push(stall);
  });

  return allStall;
}

/* #2 Solution via adding async and await to then, not good as it mixed both promise with asyc/await
export async function getAllStall(){

  var allStall = [];

  try
  {
    await getDocs(collection(db, "hawkers")).then((querySnapshot) =>
      {
        querySnapshot.forEach((doc) =>
          {
            var stall = doc.data();
            var name = stall.stallname;
            var category = stall.category;
            var description = stall.description;

            var stallData = {
              stallName:name,
              stallCategory:category,
              stallDescription:description
            };
            //console.log(stallData); //object of individual stall data
            allStall.push(stall);
            //console.log(allStall); //object of individual stall data

          }
        );
        //allStall.map((stall)=>console.log(stall.stallname));
      }
    );


    //console.log(allStall); //array of all stalls data

  }


  catch (e) {
    console.error("Error get all document: ", e);
  }

  
  
  return allStall;
}
*/

/* #1 without async, churn out array of objects that cannot be accessed
export function getAllStall(){

  var allStall = [];

  try
  {
    getDocs(collection(db, "hawkers")).then((querySnapshot) =>
      {
        querySnapshot.forEach((doc) =>
          {
            var stall = doc.data();
            var name = stall.stallname;
            var category = stall.category;
            var description = stall.description;

            var stallData = {
              stallName:name,
              stallCategory:category,
              stallDescription:description
            };
            //console.log(stallData); //object of individual stall data
            allStall.push(stall);
            //console.log(allStall); //object of individual stall data

          }
        );
      }
    );


    //console.log(allStall); //array of all stalls data

  }


  catch (e) {
    console.error("Error get all document: ", e);
  }
  
  return allStall;
}
*/
