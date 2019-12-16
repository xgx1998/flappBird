import { Sprit } from "../base/Sprit.js";
import { DataStore } from "../base/DataStore.js";
export class Land extends Sprit{
    constructor(){
        // 获取底板图片
        const img = Sprit.getImage('land');
        // 地板起点高度
        const canvas = DataStore.getInstance().canvas;
        const y = canvas.height - img.height;
        // 重写地板构造
        super(img,0,0,img.width,img.height,0,y,img.width,img.height)
    }
    // 重写Sprit的draw方法,让地板动起来
    draw(){
        this.x = this.x-2;
        const canvasW = DataStore.getInstance().canvas.width;
        if(this.x<canvasW-this.img.width){
            this.x = 0;
        }
        super.draw();
    }
}