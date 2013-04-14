
function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function searchkural(){
    var q = e("q");
    if(q.value != ""){
        //
        var str = "";
        for(var i=0;i<kurals.length;i++){
            var athi = kurals[i];

            for(var j=0;j<athi.Kural.length;j++){
                var kural = athi.Kural[j];
                var kall = kural.Line1+" "+kural.Line2;
                if(kall.indexOf(q.value) != -1){
                    str += "<div class='kural' id=''>";
                    str += "<div class='metadata'>"+kural.Number+" "+kural.paal+" "+kural.iyal + " " + kural.athikaaram +" "+"</div>";
                    str += "<div>"+kural.Line1+"</div>";
                    str += "<div>"+kural.Line2+"</div>";
                    str += "<div>"+kural.Translation+"</div>";
                    str += "</div>";
                }

            }
        }
        e("kurals").innerHTML = str;
       // e("athikaaram").innerHTML = "";
        //e("secNav").innerHTML = "";
        //
    }
}

function loadKurals(){
    var str = "";
    for(var i=0;i<1;i++){
    var athi = kurals[i];

    for(var j=0;j<athi.Kural.length;j++){
    var kural = athi.Kural[j];
    str += "<div class='kural' id=''>";
    //str += "<div>"+kural.Number+"</div>";
    //str += "<div>"+kural.paal+"</div>";
    //str += "<div>"+kural.athikaaram+"</div>";
    //str += "<div>"+kural.iyal+"</div>";
    str += "<div>"+kural.Line1+"</div>";
    str += "<div>"+kural.Line2+"</div>";
    str += "<div>"+kural.Translation+"</div>";
    str += "</div>";
    //str += "<hr>";

    }
    }
    e("kurals").innerHTML = str;
}
//loadKurals();

function e(ele){
    return document.getElementById(ele);
}


function createSecondNav(items, obj){
    var str = "<ul class='secNavUL'>";
    for(var i=0; i<items.length;i++){
    str +="<li onclick='loadAthikaarams(this,\""+items[i]+"\");'><a href='#"+items[i]+"'>"+items[i]+"</a></li>"
    }
    str +="</ul>";
    e("secNav").innerHTML = str;

    var chil = obj.parentNode.children;
    for(var el in chil){
        chil[el].className="";
    }
    obj.className="selected";
    e("kurals").innerHTML = "<div class='emsg'>ஒரு இயலை தேர்வு செய்யவும், பிறகு அதிகாரத்தை தேர்வுசெய்யவும்</div>";
    e("athikaaram").innerHTML = "";
}

function loadAthikaarams(obj,name){
    var str = "<ul>";
    for(var i=0; i<athik.length;i++){
    if(athik[i].iyal === name){
    var athikaarams = athik[i].athikaarams;
    for(var j=0;j<athikaarams.length;j++){
    str +="<li onclick='loadKuralsByAthikaaram(this,\""+athikaarams[j]+"\");'><a href='#"+athikaarams[j]+"'>"+athikaarams[j]+"</a></li>"
    }
    }
    }
    str +="</ul>";
    var chil = obj.parentNode.children;
    for(var el in chil){
        chil[el].className="";
    }
    obj.className="eselected";
    e("athikaaram").innerHTML = str;
    e("kurals").innerHTML = "<div class='emsg'>ஒரு அதிகாரத்தை தேர்வு செய்யவும்</div>";
}

function loadKuralsByAthikaaram(obj,athikaaram){
    var str = "";
    for(var i=0;i<kurals.length;i++){
    var athi = kurals[i];

    for(var j=0;j<athi.Kural.length;j++){
    var kural = athi.Kural[j];
    if(kural.athikaaram == athikaaram){
    str += "<div class='kural' id=''>";
    str += "<div class='knumber'>"+kural.Number+"</div>";
    str += "<div>"+kural.Line1+"</div>";
    str += "<div>"+kural.Line2+"</div>";
    str += "<div>"+kural.Translation+"</div>";
    str += "</div>";
    }

    }
    }
var chil = obj.parentNode.children;
    for(var el in chil){
        chil[el].className="";
    }
    obj.className="aselected";
    e("kurals").innerHTML = str;
}
