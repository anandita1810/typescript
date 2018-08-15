class YoutubeVideo {
    title: String;
    noofviews: number;
    screensize: String;
    mode: String;
    constructor(video_title: String, no_of_views: number, screensize: String, mode: String)
    {
        this.title=video_title
        this.noofviews=no_of_views
        this.screensize=screensize
        this.mode=mode
    }
    getviews = ()=>{
        return  this.noofviews
    }
    gettitle = ()=>{
        return this.title
    }
    getscreensize = ()=>{
        return this.screensize
    }
    getmode = ()=>{
        return this.mode
    }
}
    let Video=new YoutubeVideo("latesthindisongs",20,"fullscreen","TheaterMode")
    let vs=Video.getviews()
    let t=Video.gettitle()
    let s=Video.getscreensize()
    let m=Video.getmode()
    console.log(vs)
    console.log(t)
    console.log(s)
    console.log(m)