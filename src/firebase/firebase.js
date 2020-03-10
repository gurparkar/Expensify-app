import * as firebase from 'firebase'
import * as expensesActions from '../actions/expenses'



var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  }
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
console.log('Hello')
  
const database = firebase.database()

// database.ref('expenses')
//    .once('value') 
//    .then((snapshot) => {
//         const expenses = []
//         snapshot.forEach((childSnapshot) => {
//              expenses.push({
//                   id: childSnapshot.key,
//                   ...childSnapshot.val()
//              })
//         })
//         console.log(expenses)
//    })


// database.ref('expenses').on('value', (snapshot) => {
//      const expenses = []
//      snapshot.forEach((childSnapshot) => {
//           expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//           })
//      })
//      console.log(expenses)

// })
//database.ref().remove()

// database.ref('expenses').push({
//      description: 'Rent',
//      note: '',
//      amount: 109500,
//      createdAt: 942145445
// })  

// database.ref('notes/-M22eBlpzxbbTFn6hgEf').update({
//      title: 'Course Topics'
// })

// const firebaseNotes = {
//      notes: {
//           appppp: {
//                id: '12',
//                title: 'First hotel'
//           },
//           afadfasdfp: {
//                id: '25',
//                title: 'Second Hotel'
//           }
//      }
// }

// const notes = [ {
//      id: '12',
//      title: 'First hotel'
// }, {
//      id: '25',
//      title: 'Second Hotel'
// }
 

// ]

// database.ref('notes').set(notes)







export { firebase, database as default }



// database.ref().set({
//     name: 'Gurparkar Singh',
//     age: 25,
//     isSingle: false,
//     location: {
//          city: 'Philadelphia',
//          country: 'United States'
//     }
// }).then(() => {
//     return console.log('Updated database')
// }).catch((e) => {
//     console.log(e)
// })



// const reference = firebase.database().ref('location/city').set('New York')

// firebase.database().ref('height').set('6m')

// firebase.database().ref('attributes').set({
//     height: '5',
//     weight: 150
// })

// console.log("Reference", reference)

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//          console.log('Data was removed')
//     }).catch((e) => {
//          console.log('Did not remove data ')
//     })