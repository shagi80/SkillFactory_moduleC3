function objectInfo(targetObject){  
  for (let property in targetObject){
    if (targetObject.hasOwnProperty(property)){
      console.log(`${property}=${targetObject[property]}`); 
    }
  };
};

const parentObject = {
  name : "firstObject",
  weight : 22
};

const childObject = Object.create(parentObject);
childObject.height = 120;
childObject.length = 30;


objectInfo(parentObject);

objectInfo(childObject);