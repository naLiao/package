//node运行，实现ls功能
const program = require('commander');
const chalk = require('chalk');
const fs = require('fs');


program
.arguments('<path>')
.option('-l,--list')
.action(function(path){
    // console.log(path);
    let files = fs.readdirSync(path);  //读取路径下的所有文件
    // console.log(this.list);
    let str = '';
    if(this.list){  //如果输入了-l
        files.forEach(e=>{
            let f = fs.statSync(path + '/' + e);
            if(f.isDirectory()){  //文件夹用黄色字体
                str += chalk.yellow(e) + '\r\n';
            }else{
                str += e+'\r\n';
            }
        });
        console.log(str);
    }else{
        console.log(files);
    }
})

process.argv.push(__dirname);

program.parse( process.argv );