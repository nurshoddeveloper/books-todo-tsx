import React, { createContext, useState } from 'react'
import Message from './Message'
import Modal from './Modal'

interface AppContextInterface {
    setText: any,
    setClassName: any,
    setModalComponent: any
}

export const Context = createContext<AppContextInterface | null>(null)

interface IProps {
  children: JSX.Element[] | JSX.Element
}

export default function BaseContextWrapper({ children }: IProps) {
    const [text, setText] = useState<any>(undefined)
    const [className, setClassName] = useState('')
    const [modalComponent, setModalComponent] = useState<JSX.Element>()

    return (
        <Context.Provider value={{ setText, setClassName, setModalComponent }}>
            {children}

            {text ? (
                <Message
                    text={text}
                    className={className}
                    closeMessage={() => setText(undefined)} />
            ) : null}

            {modalComponent ? (
                <Modal
                    isActive
                    onClose={() => setModalComponent(undefined)}>
                    {modalComponent}
                </Modal>
            ) : null}
        </Context.Provider>
    )
}
