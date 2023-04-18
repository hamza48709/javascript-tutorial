//class is like blueprint from where object is created
class user{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }
    getdata(){
        console.log(this.#name,this.#age);
    }
}

let u1=new user("hamza",11);
console.log(u1.name);