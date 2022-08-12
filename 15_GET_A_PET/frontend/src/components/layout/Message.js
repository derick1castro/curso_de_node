import {useState, useEffect} from 'react'
import bus from '../../utils/bus'

import styles from './Message.module.css'

function Message() {
    const [visibility, setVisibiliry] = useState(false)
    const [message, setMessage] = useState('')
    const [type, setType] = useState('')

    useEffect(() => {

        bus.addListener('flash', ({message, type}) =>{

            setVisibiliry(true)
            setMessage(message)
            setType(type)

            setTimeout(() => {
                setVisibiliry(false)
            }, 3000)
        })

    }, [])

    return (
        visibility && (
            <div className={`${styles.message} ${styles[type]}`}>
            {message}
        </div>
        )
    )
}

export default Message