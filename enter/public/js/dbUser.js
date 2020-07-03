const express = require('express')
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '123',
  port: 5433,
  })
var tableName="user"
  client.connect();
  function dbUser(email,password){


    this.CheckAll = async function (email,password) {
    let query="SELECT * FROM public."+tableName+" WHERE email=$1 AND password=$2"
    let values=[email,password]
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res.rowCount
                          })
  console.log(rows)
  if (rows==1) {
    return true;
  } else return false;



}
this.CheckLogin = async function (email){
  
  let query="SELECT email FROM public."+tableName+" WHERE email=$1"
  let values=[email]
  var rows=await client.query(query,values)
  .then(res=>{
    return res;
  })
  if (rows.rowCount==0) {
    return false;
  } else return true;
}

this.CheckPassword = async function (password){
  let query="SELECT password FROM public."+tableName+" WHERE email=$1"
  let values=[password]
  var rows=await client.query(query,values)
  .then(res=>{
    return res.rows[0].password
  })
  if (rows==0) {
    return false;
  } else return true;
}

this.GetId=async function (email){
  let query="SELECT id FROM public."+tableName+" WHERE email=$1"
  let values=[email]
  var rows=await client.query(query,values)
  .then(res=>{
    return res.rows[0].id
  })
  return rows;
}

this.CheckRole=async function(id){
  let query="SELECT role FROM public."+tableName+" WHERE id=$1"
  let values=[id]
  var rows=await client.query(query,values)
  .then(res=>{
    return res.rows[0].role
  })
  return rows;
}

this.UserReg=async function(firstname,name,numberphone,adres,email,password,role){
  let values=[firstname,name,numberphone,adres,email,password,role]
  let query="INSERT INTO public."+tableName+"(firstname,name,numberphone,city,email,password,role) VALUES ($1, $2,$3,$4,$5,$6,$7)";
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res.rowCount
                          })
  console.log(rows)
  if (rows==1) {
    return true;
  } else return false;



}
this.getUserInfo = async function (id) {
  let query="SELECT id,name,firstname,numberphone,email FROM public."+tableName+" WHERE id=$1"
  let values=[id]
  var rows=await client.query(query,values)
  .then(res=>{
    return res.rows;
  })
  return rows;
}




  }



module.exports = dbUser;
