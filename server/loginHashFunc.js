//const { client } = require('./connectionDB');


//module.exports.login = async function login() {
    //try {
     // await client.connect();
     // const database = client.db('login');
      //const collection = database.collection('admins');
      //const query = { name: 'marwane', pass: 'marwane12'};
    //  const document = await collection.insertOne(query);
     // console.log(document);
    //} finally {
   //   await client.close();
   // }
  //}

const hash = (pass) => {

    let arr = [];
    for(let i = 0; i < pass.length; i++){
        arr[i] = String(pass.charCodeAt((pass.length - 1) - i).toString(16)) + String(Math.cos(parseInt(pass.charCodeAt((pass.length - 1) - i).toString(16))).toFixed().toString(16));
    }
    let reversed_hex =  arr.join('');
    let secret = (Math.sqrt(pass.length) * parseInt(pass.charCodeAt(pass.length - 2).toString(16)) * parseInt(pass.charCodeAt(pass.length - 1).toString(16))) % parseInt(pass.charCodeAt(0).toString(16));
    return reversed_hex + String(secret.toFixed(4));
}

module.exports.encryp = function(pass, hashPass){
  if(pass === hashPass){
    return true;
  }
  return false;
};

//console.log(hash('marwane123'));
//console.log(encryp('marwane123', '33-032131165-16e161-077-072-161-06d13.3652'));

  //login().catch(console.dir);