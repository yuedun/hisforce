<template>
	<!-- left menu starts -->
	<div class="col-sm-2 col-lg-2">
		<div class="sidebar-nav">
			<div class="nav-canvas">
				<div class="nav-sm nav nav-stacked"></div>
				<ul class="nav nav-pills nav-stacked main-menu">
					<li class="nav-header">主菜单</li>
					<li>
						<a class="ajax-link" v-link="{name:'todayWork', query:{pageTitle:'今日工作'}}">
							<i class="glyphicon glyphicon-star"></i>
							<span>今日工作</span>
						</a>
					</li>
					<li class="ajax-link">
						<a v-link="{name: 'registered', query:{pageTitle:'预约挂号'}}">
							<i class="glyphicon glyphicon-bullhorn"></i>
							<span>预约挂号</span>
						</a>
					</li>
					<li class="accordion" v-bind:class="{'active':active}" v-on:click="open(this)">
						<a class="ajax-link">
							<i class="glyphicon glyphicon-calendar"></i>
							<span>门诊管理</span>
							<span class="caret"></span>
						</a>
						<ul class="nav nav-pills nav-stacked" v-bind:style="{display: display}">
							<li><a v-link="{name:'outpatient', query:{pageTitle:'门诊中心'}}"><span>门诊中心</span></a></li>
							<li><a v-link="{name:'myReservation', query:{pageTitle:'我的预约'}}"><span>我的预约</span></a></li>
						</ul>
					</li>
					<li class="accordion">
						<a class="ajax-link">
							<i class=" glyphicon glyphicon-user"></i>
							<span>患者管理</span>
							<span class="caret"></span>
						</a>
						<ul class="nav nav-pills nav-stacked" style="display:block;">
							<li><a ><span>患者中心</span></a></li>
							<li><a ><span>集团用户</span></a></li>
						</ul>
					</li>
					<li class="accordion" v-on:click="open">
						<a class="ajax-link">
							<i class="glyphicon glyphicon-eye-open"></i>
							<span>业务管理</span>
							<span class="caret"></span>
						</a>
						<ul class="nav nav-pills nav-stacked">
							<li><a  v-link="{ path: '/index/baz' }"><span>业务中心</span></a></li>
							<li><a href="/admin/user_exchange_list"><span>联系人管理</span></a></li>
						</ul>
					</li>
					<li class="ajax-link">
						<a class="ajax-link" v-link="{ path: '/index/baz' }">
							<i class="glyphicon glyphicon-volume-down"></i>
							<span>提醒通知</span>
						</a>
					</li>
					<li class="ajax-link">
						<a class="ajax-link" v-link="{ path: '/index/baz' }">
							<i class="glyphicon glyphicon-retweet"></i>
							<span>医患互动</span>
						</a>
					</li>
					<li class="ajax-link">
						<a class="ajax-link" v-link="{ path: '/index/baz' }">
							<i class=" glyphicon glyphicon-th-large"></i>
							<span>企业管理</span>
						</a>
					</li>
					<li class="ajax-link">
						<a class="ajax-link" v-link="{ path: '/index/baz' }">
							<i class="glyphicon glyphicon-cog"></i>
							<span>系统管理</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<!-- left menu ends -->
</template>
<script>
	module.exports= {
        data: function(){
            return {
            	active: false,
            	display: "none"
            }
        },
        methods:{
        	open:function(el){
        		this.active = true;
        		this.display = "block";
        	}
        }
    }
</script>