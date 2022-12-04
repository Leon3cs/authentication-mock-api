const express = require("express");
const axios = require("axios").default
const apiKeyHandler = require("./api-key")
const customCredentialHandler = require("./custom-credential")
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())

app.get("/api-key-example/products", (req, res) => {
  if(apiKeyHandler.validateApiKey(req)){
    res.status(200).send(apiKeyHandler.collectData())
  }else{
    res.status(400).send({
      message: 'invalid api_key'
    })
  }
});

app.get("/header-api-key-example/products", (req, res) => {
  if(apiKeyHandler.validateApiKeyHeader(req)){
    res.status(200).send(apiKeyHandler.collectData())
  }else{
    res.status(400).send({
      message: 'invalid api_key'
    })
  }
});

app.get("/custom-credential-example/products", (req, res) => {
  if(customCredentialHandler.validateCredentials(req)){
    res.status(200).send(customCredentialHandler.collectData())
  }else{
    res.status(400).send({
      message: 'invalid api_key'
    })
  }
})

app.post("/simulate-webhook-call", (req, res) => {
  const sessionId = req.body.sessionId
  const url = req.body.baseUrl
  const instance = axios.create({
    baseURL: url,
    headers: {
      'Authorization': `Bearer ${sessionId}`,
      'Content-type': 'application/json'
    }
  })
  instance
  .post("/products", JSON.stringify(customCredentialHandler.collectData()))
  .then(data => {
    console.log(data.status)
    res.status(200).send('product data delivered')
  })
  .catch(error => {
    console.log(error)
    res.status(500).send(error)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));