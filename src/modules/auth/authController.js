import User from '../../database/model/user';
import jwt from 'jsonwebtoken';

export class Authentication {
  static async register (req, res) {
    const { body: { username, email, password }} = req;
    const userDetails = { username, email, password };
    try{
      const user = await new User({ ...userDetails }).save();
      return res.status(201).json({
        success: true,
        message: 'You have successfully created an account',
        user
      })
    } catch (e) {
      return res.status(500).json({
        success: false,
        message: 'Something went wrong'
      })
    }
  }

  static async login(req, res) {
      const { body: {email: userEmail, password: userPassword }} = req;
      try {
        // Check if user exists
        const user = await User.findOne({email: userEmail});
        if(user) {
          //check password match
          const { password } = user;
          if( password === userPassword ) {
            const token = jwt.sign({email: userEmail}, 'shhhhh');
            return res.status(200).json({
              success: true,
              message: "You are now logged in",
              token,
            });
          }
          return res.status(401).json({
            success: false,
            message: "Username or email are incorrect"
          })
        }
        return res.status(401).json({
          success: false,
          message: "Username or email are incorrect"
        })

      } catch (e) {
        return res.status(500).json({
          success: false,
          message: "Something happened"
        })
      }
  }
}
