class Youtube{
   public video : string;
   private title  : string;
   public views  : number;
   public subscribtion: number;
   private  share : string;
   public like : number;
   public  dislike : number;
   public download:number;
   private youtuber :string;

 constructor( video : string,  title  : string,  views  : number, subscribtion: number, share : string, like : number, dislike : number,download:number,youtuber:string){
this.video = video;
this.title = title;
this.views = views;
this.subscribtion = subscribtion;
this.share = share;
this.like = like;
this.dislike = dislike;
this.download = download;
this.youtuber = youtuber;
 }//end of constructor class1

 //method used to accesses the outside the world//
 getSong = ()=>{
   return this.video;
 }//ed of getsong method//

 getOutput = ()=>{  //use only arrow function inside the class
    return this.views;
  } //end of function

 getTitle = ()=>{
   return this.title;
 }//end of getter method//
 
getShare = ()=>{
  return this.share;
} //end of getter method//

setShare = (_share:string)=>{
  this.share = _share;
}//end of setter method//
 getName = ()=>{
   return this.youtuber;
 }//end of getter method//

}//end of Main class//




let user = new Youtube('Album_song','Sorry',2000000,50000,'please share this video',10000,200,20000,'Justin Bieber');

console.log('video type : ' + user.getSong());
console.log('No of views : ' +user.getOutput());


//getter method//

console.log('Title of Song :' + user.getTitle() );

//setter method//
user.setShare('Like and share the video');

//print the modified method//
console.log('Youtuber Requsting to all:' + user.getShare());

console.log('Youtuber : ' + user.getName())