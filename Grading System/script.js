//    var input1 = document.getElementById("input1");
// // var input2 = document.getElementById("input2");
 var add = document.getElementById("add");
var submit = document.getElementById("submit");
 var inputid = 0;
var news = document.getElementById("new");

add.addEventListener("click", function(){
    inputid++;
    // console.log('ee');
// var input = document.createElement("input");
// input.type = "text";
// input.setAttribute(id, )

    // var input = if(parseInt(grade[i].value) >= 39 && parseInt(grade[i].value) <= 49 ){
    // gradeText ='D';
//     // console.log();
//    var show = document.createElement("div");
//    show.setAttribute("name", "result");
//    show.innerHTML = gradeText;
//     news.appendChild(show);

     var input = document.createElement("input");
    input.type = 'number';
    input.setAttribute("id", 'inputid'+ inputid);
    input.setAttribute("name", "number");
    news.appendChild(input);

   
   var remove = document.createElement("button");
  remove.setAttribute("id", 'buttonid');
    // remove.removeChild();
  remove.innerHTML ="REMOVE";
news.appendChild(remove);
});

submit.addEventListener("click", function(){
    // console.log('gvv');
var grade = document.getElementsByName("number");

  for( var i = 0; i < grade.length; i++){
    if(parseInt(grade[i].value) >= 100 && (parseInt(grade[i].value) <= 100)){
        gradeText = 'Not A VALID score';
    }
 else if (parseInt(grade[i].value) >= 80 && (parseInt(grade[i].value) <= 100)) {
      gradeText = 'A';

  }
 else if(parseInt(grade[i].value) >= 60 && (parseInt(grade[i].value) <= 79)){
     gradeText = 'B';
 }
 else if(parseInt(grade[i].value) >= 50 && (parseInt(grade[i].value) <= 59)){
    gradeText = 'C';
}
else if(parseInt(grade[i].value) >= 40 && (parseInt(grade[i].value) <= 49)){
    gradeText = 'D';
}
 else if(parseInt(grade[i].value) <= 39){
   gradeText ='F';
 }
 
  }
  var result = document.createElement('p');
  result.innerHTML = gradeText;
  news.appendChild(result);

});
// remove.addEventListener("click", function(){

// })

