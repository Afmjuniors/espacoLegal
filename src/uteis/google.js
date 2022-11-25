

const findTheLongestWord = (array) =>{
    let max =""
    for( let element of array){
        if(element.length > max.length){
            max=element
        }
    }
    return max;
}


function mapString(string){
    let map = {}
   
    for(let i = 0; i<string.length ; i++){
      
        let letter =string[i]
        if(map[letter]){
            map[letter].push(i)
        }else{
            map[letter] = [i]
        }
    }


    return map
}
const mapaAlexandre = mapString("Alexandre")

const compereLetters = (word, obj) =>{
    for(let letter of word){
        if(!obj[letter]){
            return false
        }
    }
    return true

}

// console.log(compereLetters("b",a));

const findNextIndex = (array , minIndex)=>{
    for (let element of array){
        if(element >=minIndex){
            return element+1
        }
    }
    return false
}

const isSubseuqence = (word, map) =>{
    let minIndex =0;
    for(let letter of word){
        if(map[letter]){
            minIndex=findNextIndex(map[letter],minIndex)
        if(!minIndex){
            return false
        }
        }else{
            return false
        }
    }
    return true
}
console.log(isSubseuqence("Alx",mapaAlexandre));

const longestMatch =  (string, dictionary)=>{
    let arrsubSequecece =[]
    let objString = mapString(string)
    console.log(objString);
    
    for (let word of dictionary){
        // console.log(isSubseuqence("Al", objString));
        if(isSubseuqence(word, objString)){

            arrsubSequecece.push(word)
        }
    }
 console.log(arrsubSequecece);

}

