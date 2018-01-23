export class Rectangle {
    constructor(public x:number=0,
                public y:number=0,
                public l:number=0,
                public h:number=0)
                {}

    public perimetre() : number {
         return 2* ( Number(this.l) + Number(this.h) ) ;
        } 
    
    public aire() : number{ 
        return this.l * this.h ;
    } 
}
