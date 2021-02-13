import React, {useEffect, useRef} from "react";
import './App.css';
import {OnButton} from "../OnButton/OnButton";
import {OffButton} from "../OffButton/OffButton";
import {useDispatch, useSelector} from "react-redux";
import {setButtonState} from "../../store/actions/actions";
import io from "socket.io-client";
import onlineChecker from "../../utils/onlineChecker";

function App() {
    const isButtonOn = useSelector(state => state.isButtonOn)
    const isError = useSelector(state => state.isError)
    const dispatch = useDispatch()
    const socket = useRef();

    useEffect(() => {
        socket.current = io('http://localhost:3000');

        socket.current.on('current_state', currentState => {
            console.log('Информация от сервера о состоянии кнопки:', currentState)
            dispatch(setButtonState(currentState))
        });

        onlineChecker(dispatch, socket)

    }, [])

    const toggleStateButton = () => {
        socket.current.emit("change_state")
    }

    return (
        <div className='app'>
            <div className='container'>
                {
                    isError ? <h1>Сервис недоступен</h1> :
                        isButtonOn ? <OnButton onToggleButton={toggleStateButton}/> :
                            <OffButton onToggleButton={toggleStateButton}/>
                }
            </div>
        </div>
    );
}

export default App;
