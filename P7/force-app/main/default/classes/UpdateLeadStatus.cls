public with sharing class UpdateLeadStatus {
    @InvocableMethod(label='Update Contact')
    public static void UpdateLeadStatus(List<Lead> leads) {
        leads[0].put('Status','Working - Contacted');
        update leads;

    }
}
