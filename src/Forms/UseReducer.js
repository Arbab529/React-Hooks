import React,{useState,useReducer} from 'react';

const initialValue = [
    {
        id:new Date().getTime().toString(),
        Name:"Arbab",
        Email:"arbab@gmail.com"
    }
];
console.log(initialValue);

const reducer =(state,action) => {
  switch(action.type){
        case "add":
            return [...state,action.payload];
        case "Delete":
            return state.filter((data)=>{
                return data.id!==action.payload.id;
            });
  }
}

function UseReducer() {
    
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [state,dispatch] = useReducer(reducer,initialValue);

    const FormSubmit = (e) => {
        e.preventDefault();
        const Data = {
            id:new Date().getTime().toString(),
            Name,
            Email
        }
        setName('');
        setEmail('');
        if(Name&&Email){
            dispatch({type:"add",payload:Data})
        }else{
            alert("Please Fill the data");
        }
    }
  return (
    <>
    <div className="container">
        <form onSubmit={FormSubmit}>
        <input type="text" placeholder='Name' value={Name} onChange={(e)=>{setName(e.target.value)}} />
        <input type="email" placeholder='Email' value={Email} onChange={(e)=>{setEmail(e.target.value)}} />
        <button>Submit</button>
        </form>
        <table className='table'>
            <thead>
                <td>Name</td>
                <td>Email</td>
                <td>Action</td>
            </thead>
            <tbody>
            {
                state.map((data)=>{
                    return(
                        <tr key={data.id}>
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td><button className='btn btn-danger' onClick={()=>dispatch({type:"Delete",payload:{id:data.id}})}>Delete</button></td>
                        </tr>
                    )
                })
            }
            </tbody>
           
            
        </table>
    </div>
    </>
  )
}

export default UseReducer