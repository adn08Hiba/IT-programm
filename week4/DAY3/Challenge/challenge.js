class Video {
    constructor(title, uploader, time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    
    watch(){
        return`${this.uploader} watched all ${this.time} of ${this.title}.`;
    }
}

const video1 = new Video("squidGame", "hiba", "15h");
console.log(video1.watch());

const video2 = new Video("CSS Grid Tutorial", "Adam", "420");
console.log(video2.watch());

const videoData = [
    { title:"HTML basics", uploader:"sara", time:"300"},
    { title:"css tips", uploader:"aya", time:"450"},
    { title:"js intro", uploader:"nora", time:"380"},
    { title:"python start", uploader:"lana", time:"550"},
    { title:"react guide", uploader:"sina", time:"420"},
];

const videoInstance= [];
for (const data of videoData) {
    const video = new Video(data.title, data.uploader, data.time);
    videoInstance.push(video);
    console.log(video.watch());
}
