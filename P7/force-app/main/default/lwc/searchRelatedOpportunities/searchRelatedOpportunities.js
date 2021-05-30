import { api, LightningElement } from 'lwc';
import searchedOpportunities from '@salesforce/apex/AccountController.getOpportunities';
import { RecordFieldDataType } from 'lightning/uiRecordApi';

export default class SearchRelatedOpportunities extends LightningElement {
    @api recordId;
}