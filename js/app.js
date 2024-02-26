const yargs = require("yargs")
const data1 = require("./data1")

yargs.command({
    command : "add",
    describe : "to add an items",
    builder :{
        fname : {
            describe : " this is the first name description in add command",
            demandOption: "true",
            type: "string"
        },

        lname : {
            describe : " this is the first name description in add command",
            demandOption: "true",
            type: "string"
        }
        
    },

    handler : (x) => {
        data1.addPerson(x.id , x.fname , x.lname , x.age , x.city)
    }
})


yargs.command({
    command : "delete",
    describe : "to delete an item",
    handler:(x) => {
        data1.deleteData(x.id)
    }
})

yargs.command ({
    command : "read",
    describe : "to read data",
    builder : {
        id : {
        describe : "this is id description in read command",
        demandOption : true ,
        type : "string"
        }
    },
    handler : (x) => {

        data1.readData(x.id)
    }
})

yargs.command({
    command: "list",
    describe :"to list data",
    handler : () =>{
        data1.listData()
    }


})


yargs.parse()