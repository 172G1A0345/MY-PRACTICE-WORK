import { LightningElement,track } from 'lwc';
export default class Rendering extends LightningElement {
    @track showtext=false;
    @track hideText=false;
 ShowText(){
     this.showtext=true;
 }
 HideText(){
    this.hideText=true;
}
}