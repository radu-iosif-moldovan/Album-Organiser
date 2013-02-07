function BookCtrl($scope) {
    "use strict";
    $scope.authors = [];
    if (typeof localStorage.getItem(1) === 'string') {
        $scope.authors = JSON.parse(localStorage.getItem(1));
    }


    $scope.searchAuthor = function () {
    window.open("http://en.wikipedia.org/wiki/" + this.author.name);
    };

    $scope.addAuthor = function () {
        var auth = {url: '', name: '', books: []}, i, flag, j;
        auth.name = $scope.authorText;
        auth.url = $scope.urlText;

        for (i = 0; i < $scope.authors.length; i = i + 1) {
            if ($scope.authors[i].name === auth.name) {
                flag = true;
                j = i;
            }
        }

        if (flag) {
            $scope.authors[j].books.push($scope.bookText);
        } else {
            auth.books.push($scope.bookText);
            $scope.authors.push(auth);
        }

        $scope.bookText = '';
        $scope.authorText = '';
        $scope.urlText = '';
    };

    $scope.save = function () {
        localStorage.setItem(1, JSON.stringify($scope.authors));
    };

}