import React, { useContext } from 'react'
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Text, Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { AuthContext } from './authContext'
import { login, loginEmailPassword, loginGoogle, loginFacebook } from '../actions/loginAction';
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import '../styles/style.css'
import { Input } from '@chakra-ui/react'

const Login = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginEmailPassword(email, password))
        reset()
    }

    const handleLoginGoogle = () => {
        dispatch(loginGoogle())
    }

    
    const handleLoginFacebook = () => {
        dispatch(loginFacebook())
    }

    return (

        <Box className="container">

            <Text fontSize='2em' alignItems="center"> Inicio de sesión </Text>
            <form onSubmit={handleSubmit}>
                <Box p='60px' d='2' bgColor='#131921' color='white'>
                    <img
                        src="https://res.cloudinary.com/edithrincon/image/upload/v1638323334/samples/Guappjolotas/amazonas_rjyjhh.png"
                        alt="logo"
                    />
                    <FormLabel>Correo</FormLabel>
                    <FormControl>
                        <Input
                            type="email"
                            placeholder="Correo"
                            name="email"
                            value={email}
                            onChange={handleInputChange} />
                    </FormControl>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                        <Input
                            type="password"
                            placeholder="Contraseña"
                            name="password"
                            value={password}
                            onChange={handleInputChange} />
                    </FormControl>

                    <div className="container-botom">
                        <Button
                            variant="contained"
                            size="small"
                            type="submit"
                            className="botoncontinuar"
                        >
                            Continuar
                        </Button>

                        <Button variant="outline-warning" type="submit" onClick={handleLoginGoogle}>
                            Iniciar sesión con {" "}
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" ></img>
                        </Button>
                        <Button
                            variant="outlined" onClick={handleLoginFacebook}
                        >
                            Iniciar sesión con{" "}
                            <img
                                className="imagenpeq"
                                src="https://cdn.icon-icons.com/icons2/1269/PNG/128/1497553311-103_84832.png"
                                alt=""
                            ></img>
                        </Button>
                        <hr />
                        <span>¿No tienes una cuenta? <Link to="/registro"> Registrate</Link></span>
                    </div>
                </Box>
            </form>

        </Box>

    )
}

export default Login
