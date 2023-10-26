import { useEffect } from "react";
import { useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {

    const [cards, setCards] = useState([]);



    useEffect(() => {
         fetch('services.json')
         .then(res=> res.json())
         .then(data=> setCards(data))
      });
    return (
        <div className="mt-4">
           <h2 className="text-[#FF3811] text-xl text-center">Service</h2> 
           <h1 className="text-2xl font-semibold text-center ">Our Service Area</h1>
           <p className="text-center">
           the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
           </p>
           <div className="grid md:grid-cols-1 lg:grid-cols-3">
           {
            cards.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
           }
           </div>
        </div>
    );
};

export default Services;