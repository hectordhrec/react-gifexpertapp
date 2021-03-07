import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Probando el custom hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('bojack') );
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true);
    });

    test('Debe de retornar un arreglo de imagenes y loading=false', async() => {
        /**
         * waitForNextUpdate es una función que regresa una promesa<void>
         * que va a indicar cuando ocurra un cambio en el estado del custom hook
         */
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('bojack') );
        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false);
    });
    
    
});
