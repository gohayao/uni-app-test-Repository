export default function $http(options){
	return new Promise((reslove,reject) => {
		const {
			url,
			data
		} = options;
		const dataObj = {
			user_id:'603326f904fa2d0001d8ab85',
			...data
		}
		uniCloud.callFunction({
			name:url,
			data:dataObj
		}).then((res) => {
			if(res.result.code === 200){
				reslove(res.result)
			}else{
				reject(res.result)
			}
		}).catch(err =>{
			reject(err)
		})

	})

}