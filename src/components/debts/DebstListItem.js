import { useToast } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

import s from './debts.module.scss'

import Notify from '../../components/svg/notify.svg'

import AddExtraDebtModal from './modal/AddExtraDebtModal'

import { sendNotify } from '../../services/api/api'


const DebtsListItem = ({ item }) => {

    const toast = useToast()
    const { name, phone, rate, amount, minPayment, debtName } = item

    const { isOpen, onOpen, onClose } = useDisclosure()


    const notifyHandler = (newData) => {
        // console.log(newData);

        const params = {
            name,
            phone,
            rate,
            amount,
            minPayment,
            debtName,
            extraAmount: newData?.extraAmount,
        }
        
        sendNotify(params).then(response => {
            if (response?.data?.status) {
                toast({
                    title: response?.data?.message,
                    status: 'success',
                    isClosable: true,
                    position: 'bottom-left'
                })
            } else {
                toast({
                    title: `Something go wrong`,
                    status: 'error',
                    isClosable: true,
                    position: 'bottom-left'
                })
            }
        })

    }

    return (
        <>
            <AddExtraDebtModal isOpen={isOpen} onClose={onClose} item={item} onSubmit={notifyHandler} />

            <li className={s.item}>
                <div className={s.cardWrapper}>
                    <h3 className={s.subtitle}>{debtName}</h3>
                    <p className={s.name}>{name}</p>
                    <p className={s.mainText}>
                        <span className={s.subText}>Outstanding amount:</span>
                        ${amount}
                    </p>
                    <p className={s.mainText}>
                        <span className={s.subText}>Minimal payment:</span>
                        {minPayment}/Month
                    </p>
                    <p className={s.mainText}>
                        <span className={s.subText}>Interest rate:</span>
                        {rate}%
                    </p>
                </div>
                <div className={s.buttonWrapper}>
                    <button
                        onClick={onOpen}
                        className={s.notifyButton}>+
                        Extra payment
                    </button>
                    <button
                        onClick={notifyHandler}
                        className={s.notifyButton}><Notify className={s.svg} />
                        Notify
                    </button>
                </div>
            </li>
        </>
    )
}
export default DebtsListItem