// YOUR CODE GOES HERE!!!
/*************************/
function getFirstName(obj){
  return obj.firstName
}

function getLastName(obj){
  return obj.lastName
}

function getFullName(obj){
  return obj.firstName + " " + obj.lastName
}

function setFirstName(obj, obj2){
obj.firstName = obj2
return obj
}

function setAge(obj, obj2){
  obj.age = obj2
  return obj
}

function giveBirthday(obj){
  if(obj.age >= 1){
    obj.age += 1
  }else{
    if(!obj.age){
      obj.age = 1
    }
  } return obj
}


function marry(obj1, obj2){
  obj1.married = true
  obj2.married = true
  obj1.spouseName = getFullName(obj2)
  obj2.spouseName = getFullName(obj1)

}

function divorce(obj1, obj2){
  obj1.married = false
  obj2.married = false
  delete obj1.spouseName
  delete obj2.spouseName
}

/****************************/
// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}



module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
