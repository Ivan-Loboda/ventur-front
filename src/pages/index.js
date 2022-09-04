import Container from '../components/Container'
import Header from '../components/header/Header'
import DebtsList from '../components/debts/DebtsList'
import { useRouter } from 'next/router'
import { useEffect } from 'react'


export default function Home() {
  const router = useRouter()


  useEffect(() => {

    router.push('/debts')
  }, [])

  return (
    <div>
      <p>hi</p>
    </div>
  )
}
