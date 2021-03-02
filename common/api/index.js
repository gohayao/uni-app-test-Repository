// import  {get_label} from './list.js'
// export default{
// 	get_label
// }

//批量导出文件
const requireAll = require.context(
	//api相对路径
	'.',
	//是否查询子目录
	false,
	//匹配文件的后缀
	/.js$/ 
)
let module = {}

requireAll.keys().forEach((key,index) => {
	if(key === './index.js') return;
	Object.assign(module,requireAll(key))
})

export default module;