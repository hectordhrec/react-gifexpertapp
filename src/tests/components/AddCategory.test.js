import { AddCategory } from "../../components/AddCategory";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";

describe('Pruebas en el componente <AddCategory />', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    
    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories = { setCategories } />);
    });
    
    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
    test('debe de cambiar la caja de texto', () => {
        const input = wrapper.find('input');

        const value = 'Hola mundo';
        input.simulate('change', { target: { value }});

        expect(wrapper.find('p').text().trim()).toBe(value);
    });

    test('No debe de postear con Submit', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        expect(setCategories).not.toHaveBeenCalled();
    });

    test('Debe de llamar setCategories y limpiar la caja de texto', () => {
        const input = wrapper.find('input');
        const value = 'casa';
        // 1. simular el inputChange
        input.simulate('change', { target: { value }});

        // 2. simular el submit
        wrapper.find('form').simulate('submit', {preventDefault(){}});

        // 3. setCategories se debe haber llamado
        expect(setCategories).toHaveBeenCalled();
        // expect(setCategories).toHaveBeenCalledTimes(1); // para verificar que solo se haya ejecutado 1 vez en este caso
        // expect(setCategories).toHaveBeenCalledWith(expect.any(Function)); // para verificar que solo se haya ejecutado mandandole cualquier tipo de función

        // 4. el valor del input debe ser ''
        expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
    
});
