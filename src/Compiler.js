import React, { useState } from 'react';
import { Box, Heading, Text, Stack, Textarea, VStack ,Button,Slide,useDisclosure,CloseButton,Divider} from '@chakra-ui/react';

const Compiler = () => {
  const { isOpen, onToggle,onClose} = useDisclosure()
  return (
    <Stack direction={'row'} width="100%" spacing={1}>
    {/* Problem Section */}
      <Box bg='white' w='50%' h='750px'>
        <Text as='b' color='black' fontSize='20px'>Tranform To prime</Text>
        <br />
        <Text as='i' color='green' fontSize='15px'>Difficulty : <Text as='u'> medium</Text></Text>
        <Divider h='5'/>
        <Text>
        Given an array of n integers. Find the minimum non-negative number to be inserted in array, so that sum of all elements of array becomes prime.
        Example 1:
        </Text>
        {/* Sample Test Case Section */}
        <Box color='#DEDAD9' border='1px' h='100px'>
          <Text as='b' color='black'>
            Input : N=5
            arr = [2, 4, 6, 8, 12]
          </Text>
          <br/>
          <Text as='b' color='black'>
            Ouput : 5
          </Text>
          <br/>
          <Text as='b' color='black'>
            Explanation : 
            The sum of the array is 32 ,we can add 5 to this to make it 37 which is a prime number.
          </Text>
        </Box>
      </Box>

      {/* Compiler Section */}
      <Box bg='#DEDAD9' w='100%' h='750px'>
      Compiler......
      <Button onClick={onToggle} display='flex' position='absolute' bottom='4' right='4'>Compile & Run</Button>
      <Slide direction='bottom' in={isOpen} style={{ zIndex: 10 }}>
        <Box
          h='250px'
          p='40px'
          color='white'
          mt='4'
          bg='teal.500'
          rounded='md'
          shadow='md'
        >
        {/* Output Section */}
        <Text>Output Window</Text>
        <CloseButton
              position="absolute"
              top="5"
              right="1"
              color="white"
              onClick={onClose}
            />
        </Box>
      </Slide>
      </Box>
    </Stack>
  )
}

export default Compiler