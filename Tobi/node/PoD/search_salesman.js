function print(a){ console.log(a); }

const SalesmanInfo = function(id,callback) {
    s1 = getSalesman(id);
    if(id==null){
        callback("Fehler");
    }
    else{
        if(s1.id<0) {
            callback("Fehler");
        }else{
            if(s1.firstName=="") {
                callback("Fehler");
            }else{
                if(s1.lastName==""){
                    callback("Fehler");
                }else{
                    if(s1.dependency==""){
                        callback("Fehler");
                    }else{
                        callback(`${s1.id} ${s1.firstName} ${s1.lastName} ${s1.dependency}`);
                    }
                }
            }
        }
    }
};

function getSalesman(id){
    s1 = new Object();
    s1.id = 66;
    s1.firstName="Tom";
    s1.lastName = "";
    s1.dependency = "UNI";
    return s1;
}


SalesmanInfo(66,print)