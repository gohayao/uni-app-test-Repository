<template>
	<view>
		<view class="icons" @click.stop="likeTap">
			<uni-icons size="20" color="#f07373" :type="like?'heart-filled':'heart'"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		data() {
			return {
				like:false

			};
		},
		methods: {
			likeTap() {
				this.like = !this.like
				this.setUpdateLikes();
     
			},
			setUpdateLikes(){
				uni.showLoading();
				this.$api.update_like({
					user_id:'603326f904fa2d0001d8ab85',
					article_id:this.item._id
				}).then(res => {
					uni.hideLoading();
					uni.showToast({
						title:this.like?'收藏成功':'取消收藏',
						icon:'none'
					})
					console.log(res);
				}).catch(() => {
					uni.hideLoading();
				})
			}
		},
		created() {
			this.like = this.item.is_like
		},
		watch:{
			item(newVal){
				this.like = newVal;
			}
		}
	}
</script>

<style lang="scss">
	.icons {
		position: absolute;
		right: 0;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
	}
</style>
