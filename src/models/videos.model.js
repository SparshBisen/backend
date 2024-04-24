// THE MODEL IS REFERRED FROM THE FOLLOWING LINK: https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import mongoose, {Schema} from "mongoose";

const videoSchema = new mongoose.Schema({
    videoFile: {
        type: String,    // cloudinary url
        requried: true    
    },
    thumbnails: {
        type: String,    
        requried: true 
    },
    title: {
        type: String,    
        requried: true 
    },
    discription: {
        type: String,    
        requried: true 
    },
    duration: {
        type: String,    // cloudinary url
        requried: true 
    },
    views: {
        type: SVGAnimatedNumberList,
        requried: true,
        default: 0
    },
    isPublished: {
        type:  Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

videoSchema.plugin(mongooseAggregatePaginate)

export const videos = mongoose.model("videos", videoSchema)