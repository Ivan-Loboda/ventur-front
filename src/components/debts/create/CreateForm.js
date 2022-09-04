import React, { useCallback } from "react";
import { useRouter } from "next/router"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import 'yup-phone';

import s from './createForm.module.scss'

import { addNewDebt } from "../../../services/api/api";

import ArrowLeft from '../../../components/svg/arrow-left.svg'


// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationSchema = yup.object({
    name: yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Name is required"),
    phone: yup.string().phone('Put the number, start +3**********').required("Phone is required"),
    debtName: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Debt name is required"),
    amount: yup.number().required("Amount is required"),
    rate: yup.number().required("Rate is required"),
    minPayment: yup.number().required("Minimal payment is required"),
});

const CreateForm = () => {
    const router = useRouter()

    const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(validationSchema) });


    const onSubmit = (data) => {
        addNewDebt(data)
    }

    return (
        <div>
            <button
                className={s.backButton}
                onClick={() => router.back()}>
                <ArrowLeft className={s.svg} />Go Back
            </button>
            <h2 className={s.title}>Add a Debt</h2>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={s.form}>
                <h3 className={s.subtitle}>Borrower</h3>
                <label className={s.inputWrapper}>Borrower name
                    <input
                        placeholder="Enter name"
                        {...register("name")} />
                {errors.name?.message && <p className={s.errorMessage}>{errors.name?.message}</p>}
                </label>
                <label className={s.inputWrapper}>Borrower phone
                    <input type="tel"
                        placeholder="Enter phone number"
                        {...register("phone")} />
                        {errors.phone?.message && <p className={s.errorMessage}>{errors.phone?.message}</p>}
                </label>
                <h3 className={s.subtitle}>Debt</h3>
                <label className={s.inputWrapper}>Debt name
                    <input
                        placeholder="Enter name"
                        {...register("debtName")} />
                        {errors.debtName?.message && <p className={s.errorMessage}>{errors.debtName?.message}</p>}
                </label>
                <label className={s.inputWrapper}>Outstanding amount
                    <input type="number"
                        placeholder="Enter amount"
                        {...register("amount")} />
                        {errors.amount?.message && <p className={s.errorMessage}>{errors.amount?.message}</p>}
                </label>
                <label className={s.inputWrapper}>Interest rate
                    <input type="number"
                        placeholder="Enter"
                        {...register("rate")} />
                        {errors.rate?.message && <p className={s.errorMessage}>{errors.rate?.message}</p>}
                </label>
                <label className={s.inputWrapper}>Minimal payment
                    <input type="number"
                        placeholder="Enter amount"
                        {...register("minPayment")} />
                        {errors.minPayment?.message && <p className={s.errorMessage}>{errors.minPayment?.message}</p>}
                </label>
                {/* <input type="submit" /> */}
                <button type="submit" className={s.submitButton}>Add Debt</button>
            </form>
        </div>
    )
}

export default CreateForm