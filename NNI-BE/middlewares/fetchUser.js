
import jsonwebtoken from "jsonwebtoken";

const fetchUser = (req, res, next)=>{
    //get the user from the jwt token and add id to request object
    let token = req.header('Authorization');
    token = token.split(" ")[1]
    console.log(token, "++++++++++++++++++++++++++++++++++++")
    if(!token){
        res.status(401).send({error: 'Please authenticate using a valid token'})
    }
    try { 
        const data = jsonwebtoken.verify(token, "shhhh"); // Replace with your secret key
        console.log('Decoded token data:', data); // Log for debugging
        req.user = data;
        next();
      } catch (err) {
        console.error('Error verifying token:', err); // Log error for debugging
        return res.status(401).send({ error: 'Please authenticate using a valid token' });
      }
    };

export default fetchUser