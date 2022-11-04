import React, { useEffect } from 'react';
import { INFURA_PROJECT_ID } from '../../constant';

const Home: React.FC = () => {
    useEffect(() => {
    }, []);
    return <div>hello home, my INFURA_PROJECT_ID is {INFURA_PROJECT_ID}</div>
}

export default Home;
