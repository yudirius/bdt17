// STEP 1 //


// console.log("HELLO WORLD");


// STEP 2 //


// var sum =0;
// var count =0;

// process.argv.forEach(function(item){
// 	// console.log(item);
	
// 	if(count>1){
// 	sum +=	parseInt(item);
// 	}
// 	count++;
	
// });

// console.log(sum);

// STEP 3 //

// var fs = require('fs');

// var buffer =fs.readFileSync(process.argv[2]);

// var jumlahLine = buffer.toString().split('\n').length -1;
// console.log(jumlahLine);

// STEP 4 //

// var fs =require('fs');
// var jumlahLine;
// fs.readFile(process.argv[2],function(err,data){
// if(err){
// 	console.log('error',err);
// 	return;
// }
// 	jumlahLine = data.toString().split('\n').length-1;
// 	console.log(jumlahLine);

// });

// STEP 5 //
// var fs = require('fs');
// var path= require('path');

// fs.readdir(process.argv[2], function(err,list){
// //node

// 	for(var i =0; i<list.length;i++){
// 		if('.'+process.argv[3]==path.extname(list[i]))
// 		{
// 			console.log(list[i]);
// 		}else{
// 			continue;
// 		}
// 	}
// });

// STEP 6 //
// var module =require('./module');

// module(process.argv[2],process.argv[3],function(err,data){
// 	data.forEach(function(item){
// 		console.log(item);
// 	});
// });

// STEP 7//

// var http= require('http');

// // http.get('https//nodejs.org/dist/index.json','utf8',function(res){
// http.get(process.argv[2],function(res){
// 	res.setEncoding('utf8');
// 	res.on('data',function(chunk){
// 		console.log(chunk);
// 	});
// 	res.on('error',function(err){
// 		console.log(err);
// 	});
// });

// STEP 8//

// var http= require('http');

// http.get(process.argv[2],function(res){
// 	var rawData='';

// 	// res.setEncoding('utf8');
// 	res.on('data',function(chunk){
// 		// console.log(chunk);
// 		rawData+=chunk;
// 	});
// 	res.on('error',function(){
// 		console.log(rawData.length);
// 		console.log(rawData);
// 	});
// 	res.on('error',function(err){
// 		console.log(err);
// 	})
// });

// STEP 9//

// var http= require('http');

// http.get(process.argv[2],function(res){
// 	var rawData='';

	
// 	res.on('error',function(chunk){
// 		rawData+=chunk;
// 	});
// 	res.on('error',function(){
// 		console.log(rawData.length);
// 		console.log(rawData);
// 	});
// 	res.on('error',function(err){
// 		console.log(err);
// 	})
// });

// STEP 10//

// var net =require('net');
// net.createServer(function(socket){
// 	var date=new Date();
// 	var month= dat.getMonth()+1;
// 	month = (month.length>10)? month:'0'+month;
// 	var minute=date.getMinutes();
// 	minute=(minute.length>10)? minute:'0'+minute;

// 	socket.write(date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'date.getMinutes()+"\n");
// 	socket.end('');
// }).listen(process.argv[2])

// STEP 11 //

// var http=require('http');
// var fs=require('fs');

// http.createServer(function(req,res){
// var stream = fs.createReadStream(process.argv[3]);
// stream.on('open',function(){
// 	stream.pipe(rest);
// });	
// stream.on('close',function(){
// 	res.end();
// });
// }).listen(process.argv[2]);

// STEP 12 //

// var http=require('http');
// var map=require('through2-map');

// http.createServer(function(req,res){
// 	if(req.method=='POST'){
// 		var _map=map(function(chunk){
// 			return chunk.toString().toUpperCase();
// 		});
// 		req.pipe(_map).pipe(res);
// 	}
// }).listen(process.argv[2]);

// STEP 13 //

// var http=require('http');
// var map=require('url');

// http.createServer(function(req,res){
// 	var parseUrl= url.parse(req.url,true);
// 	var date;

// 	switch(parseUrl.pathname){
// 		case '/api/parsetime':
// 		var date
// 	}
// }).listen(process.argv[2]);

// TES STEP 2 //
// var i;
// console.log(process.argv.length);

