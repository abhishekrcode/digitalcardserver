import User from "../models/user.js";



export const SignupUser = async (request,response) =>{

    try{
        
        const newuser = new User(request.body);
        await newuser.save();
        return response.status(200).json({msg:"user saved sussecfully"})
    }catch(error){
       return  response.status(500).json(error.message)
    }

    

}

export const SigninUser = async(request,response)=>{
    let user = await User.findOne({ email: request.body.email}) ;
    if(!user){
        return response.status(400).json({msg:"Username does not match"});
    }
    
    try{
        let match = await User.findOne({password:request.body.password});
        if(match){
            return response.status(200).json({isSuccess:true,user:user});
        }

    }catch(error){
        return response.status(500).json(error.message);
    }
}

