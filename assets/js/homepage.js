// This is my javascript file

var getUserRepos = function() {
    fetch("https://api.github.com/users/octocat/repos");
};

getUserRepos();