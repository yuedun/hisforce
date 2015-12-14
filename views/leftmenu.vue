<!-- left menu starts -->
<div class="col-sm-2 col-lg-2">
	<div class="sidebar-nav">
		<div class="nav-canvas">
			<div class="nav-sm nav nav-stacked"></div>
			<ul class="nav nav-pills nav-stacked main-menu">
				<li class="nav-header">主菜单</li>
				<li>
					<a class="ajax-link" v-link="{ path: '/doday_patient' }">
						<i class="glyphicon glyphicon-star"></i>
						<span>今日工作</span>
					</a>
				</li>
				<li class="ajax-link">
					<a v-link="{ path: '/foo/bar' }">
						<i class="glyphicon glyphicon-bullhorn"></i>
						<span>预约挂号</span>
					</a>
				</li>
				<li class="accordion">
					<a class="ajax-link">
						<i class="glyphicon glyphicon-calendar"></i>
						<span>门诊管理</span>
						<span class="caret"></span>
					</a>
					<ul class="nav nav-pills nav-stacked">
						<li><a  v-link="{ path: '/foo/baz' }"><span>背包列表</span></a></li>
						<li><a href="/admin/user_exchange_list"><span>专辑券兑换列表</span></a></li>
					</ul>
				</li>
				<li class="ajax-link">
					<a class="ajax-link" v-link="{ path: '/foo/baz' }">
						<i class=" glyphicon glyphicon-user"></i>
						<span>患者管理</span>
					</a>
				</li>
				<li class="ajax-link">
					<a class="ajax-link" v-link="{ path: '/foo/baz' }">
						<i class="glyphicon glyphicon-eye-open"></i>
						<span>业务管理</span>
					</a>
				</li>
				<li class="ajax-link">
					<a class="ajax-link" v-link="{ path: '/foo/baz' }">
						<i class="glyphicon glyphicon-volume-down"></i>
						<span>提醒通知</span>
					</a>
				</li>
				<li class="ajax-link">
					<a class="ajax-link" v-link="{ path: '/foo/baz' }">
						<i class="glyphicon glyphicon-retweet"></i>
						<span>医患互动</span>
					</a>
				</li>
				<li class="ajax-link">
					<a class="ajax-link" v-link="{ path: '/foo/baz' }">
						<i class=" glyphicon glyphicon-th-large"></i>
						<span>企业管理</span>
					</a>
				</li>
				<li class="ajax-link">
					<a class="ajax-link" v-link="{ path: '/foo/baz' }">
						<i class="glyphicon glyphicon-cog"></i>
						<span>系统管理</span>
					</a>
				</li>
			</ul>
		</div>
	</div>
</div>
<!-- left menu ends -->