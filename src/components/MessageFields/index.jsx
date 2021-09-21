import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const MessageFields = (props) => {

    const { isMessagePage, title,
        labelButton1, funcButton1, labelButton2, funcButton2,
        triggerValue, channelValue, timerValue, messageValue,
        handleTrigger, handleChannel, handleTimer, handleMessage
    } = props

    const [triggers, setTriggers] = useState([])
    const [channels, setChannels] = useState([])

    const storeTriggers = useSelector((state) => state.appData.triggers)
    const storeChannels = useSelector((state) => state.appData.channels)

    useEffect(() => {
        setTriggers(storeTriggers)
        setChannels(storeChannels)
    }, [storeTriggers, storeChannels])


    return (
        <>
            <form onSubmit={funcButton1}>
                <div className="message-top-container">
                    <div className="body-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="top-buttons">
                        <button type="submit">{labelButton1}</button>
                        <button type="button" onClick={funcButton2}>{labelButton2}</button>
                    </div>
                </div>

                <div className="message-filter-container">
                    <div className="message-filter-item">
                        <label htmlFor="trigger">Gatilho:</label><br />
                        <select
                            id="trigger"
                            name="trigger"
                            onChange={(e) => handleTrigger(e.target.value)}
                            value={triggerValue}
                        >
                            <option value="" >Escolha um gatilho</option>
                            {triggers.map((el) => <option key={el.id} value={el.name}>{el.name}</option>)}
                        </select>
                    </div>
                    <div className="message-filter-item">
                        <label htmlFor="channel">Canal:</label><br />
                        <select
                            id="channel"
                            name="channel"
                            onChange={(e) => handleChannel(e.target.value)}
                            value={channelValue}
                        >
                            <option value="">Escolha um canal</option>
                            {channels.map((el) => <option key={el.id} value={el.name}>{el.name}</option>)}
                        </select>
                    </div>
                    <div className="message-filter-item">
                        <label htmlFor="timer">Timer: (em horas)</label><br />
                        <input
                            type="text"
                            id="timer"
                            name="timer"
                            onChange={(e) => handleTimer(e.target.value)}
                            value={timerValue}
                        />
                    </div>
                </div>

                {(isMessagePage) &&
                    <div className="message-body-container">
                        <label htmlFor="message">Mensagem:</label><br />
                        <textarea
                            id="message"
                            name="message"
                            rows="10"
                            value={messageValue}
                            onChange={(e) => handleMessage(e.target.value)}
                        />
                    </div>
                }
            </form>
        </>
    )
}

export default MessageFields
