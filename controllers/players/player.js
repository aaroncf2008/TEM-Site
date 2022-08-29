exports.getItems = async (req, res) => {
    const params = req.params

    if (params[0].length >= 3 && params[0].length <= 16) {
        const { search } = req.body
        return res.status(200)
    }
    else () => {
        return res.status(200).redirect(`/`)
    }
    
    res.status(200).render('players/player',{
        search: params[0]
    
    })
}

exports.postItems = async (req, res) => {

}
