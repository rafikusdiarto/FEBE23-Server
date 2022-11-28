const express = require('express')
const router = express.Router();
const partnerController = require("../controllers/partnersController")

router.get('/partners', partnerController.getPartners);
router.get('/partners/:id', partnerController.getPartnersById)
router.post('/partners/add-partner', partnerController.createPartner)
router.patch('/partners/edit-partner/:id', partnerController.updatePartner)
router.delete('/partners/:id', partnerController.deletePartner)

module.exports = router;
