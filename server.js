const http = require("http");
const mongodb = require("mongodb");

const fs = require("fs");

let user;
fs.readFile("./database/user.json", "utf8", (err, data) => {
    if(err){
        console.log("Error:", err);
    }else{
        user = JSON.parse(data);
    }
});

let db;
const connectionString = "mongodb+srv://abduvoxid2001_db_user:vNJdQLVbgNsyVmn7@cluster0.benbop5.mongodb.net/Reja?appName=Cluster0";
mongodb.connect(connectionString,
     {
     useNewUrlParser: true,
     useUnifiedTopology: true,
    },
     (err, client) => {
        if(err) console.log("ERROR on connection MongoDB");
        else {
            console.log("MongoDB connection succeed");
            module.exports = client;
            const app = require("./app");
            const server = http.createServer(app);
            let PORT = 5014;
            server.listen(PORT, function () {
            console.log(`The server is running successfully on port: ${PORT}, https://localhost:${PORT}`);
          });
        }
    }
); 
