"use strict";
"use strict";
var CollectionOp = require("./collectionOp");
var util = require("util");
var Activity = require("../../deps/workflow-4-node").activities.Activity;
function Query() {
  CollectionOp.call(this);
  this.query = null;
  this.options = null;
  this.nonScopedProperties.add("doQuery");
}
util.inherits(Query, CollectionOp);
Query.prototype.doWork = function(callContext) {
  callContext.schedule(this.get("query"), "_queryGot");
};
Query.prototype._queryGot = function(callContext, reason, result) {
  if (reason === Activity.states.complete) {
    callContext.activity.doQuery.call(this, callContext, result);
  } else {
    callContext.end(reason, result);
  }
};
Query.prototype.doQuery = function(callContext, query) {
  callContext.fail(new Error("Not implemented!"));
};
module.exports = Query;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsV0FBVyxDQUFDO0FBRVosQUFBSSxFQUFBLENBQUEsWUFBVyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsZ0JBQWUsQ0FBQyxDQUFDO0FBQzVDLEFBQUksRUFBQSxDQUFBLElBQUcsRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLE1BQUssQ0FBQyxDQUFDO0FBQzFCLEFBQUksRUFBQSxDQUFBLFFBQU8sRUFBSSxDQUFBLE9BQU0sQUFBQyxDQUFDLDRCQUEyQixDQUFDLFdBQVcsU0FBUyxDQUFDO0FBRXhFLE9BQVMsTUFBSSxDQUFFLEFBQUQsQ0FBRztBQUNiLGFBQVcsS0FBSyxBQUFDLENBQUMsSUFBRyxDQUFDLENBQUM7QUFDdkIsS0FBRyxNQUFNLEVBQUksS0FBRyxDQUFDO0FBQ2pCLEtBQUcsUUFBUSxFQUFJLEtBQUcsQ0FBQztBQUNuQixLQUFHLG9CQUFvQixJQUFJLEFBQUMsQ0FBQyxTQUFRLENBQUMsQ0FBQztBQUMzQztBQUFBLEFBRUEsR0FBRyxTQUFTLEFBQUMsQ0FBQyxLQUFJLENBQUcsYUFBVyxDQUFDLENBQUM7QUFFbEMsSUFBSSxVQUFVLE9BQU8sRUFBSSxVQUFVLFdBQVUsQ0FBRztBQUM1QyxZQUFVLFNBQVMsQUFBQyxDQUFDLElBQUcsSUFBSSxBQUFDLENBQUMsT0FBTSxDQUFDLENBQUcsWUFBVSxDQUFDLENBQUM7QUFDeEQsQ0FBQztBQUVELElBQUksVUFBVSxVQUFVLEVBQUksVUFBVSxXQUFVLENBQUcsQ0FBQSxNQUFLLENBQUcsQ0FBQSxNQUFLLENBQUc7QUFDL0QsS0FBSSxNQUFLLElBQU0sQ0FBQSxRQUFPLE9BQU8sU0FBUyxDQUFHO0FBQ3JDLGNBQVUsU0FBUyxRQUFRLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBRyxZQUFVLENBQUcsT0FBSyxDQUFDLENBQUM7RUFDaEUsS0FDSztBQUNELGNBQVUsSUFBSSxBQUFDLENBQUMsTUFBSyxDQUFHLE9BQUssQ0FBQyxDQUFDO0VBQ25DO0FBQUEsQUFDSixDQUFDO0FBRUQsSUFBSSxVQUFVLFFBQVEsRUFBSSxVQUFTLFdBQVUsQ0FBRyxDQUFBLEtBQUksQ0FBRztBQUNuRCxZQUFVLEtBQUssQUFBQyxDQUFDLEdBQUksTUFBSSxBQUFDLENBQUMsa0JBQWlCLENBQUMsQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFFRCxLQUFLLFFBQVEsRUFBSSxNQUFJLENBQUM7QUFDdEIiLCJmaWxlIjoiYWN0aXZpdGllcy9xdWVyeS5qcyIsInNvdXJjZVJvb3QiOiJDOi9HSVQvbW9uZ28tY3J1bmNoL2xpYi8iLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCBDb2xsZWN0aW9uT3AgPSByZXF1aXJlKFwiLi9jb2xsZWN0aW9uT3BcIik7XHJcbmxldCB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XHJcbmxldCBBY3Rpdml0eSA9IHJlcXVpcmUoXCIuLi8uLi9kZXBzL3dvcmtmbG93LTQtbm9kZVwiKS5hY3Rpdml0aWVzLkFjdGl2aXR5O1xyXG5cclxuZnVuY3Rpb24gUXVlcnkoKSB7XHJcbiAgICBDb2xsZWN0aW9uT3AuY2FsbCh0aGlzKTtcclxuICAgIHRoaXMucXVlcnkgPSBudWxsO1xyXG4gICAgdGhpcy5vcHRpb25zID0gbnVsbDtcclxuICAgIHRoaXMubm9uU2NvcGVkUHJvcGVydGllcy5hZGQoXCJkb1F1ZXJ5XCIpO1xyXG59XHJcblxyXG51dGlsLmluaGVyaXRzKFF1ZXJ5LCBDb2xsZWN0aW9uT3ApO1xyXG5cclxuUXVlcnkucHJvdG90eXBlLmRvV29yayA9IGZ1bmN0aW9uIChjYWxsQ29udGV4dCkge1xyXG4gICAgY2FsbENvbnRleHQuc2NoZWR1bGUodGhpcy5nZXQoXCJxdWVyeVwiKSwgXCJfcXVlcnlHb3RcIik7XHJcbn07XHJcblxyXG5RdWVyeS5wcm90b3R5cGUuX3F1ZXJ5R290ID0gZnVuY3Rpb24gKGNhbGxDb250ZXh0LCByZWFzb24sIHJlc3VsdCkge1xyXG4gICAgaWYgKHJlYXNvbiA9PT0gQWN0aXZpdHkuc3RhdGVzLmNvbXBsZXRlKSB7XHJcbiAgICAgICAgY2FsbENvbnRleHQuYWN0aXZpdHkuZG9RdWVyeS5jYWxsKHRoaXMsIGNhbGxDb250ZXh0LCByZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY2FsbENvbnRleHQuZW5kKHJlYXNvbiwgcmVzdWx0KTtcclxuICAgIH1cclxufTtcclxuXHJcblF1ZXJ5LnByb3RvdHlwZS5kb1F1ZXJ5ID0gZnVuY3Rpb24oY2FsbENvbnRleHQsIHF1ZXJ5KSB7XHJcbiAgICBjYWxsQ29udGV4dC5mYWlsKG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCFcIikpO1xyXG59O1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBRdWVyeTtcclxuIl19
