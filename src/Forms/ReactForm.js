import {React,useState} from 'react'

function ReactForm() {

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [allUser, setallUser] = useState([]);
    const SubmitForm = (e)=>{
        e.preventDefault();
        if(Email&&Password){
          const newEntry = {id:new Date().getTime() ,Email,Password};
            setallUser([...allUser,newEntry]);
            setEmail("");
            setPassword("");  
        }else{
            alert("Please Fill The Data")
        }
        
    }
  return (
    <>
    <form onSubmit={SubmitForm}>
        <div>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" value={Email} onChange={(e)=>setEmail(e.target.value)} autoComplete="off"/>
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" value={Password} onChange={(e)=>setPassword(e.target.value)} autoComplete="off"/>
        </div>
        <button type='submit'>Login</button>
        <div>
            <h1>All Users</h1>
            {allUser.map((data)=>{
                const {id,Email,Password} = data;
                return <div key={id}>
                <h4>{Email}</h4>
                <h4>{Password}</h4>
                </div>
            })}
        </div>
    </form>
    </>
  )
}

export default ReactForm