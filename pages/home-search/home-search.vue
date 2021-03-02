<template>
	<view class="home">
		<navbar :isSearch="true"></navbar>
		<view class="home-list">
			<view class="label-box">
				<view class="label-header">
					<text class="lable-title">搜索历史</text>
					<text class="label-clear">清空</text>
				</view>
				<view v-if="historyList.length" class="label-content">
					<view  class="label-content__item" v-for="item in historyList" :key="item">{{item}}内容</view>
				</view>
				<view v-else class="no-data">
					没有搜索历史
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				historyList:[]
			};
		}
	}
</script>

<style lang="scss" scoped>
page{
	display: flex;
	height: 100%;
	background-color: #f5f5f5;
}
.home{
	display: flex;
	flex-direction: column;
	flex: 1;
	border: 1px red solid;
	.label-box{
		background-color: #fff;
		margin-bottom: 10px;
		.label-header{
			display: flex;
			justify-content: space-between;
			font-size: 14px;
			color: #666;
			padding: 10px 15px;
			border-bottom: 1px #f5f5f5 solid;
			.lable-title{
				color:#f07373 ;
			}
			.label-clear{
				color: #30b33a;
				font-weight: bold;
			}
		}
		.label-content{
			display: flex;
			flex-wrap: wrap;
			padding: 15px;
			padding-top: 0;
			.label-content__item{
				padding: 2px 10px;
				margin-top: 12px;
				margin-right: 10px;
				border-radius: 5px;
				border: 1px #666 solid;
				font-size: 14px;
				color: #666;
			}
		}
	}
}
.no-data{
	height: 200px;
	line-height: 200px;
	width: 100%;
	text-align: center;
	font-size: 12px;
	color: #666;
}

</style>
