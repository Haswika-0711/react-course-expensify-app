import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database=firebase.database();


export {firebase, database as default};


 // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


//  database.ref('expenses').on('value',(snapshot) =>{
//     const expenses = [];
//     snapshot.forEach((childSanpshot) =>{
//         expenses.push({
//           id: childSanpshot.key,
//           ...snapshot.val()
//         });
//     });

//     console.log(expenses);
//  });


 
  // database.ref('expenses').push({
  //   description: 'Rent',
  //   note: '',
  //   amount: 3000,
  //   createdAt: 10000
  // });

 
  
  // database.ref().on('value',(snapshot) => {
  //   console.log(snapshot.val());
  // });


  //   database.ref().set({
//       name: 'Haswika',
//       age:21,
//       stressLevel: 6,
//       job : {
//           title: 'technical associate',
//           company: 'google'
//       },
//       location: {
//             city: 'TS',
//             country: 'India'
//           }
//   }).then(() =>{
//       console.log('Data is saved')
//   }).catch((e) =>{
//       console.log('This failed',e)
//   });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'DBS',
//   'location/city': 'Hyderabad'
// });


//   database.ref()
//     .remove()
//     .then(() => {
//         console.log('Data was removed');
//     }).catch((e) => {
//         console.log('Did not remove data', e);
//     });