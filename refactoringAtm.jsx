// import { useState } from "react"
// import Form from "./form"
// export default function Atm(){
//     var [value,setValue]=useState()
//     var [res,setRes]=useState(0)
//     function handle(){
//         //  e.preventDefault();
//         console.log(value);
//         setRes(res+parseInt(value))
    
//     }
//     function handle1(){
//         //  e.preventDefault();
//         console.log(value);
//         setRes(res-parseInt(value))
    
//     }
//     function handle2(e){
//         //  e.preventDefault();
//         setValue(parseInt(e.target.value))
    
//     }

//     return(<>

//     <h1>balance is {res}</h1>
//     <Form han={handle} han1={handle1} han2={handle2}/>
//     </>)
// }

// method 2

// import { useState } from "react"
// import Form from "./form"
//  export default function Atm(){
// let [isdeposite,setIsDeposite]=useState(0);
// const [total,setTotal]=useState(0)
// const [deposite,setDeposite]=useState(true)
// let st=`account balence is ${total}`
// const handle=event=>{
// isdeposite=Number(event.target.value)

// };
// const handle1=(e)=>{
//     let newtTotal = deposite ? total+isdeposite : total-isdeposite;
//     setTotal(newtTotal);
//     console.log(newtTotal);
//     e.preventDefault()
// }
//     return(<>
//     <form onSubmit={handle1}>
//         <h2 id="total">{st}</h2>
//         <button onClick={()=>setDeposite(true)}>deposite</button>
//         <button onClick={()=>setDeposite(false)}>cashback</button>
//         <Form onchange={handle}  deposite={deposite}/>
//     </form>
//     </>)
//  }

//   method 3

import { useState } from "react"
 export default function Atm(){

let [isdeposite,setIsDeposite]=useState(0);
const [total,setTotal]=useState(0)
const [depoosite,setDeposite]=useState(true)
const [opt,setOpt]=useState("")

const handle1=(e)=>{ 
   if(opt===""){ alert("Enter valid amount")}
    else if(opt==="Cash Back" && isdeposite>total){
        alert("your account indefused balance")
        e.preventDefault()
    }
    else{
    let newtTotal = depoosite ? total+parseInt(isdeposite)  : total-parseInt(isdeposite);
    setTotal(newtTotal);
    console.log(newtTotal);
    e.preventDefault()
}
}
    return(<>   
    <form onSubmit={handle1}>
    <p>Refresh here to see your changes</p>
    <h1>Account balance is $ {total}</h1>
    <p>Select an action below to continue</p>
    <select onClick={(e)=>setOpt(e.target.value)}>  
        <option>  </option>  
        <option value="Deposit" >Deposit</option>  
        <option  value="Cash Back" >Cash Back</option>  
    </select>
{opt==="Deposit" ? (<>
    <h3>{opt}</h3>
     <input type="number" width="200" id="tol" onClick={()=>setDeposite(true)} onChange={(e)=>setIsDeposite(e.target.value)}></input>
     <input type="submit" value="submit" width="200" ></input>
</>):null}
{opt==="Cash Back" ? (<>
    <h3>{opt}</h3>
    <input type="number" width="200" id="tol" onClick={()=>setDeposite(false)} onChange={(e)=>setIsDeposite(e.target.value)}></input>
     <input type="submit" value="submit" width="200" ></input>
</>):null}
    </form>    
    </>)
 }
