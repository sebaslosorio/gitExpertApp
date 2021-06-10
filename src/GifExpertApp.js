import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export default function GifExpertApp() {

    const [categories, setCategories] = useState(['One Punch'])

    // const addCategory = () => {
    //     // forma de agregar datos a un arreglo con operador spread
    //     setCategories([...categories, "Pokemon"])
    //     // Otra forma es usando el callback el cual el primer argummento es el estado anteriror de setCategories
    //     // setCategories( cate => [...categories, newCategory])
    //     // Las dos formas es valida.
    // }

    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    ))
                }
            </ol>
        </div>
    )
}
