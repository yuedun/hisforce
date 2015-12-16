<template>
<!-- topbar starts -->
<div class="navbar navbar-default" role="navigation">
	<div class="navbar-inner">
		<button type="button" class="navbar-toggle pull-left animated flip">
			<span class="sr-only">Toggle navigation</span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
			<span class="icon-bar"></span>
		</button>
		<a class="navbar-brand" href="javascript:void(0)">
			<img alt="Charisma Logo" src="" class="hidden-xs" />
			<span>云大夫</span></a>
		<!-- user dropdown starts -->
		<div class="btn-group pull-right">
			<button class="btn btn-default dropdown-toggle" data-toggle="dropdown">
				<i class="glyphicon glyphicon-user"></i><span class="hidden-sm hidden-xs">username</span>
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a href="/admin/logout">退出</a></li>
			</ul>
		</div>
	</div>
</div>
<!-- topbar ends -->
</template>