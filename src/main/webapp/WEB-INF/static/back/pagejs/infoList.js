layui.config({
	base : "back/js/"
}).use(['form','layer','jquery','laypage'],function(){
	var form = layui.form(),
		layer = parent.layer === undefined ? layui.layer : parent.layer,
		laypage = layui.laypage,
		$ = layui.jquery;

	//加载页面数据
	var newsData = '';
	$.get("/infoList", function(data){
		var newArray = [];
		//单击首页“待审核文章”加载的信息
		/*if($(".top_tab li.layui-this cite",parent.document).text() == "待审核文章"){
			if(window.sessionStorage.getItem("addNews")){
				var addNews = window.sessionStorage.getItem("addNews");
				newsData = JSON.parse(addNews).concat(data);
			}else{
				newsData = data;
			}
			for(var i=0;i<newsData.length;i++){
        		if(newsData[i].newsStatus == "待审核"){
					newArray.push(newsData[i]);
        		}
        	}
        	newsData = newArray;
        	newsList(newsData);
		}else{   */ //正常加载信息
			
			newsData = data;
			if(window.sessionStorage.getItem("addNews")){
				var addNews = window.sessionStorage.getItem("addNews");
				newsData = JSON.parse(addNews).concat(newsData);
			}
			//执行加载数据的方法
			newsList();
		/*}*/
			
	})
	//查询
	$(".search_btn").click(function(){
		var newArray = [];
		if($(".search_input").val() != ''){
			var index = layer.msg('查询中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
            	$.ajax({
					url : "infoList",
					type : "get",
					dataType : "json",
					success : function(data){
						if(window.sessionStorage.getItem("addNews")){
							var addNews = window.sessionStorage.getItem("addNews");
							newsData = JSON.parse(addNews).concat(data);
						}else{
							newsData = data;
						}
						for(var i=0;i<newsData.length;i++){
							var newsStr = newsData[i];
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
		            		//文章标题
		            		if(newsStr.info_title.indexOf(selectStr) > -1){
			            		newsStr["info_title"] = changeStr(newsStr.info_title);
		            		}
		            		//内容
		            		if(newsStr.info_content.indexOf(selectStr) > -1){
			            		newsStr["info_content"] = changeStr(newsStr.info_content);
		            		}
		            		//发布人
		            		if(newsStr.rname.indexOf(selectStr) > -1){
			            		newsStr["rname"] = changeStr(newsStr.rname);
		            		}
		            		//用户角色名称
		            		if(newsStr.role_name.indexOf(selectStr) > -1){
			            		newsStr["role_name"] = changeStr(newsStr.role_name);
		            		}
		            		//发布时间
		            		if(newsStr.info_startTime.indexOf(selectStr) > -1){
			            		newsStr["info_startTime"] = changeStr(newsStr.info_startTime);
		            		}
		            		if(newsStr.info_title.indexOf(selectStr)>-1 || newsStr.info_content.indexOf(selectStr)>-1 ||newsStr.rname.indexOf(selectStr)>-1 || newsStr.role_name.indexOf(selectStr)>-1|| newsStr.info_startTime.indexOf(selectStr)>-1){
		            			newArray.push(newsStr);
		            		}
		            	}
		            	newsData = newArray;
		            	newsList(newsData);
					}
				})
                layer.close(index);
            },2000);
		}else{
			layer.msg("请输入需要查询的内容");
		}
	})

	//添加文章
	$(".newsAdd_btn").click(function(){
		var index = layui.layer.open({
			title : "添加资讯1",
			type : 2,
			closeBtn: 1, //是否显示关闭按钮
			content : "infoAdd",//弹出层的url
			  area: ['900px', '900px'],  //弹出层页面比例
			  shade: 0.1,  //遮罩透明度
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
	//推荐文章
	$(".recommend").click(function(){
		var $checkbox = $(".news_list").find('tbody input[type="checkbox"]:not([name="show"])');
		if($checkbox.is(":checked")){
			var index = layer.msg('推荐中，请稍候',{icon: 16,time:false,shade:0.8});
            setTimeout(function(){
                layer.close(index);
				layer.msg("推荐成功");
            },2000);
		}else{
			layer.msg("请选择需要推荐的文章");
		}
	})

	//审核文章
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
							$checked.eq(j).parents("tr").find("td:eq(3)").text("审核通过").removeAttr("style");
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
	//批量删除
	$(".batchDel").click(function(){
		var $checkbox = $('.news_list tbody input[type="checkbox"][name="checked"]');
		var $checked = $('.news_list tbody input[type="checkbox"][name="checked"]:checked');
		if($checkbox.is(":checked")){
			layer.confirm('确定删除选中的信息？',{icon:3, title:'提示信息'},function(index){
				var index = layer.msg('删除中，请稍候',{icon: 16,time:false,shade:0.8});
	            setTimeout(function(){
	            	//删除数据
	            	for(var j=0;j<$checked.length;j++){
	            		for(var i=0;i<newsData.length;i++){
							if(newsData[i].info_id == $checked.eq(j).parents("tr").find(".news_del").attr("data-id")){
								//逐个删除数据库中的数据
								$.ajax({
			            			url : "deleteById.html",
			            			type : "GET",
			            			data :{info_id : newsData[i].info_id},
			            			dataType : "json"
			            		})
								newsData.splice(i,1);
								newsList(newsData);
							}
						}
	            	}
	            	$('.news_list thead input[type="checkbox"]').prop("checked",false);
	            	form.render();
	                layer.close(index);
					layer.msg("删除成功");
	            },1500);
	        })
		}else{
			layer.msg("请选择需要删除的文章");
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
		if(childChecked.length == child.length){
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = true;
		}else{
			$(data.elem).parents('table').find('thead input#allChoose').get(0).checked = false;
		}
		form.render('checkbox');
	})
	//操作
	$("body").on("click",".news_edit",function(){  //编辑
		var _this = $(this);
		var id = _this.attr("data-id")
        var index = layui.layer.open({
            title : "修改资讯",
            type : 2,
            content : "infoModify?id="+id,
            success : function(layero, index){
            }
        })
        //改变窗口大小时，重置弹窗的高度，防止超出可视区域（如F12调出debug的操作）
        $(window).resize(function(){
            layui.layer.full(index);
        })
        layui.layer.full(index);
	})
	//提交修改
	/*form.on("submit",function(data){
				$.ajax({
					url : "infoModifyReal",
					type : "get",
					data : {info_id:$("#info_id").val(),info_title:$("#info_title").val(),content:$("#content").val()},
					dataType : "json",
					success : function(data){
						var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
							parent.layer.close(index);    //关闭弹出层
							window.parent.location.reload();   //刷新父界面
					}
			})
		})*/
	
	$("body").on("click",".news_collect",function(){  //收藏.
		if($(this).text().indexOf("已收藏") > 0){
			layer.msg("取消收藏成功！");
			$(this).html("<i class='layui-icon'>&#xe600;</i> 收藏");
		}else{
			layer.msg("收藏成功！");
			$(this).html("<i class='iconfont icon-star'></i> 已收藏");
		}
	})
	
	$("body").on("click",".news_del",function(){  //删除
		var _this = $(this);
		layer.confirm('确定删除此信息？',{icon:3, title:'提示信息'},function(index){
			_this.parents("tr").remove();
			for(var i=0;i<newsData.length;i++){
				if(newsData[i].info_id == _this.attr("data-id")){
					$.ajax({
						url : "deleteById.html",
						type : "get",
						data : {info_id :newsData[i].info_id },
						dataType : "json",
						success : function(data){
							layer.msg("删除成功！");
						},
						fail : function(err) {
							layer.msg(err)
						}
					})
					newsData.splice(i,1);
					newsList(newsData);
				}
			}
			layer.close(index);
		});
	})
	function newsList(that){
		//渲染数据
		function renderDate(data,curr){//传入的当前页面的索引
			var dataHtml = '';
			if(!that){
				currData = newsData.concat().splice(curr*nums-nums, nums);
			}else{
				currData = that.concat().splice(curr*nums-nums,nums);
			}
			if(currData.length != 0){
				for(var i=0;i<currData.length;i++){
					dataHtml += '<tr>'
			    	+'<td><input type="checkbox" name="checked" lay-skin="primary" lay-filter="choose"></td>'
			    	+'<td align="left">'+currData[i].info_title+'</td>'
			    	+'<td>'+currData[i].info_content+'</td>'
			    	+'<td>'+currData[i].rname+'</td>'
			    	+'<td>'+currData[i].role_name+'</td>'
			    	+'<td>'+currData[i].info_startTime+'</td>'
			    	+'<td>'
					+  '<a class="layui-btn layui-btn-mini news_edit" data-id="'+currData[i].info_id+'"><i class="iconfont icon-edit"></i> 编辑</a>'
					+  '<a class="layui-btn layui-btn-normal layui-btn-mini news_collect"><i class="layui-icon">&#xe600;</i> 收藏</a>'
					+  '<a class="layui-btn layui-btn-danger layui-btn-mini news_del" data-id="'+currData[i].info_id+'"><i class="layui-icon">&#xe640;</i> 删除</a>'
			        +'</td>'
			    	+'</tr>';
				}
			}else{
				dataHtml = '<tr><td colspan="8">暂无数据</td></tr>';
			}
		    return dataHtml;
		}
		//分页
		var nums = 6; //每页出现的数据量
		if(that){
			newsData = that;
		}
		laypage({
			curr : 1,//初始化为当前页
			cont : "page",//分页容器的id
			pages : Math.ceil(newsData.length/nums),//通过后台拿到的总页数
			jump : function(obj){//出发分页后的回调
				//var index = layer.msg(obj.curr, 	{icon: 16,time:1000,shade:0.8});
				$(".news_content").html(renderDate(newsData,obj.curr));
				$('.news_list thead input[type="checkbox"]').prop("checked",false);
		    	form.render();
			}
		})
	}
})
