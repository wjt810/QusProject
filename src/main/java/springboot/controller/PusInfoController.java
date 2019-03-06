package springboot.controller;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;

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
		List<QusInfo> qusInfoList1= qusInfoService.selectInfoByTitle1(title);
		List<QusInfo> qusInfoList2= qusInfoService.selectInfoByTitle2(title);
		qusInfoList1.addAll(qusInfoList2);
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		
		for (QusInfo qusInfo : qusInfoList1) {
			Date time = qusInfo.getInfo_startTime();
			String temptime = format.format(time);
			qusInfo.setInfo_startTime(format.parse(temptime));
			System.out.println(format.parse(temptime));
		}
		
//		List<QusInfo> tempList = new ArrayList<>();
//		int count = qusInfoService.selectCount(title);
//		int currentIndex =1;
//		int pageSize = 8;	
//		//循环加入到集合中----获得所需要的数据
//		for (int i = (currentIndex-1)*pageSize; i < (currentIndex-1)*pageSize+pageSize; i++) {
//			tempList.add(qusInfoList1.get(i));
//		}
		return qusInfoList1;
	}
}
