<template>
	<div class="row">
        <div class="col-md-12 center login-header">
            <h2>云大夫管理系统</h2>
        </div>
        <!--/span-->
    </div><!--/row-->
    <div class="row">
        <div class="well col-md-5 center login-box">
            <div class="alert alert-info" id="warn">{{loginMsg}}</div>
            <form class="form-horizontal" method="http://121.42.171.213:8080/api/login" method="post" v-on:keyup.13="logon">
                <fieldset>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user red"></i></span>
                        <input type="text" id="username" v-model="username" class="form-control" placeholder="用户名" value="{{username}}" required="required">
                    </div>
                    <div class="clearfix"></div><br>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock red"></i></span>
                        <input type="password" id="password" v-model="password" class="form-control" placeholder="密码" value="{{password}}"  required="required">
                    </div>
                    <p class="center col-md-5">
                        <a class="btn btn-primary" value="登陆" @click="logon">登录</a>
                    </p>
                </fieldset>
            </form>
        </div>
    </div>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                username: "13671719882",
                password: "111",
                loginMsg: "请用您的用户名和密码登录"
            }
        },
        methods: {
            logon: function(){
                var username = this.username;
                var password = this.password;
                this.loginMsg = "正在登陆……";
                this.$http.post("http://121.42.171.213:8080/api/login", 
                    {username:username, password: password}, 
                    function (data, status, request) {
                        localStorage.token = data.data.token;
                        this.$route.router.go({name: "index"});
                    }).error(function (data, status, request) {
                        if(status == 0) {
                            this.loginMsg = "登录失败！";
                        }
                    });
            }
        }
    }
</script>
