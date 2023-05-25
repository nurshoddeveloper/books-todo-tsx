import React from 'react'
import { Form, Formik } from 'formik'
import { usePutRequest } from '../hooks/request'
import Input from './common/Input'
import { number, required } from '../utils/validators'
import Button from './common/Button'

interface IProps {
  item: any;
  onClose: () => void,
  onUpdate: () => void
}

export default function TodoUpdate({ item, onClose, onUpdate }: IProps) {
    const update = usePutRequest({ baseURL: `https://621c7b30768a4e1020ab3244.mockapi.io/api/users/${item.id}` })

    async function handleUpdate(data: { companyName: any }) {
        await update.request({ data: {
            ...data,
            company: { name: data.companyName },
        } })
        onClose()
        onUpdate()
    }

    return (
        <div>
            <h1 className="mb-3 is-size-5">
                Изменить
            </h1>

            <Formik initialValues={{ ...item, companyName: item.company.name }} onSubmit={handleUpdate}>
                <Form>
                    <Form>
                        <Input
                            name="name"
                            placeholder="Введите имя"
                            validate={required} />

                        <Input
                            name="age"
                            placeholder="Введите воздрасть"
                            validate={number} />

                        <Input
                            name="companyName"
                            placeholder="Введите названия компания"
                            validate={required} />

                        <Button
                            loading={update.loading}
                            type="submit"
                            icon="checkmark"
                            text='Сохранить'
                            className="is-success" /> &nbsp;
                    </Form>
                </Form>
            </Formik>
        </div>
    )
}
