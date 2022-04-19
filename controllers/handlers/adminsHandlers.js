
const admins = require('../../database/adminsDB')
const jwt = require ('jsonwebtoken')

const getAdminsHandler = (req, resp) => resp.send(admins)


const registerAdminHandler = (req, resp) => {

    const {username, email, password} = req.body // destruntring body

    admins.push({
        id: admins.length + 1,
        email,
        username,
        password
    })

    return resp.send('Created!')
}

const loginAdminHandler = (req, resp) =>{

    const {username, password} = req.body

    const admin = admins.filter( admin => admin.username === username)

    if(!admin) return resp.send('Admin doesnt exist!')

     // check if password is correct
  if (password !== admin.password) {
    return resp.send('Invalid credentials');
  }


    // sign a token
    jwt.sign(
        { id: admin.id },
        'my_jwt_secret',
        { expiresIn: 3 * 86400 },
        (err, token) => {
          if (err) resp.status(500).send(new Error(err));
    
          return resp.send({ token });
        }
      );

}
module.exports = {

  getAdminsHandler,
  registerAdminHandler,
  loginAdminHandler

}