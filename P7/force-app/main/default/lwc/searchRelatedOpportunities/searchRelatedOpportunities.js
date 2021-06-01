import { api, LightningElement } from 'lwc';
import searchOpportunities from '@salesforce/apex/AccountController.getOpportunities';

const columns = [
    { label: 'Name', fieldName: 'NameUrl',type: 'url',
        typeAttributes:{
            label:{fieldName:'Name'},target:'_blank'
        }
    },
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
    //on change the keyword is stored in a variable
    handleKey(event){
        this.searchedOpportunity = event.target.value;        
    }
    //when the button is clicked the apex controller is called with two attributes
    handleSearchOpportunity(){
        searchOpportunities({"RelatedAccount":this.recordId,"searchedOpportunities":this.searchedOpportunity})
        .then(data =>{
            //clone of the opportunity list received from the apex controller
            let clonedData=JSON.parse(JSON.stringify(data));
            let baseUrl = 'https://'+location.host+'/';
            //construct the url for each record within the list 
            clonedData.forEach(opp => {
                opp.NameUrl = baseUrl+opp.Id;
            });
            console.log(data);
            this.opps = clonedData;
        })
        .catch(error=>{this.error = error})
        this.opps = undefined;
    }
    

}