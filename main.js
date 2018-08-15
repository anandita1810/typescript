var YoutubeVideo = /** @class */ (function () {
    function YoutubeVideo(video_title, no_of_views, screensize, mode) {
        var _this = this;
        this.getviews = function () {
            return _this.noofviews;
        };
        this.gettitle = function () {
            return _this.title;
        };
        this.getscreensize = function () {
            return _this.screensize;
        };
        this.getmode = function () {
            return _this.mode;
        };
        this.title = video_title;
        this.noofviews = no_of_views;
        this.screensize = screensize;
        this.mode = mode;
    }
    return YoutubeVideo;
}());
var Video = new YoutubeVideo("latesthindisongs", 20, "fullscreen", "TheaterMode");
var vs = Video.getviews();
var t = Video.gettitle();
var s = Video.getscreensize();
var m = Video.getmode();
console.log(vs);
console.log(t);
console.log(s);
console.log(m);
