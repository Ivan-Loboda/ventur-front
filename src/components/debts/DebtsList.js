import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';



import { getDebts } from '../../redux/debts/debtsOperations'


import s from './debts.module.scss'

import DebtsListItem from "./DebstListItem"

const DebtsList = () => {
    const dispatch = useDispatch()

    


    let initialDebts = useSelector(state => state?.debts?.debts);

    useEffect(() => {
        dispatch(getDebts())
    }, [])

    return (
        <>
            

            <ul className={s.list}>
                {initialDebts.map(item => {
                    return (
                        <DebtsListItem key={item.id} item={item} />
                    )
                })}
            </ul>
        </>
    )
}



export default DebtsList
