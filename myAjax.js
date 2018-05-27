function ajax(data) {
    data.opt = {
        url:'',
        data:{},
        success:function () {},
        fail:function () {},
        method:'get',
        dataType:'json',
        sync:true
    }

    for(var attr in data){
        data.opt[attr] = data[attr];
    }

    var ajax = new XMLHttpRequest();
    var arr = [];
    obj.opt.data['sj'] = +new Date;
    for(var attr in obj.opt){
        arr.push(attr+'='+obj.opt[attr]);
    }
    var v = arr.join('&');

    if(obj.opt.method.toLocaleLowerCase()==='get'){
        ajax.open('get',obj.opt.url+v,obj.opt.sync);
        ajax.send();
    }else if(obj.opt.method.toLocaleLowerCase()==='post'){
        ajax.open('post',obj.opt.url,obj.opt.sync);
        ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        ajax.send(v);
    }

    if(obj.opt.sync===false){
        sf();
        return;
    }

    ajax.onreadystatechange = function (ev) {
        if(ajax.readyState===4){
            sf();
        }
    }
    
    function sf() {
        if(typeof obj.opt.fail !== 'function' || typeof obj.opt.success !== 'function'){
            alert('not a function');
        }else{
            if(ajax.status>=200 && ajax.status<=207 || ajax.status == 302 || ajax.status == 304){
                obj.opt.success(ajax.responseText);
            }else{
                obj.opt.fail(ajax.status);
            }
        }
    }
}