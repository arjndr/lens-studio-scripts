// @input int delayDuration = 5 {"widget":"slider", "min":0, "max":10, "step":1}

var canFade = false;
var delayedEvent = script.createEvent("DelayedCallbackEvent");
delayedEvent.bind(function () {
  canFade = true
});

delayedEvent.reset(script.delayDuration);

script.createEvent("UpdateEvent").bind(function () {
  var hintText = script.getSceneObject().getComponent("Component.Text");
  var currentTextColor = hintText.textFill.color;
  var currentTextStrokeColor = hintText.outlineSettings.fill.color;
  if (canFade) {
    hintText.textFill.color = new vec4(currentTextColor.x, currentTextColor.y, currentTextColor.z, (currentTextColor.w - 0.1));
    hintText.outlineSettings.fill.color = new vec4(currentTextStrokeColor.x, currentTextStrokeColor.y, currentTextStrokeColor.z, (currentTextStrokeColor.w - 0.1));
  }
});
