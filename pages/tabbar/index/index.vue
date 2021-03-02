<template>
	<view class="content">
		<navbar></navbar>
		<tab :list="tabList" @tabClick="tabClick" :currentId="currentId"></tab>
		<view class="home-list">
			<list :tab="tabList" @swiperChange="swiperChange" :activeIndex="activeIndex"></list>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				tabList:[],
				currentId:0,
				activeIndex:0
			}
		},
		onLoad() {
     this.getLabel();
		},
		methods: {
			getLabel(){
				console.log(this.$api.get_label());
				this.$api.get_label().then((res) => {
					let {data} = res;
					data.unshift({
						name:'全部'
					})
					this.tabList = data;
				})

			},
			tabClick({data,index}){
				this.activeIndex = index;
				
			},
			swiperChange(id){
				this.activeIndex = id;
				this.currentId = id;
			}

		}
	}
</script>

<style>
page{
	height: 100%;
	width: 100%;
	display: flex;
}
.content{
	display: flex;
	flex-direction: column;
	flex: 1;
	width: 100%;
	overflow: hidden;
}
.home-list{
	flex: 1;
	box-sizing: border-box;
}

</style>
