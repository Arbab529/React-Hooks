import {React,useState} from 'react'

export default function UseState() {
    // const [Name, setName] = useState("Arbab");
    // const [Cond, setCond] = useState(true);

    // const updateName=()=>{
    //     setName("Anjum");
    //     setCond(!true);
    // }

    // ////////////////////////////////// Counter

    //  const [count,setCount]= useState(0);
    //  const increment=()=>{
    //       setCount(count+1);
    //  }

    //  const decrement=()=>{
    //    if(count>0){
    //      setCount(count-1);
    //     }
    //  }
      // Array /////////////////////////////////////
    const myBio = [
      {id:0,name:"Arbab",age:22},
      {id:1,name:"Anjum",age:23},
      {id:2,name:"Arain",age:24},
    ];
    const [arrayData, setarrayData] = useState(myBio);

    const clearArray = ()=>{
      setarrayData([]);
    }

    const  removeElement = (id) => {
      const newData = arrayData.filter((currentElement)=>{
        return currentElement.id != id;
      })
      setarrayData(newData);
    }
    // Object //////////////////////////////////
    // const [objData, setobjData] = useState({id:0,name:"Arbab",age:22});

    // const UpdateData = ()=>{
    //   setobjData({...objData, name:"Anjum"});
    // }
  return (
    <>

        {/* String */}

        {/* <h1>Hello, {Cond?Name:""}</h1>
        <button onClick={updateName}>Click Me</button>
        <hr/>*/}

        {/*Number*/}

        {/*<h1>Counter</h1>
        <button onClick={increment}>+</button>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <hr/> */}


        {/* Array */}
        <h1>Use State Array Data</h1>
       { arrayData.map((value)=> {
         return(
           <>
            <h1 key={value.id}>Name: {value.name} Age: {value.age}</h1>
            <button onClick={()=>removeElement(value.id)}>Remove</button>
            </>
            )
          }
         )
       }
       <br />
       <br />
       <br />
       <button onClick={clearArray}>Clear Data</button>

       {/* Object */}
      {/* <h1>Use State Object Data</h1>
      <h1>Name: {objData.name} Age: {objData.age}</h1>
       <button onClick={UpdateData}>Update Data</button> */}
    </>
  )
}
