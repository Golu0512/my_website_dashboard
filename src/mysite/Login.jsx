import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../states/reducers/index';

const Login = () => {

    const navigate = useNavigate();
    const [ loginUser, setLogin ] = useState({
        email:'',
        password:''
    });
    const notify = (message) => toast.success(message, {
        theme: "colored"
    })
    const dispatch = useDispatch();

    const handleChangeInput = (e) => {
        const { name, value} = e.target;
        setLogin({...loginUser, [name]: value});
    }

    const userLogin = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://funkyanimehubapi.onrender.com/admin_login', loginUser)
            .then((response) =>{
                notify(response?.data.message)
                console.log(response.data.message);
                sessionStorage.setItem('user', JSON.stringify(response?.data?.data))
                dispatch(login({
                    full_name: response?.data.data?.full_name,
                    role: response?.data.data.role
                }))
                navigate('/')
            })
            .catch((error) =>{notify(error?.response?.data.message)})
        } catch(error) {
            console.log(error);
        }
    };

    return (
        <>
            <div className='mx-5'>
                <MDBContainer fluid className="p-3 my-5">

                    <MDBRow>

                        <MDBCol col='10' md='6'>
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="img-fluid" alt="Phone image" />
                        </MDBCol>

                        <MDBCol col='4' md='6' className='my-auto'>
                            <form onSubmit={userLogin}>
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    label='Email address' 
                                    id='formControlLg' 
                                    type='email' 
                                    name='email'
                                    onChange={handleChangeInput}
                                    size="lg"
                                />
                                <MDBInput 
                                    wrapperClass='mb-4' 
                                    label='Password' 
                                    id='formControlLg' 
                                    name='password'
                                    type='password' 
                                    onChange={handleChangeInput}
                                    size="lg"
                                />

                                {/* <div className="d-flex justify-content-between mx-4 mb-4">
                                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                                <a href="!#">Forgot password?</a>
                                </div> */}

                                <MDBBtn 
                                    className="mb-4 w-100" 
                                    onClick={userLogin}
                                    size="lg"
                                >
                                    Sign in
                                </MDBBtn>

                                {/* <div className="divider d-flex align-items-center my-4">
                                <p className="text-center fw-bold mx-3 mb-0">OR</p>
                                </div>

                                <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#3b5998'}}>
                                <MDBIcon fab icon="facebook-f" className="mx-2"/>
                                Continue with facebook
                                </MDBBtn>

                                <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#55acee'}}>
                                <MDBIcon fab icon="twitter" className="mx-2"/>
                                Continue with twitter
                                </MDBBtn> */}
                            </form>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>
                <ToastContainer />
            </div>
        
        </>
    )
}

export default Login
