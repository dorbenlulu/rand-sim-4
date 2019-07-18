import axios from 'axios'

class HttpService {
    constructor( baseURL, headers = {} ) {
        this.axiosInstance = axios.create( {
            baseURL,
            timeout: 5000,
            headers
        } )
    }
}

export default function ( baseURL, headers = {} ) {
    const service = new HttpService( baseURL, headers )

    return service.axiosInstance
}
