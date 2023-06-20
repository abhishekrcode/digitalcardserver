import User from "../models/user.js";




const UpdateInformation = async(request,response) => {
    try{
        console.log(typeof request.body);
        

        const data = await User.findByIdAndUpdate(request.query.id,{imageurl:request.body});

        return response.status(200).json(data.imageurl)

    }catch(error){
     console.log(error)
    }
    

}


export default UpdateInformation;


