

const CheckingRaw = ({check}) => {
    const {_id,date, service,price,img,handelDelate}= check;


    return (
        <div>
              <tr>
        <th>
        <button onClick={()=>handelDelate(_id)} className="btn btn-square">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
         
            <div className="avatar">
              <div className="rounded w-12 h-12">
                <img src={img} 
                alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
           
        </td>
        <td>
         {service}
        </td>
        <td>{date}</td>
        <td>${price}</td>
        <th>
          <button  className="btn btn-ghost btn-xs">Confirm</button>
        </th>
      </tr>
        </div>
    );
};

export default CheckingRaw;