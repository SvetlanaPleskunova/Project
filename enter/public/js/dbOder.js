const express = require('express')
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '123',
  port: 5433,
  })

var tableName="public.orderz"
var tableName1="user"
  client.connect();
  function dbOrder() {
    this.newOrder = async function (id_worker,ordertxt,id_user,sum,adress,date,name) {
      let values = [id_worker,ordertxt,id_user,sum,adress,date,false,name];
      let query = "INSERT INTO "+tableName+" (worker_id,ordertxt,user_id,sum,adress,data,done,namesweet) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) "
      var rows = await client.query(query,values);

    }
    this.getOrder = async function (id_user) {
      let values = [id_user];
      let query = "SELECT t1.*, t2.firstname, t2.name,t2.numberphone FROM "+tableName+" t1 JOIN public."+tableName1+" t2 ON t1.worker_id=t2.id  WHERE t1.user_id=$1;"
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res.rows;
                              })
                              return rows;

    }
    //Получаем сведения о заказе по id заказчика и исполнителя , также сведения о заказчике(имя, фамилия, номер телефона)
    this.getOrderUs = async function (id_user,id) {
      let values = [id_user,id];
      let query = "SELECT t1.*, t2.firstname, t2.name,t2.numberphone FROM "+tableName+" t1 JOIN public."+tableName1+" t2 ON t1.user_id=t2.id  WHERE t1.user_id=$1 AND t1.worker_id=$2;"
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res.rows;
                              })
                              return rows;

    }
    //Получаем список заказчиков по исполнителю
    this.getOrderWorker = async function (id) {
      let values = [id];
      let query = "SELECT user_id FROM "+tableName+" WHERE worker_id=$1;"
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res.rows;
                              })
                              return rows;

    }
    this.done = async function (id) {
      let values = [id];
      let query="UPDATE "+tableName+" SET done = true WHERE id=$1;";
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res;
                              })
    }
    this.cancelOrder=async function(id){
      let values=[id,false];
      let query="DELETE FROM "+tableName+" WHERE id=$1 AND done=$2 "
      var rows = await client.query(query,values)
                      .then(res=>{
                        return res;
                      })
    }
  }
  

module.exports=dbOrder;






























/* .makeOrder button{
	   width: 250px;
	   height: 70px;
	   margin-top: 20px;
	   margin-left: 1700px;
	   color: #fff;
	   font-weight: bold;
	   text-transform: uppercase;
	   border: none;
	   background: #0fc3f5;
	   transition: .3s;
   }
   
   
   
   .makeOrder button:hover {
	   background: #4442db;
   }*/


/*const express = require('express')
const { Client } = require('pg');

const client = new Client({
user: 'postgres',
host: 'localhost',
database: 'diplom',
password: '123',
port: 5433,
})

client.connect();
function dbOder(){

var tableName="user"
    this.getCity=async function(){
        let query="SELECT city FROM public."+tableName+" ;"
        var rows=await client.query(query)
         .then(res=>{
             return res.rows;
         })
         .catch (err=>{
             console.log("error");

         })
         return rows;
    }
}
module.exports=dbOder;*/
