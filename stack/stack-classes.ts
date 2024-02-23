import { Stack } from "./stack-interface";
class ArrayStack<T> implements Stack<T> {
    
    private itemList:T[]=[];
    public push(item:T):void{
        this.itemList.push(item);
    }
    public pop():T|undefined{
        return this.itemList.pop();
    }
    public peek():T|undefined{
        return this.itemList[this.itemList.length-1];
    }
    public isEmpty(): boolean {
        return this.itemList.length===0;
        // var emptyStatus:boolean = (this.itemList.length===0)?true:false;
        // return emptyStatus;
    }
    public clear(): undefined {
        this.itemList.length=0;
    }
}

export default ArrayStack;