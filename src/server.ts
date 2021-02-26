import 'reflect-metadata';
import express from 'express';
import "./database";
const app = express();



app.get( "/", (req, res) => {
  return res.json({usuario: "RatoLino", password: 582935, sexo: "Masculino", isDev: true});
} );

app.post( "/", (req, res) => {
  return res.json({message: "Os dados foram salvos com sucesso!"});
} );

app.listen(3333, () => console.log("Server is Running!"));