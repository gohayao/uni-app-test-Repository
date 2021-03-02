'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
exports.main = async (event, context) => {
	// let list = await db.collection('article')
	// .field({
	//true 只返回这个字段，false不返回
	// 	content:false
	// })
	// .get()
	const {
		user_id,
		name,
		page = 1,
		pageSize = 10
	} = event;
	let matchObj = {};
	if (name !== "全部") {
		matchObj = {
			classify: name
		}
	}
	const userInfo = await db.collection('user').doc(user_id).get()
	const article_likes_ids = userInfo.data[0].article_likes_ids;
	//使用聚合函数获取值
	const list = await db.collection('article')
		.aggregate()
		.addFields({
			is_like:$.in(['$_id',article_likes_ids])
		})
		.match(matchObj)
		.project({
			content: 0
		})
		//要跳过多少数据
		.skip(pageSize * (page - 1))
		.limit(pageSize)
		.end()
	//event为客户端上传的参数
	// console.log('event : ', event)

	//返回数据给客户端
	return {
		code: 200,
		msg: '数据请求成功',
		data: list.data
	}
};
