import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyCBgm5OX_hxLmzEwdc601lBdohbtffIu20",
    authDomain: "redditcontent-c615a.firebaseapp.com",
    databaseURL: "https://redditcontent-c615a.firebaseio.com",
    projectId: "redditcontent-c615a",
    storageBucket: "",
    messagingSenderId: "710267186863"
};
var fire = firebase.initializeApp(config);
export default fire;
