import $ from 'jquery';

var urlPrefix = '';

export var saveURL = (url) => {
  urlPrefix = url;
}

export var submitContactForm = (name, company, email, message) => {

  var messagePacket = {
    name: name, 
    company: company, 
    email: email, 
    message: message
  };

  // var url = urlPrefix.concat('/submitContactForm');
  
  performAJAX('https://us-central1-heep-3cddb.cloudfunctions.net/submitContactForm', messagePacket);
  
};


export var performAJAX = (url, messagePacket, type = 'POST', callback = (data) => {} ) => {
  $.ajax({
    url: url,
    type: type,
    data: messagePacket,
    success: (data) => {
      callback(data)
    },
    error: function(xhr, status, err) {
      console.error(url, status, err.toString());
      console.log('Hitting Commands sendDataToServer error')
    }
  });
}




