function solution(genres, plays) {
    var songs = 
        genres.map((genre, index) =>{
            return {
                orgNum: index,
                genre: genre,
                playCount: plays[index]
            }
        });
    
    var genrePlayCount = [];
    songs.forEach(obj=> {
        var thisGenre = genrePlayCount.find(element => element.genre === obj.genre)
        if (!thisGenre){
            genrePlayCount.push({
                genre: obj.genre, totalCount: obj.playCount
            });
        } else {
            thisGenre.totalCount+= obj.playCount
        }
    })

    genrePlayCount.sort((a, b) => b.totalCount - a.totalCount);
    
    var ans = [];
    genrePlayCount.forEach((Counting) =>{
        var thisGenreSongs = songs.filter(song => Counting.genre === song.genre)
        thisGenreSongs.sort((a, b) => b.playCount - a.playCount)
            if (thisGenreSongs.length === 1){
        ans.push(thisGenreSongs[0].orgNum)
    }else{
        ans.push(thisGenreSongs[0].orgNum)
        ans.push(thisGenreSongs[1].orgNum)
    }
    })

    return ans
}