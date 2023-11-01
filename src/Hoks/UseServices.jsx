import { useEffect, useState } from "react";


const UseServices = () => {
    
    const [services, setCards] = useState([]);



    useEffect(() => {
         fetch('http://localhost:5001/services')
         .then(res=> res.json())
         .then(data=> setCards(data))
      });
      return services
};

export default UseServices;