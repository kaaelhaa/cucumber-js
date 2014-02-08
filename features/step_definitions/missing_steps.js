var missing_steps = function() {
var Given  = When = Then = this.defineStep;
var World  = require('./cucumber_world').World;
this.World = World;

  this.Given(/^the step "([^"]*)" has a mapping asynchronously failing through an exception with the message "([^"]*)"$/, function (arg1, arg2, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^it should pass with:$/, function (string, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^a mapping written in CoffeeScript$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Given(/^a mapping written in PogoScript$/, function (callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^a "([^"]*)" step definition snippet for \/\^I am a happy veggie \\\\o\\\/\$\/ is suggested$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^a "([^"]*)" step definition snippet for \/\^I type \\\-\\\[\\\]\\\{\\\}\\\(\\\)\\\*\\\+\\\?\\\.\\\\\\\^\\\$\\\|\\\#\\\/\$\/ is suggested$/, function (arg1, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^a "([^"]*)" step definition snippet for \/\^I have \(\\d\+\) "([^"]*)"\]\*\)" cucumbers\$\/ with (\d+) parameters is suggested$/, function (arg1, arg2, arg3, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

  this.Then(/^a "([^"]*)" step definition snippet for \/\^I have some "([^"]*)"\]\*\)"([^"]*)"\(\[\^"([^"]*)" and "([^"]*)"\]\*\)" cucumbers\$\/ with (\d+) parameters is suggested$/, function (arg1, arg2, arg3, arg4, arg5, arg6, callback) {
    // express the regexp above with the code you wish you had
    callback.pending();
  });

this.When(/^a ([^"]*) step$/, function (stepName, callback) {    
    if(stepName === 'passing' || stepName === 'failing' || stepName === 'background') {
        callback();
    }else{
        callback.fail();
    }
});

this.Then(/^i get ([^"]*)$/, function (result, callback) {
    if(result === 'passed' || result === 'skipped' || stepName === 'result') {
        callback();
    }else{
        callback.fail();
    }
});


};
module.exports = missing_steps;