let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

 const fetchDataOrders = (url_api) =>{
   return new Promise((resolve,reject)=>{
      const xhttp = new XMLHttpRequest();
      xhttp.open('GET',url_api,true); 
      xhttp.onreadystatechange = (()=> {
        if(xhttp.readyState===4){
            if(xhttp.status===200){
              resolve(JSON.parse(xhttp.responseText));
            }
            else{
              const error = new Error('Error' + url_api);
              reject(error);
            }
        }
      });
      xhttp.send();
   });
 }

 module.exports=fetchDataOrders;