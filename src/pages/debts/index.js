import Container from '../../components/Container'
import Header from '../../components/header/Header'
import DebtsList from '../../components/debts/DebtsList'


export default function Debt() {
    return (
        <>
            <Container>
                <Header />
                <DebtsList />
            </Container>
        </>
    )
}