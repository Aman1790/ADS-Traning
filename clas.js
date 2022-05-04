class Person {
    constructor(){
        this.name="Ram";
    }
    print(){
        document.write(this.name+" ");
    }
}

class Chil extends Person{
    constructor(){
        super();
    this.gen="male";
    }
    printmy(){
        document.write(this.gen+" ");
    }
}
const chil1=new Chil();
chil1.printmy();
chil1.print();