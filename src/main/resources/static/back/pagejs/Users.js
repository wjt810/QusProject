layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var usersData = '';
<<<<<<< HEAD
	/*$.get("/user/userList", function(data){
=======
	$.get("user/userList", function(data){
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
		usersData = data;
		if(window.sessionStorage.getItem("addUser")){
			var addUsers = window.sessionStorage.getItem("addUser");
			usersData = JSON.parse(addUsers).concat(usersData);
		}
		//执行加载数据的方法
		usersList();
	})*/
	$.ajax({
		url : "/user/userList",
		type : "get",
		dataType : "json",
		success : function(data){
			usersData = data;
			if(window.sessionStorage.getItem("addUser")){
				var addUsers = window.sessionStorage.getItem("addUser");
				usersData = JSON.parse(addUsers).concat(usersData);
			}
			//执行加载数据的方法
			usersList();
		}
	})

	//查询
	$(".search_btn").click(function(){
		var userArray = [];
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	$.ajax({
<<<<<<< HEAD
					url : "/user/userList",
=======
					url : "user/userList",
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
					type : "get",
					dataType : "json",
					success : function(data){
						if(window.sessionStorage.getItem("addUsers")){
							var addUsers = window.sessionStorage.getItem("addUsers");
							usersData = JSON.parse(addUsers).concat(data);
						}else{
							usersData = data;
						}
						for(var i=0;i<usersData.length;i++){
							var usersStr = usersData[i];
							var selectStr = $(".search_input").val();
		            		function changeStr(data){
		            			var dataStr = '';
		            			var showNum = data.split(eval("/"+selectStr+"/ig")).length - 1;
		            			if(showNum > 1){
									for (var j=0;j<showNum;j++) {
		            					dataStr += data.split(eval("/"+selectStr+"/ig"))[j] + "<i style='color:#03c339;font-weight:bold;'>" + selectStr + "</i>";
		            				}
		            				dataStr += data.split(eval("/"+selectStr+"/ig"))[showNum];
		            				return dataStr;
		            			}else{
		            				dataStr = data.split(eval("/"+selectStr+"/ig"))[0] + "<i style='color:#03c339;font-weight:bold;'>" + selectStr + "</i>" + data.split(eval("/"+selectStr+"/ig"))[1];
		            				return dataStr;
		            			}
		            		}
		            		//用户名
<<<<<<< HEAD
		            		if(usersStr.qusUser.u_name.indexOf(selectStr) > -1){
			            		usersStr["qusUser.u_name"] = changeStr(usersStr.qusUser.u_name);
=======
		            		if(usersStr.u_name.indexOf(selectStr) > -1){
			            		usersStr["u_name"] = changeStr(usersStr.u_name);
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
		            		}
		            		//性别
<<<<<<< HEAD
		            		if(usersStr.qusUser.u_sex.indexOf(selectStr) > -1){
			            		usersStr["qusUser.u_sex"] = changeStr(usersStr.qusUser.u_sex);
=======
		            		if(usersStr.u_sex.indexOf(selectStr) > -1){
			            		usersStr["u_sex"] = changeStr(usersStr.u_sex);
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
		            		}
<<<<<<< HEAD
		            		//手机号
		            		if(usersStr.qususer.u_phone.indexOf(selectStr) > -1){
			            		usersStr["qususer.u_phone"] = changeStr(usersStr.qususer.u_phone);
=======
		            		//电话
		            		if(usersStr.u_phone.indexOf(selectStr) > -1){
			            		usersStr["u_phone"] = changeStr(usersStr.u_phone);
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
		            		}
<<<<<<< HEAD
		            		//科室名称
		            		if(linksStr.qusDoctor.qusRoom1.r1_name.indexOf(selectStr) > -1){
			            		linksStr["qusDoctor.qusRoom1.r1_name"] = changeStr(linksStr.qusDoctor.qusRoom1.r1_name);
		            		}
		            		//科室名称
		            		if(linksStr.qusDoctor.qusRoom2.r2_name.indexOf(selectStr) > -1){
			            		linksStr["qusDoctor.qusRoom2.r2_name"] = changeStr(linksStr.qusDoctor.qusRoom2.r2_name);
		            		}
		            		//就诊医生
		            		if(linksStr.qusDoctor.d_name.indexOf(selectStr) > -1){
			            		linksStr["qusDoctor.d_name"] = changeStr(linksStr.qusDoctor.d_name);
		            		}
		            		//状态
		            		if(linksStr.qusStatus.sta_name.indexOf(selectStr) > -1){
			            		linksStr["qusStatus.sta_name"] = changeStr(linksStr.qusStatus.sta_name);
		            		}
		            		//预约时间
		            		if(linksStr.app_time.indexOf(selectStr) > -1){
			            		linksStr["app_time"] = changeStr(linksStr.app_time);
		            		}
		            		//优先级
		            		if(linksStr.app_priority.indexOf(selectStr) > -1){
			            		linksStr["app_priority"] = changeStr(linksStr.app_priority);
		            		}
		            		if(usersStr.qusUser.u_name.indexOf(selectStr)>-1 || usersStr.qusUser.u_sex.indexOf(selectStr)>-1 
		            				|| usersStr.qususer.u_phone.indexOf(selectStr)>-1 || usersStr.qusRoom1.r1_name.indexOf(selectStr)>-1
		            				|| usersStr.qusDoctor.qusRoom2.r2_name.indexOf(selectStr)>-1|| usersStr.qusDoctor.d_name.indexOf(selectStr)>-1
		            				|| usersStr.qusStatus.sta_name.indexOf(selectStr)>-1|| usersStr.app_time.indexOf(selectStr)>-1
		            				|| usersStr.app_priority.indexOf(selectStr)>-1){
=======
		            		//科室
		            		if(usersStr.r1_name.indexOf(selectStr) > -1){
			            		usersStr["r1_name"] = changeStr(usersStr.r1_name);
		            		}
		            		//医生
		            		if(usersStr.d_name.indexOf(selectStr) > -1){
			            		usersStr["d_name"] = changeStr(usersStr.d_name);
		            		}
		            		//状态
		            		if(usersStr.sta_name.indexOf(selectStr) > -1){
			            		usersStr["sta_name"] = changeStr(usersStr.sta_name);
		            		}
		            		if(usersStr.u_name.indexOf(selectStr)>-1 || usersStr.u_sex.indexOf(selectStr)>-1 
		            				|| usersStr.u_phone.indexOf(selectStr)>-1 || usersStr.r1_name.indexOf(selectStr)>-1
		            				|| usersStr.d_name.indexOf(selectStr)>-1 || usersStr.sta_name.indexOf(selectStr)>-1){
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
		            			userArray.push(usersStr);
		            		}
		            	}
		            	usersData = userArray;
		            	usersList(usersData);
					}
				})
            	
                layer.close(index);
            },2000);
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加会员
	/*$(".usersAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加会员",
			type : 2,
			content : "User.html",
			success : function(layero, index){
				layui.layer.tips('点击此处返回文章列表', '.layui-layer-setwin .layui-layer-close', {
					tips: 3
				});
			}
		})
		//改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
		$(window).resize(function(){
			layui.layer.full(index);
		})
		layui.layer.full(index);
	})*/

    //全选
	form.on('checkbox(allChoose)', function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		child.each(function(index, item){
			item.checked = data.elem.checked;
		});
		form.render('checkbox');
	});

	//通过判断文章是否全部选中来确定全选按钮是否选中
	form.on("checkbox(choose)",function(data){
		var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"])');
		var childChecked = $(data.elem).parents('table').find('tbody input[type="checkbox"]:not([name="show"]):checked')
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})

	//操作
	$("body").on("click",".users_edit",function(){  //编辑修改
		var index = layui.layer.open({
			title : "修改用户",
			type : 2,
			content : "userModify",
			success : function(layero, index){
				layui.layer.tips('点击此处返回用户列表', '.layui-layer-setwin .layui-layer-close', {
					tips: 3
				});
			}
		})
		//改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
		$(window).resize(function(){
			layui.layer.full(index);
		})
		layui.layer.full(index);
	})

	$("body").on("click",".users_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此用户？',{icon:3, title:'提示信息'},function(index){
			//_this.parents("tr").remove();
			for(var i=0;i<usersData.length;i++){
				if(usersData[i].usersId == _this.attr("data-id")){
					usersData.splice(i,1);
					usersList(usersData);
				}
			}
			layer.close(index);
		});
	})
	//待审核
	$(".audit_btn").click(function(){
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			var index = layer.msg('审核中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	for(var j=0;j<$checked.length;j++){
            		for(var i=0;i<newsData.length;i++){
						if(newsData[i].newsId == $checked.eq(j).parents("tr").find(".news_del").attr("data-id")){
							//修改列表中的文字
							$checked.eq(j).parents("tr").find("td:eq(6)").text("就诊").removeAttr("style");
							//将选中状态删除
							$checked.eq(j).parents("tr").find('input[type="checkbox"][name="checked"]').prop("checked",false);
							form.render();
						}
					}
            	}
                layer.close(index);
				layer.msg("审核成功");
            },2000);
		}else{
			layer.msg("请选择需要审核的文章");
		}
	})
	function usersList(){
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';
			currData = usersData.concat().splice(curr*nums-nums, nums);
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
<<<<<<< HEAD
					alert(currData.length);
=======
					var sexStr=null;
					if(currData[i].u_sex==0){
						sexStr="男";
					}else{
						sexStr="女";
					}
					var app_priority=null;
					if(currData[i].app_priority==0){
						app_priority="优先";
					}else{
						app_priority="不优先";
					}
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
					dataHtml += '<tr>'
			    	+  '<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
<<<<<<< HEAD
			    	+  '<td>'+currData[i].qusUser.u_name+'</td>';
			    	if(currData[i].qusUser.u_sex == "0"){
			    		dataHtml += '<td>'+"男"+'</td>';
			    	}else if(currData[i].qusUser.u_sex == "1"){
			    		dataHtml += '<td>'+"女"+'</td>';
=======
			    	+  '<td>'+currData[i].u_name+'</td>'
					+  '<td>'+sexStr+'</td>'
					+  '<td>'+currData[i].u_phone+'</td>'
			    	+ '<td>'+currData[i].r1_name+'</td>'
			    	+ '<td>'+currData[i].d_name+'</td>';
					
			    	if(currData[i].sta_name == "准备中"){
			    		dataHtml += '<td style="color:#f00">'+currData[i].sta_name+'</td>';
			    	}else if(currData[i].sta_name == "退号"){
			    		dataHtml += '<td style="color:yellow">'+currData[i].sta_name+'</td>';
			    	}else if(currData[i].sta_name == "就诊"){
			    		dataHtml += '<td style="color:#f00">'+currData[i].sta_name+'</td>';
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
			    	}
			    	
<<<<<<< HEAD
					dataHtml +=  '<td>'+currData[i].qususer.u_phone+'</td>'
			    	+  '<td>'+currData[i].qusDoctor.qusRoom1.r1_name+">"+currData[i].qusDoctor.qusRoom2.r2_name+'</td>'
			    	+  '<td>'+currData[i].qusDoctor.d_name+'</td>';
					
			    	if(currData[i].qusStatus.sta_name == "准备中"){
			    		dataHtml += '<td style="color:#f00">'+currData[i].qusStatus.sta_name+'</td>';
			    	}else if(currData[i].qusStatus.sta_name == "退号"){
			    		dataHtml += '<td style="color:yellow">'+currData[i].qusStatus.sta_name+'</td>';
			    	}else{
			    		dataHtml += '<td>'+currData[i].qusStatus.sta_name+'</td>';
			    	}
			    	
			    	dataHtml += '<td>'+currData[i].app_time+'</td>';
			    	
			    	if(currData[i].app_priority == "0"){
			    		dataHtml += '<td>'+"VIP号"+'</td>';
			    	}else if(currData[i].app_priority == "1"){
			    		dataHtml += '<td>'+"普通号"+'</td>';
			    	}
=======
			    	dataHtml += '<td>'+currData[i].app_time+'</td>'
			    	+ '<td>'+app_priority+'</td>';
>>>>>>> branch 'master' of https://github.com/wjt810/QusProject.git
			    	dataHtml += '<td>'
					+    '<a class="layui-btn layui-btn-mini users_edit"><i class="iconfont icon-edit"></i> 编辑</a>'
					+    '<a class="layui-btn layui-btn-danger layui-btn-mini users_del" data-id="'+data[i].qususer.u_id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +  '</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="8">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//分页
		var nums = 13; //每页出现的数据量
		laypage({
			cont : "page",
			pages : Math.ceil(usersData.length/nums),
			jump : function(obj){
				$(".users_content").html(renderDate(usersData,obj.curr));
				$('.users_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
        
})