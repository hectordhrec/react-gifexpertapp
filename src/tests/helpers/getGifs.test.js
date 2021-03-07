import { getGifs } from "../../helpers/getGifs"

describe('Pruebas a la función getGifs Fecth', () => {

    test('Debe de traer 10 elementos', async() => {
        const gifs = await getGifs('bojack');
        expect(gifs.length).toBe(10);
    });

    test('Debe de traer 0 elementos si no se le manda category', async() => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});
