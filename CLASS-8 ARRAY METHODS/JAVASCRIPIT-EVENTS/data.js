let employees=[
{"eid":1,"ename":"Shali Bhan Chunara","Age":"65","gender":"Male","Contact":"9810607569"},
{"eid":2,"ename":"Maina Devi Chunara","Age":"52","gender":"Female","Contact":"9810607569"},
{"eid":3,"ename":"Nar Bhadur Chunara","Age":"43","gender":"Male","Contact":"9511237759"},
{"eid":4,"ename":"Manju Devi Chunara","Age":"40","gender":"Female","Contact":"8296377159"},
{"eid":5,"ename":"Bir Chunara","Age":"38","gender":"Male","Contact":"8660382988"},
{"eid":6,"ename":"Pinky Chunara","Age":"35","gender":"Female","Contact":"8951251137"},
{"eid":7,"ename":"Bhawana Chunara","Age":"21","gender":"Female","Contact":"9821629752"},
{"eid":8,"ename":"Bimal Chunara","Age":"18","gender":"Male","Contact":"9763078429"},
{"eid":9,"ename":"Bhumika Chunara","Age":"13","gender":"Female","Contact":"Not Number"},
{"eid":10,"ename":"Bipika Chunara","Age":"10","gender":"Female","Contact":"Not Number"},
{"eid":11,"ename":"Purvika Chunara","Age":"7","gender":"Female","Contact":"Not Number"},
]

//1.Iterate employees array
//2.construct table rows ie <tr></tr>
//3.update table tbody
let display_emp_data=()=>{
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.Age}</td>
                    <td>${emp.gender}</td>
                    <td>${emp.Contact}</td>
                   </tr>`
    }    

    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
}

let display_Emp_Data=()=>{
    let rows="";
    for(let emp of employees){
        rows=rows+`<tr>
                    <td>${emp.eid}</td>
                    <td>${emp.ename}</td>
                    <td>${emp.Age}</td>
                    <td>${emp.gender}</td>
                    <td>${emp.Contact}</td>
                   </tr>`
    }    

    document.getElementsByTagName('tbody')[0].innerHTML=rows
    //document.getElementsByTagName('tbody')[0].innerHTML="GM"
}