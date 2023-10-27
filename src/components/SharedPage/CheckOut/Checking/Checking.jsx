import { useContext, useEffect } from "react";
import { AuthContext } from "../../../../Route/Provider/AuthProvider";
import { useState } from "react";


const Checking = () => {

    const {user}= useContext(AuthContext)
    const [checkingList, setCheckingList] = useState([])

    useEffect(()=>{
        if(user?.email){
            const url = `http://localhost:5001/checkout?email=${user.email}`
            fetch(url)
            .then(res=>res.json())
            .then((data)=> setCheckingList(data))

        }


        
    },[user?.email])

    
    return (
        <div>
            
        </div>
    );
};

export default Checking;