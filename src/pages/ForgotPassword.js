import { useState } from "react"
import { forgotPassword, confirmPassword } from "../auth"
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
import { Navigate, Link } from "react-router-dom"

function ForgotPassword() {
    const [emailRecovery, setEmailRecovery] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    const [confirmationCode, setConfirmationCode] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [errorNewPassword, setErrorNewPassword] = useState("")
    const [successNewPassword, setSuccessNewPassword] = useState(false)

    const recoveryCognito = async (e) => {
        e.preventDefault()
        setError("")

        try {
            await forgotPassword(emailRecovery)
            setSuccess(true)
        } catch (err) {
            setError(err.message)
        }
    }

    const resetPassword = async (e) => {
        e.preventDefault()
        setErrorNewPassword("")

        try {
            await confirmPassword(emailRecovery, confirmationCode, newPassword)
            setSuccessNewPassword(true)
        } catch (err) {
            setErrorNewPassword(err.message)
        }
    }

    if (successNewPassword) {
        return <Navigate to="/login" />
    }
    
    return (
        <div>
            <MDBContainer className={!success ? 'p-3 my-5 d-flex flex-column w-50' : 'p-3 my-5 flex-column w-50 hidden'}>
                <h2>Recuperar contraseña</h2>
                <form onSubmit={recoveryCognito}>
                    <MDBInput wrapperClass='mb-4' label='Email' type='email' placeholder="Email" value={emailRecovery} onChange={(e) => setEmailRecovery(e.target.value)} />
                    <MDBBtn type="submit" className="mb-4 w-100">Recuperar</MDBBtn>
                </form>
                {error && <p>{error}</p>}
                <Link to="/login">Iniciar Sesión</Link>
            </MDBContainer>
            <MDBContainer className={success ? 'p-3 my-5 d-flex flex-column w-50' : 'p-3 my-5 flex-column w-50 hidden'}>
                <h2>Nueva contraseña</h2>
                <form onSubmit={resetPassword}>
                    <MDBInput wrapperClass='mb-4' label='Email' type='email' placeholder="Email" value={emailRecovery} onChange={(e) => setEmailRecovery(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' label='ConfirmCode' type='number' placeholder="Code" value={confirmationCode} onChange={(e) => setConfirmationCode(e.target.value)} />
                    <MDBInput wrapperClass='mb-4' label='NewPassword' type='password' placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                    <MDBBtn type="submit" className="mb-4 w-100">Cambiar contraseña</MDBBtn>
                </form>
                {errorNewPassword && <p>{errorNewPassword}</p>}                
            </MDBContainer>
        </div>
    )
}

export default ForgotPassword;