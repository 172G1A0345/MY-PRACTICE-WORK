import { LightningElement } from 'lwc';
import { NavigationMixin} from 'lightning/navigation';
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils';
export default class NavtoObjectPage extends NavigationMixin(LightningElement) {

    NavToAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName:'Account',
                actionName:'home'
            }
        })
        
    }
    NavToNewConatct() {
        const defaultValues= encodeDefaultFieldValues({
            FirstName: 'Salesforce',
            LastName: 'Trailhead',
            LeadSource: 'Other'
        })
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName:'Contact',
                actionName:'new'
            },
            state:{
                defaultFieldValues:defaultValues
            }
        })
        
    }
   newAccount(){
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            objectApiName:'Account',
            actionName:'new'
   }
})
   }
   RecordsList(){
       this[NavigationMixin.Navigate]({
           type:'standard__objectPage',
           attributes:{
               objectApiName:'Contact',
               actionName:'list'
           },
           state:{
               filterName:'Recent'
           }
       })
   }
}

