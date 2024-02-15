import express from "express"
import mysql from "mysql"

let connection = mysql.createConnection({
    host : '127.0.0.1',
    user : 'root',
    password : '',
    database : 'hillel',
})
const app = express()
const PORT = 3000

app.use(express.json())

app.get("/users",(req,res)=>{
    connection.connect();

    connection.query("SELECT * FROM users", function (error, results, fields){
        if (error) throw error;
        console.log("The solution is: ", results);
        res.json(results)
    });
   
    
    connection.end();
        
});

app.get("/users/:id",(req,res)=>{
    const {id} = req.params
    connection.connect();
    connection.query(`SELECT * FROM users WHERE id = ${id}`, function(error, results, fields){
        if (error) throw error;
        console.log("The solution is: ", results);
        res.json(results)

    })
    connection.end();

});

app.post("/user", (req, res) => {
    const { name, age, sex } = req.body
    connection.connect();
      connection.query(
        `INSERT INTO users (name,age,sex) VALUES ('${name}','${age}','${sex}')`,
        function (error, results, fields) {
          if (error) throw error;
          console.log(results);
        }
      );
});

app.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    connection.connect();      
        connection.query(
        `DELETE from users WHERE id=${id}`,
        function (error, results, fields) {
          if (error) throw error;
          console.log(results);
          res.json(results);
        }
      );
});



app.listen(PORT,()=>{
    console.log("Listening on port 3000")
});
