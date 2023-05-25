import React from 'react'
import { ErrorMessage } from 'formik'

interface IProps {
  name: string;
}

export default function ValidationErrorMessage({ name, ...attributes }: IProps) {
    return (
        <ErrorMessage
            name={name}
            {...attributes}
            render={(msg) => <div className="has-text-danger">{msg}</div>} />
    )
}
