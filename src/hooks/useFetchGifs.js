import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /** Al colocar la categoría como dependencia, cada vez que la categoría cambie se va a ejecutar el useEffect */
    useEffect(() => {
        getGifs(category).then(imgs => {
            setState({
                data: imgs,
                loading: false
            });
        });
    }, [category]);

    return state;
}