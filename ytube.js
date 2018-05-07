var Youtube = /** @class */ (function () {
    function Youtube(video, title, views, subscribtion, share, like, dislike, download, youtuber) {
        var _this = this;
        //method used to accesses the outside the world//
        this.getSong = function () {
            return _this.video;
        }; //ed of getsong method//
        this.getOutput = function () {
            return _this.views;
        }; //end of function
        this.getTitle = function () {
            return _this.title;
        }; //end of getter method//
        this.getShare = function () {
            return _this.share;
        }; //end of getter method//
        this.setShare = function (_share) {
            _this.share = _share;
        }; //end of setter method//
        this.getName = function () {
            return _this.youtuber;
        }; //end of getter method//
        this.video = video;
        this.title = title;
        this.views = views;
        this.subscribtion = subscribtion;
        this.share = share;
        this.like = like;
        this.dislike = dislike;
        this.download = download;
        this.youtuber = youtuber;
    } //end of constructor class1
    return Youtube;
}()); //end of Main class//
var user = new Youtube('Album_song', 'Sorry', 2000000, 50000, 'please share this video', 10000, 200, 20000, 'Justin Bieber');
console.log('video type : ' + user.getSong());
console.log('No of views : ' + user.getOutput());
//getter method//
console.log('Title of Song :' + user.getTitle());
//setter method//
user.setShare('Like and share the video');
//print the modified method//
console.log('Youtuber Requsting to all:' + user.getShare());
console.log('Youtuber : ' + user.getName());
