import LinkModel from "../Models/LinkModel.js";
const AdvertiserController = {
  getById: async (req, res) => {
    const link = await LinkModel.findById(req.params.id);
    console.log(link);
    
      if (!link) {
        throw new Error("Link not found");
      }
      else{
         res.json(link.targetParamValue);
      }
     
  }
};
export default AdvertiserController
  
  