import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import s from './header.module.scss'

const Header = () => {
    // console.log(data);
    const router = useRouter()
    const clickHandler = () => {
        router.push('/debts/create')
    }

    return (
        <div className={s.header}>
            <h1>My debts</h1>
            <button
                onClick={clickHandler}
                className={s.routerButton}>Add debt</button>
        </div>
    )
}

export default Header