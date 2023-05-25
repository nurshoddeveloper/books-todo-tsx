import React from 'react'
import cn from 'classnames'
import { Field, useFormikContext } from 'formik'
import ValidationErrorMessage from './ValidationErrorMessage'

interface IProps {
    trigger?: JSX.Element[] | JSX.Element,
    children?: JSX.Element[] | JSX.Element,
    right?: boolean,
    br?: boolean,
    name: string | any,
    className?: string,
    type?: string,
    label?: string,
    validate?: string | any,
    imgSrc?: string,
    component?: string,
    placeholder?: string,
    optional?: boolean,
    help?: string,
    icon?: string,
}

export default function Input({
    br = false,
    name,
    className,
    type,
    label,
    validate,
    imgSrc,
    component = 'input',
    optional = false,
    help,
    icon,
    ...attributes
}: IProps) {
    const { errors, touched } = useFormikContext<Array<object>>()

    return (
        <div className="field">
            {label ? (
                <label htmlFor={name}>
                    <div className="columns">
                        {imgSrc
                            ? <div className="column is-narrow"><img src={imgSrc} width="50" alt="alt" /></div>
                            : null}

                        {icon ? (
                            <div className="column is-narrow">
                                {/*<ion-icon name={icon} />*/}
                            </div>
                        ) : null}

                        <div className="column">
                            {label} &nbsp;
                            {optional ? <span className="form-hint">не обязательно</span> : null}
                        </div>
                    </div>
                </label>
            ) : null}

            {br ? (<div><br /></div>) : ''}

            <div className="control">
                <Field
                    className={cn(component, className)}
                    type={type || 'text'}
                    name={name}
                    id={name}
                    component={component}
                    validate={validate}
                    {...attributes} />

                <ValidationErrorMessage name={name} />
            </div>

            {help && (!errors[name] || !touched[name]) ? (
                <p className="form-hint">{help}</p>
            ) : null}
        </div>
    )
}
