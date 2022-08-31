const { Router } = require('express')
const controller = require('../../controllers/players/player')

const router = Router()



router
  .route('/*')
  .get(controller.getPlayers)
  .post(controller.postPlayers)

module.exports = router
