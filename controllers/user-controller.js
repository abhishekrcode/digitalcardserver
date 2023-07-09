import User from "../models/user.js";



export const SignupUser = async (request,response) =>{
    try{

        let user = await User.findOne({ email: request.body.email}) ;
        
        if(user){
            return response.status(200).json({msg:"Email Already exist",check:true});
        }else{
            
            try{
                
                const newuser = new User(request.body);
                await newuser.save();
                return response.status(200).json({msg:"user saved sussecfully",isSuccess:true})
            }catch(error){
                return  response.status(500).json(error.message)
            }
            
        }
    }catch (error){
        return  response.status(500).json({msg:error.message})
    }
    

}

export const SigninUser = async(request,response)=>{
    

        let user = await User.findOne({ email: request.body.email}) ;
        if(!user){
            return response.status(201).json({msg:"Email does not exist"});
        }else if(user.password!==request.body.password){
            return response.status(201).json({msg:"Password does not exist"});
        }
        
        try{
            let match = await User.findOne({password:request.body.password});
            if(match){
                return response.status(200).json({isSuccess:true,user:user});
            }
            
        }catch(error){
            return response.status(500).json({msg:error.message});
        }
    
    
    }
    
    