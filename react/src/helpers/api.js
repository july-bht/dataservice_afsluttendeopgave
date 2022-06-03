import axios from 'axios';

// BASEURL og apikey mv.
const api = {
    baseUrl: "http://localhost:5023/",
    apiKey: "",
}

export const aboutus = () => {

    let endpoint = "aboutus/";

    let response = axios.get(api.baseUrl + endpoint)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log("FEJL", error)
            throw new Error("Desværre - der er opstået en fejl!") // Kast en fejl videre til næste step
        })

    return response;
}

export const services = () => {

    let endpoint = "services/";

    let response = axios.get(api.baseUrl + endpoint)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log("FEJL", error)
            throw new Error("Desværre - der er opstået en fejl!") // Kast en fejl videre til næste step
        })

    return response;
}

export const reviews = () => {

    let endpoint = "reviews/";

    let response = axios.get(api.baseUrl + endpoint)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log("FEJL", error)
            throw new Error("Desværre - der er opstået en fejl!") // Kast en fejl videre til næste step
        })

    return response;
}
export const galleryitems = () => {

    let endpoint = "galleryitems/";

    let response = axios.get(api.baseUrl + endpoint)
        .then(res => {
            return res.data
        })
        .catch(error => {
            console.log("FEJL", error)
            throw new Error("Desværre - der er opstået en fejl!") // Kast en fejl videre til næste step
        })

    return response;
}

