 const program = require('commander');
 const chalk = require('chalk');
 const fs = require('fs');

 program
 .command('create <name>')
 .description('创建一个新的应用')
 .usage('create的说明')
 .action(function(name){

    let path = __dirname + '/' + name;
    if(fs.existsSync(path)){
        console.log( chalk.red(`项目${name}已经存在了`) );
    }else{
        console.log(`即将创建项目${name}`);

        fs.mkdirSync(path);
        console.log('项目目录创建成功');

        fs.writeFileSync(path+'/index.html');
        console.log('主html创建成功');

        fs.mkdirSync(path + '/css');
        console.log('css文件夹创建成功');

        fs.mkdirSync(path + '/js');
        console.log('js文件夹创建成功');

        console.log( chalk.green('项目构建完成') );
        
    }
 })
 
 program.parse( process.argv );