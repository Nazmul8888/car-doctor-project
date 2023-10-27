
import { useLoaderData } from "react-router-dom";



const CheckOut = () => {
    const service = useLoaderData();
    const {_id, title, price,img } = service;

    const checkOutHandel = e=>{
        e.preventDefault()

        const name = e.target.name.value;
        const date = e.target.date.value;
        const email = e.target.email.value;
        const order = {
            name,email,date, img,service_id: _id, service:title, price:price
        }
        console.log(order);

        fetch('http://localhost:5001/checkout',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.insertedId){
                alert('checkout successfully')
            }
        })


    }
    

    return (

        <div>
            <h1 className="text-3xl text-center font-bold">This is checkout services</h1>



            <form onSubmit={checkOutHandel} className="card-body">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"  name="name" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" placeholder="password" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due Amount</span>
                        </label>
                        <input type="text" defaultValue={price} className="input input-bordered" required />

                    </div>
                </div>

                <div className="form-control mt-6">

                    <input className="btn btn-primary btn-block" type="submit" value="Confirm Order" />
                </div>
            </form>

        </div>

    );
};

export default CheckOut;