<template>
	<view>
		<!-- 基础卡片 -->
		<view v-if="item.mode === 'base'" class="listcard">
			 <view class="listcard-image">
			 	<image :src="item.cover[0]" mode="aspectFill"></image>
			 </view>
			 <view class="listcard-content">
			 	<view class="listcard-content_title">
			 		<text>{{item.title}}</text>
					<likes :item="item" ></likes>
			 	</view>
				<view class="listcard-content__des">
					<view class="listcard-content__des-label">
						<view class="listcard-content__des-label-item">
							{{item.classify}}
						</view>
					</view>
					<view class="listcard-content__des-brower">{{item.browse_count}}浏览人数</view>
				</view>
			 </view>
		 </view>
		 <!-- 多图模式 -->
		 <view v-else-if="item.mode === 'column'" class="listcard mode-column">
		 			 <view class="listcard-content">
		 			 	<view class="listcard-content_title">
		 			 		<text>{{item.title}}</text>
							<likes :item="item"></likes>
		 			 	</view>
						<view class="listcard-image listcard-image-mode">
							<view v-if="index < 3" v-for="(imgItem,index) in item.cover" :key="index" class="listcard-image-item listcard-image-item-mode">
								<image :src="imgItem" mode="aspectFill"></image>
							</view>
							
						</view>
		 				<view class="listcard-content__des listcard-content__des-mode">
		 					<view class="listcard-content__des-label">
		 						<view class="listcard-content__des-label-item">
		 							{{item.classify}}
		 						</view>
		 					</view>
		 					<view class="listcard-content__des-brower">{{item.browse_count}}浏览人数</view>
		 				</view>
		 			 </view>
		 </view>
		 <!-- 大图模式 -->
		 <view  v-else-if="item.mode == 'image'" class="listcard mode-image">
			 <view class="listcard-image listcard-image-big">
			 		<image :src="item.cover[0]" mode="aspectFill"></image>
			 </view>
		 			 <view class="listcard-content listcard-image-content">
		 			 	<view class="listcard-content_title">
		 			 		<text>{{item.title}}</text>
							<likes :item="item"></likes>
		 			 	</view>
		 				<view class="listcard-content__des listcard-content__des-image">
		 					<view class="listcard-content__des-label">
		 						<view class="listcard-content__des-label-item">
		 							{{item.classify}}
		 						</view>
		 					</view>
		 					<view class="listcard-content__des-brower">{{item.browse_count}}浏览人数</view>
		 				</view>
		 			 </view>
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
				
			};
		}
	}
</script>

<style>
.listcard{
	display: flex;
	padding: 10px;
	margin: 10px;
	border-radius: 5px;
	box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
	box-sizing: border-box;
}
.listcard-image{
	width: 60px;
	height: 60px;
	border-radius: 5px;
	overflow: hidden;
	flex-shrink: 0;
}
image{
	height: 100%;
	width: 100%;
}
.listcard-content{
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding-left: 10px;
	width: 100%;
}
.listcard-content_title{
	position: relative;
	font-size: 14px;
	color: #333;
	font-weight: 400;
	line-height: 1.2;
	padding-right: 30px;
}
.listcard-content__des{
	display: flex;
	justify-content: space-between;
	}
	.listcard-content__des-label{
		display: flex;
		
	}
	.listcard-content__des-label-item{
		padding: 0 5px;
		margin-right: 5px;
		border-radius: 15px;
		border:1px #f07373 solid;
		color: #f07373;
		}
  .listcard-content__des-brower{
		color: #999;
		line-height: 1.5;
	}
	text{
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp:2;
		-webkit-box-orient:vertical;
	}
	.listcard-image-mode{
		display: flex;
		margin-top: 10px;
		width: 100%;
		height: 70px;
	}
	.listcard-image-item-mode{
		margin-left: 10px;
		width: 100%;
		border-radius: 5px;
		overflow: hidden;
	}
	.listcard-image-item-mode:first-child{
		margin-left: 0;
	}
	.listcard-content__des-mode{
		margin-top: 10px;
	}
	.mode-image{
		flex-direction: column;
	}
	.listcard-image-big{
		width: 100%;
		height: 100px;
	}
	.listcard-image-content{
		padding-left: 0;
		margin-top: 10px;
	}
	.listcard-content__des-image{
		display: flex;
		align-items: center;
		margin-top: 10px;
	}

</style>
