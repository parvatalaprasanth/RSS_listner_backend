const {searchValue}=require('../helper/Elasticfirst')






exports.rss_search = async (request, h) => {
    {   
        console.log(request.payload.value)
        const result=await searchValue(request.payload.value)
        return result
    }

}