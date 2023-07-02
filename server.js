const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
require('dotenv').config()

const {Configuration, OpenAIApi} = require("openai")

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });
  const openai = new OpenAIApi(configuration);


const app = express();
app.use(express.json())

// app.use(bodyParser.json());

app.use(cors({

    credentials:true,
    origin:"https://sanjay-chatgpt.vercel.app"
}))

// // app.post("/chat", async (req,res)=>{
// //    
// // })


app.post("/getChat", async (req,res)=>{
    // res.json(req.body);
    // console.log(req.body)
    const {prompt } = req.body;
        // console.log(prompt)

        const completion = await openai.createCompletion({
                  model: "text-davinci-003",
                  prompt: prompt,
                });
                // console.log(completion.data.choices[0].text);
                res.json(completion.data.choices[0].text)
        

})



// app.get("/",(req,res)=>{
//     res.send("works")
// })

// -------------------
// const { Configuration, OpenAIApi } = require("openai");
// // require('dotenv').config()

// const configuration = new Configuration({
//     apiKey: "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",
//   });
//   const openai = new OpenAIApi(configuration);

//   async function runCompletion () {
//     const completion = await openai.createCompletion({
//       model: "text-davinci-003",
//       prompt: "How are you today?",
//     });
//     console.log(completion.data.choices[0].text);
//     }
//     runCompletion();

// -------------------

app.listen(5000, ()=>{
    console.log("server loading")
})