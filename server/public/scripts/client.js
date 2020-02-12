console.log('hold it now');

$(document).ready(onReady);

function onReady(){
    console.log('hit it!');
    $("#addSongButton").on('click', addSong);
    getSongs();
}

function getSongs(){
    //have ajax GET songs
    $.ajax({
        type: 'GET',
        url: '/songs'
    }).then(function(response){
        console.log('in GET with', response);
    }).catch(function(err){
        alert('What up, we got error');
        console.log("bad")
    })
}//end getSong

function addSong(){
    console.log("we in addSong");
    let objectToSend = {
        rank: $('#rankIn').val(),
        artist: $('#rankIn').val(),
        track: $('#rankIn').val(),
        published: $('#rankIn').val()
    }
    $.ajax({
        type: 'POST',
        url: '/songs',
        data: objectToSend
    }).then(function(response){
        console.log(response);
        getSongs();
    }).catch(function(err){
        alert('error in add song');
        console.log(err);
    })
}












