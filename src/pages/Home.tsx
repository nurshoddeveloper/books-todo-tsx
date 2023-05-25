import React, {useState} from 'react'
import {useLoad} from '../hooks/request'
import TodoItem from '../components/TodoItem'
import Loader from '../components/common/Loader'
import Table from '../components/common/Table'

export default function Todo() {
    const [page, setPage] = useState(1)
    const todos = useLoad({
        baseURL: 'https://621c7b30768a4e1020ab3244.mockapi.io/api/users',
        params: { page, limit: 15 },
    })


    const books=useLoad({baseUrl:'https://no23.lavina.tech/books',  body: {
    'Key': 'MyUserKey',
    'Sign': '2892678138d8d793a28fc49055095d8b'
  }} )
    const booksItem=books.response?books.response:[]
    console.log(booksItem)

    return (
        <div className="has-background-grey-lighter is-fullheight">
            <div className="container mb-1">
                <h1 className="has-text-centered is-size-3">Books</h1>

                <div className="box">
                    {!todos.loading ? (
                        <div>
                            <Table
                                loading={todos.loading}
                                totalCount={todos.response ? todos.response : 0}
                                items={todos.response ? todos.response : []}
                                columns={{
                                    name: 'Имя',
                                    company: 'Компания',
                                    date: 'Дата',
                                    actions: '',
                                }}
                                activePage={page}
                                onPageChange={setPage}
                                emptyMessage="Пусто"
                                renderItem={(item) => (
                                    <TodoItem
                                        item={item}
                                        key={item.id}
                                        onUpdate={todos.request}
                                        onDelete={todos.request} />
                                )} />
                        </div>
                    ) : <Loader large center />}
                </div>
            </div>
        </div>
    )
}
