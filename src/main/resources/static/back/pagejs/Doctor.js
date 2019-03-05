layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var linksData = '';
	$.ajax({
		url : "back/json/doctorList.json",
		type : "get",
		dataType : "json",
		success : function(data){
			linksData = data;
			if(window.sessionStorage.getItem("addDoctor")){
				var addDoctor = window.sessionStorage.getItem("addDoctor");
				linksData = JSON.parse(addDoctor).concat(linksData);
			}
			//执行加载数据的方法
			linksList();
		}
	})

	//查询
	$(".search_btn").click(function(){
		var newArray = [];
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	$.ajax({
					url : "back/json/doctorList.json",
					type : "get",
					dataType : "json",
					success : function(data){
						if(window.sessionStorage.getItem("addDoctor")){
							var addDoctor = window.sessionStorage.getItem("addDoctor");
							linksData = JSON.parse(addDoctor).concat(data);
						}else{
							linksData = data;
						}
						for(var i=0;i<linksData.length;i++){
							var linksStr = linksData[i];
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
		            		//医生姓名
		            		if(linksStr.DocName.indexOf(selectStr) > -1){
			            		linksStr["DocName"] = changeStr(linksStr.DocName);
		            		}
		            		//性别
		            		if(linksStr.DocSex.indexOf(selectStr) > -1){
			            		linksStr["DocSex"] = changeStr(linksStr.DocSex);
		            		}
		            		//电话
		            		/*if(linksStr.DocPhone.indexOf(selectStr) > -1){
			            		linksStr["DocPhone"] = changeStr(linksStr.DocPhone);
		            		}*/
		            		//出生日期
		            		/*if(linksStr.DocBorn.indexOf(selectStr) > -1){
			            		linksStr["DocBorn"] = changeStr(linksStr.DocBorn);
		            		}*/
		            		//入职时间
		            		if(linksStr.DocStartTime.indexOf(selectStr) > -1){
			            		linksStr["DocStartTime"] = changeStr(linksStr.DocStartTime);
		            		}
		            		//在职时间
		            		if(linksStr.DocTimes.indexOf(selectStr) > -1){
			            		linksStr["DocTimes"] = changeStr(linksStr.DocTimes);
		            		}
		            		//角色
		            		if(linksStr.DocRole.indexOf(selectStr) > -1){
			            		linksStr["DocRole"] = changeStr(linksStr.DocRole);
		            		}
		            		//家庭住址
		            		/*if(linksStr.DocAddress.indexOf(selectStr) > -1){
			            		linksStr["DocAddress"] = changeStr(linksStr.DocAddress);
		            		}*/
		            		//挂号费用
		            		if(linksStr.DocPrice.indexOf(selectStr) > -1){
			            		linksStr["DocPrice"] = changeStr(linksStr.DocPrice);
		            		}
		            		//咨询费用
		            		if(linksStr.DocConsult.indexOf(selectStr) > -1){
			            		linksStr["DocConsult"] = changeStr(linksStr.DocConsult);
		            		}
		            		//所属科室
		            		if(linksStr.DocRoom.indexOf(selectStr) > -1){
			            		linksStr["DocRoom"] = changeStr(linksStr.DocRoom);
		            		}
		            		if(linksStr.DocName.indexOf(selectStr)>-1 || linksStr.DocSex.indexOf(selectStr)>-1 || linksStr.DocStartTime.indexOf(selectStr)>-1
		            			|| linksStr.DocTimes.indexOf(selectStr)>-1 || linksStr.DocRole.indexOf(selectStr)>-1|| linksStr.DocPrice.indexOf(selectStr)>-1
		            			|| linksStr.DocConsult.indexOf(selectStr)>-1 || linksStr.DocRoom.indexOf(selectStr)>-1){
		            			newArray.push(linksStr);
		            		}
		            	}
		            	linksData = newArray;
		            	linksList(linksData);
					}
				})
            	
                layer.close(index);
            },2000);
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加友情链接
	$(".linksAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加医生",
			type : 2,
			content : "doctorAdd",
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
	})

	//批量删除
	$(".batchDel").click(function(){
		var $checkbox = $('.links_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.links_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){
				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
	            setTimeout(function(){
	            	//删除数据
	            	for(var j=0;j<$checked.length;j++){
	            		for(var i=0;i<linksData.length;i++){
							if(linksData[i].linksId == $checked.eq(j).parents("tr").find(".links_del").attr("data-id")){
								linksData.splice(i,1);
								linksList(linksData);
							}
						}
	            	}
	            	$('.links_list thead input[type="checkbox"]').prop("checked",false);
	            	form.render();
	                layer.close(index);
					layer.msg("删除成功");
	            },2000);
	        })
		}else{
			layer.msg("请选择需要删除的医生");
		}
	})

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
		data.elem.checked;
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})
 
	//操作
	$("body").on("click",".links_edit",function(){  //编辑
		var index = layui.layer.open({
			title : "修改医生信息",
			type : 2,
			content : "doctorModify",
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

	})
	$("body").on("click",".links_check",function(){  //查看
		var index = layui.layer.open({
			title : "查看医生信息",
			type : 2,
			content : "doctorCheck",
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

	})

	$("body").on("click",".links_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			//_this.parents("tr").remove();
			for(var i=0;i<linksData.length;i++){
				if(linksData[i].linksId == _this.attr("data-id")){
					linksData.splice(i,1);
					linksList(linksData);
				}
			}
			layer.close(index);
		});
	})

	function linksList(that){
		//渲染数据
		function renderDate(data,curr){
			var dataHtml = '';
			if(!that){
				currData = linksData.concat().splice(curr*nums-nums, nums);
			}else{
				currData = that.concat().splice(curr*nums-nums, nums);
			}
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+'<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
			    	+'<td align="left">'+currData[i].DocName+'</td>'
			    	+'<td>'+currData[i].DocSex+'</td>'
			    	+'<td>'+currData[i].DocStartTime+'</td>'
			    	+'<td>'+currData[i].DocTimes+'</td>'
			    	+'<td>'+currData[i].DocRole+'</td>'
			    	+'<td>'+currData[i].DocPrice+'</td>'
			    	+'<td>'+currData[i].DocConsult+'</td>'
			    	+'<td>'+currData[i].DocRoom+'</td>'
			    	+'<td>'
					+  '<a class="layui-btn layui-btn-mini links_edit"><i class="iconfont icon-edit"></i> 编辑</a>'
					+  '<a class="layui-btn layui-btn-mini links_check"><i class="iconfont icon-edit"></i> 查看</a>'
					+  '<a class="layui-btn layui-btn-danger layui-btn-mini links_del" data-id="'+data[i].linksId+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +'</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="12">暂无数据</td></tr>';
			}
		    return dataHtml;
		}

		//分页
		var nums = 13; //每页出现的数据量
		if(that){
			linksData = that;
		}
		laypage({
			cont : "page",
			pages : Math.ceil(linksData.length/nums),
			jump : function(obj){
				$(".links_content").html(renderDate(linksData,obj.curr));
				$('.links_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
})
