import React from 'react'
import cn from 'classnames'
import range from 'lodash/range'

interface IProps {
  page: number | any, count: number, pageSize: number, onSelect: (number: number) => void
}

export default function Pagination({ page = 1, count, pageSize = 15, onSelect }: IProps) {
    const current = parseInt(page, 10)
    const pagesNumber = Math.ceil(count / pageSize)

    if (count <= pageSize || count === undefined) {
        return null
    }

    return (
        <nav className="pagination columns is-mobile is-centered">
            {current - 1 > 0 ? (
                <span
                    onClick={() => onSelect(current - 1)}
                    className="pagination-previous is-narrow column is-mobile pointer">
                    &larr;&nbsp; Предыдущий
                </span>
            ) : null}

            {current < pagesNumber ? (
                <span onClick={() => onSelect(current - 1)} className="pagination-next is-narrow column pointer">
                    Следуюший &nbsp;&rarr;
                </span>
            ) : null}

            <ul className="pagination-list">
                {range(1, pagesNumber + 1).map((i) => (
                    <li key={i} onClick={() => onSelect(current - 1)} className="pointer">
                        <span className={cn('pagination-link', { 'is-current': current === i })}>
                            {i}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
