import * as React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Flex, Text } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { FcMenu } from "react-icons/fc";
import { Image } from '@chakra-ui/image'
import {
  Input, List,
  ListItem,
} from '@chakra-ui/react'
import { Link } from '@chakra-ui/layout'
import '../styles/style.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  IconButton,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons'


const BarraDos = () => {
  //let history = useHistory();
  //const dispatch = useDispatch();
  //const computadores = useSelector((state) => state.categoria);
  //const { product } = computadores;

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  /* const mostCat = (text) => {
     let resultados = product.filter(
       (product) => product.categoria.toLowerCase() === text.toLowerCase()
     );
     dispatch(setProduct(resultados));
   };
   const todaCateg = (e) => {
     dispatch(Listar(e.target.id));
     history.push("/productos");
   };
   const agregarP = () => {
     history.push("/agregar");
   };
 
   const list = (anchor) => (
     <Box
       sx={{
         width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
       }}
       role="presentation"
       onClick={toggleDrawer(anchor, false)}
       onKeyDown={toggleDrawer(anchor, false)}
     >
       <List>
         {["Computador", "Portatil", "Pantalla", "Gadget"].map((text, index) => (
           <ListItem key={text} onClick={() => mostCat(text)} button>
             <Text primary={text} />
             <i className="material-icons" id="car">
               keyboard_arrow_right
             </i>
             <Divider />
           </ListItem>
         ))}
       </List>
     </Box>*/
  ;

  return (
    <>
      <div className="containedor2">
        <Flex>
          <React.Fragment >
            <Text className="colormenu" sx={{ ml: 5, mr: 5 }}>
             
              <Menu colorText="white">
             <MenuButton
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  colorText="white"
                  variant='outline'
                  bg="white"
                />
                <MenuList>
                  <MenuItem >
                    Electronicos
                  </MenuItem>
                  <MenuItem >
                   Los mas vendidos
                  </MenuItem>
                  <MenuItem >
                   Television y Video
                  </MenuItem>
                  <MenuItem>
                   Computo y tabletas
                  </MenuItem>
                  <MenuItem>
                   Audio y equipo de sonido
                  </MenuItem>
                </MenuList>
              </Menu>
            </Text>

          </React.Fragment>
        </Flex>
        <Flex >
          Todo
        </Flex>
        <Flex variant="p" noWrap component="div" sx={{ ml: 15, mx: 5 }}>
          Tarjeta de Regalos
        </Flex>
        <Flex variant="p" noWrap component="div" sx={{ mx: 5, ml: 5 }}>
          Prime
        </Flex>
        <Flex variant="p" noWrap component="div" sx={{ ml: 15, mr: 15 }}>
          Lo Más Vendidos
        </Flex>
        <Flex
          className="pointer"

          variant="p"
          noWrap
          component="div"
          sx={{ ml: 4 }}
        >
          Agregar Nuevo Articulo
        </Flex>
      </div>

      <Breadcrumb spacing='25px' mt='10px' separator='' ml='20px' color='black.700' align="start">
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Electrónicos</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='#'>Los Más Vendidos</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Televisión y Video</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Cómputo y Tabletas</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href='#'>Audio y Equipos de Sonido</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default BarraDos;
