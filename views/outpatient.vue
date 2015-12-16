<template>
    <div class="row">
        <div class="col-md-6">
            <div class="box-inner">
                <div class="box-content">
                    <div class="row">
                        <div class="col-md-12 text-center"><h4>**科室**医生当前门诊用户</h4></div>
                    </div>
                    <div class="row">
                        <div class="col-md-8">
                            <div class="row">
                                <div class="clo-md-12">
                                    <h5 class="text-center">
                                        姓名：张三  第01号   挂号类型：线上预约
                                    </h5>
                                </div>
                            </div>
                            <div class="row">
                                <div class="clo-md-12">
                                    <h6 class="text-center">
                                        会员类型：初级用户
                                        卡内余额：20.00
                                    </h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4"><h3>门诊中...</h3></div>
                    </div>
                    <div class="row">
                        <div class="col-md-3"><h6 class="text-center"><button class="btn btn-default">完成</button></h6></div>
                        <div class="col-md-3"><h6 class="text-center"><button class="btn btn-default">未到</button></h6></div>
                        <div class="col-md-3"><h6 class="text-center"><button class="btn btn-default">复诊预约</button></h6></div>
                        <div class="col-md-3"><h6 class="text-center"><button class="btn btn-default">转诊预约</button></h6></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="box-inner">
                <div class="box-content">
                    <div class="row">
                        <div class="col-md-7">
                            <p class="text-center">今日已看总门诊数：20</p>
                            <p class="text-center">今日待诊人数：10</p>
                            <p class="text-center">当前可约席位：* </p>
                            <p class="text-center">今日授权加号数：**</p>
                            <p class="text-center">当前可约加号数：**</p>
                            <p class="text-center"></p>
                        </div>
                        <div class="col-md-5">
                            <button class="btn btn-default">授权加号</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/row-->
    <div class="box-inner">
        <div class="box-header well" data-original-title="">
            <h2><i class="glyphicon glyphicon-user"></i>我的待诊队列</h2>
            <div class="box-icon">
                <a href="#" class="btn btn-minimize btn-round btn-default"><i
                        class="glyphicon glyphicon-chevron-up"></i></a>
                <a href="#" class="btn btn-close btn-round btn-default"><i
                        class="glyphicon glyphicon-remove"></i></a>
            </div>
        </div>
        <div class="box col-md-12">
            <form class="form-inline">
                <div class="form-group">
                    <label for="exampleInputEmail2">患者姓名:</label>
                    <input type="text" class="form-control" placeholder="患者姓名" value="{{query.patientName}}" v-model="query.patientName">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail2">手机号:</label>
                    <input type="text" class="form-control" placeholder="手机号" value="{{query.patientMobile}}" v-model="query.patientMobile">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail2">就诊科室:</label>
                    <select class="form-control" v-model="query.departmentId">
                        <option value="">全部</option>
                        <template v-for="depart in departments">
                        <option value="{{depart.id}}">{{depart.name}}</option>
                        </template>
                    </select>
                    <label for="exampleInputEmail2">挂号类型:</label>
                    <select class="form-control" v-model="query.registrationType">
                        <option value="">全部</option>
                        <option value="线上预约">线上预约</option>
                        <option value="线下预约">线下预约</option>
                        <option value="到院支付">到院支付</option>
                        <option value="销售代约">销售代约</option>
                        <option value="线下加号">线下加号</option>
                        <option value="销售加号">销售加号</option>
                        <option value="现场挂号">现场挂号</option>
                        <option value="网上挂号">网上挂号</option>
                    </select>
                    <label for="exampleInputEmail2">医生:</label>
                    <select class="form-control" v-model="query.doctorId">
                        <option value="">全部</option>
                        <template v-for="doctor in doctors">
                        <option value="{{doctor.id}}">{{doctor.name}}</option>
                        </template>
                    </select>
                    <label for="exampleInputEmail2">门诊状态:</label>
                    <select class="form-control" v-model="query.status">
                        <option value="">全部</option>
                        <option value="初诊">初诊</option>
                        <option value="复诊">复诊</option>
                        <option value="院内转诊">院内转诊</option>
                        <option value="跨院转诊">跨院转诊</option>
                        <option value="远程会诊">远程会诊</option>
                        <option value="远程初诊">远程初诊</option>
                        <option value="远程复诊">远程复诊</option>
                    </select>
                    </select>
                    <label for="exampleInputEmail2">会员类型:</label>
                    <select class="form-control" v-model="query.memberType">
                        <option value="">全部</option>
                        <option value="初级用户">初级用户</option>
                        <option value="银卡用户">银卡用户</option>
                        <option value="3">金卡用户</option>
                        <option value="金卡用户">学校用户</option>
                        <option value="企业用户">企业用户</option>
                        <option value="儿童用户">儿童用户</option>
                    </select>
                    <button type="submit" class="btn btn-default" v-on:click="todayPatient(1, ta)">搜索</button>
                </div>
            </form>
        </div>
        <div class="box-content">
            <table class="table table-striped table-bordered responsive" id="groupList">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>患者名称</th>
                        <th>手机号</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>就诊时间</th>
                        <th>就诊科室</th>
                        <th>挂号类型</th>
                        <th>医生</th>
                        <th>门诊内容</th>
                        <th>门诊状态</th>
                        <th>门诊金额</th>
                        <th>卡内余额</th>
                        <th>会员类型</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label><input value="1" type="checkbox"/>1</label></td>
                        <td class="center">张三</td>
                        <td class="center">15309783647</td>
                        <td class="center">男</td>
                        <td class="center">34</td>
                        <td class="center">seg</td>
                        <td class="center">kdshg</td>
                        <td class="center">kdshg</td>
                        <td class="center">sdklhgod</td>
                        <td class="center">sdklhgod</td>
                        <td class="center">sdklhgod</td>
                        <td class="center">2015-12-14 12:12</td>
                        <td class="center">2015-12-14 12:12</td>
                        <td class="center">初级会员</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="box-inner">
        <div class="box-header well" data-original-title="">
            <h2><i class="glyphicon glyphicon-user"></i>历史门诊记录</h2>
            <div class="box-icon">
                <a href="#" class="btn btn-minimize btn-round btn-default"><i
                        class="glyphicon glyphicon-chevron-up"></i></a>
                <a href="#" class="btn btn-close btn-round btn-default"><i
                        class="glyphicon glyphicon-remove"></i></a>
            </div>
        </div>
        <div class="box col-md-12">
            <form class="form-inline">
                <div class="form-group">
                    <label for="exampleInputEmail2">患者姓名:</label>
                    <input type="text" class="form-control" placeholder="患者姓名" value="{{query.patientName}}" v-model="query.patientName">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail2">手机号:</label>
                    <input type="text" class="form-control" placeholder="手机号" value="{{query.patientMobile}}" v-model="query.patientMobile">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail2">就诊科室:</label>
                    <select class="form-control" v-model="query.departmentId">
                        <option value="">全部</option>
                        <template v-for="depart in departments">
                        <option value="{{depart.id}}">{{depart.name}}</option>
                        </template>
                    </select>
                    <label for="exampleInputEmail2">挂号类型:</label>
                    <select class="form-control" v-model="query.registrationType">
                        <option value="">全部</option>
                        <option value="线上预约">线上预约</option>
                        <option value="线下预约">线下预约</option>
                        <option value="到院支付">到院支付</option>
                        <option value="销售代约">销售代约</option>
                        <option value="线下加号">线下加号</option>
                        <option value="销售加号">销售加号</option>
                        <option value="现场挂号">现场挂号</option>
                        <option value="网上挂号">网上挂号</option>
                    </select>
                    <label for="exampleInputEmail2">医生:</label>
                    <select class="form-control" v-model="query.doctorId">
                        <option value="">全部</option>
                        <template v-for="doctor in doctors">
                        <option value="{{doctor.id}}">{{doctor.name}}</option>
                        </template>
                    </select>
                    <label for="exampleInputEmail2">门诊状态:</label>
                    <select class="form-control" v-model="query.status">
                        <option value="">全部</option>
                        <option value="初诊">初诊</option>
                        <option value="复诊">复诊</option>
                        <option value="院内转诊">院内转诊</option>
                        <option value="跨院转诊">跨院转诊</option>
                        <option value="远程会诊">远程会诊</option>
                        <option value="远程初诊">远程初诊</option>
                        <option value="远程复诊">远程复诊</option>
                    </select>
                    </select>
                    <label for="exampleInputEmail2">会员类型:</label>
                    <select class="form-control" v-model="query.memberType">
                        <option value="">全部</option>
                        <option value="初级用户">初级用户</option>
                        <option value="银卡用户">银卡用户</option>
                        <option value="3">金卡用户</option>
                        <option value="金卡用户">学校用户</option>
                        <option value="企业用户">企业用户</option>
                        <option value="儿童用户">儿童用户</option>
                    </select>
                    <button type="submit" class="btn btn-default" v-on:click="todayPatient(1, ta)">搜索</button>
                </div>
            </form>
        </div>
        <div class="box-content">
            <table class="table table-striped table-bordered responsive" id="groupList">
                <thead>
                    <tr>
                        <th>序号</th>
                        <th>患者名称</th>
                        <th>手机号</th>
                        <th>性别</th>
                        <th>年龄</th>
                        <th>就诊时间</th>
                        <th>就诊科室</th>
                        <th>挂号类型</th>
                        <th>医生</th>
                        <th>门诊内容</th>
                        <th>门诊状态</th>
                        <th>门诊金额</th>
                        <th>卡内余额</th>
                        <th>会员类型</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><label><input value="1" type="checkbox"/>1</label></td>
                        <td class="center">张三</td>
                        <td class="center">15309783647</td>
                        <td class="center">男</td>
                        <td class="center">34</td>
                        <td class="center">seg</td>
                        <td class="center">kdshg</td>
                        <td class="center">kdshg</td>
                        <td class="center">sdklhgod</td>
                        <td class="center">sdklhgod</td>
                        <td class="center">sdklhgod</td>
                        <td class="center">2015-12-14 12:12</td>
                        <td class="center">2015-12-14 12:12</td>
                        <td class="center">初级会员</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    module.exports= {
        replace:true,
        props: ['pageTitle'],
        data: function(){
            return {
                patients: [],
                show: false,
                departments: [],
                doctors: [],
                isActiveA:true,
                isActiveB:false,
                ta: "t",
                query:{
                    totalCount: 0,
                    pageIndex: 0,
                    patientName:"",
                    patientMobile:"",
                    departmentId:"",
                    registrationType:"",
                    doctorId:"",
                    status:"",
                    memberType:""
                }
            }
        },
        route:{
            data:function(transition){
                //获取url传的params参数
                this.pageTitle = transition.to.query.pageTitle;
            }
        },
        methods: {
            allPatient: function(){
                alert("全部患者");
            }
        }
    }
</script>