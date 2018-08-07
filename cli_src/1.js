//通过node来执行
const program = require('commander');

// console.log(process.argv);  //process.argv命令行中的数据

program
.version('1.0.0','-v,--version')  //设置当前脚本的版本信息，自动给当前命令加-v,--version
.usage('我是使用说明')  //设置说明
// .arguments('<v>')  //配置命令参数
.option('-a,--all','查看所有内容',()=>{
    console.log(666);
})
.option('-n,--number <n>','',function(v){
    console.log(v);
})

//创建子命令
program
.command('create <name>')
.description('创建新的应用')
.usage('我是create的说明书')  //有action之后这里-h才会显示
.action(a=>{
    console.log('创建新应用'+a);
})

//解析当前命令行中的数据，自动生成-h类似帮助文件
program.parse( process.argv );