
/* 
 * This pure function takes a url string and a list of query params and 
 * returns a new url string with the given query params appended 
 */
export const add_query_params = ( url, query_parms=[] ) => {
    let newUrl = ""
    newUrl = newUrl.concat(url)
    newUrl = newUrl.concat("?")

    query_parms.forEach( (param, index) => {
        newUrl = newUrl.concat(param['key'])
        newUrl = newUrl.concat("=")
        newUrl = newUrl.concat(param['value'])
        if(index<query_parms.length-1){
            newUrl = newUrl.concat("&")
        }
    })

    return newUrl
}