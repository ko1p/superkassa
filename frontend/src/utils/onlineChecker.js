import {isError as isErrorFunc} from "../store/actions/actions";

const onlineChecker = (dispatch, socket) => {
    const checkOnline = () => {
        if (!socket.current.connected) {
            dispatch(isErrorFunc(true))
        } else {
            dispatch(isErrorFunc(false))
        }
    }
    setInterval(checkOnline, 1000)
}

export default onlineChecker;