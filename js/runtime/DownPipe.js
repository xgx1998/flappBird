import { Pipe } from "./Pipe.js";
import { Sprit } from "../base/Sprit.js";
import { DataStore } from "../base/DataStore.js";

export class DownPipe extends Pipe{
    constructor(top){
        const img = Sprit.getImage('downPipe');
        super(img,top);
    }
    draw(){
        // 上下水管间的距离
        let gap = DataStore.getInstance().canvas.height/5;
        this.y = this.top +gap;
        super.draw();
    }
}