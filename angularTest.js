function BandCtrl ($scope) {
	
	$scope.bands = JSON.parse(localStorage.getItem(0));


	$scope.searchAlbum = function() {
		window.open("http://en.wikipedia.org/wiki/"+this.album.name+"_(album)")

	}
	$scope.searchBand = function() {
		
		window.open("http://en.wikipedia.org/wiki/"+this.band.name)

	}
	$scope.searchSong = function() {
		window.open("http://www.google.com/search?q=" + this.song)

	}

	$scope.addAlbum = function() {
		var band = {name:'', albums:[]},i,flag,j;
		band.name = $scope.bandText;

		for(i = 0;i < $scope.bands.length; i = i + 1){
			if($scope.bands[i].name === band.name){
				flag = true;
				j = i;
			}
		}
		if(flag){
			$scope.bands[j].albums.push({name:$scope.albumText, songs:[]})
		}else{
			band.albums.push({name:$scope.albumText, songs:[]});
			$scope.bands.push(band);
		}
		$scope.albumText = '';
		$scope.bandText = '';
	}
	$scope.addSong = function(text){
		this.album.songs.push(text);
		$scope.songText = ''; // why can't I access songText ???
	}
	$scope.deleteAlbum = function() {
		 //this is the index in bands[x].albums[y].
		var index = $scope.bands[$scope.bands.indexOf(this.band)].albums.indexOf(this.album);
		$scope.bands[$scope.bands.indexOf(this.band)].albums.splice(index, 1);
	}
		$scope.deleteBand = function() {
		 //this is the index in bands[x]
		var index = $scope.bands.indexOf(this.band)
		$scope.bands.splice(index, 1);
	}


	$scope.save = function() {
		localStorage.setItem(0, JSON.stringify($scope.bands));
	}
}