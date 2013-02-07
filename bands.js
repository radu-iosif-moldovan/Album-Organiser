/*jslint browser: true, devel: true */
/*global localStorage*/
function BandCtrl($scope) {
    "use strict";
    $scope.bands = [];
    if (typeof localStorage.getItem(0) === 'string') {
        $scope.bands = JSON.parse(localStorage.getItem(0));
    }

    $scope.searchAlbum = function () {
        window.open("http://en.wikipedia.org/wiki/" + this.album.name + "_(album)");
    };

    $scope.searchBand = function () {
        window.open("http://en.wikipedia.org/wiki/" + this.band.name);
    };

    $scope.searchSong = function () {
        window.open("http://www.google.com/search?q=" + this.band.name + " " + this.song);
    };

    $scope.addAlbum = function () {
        var band = {url: '', name: '', albums: []}, i, flag, j;
        band.name = $scope.bandText;
        band.url = $scope.urlText;

        for (i = 0; i < $scope.bands.length; i = i + 1) {
            if ($scope.bands[i].name === band.name) {
                flag = true;
                j = i;
            }
        }

        if (flag) {
            $scope.bands[j].albums.push({name: $scope.albumText, songs: []});
        } else {
            band.albums.push({name: $scope.albumText, songs: []});
            $scope.bands.push(band);
        }

        $scope.albumText = '';
        $scope.bandText = '';
        $scope.urlText = '';
    };
    $scope.addSong = function (text) {
        this.album.songs.push(text);
        $scope.songText = ''; // d'oh wrong scope, fixed by adding a new controller
        console.log($scope.songText+" "+$scope.$id);
    };

    $scope.deleteAlbum = function () {
         //this is the index in bands[x].albums[y].
        var i = $scope.bands.indexOf(this.band),
        index = $scope.bands[i].albums.indexOf(this.album);

        $scope.bands[i].albums.splice(index, 1);
    };
    $scope.deleteSong = function () {
         //this is the index in bands[x].albums[y].
        var i = $scope.bands.indexOf(this.band),
        j = $scope.bands[i].albums.indexOf(this.album),
        index = $scope.bands[i].albums[j].songs.indexOf(this.song);

        $scope.bands[i].albums[j].songs.splice(index, 1);
    };
    $scope.deleteBand = function () {
         //this is the index in bands[x]
        var index = $scope.bands.indexOf(this.band);
        $scope.bands.splice(index, 1);

    };
    $scope.save = function () {
        localStorage.setItem(0, JSON.stringify($scope.bands));
    };
}

function DetailCtrl($scope, $routeParams, $http) {
    "use strict";
    $scope.bandName = $routeParams.bandName;
    $http.get('data/' + $scope.bandName + '.json').success(function (data) {
        $scope.bandDescription = data[0].description;
        $scope.bandUrl = data[0].url;
        $scope.bandUrls = data[0].urls;
    });
    $scope.setImage = function (imageUrl) {
        $scope.bandUrl = imageUrl;
    };

}

function SongCtrl($scope) {
     "use strict";

     $scope.addSong = function () {
        $scope.$parent.addSong($scope.songText);
        $scope.songText = '';
     };

}