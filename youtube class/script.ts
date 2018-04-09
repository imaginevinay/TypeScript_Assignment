class VideoMean {
    //creating basic properties for youtube video
    private videoID : number 
    private videoTitle : string
    private captions : string
    private views : number 
    private likes : number
    private dislikes : number
    private videoUrl : string
    private isPublic : boolean
    private channelName : string
    private isSubscribed : boolean
    private description : string
    private category : string
    private license : string
    private tags : string[]
    private comments : object[]
    private recommended : object[]

//constructor start

    constructor (videoID : number , videoTitle : string ,captions : string, views : number,likes : number,dislikes : number,videoUrl : string,isPublic : boolean,channelName : string,isSubscribed : boolean ,description : string,category : string,license : string,tags : string[],comments : object[],recommended : object[]){

        this.videoID = videoID
        this.videoTitle = videoTitle
        this.captions = captions
        this.views = views
        this.likes = likes
        this.dislikes = dislikes
        this.videoUrl = videoUrl
        this.isPublic = isPublic
        this.channelName = channelName
        this.isSubscribed = isSubscribed
        this.description = description
        this.category = category
        this.license = license
        this.tags = tags
        this.comments = comments
        this.recommended = recommended

    }// constructor end

    //creating methods for youtbe videos
    addViews = ()=>{
        this.views++
        console.log("%c One More watched" ,"color : blue");
    }

    addLikes = ()=>{
        this.likes++
        console.log("%c One New Like" , "color : blue");
    }
    addDislikes = ()=>{
        this.dislikes++;
        console.log("%c One new Dislike !" ,"color : blue");
    }
    addComments = (comments:object)=>{
        this.comments.push(comments);
        console.log("%c One new Comment" , "color:blue")
    }
    addToPlaylist = ()=>{
        console.log("Added this video to playlist");
    }

    //ending methods

    //getting access to the private data
    getVideoID = ()=>{
        return this.videoID
    }
    getVideoTitle = ()=>{
        return this.videoTitle
    }
    getVideoUrl = ()=>{
        return this.videoUrl
    }
    getCaptions = ()=>{
        return this.captions
    }
    getViews = ()=>{
        return this.views
    }
    getLikes = ()=>{
        return this.likes
    }
    getDislikes = ()=>{
        return this.dislikes
    }
    getIsPublic = ()=>{
        return this.isPublic
    }
    getChannelName = ()=>{
        return this.channelName
    }
    getSubscribed = ()=>{
        return this.isSubscribed
    }
    getDescription = ()=>{
        return this.description
    }
    getCategory = ()=>{
        return this.category
    }
    getLicense = ()=>{
        return this.license
    }
    getTags = ()=>{
        return this.tags
    }
    getComments = ()=>{
        return this.comments
    }
    getRecommended = ()=>{
        return this.recommended
    }

    //end of getters
}
//end of class youtube

let MeanStack = new VideoMean(
    12345,"Introduction to The Mean Stack Course", 
    "The Mean Stack Guide",22000,
    22,4,
    "https://youtu.be/PFP0oXNNveg",true,
    "Traversy Media",true,
    `In this video we will build a complete MEAN application from scratch. The MEAN stack includes MongoDB, Express, Angular and Node.js.`,
    "Science & Technology","Standard YouTube License",
    ["MEAN Stack","MEAN app", "MEAN Tutorial"],
[
    {
       userName : "Qwerty",
        comment : "Nice video",
        likes : 34,
        dislikes : 0,
        timestamp : 223462
    },
    {
        userName : "PeaceIn",
         comment : "Quick video",
         likes : 20,
         dislikes : 0,
         timestamp : 889893
     }

],
[
    {videoId : 1231723987},
    {videoId : 1371289379}
])
//end of new 

//displaying the output
console.log("Video ID : " ,MeanStack.getVideoID());
console.log( "Video Title : " ,MeanStack.getVideoTitle())
console.log("Video URL : " ,MeanStack.getVideoUrl());
console.log("Captions : ",MeanStack.getCaptions())
console.log("Total Views : ",MeanStack.getViews())
console.log("Likes : ",MeanStack.getLikes())
console.log("Dislikes : ",MeanStack.getDislikes())
console.log("Video Public : ",MeanStack.getIsPublic())
console.log("Channel Name : " ,MeanStack.getChannelName())
console.log("Video Subscribed  :  ",MeanStack.getSubscribed())
console.log("Description : ",MeanStack.getDescription())
console.log("Category : ", MeanStack.getCategory())
console.log("License : ",MeanStack.getLicense())
console.log("Tags : ",MeanStack.getTags())
console.log("Comments : ",MeanStack.getComments())
console.log("Recommended : ",MeanStack.getRecommended())

//changing the values by using methods

MeanStack.addViews()
MeanStack.addLikes()
MeanStack.addDislikes()
MeanStack.addComments({
        userName : "Benzo",
        comment : "New video is up",
        likes : 39,
        dislikes : 0,
        timestamp : 1256732

})

//displaying the upadted values

console.log(" %c Updated Values ", "color :green ; font-family : sans-serif ; font-size : 20px; font-weight : 700")
console.log("Video ID : " ,MeanStack.getVideoID());
console.log( "Video Title : " ,MeanStack.getVideoTitle())
console.log("Video URL : " ,MeanStack.getVideoUrl());
console.log("Captions : ",MeanStack.getCaptions())
console.log("Total Views : ",MeanStack.getViews())
console.log("Likes : ",MeanStack.getLikes())
console.log("Dislikes : ",MeanStack.getDislikes())
console.log("Is the video Public ? ",MeanStack.getIsPublic())
console.log("Channel Name : " ,MeanStack.getChannelName())
console.log("Is the video Subscribed ? ",MeanStack.getSubscribed())
console.log("Description : ",MeanStack.getDescription())
console.log("Category : ", MeanStack.getCategory())
console.log("License : ",MeanStack.getLicense())
console.log("Tags : ",MeanStack.getTags())
console.log("Comments : ",MeanStack.getComments())
console.log("Recommended : " ,MeanStack.getRecommended())

//end of youtube video assignment


