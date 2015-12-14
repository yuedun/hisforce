<template>
    <!-- 全局header -->
    <div>
        首页
    </div>
</template>
<script>
    module.exports = {
        ready:function(){
            var _self = this;
            setTimeout(function(){
                _self.$route.router.go({ name: 'login'});
            },2000);
        }
    }
</script>


