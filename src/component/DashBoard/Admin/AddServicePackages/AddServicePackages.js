// import React, { lazy, useContext, useState } from 'react';
// import { useForm } from "react-hook-form";
// import axios from 'axios';
// import { UserContext } from '../../../../App';

// const AddServicePlan = () => {
//     const [uploadImg, setUploadImg] = useState({})
//     const[loggedInUser, setLoggedInUser] = useContext(UserContext)
//     const { register, handleSubmit, watch, formState: { errors } } = useForm();

//     const onSubmit = data => {
//         const newPackage = {
//             name: data.name,
//             price: data.price,
//             description: data.description,
//             imgURL: uploadImg.display_url,
//             email: loggedInUser.email
//         }
//         fetch('https://noboni-internet-service.herokuapp.com/addPackage', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify(newPackage)
//         })
//          .then(res => {
//                 if (res) {
//                     alert('SuccessFully Added Your Products to MongoDb')
//                 }
//             })
//     };

//     const handleChangeImg = (event) => {
//         const imageData = new FormData()
//         imageData.set('key', '6b487eb2f1015108ba3304f80beecd5b');
//         imageData.append('image', event.target.files[0]);
//         axios.post('https://api.imgbb.com/1/upload', imageData)
//             .then(function (response) {
//                 setUploadImg(response.data.data);
//                 // console.log(response.data.data.display_url);
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }
//     return (
//         <div >
//             <h4>Add Package:</h4>
//             <form className=" pt-4 pl-1 row" onSubmit={handleSubmit(onSubmit)}>
//                 <div className="col-md-6">
//                     <label>Service Title: </label>
//                     <input className="form-control" name="name" placeholder="Enter Name" {...register("name")} /> <br />
//                     <label>Description: </label>
//                     <textarea rows="4" cols="50" className="form-control" type="textarea" name="description" placeholder="Enter Description" {...register("description")} /> <br />
//                 </div>
//                 <div className="col-md-6">
//                     <label>Price: </label>
//                     <input className="form-control" name="price" placeholder="Enter price" {...register("price")} /> <br />
//                     <label>Add Photo: </label>
//                     <input className="form-control" name="image" type="file" onChange={handleChangeImg} /> <br />
//                 </div>
//                 <input style={{ backgroundColor: '#C91729' }} class="text-white btn my-2 my-sm-0 me-md-2 ml-auto" value='Add Package' type="submit" />
//             </form>
//         </div>
//     );
// };

// export default AddServicePlan;