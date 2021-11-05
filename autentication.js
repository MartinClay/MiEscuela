const jwt = require("jsonwebtoken");

let verificarToken = (
   req, 
   res, 
   next
) => {
   let token = req.get("Authorization");

   jwt.verify(
      token, 
      "nemesis", 
      (
         err, 
         decoded
      ) => {
         if (err) {
            return res.status(401).json({
               ok: false,
               err
            });
         }
         next();
      });
};
module.exports = {
   verificarToken
};
