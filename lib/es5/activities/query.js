"use strict";
"use strict";
var wf4node = require("../../../deps/workflow-4-node");
var CollectionOp = require("./collectionOp");
var util = require("util");
var Activity = wf4node.activities.Activity;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsV0FBVyxDQUFDO0FBRVosQUFBSSxFQUFBLENBQUEsT0FBTSxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsK0JBQThCLENBQUMsQ0FBQztBQUN0RCxBQUFJLEVBQUEsQ0FBQSxZQUFXLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxnQkFBZSxDQUFDLENBQUM7QUFDNUMsQUFBSSxFQUFBLENBQUEsSUFBRyxFQUFJLENBQUEsT0FBTSxBQUFDLENBQUMsTUFBSyxDQUFDLENBQUM7QUFDMUIsQUFBSSxFQUFBLENBQUEsUUFBTyxFQUFJLENBQUEsT0FBTSxXQUFXLFNBQVMsQ0FBQztBQUUxQyxPQUFTLE1BQUksQ0FBRSxBQUFELENBQUc7QUFDYixhQUFXLEtBQUssQUFBQyxDQUFDLElBQUcsQ0FBQyxDQUFDO0FBQ3ZCLEtBQUcsTUFBTSxFQUFJLEtBQUcsQ0FBQztBQUNqQixLQUFHLFFBQVEsRUFBSSxLQUFHLENBQUM7QUFDbkIsS0FBRyxvQkFBb0IsSUFBSSxBQUFDLENBQUMsU0FBUSxDQUFDLENBQUM7QUFDM0M7QUFBQSxBQUVBLEdBQUcsU0FBUyxBQUFDLENBQUMsS0FBSSxDQUFHLGFBQVcsQ0FBQyxDQUFDO0FBRWxDLElBQUksVUFBVSxPQUFPLEVBQUksVUFBVSxXQUFVLENBQUc7QUFDNUMsWUFBVSxTQUFTLEFBQUMsQ0FBQyxJQUFHLElBQUksQUFBQyxDQUFDLE9BQU0sQ0FBQyxDQUFHLFlBQVUsQ0FBQyxDQUFDO0FBQ3hELENBQUM7QUFFRCxJQUFJLFVBQVUsVUFBVSxFQUFJLFVBQVUsV0FBVSxDQUFHLENBQUEsTUFBSyxDQUFHLENBQUEsTUFBSyxDQUFHO0FBQy9ELEtBQUksTUFBSyxJQUFNLENBQUEsUUFBTyxPQUFPLFNBQVMsQ0FBRztBQUNyQyxjQUFVLFNBQVMsUUFBUSxLQUFLLEFBQUMsQ0FBQyxJQUFHLENBQUcsWUFBVSxDQUFHLE9BQUssQ0FBQyxDQUFDO0VBQ2hFLEtBQ0s7QUFDRCxjQUFVLElBQUksQUFBQyxDQUFDLE1BQUssQ0FBRyxPQUFLLENBQUMsQ0FBQztFQUNuQztBQUFBLEFBQ0osQ0FBQztBQUVELElBQUksVUFBVSxRQUFRLEVBQUksVUFBUyxXQUFVLENBQUcsQ0FBQSxLQUFJLENBQUc7QUFDbkQsWUFBVSxLQUFLLEFBQUMsQ0FBQyxHQUFJLE1BQUksQUFBQyxDQUFDLGtCQUFpQixDQUFDLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRUQsS0FBSyxRQUFRLEVBQUksTUFBSSxDQUFDO0FBQ3RCIiwiZmlsZSI6ImFjdGl2aXRpZXMvcXVlcnkuanMiLCJzb3VyY2VSb290IjoibGliL2VzNiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxubGV0IHdmNG5vZGUgPSByZXF1aXJlKFwiLi4vLi4vLi4vZGVwcy93b3JrZmxvdy00LW5vZGVcIik7XHJcbmxldCBDb2xsZWN0aW9uT3AgPSByZXF1aXJlKFwiLi9jb2xsZWN0aW9uT3BcIik7XHJcbmxldCB1dGlsID0gcmVxdWlyZShcInV0aWxcIik7XHJcbmxldCBBY3Rpdml0eSA9IHdmNG5vZGUuYWN0aXZpdGllcy5BY3Rpdml0eTtcclxuXHJcbmZ1bmN0aW9uIFF1ZXJ5KCkge1xyXG4gICAgQ29sbGVjdGlvbk9wLmNhbGwodGhpcyk7XHJcbiAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcclxuICAgIHRoaXMub3B0aW9ucyA9IG51bGw7XHJcbiAgICB0aGlzLm5vblNjb3BlZFByb3BlcnRpZXMuYWRkKFwiZG9RdWVyeVwiKTtcclxufVxyXG5cclxudXRpbC5pbmhlcml0cyhRdWVyeSwgQ29sbGVjdGlvbk9wKTtcclxuXHJcblF1ZXJ5LnByb3RvdHlwZS5kb1dvcmsgPSBmdW5jdGlvbiAoY2FsbENvbnRleHQpIHtcclxuICAgIGNhbGxDb250ZXh0LnNjaGVkdWxlKHRoaXMuZ2V0KFwicXVlcnlcIiksIFwiX3F1ZXJ5R290XCIpO1xyXG59O1xyXG5cclxuUXVlcnkucHJvdG90eXBlLl9xdWVyeUdvdCA9IGZ1bmN0aW9uIChjYWxsQ29udGV4dCwgcmVhc29uLCByZXN1bHQpIHtcclxuICAgIGlmIChyZWFzb24gPT09IEFjdGl2aXR5LnN0YXRlcy5jb21wbGV0ZSkge1xyXG4gICAgICAgIGNhbGxDb250ZXh0LmFjdGl2aXR5LmRvUXVlcnkuY2FsbCh0aGlzLCBjYWxsQ29udGV4dCwgcmVzdWx0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNhbGxDb250ZXh0LmVuZChyZWFzb24sIHJlc3VsdCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5RdWVyeS5wcm90b3R5cGUuZG9RdWVyeSA9IGZ1bmN0aW9uKGNhbGxDb250ZXh0LCBxdWVyeSkge1xyXG4gICAgY2FsbENvbnRleHQuZmFpbChuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQhXCIpKTtcclxufTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XHJcbiJdfQ==