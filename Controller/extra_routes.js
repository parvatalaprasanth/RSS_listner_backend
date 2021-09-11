exports.lost = (request, h) => {
    return "hello you must be lost"
}

exports.test = (request, h) => {
    // console.log("hi")
    //console.log(request.state.session)
    return "hello test"
}

exports.general=(request, h) => {
    // console.log("hi")
    return "please login welcome"
}