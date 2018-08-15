var SocialProfile = /** @class */ (function () {
    function SocialProfile(birthday, gender, education, work) {
        var _this = this;
        this.getbirthday = function () {
            return _this.Birthday;
        };
        this.getgender = function () {
            return _this.Gender;
        };
        this.geteducation = function () {
            return _this.Education;
        };
        this.getwork = function () {
            return _this.WorkDetails;
        };
        this.Birthday = birthday;
        this.Gender = gender;
        this.Education = education;
        this.WorkDetails = work;
    }
    return SocialProfile;
}());
var Profile = new SocialProfile("10/11/1987", "Female", "M.Tech", "AST");
var b = Profile.getbirthday();
var g = Profile.getgender();
var e = Profile.geteducation();
var w = Profile.getwork();
console.log(b);
console.log(g);
console.log(e);
console.log(w);
