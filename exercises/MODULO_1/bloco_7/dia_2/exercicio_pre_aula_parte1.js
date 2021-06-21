const creatingObject = (objectName, objectKey, objectKeyValue) => {
  objectName = { };
  objectName[objectKey] = objectKeyValue;
  console.log(objectName);
}

creatingObject('teste', 'testeChave', 'teste-valor');