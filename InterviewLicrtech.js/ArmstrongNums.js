// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
function armstrongNum(nums){
    let strValues = nums.toString()
    let values = strValues.split("")
    console.log(values)
    let newValues=[]
    for(let i=0;i<values.length; i++){
        if(values[i]^3 === values[i] ){
            newValues.push(values[i])
            console.log(newValues)
           
        }
        
    }
    let itsArmstrong = false
    for(let j=0;j<values.length ;j++){
        if(newValues[j]===values[j]){
            itsArmstrong = true
           
        }else{
            itsArmstrong = false
            return console.log("its not an armstrong number")
        }
      
    }
      if(itsArmstrong == true){
        return console.log("its an armstrong number")
    }
    
    
}
let values = 173
armstrongNum(values)
