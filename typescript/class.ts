class car{
    speed:number;
    constructor(){
        this.speed=50;
    }
    acc(){
        this.speed+=40;
    }
    checkspeed(){
        console.log(`the speed is`+ this.speed)
    }
}
const obj= new car;
obj.checkspeed();
obj.acc();
obj.checkspeed();