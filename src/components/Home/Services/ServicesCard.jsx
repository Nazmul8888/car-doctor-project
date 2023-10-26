

const ServicesCard = ({service}) => {
    const{title,img,price}= service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mt-9 ">
        <figure><img src={img} alt="Shoes" /></figure>
     <div className="card-body">
    <h2 className="card-title">
      {title}
      
    </h2>
    <p className=" text-orange-[#FF3811] font-semibold">price: $ {price}</p>
    <div className="card-actions justify-end">
      
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
      </div>
    </div>
    );
};

export default ServicesCard;