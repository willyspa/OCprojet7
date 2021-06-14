import { api,LightningElement } from 'lwc';
import updateStatus from '@salesforce/apex/LeadController';
export default class UpdateLeadWithLWC extends LightningElement {
    @api recordId;

    handleStatusUpdate(){
        updateStatus({"recordId":this.recordId});
    }
