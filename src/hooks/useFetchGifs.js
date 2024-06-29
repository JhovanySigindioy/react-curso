import { useEffect, useState } from "react";
import { GetGif } from "../helpers/GetGif";

const useFetchGifs = (category) => {

    const [gif, setGif] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        GetGif(category)
            .then((gifsJson) => {
                setGif([...gifsJson]);
                setIsLoading(false);
            });
    }, []);

    return {
        gif,
        isLoading,
    }
};

export {
    useFetchGifs,
}
