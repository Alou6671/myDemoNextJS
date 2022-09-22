import { Center, Text, Stack, Alert, AlertIcon } from '@chakra-ui/react';

const Success = () => {
    return (
        <Stack spacing="3">
            <Center display="row" padding="100px">
                <Text fontSize='100px'>Thank you !</Text>
                <Alert status='success'>
                <AlertIcon boxSize="40px"/>
                    Data uploaded to the server. Fire on!
                </Alert>
            </Center>
        </Stack>
    );
};

export default Success;