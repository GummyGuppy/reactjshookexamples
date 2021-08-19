import React from 'react'
import {useState} from 'react'

export default function useStateExample() {

    const [name, setName] = useState('Foo')
    const [flag, setFlag] = useState(true)

    const [count, setCount] = useState(0)

    const [nameInput, setNameInput] = useState('')
    const [data, setData] = useState([])

    //handle FOO/BAR Button
    const handleClick = () => {
        
        if(flag){
            setName('Bar')
            setFlag(false)
        }
        else {
            setName('Foo')
            setFlag(true)
        }

    }

    //Handle Increment Button
    const increment = () => {
        //setCount(count + 1)
        setCount((prevCount) => prevCount + 1)
    }

    //Handle Decrement Button
    const decrement = () => {
        //setCount(count - 1)
        setCount((prevCount) => prevCount - 1)
    }

    //Handle Submit Button
    const handleSubmit = () => {
        setData([...data, nameInput])
        setNameInput('')
    }

    return (

        <div>
            <h1>Implementation of the useState Hook</h1>
            <h3>Hello {name}</h3>
            <button onClick={handleClick}>CLICK ME</button>
            <hr/>
            <button onClick={increment}>+</button>
            <h1>{count}</h1>
            <button onClick={decrement}>-</button>
            <hr/>
            <input onChange={(e) => setNameInput(e.target.value)} 
            value={nameInput}/>
            <button onClick={handleSubmit}>Submit</button>
            <ul>
                {data.map((val) => (
                    <li>{val}</li>
                ))}
            </ul>

        </div>
    )
}
