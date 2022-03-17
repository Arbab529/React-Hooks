import { getDefaultNormalizer } from '@testing-library/react';
import React,{useState,useEffect} from 'react'

function User() {

    const [Users, setUsers] = useState([]);
    const [Loading, setLoading] = useState(true);
    const getData = async()=>{
        try{
            setLoading(!true);
            const response = await fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=30');
            setUsers(await response.json());
        }
        catch(err){
            console.log("My Error",err);
        }
        
    }
    useEffect(() => {
        getData();
    }, []);

    if(Loading){
        return <h1>Loading.....</h1>
    }
  return (
    <>
    <h1 className='text-center'>All Users</h1>
    <div className="container-fluid">
        <div className="row">
            {Users.map((data)=>{
                    return<div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3" key={data.id}>
                            <div className="card">
                                <img src={data.url} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{data.title}</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                })}
        </div>
    </div>
    </>
  )
}

export default User