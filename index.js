let months=["January", "February","March","April","May","June","July","August","September","Octomber","November","December"]
let newarray=months.map((name,number)=>
`${name} ${number+1}`)
console.log(newarray);


//===============================================


function sum(array,cb){
    let sum=0;
    for (let i = 0; i < array.length; i++) {
        if(cb(array[i])){
            sum+=array[i]**2
        }
        
    }
    return sum;
}
console.log(sum([2,4,6,7,10,11,12], a=>a%2==0));
console.log(sum([2,4,6,7,10,11,12], a=>a%2==1));



