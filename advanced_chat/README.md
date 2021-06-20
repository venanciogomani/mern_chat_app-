# MERN: Chat Application

### Features

<br/>
* Authentication using **JWT Tokens**
* A **Global Chat** which can be used by anyone using the application to broadcast messages to everyone else.
* A **Private Chat** functionality where users can chat with other users privately.
* Real-time updates to the user list, conversation list, and conversation messages

### Installation Notes

1. Clone this repo
2. Run `npm install` to install the dependencies of the Node.js server and then run `npm run client-install` to install the dependencies of the frontend.
3. Make sure you have Mongo installed. Make sure you edit the `mongoURI` in the `config/keys.js` file.
4. Run `npm run dev`


### Things to note

* The frontend is created using [create-react-app](https://github.com/facebook/create-react-app)
* Database connections in the backend are handled using the [Mongoose ORM](https://mongoosejs.com/)
* Code quality is ensured using (ESLint)[https://eslint.org/]