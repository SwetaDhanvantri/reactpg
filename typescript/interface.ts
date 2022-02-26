interface person{
    eid:number;
    ename:string;
    getSalary(eid:number)=> number;

}
class Employee implements person{
  constructor(eid:number,ename:string){
        this.eid=eid;
        this.ename=ename;
  }
}