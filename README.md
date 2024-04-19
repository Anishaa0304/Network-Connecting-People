# Network-Connecting_People

Website Url: https://network-connecting-people.netlify.app/

This project has been a great learning experience for me. I became more familiar with ReactJS, a powerful JavaScript library for building user interfaces. I also had the opportunity to work with Redux, a library for managing application state, and Material UI, a library of React components that implement the material design guidelines.
I also gained knowledge about Firebase, a platform for managing data and user authentication. I learned how to use Firebase's real-time database and authentication system to create a seamless and secure user experience.

____________________________________________________________________________________________________________________
𝗔𝗕𝗢𝗨𝗧 𝗧𝗛𝗘 𝗣𝗥𝗢𝗝𝗘𝗖𝗧

Network, the social platform where you can connect with people from all around the world. Here, you can create a profile, upload a photo, and share messages with others. With Network, you can expand your social circle and make connections with like-minded individuals no matter where you are. So why wait? Register today and start building your network!

____________________________________________________________________________________________________________________
𝗧𝗘𝗖𝗛𝗡𝗢𝗟𝗢𝗚𝗜𝗘𝗦 𝗨𝗦𝗘𝗗

ReactJS: a JavaScript library for building user interfaces                                          
Redux: a JavaScript library for managing application state                                                         
Firebase: a platform for managing data and user authentication                                                          
CSS: a stylesheet language for describing the look and formatting of a document                                     
Netlify: a cloud platform for hosting websites                                                                      
Material UI: a library of React components that implement the material design guidelines                                

_____________________________________________________________________________________________________________________
# Setup Guide

1. Clone this repo

2. Use the following command to clone the repository:
```
git clone https://github.com/<your-github-username>/network-connecting-people.git
```
3. Install all the dependencies
    ```bash
    npm i
    ```
4. Setup Firebase

    - Follow the steps below to set up Firebase for the project:
    - Go to the Firebase Console
    - Create a new project
    - Go to the Develop section and select Database
    - Go to the Develop section and select Authentication
    - Set up email and password authentication

In the project, go to the src/firebase.js file and add your Firebase credentials as follows:


       import firebase from 'firebase/app';
       import 'firebase/firestore';
       import 'firebase/auth';

       const config = {
           apiKey: 'your-api-key',
           authDomain: 'your-auth-domain',
           databaseURL: 'your-database-url',
           projectId: 'your-project-id',
           storageBucket: 'your-storage-bucket',
           messagingSenderId: 'your-messaging-sender-id',
           appId: 'your-app-id'
        };
        
        firebase.initializeApp(config);
        export const auth = firebase.auth();
        export const firestore = firebase.firestore();
        export default firebase;
         

5. **Start the development server Use the following command to start the development server:**
        ```
        npm start
        ```
    The website will be available at http://localhost:3000/.



**_NOTE:  Make sure to replace the placeholder values in the src/firebase.js file with your own Firebase credentials**
