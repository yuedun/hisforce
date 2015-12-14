<template>
    <nvHead></nvHead>
	<div class="row">
        <div class="col-md-12 center login-header">
            <h2>云大夫管理系统</h2>
        </div>
        <!--/span-->
    </div><!--/row-->
    <div class="row">
        <div class="well col-md-5 center login-box">
            <div class="alert alert-info" id="warn">请用您的用户名和密码登录</div>
            <form class="form-horizontal" method="http://121.42.171.213:8080/api/login" method="post" onsubmit="return false;">
                <fieldset>
                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-user red"></i></span>
                        <input type="text" id="username" name="userName" class="form-control" placeholder="用户名" value="" required="required">
                    </div>
                    <div class="clearfix"></div><br>

                    <div class="input-group input-group-lg">
                        <span class="input-group-addon"><i class="glyphicon glyphicon-lock red"></i></span>
                        <input type="password" id="password" name="passWord" class="form-control" placeholder="密码" value=""  required="required">
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
    var browser = {
        versions: function() {
            var u = navigator.userAgent,
                app = navigator.appVersion;
            return { //移动终端浏览器版本信息
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
                android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1, //是否iPad
            };
        }(),
    }
    module.exports = {
        data: function () {
            var self = this;
            return {
                token: '',
                /*弱提示*/
                alert: {
                    txt: '',
                    show: false,
                    hideFn:function(){
                        var timer;
                        clearTimeout(timer);
                        timer = setTimeout(function () {
                            self.alert.show = false;
                        }, 1000);
                    }
                },
                loading:{
                    show:false,
                    showTxt:'登录中……'
                }
            }
        },
        methods: {
            logon: function(){
                var self = this;
                if(self.token == ''){
                    var text = "令牌格式错误,应为36位UUID字符串";
                    self.alert.txt = text;
                    self.alert.show = true;
                    self.alert.hideFn();
                    return false;
                }
                $.ajax({
                    type:'POST',
                    url:'https://cnodejs.org/api/v1/accesstoken',
                    data:{accesstoken:self.token},
                    dataType: 'json',
                    success:function(res){
                        localStorage.loginname = res.loginname;
                        localStorage.avatar_url = res.avatar_url;
                        localStorage.userId = res.id;
                        localStorage.token = self.token;
                        //e44d5f6d-6648-4eb8-96e3-e1bfb34f3635
                        var redirect = decodeURIComponent(self.$route.query.redirect || '/');
                        self.$route.router.go(redirect);
                    },
                    error:function(res){
                        var error = JSON.parse(res.responseText);
                        self.alert.txt = error.error_msg;
                        self.alert.show = true;
                        self.alert.hideFn();
                        return false;
                    }
                })
            },
            readPic:function(e){
                var self = this;
                var file = e.currentTarget.files[0];//  this is my image
                var reader = new FileReader();

                reader.onload = function (e) {
                    var dataURL = reader.result;

                    var base64 = dataURL.split('base64,');
                    var param = { "img": base64[1] };

                    self.loading.show = true;
                    if (browser.versions.iPhone || browser.versions.iPad || browser.versions.ios) {
                        $.post('http://m.yueqingwang.com/common.ashx', param, function (d) {
                            self.loading.show = false;
                            if(d == "qrcode error"){
                                self.token = "";
                                var text = "二维码图片不清晰";
                                self.alert.txt = text;
                                self.alert.show = true;
                                self.alert.hideFn();
                                return false;
                            }
                            else{
                                self.token = d;
                            }
                        });
                    }
                    else{
                        qrcode.decode(dataURL);
                        qrcode.callback = function (data) {
                            self.loading.show = false;
                            self.token = data;
                        }
                    }
                }
                reader.readAsDataURL(file);
            },
        },
        components:{
            "nvHead":require('./topbar.vue')
        }
    }
</script>
