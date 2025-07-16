class Dog {
    constructor(name){
        this.name = name;
    }
};

class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };
// the constructor will successfully extend the Dog class is :
// 2 , 3