function hasProperty(targetObject, propertyName){  
  return (propertyName in targetObject)
};

const parentObject = {
  name : "firstObject",
  weight : 22
};

const childObject = Object.create(parentObject);
childObject.height = 120;
childObject.length = 30;

console.log(`Property 'name' in object: ${hasProperty(childObject, "name")}`);
console.log(`Property 'name1' in object: ${hasProperty(childObject, "name1")}`);
console.log(`Property 'height' in object: ${hasProperty(childObject, "height")}`);