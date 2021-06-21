({
    doInit: function(component, event, helper) {     
        // get the controller method
        let action = component.get("c.isContacted");
        // set the attribute of the method
        action.setParams({ "recordId":component.get("v.recordId")})
        console.log(component.get("v.recordId"));
        // check the promise and refresh
        action.setCallback(this, function(response){

            var dismissActionPanel = $A.get("e.force:closeQuickAction");
            dismissActionPanel.fire();
            let state = response.getState();
            
            if (state === "SUCCESS") {
                console.log("success");
                $A.get('e.force:refreshView').fire();
            }else{
                console.log("failed");
            }
    });
    $A.enqueueAction(action);
    }     
})