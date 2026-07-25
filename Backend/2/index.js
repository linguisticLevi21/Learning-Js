const chatroom = require("./project_node");

const myChatroom = new chatroom();

myChatroom.on("user-joined", (user) => {
  console.log(`${user} has joined the chatroom.`);
});

myChatroom.on("message", ({ user, message }) => {
  console.log(`${user}: ${message}`);
});

myChatroom.on("user-left", (user) => {
  console.log(`${user} has left the chatroom.`);
});

myChatroom.join("Alice");
myChatroom.join("Bob");
myChatroom.sendmessage("Alice", "Hello everyone!");
myChatroom.sendmessage("Bob", "Hi Alice!");

myChatroom.leave("Alice");
myChatroom.sendmessage("Bob", "Goodbye Alice!");

// now i want to learn what is happening with my this proiject
// what happens when i run this project and what is the output of this project
// so when you run this project, the following sequence of events occurs:
// 1. The `Chatroom` class is imported from the `project_node.js` file.
// 2. An instance of the `Chatroom` class is created and assigned to the variable `myChatroom`.
// 3. Event listeners are set up for the `user-joined`, `message`, and `user-left` events.
// 4. The `join` method is called for "Alice" and "Bob", which adds them to the chatroom and emits the `user-joined` event for each user. The corresponding event listener logs a message indicating that each user has joined.
// 5. The `sendmessage` method is called for "Alice" and "Bob", which emits the `message` event with the user and message details. The corresponding event listener logs the messages sent by each user.
// 6. The `leave` method is called for "Alice", which removes her from the chatroom and emits the `user-left` event. The corresponding event listener logs a message indicating that Alice has left.
// 7. Finally, "Bob" sends a message after Alice has left, which is logged as well.
// these all was in project_node.js file and this is the output of this project when you run it:
// now u need to export this module we will use module.exports = myChatroom; // export the instance of Chatroom to use in other files
// and since for better understanding suppose this as we have created a super class
// as in oops and now we need to create objects of this class and we can create multiple objects of this class and we can use them in other files as well
// that is how by exporting and calling the module using require function we can use the same class in multiple files and create multiple instances of it and use them as per our requirement
// so this is how we can use the event emitter class in node js and create our own custom events and listen to them and perform actions accordingly
// now to understand the project more better
// its simple as alice and bob are two users who are joining the chatroom and sending messages to each other and leaving the chatroom and we are listening to these events and performing actions accordingly
// so when anyone joins its an event and we are listening to that event and logging a message when that event occurs
// and after listening this event we can perform any action we want like sending a welcome message to the user or notifying other users that a new user has joined the chatroom
// that is how it clarify the doubt of event listeners and event emitters in node js and how we can use them to create our own custom events and listen to them and perform actions accordingly
