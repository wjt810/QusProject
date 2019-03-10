package springboot.controller;

import java.lang.reflect.Array;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springboot.pojo.QusAdmin;
import springboot.pojo.QusInfo;
import springboot.service.qusinfo.QusInfoService;

@RestController
public class PusInfoController {
	@Resource
	QusInfoService  qusInfoService;
	//分页查询    
	@RequestMapping("/back/json/infoList.html")
	public List<QusInfo> getQusList(HttpServletRequest request) throws ParseException{
		QusAdmin admin = new QusAdmin();
		admin.setA_name("a_name");
		admin.setA_password("a_password");
		admin.setA_sex(1);
		admin.setA_phone("a_phone");
		admin.setA_realName("a_realName");
		admin.setA_email("a_email");
		admin.setA_des("a_des");
		admin.setA_born(new Date());
		admin.setA_address("a_address");
		admin.setA_roleid(1);
		request.getSession().setAttribute("user", admin);
		String title =null;
		List<QusInfo> qusInfoList1= qusInfoService.selectInfoByTitle1(title);//查询所有的管理员
		List<QusInfo> qusInfoList2= qusInfoService.selectInfoByTitle2(title);//查询所有的医生 和主任信息
		qusInfoList1.addAll(qusInfoList2);//把两个集合合并
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		return qusInfoList1;
	}
	@RequestMapping("/deleteById.html")
	public int deleteById(HttpServletRequest request) {
		int infoId =Integer.parseInt(request.getParameter("info_id"));
		int count = qusInfoService.deleteInfoById(infoId);
		return count;
	}
	@RequestMapping("/addInfo.html")
	public int addNewsInfo(HttpServletRequest request) throws ParseException {
		System.out.println("add");
		String title = request.getParameter("info_title");
		String content = request.getParameter("info_content");
		Integer info_role_id = Integer.parseInt(request.getParameter("info_role_id"));
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date info_startTime = format.parse(request.getParameter("info_startTime"));
		QusInfo info = new QusInfo();
		info.setInfo_content(content);
		System.out.println(content);
		info.setInfo_role_id(info_role_id);
		info.setInfo_title(title);
		info.setInfo_u_d_id(1);//暂时设为管理员
		info.setInfo_startTime(info_startTime);
		int addCount = qusInfoService.addInfo(info);
		System.out.println("addCount:"+addCount);
		return addCount;
	}
}