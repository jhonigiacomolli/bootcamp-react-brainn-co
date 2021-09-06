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
        <main className="container">
            <section className="form-container">
                <img src="/logo.svg" alt="logomarca" />
                <h1>Brainn Store</h1>
                <p className="desc">Gerenciamento de estoque de veículos</p>
                <form className="form-cars" onSubmit={handleSubmit}>
                    <Input type="url" id="car-url" label="Imagem (URL)" value={url} setValue={setUrl} />
                    <Input type="text" id="car-model" label="Marca | Modelo" value={model} setValue={setModel} />
                    <Input type="number" id="car-year" label="Ano" value={year} setValue={setYear} />
                    <Input type="text" id="car-plate" label="Placa" value={plate} setValue={setPlate} />
                    <Input type="color" id="car-color" label="Cor" value={color} setValue={setColor} />
                    <Button kind="primary">Cadastrar</Button>
                </form>
            </section>
            <table className="table-container" cellSpacing={0}>
                <thead >
                    <th className="head-image">Imagem (url)</th>
                    <th>Marca | Modelo</th>
                    <th>Ano</th>
                    <th>Placa</th>
                    <th className="head-color">Cor</th>
                    <th>Excluir</th>
                </thead>
                <tbody className="table-data">
                {
                    cars.length > 0
                    ? cars.map(car => (
                        <tr>
                            <td className="car-image"><img src={car.image} alt={car.brandModel}/></td>
                            <td>{car.brandModel}</td>
                            <td>{car.year}</td>
                            <td>{car.plate}</td>
                            <td><div className="car-color" style={{background: car.color}}>{car.color}</div></td>
                            <td className="car-actions"><Button kind="secundary" onClick={() => deleteData(car.plate)}><img src="/trash.svg"></img></Button></td>
                        </tr>
                    ))
                    : <td className="empty-row" colSpan={6} >Nenhum veículo para exibição</td>
                }
                </tbody>
            </table>
            {message && <MessageBox message={message} type="alert" confirmAction={() => setMessage('')}/>}
        </main>
    )
}
export default App