import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';
import ProcessPayment from '../PaymentMethod/ProccessPayment';

const Book = ({ id }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [userShipingData, setUserShipingData] = useState(null)
    const [plan, setPlan] = useState({})
    const history = useHistory()
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        const url = `https://noboni-internet-service.herokuapp.com/book/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPlan(data))
    }, [id])

    const onSubmit = data => {
        if(plan._id){
            setUserShipingData(data)
        }
        else{
            alert('Please Select our service go to Home Page')
            history.push('/user/dashboard')
        }
    };

    const handlePaymentSuccess = paymentId => {
        const newOrder = {
            name: userShipingData.name,
            packageName : plan.name, 
            price: plan.price,
            imgURL: plan.imgURL,
            email: loggedInUser.email,
            orderDate: new Date(),
            status: 'pending',
        }
        fetch('https://noboni-internet-service.herokuapp.com/addOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newOrder)
        })
            .then(res => {
                if (res) {
                    alert('Order Successfully done')
                    history.push('/user/orderList')
                }
            })
    }
    return (
        <div >
            <h4>Book:</h4>
            <div style={{ display: userShipingData ? 'none' : 'block' }}>
                <form className="pt-4 pl-1" onSubmit={handleSubmit(onSubmit)}>
                    <label>Name: </label>
                    <input defaultValue={loggedInUser.display_name} className="form-control" name="name" placeholder="Enter Name" {...register("name")} /> <br />
                    <label>Email: </label>
                    <input defaultValue={loggedInUser.email} className="form-control" type="email" name="email" placeholder="Enter Email" {...register("email")} /> <br />
                    <label>Package Name: </label>
                    <input value={plan.name} className="form-control" type="text" name="packageId" placeholder="Package Name" {...register("packageId")} /> <br />
                    <input style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0 me-md-2 ml-auto " value='Pay Now' type="submit" />
                </form>
            </div>
            <div style={{ display: userShipingData ? 'block' : 'none' }} className="col-md-6 ">
                <h2>Please Pay:</h2>
                <ProcessPayment handlePaymentSuccess={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );

}

export default Book;