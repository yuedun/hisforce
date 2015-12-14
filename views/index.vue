<template>
    <leftmenu></leftmenu>
    <content></content>
</template>
<script>
    module.exports = {
        ready:function(){
            var _self = this;
        },
        components:{
            "leftmenu": require("./leftmenu.vue"),
            "content": require("./content.vue")
        }
    }
</script>


