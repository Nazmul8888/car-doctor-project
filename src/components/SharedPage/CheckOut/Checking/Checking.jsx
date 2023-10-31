import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Route/Provider/AuthProvider";
import { useState } from "react";
import CheckingRaw from "./CheckingRaw";
import axios from "axios";


const Checking = () => {

    const {user}= useContext(AuthContext)
    const [checking, setChecking] = useState([])
    console.log(user)

    useEffect(()=>{
        if(user?.email){

            const url = `http://localhost:5001/checkout?email=${user.email}`


            axios.get(url,{withCredentials:true})
            .then(res=>{
              setChecking(res.data)
            })
            
            // console.log(url)
            // fetch(url)
            // .then(res=>res.json())
            // .then((data)=> setChecking(data))

        }
    
    },[user?.email])

    
    const handelDelate = id =>{
        const proceed = confirm('you want to delate')
        if(proceed){
            fetch(`http://localhost:5001/checkout/${id}`,{
                method: 'DELETE'
            })
            .then(res=> res.json())
            .then(data=>{
                console.log(data);
                if(data.deleteCount >0){
                    alert('delate successfully ');
                    const remaining = checking.filter(checking=>checking._id !==id);
                    setChecking(remaining);
                }
            })

        }

    //     const handelConfirm = id =>{
    //         fetch(`http://localhost:5001/checkout/${id}`)
    //         .then(res=> res.json())
    //         .then(data=>{
    //             console.log(data);
    //             if(data.modifiedCount >0){
    //                 
    //             }
    //         })
    //     }

    }

    
    return (
        <div>
           <h2> Your checking: {checking.length}</h2> 
           <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Price</th>
        <th>Status</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
   {
    checking.map(check=><CheckingRaw 
        key={check._id} 
        check={check}
        handelDelate={handelDelate}
        // handelConfirm={handelConfirm}
        ></CheckingRaw>)
   }
     
      
      
      
    </tbody>
   
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
    
  </table>
</div>
        </div>
    );
};

export default Checking;