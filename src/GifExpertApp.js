import React, { useState } from 'react'
import {  } from "module";
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// export const GifExpertApp = () => { //++Normal
export const GifExpertApp = ({defaultCategories = []}) => { // para las pruebas

    //const [categories, setCategories] = useState(['Rick and Morty']); //++Normal
    const [categories, setCategories] = useState(defaultCategories); // para las pruebas

    // const handleAdd = () => {
    //     // setCategories([...categories, 'South Park']);
    //     /** Otra forma: setCategories recibe un callback donde el primer valor es el estado anterior y luego regresa el nuevo estado*/
    //     setCategories(categories => ['South Park', ...categories]);
    // }

    return (
        <>
            <h1>GiftExpertApp</h1>
            <AddCategory setCategories ={ setCategories } />
            <hr/>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>{categories.map( category => (
                <GifGrid key={category} category={category} />
            ))}</ol>
        </>
    );
}

