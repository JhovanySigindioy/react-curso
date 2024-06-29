const GetGif = async (category) => {
    const apikey = '9UiW5CH5tytFQm56PKnRahKJI6iDFwew'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${category}&limit=10`
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium?.url,
        }
    });
    return gifs;
};

export {
    GetGif,
};