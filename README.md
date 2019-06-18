# Calculator App  

A calculator app that logs your calculation as its happens and shares it with everyone connected on the site

** see TASK.md for details

## View site
Visit https://calculator-socket-app.herokuapp.com/

## local setup
Clone the repository and `cd` into the directory            
Type `npm install` followed by `npm run start` to begin the app

Any connections made to localhost:3000 from your IP will enter a new session              
and the calculations made will be broadcasted to every client on that IP


## Tech
- node
- mathjs
- express
- socket.io
- sessionStorage
