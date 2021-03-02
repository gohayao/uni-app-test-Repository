<template>
	<view class="tab">
		<scroll-view class="tab-scroll" scroll-x="true">
			<view class="tab-scroll_box">
				<view v-for="(item,index) in list" :key="index" class="tab-scroll_item" :class="{active:activeIndex === index}" @click="clickTab(item,index)">
					{{item.name}}
				</view>
			</view>
		</scroll-view>
		<view class="tab-icons">
			<uni-icons type="gear" color="#666" size="26"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			},
			currentId:{
				type:Number,
			}
		},
		//监听props中变量值的变化
		watch:{
			currentId(newVal){
				this.activeIndex = newVal;
			}
		},
		data() {
			return {
				activeIndex:0,
				}
		},
		methods:{
			clickTab(item,index){
				this.activeIndex = index;
				this.$emit('tabClick',{
					data:item,
					index:index});
	
			}
		}
	}
</script>

<style>
	
	.tab{
		display: flex;
	  align-items: center;
		width: 100%;
		background-color: #FFFFFF;
		border-bottom: 1px #f5f5f5 solid;
		box-sizing: border-box;
	}
	.tab-scroll{
		flex: 1;
		overflow: hidden;
	}
 .tab-scroll_box{
	display: flex;
	height: 45px;
	align-items: center;
	flex-wrap: nowrap;
	box-sizing: border-box;
 }
 .tab-scroll_item{
	 flex-shrink: 0;
	 padding: 0 10px;
	 color: #33333;
	 font-size: 14px;
 }
 .tab-icons{
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 position: relative;
	 width: 45px;
 }
  .tab-icons::after{
	 content: '';
	 position: absolute;
	 top: 4px;
	 bottom: 4px;
	 left:0;
	 width: 1px;
	 background-color: #DDD;
	 }
	 .active{
		 color: #f07373;
	 }
</style>
