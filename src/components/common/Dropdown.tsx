import React, { useState } from 'react'
import cn from 'classnames'
import { NavLink } from 'react-router-dom'

interface IProps {
    trigger: JSX.Element[] | JSX.Element,
    children: JSX.Element[] | JSX.Element,
    right: boolean,
}

export default function Dropdown({ trigger, children, right }: IProps) {
    const [active, setActive] = useState(false)

    return (
        <div onMouseLeave={() => setActive(false)}
            className={cn('dropdown', { 'is-active': active, 'is-right': right })}>
            <div className="dropdown-trigger" onClick={() => setActive(!active)}>
                {trigger}
            </div>

            {active ? (
                <div className="dropdown-menu">
                    <div className="dropdown-content">{children}</div>
                </div>
            ) : null}
        </div>
    )
}

interface IPropsItem {
    trigger?: JSX.Element[] | JSX.Element,
    children?: JSX.Element[] | JSX.Element,
    right?: boolean,
    text: string,
    icon?: string,
    active?: boolean,
    to?: string,
    onClick: () => void
}


export function DropdownItem({ text, icon, active, to = '', onClick, ...props }: IPropsItem) {
    const Component = to ? NavLink : 'a'

    return (
        <Component {...props} to={to} className={cn('dropdown-item', { 'is-active': active })} onClick={onClick}>
            {icon ? <span className={cn('icon', icon)} /> : null}
            {text}
        </Component>
    )
}
