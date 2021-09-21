// Index do ashboard

import HorizontalBarChart from "../../components/HorizontalBarChart"
import LineChart from "../../components/LineChart"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const Dashboard = () => {

    const [messages, setMessages] = useState([])
    const storeMessages = useSelector((state) => state.appData.messages)

    useEffect(() => {
        setMessages(storeMessages)
    }, [storeMessages])

    const triggerData = messages.reduce((sums, message) => {
        sums[message.trigger] = (sums[message.trigger] || 0) + 1;
        return sums;
    }, {});

    const triggerKeys = Object.keys(triggerData)
    const triggerValues = Object.values(triggerData)
    const channelData = messages.reduce((sums, message) => {
        sums[message.channel] = (sums[message.channel] || 0) + 1;
        return sums;
    }, {});

    const channelKeys = Object.keys(channelData)
    const channelValues = Object.values(channelData)
    const timerKeys = messages.map((message) => messages.indexOf(message) + 1)
    const timerValues = messages.map((message) => parseInt(message.timer.slice(0, -3)))

    return (
        <div className="dashboard">
            <div className="graph-area" >
                <LineChart title={"Timers"} legend={"Timers"} dataX={timerKeys} dataY={timerValues} />
            </div>
            <div className="graph-area" >
                <HorizontalBarChart title={"Gatilhos"} legend={"Gatilhos"} dataX={triggerKeys} dataY={triggerValues} />
            </div>
        </div>
    )
}

export default Dashboard
