import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserBooking = () => {
    const [data, setData] = useState({ name: '', email: '', buttonId: null, gender: '', date: '' });
    const [bookedData, setBookedData] = useState([]);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios.get('http://localhost:8081/userbooking');
            setBookedData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const forButtonClick = (buttonId) => {
        setData({ name: '', email: '', buttonId, gender: '', date: '' });
        setShowForm(true);
    };

    const forCancel = () => {
        setShowForm(false);
    };

    const forChange = (event) => {
        const { name, value } = event.target;
        setData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const forSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:8081/userbooking', data);
            const savedRegistration = response.data;
            setBookedData((prevRegisteredData) => [...prevRegisteredData, savedRegistration]);
            setShowForm(false);
        } catch (error) {
            console.log(error);
        }
    };

    getData()

    const buttons = [
        { id: 1, name: 'A1' },
        { id: 2, name: 'A2' },
        { id: 3, name: 'A3' },
    ];

    const renderButton = (button) => {
        const isDisabled = bookedData.some((data) => data.buttonId === button.id);
        return (
            <button key={button.id} onClick={() => forButtonClick(button.id)} disabled={isDisabled} className={isDisabled ? 'not-avail' : 'avail'}>
                {isDisabled ? `${button.name}` : button.name}
            </button>
        );
    };

    return (
        <React.Fragment>
            <h3>Booking Slots</h3>
            {buttons.map((button) => renderButton(button))}
            {showForm ? (
                <div>
                    <h3>Booking Form for Slot {data.buttonId}</h3>
                    <form onSubmit={forSubmit}>
                        <label>
                            Name:<input type="text" name="name" onChange={forChange} required />
                        </label>
                        <br />
                        <label>
                            Email:<input type="email" name="email" onChange={forChange} required />
                        </label>
                        <br />
                        <label>
                            Gender:
                            <select name="gender" onChange={forChange} required>
                                <option value="">Select</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </label>
                        <br />
                        <label>
                            Date:<input type="date" name="date" onChange={forChange} required />
                        </label>
                        <br />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={forCancel}>Cancel</button>
                    </form>
                </div>
            ) : null}

        </React.Fragment>
    );
};

export default UserBooking;