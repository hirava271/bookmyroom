import React, { useEffect, useState } from 'react';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { Room } from '../../api/src/rooms/interfaces/room.interface';

function App(): JSX.Element {
    const [rooms, setRooms] = useState<Room[]>([]);

    useEffect(() => {
        axios.get<Room[]>('/api/rooms').then(response => {
            setRooms(response.data);
        });
    }, []);

    return (
        <div>
            <div>
                <label htmlFor="selectedDate">Select Date:</label>
                <input type="date" name="selectedDate" />
            </div>

            {rooms.length > 0 &&
                rooms.map((room: Room, index: number) => {
                    return (
                        <div key={index}>
                            <span>{room.name}</span>
                        </div>
                    );
                })}
        </div>
    );
}

export default App;
