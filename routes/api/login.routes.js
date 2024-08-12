const router = require("express").Router() 
const Model = require("../../models/User");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  let foundUser
  try {
    foundUser = await Model.findOne({ where: { email: req.body.email } })
  } catch(err){
    res.status(500).json({ status: "error", payload: err.message })
  }
  
  if( !foundUser ){
    res.status(500).json({ status: "error", payload: err.message })
  
  } else {
    
    const validPassword = bcrypt.compare(req.body.password, foundUser.password)

    if( !validPassword ){
      res.status(500).json({ status: "error", payload: err.message })
    } else {

      // Send back the user info but without the password 
      const safeUser = {...foundUser.get({plain:true}), password: null } 

      res.json({ status: "success", payload: safeUser })
    }
    
  }
})


module.exports = router;