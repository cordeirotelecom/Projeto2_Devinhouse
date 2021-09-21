import api from '../../services/api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadInfo } from '../../store/modules/appData/actions';

const LoadInfo = ({ children }) => {

    const dispatch = useDispatch()

    const getInfo = async () => {
        try {
            const messages = await api.get('/messages')
            const triggers = await api.get('/triggers')
            const channels = await api.get('/channels')
            const info = { triggers: triggers.data, channels: channels.data, messages: messages.data }
            dispatch(loadInfo(info))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getInfo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default LoadInfo