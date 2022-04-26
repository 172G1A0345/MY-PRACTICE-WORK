import { LightningElement,track } from 'lwc';
export default class DataBinding2 extends LightningElement {
    @track fullName="DataBase";
    @track title="salesforce Org";

    changeHandler(event){
        this[event.target.name]=event.target.value;
    }
}