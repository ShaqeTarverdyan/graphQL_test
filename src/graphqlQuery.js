import client from './client';
 const gQLfetch = (query) => {
    const data = client.query({ query: query })
    return {
        type:'gQL_FETCH',
        payload:new Promise((resolve, reject) => {
            data.then(response => resolve(response)).catch(error => reject(error))
        })
    }
}
export default gQLfetch;