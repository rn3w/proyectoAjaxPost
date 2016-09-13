
var map=new Map(); // mi mapa para cada tecla.
    var startDOWNPress;
    var startUPDOWN;
    var startPressUP;
    var key_cadaTecla= []; //vector para cada tecla e introducirlo en mapCadaTecla
    var key_strokes= [];
    var key_strokes_Mismas= [];

    var teclaActual;
    var id;
    var tiempoPulsacion;
    var time;
    var texto="no existe 1 rayo zapato zanahorea karaoke Whisky software wikipedia jinete japon jabon facil frio rayo yogur habil hablar galleta gigante gentil valiente vehiculo vegetariano quebrado quemado botella bandido brazil baile patata patria palabra marcial maqueta manantial caballero temperatura tercero ubicar urgente delfin delgado danza lectura laboratorio ilusivo inadvertencia ilimitado nacido narrado racionalidad radiactivo racismo satelite septiembre obstruir oscilatorio elogioso embajada emblema abundancia kiwi";
    
    function esLaMisma(key_id){
        var res=false;
        if(key_id==teclaActual){
            res=true ;
        }
        return res;
    }
    
    function is_special_key(key_id) {
    switch(key_id) {
        case 8: return true;    // Backspace
        case 9: return true;    // Enter
        case 13: return true;   // Tab
        case 17: return true;   // Ctrl
        case 18: return true;   // Alt
        case 19: return true;   // Pause
        case 27: return true;   // Esc
        case 33: return true;   // Pg up
        case 34: return true;   // Pg down
        case 35: return true;   // End
        case 36: return true;   // Home
        case 37: return true;   // Left
        case 38: return true;   // Up
        case 39: return true;   // Right
        case 40: return true;   // Down
        case 45: return true;   // Insert
        case 46: return true;   // Delete
        case 91: return true;   // Windows
        case 93: return true;   // Dialog
        case 112: return true;  // F1
        case 113: return true;  // F2
        case 114: return true;  // F3
        case 115: return true;  // F4
        case 116: return true;  // F5
        case 117: return true;  // F6
        case 118: return true;  // F7
        case 119: return true;  // F8
        case 120: return true;  // F9
        case 121: return true;  // F10
        case 122: return true;  // F11
        case 123: return true;  // F12
        case 145: return true;  // Scroll
        default: return false;
    }
}

function claves(id, time) {
    this.id = id;
    this.time = time;
}

        $(function () {
            var captureInput = $('.clickme');
            $(captureInput).focus();

                $(captureInput).keydown(function(event){ 
                    startDOWNPress = (new Date()).getTime();
                    if (!is_special_key(event.keyCode)) {
                        var delta=startDOWNPress-startUPDOWN;
                        
                        document.getElementById("cnt").innerHTML = "tiempo de Up a Down:     " + delta; 
                        key_strokes.push(new claves(event.keyCode,delta));
                        if (esLaMisma(event.keyCode)) {
                            var concat;
                            key_strokes_Mismas.push(new claves(event.keyCode,delta));
                            document.getElementById("keyMismos").innerHTML = "tiempo de mismas teclas:  ";
                            for (var i = 0; i < key_strokes_Mismas.length; i++) {
                                var result=document.createTextNode("("+key_strokes_Mismas[i].id+" "+key_strokes_Mismas[i].time+")        ");
                                document.getElementById("keyMismos").appendChild(result);
                            };
                        };
                    };                   
                });

                $(captureInput).keypress(function(event){
                    startPressUP = (new Date()).getTime();

                    if (!is_special_key(event.keyCode)) {
                        var delta=startPressUP-startDOWNPress;
                        tiempoPulsacion=tiempoPulsacion+delta;
                        document.getElementById("time").innerHTML = "tiempo de Down a Press:    " + delta;
                        key_strokes.push(new claves(event.keyCode,delta));
                    };
                }); 
            
                $(captureInput).keyup(function(event){
                    
                    startUPDOWN= (new Date()).getTime();
                    if (!is_special_key(event.keyCode)) {
                        var delta= startUPDOWN - startPressUP;
                        tiempoPulsacion=tiempoPulsacion+delta;
                        key_cadaTecla.push(new claves(event.keyCode,tiempoPulsacion));
                        // map.put(event.keyCode, tiempoPulsacion);
                        // var vector=map.get(event.keyCode);
                        // alert(vector);
                        // document.getElementById("especial").innerHTML = "especial:  ";
                        // for (var i = 0; i < vector.length; i++) {
                        //         var result=document.createTextNode("("+vector[i]+")");
                        //         document.getElementById("especial").appendChild(result);
                        //     };
                        document.getElementById("keyCadaTecla").innerHTML = "tiempo de cada tecla:  ";
                        for (var i = 0; i < key_cadaTecla.length; i++) {
                                var result=document.createTextNode("("+key_cadaTecla[i].id+" "+key_cadaTecla[i].time+")");
                                document.getElementById("keyCadaTecla").appendChild(result);
                            };
                        document.getElementById("ult").innerHTML = "tiempo de Press a Up:   " + delta ;
                        teclaActual=event.keyCode;
                    };  
                    tiempoPulsacion=0;
                }); 
        });


$(window).on('load', function() {           
            
    var id = 'idUsuario';
    $('#add-new-fact').click(function() {
    var fact = $('#new-fact').val();
    $.ajax({
      type: "POST",
      url: "/servidor",
      data: JSON.stringify({ fact: fact }),
     // contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function(data) {
        $('<li>').appendTo('#facts').text(title);
        $('#new-fact').val('');
      },
      error: function(err) {
        var msg = 'Status: ' + err.status + ': ' + err.responseText;
        alert(msg);
      }
    });
    return false;
  });
            
        }); 