public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunities(String RelatedAccount,String searchedValue){

       List<Opportunity> SearchedOpportunities= [SELECT Name FROM Opportunity WHERE AccountId = :RelatedAccount AND Name LIKE :searchedValue LIMIT 10];

            return SearchedOpportunities;
    }

}
