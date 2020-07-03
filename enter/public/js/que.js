const { Client } = require('pg');

const client = new Client({
user: 'postgres',
host: 'localhost',
database: 'diplo',
password: '123',
port: 5432,
})
client.connect();
var title="";
var _content="";
//var count;




function page(){
this.title = async function (iden)
{
title = "";
let query="SELECT title FROM pages WHERE iden = $1;";
values=[iden]
var title = await client.query(query,values)
.then(res=>{
return res.rows[0].title;
})
.catch(err=>{
  return "ошибка параметра";
})
return title;

};
/*
this._content = async function (iden)
{

let query="SELECT _content FROM pages WHERE iden = $1;";
values=[iden]
var content = await client.query(query,values)
.then(res=>{
return res.rows[0]._content;
})
.catch(err=>{
  return "ошибка параметра";
})
return content;
};


this.table = async function (table) {
let query="SELECT * FROM "+table;
var arr_name= await client.query(query)
.then(res=>{
return res.rows[0];
})
.catch(err=>{
  return "ошибка параметра";
})
return arr_name;
};*/
}



module.exports = page;
