var readlineSync=require('readline-sync');
var fs=require('fs');

var student=[
    {name:"viet", phoneNumber:124124141421}
];
function loadData(){
    var fileContent=fs.readFileSync('./data.json');
    students=JSON.parse(fileStudent);
}

function show(){
  for(var person of student){
    console.log(person.name,person.phoneNumber);
  }
}
function add(){
  var name=readLineSync.question('Name:');
  var phoneNumber=readLineSync.question('Phone number:');

  var contact={
    name:name,
    phoneNumber:parseInt(phoneNumber)
  }
  student.push(contact);
}

function saveAndExit(){
  var content=JSON.stringify(student);
  content=fs.writeSync('.contact.json',content,{encoding:'utf8'});
}
function showMenu(){
    console.log('1.Show all student');
    console.log('2.Create a new student');
    console.log('3.Save and Exit');
}

function main(){
    loadData();
    showMenu();
    var option=readlineSync.question('>');
    switch(option){
    case '1':
    show();
   showMenu();
    break;
    case '2':
    add();
    showMenu();
    break;
    case '3':
    saveAndExit();
    showMenu();
    break;
    default:
    console.log('Enter again: ');
    showMenu();
    break;
}
}