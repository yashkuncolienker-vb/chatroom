import ReactTimeAgo from 'react-time-ago'

const Chat = ({data}) => {
    return (
        <div>
            <p>{data.message}</p>
            <ReactTimeAgo date={Date.parse(data.createdAt)} locale="en-US"/>
        </div>
    )
}

export default Chat
