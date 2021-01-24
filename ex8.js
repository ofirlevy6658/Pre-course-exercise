

for(let i=1;i<=100;i++){
    if(i%7===0 || i%10 === 7 || Math.floor(i/10)===7){
        process.stdout.write('boom,')
    }
   
    else{
        process.stdout.write(i+',')
    }
}
