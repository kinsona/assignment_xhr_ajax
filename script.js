var $ = {
  ajax: function(options) {

    var xhr = new XMLHttpRequest();

    xhr.open(options.method, options.url, options.async);

    xhr.onload = function(event) {
      if (options.complete && xhr.readyState === 4) {
        options.complete(this, this.statusText);
      };

      if (xhr.status >= 200 && xhr.status < 400) {
        if (options.success) {
          options.success(this.responseText, this.statusText, this);
        };
      } else if (options.error) {
        options.error(this, this.status, this.statusText)
      };
    }


    //for each key, value
    for(var key in options.headers) {
      xhr.setRequestHeader(key, options.headers[key]);
    };

    xhr.send(options.data);

    return xhr;
  },


  get: function(options) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", options.url, true);

    xhr.onload = function(event) {
      if (options.success && xhr.status >= 200 && xhr.status < 400) {
        options.success(this.responseText, this.statusText, this);
      };
    };

    xhr.send(options.data);

    return xhr;
  },


  post: function(options) {

    var xhr = new XMLHttpRequest();

    xhr.open("POST", options.url, true);

    xhr.onload = function(event) {
      if (options.success && xhr.status >= 200 && xhr.status < 400) {
        options.success(this.responseText, this.statusText, this);
      };
    };

    xhr.send(options.data);

    return xhr;
  }
}




var EXAMPLES = EXAMPLES || {};

EXAMPLES.getSuccess = {
  method: "GET",
  url: "http://reqr.es/api/user/2",
  async: true,
  complete: function(obj, status) { console.log("Completed!");
    console.log(obj);
    console.log(status);
  },
  error: function(obj, obj2, status) {
    console.log("Error!");
    console.log(obj);
    console.log(obj2);
    console.log(status);
  },
  success: function(response, status, obj) {
    console.log("Success!");
    console.log(response);
    console.log(status);
    console.log(obj);
  }
}


EXAMPLES.getError = {
  method: "GET",
  url: "http://reqr.es/api/user/23",
  async: true,
  complete: function(obj, status) { console.log("Completed!");
    console.log(obj);
    console.log(status);
  },
  error: function(obj, obj2, status) {
    console.log("Error!");
    console.log(obj);
    console.log(obj2);
    console.log(status);
  },
  success: function(response, status, obj) {
    console.log("Success!");
    console.log(response);
    console.log(status);
    console.log(obj);
  }
}


EXAMPLES.postSuccess  = {
  method: "POST",
  url: "http://reqr.es/api/users",
  async: true,
  data: {
    "name": "morpheus",
    "job": "leader"
  },
  complete: function(obj, status) { console.log("Completed!");
    console.log(obj);
    console.log(status);
  },
  error: function(obj, obj2, status) {
    console.log("Error!");
    console.log(obj);
    console.log(obj2);
    console.log(status);
  },
  success: function(response, status, obj) {
    console.log("Success!");
    console.log(response);
    console.log(status);
    console.log(obj);
  }
}

EXAMPLES.postError  = {
  method: "POST",
  url: "http://reqr.es/api/register",
  async: true,
  data: {
    "email": "sydney@fife"
  },
  complete: function(obj, status) { console.log("Completed!");
    console.log(obj);
    console.log(status);
  },
  error: function(obj, obj2, status) {
    console.log("Error!");
    console.log(obj);
    console.log(obj2);
    console.log(status);
  },
  success: function(response, status, obj) {
    console.log("Success!");
    console.log(response);
    console.log(status);
    console.log(obj);
  }
}

// Get a list of users in JSON form
/*var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    console.log( this.responseText )
});
xhr.open("GET", "http://reqr.es/api/users", true);
xhr.send();
*/

// Create a user
/*var xhr = new XMLHttpRequest();
xhr.addEventListener( "load", function(){
    console.log( this.responseText )
});
xhr.open("POST", "http://reqr.es/api/users", true);
xhr.send("name=foo&job=bar");
*/