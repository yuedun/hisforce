<template>
    <leftmenu></leftmenu>
    <content></content>
</template>
<script>
    module.exports = {
        ready:function(){
            this.$route.router.go({name: "todayWork"});
        },
        components:{
            "leftmenu": require("./leftmenu.vue"),
            "content": require("./content.vue")
        }
    }
</script>


