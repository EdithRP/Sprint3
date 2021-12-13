import React from 'react'
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Text, Box } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { registerEmailPassword } from '../actions/registerAction';
import { useForm } from '../hooks/useForm';
import '../styles/style.css'
import { Input } from '@chakra-ui/react'
import { loginGoogle } from '../actions/loginAction';

const Registro = () => {

    const dispatch = useDispatch()

    const [values, handleInputChange, reset] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { nombre, email, pass1, pass2 } = values

    const handleSubmit = (e) => {
        e.preventDefault()

        if (pass1 === pass2) {
            dispatch(registerEmailPassword(email, pass1, nombre))
        } else {
            console.log('Las contraseñas no son iguales');
        }
        reset()
    }

    const handleLoginGoogle = () => {
        dispatch(loginGoogle())
    }

    return (
        
              <Box className="container">
              <Box p='60px' d='2' bgColor='#131921' color='white'>
              <img 
                        src="https://res.cloudinary.com/edithrincon/image/upload/v1638323334/samples/Guappjolotas/amazonas_rjyjhh.png"
                        alt="logo"
                    />
                <Text fontSize='2em' alignItems="center">Registro</Text>
                    <form onSubmit={handleSubmit}>
            
                            <FormLabel>Nombre</FormLabel>
                            <FormControl>
                            <Input
                                type="text"
                                placeholder="Ingrese su nombre"
                                name="nombre"
                                value={nombre}
                                onChange={handleInputChange}
                            />
                              </FormControl>
                            <FormLabel>Correo</FormLabel>
                            <FormControl>
                             <Input
                                type="email"
                                placeholder="Ingrese su correo"
                                name="email"
                                value={email}
                                onChange={handleInputChange}
                            />
                            </FormControl>
                            <FormLabel>Contraseña</FormLabel>
                            <FormControl>
                            <Input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="pass1"
                                value={pass1}
                                onChange={handleInputChange}
                            />
                             </FormControl>
                            <FormLabel>Repita contraseña</FormLabel>
                            <FormControl>
                            <Input
                                type="password"
                                placeholder="Ingrese su contraseña"
                                name="pass2"
                                value={pass2}
                                onChange={handleInputChange}
                            />
                           </FormControl>
                        <div className="container-botom">
                            <Button variant="danger" size="small" type="submit" className="botoncontinuar">
                                Registrarse
                            </Button> 
                
                        <Button variant="outline-warning" type="submit" onClick={handleLoginGoogle}>
                            Iniciar sesión con {" "}
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" ></img>
                        </Button>
                        <Button
                            variant="outlined"
                        >
                            Iniciar sesión con{" "}
                            <img
                                className="imagenpeq"
                                src="https://cdn.icon-icons.com/icons2/1269/PNG/128/1497553311-103_84832.png"
                                alt=""
                            ></img>
                        </Button>
                        <hr />
                            <span>¿Ya tienes una cuenta? <Link to="/"> Inicia sesión</Link></span>
                        </div>
                    </form>
                    </Box>
            </Box>
   
    )
}

export default Registro