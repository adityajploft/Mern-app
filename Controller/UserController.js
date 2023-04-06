
const userModel = require("../Models/userModel")
// import registerSchema from '../Utill/validationSchema'  




// login callback

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // const res =  await registerSchema.validateAsync(req.body)
        console.log(res)
        const user = await userModel.findOne({ email, password })
        if (!user) {
            return res.status(404).send('User is not found')
        }
        
         res.status(200).json({
            success: true,
            user
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })

    }
}
// register callback
const registerController = async (req, res) => {
    try {
       const newUser = new userModel(req.body)
       
       await newUser.save()
    
       res.send(201).json({
        success:true,
        newUser

       })
    } catch (error) {
        res.status(400).json({
            success: false,
            error
        })

    }
}

module.exports = { loginController, registerController }