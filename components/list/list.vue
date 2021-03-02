<template>
	<swiper class="home-swiper" @change="change" :current="activeIndex">
		<swiper-item class="swiper-item" v-for="(item,index) in tab" :key="index">
			<list-item :list="listCatchData[index]" @loadmore="loadmore" :status="load[index]" :pageSize="pageSize"></list-item>
		</swiper-item>
	</swiper>
</template>
<script>
	import listItem from './list-item.vue'
	export default {
		props: {
			tab: {
				type: Array,
				default () {
					return [];
				}
			},
			activeIndex: {
				type: Number,
				default: 0
			}
		},
		components: {
			listItem
		},
		data() {
			return {
				list: [],
				listCatchData: {},
				load:{},
				pageSize:5
			};
		},
		methods: {
			change(e) {
				const {
					current
				} = e.detail;
				this.$emit("swiperChange", e.detail.current);
				if (!this.listCatchData[current] || this.listCatchData[current].length === 0) {
					this.getList(current);
				}
			},
			getList(current) {
				if(!this.load[current]){
					this.load[current] = {
						page:1,
						status:'loading'
					}
				}
				this.$api.get_list({
					name: this.tab[current].name,
					page: this.load[current].page,
					pageSize: this.pageSize
				}).then((res => {
					const {
						data
					} = res;
					if(data.length === 0){
						let oldLoad = {};
						oldLoad.status = "nomore";
						this.$set(this.load,current,oldLoad);
						//如果遇到数据没有渲染可使用强制渲染
						this.$forceUpdate();
						return;
					}
					console.log("list数据：", data);
					let oldList = this.listCatchData[current] || [];
					oldList.push(...data);
					//数据懒加载，因对象不可直接用 .表达式直接修改
					this.$set(this.listCatchData, current, oldList)

				}))
			},
			loadmore(){
				if(this.load[this.activeIndex].status === "nomore") return;
				this.load[this.activeIndex].page++;
				this.getList(this.activeIndex);
				
				
			}
		},
		watch: {
			tab(newValue) {
				if (newValue.length === 0) return;
				this.getList(this.activeIndex);
			}
		},
		filters: {
			classifyList(flist, name) {
				let arr = [];
				for (let item of flist) {
					if (item.classify === name) {
						arr.push(item);
					}
				}
				return arr;
				// return flist.filter(item => item.classify == '后端开发');
			}
		},
		created() {
			// this.getList('后端开发')
		}
	}
</script>

<style>
	.home-swiper {
		height: 100%;
	}

	.swiper-item {
		height: 100%;
		overflow: hidden;
	}

	.list-scroll {
		height: 100%;
	}
</style>
