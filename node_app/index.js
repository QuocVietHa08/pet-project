var fs=require('fs');
var readlineSync=require('readline-sync')
//var readline=require('readline');
var notes=[];
function loadData(){
    var fileContent=fs.readFileSync('./data.json');
    notes=JSON.parse(fileContent)
}

function showNote(){
    for(var note of notes){
        console.log(note.title,note.content);
    }
}

function addNote(){
    var newTitle=readlineSync.question('Title:');
    var newContent=readlineSync.question('Content:');
    var note={
        title:newTitle,
        content:newContent
    };
    notes.push(note);
   
}

function saveTheNote(){
    var content=JSON.stringify(notes);
  //  console.log(notes);
   fs.writeFileSync('./data.json',content,{encoding:'utf8'});
}

function showMenu(){
    console.log('1.Show all the notes');
    console.log('2.Add more notes');
    console.log('3.Save the notes:');
    var option = readlineSync.question('> ');
    switch(option){
        case '1':
            showNote();
            showMenu();
            break;
        case '2':
            addNote();
            console.log(notes);
           showMenu();
            break;
        case '3':
            saveTheNote();
            
            break;
       
        default:
            console.log('Try agian');
            break;
    }
}
function main(){
    console.log('Node App:you can write and save your not in here!!1');
    loadData();
   showMenu();
}
main();