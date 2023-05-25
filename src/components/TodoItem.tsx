import React from 'react'
import {useHistory} from 'react-router-dom'
import {getDateTime} from '../utils/date'
import {useDeleteRequest} from '../hooks/request'
import {useModal} from '../hooks/modal'
import TodoUpdate from './TodoUpdate'
import Button from "./common/Button";

interface IProps {
    item?: JSX.Element | JSX.Element[] | any;
    onUpdate: () => void,
    onDelete: () => void
}

export default function TodoItem({item, onUpdate, onDelete}: IProps) {
    const remove = useDeleteRequest({baseURL: `https://621c7b30768a4e1020ab3244.mockapi.io/api/users/${item.id}`})
    const history = useHistory()

    const [updateModal, hideUpdateModal] = useModal(
        <TodoUpdate item={item} onUpdate={onUpdate} onClose={() => hideUpdateModal()}/>,
    )

    async function handleDelete() {
        if (global.confirm('Вы действительно хотите удалить?')) {
            await remove.request()
            onDelete()
        }
    }


    return (
        <tr>
            <td onClick={() => history.push(`/user/${item.id}`)} className="title pointer is-6">{item.name}</td>
            <td onClick={() => history.push(`/user/${item.id}`)} className="title pointer is-6">{item.age}</td>
            <td onClick={() => history.push(`/user/${item.id}`)} className="subtitle pointer is-7">
                {getDateTime(item.createdAt)}
            </td>

            <td className="media-right">
                <Button className="is-success mr-4" text="Изменить" onClick={updateModal}/>
                <Button className="is-danger" text="Удалить" onClick={handleDelete}/>
            </td>
        </tr>
    )
}
