import { api, LightningElement } from 'lwc';
import searchOpportunities from '@salesforce/apex/AccountController.getOpportunities';

const columns = [
    { label: 'Name', fieldName: 'Name',type: 'link' },
    { label: 'Stage', fieldName: 'StageName'},
    { label: 'Amount', fieldName: 'Amount', type: 'date', type: 'currency' },
    { label: 'Close Date', fieldName: 'CloseDate',type: 'date' } 
];

export default class SearchRelatedOpportunities extends LightningElement {

    opps;
    searchedOpportunity='';
    error;
    columns = columns;

    @api recordId;
 
    handleKey(event){
        this.searchedOpportunity = event.target.value;        
    }
    handleSearchOpportunity(){
        searchOpportunities({"RelatedAccount":this.recordId,"searchedOpportunities":this.searchedOpportunity})
        .then(result =>{this.opps = result})
        .catch(error=>{this.error = error})
        console.log(this.opps);
    }
    

}