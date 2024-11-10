import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  insertedAt: { type: Date, default: Date.now },  // זמן הקליק
  ipAddress: { type: String} ,
  targetParamValue:{type: String} 
});


const LinkSchema = new mongoose.Schema({
  originalUrl: {type: String,default: "new link" },
  clicks:  [ClickSchema],
  targetParamName:{type: String,default:"t"},
  targetParamValue:[{name:{type: String, default:"target"},
                     value:{type:Number, required: true,default:0} }]
});


const Link = mongoose.model("Link", LinkSchema);

// פונקציה שמעדכנת לינק ומוסיפה קליק חדש
const updateLinkAndAddClick = async (id,ip,target) => {
  try {
    const link = await Link.findById(id);
    if (!link) {
      throw new Error("Link not found");
    }
    link.clicks.push({insertedAt:Date.now(), ipAddress:ip,targetParamValue:target});

    const targetIndex = link.targetParamValue.findIndex(param => param.name == target);
   
    if (targetIndex !== -1) {
      link.targetParamValue[targetIndex].value += 1;
    } else {
      link.targetParamValue.push({ name: target, value: 1 });
    }

    await link.save();

  

  } catch (error) {
    console.error(error);
    throw error;
  }}

  export { Link, updateLinkAndAddClick}
export default mongoose.model("link", LinkSchema);
