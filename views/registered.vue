<template>
    <div class="box-inner">
        <div class="box-header well" data-original-title="">
            <h2><i class="glyphicon glyphicon-user"></i>{{pageTitle || "预约挂号"}}</h2>
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
                        <option value="0">线上预约</option>
                        <option value="1">线下预约</option>
                        <option value="2">现场挂号</option>
                        <option value="3">复诊预约</option>
                        <option value="4">转诊挂号</option>
                        <option value="5">现场加号</option>
                        <option value="6">线上加号</option>
                        <option value="7">销售代约</option>
                        <option value="8">销售加号</option>
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
                        <option value="0">初诊</option>
                        <option value="1">复诊</option>
                        <option value="2">院内转诊</option>
                        <option value="3">跨院转诊</option>
                        <option value="4">远程会诊</option>
                        <option value="5">远程初诊</option>
                        <option value="6">远程复诊</option>
                    </select>
                    </select>
                    <label for="exampleInputEmail2">会员类型:</label>
                    <select class="form-control" v-model="query.memberType">
                        <option value="">全部</option>
                        <option value="0">初级用户</option>
                        <option value="1">银卡用户</option>
                        <option value="2">金卡用户</option>
                        <option value="3">学校用户</option>
                        <option value="4">企业用户</option>
                        <option value="5">儿童用户</option>
                    </select>
                    <button type="submit" class="btn btn-default" v-on:click="todayPatient(1, ta)">搜索</button>
                </div>
            </form>
        </div>
        <div class="box col-md-12">
            <p>
                <button class="btn btn-default btn-sm" v-on:click="showModal('mymodal1')">
                    <i class="glyphicon glyphicon-plus"></i>新增
                </button>
            </p>
        </div>
        <div class="box-content">
            <table class="table table-striped table-bordered responsive" id="groupList">
                <thead>
                    <tr>
                        <th>患者名称</th>
                        <th>手机号</th>
                        <th>性别</th>
                        <th>就诊时间</th>
                        <th>就诊科室</th>
                        <th>挂号类型</th>
                        <th>医生</th>
                        <th>门诊号</th>
                        <th>门诊内容</th>
                        <th>挂号费</th>
                        <th>卡内余额</th>
                        <th>门诊状态</th>
                        <th>会员类型</th>
                        <th>挂号时间</th>
                        <th>推荐人</th>
                        <th>预约状态</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in patients">
                        <td class="center">{{item.patientName}}</td>
                        <td class="center">{{item.patientMobile}}</td>
                        <td class="center">{{item.gender}}</td>
                        <td class="center">{{item.registerDate}}</td>
                        <td class="center">{{item.departmentName}}</td>
                        <td class="center">{{item.registrationType}}</td>
                        <td class="center">{{item.doctorName}}</td>
                        <td class="center">{{item.comment}}</td>
                        <td class="center">{{item.status}}</td>
                        <td class="center">{{item.registrationFee}}</td>
                        <td class="center">{{item.balance}}</td>
                        <td class="center">{{item.memberType}}</td>
                        <td class="center">{{item.memberCardNo}}</td>
                        <td class="center">{{item.memberCardNo}}</td>
                        <td class="center">{{item.memberCardNo}}</td>
                        <td class="center">{{item.memberCardNo}}</td>
                        <td class="center">
                            <button class="btn btn-default" v-on:click="showModal('mymodal2')">变更</button>
                            <button class="btn btn-default" v-on:click="showModal('mymodal3')">预览</button>
                            <button class="btn btn-default" v-on:click="showModal('mymodal4')">取消</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <nav>
                <ul class="pager">
                    <li class=""><a @click="todayPatient(parseInt(query.pageIndex)-1, ta)">上一页</a></li>
                    <li>第{{query.pageIndex}}页</li>
                    <li ><a @click="todayPatient(parseInt(query.pageIndex)+1, ta)">下一页</a></li>
                    <li>共{{Math.ceil(query.totalCount/10)}}页</li>
                    <li>共{{query.totalCount}}条</li>
                </ul>
            </nav>
            <router-view></router-view>
        </div>
    </div>
    <!-- Modal1 -->
    <div class="modal" id="mymodal1" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="showModal('mymodal1')"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="gridSystemModalLabel">创建（预约）挂号</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">手机</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputEmail3" placeholder="手机号">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">科室</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">医生</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">挂号费</label>
                <div class="col-sm-4 disabled">
                    <input type="text" class="form-control" value="10" disabled/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">支付方式</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">会员类型</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">日期</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="日期">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">时段</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">推荐人</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">门诊内容</label>
                <div class="col-sm-10">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="showModal('mymodal1')">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="showModal('mymodal1')">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Modal2 -->
    <div class="modal" id="mymodal2" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="showModal('mymodal2')"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="gridSystemModalLabel">（预约）挂号变更</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">手机</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputEmail3" placeholder="手机号">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">科室</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">医生</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">挂号费</label>
                <div class="col-sm-4 disabled">
                    <input type="text" class="form-control" value="10" disabled/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">支付方式</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">会员类型</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">日期</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="日期">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">时段</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">推荐人</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">门诊内容</label>
                <div class="col-sm-10">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="showModal('mymodal2')">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="showModal('mymodal2')">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Modal3 -->
    <div class="modal" id="mymodal3" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="showModal('mymodal3')"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="gridSystemModalLabel">*****医院挂号单</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">手机</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputEmail3" placeholder="手机号">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">科室</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">医生</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">挂号费</label>
                <div class="col-sm-4 disabled">
                    <input type="text" class="form-control" value="10" disabled/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">支付方式</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">会员类型</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">日期</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="日期">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">时段</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">推荐人</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">门诊内容</label>
                <div class="col-sm-10">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="showModal('mymodal3')">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="showModal('mymodal3')">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
    <!-- Modal4 -->
    <div class="modal" id="mymodal4" role="dialog" aria-labelledby="gridSystemModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="showModal('mymodal4')"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="gridSystemModalLabel">（预约）挂号取消</h4>
          </div>
          <div class="modal-body">
            <form class="form-horizontal">
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">姓名</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">性别</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">手机</label>
                <div class="col-sm-4">
                  <input type="number" class="form-control" id="inputEmail3" placeholder="手机号">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">科室</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">医生</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">挂号费</label>
                <div class="col-sm-4 disabled">
                    <input type="text" class="form-control" value="10" disabled/>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">支付方式</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">会员类型</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">日期</label>
                <div class="col-sm-4">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="日期">
                </div>
                <label for="inputEmail3" class="col-sm-2 control-label">时段</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">推荐人</label>
                <div class="col-sm-4">
                  <select class="form-control" id="inputEmail3">
                    <option value="">选择</option>
                    <option value="">内科</option>
                    <option value="">外科</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="inputEmail3" class="col-sm-2 control-label">门诊内容</label>
                <div class="col-sm-10">
                  <textarea class="form-control"></textarea>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-default" data-dismiss="modal" v-on:click="showModal('mymodal4')">Close</button>
            <button type="button" class="btn btn-primary" v-on:click="showModal('mymodal4')">Save changes</button>
          </div>
        </div><!-- /.modal-content -->
      </div><!-- /.modal-dialog -->
    </div><!-- /.modal -->
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
                this.todayPatient();
                this.getDepartment();
                this.getDoctor();
            }
        },
        methods: {
            todayPatient: function(pageIdx, str){
                this.query.pageIndex = (typeof pageIdx) =="number"?pageIdx:1;
                this.query.pageSize = 10;
                var condition = this.query;
                condition["x-auth-token"] = localStorage.token;
                console.log(">>>>"+JSON.stringify(this.query))
                this.$http.get("http://121.42.171.213:8080/api/registrations/all", 
                    condition, 
                    function (data, status, request) {
                        console.log(">>>>data:"+JSON.stringify(data))
                        this.patients = data.data.rows;
                        this.query.totalCount = data.data.count;
                        this.query.pageIndex = data.data.pageIndex;
                        this.isActiveA = true;
                        this.isActiveB = false;
                        this.ta="t";
                    }).error(function (data, status, request) {
                        console.log("err:"+data+"status:"+status+"request:"+request);
                    });
            },
            getDepartment: function(){
                this.$http.get("http://121.42.171.213:8080/api/dict/departments", 
                    {"x-auth-token":localStorage.token}, 
                    function (data, status, request) {
                        this.departments = data.data;
                    }).error(function (data, status, request) {
                        console.log("err:"+data+"status:"+status+"request:"+request);
                    });
            },
            getDoctor: function(){
                this.$http.get("http://121.42.171.213:8080/api/dict/doctors", 
                    {"x-auth-token":localStorage.token}, 
                    function (data, status, request) {
                        this.doctors = data.data;
                    }).error(function (data, status, request) {
                        console.log("err:"+data+"status:"+status+"request:"+request);
                    });
            },
            showModal: function(id){
                $("#"+id).toggle();
            }
        }
    }
</script>