import React, {useState} from 'react'
import './Compilation.scss'

function getCompile() {
    return new Promise(async (resolve, reject) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json()
            const list = await data.map(item =>
                <div className="list-item" key={item.id}>
                    <h1>{item.title}</h1>
                </div>
            );
            resolve(list)
        } catch(e) {
            throw new Error({ message: 'Can`t get data from url' })
        }
    })
}

export default function Compilation() {
    const [list, setList] = useState(null)

    if(list === null) {
        getCompile().then(films => setList(films))
    }

    return (
        <>
            <div className="films-list">{list ?? 'Not correct data'}</div>
        </>
    )
}