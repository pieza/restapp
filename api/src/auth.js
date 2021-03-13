// Pass this function to protect the GET URLs as a second param
module.exports = {
  ensureAuthenticated: (req,res,next) => {
      if(req.isAuthenticated()){
          return next();
      }
      res.send("No Autenticado")
  }
  }
