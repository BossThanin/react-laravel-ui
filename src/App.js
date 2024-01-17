import './App.css';
import { useState, useEffect } from "react";
import { getProduct } from "./api/ProductApi";

function App() {
    const [message, setMessage] = useState('');

    const handleClick = async () => {
        try {
            const response = await getProduct();
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error fetching message:', error);
        }
    };

    return (
        <div>
            <div className={'btn btn-primary'} onClick={handleClick}>
                Click me to get message from API
            </div>
            <div>
                {message && (
                    <div>
                        <h2>Message from API:</h2>
                        <p>{message}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
