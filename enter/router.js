const express = require('express')
const router = express.Router()
const DbUser = require('./public/js/dbUser.js')
const DbSet = require('./public/js/dbSet.js')
const DbOder = require('./public/js/dbOder.js')
var flagUser = false;

router.get('/', (req, res) => {
  res.redirect('/user');
})
function WorkerSearch(id,firstname,name,sumKorz,sumNach,sumKrem,korz,nach,krem,sum,date,namesweet) {
  this.id = id;
  this.firstname = firstname;
  this.name = name;
  this.sumKorz = sumKorz;
  this.sumNach = sumNach;
  this.sumKrem = sumKrem;
  this.korz = korz;
  this.nach=nach;
  this.krem = krem;
  this.sum = sum;
  this.date = date;
  this.namesweet = namesweet;
}
function infoUser(name,firstname,number,email) {
  this.name=name;
  this.firstname = firstname;
  this.number = number;
  this.email = email;
}
var orderNameSweet;

router.use('/user', (request, response) => {
  let title = "Главная";
  var korz;
  var nach;
  var krem;

  var city;
  var korzCup;
  var nachCup;
  var kremCup;
  var korzChock;
  var nachChock;
  var kremChock;
  var marsh;
  var ready;
  var worker;
  var search = new Array();
  console.log(flagUser);
  console.log(request.query.id);
  console.log("FFFFFFFFFFFFFF");

 if (request.query.id=="torty"){
   title = "Торты"
 }
 else if(request.query.id=="minic"){
  title = "Капкейки"
}
else if(request.query.id=="sweet"){
  title = "Шоколадные изделия"
}
else if(request.query.id=="classic"){
  title = "Классические десерты"
}
else if(request.query.id=="marshmallows"){
  title = "Зефир"
}
else if(request.query.id=="marshmallows"){
  title = "Зефир"
}
else if(request.query.id=="search"){
  title = "Поиск кондитера"
}
else if(request.query.id=="makeOrder"){
  title = "Подтверждение"
  worker=request.query.worker;
}
else if(request.query.id=="zakazy"){
  title = "Заказы"
}

 console.log(title);
 let set = new DbSet();
 //let oder=new DbOder();
 let fun = async function(){
    korz = await set.getKorz();
    nach = await set.getNach();
    krem = await set.getKrem();
    city= await set.getCity();
    korzCup = await set.getKorzCup();
    nachCup = await set.getNachCup();
    kremCup = await set.getKremCup();
    korzChock = await set.getKorzChock();
    nachChock = await set.getNachChock();
    kremChock = await set.getKremChock();
    marsh= await set.getMarsh();
    ready=await set.getReady();
var sumKorz = new Array();
var countWorkerKorz = new Array();
  var sumNach = new Array();
      var sumKrem = new Array();

      var searchisp = new Array();
      if (orderNameSweet=="Капкейки") {
        let sum =0;
        for (var i = 0; i < masId.length; i++) {
          sumKorz = [];
          sumKrem=[];
          sumNach=[];
          
          search.push(await set.getWorker(masId[i],array1[0].city));
          
          
          console.log(search);
        }
        for (var i=0; i<search.length; i++){
          if (search[i].length!=0){
            
          
        for (var j = 0; j < masIdKorz.length; j++) {
          sumKorz.push(await set.getSumByIdKorzCup(masIdKorz[j],masId[i]));
      
          sum=Number(sum)+Number(await set.getSumByIdKorzCup(masIdKorz[j],masId[i]));
      
        }
      
        for (var t = 0; t < masIdNach.length; t++) {
          sumNach.push(await set.getSumByIdNachCup(masIdNach[t],masId[i]));
        sum=Number(sum)+Number(await set.getSumByIdNach(masIdNach[t],masId[i]));
        }
      
        for (var y = 0; y < masIdKrem.length; y++) {
          sumKrem.push(await set.getSumByIdKremCup(masIdKrem[y],masId[i]));
          sum=Number(sum)+Number(await set.getSumByIdKremCup(masIdKrem[y],masId[i]));
        }
      
        countWorkerKorz.push(new WorkerSearch(masId[i],search[i][0].firstname,search[i][0].name,sumKorz,sumNach,sumKrem,array1[0].korz,array1[0].nach,array1[0].krem,sum,array1[0].date,"капкейк"))
          }
      }
} else if (orderNameSweet=="Торты"){
  let sum =0;
  for (var i = 0; i < masId.length; i++) {
    sumKorz = [];
    sumKrem=[];
    sumNach=[];

    search.push(await set.getWorker(masId[i],array1[0].city));
  }
          
          
    for (var i=0; i<search.length; i++){
      if (search[i].length!=0){
  for (var j = 0; j < masIdKorz.length; j++) {
    sumKorz.push(await set.getSumByIdKorz(masIdKorz[j],masId[i]));

    sum=Number(sum)+Number(await set.getSumByIdKorz(masIdKorz[j],masId[i]));

  }

  for (var t = 0; t < masIdNach.length; t++) {
    sumNach.push(await set.getSumByIdNach(masIdNach[t],masId[i]));
  sum=Number(sum)+Number(await set.getSumByIdNach(masIdNach[t],masId[i]));
  }

  for (var y = 0; y < masIdKrem.length; y++) {
    sumKrem.push(await set.getSumByIdKrem(masIdKrem[y],masId[i]));
    sum=Number(sum)+Number(await set.getSumByIdKrem(masIdKrem[y],masId[i]));
  }

  countWorkerKorz.push(new WorkerSearch(masId[i],search[i][0].firstname,search[i][0].name,sumKorz,sumNach,sumKrem,array1[0].korz,array1[0].nach,array1[0].krem,sum,array1[0].date,"капкейк"))
}
}
} else if (orderNameSweet=="Шоколад") {
  let sum =0;
  for (var i = 0; i < masId.length; i++) {
    sumKorz = [];
    sumKrem=[];
    sumNach=[];
    
    search.push(await set.getWorker(masId[i],array1[0].city));
  }
  for (var i=0; i<search.length; i++){
    if (search[i].length!=0){
  for (var j = 0; j < masIdKorz.length; j++) {
    sumKorz.push(await set.getSumByIdKorzChock(masIdKorz[j],masId[i]));
    sum=Number(sum)+Number(await set.getSumByIdKorzChock(masIdKorz[j],masId[i]));

  }

  for (var t = 0; t < masIdNach.length; t++) {
    sumNach.push(await set.getSumByIdNachChock(masIdNach[t],masId[i]));
  sum=Number(sum)+Number(await set.getSumByIdNachChock(masIdNach[t],masId[i]));
  }

  for (var y = 0; y < masIdKrem.length; y++) {
    sumKrem.push(await set.getSumByIdKremChock(masIdKrem[y],masId[i]));
    sum=Number(sum)+Number(await set.getSumByIdKremChock(masIdKrem[y],masId[i]));
  }

  countWorkerKorz.push(new WorkerSearch(masId[i],search[i][0].firstname,search[i][0].name,sumKorz,sumNach,sumKrem,array1[0].korz,array1[0].nach,array1[0].krem,sum,array1[0].date,"шоколадное изделие"))
}
  }
} else if (orderNameSweet=="Зефир") {
  let sum =0;
  for (var i = 0; i < masId.length; i++) {
    sumKorz = [];
    
    search.push(await set.getWorker(masId[i],array1[0].city));
  }
  for (var i=0; i<search.length; i++){
    if (search[i].length!=0){
  for (var j = 0; j < masIdKorz.length; j++) {
    sumKorz.push(await set.getSumByIdMarsh(masIdKorz[j],masId[i]));

    sum=Number(sum)+Number(await set.getSumByIdMarsh(masIdKorz[j],masId[i]));

  }
  countWorkerKorz.push(new WorkerSearch(masId[i],search[i][0].firstname,search[i][0].name,sumKorz,'','',array1[0].korz,'','',sum,array1[0].date,"зефир"))
}
  }
}
else if (orderNameSweet=="Классический десерт") {
  let sum =0;
  for (var i = 0; i < masId.length; i++) {
    sumKorz = [];
    
    search.push(await set.getWorker(masId[i],array1[0].city));
  }
  for (var i=0; i<search.length; i++){
    if (search[i].length!=0){
  for (var j = 0; j < masIdKorz.length; j++) {
    sumKorz.push(await set.getSumByIdReady(masIdKorz[j],masId[i]));

    sum=Number(sum)+Number(await set.getSumByIdReady(masIdKorz[j],masId[i]));

  }
  countWorkerKorz.push(new WorkerSearch(masId[i],search[i][0].firstname,search[i][0].name,sumKorz,'','',array1[0].korz,'','',sum,array1[0].date,"Классический десерт"))
}
  }
}

let user = new DbUser();
var userInfo = await user.getUserInfo(getId);
  let order = new DbOder();
  var orderInfo = await order.getOrder(getId);


    //getId
  response.render('file',{

      title:title,
      korz:korz,
      nach:nach,
      krem:krem,
      korzCup:korzCup,

      city:city,
      nachCup:nachCup,
      kremCup:kremCup,
      korzChock:korzChock,
      nachChock:nachChock,
      kremChock:kremChock,
      marsh:marsh,
      ready:ready,
      checked:array1[0],
      flag: flagUser,
      countWorkerKorz : countWorkerKorz,
      worker:worker,
      userInfo:userInfo,
      orderInfo:orderInfo



     // role:role


     // checked:checkedSweet

  }
  )
}
fun();
  })

  var array1 = new Array();
  var masId = new Array();
  var masIdKorz = new Array();
  var masIdNach = new Array();
  var masIdKrem = new Array();
  router.post('/chooseCake', (req, res) => {
   array1 = [];
     masId = [];
     masIdKorz = [];
     masIdNach = [];
     masIdKrem = [];
  array1.push(req.body);

  var set=new DbSet();
  var user = new DbUser();
 // var oder=new DbOder();
var  array  = new Array();
array.push(req.body);
var  nach ;
  var  krem;
orderNameSweet="Торты";
var korz;
var date=req.body.date;
var city=req.body.city;


for(var i=0;i<array.length;i++){
  korz = array[i].korz;
  nach = array[i].nach;
  krem = array[i].krem;
}
console.log("data",date);

if ((korz==undefined || nach==undefined || krem== undefined||city==0)||(korz==undefined&&nach==undefined&&krem==undefined&&city==0)||(korz==undefined&&nach==undefined&&city==0)||(korz==undefined&&krem==undefined&&city==0)||(nach==undefined&&krem==undefined&&city==0)
||(korz==undefined || nach==undefined || krem== undefined)||(korz==undefined&&nach==undefined&&krem==undefined)||(korz==undefined&&nach==undefined)||(korz==undefined&&krem==undefined)||(nach==undefined&&krem==undefined)
||(korz==undefined || nach==undefined || krem== undefined||city==0||date=="")||(korz==undefined&&nach==undefined&&krem==undefined&&city==0&&date=="")||(korz==undefined&&nach==undefined&&city==0&&date=="")||(korz==undefined&&krem==undefined&&city==0&&date=="")||(nach==undefined&&krem==undefined&&city==0&&date==""))
{
  res.redirect('/user?id=torty');
} else {
var isArraynach = Array.isArray(nach);
var isArrayKrem = Array.isArray(krem);
var isArrayKorz = Array.isArray(korz);
var idBisk;
var getIdNach;
var getIdKrem;
let tmpArray = [];
function itemCheck(item) {
    if (tmpArray.indexOf(item) === -1) {
        tmpArray.push(item);
        return true
    }
    return false;
}


var funn = async function(){
         //  let listSweet=await set.GetIdListSweet(name);

          if(isArrayKorz){
              for(var o=0;o<korz.length;o++){
                idBisk = await set.GetIdBisq(korz[o]);
                if (isArraynach && isArrayKrem){
                  for(var j=0;j<nach.length;j++){

                    getIdNach=await set.GetIdNach(nach[j]);

                    for(var t=0;t<krem.length;t++){
                      getIdKrem=await set.GetIdKrem(krem[t]);

                      masIdKorz.push(idBisk);
                      masIdNach.push(getIdNach);
                      masIdKrem.push(getIdKrem);


                    }
                  }
                } else if (!isArraynach&&isArrayKrem){
                  getIdNach=await set.GetIdNach(nach);
                  console.log("nach",nach," ",getIdNach);
                      for(var t=0;t<krem.length;t++){
                        getIdKrem=await set.GetIdKrem(krem[t]);
                        masIdKorz.push(idBisk);
                        masIdNach.push(getIdNach);
                        masIdKrem.push(getIdKrem);

                      }
                  } else if (!isArrayKrem&&!isArraynach){
                    getIdNach=await set.GetIdNach(nach);
                    getIdKrem=await set.GetIdKrem(krem);
                    masIdKorz.push(idBisk);
                    masIdNach.push(getIdNach);
                    masIdKrem.push(getIdKrem);
                  } else if (isArraynach && !isArrayKrem){
                    getIdKrem=await set.GetIdKrem(krem);
                    for(var j=0;j<nach.length;j++){

                      getIdNach=await set.GetIdNach(nach[j]);
                      masIdKorz.push(idBisk);
                      masIdNach.push(getIdNach);
                      masIdKrem.push(getIdKrem);

                    }

                  }

              }
          } else {
              idBisk = await set.GetIdBisq(korz);
              if (isArraynach && isArrayKrem){
                for(var j=0;j<nach.length;j++){

                  getIdNach=await set.GetIdNach(nach[j]);
                  for(var t=0;t<krem.length;t++){
                    getIdKrem=await set.GetIdKrem(krem[t]);
                    masIdKorz.push(idBisk);
                    masIdNach.push(getIdNach);
                    masIdKrem.push(getIdKrem);

                  }
                }
              } else if (!isArraynach&&isArrayKrem){
                getIdNach=await set.GetIdNach(nach);
                    for(var t=0;t<krem.length;t++){
                      getIdKrem=await set.GetIdKrem(krem[t]);
                      masIdKorz.push(idBisk);
                      masIdNach.push(getIdNach);
                      masIdKrem.push(getIdKrem);
                    }
                } else if (!isArrayKrem&&!isArraynach){
                  getIdNach=await set.GetIdNach(nach);
                  getIdKrem=await set.GetIdKrem(krem);
                  masIdKorz.push(idBisk);
                  masIdNach.push(getIdNach);
                  masIdKrem.push(getIdKrem);
                  //
                } else if (isArraynach && !isArrayKrem){
                  getIdKrem=await set.GetIdKrem(krem);
                  for(var j=0;j<nach.length;j++){
                      getIdNach=await set.GetIdNach(nach[j]);
                      masIdKorz.push(idBisk);
                      masIdNach.push(getIdNach);
                      masIdKrem.push(getIdKrem);
                  }

                }

          }


masIdKorz= masIdKorz.filter((item) => itemCheck(item));
masIdNach= masIdNach.filter((item) => itemCheck(item));
masIdKrem= masIdKrem.filter((item) => itemCheck(item));
  let checkInBase
for (var i = 0; i < masIdKorz.length; i++) {
  for (var t = 0; t < masIdKrem.length; t++) {
  for (var j = 0; j < masIdNach.length; j++) {
     checkInBase = await set.getIdByParams(masIdKorz[i],masIdNach[j],masIdKrem[t]);
  //  console.log("check: ",checkInBase.user_id);
  //  masId.push(checkInBase.user_id)
  }

}
}
for (var i = 0; i < checkInBase.length; i++) {
   masId.push(checkInBase[i].user_id);//ид исполнителя
}
masId=masId.filter((item) => itemCheck(item));

console.log("lll",masId);
          res.redirect('/user?id=search&mas=true&cake')
}
funn();
}

  })



///выбор составляющих капкейка
  router.post('/chooseCup', (req, res) => {
    array1 = [];
      masId = [];
      masIdKorz = [];
      masIdNach = [];
      masIdKrem = [];
      array1.push(req.body);
      var set=new DbSet();
      var user = new DbUser();
     // var oder=new DbOder();
    var  array  = new Array();
    array.push(req.body);
    var  nach ;
      var  krem;
    var korz;
    var date=req.body.date;
    var city=req.body.city;
orderNameSweet="Капкейки";

    for(var i=0;i<array.length;i++){
      korz = array[i].korz;
      nach = array[i].nach;
      krem = array[i].krem;
    }
    var isArraynach = Array.isArray(nach);
    var isArrayKrem = Array.isArray(krem);
    var isArrayKorz = Array.isArray(korz);
    var idBisk;
    var getIdNach;
    var getIdKrem;
    let tmpArray = [];
    function itemCheck(item) {
        if (tmpArray.indexOf(item) === -1) {
            tmpArray.push(item);
            return true
        }
        return false;
    }


    var funn = async function(){
             //  let listSweet=await set.GetIdListSweet(name);

              if(isArrayKorz){
                  for(var o=0;o<korz.length;o++){
                    idBisk = await set.GetIdBisqCup(korz[o]);
                   console.log("korz",idBisk," ",korz[o]);
                    if (isArraynach && isArrayKrem){
                      for(var j=0;j<nach.length;j++){

                        getIdNach=await set.GetIdNachCup(nach[j]);
                        console.log("nach",nach[j]," ",getIdNach);

                        for(var t=0;t<krem.length;t++){
                          getIdKrem=await set.GetIdKremCup(krem[t]);
                          console.log("krem",krem[t]," ",getIdKrem);

                          masIdKorz.push(idBisk);
                          masIdNach.push(getIdNach);
                          masIdKrem.push(getIdKrem);


                        }
                      }
                    } else if (!isArraynach&&isArrayKrem){
                      getIdNach=await set.GetIdNachCup(nach);
                      console.log("nach",nach," ",getIdNach);
                          for(var t=0;t<krem.length;t++){
                            getIdKrem=await set.GetIdKremCup(krem[t]);
                            masIdKorz.push(idBisk);
                            masIdNach.push(getIdNach);
                            masIdKrem.push(getIdKrem);

                          }
                      } else if (!isArrayKrem&&!isArraynach){
                        getIdNach=await set.GetIdNachCup(nach);
                        getIdKrem=await set.GetIdKremCup(krem);
                        masIdKorz.push(idBisk);
                        masIdNach.push(getIdNach);
                        masIdKrem.push(getIdKrem);
                      } else if (isArraynach && !isArrayKrem){
                        getIdKrem=await set.GetIdKremCup(krem);
                        for(var j=0;j<nach.length;j++){

                          getIdNach=await set.GetIdNachCup(nach[j]);
                          masIdKorz.push(idBisk);
                          masIdNach.push(getIdNach);
                          masIdKrem.push(getIdKrem);

                        }

                      }

                  }
              } else {
                  idBisk = await set.GetIdBisqCup(korz);
                  if (isArraynach && isArrayKrem){
                    for(var j=0;j<nach.length;j++){

                      getIdNach=await set.GetIdNachCup(nach[j]);
                      for(var t=0;t<krem.length;t++){
                        getIdKrem=await set.GetIdKremCup(krem[t]);
                        masIdKorz.push(idBisk);
                        masIdNach.push(getIdNach);
                        masIdKrem.push(getIdKrem);

                      }
                    }
                  } else if (!isArraynach&&isArrayKrem){
                    getIdNach=await set.GetIdNachCup(nach);
                        for(var t=0;t<krem.length;t++){
                          getIdKrem=await set.GetIdKremCup(krem[t]);
                          masIdKorz.push(idBisk);
                          masIdNach.push(getIdNach);
                          masIdKrem.push(getIdKrem);
                        }
                    } else if (!isArrayKrem&&!isArraynach){
                      getIdNach=await set.GetIdNachCup(nach);
                      getIdKrem=await set.GetIdKremCup(krem);
                      masIdKorz.push(idBisk);
                      masIdNach.push(getIdNach);
                      masIdKrem.push(getIdKrem);
                      //
                    } else if (isArraynach && !isArrayKrem){
                      getIdKrem=await set.GetIdKremCup(krem);
                      for(var j=0;j<nach.length;j++){
                          getIdNach=await set.GetIdNachCup(nach[j]);
                          masIdKorz.push(idBisk);
                          masIdNach.push(getIdNach);
                          masIdKrem.push(getIdKrem);
                      }

                    }

              }
        console.log("dddddddddd", masIdKorz)

    masIdKorz= masIdKorz.filter((item) => itemCheck(item));
    masIdNach= masIdNach.filter((item) => itemCheck(item));
    masIdKrem= masIdKrem.filter((item) => itemCheck(item));
      let checkInBase
    for (var i = 0; i < masIdKorz.length; i++) {
      for (var t = 0; t < masIdKrem.length; t++) {
      for (var j = 0; j < masIdNach.length; j++) {
         checkInBase = await set.getIdByParamsCup(masIdKorz[i],masIdNach[j],masIdKrem[t]);
      //  console.log("check: ",checkInBase.user_id);
      //  masId.push(checkInBase.user_id)
      }

    }
    }
    for (var i = 0; i < checkInBase.length; i++) {
       masId.push(checkInBase[i].user_id);
    }
    masId=masId.filter((item) => itemCheck(item));

    console.log("lll",masId);
              res.redirect('/user?id=search&cup')
    }
    funn();


})
 // шоколадные изделия
 router.post('/chooseChock', (req, res) => {
   array1 = [];
     masId = [];
     masIdKorz = [];
     masIdNach = [];
     masIdKrem = [];

         array1.push(req.body);
         var set=new DbSet();
         var user = new DbUser();
        // var oder=new DbOder();
       var  array  = new Array();
       array.push(req.body);
       var  nach ;
         var  krem;
       var korz;
       var date=req.body.date;
       var city=req.body.city;
   orderNameSweet="Шоколад";
       console.log(city);

       for(var i=0;i<array.length;i++){
         korz = array[i].korz;
         nach = array[i].nach;
         krem = array[i].krem;
       }
       var isArraynach = Array.isArray(nach);
       var isArrayKrem = Array.isArray(krem);
       var isArrayKorz = Array.isArray(korz);
       var idBisk;
       var getIdNach;
       var getIdKrem;
       let tmpArray = [];
       function itemCheck(item) {
           if (tmpArray.indexOf(item) === -1) {
               tmpArray.push(item);
               return true
           }
           return false;
       }


       var funn = async function(){
                //  let listSweet=await set.GetIdListSweet(name);

                 if(isArrayKorz){
                     for(var o=0;o<korz.length;o++){
                       idBisk = await set.GetIdBisqChock(korz[o]);
                      console.log("korz",idBisk," ",korz[o]);
                       if (isArraynach && isArrayKrem){
                         for(var j=0;j<nach.length;j++){

                           getIdNach=await set.GetIdNachChock(nach[j]);
                           console.log("nach",nach[j]," ",getIdNach);

                           for(var t=0;t<krem.length;t++){
                             getIdKrem=await set.GetIdKremChock(krem[t]);
                             console.log("krem",krem[t]," ",getIdKrem);

                             masIdKorz.push(idBisk);
                             masIdNach.push(getIdNach);
                             masIdKrem.push(getIdKrem);


                           }
                         }
                       } else if (!isArraynach&&isArrayKrem){
                         getIdNach=await set.GetIdNachChock(nach);
                         console.log("nach",nach," ",getIdNach);
                             for(var t=0;t<krem.length;t++){
                               getIdKrem=await set.GetIdKremChock(krem[t]);
                               masIdKorz.push(idBisk);
                               masIdNach.push(getIdNach);
                               masIdKrem.push(getIdKrem);

                             }
                         } else if (!isArrayKrem&&!isArraynach){
                           getIdNach=await set.GetIdNachChock(nach);
                           getIdKrem=await set.GetIdKremChock(krem);
                           masIdKorz.push(idBisk);
                           masIdNach.push(getIdNach);
                           masIdKrem.push(getIdKrem);
                         } else if (isArraynach && !isArrayKrem){
                           getIdKrem=await set.GetIdKremChock(krem);
                           for(var j=0;j<nach.length;j++){

                             getIdNach=await set.GetIdNachChock(nach[j]);
                             masIdKorz.push(idBisk);
                             masIdNach.push(getIdNach);
                             masIdKrem.push(getIdKrem);

                           }

                         }

                     }
                 } else {
                     idBisk = await set.GetIdBisqChock(korz);
                     if (isArraynach && isArrayKrem){
                       for(var j=0;j<nach.length;j++){

                         getIdNach=await set.GetIdNachChock(nach[j]);
                         for(var t=0;t<krem.length;t++){
                           getIdKrem=await set.GetIdKremChock(krem[t]);
                           masIdKorz.push(idBisk);
                           masIdNach.push(getIdNach);
                           masIdKrem.push(getIdKrem);

                         }
                       }
                     } else if (!isArraynach&&isArrayKrem){
                       getIdNach=await set.GetIdNachChock(nach);
                           for(var t=0;t<krem.length;t++){
                             getIdKrem=await set.GetIdKremChock(krem[t]);
                             masIdKorz.push(idBisk);
                             masIdNach.push(getIdNach);
                             masIdKrem.push(getIdKrem);
                           }
                       } else if (!isArrayKrem&&!isArraynach){
                         getIdNach=await set.GetIdNachChock(nach);
                         getIdKrem=await set.GetIdKremChock(krem);
                         masIdKorz.push(idBisk);
                         masIdNach.push(getIdNach);
                         masIdKrem.push(getIdKrem);
                         //
                       } else if (isArraynach && !isArrayKrem){
                         getIdKrem=await set.GetIdKremChock(krem);
                         for(var j=0;j<nach.length;j++){
                             getIdNach=await set.GetIdNachChock(nach[j]);
                             masIdKorz.push(idBisk);
                             masIdNach.push(getIdNach);
                             masIdKrem.push(getIdKrem);
                         }

                       }

                 }


       masIdKorz= masIdKorz.filter((item) => itemCheck(item));
       masIdNach= masIdNach.filter((item) => itemCheck(item));
       masIdKrem= masIdKrem.filter((item) => itemCheck(item));
         let checkInBase
       for (var i = 0; i < masIdKorz.length; i++) {
         for (var t = 0; t < masIdKrem.length; t++) {
         for (var j = 0; j < masIdNach.length; j++) {
            checkInBase = await set.getIdByParamsChock(masIdKorz[i],masIdNach[j],masIdKrem[t]);
         //  console.log("check: ",checkInBase.user_id);
         //  masId.push(checkInBase.user_id)
         }

       }
       }
       for (var i = 0; i < checkInBase.length; i++) {
          masId.push(checkInBase[i].user_id);
       }
       masId=masId.filter((item) => itemCheck(item));

       console.log("lll",masId);
                 res.redirect('/user?id=search&chock')
       }
       funn();


})
//выбор зефира
router.post('/chooseMarsh', (req, res) => {
  array1 = [];
    masId = [];
    masIdKorz = [];
    masIdNach = [];
    masIdKrem = [];
  array1.push(req.body);
  var set=new DbSet();
  var user = new DbUser();
var  array  = new Array();
array.push(req.body);
var korz;
var date=req.body.date;
var city=req.body.city;
orderNameSweet="Зефир";

for(var i=0;i<array.length;i++){
  korz = array[i].korz;
}
var isArrayKorz = Array.isArray(korz);
var idBisk;
let tmpArray = [];
function itemCheck(item) {
    if (tmpArray.indexOf(item) === -1) {
        tmpArray.push(item);
        return true
    }
    return false;
}


 var funn = async function(){


              if(isArrayKorz){
                console.log("aaa");
                  for(var o=0;o<korz.length;o++){
                    idBisk = await set.GetIdMarsh(korz[o]);
                   masIdKorz.push(idBisk);

                  }

              } else {
                console.log("BBB");
                  idBisk = await set.GetIdMarsh(korz);
                masIdKorz.push(idBisk);


              }
            masIdKorz=masIdKorz.filter((item) => itemCheck(item));
                let checkInBase
              for (var i = 0; i < masIdKorz.length; i++) {

                   checkInBase = await set.getIdByParamsMarsh(masIdKorz[i]);
                //  console.log("check: ",checkInBase.user_id);
                //  masId.push(checkInBase.user_id)
                }
              for (var i = 0; i < checkInBase.length; i++) {
                 masId.push(checkInBase[i].user_id);
              }
              masId=masId.filter((item) => itemCheck(item));

              console.log("lll",masId);
                        res.redirect('/user?id=search&marsh')
}
              funn();

})

router.post('/chooseReady', (req, res) => {
  array1 = [];
    masId = [];
    masIdKorz = [];
    masIdNach = [];
    masIdKrem = [];
  array1.push(req.body);
  var set=new DbSet();
  var user = new DbUser();
  var  array  = new Array();
  array.push(req.body);
  var korz;
  var date=req.body.date;
  var city=req.body.city;
  orderNameSweet="Классический десерт";

  for(var i=0;i<array.length;i++){
  korz = array[i].korz;
  }
  var isArrayKorz = Array.isArray(korz);
  var idBisk;
  let tmpArray = [];
  function itemCheck(item) {
    if (tmpArray.indexOf(item) === -1) {
        tmpArray.push(item);
        return true
    }
    return false;
  }


  var funn = async function(){


              if(isArrayKorz){
                console.log("aaa");
                  for(var o=0;o<korz.length;o++){
                    idBisk = await set.GetIdReady(korz[o]);
                   masIdKorz.push(idBisk);

                  }

              } else {
                console.log("BBB");
                  idBisk = await set.GetIdReady(korz);
                masIdKorz.push(idBisk);


              }
            masIdKorz=masIdKorz.filter((item) => itemCheck(item));
                let checkInBase
              for (var i = 0; i < masIdKorz.length; i++) {

                   checkInBase = await set.getIdByParamsReady(masIdKorz[i]);
                //  console.log("check: ",checkInBase.user_id);
                //  masId.push(checkInBase.user_id)
                }
              for (var i = 0; i < checkInBase.length; i++) {
                 masId.push(checkInBase[i].user_id);
              }
              masId=masId.filter((item) => itemCheck(item));

              console.log("lll",masId);
                        res.redirect('/user?id=search&ready')
  }
              funn();

})


router.post('/order', (req, res) => {
  var id = req.body.id; //исполнителя
  let nach = req.body.nach;
  let korz = req.body.korz;
  let krem = req.body.krem;
  var adress = req.body.adress;
  var sum = req.body.sum;
  var date = req.body.date;
  var ordertxt="";

  if (orderNameSweet=="Зефир") {
      ordertxt+="Начинка: ";
    for (var i = 0; i < korz.length; i++) {
      ordertxt+=korz[i]+" ";
    }
    ordertxt+="кол-во: "+req.body.count + " шт";
  } else if (orderNameSweet=="Классический десерт") {
    for (var i = 0; i < korz.length; i++) {
      ordertxt+=korz[i]+" ";
    }
      ordertxt+="кол-во кг: "+req.body.count;
  }else if (orderNameSweet=="Торты"){
  ordertxt+="Начинка: ";
  for (var i = 0; i < nach.length; i++) {
    ordertxt+=nach[i]+" ";
  }

  ordertxt+="\n Крем: ";
  for (var i = 0; i < krem.length; i++) {
    ordertxt+=krem[i]+" ";
  }
  ordertxt+="\n Корж: ";
  for (var i = 0; i < korz.length; i++) {
    ordertxt+=korz[i]+" ";
  }
    ordertxt+="кол-во кг: "+req.body.count;
} else  {
  ordertxt+="Начинка: ";
  for (var i = 0; i < nach.length; i++) {
    ordertxt+=nach[i]+" ";
  }

  ordertxt+="\n Крем: ";
  for (var i = 0; i < krem.length; i++) {
    ordertxt+=krem[i]+" ";
  }
  ordertxt+="\n Корж: ";
  for (var i = 0; i < korz.length; i++) {
    ordertxt+=korz[i]+" ";
  }
    ordertxt+="кол-во шт: "+req.body.count;
}

  let order = new DbOder();
  let fun = async function () {
    //id_worker,ordertxt,id_user,sum,adress,date
    let insert_order = await order.newOrder(id,ordertxt,getId,sum,adress,date,req.body.namesweet);

  }
  fun();
res.redirect('/user?id=zakazy');
})

router.post('/makeOrderZl', (req, res) => {
res.redirect('/user?id=makeOrder&worker='+req.body.example1)
})

function workChockClass(basischock_id,fillchock_id,kindchock_id,namebasis,sumbasis,namefill,sumfill,namekind,summkrem) {
  this.basischock_id = basischock_id;
   this.fillchock_id = fillchock_id;
   this.kindchock_id=kindchock_id;
   this.namebasis=namebasis;
   this.sumbasis=sumbasis;
   this.namefill=namefill;
   this.sumfill=sumfill;
   this.namekind=namekind;
   this.summkrem=summkrem;
}
function WorkChange(workChok) {

  let tmpArray = [];
  function itemCheck(item) {
      if (tmpArray.indexOf(item) === -1) {
          tmpArray.push(item);
          return true
      }
      return false;
  }
  let chockKind = new Array();
  let chockKindSum = new Array();
  let chockKindid = new Array();
  let chockfill = new Array();
  let chockfillSum = new Array();
  let chockfillid = new Array();
    let chockBasis = new Array();
    let chockBasisSum = new Array();
    let chockBasisid = new Array();
  for (var i = 0; i < workChok.length; i++) {
    chockKind.push(workChok[i].namekind);
    chockKindid.push(workChok[i].basischock_id);
    chockKindSum.push(workChok[i].sumbasis);
    chockfill.push(workChok[i].namefill);
    chockfillid.push(workChok[i].fillchock_id);
    chockfillSum.push(workChok[i].sumfill);
    chockBasis.push(workChok[i].namebasis);
    chockBasisSum.push(workChok[i].summkrem);
    chockBasisid.push(workChok[i].kindchock_id);
  }
  chockKind= chockKind.filter((item) => itemCheck(item));
    chockKindSum= chockKindSum.filter((item) => itemCheck(item));
    chockKindid= chockKindid.filter((item) => itemCheck(item));
  chockfill= chockfill.filter((item) => itemCheck(item));
  chockfillSum= chockfillSum.filter((item) => itemCheck(item));
  chockfillid= chockfillid.filter((item) => itemCheck(item));
  chockBasis= chockBasis.filter((item) => itemCheck(item));
  chockBasisSum= chockBasisSum.filter((item) => itemCheck(item));
  chockBasisid= chockBasisid.filter((item) => itemCheck(item));
  workChok = [];
  for (var i = 0; i < chockKind.length; i++) {
    workChok.push(new workChockClass('','',chockBasisid[i],chockKind[i],chockKindSum[i],'','','',''))
}
  for (var j = 0; j < chockfill.length; j++) {
    workChok.push(new workChockClass('',chockfillid[j],'','','',chockfill[j],chockfillSum[j],'',''))

}
  for (var t = 0; t < chockBasis.length; t++) {
    workChok.push(new workChockClass(chockKindid[t],'','','','','','',chockBasis[t],chockBasisSum[t]))
  }




  return workChok;
}
function WorkChangeCup(workChok) {
  let tmpArray = [];
  function itemCheck(item) {
      if (tmpArray.indexOf(item) === -1) {
          tmpArray.push(item);
          return true
      }
      return false;
  }
  let basis = new Array()
  let basisid = new Array();
  let basisSum = new Array();
  let fill = new Array();
  let fillid = new Array();
  let fillsum = new Array();
  let krem = new Array();
  let kremid = new Array();
  let kremsum = new Array();
  for (var i = 0; i < workChok.length; i++) {
    basis.push(workChok[i].name);
    basisid.push(workChok[i].basiscup_id);
    basisSum.push(workChok[i].sumbasis);
    fill.push(workChok[i].namefill);
    fillid.push(workChok[i].fillcup_id);
    fillsum.push(workChok[i].sumfill);
    krem.push(workChok[i].namekrem);
    kremid.push(workChok[i].kremcup_id);
    kremsum.push(workChok[i].sumkrem);
  }
  basis= basis.filter((item) => itemCheck(item));
    basisid= basisid.filter((item) => itemCheck(item));
      basisSum= basisSum.filter((item) => itemCheck(item));
        fill= fill.filter((item) => itemCheck(item));
        fillid= fillid.filter((item) => itemCheck(item));
        fillsum= fillsum.filter((item) => itemCheck(item));
        krem= krem.filter((item) => itemCheck(item));
        kremid= kremid.filter((item) => itemCheck(item));
        kremsum= kremsum.filter((item) => itemCheck(item));
  workChok = [];
  for (var i = 0; i < basis.length; i++) {
    workChok.push(new workChockClass('','',basisid[i],basis[i],basisSum[i],'','','',''))
}
for (var j = 0; j < fill.length; j++) {
  workChok.push(new workChockClass('',fillid[j],'','','',fill[j],fillsum[j],'',''))

}
for (var t = 0; t < krem.length; t++) {
  workChok.push(new workChockClass(kremid[t],'','','','','','',krem[t],kremsum[t]))
}

  return workChok;
}
function WorkChangeCake(workChok) {
  let tmpArray = [];
  function itemCheck(item) {
      if (tmpArray.indexOf(item) === -1) {
          tmpArray.push(item);
          return true
      }
      return false;
  }
  let basis = new Array()
  let basisid = new Array();
  let basisSum = new Array();
  let fill = new Array();
  let fillid = new Array();
  let fillsum = new Array();
  let krem = new Array();
  let kremid = new Array();
  let kremsum = new Array();
  for (var i = 0; i < workChok.length; i++) {
    basis.push(workChok[i].name);
    basisid.push(workChok[i].basisCake_id);
    basisSum.push(workChok[i].sumbasis);
    fill.push(workChok[i].namefill);
    fillid.push(workChok[i].fillCake_id);
    fillsum.push(workChok[i].sumfill);
    krem.push(workChok[i].namekrem);
    kremid.push(workChok[i].kremCake_id);
    kremsum.push(workChok[i].sumkrem);
  }
  basis= basis.filter((item) => itemCheck(item));
    basisid= basisid.filter((item) => itemCheck(item));
      basisSum= basisSum.filter((item) => itemCheck(item));
        fill= fill.filter((item) => itemCheck(item));
        fillid= fillid.filter((item) => itemCheck(item));
        fillsum= fillsum.filter((item) => itemCheck(item));
        krem= krem.filter((item) => itemCheck(item));
        kremid= kremid.filter((item) => itemCheck(item));
        kremsum= kremsum.filter((item) => itemCheck(item));
  workChok = [];
  for (var i = 0; i < basis.length; i++) {
    workChok.push(new workChockClass('','',basisid[i],basis[i],basisSum[i],'','','',''))
}
for (var j = 0; j < fill.length; j++) {
  workChok.push(new workChockClass('',fillid[j],'','','',fill[j],fillsum[j],'',''))

}
for (var t = 0; t < krem.length; t++) {
  workChok.push(new workChockClass(kremid[t],'','','','','','',krem[t],kremsum[t]))
}

  return workChok;
}
function WorkChangeSweet(workChok,name) {
  let tmpArray = [];
  function itemCheck(item) {
      if (tmpArray.indexOf(item) === -1) {
          tmpArray.push(item);
          return true
      }
      return false;
  }
  let basis = new Array()
  let basisid = new Array();
  let basisSum = new Array();

  for (var i = 0; i < workChok.length; i++) {
    basis.push(workChok[i].name);
    if (name=="marsh") {
      basisid.push(workChok[i].marsh_id);
    } else basisid.push(workChok[i].readycake_id);
    basisSum.push(workChok[i].sum);

  }
  basis= basis.filter((item) => itemCheck(item));
    basisid= basisid.filter((item) => itemCheck(item));
      basisSum= basisSum.filter((item) => itemCheck(item));

  workChok = [];
  for (var i = 0; i < basis.length; i++) {
    workChok.push(new workChockClass('','',basisid[i],basis[i],basisSum[i],'','','',''))
}
  return workChok;
}

  var workChock=new Array();
  var workCup =new Array();
  var workKorz = new Array();
  var workMarsh = new Array();
  var workReady = new Array();
  
router.use('/worker', (request, response) => {
  let title = "Заказы";


  var korz;
  var nach;
  var krem;
  var korzCup;
  var nachCup;
  var kremCup;
  var korzChock;
  var nachChock;
  var kremChock;
  var marsh;
  var ready;
  if (request.query.id=="settings"){
    title = "Настройки"
  }
  else if (request.query.id=="order"){
    title = "Заказы"
  }
var checkflag;
if (request.query.checkflag!=undefined) {
  checkflag = request.query.checkflag;
}
var korzId = [];
var flagKorz = [];
var KorzSum = [];
var fillId = [];
var flagFill = [];
var fillSum = [];
var kremId = [];
var flagKrem = [];
var KremSum = [];
 let set = new DbSet();
let user = new DbUser();
 let fun = async function(){
    korz = await set.getKorz();

    nach = await set.getNach();
    krem = await set.getKrem();
    var korzIdCup = [];
    var flagKorzCup = [];
    var KorzSumCup = [];
    var fillIdCup = [];
    var flagFillCup = [];
    var fillSumCup = [];
    var kremIdCup = [];
    var flagKremCup = [];
    var KremSumCup = [];
    var MarshId = [];
    var flagMarsh = [];
    var MarshSum = [];
    var ReadyId = [];
    var flagReady = [];
    var ReadySum = [];
    nachCup = await set.getNachCup();
    kremCup = await set.getKremCup();
      korzCup = await set.getKorzCup();
      marsh= await set.getMarsh();
      ready=await set.getReady();
      var korzIdChock = [];
      var flagKorzChock = [];
      var KorzSumChock = [];
      var fillIdChock = [];
      var flagFillChock = [];
      var fillSumChock = [];
      var kremIdChock = [];
      var flagKremChock = [];
      var KremSumChock = [];
          korzChock = await set.getKorzChock();
          nachChock = await set.getNachChock();
          kremChock = await set.getKremChock();
    if (title=="Настройки"){
//Chock
/*for(var i=0;i<korzChock.length;i++){
 korzIdChock.push(await set.GetIdBisqChock(korzChock[i].namekind));
}

for (var i=0;i<korzIdChock.length;i++){
  flagKorzChock.push(await set.CheckWorkerChock(getId,korzIdChock[i],"korz"));
  KorzSumChock.push(await set.getSumByIdKorzChock(korzIdChock[i],getId));
}

console.log("korzSi=umCHock", KorzSumChock);
  /*  for(var i=0;i<kremChock.length;i++){
     kremIdChock.push(await set.GetIdKremChock(kremChock[i].namebasis));
    }

    for (var i=0;i<kremIdChock.length;i++){
      flagKremChock.push(await set.CheckWorkerChock(getId,kremIdChock[i],"krem"));
      KremSumChock.push(await set.getSumByIdKremChock(kremIdChock[i],getId));
    }
console.log("KremSi=umCHock", KremSumChock);
    for(var i=0;i<nachChock.length;i++){
      fillIdChock.push(await set.GetIdNachChock(nachChock[i].namefill));
     }

     for (var i=0;i<fillIdChock.length;i++){
       flagFillChock.push(await set.CheckWorkerChock(getId,fillIdChock[i],"fill"));
       fillSumChock.push(await set.getSumByIdNachChock(fillIdChock[i],getId));
     }*/
     for(var i=0;i<korzChock.length;i++){
      korzIdChock.push(await set.GetIdBisqChock(korzChock[i].namekind));
     }

     for (var i=0;i<korzIdChock.length;i++){
       console.log("idkorz",korzIdChock[i]);
       console.log("sumKorz ",i, " sum: ",await set.getSumByIdKorzChock(korzIdChock[i],getId));
       flagKorzChock.push(await set.CheckWorkerChock(getId,korzIdChock[i],"korz"));
       KorzSumChock.push(await set.getSumByIdKorzChock(korzIdChock[i],getId));
     }


     for(var i=0;i<kremChock.length;i++){
       kremIdChock.push(await set.GetIdKremChock(kremChock[i].namebasis));
      }

      for (var i=0;i<kremIdChock.length;i++){
        flagKremChock.push(await set.CheckWorkerChock(getId,kremIdChock[i],"krem"));
        KremSumChock.push(await set.getSumByIdKremChock(kremIdChock[i],getId));
      }

         for(var i=0;i<nachChock.length;i++){
           fillIdChock.push(await set.GetIdNachChock(nachChock[i].namefill));
          }

          for (var i=0;i<fillIdChock.length;i++){
            console.log("fill i id",fillIdChock[i]);
            flagFillChock.push(await set.CheckWorker(getId,fillIdChock[i],"fill"));
            fillSumChock.push(await set.getSumByIdNachChock(fillIdChock[i],getId));
          }

//Tort
    for(var i=0;i<korz.length;i++){
     korzId.push(await set.GetIdBisq(korz[i].name));
    }

    for (var i=0;i<korzId.length;i++){
      flagKorz.push(await set.CheckWorker(getId,korzId[i],"korz"));
      KorzSum.push(await set.getSumByIdKorz(korzId[i],getId));
    }


        for(var i=0;i<krem.length;i++){
         kremId.push(await set.GetIdKrem(krem[i].namekrem));
        }

        for (var i=0;i<kremId.length;i++){
          flagKrem.push(await set.CheckWorker(getId,kremId[i],"krem"));
          KremSum.push(await set.getSumByIdKrem(kremId[i],getId));
        }

        for(var i=0;i<nach.length;i++){
          fillId.push(await set.GetIdNach(nach[i].namefill));
         }

         for (var i=0;i<fillId.length;i++){
           flagFill.push(await set.CheckWorker(getId,fillId[i],"fill"));
           fillSum.push(await set.getSumByIdNach(fillId[i],getId));
         }
    //cup
    for(var i=0;i<korzCup.length;i++){
     korzIdCup.push(await set.GetIdBisqCup(korzCup[i].name));
    }
    for (var i=0;i<korzIdCup.length;i++){
      flagKorzCup.push(await set.CheckWorkerCup(getId,korzIdCup[i],"korz"));
      KorzSumCup.push(await set.getSumByIdKorzCup(korzIdCup[i],getId));
    }

    for(var i=0;i<kremCup.length;i++){
     kremIdCup.push(await set.GetIdKremCup(kremCup[i].namekrem));
    }

    for (var i=0;i<kremIdCup.length;i++){
      flagKremCup.push(await set.CheckWorkerCup(getId,kremIdCup[i],"krem"));
      KremSumCup.push(await set.getSumByIdKremCup(kremIdCup[i],getId));
    }

    for(var i=0;i<nachCup.length;i++){
      fillIdCup.push(await set.GetIdNachCup(nachCup[i].namefill));
     }

     for (var i=0;i<fillIdCup.length;i++){
       flagFillCup.push(await set.CheckWorkerCup(getId,fillIdCup[i],"fill"));
       fillSumCup.push(await set.getSumByIdNachCup(fillIdCup[i],getId));
     }





    //marsh
    for(var i=0;i<marsh.length;i++){
     MarshId.push(await set.GetIdMarsh(marsh[i].name));
    }

    for (var i=0;i<MarshId.length;i++){
      flagMarsh.push(await set.CheckWorkerMarsh(getId,MarshId[i]));
      MarshSum.push(await set.getSumByIdMarsh(MarshId[i],getId));
    }
    //ready
    for(var i=0;i<ready.length;i++){
     ReadyId.push(await set.GetIdReady(ready[i].name));
    }

    for (var i=0;i<MarshId.length;i++){
      flagReady.push(await set.CheckWorkerReady(getId,ReadyId[i]));
      ReadySum.push(await set.getSumByIdReady(ReadyId[i],getId));
    }

  }
  var flagSumMarsh;
  if (MarshSum.length==0){
    flagSumMarsh = false;
  }
  var flagSumReady;
  if (ReadySum.length==0){
    flagSumReady = false;
  }
  var flagSum;
  if (KorzSum.length==0){
    flagSum = false;
  }
  var flagSumKrem;
  if (KremSum.length==0){
    flagSumKrem = false;
  }
  var flagSumFill;
  if (Array.isArray(fillSum)){
    flagSumFill = true;
  } else if (fillSum.length==0) flagSumFill = false;

  var flagSumChock;
  if (KorzSumChock.length==0){
    flagSumChock = false;
  }
  var flagSumKremChock;
  if (KremSumChock.length==0){
    flagSumKremChock = false;
  }
  var flagSumFillChock;
  if (Array.isArray(fillSumChock)){
    flagSumFillChock = true;
  } else if (fillSumChock.length==0) flagSumFillChock = false;


  var flagSumCup;
  if (KorzSumCup.length==0){
    flagSumCup = false;
  }
  var flagSumKremCup;
  if (KremSumCup.length==0){
    flagSumKremCup = false;
  }
  var flagSumFillCup;
  if (Array.isArray(fillSumCup)){
    flagSumFillCup = true;
  } else if (fillSumCup.length==0) flagSumFillCup = false;





    workKorzz = await set.getworkSweetKorz(id_user);
    workChok = await set.getworkSweetChock(id_user);


    workCupp = await set.getworkSweetCup(id_user);
    workmarsh = await set.getworkSweetMarsh(id_user);
    workready = await set.getworkSweetReady(id_user);
    namesweet = await set.getNameSweet();
  workChock=WorkChange(workChok);

 workCup = WorkChangeCup(workCupp);
workKorz = WorkChangeCake(workKorzz);
workMarsh = WorkChangeSweet(workmarsh,"marsh");
workReady = WorkChangeSweet(workready,"ready");
    var names;
    if (request.query.work!=undefined){
      names = request.query.work;
    }

    let order = new DbOder();
    var orderInfo = new Array();
    var us_id = await order.getOrderWorker(getId);
    for (var i = 0; i < us_id.length; i++) {
      orderInfo = await order.getOrderUs(us_id[i].user_id,getId);
    }


    response.render('work',{
      user_id:id_user,
      title:title,
      orderInfo:orderInfo,
      checkflag:checkflag,
      flagSum:flagSum,
      korz:korz,
      flagKorz:flagKorz,
      sumKorz:KorzSum,
      flagSumFill:flagSumFill,
      nach:nach,
      flagFill:flagFill,
      sumFill:fillSum,
        flagSumKrem:flagSumKrem,
      krem:krem,
      flagKrem:flagKrem,
      sumKrem:KremSum,
      flagSumCup:flagSumCup,
      korzCup:korzCup,
      flagKorzCup:flagKorzCup,
      sumKorzCup:KorzSumCup,
      flagSumFillCup:flagSumFillCup,
      nachCup:nachCup,
      flagFillCup:flagFillCup,
      sumFillCup:fillSumCup,
        flagSumKremCup:flagSumKremCup,
      kremCup:kremCup,
      flagKremCup:flagKremCup,
      sumKremCup:KremSumCup,
      flagSumChock:flagSumChock,
      korzChock:korzChock,
      flagKorzChock:flagKorzChock,
      sumKorzChock:KorzSumChock,
      flagSumFillChock:flagSumFillChock,
      nachChock:nachChock,
      flagFillChock:flagFillChock,
      sumFillChock:fillSumChock,
        flagSumKremChock:flagSumKremChock,
      kremChock:kremChock,
      flagKremChock:flagKremChock,
      sumKremChock:KremSumChock,
      flagSumMarsh:flagSumMarsh,
      marsh:marsh,
      flagMarsh:flagMarsh,
      sumMarsh:MarshSum,
      flagSumReady:flagSumReady,
      ready:ready,
      flagReady:flagReady,
      sumReady:ReadySum,
      flag: flagUser,
      listsweet:namesweet,
      names:names,
      workChock:workChock,
      workCup:workCup,
      workKorz:workKorz,
      workMarsh:workMarsh,
      workReady:workReady

     // role:role


     // checked:checkedSweet

  }
  )
 }
 fun();


})

router.post("/doneOrder", function (req, res) {

let fun = async function () {
  let order = new DbOder();
  let id = req.body.user;
  let done = await order.done(id);
}
fun();
  res.redirect('/worker?id=order&user_id='+getId);
});



router.post("/WorksChoose", function (req, res) {

  res.redirect('/worker?id=settings&user_id='+getId+'&work='+req.body.example1);
});

var id_user;
router.get('/enterClient', (req, res) => {
  console.log("HHHH")
    res.render('enterClient', {
      title:"Вход",
      data: {},
      errors: {}
    })
  })

 const { check, validationResult } = require('express-validator/check')


const { matchedData } = require('express-validator/filter')

 ///проверка на вход
var getId;
router.post('/contact', [
  check('email')

    .isEmail()
    .withMessage('поле не корректно'),

  check('password')
  .isLength({ min: 6 })
  .withMessage('поле не корректно')

], (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.render('enterClient', {
      title:"Вход",
      data: req.body,
      errors: errors.mapped()
    })
  }
    else{
      let user=new DbUser(req.body['email'],req.body['password']);
      let check = async function (){
        console.log("contact^",req.body['email']);
        
        let checkEmail=await user.CheckLogin(req.body['email']);

        let enter= await user.CheckAll(req.body['email'],req.body['password']);
        

        //console.log(enter);
        if (!checkEmail){
          res.redirect('/Registration')
        }
       else if(checkEmail&&!enter){
       data = matchedData(req)
       req.password = "";
       //req.flash('success', '')
       res.render('enterClient',{
        title:"Вход",
        data: req.body,
        errors: errors.mapped()
       })

        }


        else
        {
          
         getId=await user.GetId(req.body['email']);
         let checkRole=await user.CheckRole(getId);
          if(checkRole=='Исполнитель'){
            console.log(checkRole)
            id_user = getId;
            res.redirect('/worker?id=order&user_id='+getId+'&email='+req.body['email']);
            flagUser = true;

          }
          else if (checkRole=='Заказчик'){
          res.redirect('/user?&user_id='+getId)
          flagUser = true;
          }
          //проверить по айди заказчик или исполнитель - > в зависимости от этого редирект на нужную стр

        }

      }//checkus
       check();




  }//обратиться к бд


})






router.get('/Registration', (req, res) => {
    res.render('reg',{
        title:"регистрация",
        data: {},
        errors: {}
    }
    )
})

/// проверка в регистрации
router.post('/reg', [
  check('firstname')
  .isLength({min: 6})
  .withMessage('поле не корректно'),

  check('name')
  .isLength({min: 2})
  .withMessage('поле не корректно'),

  check('numberphone')
  .isMobilePhone('ru-RU')
  .withMessage('поле не корректно'),

  check('adres')
  .isLength({min: 5})
  .withMessage('поле не корректно'),

   check('email')
    .isEmail()
    .withMessage('поле не корректно'),

  check('password')
  .isLength({ min: 6 })
  .withMessage('поле не корректно'),

  check('role')
  .isLength({min: 5})
  .withMessage('поле не корректно'),

],(req, res) => {
  const errors = validationResult(req)
  //console.log(req.body['firstname'])
  //console.log(data)
  if (!errors.isEmpty()) {
     res.render('reg', {
      title:"регистрация",
      data: req.body,
      errors: errors.mapped()
    })
  }
  else{

    let user=new DbUser(req.body['email'],req.body['password']);
    var checkEmail;
    console.log(req.body['email']);

    let RegUser = async function (){
     /*// let roles=req.body.role[0];

      //console.log(roles)*/
      checkEmail = await user.CheckLogin(req.body['email']);
      console.log(checkEmail);
      if (checkEmail){
        req.body['email'] = "существует"
        res.render('reg', {
          title:"Регистрация",
       data: req.body,
       errors: errors.mapped()
        })
      } else {
      let regi= await user.UserReg(req.body['firstname'],req.body['name'],req.body['numberphone'],req.body['adres'],req.body['email'],req.body['password'],req.body['role']);
      //data = matchedData(req)
       getId=await user.GetId(req.body['email']);
        let checkRole=await user.CheckRole(getId);
        if(checkRole=='Исполнитель'){
          console.log(checkRole)
          res.redirect('/worker?id=settings&user_id='+getId);
          flagUser = true;

        }
        else if(checkRole=='Заказчик') {
        res.redirect('/user?&user_id='+getId)
        flagUser = true;
        }
      }
        //проверить по айди заказчик или исполнитель - > в зависимости от этого редирект на нужную стр


    }
    console.log("AAAAAAA0",checkEmail);
    
    RegUser();
  
  } 

})



router.post('/setting', (req, res) => {
  var set=new DbSet();
  var user = new DbUser();
 var  array  = new Array();
 array.push(req.body);
 var  nach ;
  var  krem;
console.log(req.body);
 var korz;
 for(var i=0;i<array.length;i++){
  korz = array[i].korz;
  nach = array[i].nach;
  krem = array[i].krem;
 }
 console.log("pered if");
 
 if ((korz==undefined || nach==undefined || krem== undefined)||(korz==undefined&&nach==undefined&&krem==undefined)||(korz==undefined&&nach==undefined)||(korz==undefined&&krem==undefined)||(nach==undefined&&krem==undefined)){
  console.log("YA TUT");
      
  res.redirect('/worker?id=settings&user_id'+getId);
 } else {
 var sumKorzArray = [];
 for (var i = 0; i < req.body.sum.length; i++) {
  if(req.body.sum[i]!=""){
    sumKorzArray.push(req.body.sum[i]);
  }
 }
 req.body.sum = [];
 for (var i = 0; i < sumKorzArray.length; i++) {
   req.body.sum.push(sumKorzArray[i]);
 }
 var sumNachArray = [];
 for (var i = 0; i < req.body.sumfill.length; i++) {
  if(req.body.sumfill[i]!=""){
    sumNachArray.push(req.body.sumfill[i]);
  }
 }
 req.body.sumfill = [];
 for (var i = 0; i < sumNachArray.length; i++) {
   req.body.sumfill.push(sumNachArray[i]);
 }
 var sumKremArray = [];
 for (var i = 0; i < req.body.sumkrem.length; i++) {
  if(req.body.sumkrem[i]!=""){
    sumKremArray.push(req.body.sumkrem[i]);
  }
 }
 req.body.sumkrem = [];
 for (var i = 0; i < sumKremArray.length; i++) {
   req.body.sumkrem.push(sumKremArray[i]);
 }
var isArraynach = Array.isArray(nach);
var isArrayKrem = Array.isArray(krem);
var isArrayKorz = Array.isArray(korz);
console.log("Korz",sumKorzArray);
console.log("nach",sumNachArray);
console.log("krem",sumKremArray);
var idBisk;
var getIdNach;
var getIdKrem;
console.log(req.body.sum,"  ",req.body.sumfill,"  ",req.body.sumkrem);
var checkflag = true;
//Сумму проработать, если не "", то записывать, иначе пропускать
 var funn = async function(){
//подменить сумму, если айди существует
              if(isArrayKorz){
                console.log("aaa");
                  for(var o=0;o<korz.length;o++){
                    idBisk = await set.GetIdBisq(korz[o]);

                    if (isArraynach && isArrayKrem){
                      for(var j=0;j<nach.length;j++){

                        getIdNach=await set.GetIdNach(nach[j]);
                        console.log("nach",nach[j]," ",getIdNach);

                        for(var t=0;t<krem.length;t++){
                          getIdKrem=await set.GetIdKrem(krem[t]);
                          console.log("krem",krem[t]," ",getIdKrem);
                          console.log(getId);
                          let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                          if (!check) {
                              let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],req.body.sumfill[j],req.body.sumkrem[t]);

                              checkflag = false;
                          }
                         // res.redirect('/worker?id=settings&user_id='+getId);

                        }
                      }
                    } else if (!isArraynach&&isArrayKrem){
                      getIdNach=await set.GetIdNach(nach);
                      console.log("nach",nach," ",getIdNach);
                      let sumfill=0 ;
                      for (var i = 0; i < req.body.sumfill.length; i++) {
                        if (req.body.sumfill[i]!=""){
                          sumfill=req.body.sumfill[i];
                        }
                      }
                        console.log("одна начинка. остальное по два. сумма ",sumfill);
                          for(var t=0;t<krem.length;t++){
                            getIdKrem=await set.GetIdKrem(krem[t]);
                            console.log("krem",krem[t]," ",getIdKrem);
                            let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                            if (!check) {
                              let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],sumfill,req.body.sumkrem[t]);
                               checkflag = false;
                            }
                          // res.redirect('/worker?id=settings&user_id='+getId);

                          }
                      } else if (!isArrayKrem&&!isArraynach){
                        getIdNach=await set.GetIdNach(nach);
                        getIdKrem=await set.GetIdKrem(krem);
                        console.log("krem",krem," ",getIdKrem);
                        console.log("nach",nach," ",getIdNach);

                        let sumfill=0 ;
                        for (var i = 0; i < req.body.sumfill.length; i++) {
                          if (req.body.sumfill[i]!=""){
                            sumfill=req.body.sumfill[i];
                          }
                        }
                        let sumkrem=0;
                        for (var t = 0; t < req.body.sumkrem.length; t++) {
                          if (req.body.sumkrem[t]!="") {
                            sumkrem=req.body.sumkrem[t];
                          }
                        }

                        let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],sumfill,sumkrem);
                      } else if (isArraynach && !isArrayKrem){
                        getIdKrem=await set.GetIdKrem(krem);
                        console.log("krem",krem," ",getIdKrem);
                        let sumkrem=0;
                        for (var t = 0; t < req.body.krem.length; t++) {
                          if (req.body.sumkrem[t]!="") {
                            sumkrem=req.body.sumkrem[t];
                            console.log("sumkrem", sumkrem);
                          }
                        }
                        console.log("Один крем : ",sumkrem);
                        for(var j=0;j<nach.length;j++){

                          getIdNach=await set.GetIdNach(nach[j]);
                          console.log("nach",nach[j]," ",getIdNach);
                          let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                          if (!check) {
                            let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],req.body.sumfill[j],sumkrem);
                            checkflag = false;
                          }
                        // res.redirect('/worker?id=settings&user_id='+getId);

                        }

                      }

                  }
              } else {
                console.log("BBB");
                  idBisk = await set.GetIdBisq(korz);
                  console.log(idBisk," ",korz);
                  console.log("korz ne mas");
                  var sumkorz;
                  for (var i = 0; i <req.body.sum.length; i++) {
                    if (req.body.sum[i]!="") {
                      sumkorz = req.body.sum[i];
                    }
                  }
                  if (isArraynach && isArrayKrem){
                    for(var j=0;j<nach.length;j++){

                      getIdNach=await set.GetIdNach(nach[j]);
                      console.log("nach",nach[j]," ",getIdNach);

                      for(var t=0;t<krem.length;t++){
                        getIdKrem=await set.GetIdKrem(krem[t]);
                        console.log("krem",krem[t]," ",getIdKrem);
                        console.log(req.body.sum[0]);
                        let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                        if (!check) {
                          let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,sumkorz,req.body.sumfill[j],req.body.sumkrem[t]);
                            checkflag = false;
                        }
                      //res.redirect('/worker?id=settings&user_id='+getId);

                      }
                    }
                  } else if (!isArraynach&&isArrayKrem){
                    let sumfill=0 ;
                    for (var i = 0; i < req.body.sumfill.length; i++) {
                      if (req.body.sumfill[i]!=""){
                        sumfill=req.body.sumfill[i];
                      }
                    }
                    getIdNach=await set.GetIdNach(nach);
                    console.log("nach",nach," ",getIdNach);
                        for(var t=0;t<krem.length;t++){
                          getIdKrem=await set.GetIdKrem(krem[t]);
                          console.log("krem",krem[t]," ",getIdKrem);
                          let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                          if (!check) {
                            let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,sumkorz,sumfill,req.body.sumkrem[t]);
                             checkflag = false;
                          }
                          // res.redirect('/worker?id=settings&user_id='+getId);
                        }
                    } else if (!isArrayKrem&&!isArraynach){
                      getIdNach=await set.GetIdNach(nach);
                      getIdKrem=await set.GetIdKrem(krem);
                      console.log("krem",krem," ",getIdKrem);
                      console.log("nach",nach," ",getIdNach);
                      let sumfill=0 ;
                      for (var i = 0; i < req.body.sumfill.length; i++) {
                        if (req.body.sumfill[i]!=""){
                          sumfill=req.body.sumfill[i];
                        }
                      }
                      let sumkrem;
                      for (var t = 0; t < req.body.sumkrem.length; t++) {
                        if (req.body.sumkrem[t]!="") {
                          sumkrem=req.body.sumkrem[t];
                        }
                      }
                      let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                      if (!check) {
                        let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,sumkorz,sumfill,sumkrem);
                       checkflag = false;
                      }
                        //
                    } else if (isArraynach && !isArrayKrem){
                      getIdKrem=await set.GetIdKrem(krem);
                      let sumkrem;
                      for (var t = 0; t < req.body.krem.length; t++) {
                        if (req.body.sumkrem[t]!="") {
                          sumkrem=req.body.sumkrem[t];
                        }
                      }
                      console.log("krem",krem," ",getIdKrem);
                      for(var j=0;j<nach.length;j++){

                        getIdNach=await set.GetIdNach(nach[j]);
                        console.log("nach",nach[j]," ",getIdNach);
                        let check = await set.CheckInBase(getId,idBisk,getIdNach,getIdKrem);
                        if (!check) {
                          let insert_table = await set.InBaseId(getId,idBisk,getIdNach,getIdKrem,sumkorz,req.body.sumfill[j],sumkrem);
                          checkflag = false;
                        }
                      // res.redirect('/worker?id=settings&user_id='+getId);
                      }

                    }

              }

res.redirect('/worker?id=settings&user_id='+getId+'&checkflag='+checkflag);
}
    funn();
 }


})


router.post('/settingCup', (req, res) => {
  var set=new DbSet();
  var user = new DbUser();
 var  array  = new Array();
 array.push(req.body);
 var  nach ;
  var  krem;
 console.log(req.query.user_id);

 var korz;
 for(var i=0;i<array.length;i++){
  korz = array[i].korz;
  nach = array[i].nach;
  krem = array[i].krem;
 }
 var sumKorzArray = [];
 for (var i = 0; i < req.body.sum.length; i++) {
  if(req.body.sum[i]!=""){
    sumKorzArray.push(req.body.sum[i]);
  }
 }
 req.body.sum = [];
 for (var i = 0; i < sumKorzArray.length; i++) {
   req.body.sum.push(sumKorzArray[i]);
 }
 var sumNachArray = [];
 for (var i = 0; i < req.body.sumfill.length; i++) {
  if(req.body.sumfill[i]!=""){
    sumNachArray.push(req.body.sumfill[i]);
  }
 }
 req.body.sumfill = [];
 for (var i = 0; i < sumNachArray.length; i++) {
   req.body.sumfill.push(sumNachArray[i]);
 }
 var sumKremArray = [];
 for (var i = 0; i < req.body.sumkrem.length; i++) {
  if(req.body.sumkrem[i]!=""){
    sumKremArray.push(req.body.sumkrem[i]);
  }
 }
 req.body.sumkrem = [];
 for (var i = 0; i < sumKremArray.length; i++) {
   req.body.sumkrem.push(sumKremArray[i]);
 }
var isArraynach = Array.isArray(nach);
var isArrayKrem = Array.isArray(krem);
var isArrayKorz = Array.isArray(korz);
console.log("Korz",isArrayKorz);
console.log("nach",isArraynach);
console.log("krem",isArrayKrem);
var idBisk;
var getIdNach;
var getIdKrem;
var checkflag=true;
 var funn = async function(){


   if(isArrayKorz){
     console.log("aaa");
       for(var o=0;o<korz.length;o++){
         idBisk = await set.GetIdBisqCup(korz[o]);

         if (isArraynach && isArrayKrem){
           for(var j=0;j<nach.length;j++){

             getIdNach=await set.GetIdNachCup(nach[j]);
             console.log("nach",nach[j]," ",getIdNach);

             for(var t=0;t<krem.length;t++){
               getIdKrem=await set.GetIdKremCup(krem[t]);
               console.log("krem",krem[t]," ",getIdKrem);
               console.log(getId);
               let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
               if (!check) {
                 let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],req.body.sumfill[j],req.body.sumkrem[t]);
                checkflag = false;
               }else checkflag = true;
               console.log(checkflag);
            // res.redirect('/worker?id=settings&user_id='+getId);

             }
           }
         } else if (!isArraynach&&isArrayKrem){
           getIdNach=await set.GetIdNachCup(nach);
           console.log("nach",nach," ",getIdNach);
           let sumfill=0 ;
           for (var i = 0; i < req.body.sumfill.length; i++) {
             if (req.body.sumfill[i]!=""){
               sumfill=req.body.sumfill[i];
             }
           }
             console.log("одна начинка. остальное по два. сумма ",sumfill);
               for(var t=0;t<krem.length;t++){
                 getIdKrem=await set.GetIdKremCup(krem[t]);
                 console.log("krem",krem[t]," ",getIdKrem);
                 let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
                 if (!check) {
                   let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],sumfill,req.body.sumkrem[t]);
                    checkflag = false;
                 }else checkflag = true;
                // res.redirect('/worker?id=settings&user_id='+getId);

               }
           } else if (!isArrayKrem&&!isArraynach){
             getIdNach=await set.GetIdNachCup(nach);
             getIdKrem=await set.GetIdKremCup(krem);
             console.log("krem",krem," ",getIdKrem);
             console.log("nach",nach," ",getIdNach);

             let sumfill=0 ;
             for (var i = 0; i < req.body.sumfill.length; i++) {
               if (req.body.sumfill[i]!=""){
                 sumfill=req.body.sumfill[i];
               }
             }
             let sumkrem=0;
             for (var t = 0; t < req.body.sumkrem.length; t++) {
               if (req.body.sumkrem[t]!="") {
                 sumkrem=req.body.sumkrem[t];
               }
             }
             let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
             if (!check) {
               let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],sumfill,sumkrem);
              checkflag = false;
             } else checkflag = true;

           } else if (isArraynach && !isArrayKrem){
             getIdKrem=await set.GetIdKremCup(krem);
             console.log("krem",krem," ",getIdKrem);
             let sumkrem;
             for (var t = 0; t < req.body.krem.length; t++) {
               if (req.body.sumkrem[t]!="") {
                 sumkrem=req.body.sumkrem[t];
               }
             }
             for(var j=0;j<nach.length;j++){

               getIdNach=await set.GetIdNachCup(nach[j]);
               console.log("nach",nach[j]," ",getIdNach);
               let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
               if (!check) {
                 let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],req.body.sumfill[j],sumkrem);
                checkflag = false;
               } else checkflag = true;
                // res.redirect('/worker?id=settings&user_id='+getId);

             }

           }

       }
   } else {
     console.log("BBB");
       idBisk = await set.GetIdBisqCup(korz);
       console.log(idBisk," ",korz);
       console.log("korz ne mas");
       var sumkorz;
       for (var i = 0; i <req.body.sum.length; i++) {
         if (req.body.sum[i]!="") {
           sumkorz = req.body.sum[i];
         }
       }
       if (isArraynach && isArrayKrem){
         for(var j=0;j<nach.length;j++){

           getIdNach=await set.GetIdNachCup(nach[j]);
           console.log("nach",nach[j]," ",getIdNach);

           for(var t=0;t<krem.length;t++){
             getIdKrem=await set.GetIdKremCup(krem[t]);
             console.log("krem",krem[t]," ",getIdKrem);
             console.log(req.body.sum[0]);
             let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
             if (!check) {
               let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,sumkorz,req.body.sumfill[j],req.body.sumkrem[t]);
                 checkflag = false;
             } else checkflag = true;
            //res.redirect('/worker?id=settings&user_id='+getId);

           }
         }
       } else if (!isArraynach&&isArrayKrem){
         let sumfill=0 ;
         for (var i = 0; i < req.body.sumfill.length; i++) {
           if (req.body.sumfill[i]!=""){
             sumfill=req.body.sumfill[i];
           }
         }
         getIdNach=await set.GetIdNachCup(nach);
         console.log("nach",nach," ",getIdNach);
             for(var t=0;t<krem.length;t++){
               getIdKrem=await set.GetIdKremCup(krem[t]);
               console.log("krem",krem[t]," ",getIdKrem);
               let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
               if (!check) {
                 let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,sumkorz,sumfill,req.body.sumkrem[t]);
                 checkflag = false;
               } else checkflag = true;
              // res.redirect('/worker?id=settings&user_id='+getId);
             }
         } else if (!isArrayKrem&&!isArraynach){
           getIdNach=await set.GetIdNachCup(nach);
           getIdKrem=await set.GetIdKremCup(krem);
           console.log("krem",krem," ",getIdKrem);
           console.log("nach",nach," ",getIdNach);
           let sumfill=0 ;
           for (var i = 0; i < req.body.sumfill.length; i++) {
             if (req.body.sumfill[i]!=""){
               sumfill=req.body.sumfill[i];
             }
           }
           let sumkrem;
           for (var t = 0; t < req.body.sumkrem.length; t++) {
             if (req.body.sumkrem[t]!="") {
               sumkrem=req.body.sumkrem[t];
             }
           }
           let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
           if (!check) {
             let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,sumkorz,sumfill,sumkrem);
             checkflag = false;
           } else checkflag = true;

           //
         } else if (isArraynach && !isArrayKrem){
           getIdKrem=await set.GetIdKremCup(krem);
           let sumkrem;
           for (var t = 0; t < req.body.krem.length; t++) {
             if (req.body.sumkrem[t]!="") {
               sumkrem=req.body.sumkrem[t];
             }
           }
           console.log("krem",krem," ",getIdKrem);
           for(var j=0;j<nach.length;j++){

             getIdNach=await set.GetIdNachCup(nach[j]);
             console.log("nach",nach[j]," ",getIdNach);
             let check = await set.CheckInBaseCup(getId,idBisk,getIdNach,getIdKrem);
             if (!check) {
               let insert_table = await set.InBaseIdCup(getId,idBisk,getIdNach,getIdKrem,sumkorz,req.body.sumfill[j],sumkrem);
               checkflag = false;
             } else checkflag = true;
            // res.redirect('/worker?id=settings&user_id='+getId);
           }

         }

   }
res.redirect('/worker?id=settings&user_id='+getId+'&checkflag='+checkflag);

}
    funn();




})

router.post('/settingChock', (req, res) => {
  var set=new DbSet();
  var user = new DbUser();
 var  array  = new Array();
 array.push(req.body);
 var  nach ;
  var  krem;
 console.log(req.query.user_id);

 var korz;
 for(var i=0;i<array.length;i++){
  korz = array[i].korz;
  nach = array[i].nach;
  krem = array[i].krem;
 }
 var sumKorzArray = [];
 for (var i = 0; i < req.body.sum.length; i++) {
  if(req.body.sum[i]!=""){
    sumKorzArray.push(req.body.sum[i]);
  }
 }
 req.body.sum = [];
 for (var i = 0; i < sumKorzArray.length; i++) {
   req.body.sum.push(sumKorzArray[i]);
 }
 var sumNachArray = [];
 for (var i = 0; i < req.body.sumfill.length; i++) {
  if(req.body.sumfill[i]!=""){
    sumNachArray.push(req.body.sumfill[i]);
  }
 }
 req.body.sumfill = [];
 for (var i = 0; i < sumNachArray.length; i++) {
   req.body.sumfill.push(sumNachArray[i]);
 }
 var sumKremArray = [];
 for (var i = 0; i < req.body.sumkrem.length; i++) {
  if(req.body.sumkrem[i]!=""){
    sumKremArray.push(req.body.sumkrem[i]);
  }
 }
 req.body.sumkrem = [];
 for (var i = 0; i < sumKremArray.length; i++) {
   req.body.sumkrem.push(sumKremArray[i]);
 }

var isArraynach = Array.isArray(nach);
var isArrayKrem = Array.isArray(krem);
var isArrayKorz = Array.isArray(korz);
console.log("Korz",isArrayKorz);
console.log("nach",isArraynach);
console.log("krem",isArrayKrem);
var idBisk;
var getIdNach;
var getIdKrem;
var checkflag;
 var funn = async function(){


   if(isArrayKorz){
     console.log("aaa");
       for(var o=0;o<korz.length;o++){
         idBisk = await set.GetIdBisqChock(korz[o]);

         if (isArraynach && isArrayKrem){
           for(var j=0;j<nach.length;j++){

             getIdNach=await set.GetIdNachChock(nach[j]);
             console.log("nach",nach[j]," ",getIdNach);

             for(var t=0;t<krem.length;t++){
               getIdKrem=await set.GetIdKremChock(krem[t]);
               console.log("krem",krem[t]," ",getIdKrem);
               console.log(getId);
               let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
               if (!check) {
                 let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],req.body.sumfill[j],req.body.sumkrem[t]);
                checkflag = false;
               } else checkflag = true;
               // res.redirect('/worker?id=settings&user_id='+getId);

             }
           }
         } else if (!isArraynach&&isArrayKrem){
           getIdNach=await set.GetIdNachChock(nach);
           console.log("nach",nach," ",getIdNach);
           let sumfill=0 ;
           for (var i = 0; i < req.body.sumfill.length; i++) {
             if (req.body.sumfill[i]!=""){
               sumfill=req.body.sumfill[i];
             }
           }
             console.log("одна начинка. остальное по два. сумма ",sumfill);
               for(var t=0;t<krem.length;t++){
                 getIdKrem=await set.GetIdKremChock(krem[t]);
                 console.log("krem",krem[t]," ",getIdKrem);
                 let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
                 if (!check) {
                   let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],sumfill,req.body.sumkrem[t]);
                  checkflag = false;
                 } else checkflag = true;
                   // res.redirect('/worker?id=settings&user_id='+getId);

               }
           } else if (!isArrayKrem&&!isArraynach){
             getIdNach=await set.GetIdNachChock(nach);
             getIdKrem=await set.GetIdKremChock(krem);
             console.log("krem",krem," ",getIdKrem);
             console.log("nach",nach," ",getIdNach);

             let sumfill=0 ;
             for (var i = 0; i < req.body.sumfill.length; i++) {
               if (req.body.sumfill[i]!=""){
                 sumfill=req.body.sumfill[i];
               }
             }
             let sumkrem=0;
             for (var t = 0; t < req.body.sumkrem.length; t++) {
               if (req.body.sumkrem[t]!="") {
                 sumkrem=req.body.sumkrem[t];
               }
             }
             let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
             if (!check) {
                  let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],sumfill,sumkrem);
              checkflag = false;
             } else checkflag = true;

           } else if (isArraynach && !isArrayKrem){
             getIdKrem=await set.GetIdKremChock(krem);
             console.log("krem",krem," ",getIdKrem);
             let sumkrem;
             for (var t = 0; t < req.body.krem.length; t++) {
               if (req.body.sumkrem[t]!="") {
                 sumkrem=req.body.sumkrem[t];
               }
             }
             console.log("sumkremChock",sumkrem);
             for(var j=0;j<nach.length;j++){

               getIdNach=await set.GetIdNachChock(nach[j]);
               console.log("nach",nach[j]," ",getIdNach);
               let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
               if (!check) {
                 let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,req.body.sum[o],req.body.sumfill[j],sumkrem);
                checkflag = false;
               } else checkflag = true;
                 // res.redirect('/worker?id=settings&user_id='+getId);

             }

           }

       }
   } else {
     console.log("BBB");
       idBisk = await set.GetIdBisqChock(korz);
       console.log(idBisk," ",korz);
       console.log("korz ne mas");
       var sumkorz;
       for (var i = 0; i <req.body.sum.length; i++) {
         if (req.body.sum[i]!="") {
           sumkorz = req.body.sum[i];
         }
       }
       if (isArraynach && isArrayKrem){
         for(var j=0;j<nach.length;j++){

           getIdNach=await set.GetIdNachChock(nach[j]);
           console.log("nach",nach[j]," ",getIdNach);

           for(var t=0;t<krem.length;t++){
             getIdKrem=await set.GetIdKremChock(krem[t]);
             console.log("krem",krem[t]," ",getIdKrem);
             console.log(req.body.sum[0]);
             let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
             if (!check) {
               let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,sumkorz,req.body.sumfill[j],req.body.sumkrem[t]);
              checkflag = false;
             } else checkflag = true;
               //res.redirect('/worker?id=settings&user_id='+getId);

           }
         }
       } else if (!isArraynach&&isArrayKrem){
         let sumfill=0 ;
         for (var i = 0; i < req.body.sumfill.length; i++) {
           if (req.body.sumfill[i]!=""){
             sumfill=req.body.sumfill[i];
           }
         }
         getIdNach=await set.GetIdNachChock(nach);
         console.log("nach",nach," ",getIdNach);
             for(var t=0;t<krem.length;t++){
               getIdKrem=await set.GetIdKremChock(krem[t]);
               console.log("krem",krem[t]," ",getIdKrem);
               let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
               if (!check) {
                 let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,sumkorz,sumfill,req.body.sumkrem[t]);
              checkflag = false;
               } else checkflag = true;
                // res.redirect('/worker?id=settings&user_id='+getId);
             }
         } else if (!isArrayKrem&&!isArraynach){
           getIdNach=await set.GetIdNachChock(nach);
           getIdKrem=await set.GetIdKremChock(krem);
           console.log("krem",krem," ",getIdKrem);
           console.log("nach",nach," ",getIdNach);
           let sumfill=0 ;
           for (var i = 0; i < req.body.sumfill.length; i++) {
             if (req.body.sumfill[i]!=""){
               sumfill=req.body.sumfill[i];
             }
           }
           let sumkrem;
           for (var t = 0; t < req.body.sumkrem.length; t++) {
             if (req.body.sumkrem[t]!="") {
               sumkrem=req.body.sumkrem[t];
             }
           }
           let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
           if (!check) {
           let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,sumkorz,sumfill,sumkrem);
          checkflag = false;
           } else checkflag = true;
           //
         } else if (isArraynach && !isArrayKrem){
           getIdKrem=await set.GetIdKremChock(krem);
           let sumkrem;
           for (var t = 0; t < req.body.krem.length; t++) {
             if (req.body.sumkrem[t]!="") {
               sumkrem=req.body.sumkrem[t];
             }
           }
           console.log("krem",krem," ",getIdKrem);
           for(var j=0;j<nach.length;j++){

             getIdNach=await set.GetIdNachChock(nach[j]);
             console.log("nach",nach[j]," ",getIdNach);
             let check = await set.CheckInBaseChock(getId,idBisk,getIdNach,getIdKrem);
             if (!check) {
               let insert_table = await set.InBaseIdChock(getId,idBisk,getIdNach,getIdKrem,sumkorz,req.body.sumfill[j],sumkrem);

            checkflag = false;
             } else checkflag = true;
               // res.redirect('/worker?id=settings&user_id='+getId);
           }

         }

   }

  res.redirect('/worker?id=settings&user_id='+getId+'&checkflag='+checkflag);
}
    funn();



})

router.post('/settingMarsh', (req, res) => {
  var set=new DbSet();
  var user = new DbUser();
 var  array  = new Array();
 array.push(req.body);

 console.log(req.query.user_id);

 var korz;
 for(var i=0;i<array.length;i++){
  korz = array[i].korz;

 }
 var sumKorzArray = [];
 for (var i = 0; i < req.body.sum.length; i++) {
  if(req.body.sum[i]!=""){
    sumKorzArray.push(req.body.sum[i]);
  }
 }
 req.body.sum = [];
 for (var i = 0; i < sumKorzArray.length; i++) {
   req.body.sum.push(sumKorzArray[i]);
 }
var isArrayKorz = Array.isArray(korz);
console.log("Korz",isArrayKorz);

var idBisk;
var checkflag ;
 var funn = async function(){


              if(isArrayKorz){
                console.log("aaa");
                  for(var o=0;o<korz.length;o++){
                    idBisk = await set.GetIdMarsh(korz[o]);
                   console.log("korz",idBisk," ",korz[o]);
                   let check = await set.CheckInBaseMarsh(getId,idBisk);
                   if (!check) {
                     let insert_table = await set.InBaseIdMarsh(getId,idBisk,req.body.sum[o]);
                  checkflag = false;
                   } else checkflag = true;

                  }

              } else {
                var sumkorz;
                for (var i = 0; i <req.body.sum.length; i++) {
                  if (req.body.summarsh[i]!="") {
                    sumkorz = req.body.sum[i];
                  }
                }
                console.log("BBB");
                  idBisk = await set.GetIdMarsh(korz);
                  console.log(idBisk," ",korz);
                  console.log("korz ne mas");
                  let check = await set.CheckInBaseMarsh(getId,idBisk);
                  if (!check) {
                    let insert_table = await set.InBaseIdMarsh(getId,idBisk,sumkorz);
                 checkflag = false;
                  } else checkflag = true;



              }

  res.redirect('/worker?id=settings&user_id='+getId+'&checkflag='+checkflag);
}
    funn();



})

router.post('/settingReady', (req, res) => {
  var set=new DbSet();
  var user = new DbUser();
 var  array  = new Array();
 array.push(req.body);

 console.log(req.query.user_id);

 var korz;
 for(var i=0;i<array.length;i++){
  korz = array[i].korz;

 }
 var sumKorzArray = [];
 for (var i = 0; i < req.body.sum.length; i++) {
  if(req.body.sum[i]!=""){
    sumKorzArray.push(req.body.sum[i]);
  }
 }
 req.body.sum = [];
 for (var i = 0; i < sumKorzArray.length; i++) {
   req.body.sum.push(sumKorzArray[i]);
 }
var isArrayKorz = Array.isArray(korz);
console.log("Korz",isArrayKorz);

var idBisk;
var checkflag;
 var funn = async function(){


              if(isArrayKorz){
                console.log("aaa");
                  for(var o=0;o<korz.length;o++){
                    idBisk = await set.GetIdReady(korz[o]);
                   console.log("korz",idBisk," ",korz[o]);
                   let check = await set.CheckInBaseReady(getId,idBisk);
                   if (!check) {
                     let insert_table = await set.InBaseIdReady(getId,idBisk,req.body.sum[o]);
                  checkflag = false;
                   } else checkflag = true;

                  }

              } else {
                var sumkorz;
                for (var i = 0; i <req.body.sum.length; i++) {
                  if (req.body.sum[i]!="") {
                    sumkorz = req.body.sum[i];
                  }
                }
                console.log("BBB");
                  idBisk = await set.GetIdReady(korz);
                  console.log(idBisk," ",korz);
                  console.log("korz ne mas");
                  let check = await set.CheckInBaseReady(getId,idBisk);
                  if (!check) {
                      let insert_table = await set.InBaseIdReady(getId,idBisk,sumkorz);
                 checkflag = false;
               } else checkflag = true;



              }

  res.redirect('/worker?id=settings&user_id='+getId+'&checkflag='+checkflag);
}
    funn();



})

router.use('/ChangeCosts', (req, res) => {
  let fun = async function () {
    var set = new DbSet();
if (req.body.btnkind!=undefined) {
let updatekind = await set.updateBasis(req.body.btnkind,req.body.sumbasis);
} else if (req.body.btnfill!=undefined) {
  let updatefill = await set.updatefill(req.body.btnfill,req.body.sumfill)
} else if (req.body.btnkrem!=undefined) {
  let updte = await set.updatekrem(req.body.btnkrem,req.body.summkrem);
}else if (req.body.btndel!=undefined) {
  let id_basis = await set.GetIdBisq(req.body.btndel);
    let del=await set.deleteCake(id_basis,"basis",getId)
  } else if (req.body.btndelfill!=undefined) {
    let id_fill = await set.GetIdNach(req.body.btndelfill,getId);
       del= await set.deleteCake(id_fill,"fill",getId)
  }else if (req.body.btndelkrem!=undefined) {
    let id_krem = await set.GetIdKrem(req.body.btndelkrem,getId);
       del= await set.deleteCake(id_krem,"krem",getId)
  }
      let del=await set.deleteReady(id_basis,getId)
  
}
  fun();
    res.redirect('/worker?id=settings&user_id='+getId+'&work='+req.body.work);
})
router.use('/ChangeCostsCup', (req, res) => {
  console.log(req.body.btnkind);
  let fun = async function () {
    var set = new DbSet();
if (req.body.btnkind!=undefined) {
let updatekind = await set.updateBasisCup(req.body.btnkind,req.body.sumbasis);
} else if (req.body.btnfill!=undefined) {
  let updatefill = await set.updatefillCup(req.body.btnfill,req.body.sumfill)
} else if (req.body.btnkrem!=undefined) {
  let updte = await set.updatekremCup(req.body.btnkrem,req.body.summkrem);
}
  else if (req.body.btndel!=undefined) {
  let id_basis = await set.GetIdBisqCup(req.body.btndel);
    let del=await set.deleteCup(id_basis,"basis",getId)
  } else if (req.body.btndelfill!=undefined) {
    let id_fill = await set.GetIdNachCup(req.body.btndelfill);
       del= await set.deleteCup(id_fill,"fill",getId)
  }else if (req.body.btndelkrem!=undefined) {
    let id_krem = await set.GetIdKremCup(req.body.btndelkrem);
       del= await set.deleteCup(id_krem,"krem",getId)
  }
      let del=await set.deleteReady(id_basis,getId)
  
}
  fun();
    res.redirect('/worker?id=settings&user_id='+getId+'&work='+req.body.work);
})
router.use('/ChangeCostsChock', (req, res) => {
  let fun = async function () {
    var set = new DbSet();
if (req.body.btnkind!=undefined) {
let updatekind = await set.updateBasisChock(req.body.btnkind,req.body.sumbasis);
} else if (req.body.btnfill!=undefined) {
  let updatefill = await set.updatefillChock(req.body.btnfill,req.body.sumfill)
} else if (req.body.btnkrem!=undefined) {
  let updte = await set.updatekremChock(req.body.btnkrem,req.body.summkrem);
}else if (req.body.btndel!=undefined) {
  let id_basis = await set.GetIdBisqChock(req.body.btndel);
    let del=await set.deleteChock(id_basis,"basis",getId)
  } else if (req.body.btndelfill!=undefined) {
    let id_fill = await set.GetIdNachChock(req.body.btndelfill);
       del= await set.deleteChock(id_fill,"fill",getId)
  }else if (req.body.btndelkrem!=undefined) {
    let id_krem = await set.GetIdKremChock(req.body.btndelkrem);
       del= await set.deleteChock(id_krem,"krem",getId)
  }
}
  fun();
    res.redirect('/worker?id=settings&user_id='+getId+'&work='+req.body.work);
})
router.use('/ChangeCostsMarsh', (req, res) => {
  let fun = async function () {
    var set = new DbSet();
  if (req.body.btnkind!=undefined) {
  let updatekind = await set.UpdateSummSweetMarsh(req.body.btnkind,req.body.sumbasis);
  }else if (req.body.btndel!=undefined) {
    let id_basis = await set.GetIdMarsh(req.body.btndel);
      let del=await set.deleteMarsh(id_basis,getId)
    }
  }
  fun();
    res.redirect('/worker?id=settings&user_id='+getId+'&work='+req.body.work);
})
router.use('/ChangeCostsReady', (req, res) => {
  let fun = async function () {
    var set = new DbSet();
  if (req.body.btnkind!=undefined) {
  let updatekind = await set.UpdateSummSweetReady(req.body.btnkind,req.body.sumbasis);
  }else if (req.body.btndel!=undefined) {
    let id_basis = await set.GetIdReady(req.body.btndel);
      let del=await set.deleteReady(id_basis,getId)
    }
  }
  fun();
    res.redirect('/worker?id=settings&user_id='+getId+'&work='+req.body.work);
})
router.use('/cancel', (req, res) => {
  let fun = async function () {
    var order = new DbOder();
    console.log(req.body.cancel);
    
  if (req.body.cancel!=undefined) {
  let cancel=await order.cancelOrder(req.body.cancel);
  }
  }
  fun();
    res.redirect('/user?id=zakazy');
})

module.exports = router;


 