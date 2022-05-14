function foo(num){
    return num**2;
}


function cachingfuncs(func){
    const m=new Map();
    return function f(arg){
        if(arguments.length==0) return 'no arguments passed';
        if(arguments.length==1 && !Array.isArray(arg)){
            if(m.has(arg)) return m.get(arg);
            const res = func(arg);
            m.set(arg,res);
            return res;
        }
        if(arguments.length!=1){
            let arr = [...arguments];
            let arr2 = []
            for(let elem of arr){
                arr2.push(f(elem));
            }
            return arr2;
        }
    }
}
const cachingfoo = cachingfuncs(foo);

console.log(cachingfoo(5,5,2,6,4,8))