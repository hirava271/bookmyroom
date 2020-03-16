import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import axios, { AxiosResponse } from 'axios';

function App(): JSX.Element {
    const [hello, setHello] = useState<string>('');

    useEffect(() => {
        async function getName() {
            await axios.get('/api/test').then((response: AxiosResponse) => {
                setHello(response.data);
            });
        }
        getName().then();
    });

    return (
        <div>
            <label htmlFor="selectedDate">Select Date:</label>
            <input type="date" name="selectedDate" />
            <div>{hello}</div>
        </div>
    );
}

export default App;
