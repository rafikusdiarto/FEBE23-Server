const express = require('express')
const router = express.Router();
const partnerController = require("../../controllers/partnersController")

router.get('/', partnerController.getPartners);
router.get('/:id', partnerController.getPartnersById)
router.post('/add-partner', partnerController.createPartner)
router.patch('/edit-partner/:id', partnerController.updatePartner)
router.delete('/:id', partnerController.deletePartner)

module.exports = router;
