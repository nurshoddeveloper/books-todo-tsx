import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import cn from 'classnames'

interface IProps {
  isActive: boolean, children: JSX.Element[] | JSX.Element, onClose: () => void
}

interface IFunction {
    keyCode: number
}

export default function Modal({ isActive, children, onClose }: IProps) {


    useEffect(() => {
        const handleKeyboard = (event: IFunction) => {
            if (event.keyCode === 27) {
                onClose()
            }
        }

        window.addEventListener('keydown', handleKeyboard)

        return () => {
            window.removeEventListener('keydown', handleKeyboard)
        }
    }, [onClose])

    return createPortal((
        <div className={cn('modal', { 'is-active': isActive })}>
            <div className="modal-background" onClick={onClose} />

            <div className="modal-card">
                <div className="modal-card-body">
                    {children}
                </div>
            </div>

            <button className="modal-close is-large" onClick={onClose} />
        </div>
    ), document.querySelector('#modals-root') as Element)
}
