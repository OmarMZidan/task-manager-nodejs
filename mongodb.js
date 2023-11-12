// CRUD create read update delete

// const mongodb = require("mongodb-legacy");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId;

const { MongoClient, ObjectId } = require("mongodb-legacy");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }
    const db = client.db(databaseName);

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("6550d2ef3cf474571412f4f0"),
    //     },
    //     {
    //       $set: {
    //         name: "Hima",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("users").findOne(
    //   { _id: new ObjectId("654e825ccd97e7177854c49b") },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch!");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 36 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });
    // db.collection("users")
    //   .find({ age: 36 })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Omar",
    //       age: 36,
    //     },
    //     {
    //       name: "Omar",
    //       age: 36,
    //     },
    //     {
    //       name: "Aida",
    //       age: 31,
    //     },
    //     {
    //       name: "Amina",
    //       age: 21,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.error("Unable to insert user:", error);
    //     } else {
    //       console.log("Document inserted:");
    //     }
    //     // Close the connection after the operation
    //     // client.close();
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Read a book",
    //       completed: true,
    //     },
    //     {
    //       description: "Do homework",
    //       completed: false,
    //     },

    //     {
    //       description: "Charge the camera",
    //       completed: false,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.error("Unable to insert user:", error);
    //     } else {
    //       console.log(result);
    //     }
    //   }
    // );
    //   db.collection("tasks").findOne(
    //     {
    //       _id: new ObjectId("654e8823e1ac4bb991f8a15b"),
    //     },
    //     (error, task) => {
    //       if (error) {
    //         return console.log(error);
    //       }
    //       console.log(task);
    //     }
    //   );

    //   db.collection("tasks")
    //     .find({ completed: false })
    //     .toArray((error, tasks) => {
    //       console.log(tasks);
    //     });
    //   // client.close();
    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: false,
    //     },
    //     {
    //       $set: {
    //         completed: true,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // db.collection("users")
    //   .deleteMany({
    //     age: 21,
    //   })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    db.collection("tasks")
      .deleteOne({
        description: "Read a book",
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
