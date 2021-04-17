import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { UserContext } from '../../../../App';

const Reviews = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedUser] = useContext(UserContext)
    const history = useHistory()

    const onSubmit = userData => {

        const newUserData = {
            name: userData.name,
            description: userData.description,
            imgURL: loggedInUser.photoURL,
            email: loggedInUser.email,
            company: userData.company
        }
        fetch('https://noboni-internet-service.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserData)
        })
         .then(res => {
                if (res) {
                    alert('SuccessFully Added Your Important Review.')
                    history.push('/review')
                }
            })
    };
    return (
        <div>
            <h4>Review Page</h4>
            <form className=" pt-4 pl-1 row" onSubmit={handleSubmit(onSubmit)}>

                    <div className="col">
                        <label>Name : </label>
                        <input className="form-control" name="name" placeholder="Enter Name" {...register("name")} /> <br />
                        <label>Company name : </label>
                        <input className="form-control" name="company" placeholder="Enter Designation & Company Name" {...register("company")} /> <br />
                        <label>Description: </label>
                        <textarea rows="4" cols="50" className="form-control" type="textarea" name="description" placeholder="Enter Description" {...register("description")} /> <br />
                        <input style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0 me-md-2" value='Submit Your Review' type="submit" />
                    </div>
            </form>
        </div>
    );
};

export default Reviews;