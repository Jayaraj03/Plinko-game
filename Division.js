class Division{
    constructor(x,y,w,h){
        var options ={
            isStatic :true
        }
        this.body =  Bodies.rectangle(x,y,this.w,h,options)
        this.w = w;
        this.h = h;
        World.add()
    }
}