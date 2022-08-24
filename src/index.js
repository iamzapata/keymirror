export function keyMirrorFromList(keyList) {
  const object = {};

  for (const key of keyList) {
    object[key] = key;
  }

  return object;
}

export function keyMirrorFromNullOrUndefinedObject(object) {
  const newObject = {};

  for (const key of Object.keys(object)) {
    newObject[key] = key;
  }

  return newObject;
}
