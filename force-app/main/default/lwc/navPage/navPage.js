import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavPage extends NavigationMixin(LightningElement) {

    NavigationToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:'chatter'
            }
        })
        
    }
    NavigationToHome() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName:'home'
            }
        })
        
    }
}