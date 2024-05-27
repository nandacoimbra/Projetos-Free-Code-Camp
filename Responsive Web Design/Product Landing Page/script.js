
// const f=new Function("v1","v2","return v1+v2")
    
// console.log(f(10,5))

// const soma=(v1,v2)=>v1+v2

// console.log(soma(11,10))

// const soma=(...valores)=>{
//     const somar=val=>{
//         let res=0;
//         for(v of val)
//         res+=v;
//     return res;
//     }

//     return somar(valores);
// }

// console.log(soma(10,5,15))

function* cores(){
    yield 'Vermelho'
    yield 'Verde'
    yield 'Azul'
}

const itc=cores()
console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value)