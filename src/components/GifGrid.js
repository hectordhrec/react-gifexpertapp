import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);

    /** Al colocar la categoría como dependencia, cada vez que la categoría cambie se va a ejecutar el useEffect */
    // useEffect(() => {
    //     getGifs(category).then(setImages);
    //     // getGifs().then(imgs => setImages(imgs)); // Otra forma
    // }, [category]);

    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="card animate__animated animate__fadeIn">{category}</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p>}
            <div className="card-grid">
                {images.map((img) => (
                    <GifGridItem
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
