<template>
    <div class="row">
        <div class="box col-md-12">
            <div class="box-inner">
                <div class="box-header well" data-original-title="">
                    <h2><i class="glyphicon glyphicon-user"></i>患者列表</h2>
                    <div class="box-icon">
                        <a href="#" class="btn btn-minimize btn-round btn-default"><i
                                class="glyphicon glyphicon-chevron-up"></i></a>
                        <a href="#" class="btn btn-close btn-round btn-default"><i
                                class="glyphicon glyphicon-remove"></i></a>
                    </div>
                </div>
                <ul class="nav nav-tabs">
                    <li role="presentation" class="active"><a href="#">今日患者</a></li>
                    <li role="presentation"><a href="#">全部患者</a></li>
                </ul>
                <div class="box col-md-12">
                    <form class="form-inline" action="/admin/org" method="get">
                        <div class="form-group">
                            <select class="form-control" name="postChoose">
                                <option value="1">患者姓名</option>
                                <option value="2">手机号</option>
                            </select>
                            <input type="text" class="form-control" placeholder="Search">
                            <button type="submit" class="btn btn-default ">搜索</button>
                        </div>
                    </form>
                </div>
                <div class="box col-md-12">
                    <form class="form-inline" action="/admin/org" method="get">
                        <div class="form-group">
                            <label for="exampleInputEmail2">就诊科室:</label>
                            <select class="form-control" name="state">
                                <option value="">发布状态</option>
                                <option value="1">已发布</option>
                                <option value="0">未发布</option>
                                <option value="-1">已删除</option>
                            </select>
                            <label for="exampleInputEmail2">挂号类型:</label>
                            <select class="form-control" name="order">
                                <option value="">选择排序</option>
                                <option value="1">粉丝数倒序</option>
                                <option value="2">粉丝数正序</option>
                                <option value="3">打卡数倒序</option>
                                <option value="4">打卡数正序</option>
                            </select>
                            <label for="exampleInputEmail2">医生:</label>
                            <select class="form-control" name="state">
                                <option value="">发布状态</option>
                                <option value="1">已发布</option>
                                <option value="0">未发布</option>
                                <option value="-1">已删除</option>
                            </select>
                            <label for="exampleInputEmail2">门诊状态:</label>
                            <select class="form-control" name="order">
                                <option value="">选择排序</option>
                                <option value="1">粉丝数倒序</option>
                                <option value="2">粉丝数正序</option>
                                <option value="3">打卡数倒序</option>
                                <option value="4">打卡数正序</option>
                            </select>
                            <label for="exampleInputEmail2">会员类型:</label>
                            <select class="form-control" name="order">
                                <option value="">选择排序</option>
                                <option value="1">粉丝数倒序</option>
                                <option value="2">粉丝数正序</option>
                                <option value="3">打卡数倒序</option>
                                <option value="4">打卡数正序</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="box col-md-12">
                    <p>
                        <a class="btn btn-default btn-sm" href="/admin/org-add-ui"><i class="glyphicon glyphicon-plus"></i>新增</a>
                    </p>
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
                     <nav>
                        <ul class="pager">
                        	<li class="disabled"><a href="#">上一页</a></li>
                        	<li class=""><a href="/admin/org?pageIndex=1&pageSize=10">上一页</a></li>
                            <li>第1页</li>
                            <li ><a href="/admin/org?pageIndex=1&pageSize=10">下一页</a></li>
                            <li>共2页</li>
                            <li>共19条</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
        <!--/span-->
    </div>
</template>