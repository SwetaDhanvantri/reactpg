class A{
    abc(){
        return "Amit"
    }

}
class B extends A{
    bca(){
        let x= "Sumit";
        let y= super.abc();
        console.log(`${x} and ${y} are good friends`)

    }
}
let obj= new B;
obj.bca()



