var VideoMean = /** @class */ (function () {
    //constructor start
    function VideoMean(videoID, videoTitle, captions, views, likes, dislikes, videoUrl, isPublic, channelName, isSubscribed, description, category, license, tags, comments, recommended) {
        var _this = this;
        //creating methods for youtbe videos
        this.addViews = function () {
            _this.views++;
            console.log("%c One More watched", "color : blue");
        };
        this.addLikes = function () {
            _this.likes++;
            console.log("%c One New Like", "color : blue");
        };
        this.addDislikes = function () {
            _this.dislikes++;
            console.log("%c One new Dislike !", "color : blue");
        };
        this.addComments = function (comments) {
            _this.comments.push(comments);
            console.log("%c One new Comment", "color:blue");
        };
        this.addToPlaylist = function () {
            console.log("Added this video to playlist");
        };
        //ending methods
        //getting access to the private data
        this.getVideoID = function () {
            return _this.videoID;
        };
        this.getVideoTitle = function () {
            return _this.videoTitle;
        };
        this.getVideoUrl = function () {
            return _this.videoUrl;
        };
        this.getCaptions = function () {
            return _this.captions;
        };
        this.getViews = function () {
            return _this.views;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getDislikes = function () {
            return _this.dislikes;
        };
        this.getIsPublic = function () {
            return _this.isPublic;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getSubscribed = function () {
            return _this.isSubscribed;
        };
        this.getDescription = function () {
            return _this.description;
        };
        this.getCategory = function () {
            return _this.category;
        };
        this.getLicense = function () {
            return _this.license;
        };
        this.getTags = function () {
            return _this.tags;
        };
        this.getComments = function () {
            return _this.comments;
        };
        this.getRecommended = function () {
            return _this.recommended;
        };
        this.videoID = videoID;
        this.videoTitle = videoTitle;
        this.captions = captions;
        this.views = views;
        this.likes = likes;
        this.dislikes = dislikes;
        this.videoUrl = videoUrl;
        this.isPublic = isPublic;
        this.channelName = channelName;
        this.isSubscribed = isSubscribed;
        this.description = description;
        this.category = category;
        this.license = license;
        this.tags = tags;
        this.comments = comments;
        this.recommended = recommended;
    } // constructor end
    return VideoMean;
}());
//end of class youtube
var MeanStack = new VideoMean(12345, "Introduction to The Mean Stack Course", "The Mean Stack Guide", 22000, 22, 4, "https://youtu.be/PFP0oXNNveg", true, "Traversy Media", true, "In this video we will build a complete MEAN application from scratch. The MEAN stack includes MongoDB, Express, Angular and Node.js.", "Science & Technology", "Standard YouTube License", ["MEAN Stack", "MEAN app", "MEAN Tutorial"], [
    {
        userName: "Qwerty",
        comment: "Nice video",
        likes: 34,
        dislikes: 0,
        timestamp: 223462
    },
    {
        userName: "PeaceIn",
        comment: "Quick video",
        likes: 20,
        dislikes: 0,
        timestamp: 889893
    }
], [
    { videoId: 1231723987 },
    { videoId: 1371289379 }
]);
//end of new 
//displaying the output
console.log("Video ID : ", MeanStack.getVideoID());
console.log("Video Title : ", MeanStack.getVideoTitle());
console.log("Video URL : ", MeanStack.getVideoUrl());
console.log("Captions : ", MeanStack.getCaptions());
console.log("Total Views : ", MeanStack.getViews());
console.log("Likes : ", MeanStack.getLikes());
console.log("Dislikes : ", MeanStack.getDislikes());
console.log("Video Public : ", MeanStack.getIsPublic());
console.log("Channel Name : ", MeanStack.getChannelName());
console.log("Video Subscribed  :  ", MeanStack.getSubscribed());
console.log("Description : ", MeanStack.getDescription());
console.log("Category : ", MeanStack.getCategory());
console.log("License : ", MeanStack.getLicense());
console.log("Tags : ", MeanStack.getTags());
console.log("Comments : ", MeanStack.getComments());
console.log("Recommended : ", MeanStack.getRecommended());
//changing the values by using methods
MeanStack.addViews();
MeanStack.addLikes();
MeanStack.addDislikes();
MeanStack.addComments({
    userName: "Benzo",
    comment: "New video is up",
    likes: 39,
    dislikes: 0,
    timestamp: 1256732
});
//displaying the upadted values
console.log(" %c Updated Values ", "color :green ; font-family : sans-serif ; font-size : 20px; font-weight : 700");
console.log("Video ID : ", MeanStack.getVideoID());
console.log("Video Title : ", MeanStack.getVideoTitle());
console.log("Video URL : ", MeanStack.getVideoUrl());
console.log("Captions : ", MeanStack.getCaptions());
console.log("Total Views : ", MeanStack.getViews());
console.log("Likes : ", MeanStack.getLikes());
console.log("Dislikes : ", MeanStack.getDislikes());
console.log("Is the video Public ? ", MeanStack.getIsPublic());
console.log("Channel Name : ", MeanStack.getChannelName());
console.log("Is the video Subscribed ? ", MeanStack.getSubscribed());
console.log("Description : ", MeanStack.getDescription());
console.log("Category : ", MeanStack.getCategory());
console.log("License : ", MeanStack.getLicense());
console.log("Tags : ", MeanStack.getTags());
console.log("Comments : ", MeanStack.getComments());
console.log("Recommended : ", MeanStack.getRecommended());
//end of youtube video assignment
