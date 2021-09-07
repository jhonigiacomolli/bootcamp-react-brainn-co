import styled, { createGlobalStyle } from 'styled-components'
import { FormEvent, useEffect, useState } from "react"
import { Button } from "./components/buttom"
import { Input } from "./components/input"
import { MessageBox } from "./components/message-box"

type Car = {
    image: string;
    brandModel: string;
    year: string;
    plate: string;
    color: string;
}
type StyledDiv = {
    bgColor: string;
}
function App() {
    const [url, setUrl] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState(0)
    const [plate, setPlate] = useState('')
    const [color, setColor] = useState('')
    const [cars, setCars] = useState<Car[]>([])
    const [message, setMessage] = useState('')
    const path = 'http://localhost:3333/cars'

    useEffect(() => {
        getData()
    }, [])

    function handleSubmit(event:FormEvent) {
        event.preventDefault()
        console.log(url, model, year, plate, color);
        
        if(url && model && year && plate && color) {
            postData()
        }else {
            setMessage('Preencha todos os campos corretamente')
        }
    }
    async function getData() {
        const data = await fetch(path)
        const carsData = await data.json()
        setCars(carsData)
    }
    async function postData() {
        const newCar = {
            image: url,
            brandModel: model,
            year: year.toString(),
            plate: plate,
            color: color
        }
        const data = await fetch(path, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newCar)
        })
        const result = await data.json()
        if(data.status === 200) {
            setCars(oldCars => [...oldCars, newCar ])    
            setMessage(result.message)
            clearForm()
        }else {
            setMessage('Ocorreu um erro, o veículo não foi cadastrado')
        }
    }
    async function deleteData(plate: string) {
        const data = await fetch(path, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            plate: plate,
          })
        })
        const result = await data.json()
        if(data.status === 200) {
            setCars(oldCars => oldCars.filter(car => car.plate !== plate))    
            setMessage(result.message)
        }else {
            setMessage('Ocorreu um erro, o veículo não foi cadastrado')
        }
    }
    function clearForm() {
        setUrl('')
        setModel('')
        setYear(0)
        setPlate('')
        setColor('#000')
    }
    
    return (
        <>
            <GlobalStyle/>
            <Main>
                <SectionForm>
                    <Image src="/logo.svg" alt="logomarca" />
                    <FormTitle>Brainn Store</FormTitle>
                    <FormDescription>Gerenciamento de estoque de veículos</FormDescription>
                    <Form onSubmit={handleSubmit}>
                        <Input type="url" id="car-url" label="Imagem (URL)" value={url} setValue={setUrl} />
                        <Input type="text" id="car-model" label="Marca | Modelo" value={model} setValue={setModel} />
                        <Input type="number" id="car-year" label="Ano" value={year} setValue={setYear} />
                        <Input type="text" id="car-plate" label="Placa" value={plate} setValue={setPlate} />
                        <Input type="color" id="car-color" label="Cor" value={color} setValue={setColor} />
                        <Button kind="primary">Cadastrar</Button>
                    </Form>
                </SectionForm>
                <SectionTable>
                    <Table>
                        <TableHead >
                            <TR>
                            <THImage>Imagem</THImage>
                            <TH>Marca | Modelo</TH>
                            <TH>Ano</TH>
                            <TH>Placa</TH>
                            <THColor>Cor</THColor>
                            <TH>Excluir</TH>
                            </TR>
                        </TableHead>
                        <TableBody>
                        {
                            cars.length > 0
                            && cars.map(car => (
                                <TR key={car.plate}>
                                    <TDImage>
                                        <TableImage src={car.image} alt={car.brandModel}/>
                                    </TDImage>
                                    <TD>{car.brandModel}</TD>
                                    <TD>{car.year}</TD>
                                    <TD>{car.plate}</TD>
                                    <TDColor>
                                        <ColorDiv bgColor={car.color}>
                                            {car.color}
                                        </ColorDiv>
                                    </TDColor>
                                    <TDActions>
                                        <Button kind="secundary" onClick={() => deleteData(car.plate)}>
                                            <ActionImage src="/trash.svg" />
                                        </Button>
                                    </TDActions>
                                </TR>
                            ))
                        }
                        </TableBody>
                    </Table>
                    {cars.length === 0 && (
                        <TDEmpty>
                            Nenhum veículo para exibição
                        </TDEmpty>
                    )}
                </SectionTable>
                {message && <MessageBox message={message} type="alert" confirmAction={() => setMessage('')}/>}
            </Main>
        </>
    )
}
export default App

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`
const Main = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: stretch;
    background: linear-gradient(45deg, #000, #252525);
    min-height: 100vh;
    color: #777;
`
const SectionForm = styled.div`
    width: 100%;
`
const Image = styled.img`
    width: 100px;
    margin: 0 auto;
    padding: 50px 0 0 0;
    display: block;
`
const FormTitle = styled.h1`
    text-align: center;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
    margin: 25px 0 5px 0;
`
const FormDescription = styled.p`
    text-align: center;
    margin: 0;
`
const Form = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    padding: 20px;
    `
const SectionTable = styled.section`
    width: 100%;

`
const Table = styled.table`
    margin: 50px;
    overflow:hidden;
    border-collapse:collapse;
    border-radius: 10px;
    font-family: Arial, Helvetica, sans-serif;
`
const TableHead = styled.thead`
    font-weight: 100;
    color: #fff;
    background: #f36;
`
const TH = styled.th`
    padding: 20px 10px;
`
const THImage = styled.th`
    padding: 20px 10px;
    width: 200px;
`
const THColor = styled.th`
    padding: 20px 10px;
    width: 80px;
`
const TR = styled.tr`
    border-bottom: 5px solid #181818;
`
const TableBody = styled.tbody`

`
const TD = styled.td`
    background: #303030;
    text-align: center;
    margin: 10px;
    height: 120px;
    padding: 0 5px;
    color: #fff;
    text-transform: uppercase;
`
const TDImage = styled.td`
    background: #303030;
    margin: 10px;
    height: 120px;
    color: #fff;
    text-transform: uppercase;
    text-align: left;
    padding: 5px 5px 0 5px;
`
const TableImage = styled.img`
    height: 120px;
    width: 200px;
    border-radius: 10px;
    object-fit: cover;
`
const TDColor = styled.td`
    background: #303030;
    text-align: center;
    margin: 10px;
    height: 120px;
    padding: 0;
    color: #fff;
    text-transform: uppercase;
`
const ColorDiv = styled.div<StyledDiv>`
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    color: #fff;
    background-color:${(props) => props.bgColor}
`
const TDActions = styled.td`
    background: #303030;
    text-align: center;
    margin: 10px;
    height: 120px;
    color: #fff;
    text-transform: uppercase;    
    width: 15px;
    padding: 10px;
`
const ActionImage = styled.img`
    width: 20px;
    height: 20px;
`
const TDEmpty = styled.p`
    height: 100px;
    text-align: center;
`