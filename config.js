import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {

 apiKey: "AIzaSyCXAyvGrszEx2uYrXn2ccnKZGXj_F1M19E",
 authDomain: "complaint-form-a7986.firebaseapp.com",
 projectId: "complaint-form-a7986",
 storageBucket: "complaint-form-a7986.appspot.com",
 messagingSenderId: "754852944627",
 appId: "1:754852944627:web:5d358e1f7552eae851f586"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

