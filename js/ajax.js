
    
    $.get(

        'index.php',
        function(data)
        {
            var $pressure=data;
            console.log($pressure);
            $('#pressure').html($pressure);

            if( ($pressure >= 1.2) && ($pressure <= 2)){
                $('#pressure').css('background-color','green');
                $('.messages').html('Success!').css('color','green');
            }

            if( (($pressure > 2) && ($pressure <= 2.5)) || (($pressure < 1.1) && ($pressure >= 0.9))){
                $('#pressure').css('background-color','orange');
                $('.messages').html('Be careful!').css('color','orange');
            }
            if( ($pressure >= 2.6) || ($pressure < 0.9)){
                $('#pressure').css('background-color','red');
                $('.messages').html('Danger!').css('color','red');
            }
            
            
        });
