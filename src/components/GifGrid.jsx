import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";


const GifGrid = ({ category }) => {
    const { gif, isLoading } = useFetchGifs(category);

    return (
        <>

            <h3>{category}</h3>
            {
                isLoading ?? (<h2 >Cargando...</h2>)
            }
            <div className="card-grid">
                {
                    gif.map((arrGif) => {
                        return (
                            <>

                                <GifGridItem
                                    key={arrGif.id}
                                    {...arrGif}
                                />
                            </>

                        )
                    })
                }
            </div>
        </>
    );
};

export {
    GifGrid,
};