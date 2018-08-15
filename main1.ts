
class SocialProfile {
    Birthday: String;
    Gender: String;
    Education: String;
    WorkDetails: String;
    constructor(birthday: String, gender: String, education: String, work: String)
    {
        this.Birthday=birthday
        this.Gender=gender
        this.Education=education
        this.WorkDetails=work
    }
    getbirthday = ()=>{
        return  this.Birthday
    }
    getgender = ()=>{
        return this.Gender
    }
    geteducation = ()=>{
        return this.Education
    }
    getwork = ()=>{
        return this.WorkDetails
    }
}
    let Profile=new SocialProfile("10/11/1987","Female","M.Tech","AST")
    let b=Profile.getbirthday()
    let g=Profile.getgender()
    let e=Profile.geteducation()
    let w=Profile.getwork()
    console.log(b)
    console.log(g)
    console.log(e)
    console.log(w)