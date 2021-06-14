public with sharing class LeadController {
    @AuraEnabled
    public static void isContacted(String recordId) {
        
        Lead currentLead = [SELECT Id,status FROM Lead WHERE id =: recordId LIMIT 1];
        currentLead.status = 'Working - Contacted';

        update currentLead;
    }
}