// var housekeeper1={
//     yearsOfExperience: 12,
//     name: "jane",
//      CleaningRepertoire:["bathroom" ,"lobby", "bedroom"]
// }


function housekeeper(years,name,CleaningRepertoire)
{
    this.yearsOfExperience=years;
    this.name=name;
    this.CleaningRepertoire=CleaningRepertoire;
}

var housekeeper1=new housekeeper(9,"tom",["lobby","bathroom"])
console.log(housekeeper1.CleaningRepertoire)