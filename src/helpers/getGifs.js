export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=uIU5z1K6juO9JOAwcvw3cJMg6SCgZ0wn`
    const response = await fetch(url)
    if (!response.status) {
        return
    }
    const {data} = await response.json()
    const gifs = data.map(img => {
        return {
            id : img.id,
            title : img.title,
            url : img.images.downsized_medium.url
        }
    })
    return gifs
}