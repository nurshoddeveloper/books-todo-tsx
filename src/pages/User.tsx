import React from 'react'
import {useHistory, useParams} from 'react-router-dom'
import Table from '../components/common/Table'
import Loader from '../components/common/Loader'
import {useDeleteRequest, useLoad} from '../hooks/request'
import Button from '../components/common/Button'
import {css, StyleSheet} from 'aphrodite'
import cn from 'classnames'
import notFound from '../static/notFound.jpg'

export default function User() {
    const params = useParams<object | any>()
    const history = useHistory()
    const user = useLoad({
        baseURL: `https://621c7b30768a4e1020ab3244.mockapi.io/api/users/${params.id}`,
    })
    let response: any = {}
    response = user.response ? user.response : {}
    const productResponse = useLoad({
        baseURL: `https://621c7b30768a4e1020ab3244.mockapi.io/api/products?userId=${params.id}`,
    })
    const products = productResponse.response ? productResponse.response : []
    const productDelete = useDeleteRequest({})

    async function onProductDelete(productId: {component: any}) {
        await productDelete.request({
            baseURL: `https://621c7b30768a4e1020ab3244.mockapi.io/api/products/${productId}`,
        })
        productResponse.request()
    }

    return (
        <div className="has-background-grey-lighter is-fullheight">
            <div className="container mb-1">
                <h1 className="has-text-centered is-size-3">TODO DETAIL</h1>

                <div className="box">
                    {!user.loading ? (
                        <div>
                            <h1 className={cn('pointer', css(styles.title))} onClick={() => history.push('/')}>
                                {`< Назад`}
                            </h1>
                            <div className='columns is-vcentered'>
                                <div className='column'>
                            <img src={notFound} className={css(styles.image)} />
                                </div>
                                <div className='column'>
                            <h1 className="title is-4">Имя: {response.name}</h1>
                            <h1 className="title is-4">Компания: {response.company ? response.company.name : ''}</h1>
                            <h1 className="title is-4">Возраст: {response.age}</h1>
                                    </div>
                            </div>

                            <Table
                                loading={productResponse.loading}
                                totalCount={productResponse.response ? productResponse.response : 0}
                                items={products}
                                columns={{
                                    name: 'Имя',
                                    actions: '',
                                }}
                                emptyMessage="Пусто"
                                renderItem={(item) => (
                                    <tr>
                                        <td>{item.name}</td>

                                        <Button
                                            text='Удалить'
                                            onClick={() => onProductDelete(item.id)}
                                            icon="trash-outline"
                                            className="is-pulled-right is-danger" />
                                    </tr>
                                )} />
                        </div>
                    ) : <Loader large center />}
                </div>
            </div>
        </div>
    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold'
    },
    image: {
        width: '500px',
        height: '500px'
    }
})
