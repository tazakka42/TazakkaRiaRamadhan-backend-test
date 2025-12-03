
const rentan_bawah = 1
const rentan_atas = 5000
let number_with_gen = []
let res = []

for( let i = rentan_bawah; i <= rentan_atas; i++ ) {
    let cur_num  = i.toString();
    let cur_num2 = i;
    for( let ii = 0; ii <= cur_num.length; ii++ ){
        if(cur_num[ii] != undefined)
            cur_num2 +=  parseInt(cur_num[ii])
    }
   number_with_gen.push(cur_num2);

}

for( let i = rentan_bawah; i <= rentan_atas; i++ ) {
   let g = number_with_gen.filter((v)=> i == v)
   if(g.length == 0)
    res.push(i)
}

let result_jumlah = 0;

res.forEach((v)=>{
    result_jumlah += v
})


console.log(result_jumlah)



