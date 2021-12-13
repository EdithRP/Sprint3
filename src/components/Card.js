import React from 'react'
import { Box, Badge } from "@chakra-ui/layout"
import { Image } from '@chakra-ui/react'

const Cardok = (props) => {

    return (
        <>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
                <Image src={props.imagen} alt={props.nombre} />

                <Box p='6'>
                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            {props.categoria}
                        </Badge></Box>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >{props.nombre}   </Box>

                    <Box>
                        {props.precio}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / pesos
                        </Box>
                    </Box>


                    <Box>{props.descripcion}   </Box>
                    <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8}>
                        Comprar
                    </Box>


                    </Box>
                </Box>


            </> )
}

            export default Cardok
