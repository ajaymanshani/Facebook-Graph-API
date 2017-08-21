 // main document ready function to check if dom is loaded fully or not

  $( document ).ready(function() {

     $('.loader').hide();


    var myFacebookToken = 'EAACEdEose0cBAFk2VDIHdpSlooZAAWfDMfR8vheZA9ipXva4UtmWzdGxIth3Rt6LBz3Yb7L68Dm4jHX9GF9jTAlJApXduwg702SV7hinCo36lJRATnZB8qXP1Gf9HJ0LSAnfMfekflcWuqNlVZAJNn6sLEARKDEvsJWnUqmU0qyTGoZAigUaynRBKwUnR0QeZB4mbXQ5mX3gZDZD';
    function getFacebookInfo(){        

        $.ajax('https://graph.facebook.com/me/?fields=name,email,id,picture,hometown,birthday,gender,feed,first_name&access_token='+myFacebookToken,{

                success : function(response){
                    $("#myName").text(response.name);
                    $("#myBirthday").text(response.birthday);
                    $("#myEmail").text(response.email);
                    $("#myHometown").text(response.hometown.name);
                    $("#gender").text(response.gender);
                    $("#myProfileId").html('<a target="blank" href="https://facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');

                    $("#feed0").text(response.feed.data[0].story);
                    $("#feed1").text(response.feed.data[1].story);
                    $("#feed2").text(response.feed.data[2].story);
                    $("#feed3").text(response.feed.data[3].story);
                    $("#feed4").text(response.feed.data[4].story);

                    $("#feed5").text(response.feed.data[0].created_time);
                    $("#feed6").text(response.feed.data[1].created_time);
                    $("#feed7").text(response.feed.data[2].created_time);
                    $("#feed8").text(response.feed.data[3].created_time);
                    $("#feed9").text(response.feed.data[4].created_time);
                },

                error : function(request,errorType,errorMessage){

                    console.log(request);
                    console.log(errorType);
                    alert("Check your console!");
                },

                timeout:5000, // in ms

                beforeSend : function(){

                    $('.loader').show();

                },

                complete : function(){

                   $('.loader').hide();

                }

            }//end argument list 



        );// end ajax call 


    }// end get facebook info

    $("#facebookBtn").on('click',getFacebookInfo)



  });