'fyrir' +'use strict';
var empty = document.createElement('div');
var cat1 = document.createElement('text1');
var cat2 = document.createElement('text2');
var picture1 = document.createElement('img');
var picture2 = document.createElement('img');
var picture3 = document.createElement('img');
var picture4 = document.createElement('img');
var video1 = document.getElementById('1');
var video2 = document.getElementById('2');
var video3 = document.getElementById('3');
var video4 = document.getElementById('4');
var source = document.createElement('source');



function  playVideo(id){
    window.location.assign("video.html?id=" + id);
}

$.getJSON( "videos.json", function( data )  {
    categories(data.categories);
    addVideo(data.videos);
    emptydiv();
    categories1(data.categories);
    addVideo2(data.videos);
  });


  function categories(data){
    var div1 = document.createElement('text1');
    cat1.setAttribute("src", data[0].title);
    div1.appendChild(cat1);
    div1.querySelector('text1');
    div1.textContent = data[0].title;
    document.body.appendChild(div1);
  }

function addVideo(data){
  var div2 = document.createElement('row1');


  picture1.setAttribute("src", data[0].poster);
  picture1.onclick = function(){
    playVideo('1')
  }
  div2.appendChild(picture1);


  picture2.setAttribute("src", data[1].poster);
  picture2.onclick = function(){
    playVideo('2');
  }
  div2.appendChild(picture2);
  document.body.appendChild(div2);
}

function emptydiv(){
  var div3 = document.createElement('div');
  div3.appendChild(empty);
  div3.querySelector('div');
  div3.textContent = ' ';
  document.body.appendChild(div3);
}

function categories1(data){
  var div4 = document.createElement('text2');
  cat2.setAttribute("src", data[1].title);
  div4.appendChild(cat2);
  div4.querySelector('text2');
  div4.textContent = data[1].title;
  document.body.appendChild(div4);
}

function addVideo2(data){
  var div5 = document.createElement('row2');


  picture1.setAttribute("src", data[0].poster);
  picture1.onclick = function(){
    playVideo('1')
  }
  div5.appendChild(picture1);


  picture3.setAttribute("src", data[3].poster);
  picture3.onclick = function(){
    playVideo('3');
  }
  div5.appendChild(picture3);
  document.body.appendChild(div5);
  
}





//----------------
// CREATED OG DURATION
//----------------


//smá skítamix


//kallar á þetta með videos.videos[i].created

//skilar streng "fyrir x tíma síðan "
function getCreated(data){
  const time = []

    const hour = {
      value: data/1000,
      maxsize: 23,
      returnvalue1: ' klukkustund síðan',
      returnvalue2: ' klukkustundum síðan',
    };
    const day = {
      value: hour.value/24,
      maxsize: 364,
      returnvalue1: ' degi síðan',
      returnvalue2: ' dögum síðan',
    };
    const year = {
      value: day.value/265,
      maxsize: Infinity,
      returnvalue1: ' ári síðan',
      returnvalue2: ' árum síðan',
    };

    time.push(hour);
    time.push(day);
    time.push(year);

    for(var i = 0; i<time.length; i++){
      var value = time[i].value;
      var strvalue = (Math.floor(value).toString());
      var maxsize = time[i].maxsize;
      var rvalue_one = time[i].returnvalue1;
      var rvalue_two = time[i].returnvalue2;
      if(value <= maxsize){
        return value === 1 ? "fyrir " + strvalue + rvalue_one
         : "fyrir " + strvalue +  rvalue_two;
      }
    }
  }



  //kallar á þetta með videos.videos[i].created

  // skilar streng "mm:ss"
  function getDuration(data){
    var mins = Math.floor(data/60);
    var secs = Math.floor(data%60);
    var strmins = mins < 10 ? "0" + mins.toString() : mins.toString();

    var strsecs = secs < 10 ? "0" + secs.toString() : secs.toString();

    return strmins + ":" + strsecs;
  }
