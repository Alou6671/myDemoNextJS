import React, { useState } from 'react';
import { Input, Button, VStack, Text, Box, Image } from '@chakra-ui/react';

function Form() {
    
    const [image, setImage] = useState(null);

    const handleImage = (e) => {
        const file = e.target.files[0];
        const fileReader = new FileReader();
        fileReader.onload = function(e) {
            console.log(e.target.result);
            setImage(e.target.result);
        }
        fileReader.readAsDataURL(file);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = {
          name: event.target.name.value,
          email: event.target.email.value,
          picture: image,
          website: event.target.website.value,
          bio: event.target.bio.value,
        };
    
        const JSONdata = JSON.stringify(data);
    
        const endpoint = '/api/submit';

        const options = {
            method: 'POST',
            redirect: 'follow',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options);

        if (response.redirected) {
            window.location.href = response.url;
        }
    };
    
    return (
        <form method="post" onSubmit={handleSubmit}>
                <Box display="flex" backgroundColor="white" p={55} borderRadius="40">
                    <VStack gap="20px" paddingTop="20px">
                        <Text fontSize='50px'>Fill up the following form ! 😍</Text>
                        <Input placeholder="Name*" required name="name" type="text"></Input>
                        <Input placeholder="Email*" required name="email" type="email"></Input>
                        <label htmlFor="picture">
                            Insert your picture here
                        </label>
                        <Input placeholder="Image" name="picture" type="file" border="0" onChange={handleImage}></Input>
                        <VStack width="800px">
                            <Image alt="uploaded-image" src={image}/>
                        </VStack>
                        <Input placeholder='Your website*' name="website" type="url"/>
                        <Input placeholder="My bio" size="lg" name="bio" variant="filled"></Input>
                        <Button colorScheme='teal' variant='solid' type="submit">
                            Register
                        </Button>
                    </VStack>
                </Box>
        </form>
    );
};

export default Form;