console.log('hold it now');

$(document).ready(onReady);

function onReady(){
    console.log('hit it!');
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
}