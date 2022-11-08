
const getAverage =(arr)=>{
    let sum =0 ;
    arr.map(ele =>
        sum+= parseFloat(ele))
    return (sum/arr.length).toFixed(2)
}
const convertDate=(arr)=>{
    let timeList=[]
    arr.map(ele=>{
        ele = parseFloat(ele)
        let time= new Date(ele*1000).toUTCString()
        timeList.push(time)
    })
    
    return timeList
}
const defineListRam =(arr)=>{
    let listRAM = []
    arr.map(ele =>{
        listRAM.push(parseFloat(ele))
    })
    return listRAM
}
const detachData = (datas) =>{
   

    let listRAM = []
    let listCPU = []
    let listSSD = []
    let listDateTime= [] 

    datas.forEach(ele => {
        console.log("my data" +ele.cpu)
        listRAM.push(ele.ram)
        listCPU.push(ele.cpu)
        listSSD.push(ele.disk)
        listDateTime.push(ele.TIME)
    });
    const listConvert =convertDate(listDateTime)
    const CPU = getAverage(listCPU)
    const SSD = (getAverage(listSSD)/500*100).toFixed(2)

    return [defineListRam(listRAM), CPU, SSD, listConvert]
}


export default detachData;