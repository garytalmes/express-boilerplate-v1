const router = require("express").Router() 
const Model = require("../../models/User")


router.get("/", async (req, res) => {
  try {
    const response = await Model.findAll({})
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.get("/:id", async (req, res) => {
  try {
    const response = await Model.findByPk(req.params.id)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.post("/", async (req, res) => {
  try {
    const response = await Model.create(req.body)
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.put("/:id", async (req, res) => {
  try {
    const response = await Model.update(req.body, { where: { id: req.params.id } })
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


router.delete("/:id", async (req, res) => {
  try {
    const response = await Model.destroy({ where: { id: req.params.id } })
    res.json({ status: "success", payload: response })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
})


module.exports = router;