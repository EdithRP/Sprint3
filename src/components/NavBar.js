import { Box, Flex, Text } from '@chakra-ui/layout'
import { Input } from '@chakra-ui/react'
import { Link } from '@chakra-ui/layout'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { startLogout } from '../actions/loginAction'
import { useNavigate } from 'react-router'
import { ImLocation } from "react-icons/im";
import { FiSearch } from "react-icons/fi";
import { BiCart } from "react-icons/bi";
import BarraDos from "./NavBarDos";
import '../styles/style.css'
import {useDispatch} from 'react-redux'
import {useUbicacion} from '../hooks/useUbicacion'


const NavBar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [donde, watch, setWatch] = useUbicacion();
    const handleUbic = async () => {
      setWatch(true);
      console.log(donde);
    };
  

    const handleLogout = () => {
        dispatch(startLogout())
        navigate('/login', {
            replace: true
        })
    }

    

    return (
        <Flex className="containedor" >
            <Flex
                bg="#131921"
                w="100%"
                h="80px"
                px={5}
                py={4}
                alignItems="center"
            >
                <Flex flexDirection="row" d='2' bgColor='#131921' colortext='white' justifyContent="left" alignItems="center">
                    <img
                        src="https://res.cloudinary.com/edithrincon/image/upload/v1638323334/samples/Guappjolotas/amazonas_rjyjhh.png"
                        alt="logo"
                    />
                </Flex>

                <Box display="flex" justifyContent="space-around" alignItems="center" textColor="white">

                    {watch ? (
                        <Flex
                            variant="p"
                            noWrap
                            component="div"
                            sx={{ display: { xs: "none", sm: "block" } }}
                        >
                            <p>{donde}</p>
                        </Flex>
                    ) : (
     
                <Text
                    variant="p"
                    left="180px"
                    component="div"
                    as={NavLink}
                    to="/home"
                    onClick={handleUbic}
                    px={2} fontSize="20px" style={({ isActive }) => isActive ? { color: "white" } : { color: "white" }} className="pointer">

                    Hola
                    <p><strong><ImLocation style={{ width: "28px", height: "28px", color: "white" }} />Elige tu dirección</strong></p></Text>
                     )
                    
                    }
                <Box component="form">
                    <div className="Search">
                        <div className="SearchIconWrapper">
                            <Link
                                as={NavLink}
                                to="/counter"
                                px={2}
                                fontSize="20px"
                                style={({ isActive }) => isActive ? { color: "grey" } : { color: "black" }}>
                                <FiSearch style={{ width: "28px", height: "28px", }} /></Link>
                        </div>
                        <Input className="StyledInputBase"
                            placeholder="Search..."
                            name="search"
                        />   
                     </div>
                    </Box>
                   

                    <Link
                        m={12}
                        as={NavLink}
                        to="/profile"
                        px={10}
                        fontSize="20px"
                        style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }} onClick={handleLogout}>
                        Hola, identificate
                        <p><strong>Cuenta y Listas</strong></p></Link>

                    <Link
                        as={NavLink}
                        to="/profile"
                        px={2}
                        fontSize="20px"
                        style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}>

                        Devoluciones
                        <p><strong>Y Pedidos</strong></p></Link>
                    <Link
                        m={12}
                        as={NavLink}
                        to="/profile"
                        px={2}
                        fontSize="20px"
                        style={({ isActive }) => isActive ? { color: "white" } : { color: "lightgrey" }}>
                        <BiCart style={{ width: "28px", height: "28px", }} />
                        <p><strong>Carrito</strong></p></Link>

                </Box>

            </Flex >
            <BarraDos />
        </Flex>
    )

}

export default NavBar