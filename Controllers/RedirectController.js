import LinkModel from "../Models/LinkModel.js";
import { updateLinkAndAddClick } from "../Models/LinkModel.js";
const RedirectController = {
  getById: async (req, res) => {
     try {
    //   console.log(req.headers['host']);
      updateLinkAndAddClick(req.params.id,req.headers['x-forwarded-for'],req.query.t|"0");
      const link = await LinkModel.findById(req.params.id).select("originalUrl");

     //-- .select("originalUrl clicks targetParamValue");////////
      if (!link) {
        throw new Error("Link not found");
      }
      res.redirect(link.originalUrl);
    } 
    catch (e) {
      res.status(400).json({ message: e.message });
    }
  }

};
export default RedirectController
  
  