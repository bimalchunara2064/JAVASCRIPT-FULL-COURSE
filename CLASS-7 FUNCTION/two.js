//stack:LIFO
//queue:FIFO

let emp_Ids=[101,102,103,104]
//iterator for,whie,do-while,for-of-[],for-in-{}
let emp={
    eid:101,
    ename:'Bimal',
    gender:'male'

}

//how to itrate object:for- in
for(prop in emp){
    //console.log(prop)
    //console.log(emp.prop)
    console.log(emp[prop])
}