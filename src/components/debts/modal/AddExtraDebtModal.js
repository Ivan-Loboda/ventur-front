import React, { useState, useEffect } from 'react'
import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import s from './AddExtraDebtModal.module.scss'


const validationSchema = yup.object({
  extraAmount: yup.number().required("Amount is required"),
});

const AddExtraDebtModal = ({ isOpen, onClose, item, onSubmit }) => {

  const { register, formState: { errors }, handleSubmit } = useForm({ resolver: yupResolver(validationSchema) });


  const submitHandler = (data) => {
    const newData = { ...item, ...data }
    onSubmit(newData)
  }

  return <Modal size='xs' isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalBody
        style={{ padding: '0' }}>
        <div className={s.modalContent}>
          <h2 className={s.title}>Recommend extra payment</h2>
          <form
            onSubmit={handleSubmit(submitHandler)}
            className={s.form}>
            <label className={s.inputWrapper}>Extra payment amount
              <input
                placeholder="Enter amount"
                {...register("extraAmount")} />
              {errors.name?.message && <p className={s.errorMessage}>{errors.name?.message}</p>}
            </label>
            <button type="submit" className={s.submitButton}>Add Debt</button>
          </form>
        </div>
      </ModalBody>
    </ModalContent>
  </Modal>
}

export default AddExtraDebtModal