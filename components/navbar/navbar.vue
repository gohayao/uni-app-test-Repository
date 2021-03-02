<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<view :style="{height:statusBarHeight+'px'}"></view>
			<view class="navbar-content" :class="{search:isSearch}" :style="{height:navBarHeight+'px',width:windowWidth+'px'}"
			 @click.stop="open">
				<view class="navbar-content__search-icons">
					<uni-icons type="back" size="22" color="#fff"></uni-icons>
				</view>
				<view v-if="!isSearch" class="navbar-serach">
					<!-- 非搜索页显示 -->
					<view class="navbar-serach_icon">
						<!-- <text class="iconfont icon-sousuo"></text> -->
						<uni-icons type="search"></uni-icons>
					</view>
					<view class="navbar-serach_text"></view>
				</view>
				<view v-else  class="navbar-serach">
					<!-- 搜索页显示 -->
					<input type="text" class="navbar-serach_text"  v-model="val" @input="inputChange" placeholder="请输入要搜索的内容"/>
				</view>
			</view>

		</view>
		<view :style="{height: statusBarHeight+navBarHeight+'px'}"></view>

	</view>
</template>

<script>
	export default {
		props: {
			isSearch: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				statusBarHeight: 20,
				navBarHeight: 45,
				windowWidth: 375,
				val:''
			};
		},
		methods: {
			open() {
				if(this.isSearch) return;
				uni.navigateTo({
					url: "/pages/home-search/home-search"
				})
			},
			inputChange(e){
				const {value} = e.detail;
				
			}
		},
		created() {
			//获取状态栏高度
			const info = uni.getSystemInfoSync();
			this.statusBarHeight = info.statusBarHeight;
			this.windowWidth = info.windowWidth;
			//获取胶囊的位置,h5,app,mp-alipay不支持
			// #ifndef H5 || APP-PLUS || MP-ALIPAY

			const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
			//导航栏高度 = 胶囊底部 - 状态栏的高度 + （胶囊顶部-状态栏的高度）
			this.navBarHeight = (menuButtonInfo.bottom - info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight);
			this.windowWidth = menuButtonInfo.left;
			// #endif
		}
	}
</script>

<style lang="scss" scoped>
	@import url("../../common/css/icons.css");

	.navbar {
		.navbar-fixed {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 0;
			width: 100%;
			background-color: #f07373;

			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				box-sizing: border-box;

				.navbar-serach {
					height: 30px;
					width: 100%;
					background-color: #FFFFFF;
					display: flex;
					align-items: center;
					border-radius: 30px;
					padding: 0 10px;

					.navbar-serach_icon {
						/* 	width: 10px;
					height: 10px;
					border : 1px red solid; */
						margin-right: 10px;
					}
				}
				&.search {
					padding-left: 0;
				
					.navbar-content__search-icons {
						margin-left: 10px;
						margin-right: 10px;
					}
				
					.navbar-serach {
						border-radius: 5px;
						
						.navbar-serach_text{
							font-size: 14px;
						}
					}
				
				}
			}


		}
	}
</style>
