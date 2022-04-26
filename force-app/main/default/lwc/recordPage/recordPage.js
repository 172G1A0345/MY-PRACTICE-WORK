import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
export default class NavToItemPage extends NavigationMixin(LightningElement) {

    ViewRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0031y00000JxVOKAA3',
                objectApiName:'Contact',
                actionName:'view'
            }
        })
        
    }
    EditRecord() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId:'0031y00000JxVOKAA3',
                objectApiName:'Contact',
                actionName:'edit'
            }
        })
        
    }
}