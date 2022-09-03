const { Router } = require('express')


const home = require('./home/home')
const item = require('./items/item')
const player = require('./players/player')

const {checkHttps} = require('../middlewares/middleware')

const router = Router()

router.use('/', home)
router.use('/items/', item)
router.use('/players/', player)

router.get('/discord', (req, res) => {
    res.redirect("https://discord.com/invite/bUE3r3Jckc")
})

router.get('*', (req, res) => {
    res.status(404).send('errors/404.ejs')
  })
  
module.exports = router
  