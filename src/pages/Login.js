import React, { useState, useContext } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { AuthContext } from "../AuthContext"
import { Navigate, Link } from "react-router-dom";
import { signUp, signIn, confirmSignUp } from '../auth';
import '../styles/login.scss';

function Login() {

    //Register Params
    const [justifyActive, setJustifyActive] = useState('tab2');
    const [usernameRegister, setUsernameRegister] = useState("")
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [errorRegister, setErrorRegister] = useState("")
    const [successRegister, setSuccessRegister] = useState(false)

    //Confirmation Params
    const [codeConfirm, setCodeConfirm] = useState("")
    const [errorConfirmRegister, setErrorConfirmRegister] = useState("")
    const [successConfirmRegister, setSuccessConfirmRegister] = useState(false)

    //Login Params
    const [emailLogin, setEmailLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [errorLogin, setErrorLogin] = useState("")

    //SignIn Params
    const { user, signIn } = useContext(AuthContext)

    const registerCognito = async (e) => {
        e.preventDefault()
        setErrorRegister("")

        try {
            await signUp(usernameRegister, emailRegister, passwordRegister)
            setSuccessRegister(true)
        } catch (err) {
            setErrorRegister(err.message)
        }
    }

    const confirmRegister = async (e) => {
        e.preventDefault()
        setErrorConfirmRegister("")

        try {
            await confirmSignUp(emailRegister, codeConfirm)
            setSuccessConfirmRegister(true)
        } catch (err) {
            setErrorConfirmRegister(err.message)
        }
    }

    const loginCognito = async (e) => {
        e.preventDefault();
        setErrorLogin("");

        try {
            await signIn(emailLogin, passwordLogin)
        } catch (err) {
            setErrorLogin(err.message)
        }
    }

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    if (user) {
        // Redirect to the profile page
        return <Navigate to="/profile" />
      }

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                        Login
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                        Register
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>

            <MDBTabsContent>

                <MDBTabsPane className={justifyActive === 'tab1' ? 'active show' : ''}>

                    <form onSubmit={loginCognito}>
                        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={passwordLogin} onChange={(e) => setPasswordLogin(e.target.value)} />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                            <Link to="/forgot-password">Forgot password?</Link>
                        </div>

                        <MDBBtn type="submit" className="mb-4 w-100">Sign in</MDBBtn>
                        <p className="text-center">Not a member? <a href="#!">Register</a></p>
                    </form>
                    {errorLogin && <p>{errorLogin}</p>}
                </MDBTabsPane>

                <MDBTabsPane className={justifyActive === 'tab2' ? 'active show' : ''}>

                    <form onSubmit={registerCognito} className={successRegister ? 'hidden' : ''}>
                        <MDBInput wrapperClass='mb-4' label='Username' id='form1' type='text' value={usernameRegister} onChange={(e) => setUsernameRegister(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)} />
                        <MDBBtn type="submit" className="mb-4 w-100">Sign up</MDBBtn>
                    </form>
                    {errorRegister && <p>{errorRegister}</p>}

                    <form onSubmit={confirmRegister} className={!successRegister ? 'hidden' : successConfirmRegister ? 'hidden' : ''}>
                        <h2>Ingresa el código de confirmación que llegó a tu correo</h2>
                        <MDBInput wrapperClass='mb-4' label='Email' type='email' placeholder="Email" value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)} />
                        <MDBInput wrapperClass='mb-4' label='Código de confirmación' type='number' placeholder="Código de confirmación" value={codeConfirm} onChange={(e) => setCodeConfirm(e.target.value)} />
                        <MDBBtn type="submit" className="mb-4 w-100">Confirmar</MDBBtn>
                    </form>
                    {errorConfirmRegister && <p>{errorConfirmRegister}</p>}

                    <div className={successConfirmRegister ? '' : 'hidden'}>
                        <h2>Confirmación exitosa!</h2>
                        <p>Ahora puede iniciar sesión con sus credenciales!</p>
                    </div>

                </MDBTabsPane>

            </MDBTabsContent>

        </MDBContainer>
    );
}

export default Login;