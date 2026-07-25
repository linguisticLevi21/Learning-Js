const EventEmitter = require("events");

class Chatroom extends EventEmitter {
  constructor() {
    super();
    this.users = new Set();
  }

  join(user) {
    this.users.add(user);
    this.emit("user-joined", user);
  }

  sendmessage(user, message) {
    if (this.users.has(user)) {
      this.emit("message", { user, message });
    } else {
      throw new Error("User not in chatroom");
    }
  }

  leave(user) {
    if (this.users.has(user)) {
      this.users.delete(user);
      this.emit("user-left", user);
    } else {
      console.log("User not in chatroom");
    }
  }
}

module.exports = Chatroom;
