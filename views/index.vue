<template>
    <!-- 全局header -->
    <topbar></topbar>
</template>
<script>
    module.exports = {
        ready:function(){
            var _self = this;
            setTimeout(function(){
                _self.$route.router.go({ name: 'login'});
            },2000);
        },
        components:{
            "topbar":require('./topbar.vue')
        }
    }
</script>


