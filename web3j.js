Web3 = require("Web3")
if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://node1.azfs.com.cn:3778"));
//  web3.setProvider(new Web3.providers.WebsocketProvider('ws://node1.azfs.com.cn:3067'));
}

web3.eth.getBlock(10000, function(error, result){
  if(!error){
      console.log("details of block: "+result.number);
      console.log("miner: "+result.miner);
      console.log("hash: "+ result.hash);
      console.log("size: "+result.size);
  }
   else
        console.error(error);

});
// var providers = web3.currentProvider;
// console.log("current providers: ");
// console.log(providers);
