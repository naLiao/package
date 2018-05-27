

function ajax(data) {
    let obj = {
        url:'',
        data:{},
        success:function () {},
        fail:function () {},
        method:'get',
        dataType:'json',
        sync:true
    }

    for(var attr in data){
        obj[attr] = data[attr];
    }

    var ajax = new XMLHttpRequest();
    var arr = [];
    obj.data['sj'] = +new Date;
    for(var attr in obj){
        arr.push(attr+'='+obj[attr]);
    }
    var v = arr.join('&');

    if(obj.method.toLocaleLowerCase()==='get'){
        ajax.open('get',obj.url+v,obj.sync);
        ajax.send();
    }else if(obj.method.toLocaleLowerCase()==='post'){
        ajax.open('post',obj.url,obj.sync);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(v);
    }

    if(obj.sync===false){
        sf();
        return;
    }

    ajax.onreadystatechange = function (ev) {
        if(ajax.readyState===4){
            sf();
        }
    }
    
    function sf() {
        if(typeof obj.fail !== 'function' || typeof obj.success !== 'function'){
            alert('not a function');
        }else{
            if(ajax.status>=200 && ajax.status<=207 || ajax.status == 302 || ajax.status == 304){
                if(obj.dataType == 'xml'){
                    obj.success(ajax.responseXML);
                }else if(obj.dataType == 'json'){
                    obj.success(eval('('+ajax.responseText+')'));
                }else{
                    obj.success(ajax.responseText);
                }
            }else{
                obj.fail(ajax.status);
            }
        }
    }
}