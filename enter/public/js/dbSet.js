const express = require('express')
const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'diplom',
  password: '123',
  port: 5433,
  })

client.connect();
function dbSet(){



    let nameTable="basis";
///торты
    this.GetIdBisq=async function(name){
      let query="SELECT id FROM public."+nameTable+" WHERE name=$1"
      let values=[name]
      var rows=await client.query(query,values)
      .then(res=>{

        return res.rows[0].id
      })


      return rows;
    }

    let nameTable1="fill";

    this.GetIdNach=async function(name){
        let query="SELECT id FROM public."+nameTable1+" WHERE namefill=$1"
        let values=[name]
        var rows=await client.query(query,values)
        .then(res=>{

          return res.rows[0].id
        })

        return rows;
      }

      let nameTable2="krem";

      this.GetIdKrem=async function(name){


        let query="SELECT id FROM public.krem WHERE namekrem=$1"
        let values=[name]
        var rows=await client.query(query,values)
        .then(res=>{

          return res.rows[0].id
        })

        return rows;
      }
      this.getKorz = async function(){
          let query = "SELECT name FROM public."+nameTable+"";
          let rows = await client.query(query)
          .then(res=>{
              return res.rows;
          })
          return rows;
      }
      this.getNach = async function(){
        let query = "SELECT namefill FROM public."+nameTable1+"";
        let rows = await client.query(query)
        .then(res=>{
            return res.rows;
        })
        return rows;
    }

    this.getKrem= async function(){
        let query = "SELECT namekrem FROM public."+nameTable2+"";
        let rows = await client.query(query)
        .then(res=>{
            return res.rows;
        })
        return rows;
    }
    ///капкейки
    let nameTableCup="basiscup";

    this.GetIdBisqCup=async function(name){
      let query="SELECT id FROM public."+nameTableCup+" WHERE name=$1"
      let values=[name]
      var rows=await client.query(query,values)
      .then(res=>{

        return res.rows[0].id
      })


      return rows;
    }

    let nameTableCup1="fillcup";

    this.GetIdNachCup=async function(name){
        let query="SELECT id FROM public."+nameTableCup1+" WHERE namefill=$1"
        let values=[name]
        var rows=await client.query(query,values)
        .then(res=>{

          return res.rows[0].id
        })

        return rows;
      }

      let nameTableCup2="kremcup";

      this.GetIdKremCup=async function(name){


        let query="SELECT id FROM public.kremcup WHERE namekrem=$1"
        let values=[name]
        var rows=await client.query(query,values)
        .then(res=>{

          return res.rows[0].id
        })

        return rows;
      }
      this.getKorzCup = async function(){
          let query = "SELECT name FROM public."+nameTableCup+"";
          let rows = await client.query(query)
          .then(res=>{
              return res.rows;
          })
          return rows;
      }
      this.getNachCup = async function(){
        let query = "SELECT namefill FROM public."+nameTableCup1+"";
        let rows = await client.query(query)
        .then(res=>{
            return res.rows;
        })
        return rows;
    }

    this.getKremCup= async function(){
        let query = "SELECT namekrem FROM public."+nameTableCup2+"";
        let rows = await client.query(query)
        .then(res=>{
            return res.rows;
        })
        return rows;
    }
/////шоколад
    let nameTableChock="kindchock";

    this.GetIdBisqChock=async function(name){
      let query="SELECT id FROM public."+nameTableChock+" WHERE namekind=$1"
      let values=[name]
      var rows=await client.query(query,values)
      .then(res=>{

        return res.rows[0].id
      })


      return rows;
    }

    let nameTableChock1="fillchock";

    this.GetIdNachChock=async function(name){
        let query="SELECT id FROM public."+nameTableChock1+" WHERE namefill=$1"
        let values=[name]
        var rows=await client.query(query,values)
        .then(res=>{

          return res.rows[0].id
        })

        return rows;
      }

      let nameTableChock2="basischock";

      this.GetIdKremChock=async function(name){


        let query="SELECT id FROM public.basischock WHERE namebasis=$1"
        let values=[name]
        var rows=await client.query(query,values)
        .then(res=>{

          return res.rows[0].id
        })

        return rows;
      }
      this.getKorzChock = async function(){
          let query = "SELECT namekind FROM public."+nameTableChock+"";
          let rows = await client.query(query)
          .then(res=>{
              return res.rows;
          })
          return rows;
      }
      this.getNachChock = async function(){
        let query = "SELECT namefill FROM public."+nameTableChock1+"";
        let rows = await client.query(query)
        .then(res=>{
            return res.rows;
        })
        return rows;
    }

    this.getKremChock= async function(){
        let query = "SELECT namebasis FROM public."+nameTableChock2+"";
        let rows = await client.query(query)
        .then(res=>{
            return res.rows;
        })
        return rows;
    }
    ///Зефир
    let nameTableMarsh="marsh";

    this.GetIdMarsh=async function(name){
      let query="SELECT id FROM public."+nameTableMarsh+" WHERE name=$1"
      let values=[name]
      var rows=await client.query(query,values)
      .then(res=>{

        return res.rows[0].id
      })


      return rows;
    }

    this.getMarsh = async function(){
      let query = "SELECT name FROM public."+nameTableMarsh+"";
      let rows = await client.query(query)
      .then(res=>{
          return res.rows;
      })
      return rows;
  }

  ///Готовые десерты
  let nameTableReady="readycake";

  this.GetIdReady=async function(name){
    let query="SELECT id FROM public."+nameTableReady+" WHERE name=$1"
    let values=[name]
    var rows=await client.query(query,values)
    .then(res=>{

      return res.rows[0].id
    })


    return rows;
  }

  this.getReady = async function(){
    let query = "SELECT name FROM public."+nameTableReady+"";
    let rows = await client.query(query)
    .then(res=>{
        return res.rows;
    })
    return rows;
}

this.CheckInBase = async function (idUser,basisCake_id,fillCake_id,kremCake_id) {
  let values = [basisCake_id,fillCake_id,kremCake_id,idUser];
  let query = "SELECT * FROM public.usersweet WHERE \"basisCake_id\" = $1 AND \"fillCake_id\" = $2 AND \"kremCake_id\"=$3 AND user_id=$4; "
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res;
                          })
                        if (rows.rowCount ==1) return true; else {
                          return false;
                        }
}

this.CheckInBaseCup = async function (idUser,basiscup_id,fillcup_id,kremcup_id) {
  let values = [basiscup_id,fillcup_id,kremcup_id,idUser];
  let query = "SELECT * FROM public.usersweetcup WHERE \"basiscup_id\" = $1 AND \"fillcup_id\" = $2 AND \"kremcup_id\"=$3 AND user_id=$4; "
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res;
                          })
                        if (rows.rowCount ==1) return true; else {
                          return false;
                        }
}
    this.InBaseId=async function(idUser,basisCake_id,fillCake_id,kremCake_id,sum,sumfill,sumkrem){
        //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
      let values=[idUser,basisCake_id,fillCake_id,kremCake_id,sum,sumfill,sumkrem]
      let query="INSERT INTO public.usersweet(user_id,\"basisCake_id\",\"fillCake_id\",\"kremCake_id\",sumbasis,sumfill,sumkrem) VALUES ($1,$2,$3,$4,$5,$6,$7)";
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res;
                              })



    }

    this.InBaseIdCup=async function(idUser,basiscup_id,fillcup_id,kremcup_id,sum,sumfill,sumkrem){
      //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
    let values=[idUser,basiscup_id,fillcup_id,kremcup_id,sum,sumfill,sumkrem]
    let query="INSERT INTO public.usersweetcup(user_id,\"basiscup_id\",\"fillcup_id\",\"kremcup_id\",sumbasis,sumfill,sumkrem) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    var rows = await client.query(query,values)
                            .then(res=>{
                              return res;
                            })



  }
  this.CheckInBaseChock = async function (idUser,kindchock_id,basischock_id,fillchock_id) {
    let values = [kindchock_id,basischock_id,fillchock_id,idUser];
    let query = "SELECT * FROM public.usersweetchock WHERE \"kindchock_id\" = $1 AND \"basischock_id\"= $2 AND \"fillchock_id\"=$3 AND user_id=$4; "
    var rows = await client.query(query,values)
                            .then(res=>{
                              return res;
                            })
                          if (rows.rowCount ==1) return true; else {
                            return false;
                          }
  }
  this.InBaseIdChock=async function(idUser,kindchock_id,basischock_id,fillchock_id,sum,sumfill,sumkrem){
    //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
  let values=[idUser,kindchock_id,fillchock_id,basischock_id,sum,sumfill,sumkrem]
  let query="INSERT INTO public.usersweetchock(user_id,\"kindchock_id\",\"basischock_id\",\"fillchock_id\",sumbasis,sumfill,summkrem) VALUES ($1,$2,$3,$4,$5,$6,$7)";
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res;
                          })



}
this.CheckInBaseMarsh = async function (idUser,marsh_id) {
  let values = [marsh_id,idUser];
  let query = "SELECT * FROM public.usersweetmarsh WHERE \"marsh_id\" = $1 AND user_id=$2; "
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res;
                          })
                        if (rows.rowCount ==1) return true; else {
                          return false;
                        }
}
this.InBaseIdMarsh=async function(idUser,marsh_id,sum){
  //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
let values=[idUser,marsh_id,sum]
let query="INSERT INTO public.usersweetmarsh(user_id,\"marsh_id\",sum) VALUES ($1,$2,$3)";
var rows = await client.query(query,values)
                        .then(res=>{
                          return res;
                        })



}
this.CheckInBaseReady = async function (idUser,readycake_id) {
  let values = [readycake_id,idUser];
  let query = "SELECT * FROM public.usersweetready WHERE \"readycake_id\" = $1 AND user_id=$2; "
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res;
                          })
                        if (rows.rowCount ==1) return true; else {
                          return false;
                        }
}
this.InBaseIdReady=async function(idUser,readycake_id,sum){
  //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
let values=[idUser,readycake_id,sum]
let query="INSERT INTO public.usersweetready(user_id,\"readycake_id\",sum) VALUES ($1,$2,$3)";
var rows = await client.query(query,values)
                        .then(res=>{
                          return res;
                        })



}



////город

var tableName="user"
    this.getCity=async function(){
        let query="SELECT DISTINCT city FROM public.user WHERE role='Исполнитель' ;"
        var rows=await client.query(query)
         .then(res=>{
             return res.rows;
         })
         .catch (err=>{
             console.log("error");

         })
         return rows;
    }
    this.getWorker=async function(id,city){
      let values = [id,city];
      let query="SELECT  * FROM public.\"user\" WHERE role='Исполнитель' AND id = $1 AND city=$2 ;"
      var rows=await client.query(query,values)
       .then(res=>{
           return res.rows;
       })
       .catch (err=>{
           console.log("error");

       })
       return rows;
  }


    ////sweet name

var tableNameSweet="listsweet"
this.GetIdListSweet=async function(name){
  let query="SELECT id FROM public."+tableNameSweet+" WHERE name=$1"
  let values=[name]
  var rows=await client.query(query,values)
  .then(res=>{

    return res.rows[0].id
  })


  return rows;
}
this.getNameSweet = async function(){
  let query = "SELECT namesweet FROM public."+tableNameSweet+"";
  let rows = await client.query(query)
  .then(res=>{
      return res.rows;
  })
  return rows;
}

///заказ
this.InBaseIdOd=async function(idUser,namesweet,basiscake_id,fillcake_id,kremcake_id,date,city){
  //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
  /*client_id,namesweet,basiscake_id,fillcake_id,kremcake_id,basiscup_id,fillcup_id,kremcup_id, kindhock_id, basischock_id,fillchock_id,marsh_id,readycake_id,date*/
let values=[idUser,namesweet,basiscake_id,fillcake_id,kremcake_id,date,city]
let query="INSERT INTO public.oder(\"client_id\",namesweet,\"basiscake_id\",\"fillcake_id\",\"kremcake_id\",date,city) VALUES ($1,$2,$3,$4,$5,$6,$7)";
var rows = await client.query(query,values)
                        .then(res=>{
                          return res;
                        })



  }
  this.InBaseIdOdCup=async function(idUser,namesweet,basiscake_id,fillcake_id,kremcake_id,date,city){
    //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
    /*client_id,namesweet,basiscake_id,fillcake_id,kremcake_id,basiscup_id,fillcup_id,kremcup_id, kindhock_id, basischock_id,fillchock_id,marsh_id,readycake_id,date*/
  let values=[idUser,namesweet,basiscake_id,fillcake_id,kremcake_id,date,city]
  let query="INSERT INTO public.oder(\"client_id\",namesweet,\"basiscup_id\",\"fillcup_id\",\"kremcup_id\",date,city) VALUES ($1,$2,$3,$4,$5,$6,$7)";
  var rows = await client.query(query,values)
                          .then(res=>{
                            return res;
                          })



    }

    this.InBaseIdOdChock=async function(idUser,namesweet,basiscake_id,fillcake_id,kremcake_id,date,city){
      //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
      /*client_id,namesweet,basiscake_id,fillcake_id,kremcake_id,basiscup_id,fillcup_id,kremcup_id, kindhock_id, basischock_id,fillchock_id,marsh_id,readycake_id,date*/
    let values=[idUser,namesweet,basiscake_id,fillcake_id,kremcake_id,date,city]
    let query="INSERT INTO public.oder(\"client_id\",namesweet,\"kindchock_id\",\"basischock_id\",\"fillchock_id\",date,city) VALUES ($1,$2,$3,$4,$5,$6,$7)";
    var rows = await client.query(query,values)
                            .then(res=>{
                              return res;
                            })



      }

      this.InBaseIdOdMarsh=async function(idUser,namesweet,marsh_id,date,city){
        //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
      let values=[idUser,namesweet,marsh_id,date,city]
      let query="INSERT INTO public.oder(\"client_id\",namesweet,\"marsh_id\",date,city) VALUES ($1,$2,$3,$4,$5)";
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res;
                              })



      }

      this.InBaseIdOdReady=async function(idUser,namesweet,readycake_id,date,city){
        //"basisCake_id" uuid,"fillCake_id" uuid,  "kremCake_id" uuid,
      let values=[idUser,namesweet,readycake_id,date,city]
      let query="INSERT INTO public.oder(\"client_id\",namesweet,\"readycake_id\",date,city) VALUES ($1,$2,$3,$4,$5)";
      var rows = await client.query(query,values)
                              .then(res=>{
                                return res;
                              })



      }
      this.getworkSweetKorz = async function (idUser) {
          let query = "SELECT t4.id, t4.\"basisCake_id\",t4.\"fillCake_id\",t4.\"kremCake_id\" , t1.name, t4.sumbasis, t2.namefill,t4.sumfill,t3.namekrem,t4.sumkrem FROM public.basis t1 JOIN  public.usersweet t4 ON t1.id=t4.\"basisCake_id\" JOIN public.fill t2 ON t2.id=t4.\"fillCake_id\" JOIN public.krem t3 ON t3.id=t4.\"kremCake_id\" WHERE t4.user_id=$1"
        let values = [idUser];

        let rows = await client.query(query,values)
        .then(res=>{
            return res.rows;
        })
        return rows;
      }
      this.getworkSweetCup = async function (idUser) {
          let query = "SELECT t4.id, t4.basiscup_id,t4.fillcup_id,t4.kremcup_id ,t1.name, t4.sumbasis, t2.namefill,t4.sumfill,t3.namekrem,t4.sumkrem FROM public.basiscup t1 JOIN  public.usersweetcup t4 ON t1.id=t4.basiscup_id JOIN public.fillcup t2 ON t2.id=t4.fillcup_id JOIN public.kremcup t3 ON t3.id=t4.kremcup_id WHERE t4.user_id=$1"
        let values = [idUser];

        let rows = await client.query(query,values)
        .then(res=>{
            return res.rows;
        })
        return rows;
      }
      this.getworkSweetChock = async function (idUser) {
          let query = "SELECT t4.id, t4.basischock_id,t4.fillchock_id,t4.kindchock_id ,t1.namebasis, t4.sumbasis, t2.namefill,t4.sumfill,t3.namekind,t4.summkrem FROM public.basischock t1 JOIN  public.usersweetchock t4 ON t1.id=t4.basischock_id JOIN public.fillchock t2 ON t2.id=t4.fillchock_id JOIN public.kindchock t3 ON t3.id=t4.kindchock_id WHERE t4.user_id=$1"
        let values = [idUser];

        let rows = await client.query(query,values)
        .then(res=>{
            return res.rows;
        })
        return rows;
      }
      this.updateBasis = async function (id,sumkorz) {
        let values=[id]
        //,sumfill="+sumfill+",sumkrem="+sumkrem+"
        let query="UPDATE public.usersweet SET sumbasis = "+sumkorz+" WHERE \"basisCake_id\"=$1;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.updatefill  = async function (idfill,sumfill) {
        let values1=[idfill]
        let query1="UPDATE public.usersweet SET sumfill = "+sumfill+" WHERE \"fillCake_id\"=$1;";
        var rows1 = await client.query(query1,values1)
                                .then(res=>{
                                  return res;
                                })
      }
      this.updatekrem = async function (idkrem,sumkrem) {


                                                        let values2=[idkrem]
                                                        let query2="UPDATE public.usersweet SET sumkrem = "+sumkrem+" WHERE \"kremCake_id\"=$1;";
                                                        var row2 = await client.query(query2,values2)
                                                                                .then(res=>{
                                                                                  return res;
                                                                                })
      }
      this.updateBasisChock = async function (id,sum) {
        let values=[id];
        let query="UPDATE public.usersweetchock SET sumbasis = "+sum+" WHERE \"kindchock_id\"=$1;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.updatefillChock = async function (id,sum) {
        let values1=[id]
        let query1="UPDATE public.usersweetchock SET sumfill = "+sum+" WHERE \"fillchock_id\"=$1;";
        var rows1 = await client.query(query1,values1)
                                .then(res=>{
                                  return res;
                                })
      }
      this.updatekremChock = async function (id,sum) {
  let values2=[id]
    let query2="UPDATE public.usersweetchock SET summkrem = "+sum+" WHERE \"basischock_id\"=$1;";
          var row2 = await client.query(query2,values2)
        .then(res=>{
              return res;
                        })
      }
      this.getworkSweetMarsh = async function (idUser) {
          let query = "SELECT t4.id, t4.marsh_id ,t4.sum, t1.name FROM public.marsh t1 JOIN  public.usersweetmarsh t4 ON t1.id=t4.marsh_id WHERE t4.user_id=$1"
        let values = [idUser];

        let rows = await client.query(query,values)
        .then(res=>{
            return res.rows;
        })
        return rows;
      }
      this.getworkSweetReady = async function (idUser) {
          let query = "SELECT t4.id, t4.readycake_id ,t4.sum, t1.name FROM public.readycake t1 JOIN  public.usersweetready t4 ON t1.id=t4.readycake_id WHERE t4.user_id=$1"
        let values = [idUser];

        let rows = await client.query(query,values)
        .then(res=>{
            return res.rows;
        })
        return rows;
      }
      this.UpdateSummSweetReady = async function (id,sum) {
        let values=[id]
        //,sumfill="+sumfill+",sumkrem="+sumkrem+"
        let query="UPDATE public.usersweetready SET sum = "+sum+" WHERE readycake_id=$1;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                .catch(err=>console.error())

      }
      this.UpdateSummSweetMarsh = async function (id,sum) {
        let values=[id]
        //,sumfill="+sumfill+",sumkrem="+sumkrem+"
        let query="UPDATE public.usersweetmarsh SET sum = "+sum+" WHERE marsh_id=$1;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                .catch(err=>console.error())

      }
      this.updateBasisCup = async function (id,sumkorz) {
        let values=[id]
        //,sumfill="+sumfill+",sumkrem="+sumkrem+"
        let query="UPDATE public.usersweetcup SET sumbasis = "+sumkorz+" WHERE basiscup_id=$1;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.updatefillCup = async function (id,sumfill) {
        let values1=[id]
        let query1="UPDATE public.usersweetcup SET sumfill = "+sumfill+" WHERE fillcup_id=$1;";
        var rows1 = await client.query(query1,values1)
                                .then(res=>{
                                  return res;
                                })
      }
      this.updatekremCup = async function (id,sumkrem) {


                                                        let values2=[id]
                                                        let query2="UPDATE public.usersweetcup SET sumkrem = "+sumkrem+" WHERE kremcup_id=$1;";
                                                        var row2 = await client.query(query2,values2)
                                                                                .then(res=>{
                                                                                  return res;
                                                                                })
      }
this.CheckWorker = async function(idUser,idKorz,name){
  let values = [idUser,idKorz];
  let query
  if (name=="korz") {
    query =  "SELECT * FROM public.usersweet WHERE user_id=$1 AND \"basisCake_id\"=$2; ";
  } else if (name=="fill") {
    query =   "SELECT * FROM public.usersweet WHERE user_id=$1 AND \"fillCake_id\"=$2; ";
  } else if (name=="krem") {
    query =   "SELECT * FROM public.usersweet WHERE user_id=$1 AND \"kremCake_id\"=$2; ";
  }

  var rows = await client.query(query,values)
  .then(res=>{
    return res.rowCount;
  })

  if (rows!=0) return true; else return false;
}
this.CheckWorkerChock = async function(idUser,idKorz,name){
  let values = [idUser,idKorz];
  let query
  if (name=="korz") {
    query =  "SELECT * FROM public.usersweetchock WHERE user_id=$1 AND kindchock_id=$2; ";
  } else if (name=="fill") {
    query =   "SELECT * FROM public.usersweetchock WHERE user_id=$1 AND fillchock_id=$2; ";
  } else if (name=="krem") {
    query =   "SELECT * FROM public.usersweetchock WHERE user_id=$1 AND basischock_id=$2; ";
  }

  var rows = await client.query(query,values)
  .then(res=>{
    return res.rowCount;
  })

  if (rows!=0) return true; else return false;
}
this.CheckWorkerCup = async function(idUser,idKorz,name){
  let values = [idUser,idKorz];
  let query
  if (name == "korz") {
    query=  "SELECT * FROM public.usersweetcup WHERE user_id=$1 AND basiscup_id=$2; ";
  } else if (name=="fill") {
    query=  "SELECT * FROM public.usersweetcup WHERE user_id=$1 AND fillcup_id=$2; ";
  }
  else if (name=="krem") {
    query=  "SELECT * FROM public.usersweetcup WHERE user_id=$1 AND kremcup_id=$2; ";
  }

  var rows = await client.query(query,values)
  .then(res=>{
    return res.rowCount;
  })

  if (rows!=0) return true; else return false;
}
this.CheckWorkerMarsh = async function(idUser,idKorz){
  let values = [idUser,idKorz];
  let query =  "SELECT * FROM public.usersweetmarsh WHERE user_id=$1 AND marsh_id=$2; ";
  var rows = await client.query(query,values)
  .then(res=>{
    return res.rowCount;
  })

  if (rows!=0) return true; else return false;
}
this.CheckWorkerReady = async function(idUser,idKorz){
  let values = [idUser,idKorz];
  let query =  "SELECT * FROM public.usersweetready WHERE user_id=$1 AND readycake_id=$2; ";
  var rows = await client.query(query,values)
  .then(res=>{
    return res.rowCount;
  })

  if (rows!=0) return true; else return false;
}
      this.getIdByParams = async function (idBisq,idFill,idKrem) {
        let values  = [idBisq,idFill,idKrem];
        //\"basisCake_id\",t4.\"fillCake_id\",t4.\"kremCake_id\"
        let query="SELECT user_id FROM public.usersweet WHERE \"basisCake_id\" = $1 AND \"fillCake_id\"=$2 AND \"kremCake_id\"=$3;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res.rows;
                                })
                                return  rows;
      }
      this.getIdByParamsCup = async function (idBisq,idFill,idKrem) {
        let values  = [idBisq,idFill,idKrem];
        //\"basisCake_id\",t4.\"fillCake_id\",t4.\"kremCake_id\"
        let query="SELECT user_id FROM public.usersweetcup WHERE \"basiscup_id\" = $1 AND \"fillcup_id\"=$2 AND \"kremcup_id\"=$3;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res.rows;
                                })
                                return  rows;
      }
      this.getIdByParamsChock = async function (idBisq,idFill,idKrem) {
        let values  = [idBisq,idFill,idKrem];
        //\"basisCake_id\",t4.\"fillCake_id\",t4.\"kremCake_id\"
        let query="SELECT user_id FROM public.usersweetchock WHERE  \"kindchock_id\"= $1 AND \"fillchock_id\"=$2 AND \"basischock_id\"=$3;";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res.rows;
                                })
                                return  rows;
      }
      this.getIdByParamsMarsh = async function (idBisq) {
        let values  = [idBisq];
        //\"basisCake_id\",t4.\"fillCake_id\",t4.\"kremCake_id\"
        let query="SELECT user_id FROM public.usersweetmarsh WHERE  \"marsh_id\"= $1";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res.rows;
                                })
                                return  rows;
      }
      this.getSumByIdMarsh = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sum FROM public.usersweetmarsh t1 JOIN public.marsh t2 ON t2.id = t1.\"marsh_id\" WHERE t2.id=$1 AND t1.user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                 else  return  row.rows[0].sum;
      }
      this.getIdByParamsReady = async function (idBisq) {
        let values  = [idBisq];
        //\"basisCake_id\",t4.\"fillCake_id\",t4.\"kremCake_id\"
        let query="SELECT user_id FROM public.usersweetready WHERE  \"readycake_id\"= $1";
        var rows = await client.query(query,values)
                                .then(res=>{
                                  return res.rows;
                                })
                                return  rows;
      }
      this.getSumByIdReady = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sum FROM public.usersweetready t1 JOIN public.readycake t2 ON t2.id = t1.\"readycake_id\" WHERE t2.id=$1 AND t1.user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                 else  return  row.rows[0].sum;
      }
      this.getSumByIdKorz = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumbasis FROM public.usersweet t1 JOIN public.basis t2 ON t2.id = t1.\"basisCake_id\" WHERE t2.id=$1 AND t1.user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                 else  return  row.rows[0].sumbasis;
      }
      this.getSumByIdNach = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumfill FROM public.usersweet t1 JOIN public.fill t2 ON t2.id = t1.\"fillCake_id\" WHERE t2.id=$1 AND user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                else  return  row.rows[0].sumfill;
      }
      this.getSumByIdKrem = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumkrem FROM public.usersweet t1 JOIN public.krem t2 ON t2.id = t1.\"kremCake_id\" WHERE t2.id=$1 AND user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                else  return  row.rows[0].sumkrem;
      }
      this.getSumByIdKorzCup = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumbasis FROM public.usersweetcup t1 JOIN public.basiscup t2 ON t2.id = t1.basiscup_id WHERE t2.id=$1 AND t1.user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                 else  return  row.rows[0].sumbasis;
      }
      this.getSumByIdNachCup = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumfill FROM public.usersweetcup t1 JOIN public.fillcup t2 ON t2.id = t1.fillcup_id WHERE t2.id=$1 AND user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                else  return  row.rows[0].sumfill;
      }
      this.getSumByIdKremCup = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumkrem FROM public.usersweetcup t1 JOIN public.kremcup t2 ON t2.id = t1.kremcup_id WHERE t2.id=$1 AND user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                else  return  row.rows[0].sumkrem;
      }
      this.getSumByIdKremChock = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT summkrem FROM public.usersweetchock t1 JOIN public.basischock t2 ON t2.id = t1.basischock_id WHERE t2.id=$1 AND t1.user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                 else  return  row.rows[0].summkrem;
      }
      this.getSumByIdNachChock = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumfill FROM public.usersweetchock t1 JOIN public.fillchock t2 ON t2.id = t1.fillchock_id WHERE t2.id=$1 AND user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                else  return  row.rows[0].sumfill;
      }
      this.getSumByIdKorzChock = async function (id,idUser) {
        let values = [id,idUser];
        let query = "SELECT sumbasis FROM public.usersweetchock t1 JOIN public.kindchock t2 ON t2.id = t1.kindchock_id WHERE t2.id=$1 AND user_id=$2;";
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
                                if (row.rowCount==0) return false;
                                else  return  row.rows[0].sumbasis;
      }

      

      this.deleteChock = async function (id,name,us_id) {
        let query;
        let values = [id,us_id];
        if (name == "basis") {
          query = "DELETE FROM public.usersweetchock WHERE kindchock_id=$1 AND user_id=$2"
        } else if (name == "fill") {
          query = "DELETE FROM public.usersweetchock WHERE fillchock_id=$1 AND user_id=$2"
        } else if (name=="krem") {
          query = "DELETE FROM public.usersweetchock WHERE basischock_id=$1 AND user_id=$2"
        }
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.deleteCake = async function (id,name,us_id) {
        let query;
        let values = [id,us_id];
        if (name == "basis") {
          query = "DELETE FROM public.usersweet WHERE \"basisCake_id\"=$1 AND user_id=$2"
        } else if (name == "fill") {
          query = "DELETE FROM public.usersweet WHERE \"fillCake_id\"=$1 AND user_id=$2"
        } else if (name=="krem") {
          query = "DELETE FROM public.usersweet WHERE \"kremCake_id\"=$1 AND user_id=$2"
        }
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.deleteCup = async function (id,name,us_id) {
        let query;
        let values = [id,us_id];
        if (name == "basis") {
          query = "DELETE FROM public.usersweetcup WHERE \"basiscup_id\"=$1 AND user_id=$2"
        } else if (name == "fill") {
          query = "DELETE FROM public.usersweetcup WHERE \"fillcup_id\"=$1 AND user_id=$2"
        } else if (name=="krem") {
          query = "DELETE FROM public.usersweetcup WHERE \"kremcup_id\"=$1 AND user_id=$2"
        }
        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.deleteMarsh = async function (id,us_id) {
        let query;
        let values = [id,us_id];
          query = "DELETE FROM public.usersweetmarsh WHERE \"marsh_id\"=$1 AND user_id=$2"

        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
      this.deleteReady = async function (id,us_id) {
        let query;
        let values = [id,us_id];
          query = "DELETE FROM public.usersweetready WHERE \"readycake_id\"=$1 AND user_id=$2"

        var row = await client.query(query,values)
                                .then(res=>{
                                  return res;
                                })
      }
}

  module.exports=dbSet;
