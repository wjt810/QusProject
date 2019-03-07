package springboot.controller;

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

import springboot.pojo.QusInfo;
import springboot.service.qusinfo.QusInfoService;

@RestController
public class PusInfoController {
	@Resource
	QusInfoService  qusInfoService;
	//分页查询    
	@RequestMapping("/back/json/infoList.html")
	public List<QusInfo> getQusList() throws ParseException{
		String title =null;
		List<QusInfo> qusInfoList1= qusInfoService.selectInfoByTitle1(title);//查询所有的管理员
		List<QusInfo> qusInfoList2= qusInfoService.selectInfoByTitle2(title);//查询所有的医生 和主任信息
		qusInfoList1.addAll(qusInfoList2);//把两个集合合并
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		return qusInfoList1;
	}
}
