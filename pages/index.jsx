import Form from './form';
import { Center } from '@chakra-ui/react';

const Home = () => {
    return (
        <div>
            <Center display="center" padding="100px">
                <Form/>
            </Center>
            <style jsx global>{`
            body {
                background: #ff9966;  /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #ff5e62, #ff9966);  /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #ff5e62, #ff9966) !important; /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ 
            }
            `}</style>
        </div>
    );
};


export default Home;