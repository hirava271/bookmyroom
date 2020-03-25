import React from 'react';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import {
    DatePickerComponent,
    TimePickerComponent,
} from '@syncfusion/ej2-react-calendars';
import './index.css';

function App(): JSX.Element {
    // const [rooms, setRooms] = useState<Room[]>([]);

    // useEffect(() => {
    //     axios.get<Room[]>('/api/rooms').then(response => {
    //         setRooms(response.data);
    //     });
    // }, []);

    return (
        <div>
            <div className="datetime-selector">
                <span>Meeting Timing:</span>
                <div className="datepicker-control-section">
                    <DatePickerComponent />
                </div>
                <div className="datetime-selector">
                    <div className="time-picker-control-section">
                        <TimePickerComponent />
                    </div>
                    <span>to</span>
                    <div className="time-picker-control-section">
                        <TimePickerComponent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
