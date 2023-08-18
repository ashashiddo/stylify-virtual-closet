require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors');
app.use(cors());

const { connectDB, pool } = require("./db/database");

// routes
// const userRouter = require("./routes/users")

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/xyz", (req, res)=> {
    return res.json({
        test: "communication established"
    })
})
app.post("/register_user", (req, res) => {
    console.log("client data is", req.body.payload);
    let data = req.body.payload;
    pool.query(
        `INSERT INTO users (username, password, email) VALUES ($1, $2, $3);`,
        [data.firstname, data.lastname, data.email]
      );
    return res.json({
        user: "user registered"
    })
})

// app.get("/users", () => {
//     db.query(`
//    SELECT * FROM users;   
                
//   `).then(({ rows }) => {
//     response.json(rows[0].photo_data);
//   });
// })
app.get("/abc", async (req, res) => {
  const user_id = 1;
  const randomString = "yyz";
  // in the frontend, each category id is going to be sent from the frontend
  const matchData = [
    {
      catid: 3,
    },
    {
      catid: 4,
    },
  ];
  for (const catid of matchData) {
    console.log(catid.catid)
    await pool.query(
      `INSERT INTO matches (user_id, category_id, randomGenerateString) VALUES ($1, $2, $3);`,
      [user_id, catid.catid, randomString]
    );
  }
  res.send("abc");
});

// app.use("/api/v1/users", userRouter)

const startApp = async () => {
  try {
    await connectDB();
    app.listen(
      process.env.PORT,
      console.log(`App started on PORT ${process.env.PORT}`)
    );
  } catch (err) {
    console.log("an error occured", err);
  }
};

startApp();
