import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe('Pruebas a <GifGridItem />', () => {

    const props = {
        title : 'Ejemplo',
        url : 'https://localhost:5050'
    }

    const wrapper = shallow(<GifGridItem {...props} />);

    test('debe renderizar el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('debe tener un párrafo con el title', () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(props.title);
    });

    test('debe de tener la imagen con url y alt igual al de las props', () => {
        const img = wrapper.find('img');
        // console.log(img.props());
        // console.log(img.prop('alt'));

        expect(img.props().alt).toBe(props.title);
        expect(img.props().src).toBe(props.url);
    });

    test('debe de tener la clase animate__fadeIn', () => {
        const div = wrapper.find('div');
        // console.log(div.props());
        expect(div.prop('className').includes('animate__fadeIn')).toBe(true)
    });
    
    
    
    
});
