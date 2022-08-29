exports.getHome = (req, res) => {
    res.status(200).render('home')
}

exports.postHome = async (req, res) => {

    const { search } = req.body
    if (search.length == 36) {
        return res.status(200).redirect(`/items/${search}`)
    }
    else if (search.length >= 3 && search.length <= 16) {
        return res.status(200).redirect(`/players/${search}`)
    }
    else () => {
        return res.status(200).redirect('/')
    }

    


}
