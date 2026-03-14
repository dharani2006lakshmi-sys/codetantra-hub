const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "YOUR_PROJECT.firebaseapp.com",
projectId: "YOUR_PROJECT_ID"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

function googleLogin(){
firebase.auth().signInWithPopup(provider)
.then((result)=>{
window.location="dashboard.html";
})
.catch((error)=>{
alert(error.message);
});
}