const express = require("express");
const apiKeyHandler = require("./api-key")
const customCredentialHandler = require("./custom-credential")
const app = express();
const port = process.env.PORT || 3001;

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

app.listen(port, () => console.log(`Example app listening on port ${port}!`));