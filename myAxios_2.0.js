

function axios2(json){
    return new Promise(function(resolve,reject){
        var obj = {
            url:'',
            data:{},
            methods:'get',
            dataType:'json',
            sync:true
        }
        for(var attr in json){
            obj[attr] = json[attr];
        }
    
        var ajax = new XMLHttpRequest;
        var arr = [];
        obj.data['sj'] = +new Date;
    
        for(var attr in obj.data){
            arr.push(attr + '=' + obj.data[attr])
        }

        if(obj.methods.toLowerCase() === 'get'){
            ajax.open('get',obj.url + '?' + arr.join('&'),obj.sync);
            ajax.send();
        }else if(obj.methods.toLowerCase() === 'post'){
            ajax.open('post',obj.url,obj.sync);
            ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
            ajax.send(arr.join('&'));
           
        }
    
        if(obj.sync == false){
            sf();
            return;
        }
    
        ajax.onreadystatechange = function(){
            if(ajax.readyState == 4){
                sf();
            }
        }
    
        function sf(){
            if(ajax.status >= 200 && ajax.status <= 207 || ajax.status == 302 || ajax.status == 304){
                if(obj.dataType == 'xml'){
                    resolve(ajax.responseXML)
                }else if(obj.dataType == 'json'){
                    resolve(eval('('+ajax.responseText+')'));
                }else{
                    resolve(ajax.responseText);
                }
            }else{
                reject(new Error(ajax.status));
            }
        }
    });
}


