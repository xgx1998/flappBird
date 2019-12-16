import {Pipe} from "./Pipe.js";
import { Sprit } from "../base/Sprit.js";
export class UpPipe extends Pipe{
    constructor(top){
        const img = Sprit.getImage('upPipe');
        // console.log(img);
        super(img,top)
    }   
    draw(){
        this.y = this.top - this.height;
        super.draw();
    }
}