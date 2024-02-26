
const fs = require("fs")

const addPerson = (id , fname , lname , age , city) =>{
    const allData = loadData()
    const dupData =allData.filter((obj) =>{
        return obj.id ===id
    })

    if (dupData.length == 0){
        allData.push ({
            id    : id,
            fname :fname,
            lname : lname,
            age   : age , 
            city : city 
        })
        saveAllData(allData)

    }else {
        console.log("ERROR Duplecated ID")
    }

    
}


//////
const loadData = () =>{
    try{
        const dataJson = fs.readFileSync("data1.json").toString()
        return JSON.parse(dataJson)
    }
    catch {
        return []
    }
    


}

const saveAllData = (allData) =>{
    const AllDataJson = JSON.stringify(allData)
    fs.writeFileSync("data1.json" , AllDataJson)
}


const deleteData =(id) =>{
    const allData =loadData()

    const dataKeep = allData.filter((obj) => {
        return obj.id !== id 
    })
    
    saveAllData(dataKeep)
}
/////////
const readData = (id) => {
    const allData = loadData()

    const itemNeed = allData.find((obj) =>{
        return obj.id ==id 
    })

    // console.log(itemNeed)

    if ( itemNeed){
        console.log(itemNeed.fname)
    }else {
        console.log("name nead not found")
    }
}
/////////
const listData =() =>{
    const allData = loadData()

    allData.forEach((obj) =>{
        
        console.log(obj.fname , obj.lname)
    })
}

module.exports= {
addPerson,
deleteData,
readData,
listData
}
////////
