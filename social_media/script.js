var FacebookProfile = /** @class */ (function () {
    function FacebookProfile(id, name, age, about, friends, intro, dob, phoneNo, email, workplace, education, homeTown, photos, videos, checkIns, sports, likes) {
        var _this = this;
        //end of constructor
        //getters
        this.getId = function () {
            return _this.id;
        };
        this.getName = function () {
            return _this.name;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getAbout = function () {
            return _this.dob;
        };
        this.getFriends = function () {
            return _this.friends;
        };
        this.getIntro = function () {
            return _this.intro;
        };
        this.getPhoneNo = function () {
            if (_this.phoneNo) {
                return _this.phoneNo;
            }
            else
                return null;
        };
        this.getEmail = function () {
            if (_this.email) {
                return _this.email;
            }
            else
                return null;
        };
        this.getWorkPlace = function () {
            if (_this.workPlace) {
                return _this.workPlace;
            }
            else
                return null;
        };
        this.getEducation = function () {
            if (_this.education) {
                return _this.education;
            }
            else
                return null;
        };
        this.getHomeTown = function () {
            if (_this.homeTown) {
                return _this.homeTown;
            }
            else
                return null;
        };
        this.getDob = function () {
            return _this.dob;
        };
        this.getHometown = function () {
            if (_this.homeTown) {
                return _this.homeTown;
            }
            else
                return null;
        };
        this.getPhotos = function () {
            if (_this.photos) {
                return _this.photos;
            }
            else
                return null;
        };
        this.getVideos = function () {
            if (_this.videos) {
                return _this.videos;
            }
            else
                return null;
        };
        this.getCheckIn = function () {
            if (_this.checkIns) {
                return _this.checkIns;
            }
            else
                return null;
        };
        this.getSport = function () {
            if (_this.sports) {
                return _this.sports;
            }
            else
                return null;
        };
        this.getLikes = function () {
            if (_this.likes) {
                return _this.likes;
            }
            else
                return null;
        };
        this.id = id;
        this.name = name;
        this.age = age;
        this.about = about;
        this.friends = friends;
        this.intro = intro;
        this.phoneNo = phoneNo;
        this.email = email;
        this.workPlace = workplace;
        this.education = education;
        this.dob = dob;
        this.homeTown = homeTown;
        this.photos = photos;
        this.videos = videos;
        this.checkIns = checkIns;
        this.sports = sports;
        this.likes = likes;
    }
    return FacebookProfile;
}());
var Vinay = new FacebookProfile(123, "Vinay Varshney", 23, "Hungry to Learn", 608, [
    {
        Works_At: "HCL Technologies",
        Studied_At: "SRMCEM LKO",
        Went_To: "SMS, Lucknow",
        Lives_In: "Noida",
        From: "Lucknow",
        Followed_By: "31 People"
    }
], "15/10/1994", 1232134234, "vinay.varshney28@gmail.com", "HCL Technologies", ["SRMCEM", "SMS"], "Lucknow", ["https://scontent.fdel12-1.fna.fbcdn.net/v/t1.0-9/21151293_10207620898720422_7873210199047068834_n.jpg?_nc_cat=0&oh=dfff912cccbbfd22785eb716fcd71f5a&oe=5B291D4A", "https://scontent.fdel12-1.fna.fbcdn.net/v/t1.0-9/21151521_10207620898640420_3044602899231202680_n.jpg?_nc_cat=0&oh=c928b35f33541337f1634171eda9f6bd&oe=5B5DDC1F"], ["https://www.youtube.com"], ["Royal Cafe", "Local @ CP", "Dunkin Doughnuts", "Dominos"], ["Cricket", "Football", "Table Tennis"], ["Music", "Latest Technologies"]);
//displaying info 
console.log("Profile Id : ", Vinay.getId());
console.log("Profile Name : ", Vinay.getName());
console.log("Age : ", Vinay.getAge());
console.log("About Me : ", Vinay.getAbout());
console.log("Total Friends : ", Vinay.getFriends());
console.log("Intro : ", Vinay.getIntro());
console.log("Phone Number : ", Vinay.getPhoneNo());
console.log("Email Id : ", Vinay.getEmail());
console.log("WorkPlace : ", Vinay.getWorkPlace());
console.log("Education : ", Vinay.getEducation());
console.log("BirthDay : ", Vinay.getDob());
console.log("Hometown : ", Vinay.getHometown());
console.log("Photos : ", Vinay.getPhotos());
console.log("Videos : ", Vinay.getVideos());
console.log("Recent CheckIns : ", Vinay.getCheckIn());
console.log("Sports : ", Vinay.getSport());
console.log("Likes : ", Vinay.getLikes());
