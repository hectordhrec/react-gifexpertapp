import { shallow } from 'enzyme'
import { GifExpertApp } from '../GifExpertApp'

describe('Probando el componente <GifExpertApp />', () => {
    
    test('Debe renderizarse correctamente', () => {
        
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de mostrar una lista de categorias', () => {
        
        const categories = ['rick and morty', 'Friends'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    });
    
    
});
