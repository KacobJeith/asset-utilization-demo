
export var ConvertIPAddressToByteArray = (stringIP) => {
  var split = stringIP.split('.');
  var byteArray = [];
  for (var i = 0; i < split.length; i++){
    byteArray.push(parseInt(split[i]));
  }

  return byteArray
}

export var GetDeviceIDAsByteArray = (value) => {
  var deviceIDbuf = Buffer.from(value, 'hex'); 
  var deviceID = [...deviceIDbuf];
  return deviceID
}

export var GetValueAsFixedSizeByteArray = (value, size) => {
  var valueBytes = GetByteArrayFromValue(value, size);
  var backfill = size - valueBytes.length;
  for (var i = 0; i < backfill; i++){
    valueBytes.unshift(0x00);
  }
  
  return valueBytes
}

export var GetStringAsByteArray = (str) => {
  console.log('STRING: ', str);
  var myBuffer = [];
  var bufferutf = new Buffer(str, 'utf-8');
  var bufTest = ByteArrayToHexString(bufferutf);
  var buffer = Buffer.from(bufTest, 'hex');

  // console.log(bufferutf);
  // console.log(bufTest);
  // console.log(buffer);


  for (var i = 0; i < buffer.length; i++) {
    if (buffer[i] != 194) {
      myBuffer.push(buffer[i]);
    }
  }

  return myBuffer
}


export var GetByteArrayFromValue = (value, numBytes = GetNecessaryBytes(value)) => {
  var byteArray = [];

  for (var i = 0; i < numBytes; i++){ 
    var hexVal = value % 256;
    byteArray.unshift(hexVal);
    value = value >> 8;
  }

  return byteArray
}

export var GetNecessaryBytes = (value) => {
  var numBytes = 1;
  value = value >> 8;

  while (value > 0) {
    numBytes += 1;
    value = value >> 8;
  }

  return numBytes
}


export var GetIntFromByteArray = (buffer) => {
  
  var integer = 0;

  for (var i = 0; i < buffer.length; i++) {
    integer += (buffer[buffer.length - i - 1] <<  8*i) >>> 0;
  }

  return integer
}

export var GetIntFromByteArrayLarge = (buffer) => {

  var integer = 0;

  for (var i=0; i < buffer.length; i++) {
    integer += buffer[i] * Math.pow(2, 8 * (buffer.length - (i+1)));
  }

  return integer

}

export const ByteArrayToBase64String = (arrayBuffer) => {
  let base64String = new Buffer(arrayBuffer).toString('base64');
  return base64String
}

export const ByteArrayToHexString = (arrayBuffer) => {
  let hexString = new Buffer(arrayBuffer).toString('hex');
  return hexString
}

export const base64ToArrayBuffer = (base64) => {
    var binary_string =  atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array( len );
    for (var i = 0; i < len; i++)        {
        bytes[i] = binary_string.charCodeAt(i);
    }

    return bytes;
}
