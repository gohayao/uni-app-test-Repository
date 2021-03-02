<template>
	<list-scroll class="list-scroll" @loadmore="loadmore">
		<list-card  v-for="(item,index) in list" :item="item" :key="index"></list-card>
		<uni-load-more v-if="list.length === 0 || list.length > (pageSize-1)" iconType="snow" :status="status.status"></uni-load-more>
	</list-scroll>
</template>

<script>
	export default {
		props:{
			list: {
				type: Array,
				default() {
					return []
				}
			},
			status:{
				type:Object,
				default(){
					return {
						status:'loading'
					}
				}
			},
			pageSize:{
				type:Number,
				default:0
			}
		},
		data(){
			return {
				
			}
		},
		methods:{
			loadmore(){
				this.$emit('loadmore');
			}
		}
	}
</script>

<style>
	.list-scroll{
		height: 100%;
	}
</style>
