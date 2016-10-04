(function(module) {
  var repoView = {};
  /* DONE: Let's compile our new template!
       Save the result of invoking Handlebars in this 'repoCompiler' variable
       that we will pass to the append method below. */
  var source = $('#repo-template').text();
  var repoCompiler = Handlebars.compile(source);

  repoView.renderRepos = function() {
    console.log('hello');
    $('#about ul').empty().append(
      reposObj.withTheAttribute('fork')  // TODO: experiment changing this attribute!
      .map(repoCompiler)
    );
  };
/* DONE: Call the function that loads (or 'requests') our repo data.
    Pass in some view function as a higher order callback, so our repos
    will render after the data is loaded. */

  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
