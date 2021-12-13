import * as React from "react";
import { Flex, Text } from '@chakra-ui/layout'
import '../styles/style.css'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  IconButton,
} from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { HamburgerIcon} from '@chakra-ui/icons'


const BarraDos = () => {


  const [state, setState] = React.useState({
    left: false,
  });
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
