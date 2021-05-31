public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String RelatedAccount,String searchedOpportunities){
       String SearchedOpp = '%'+searchedOpportunities+'%'; 
       List<Opportunity> relatedOpportunities= [SELECT Id,Name,StageName,Amount,CloseDate 
                                                FROM Opportunity 
                                                WHERE AccountId = :RelatedAccount 
                                                AND Name 
                                                LIKE :searchedOpp LIMIT 30];
        return RelatedOpportunities;
    }

}
