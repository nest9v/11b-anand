let a=50,b=20, asc;
function sort(a,b, asc=true){
    if(asc){
        return a<=b ? [a,b]:[b,a];
    }else{
        return a>=b ? [a,b]:[b,a];
    }
}
const result = sort(a,b);
console.log(result);