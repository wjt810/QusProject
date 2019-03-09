package springboot.qusinfo;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusInfo;
import springboot.service.qusinfo.QusInfoService;
@RunWith(SpringRunner.class)
@SpringBootTest
public class QusInfoTest {

	@Resource
	private QusInfoService qusInfoService;
	@Test
	public void testSelectCount() {
		int count = qusInfoService.selectCount("");
		if (count!=0) {
			System.out.println(count);
		}
	}
	@Test
	public void testSelectByTitle() {
		List<QusInfo> qusInfoList= qusInfoService.selectInfoByTitle("关", 1, 2);
		if(qusInfoList!=null && qusInfoList.size()!=0) {
			System.out.println("个数是:"+qusInfoList.size());
		}else {
			System.out.println("无数据");
		}
	}
	//删除
	@Test
	public void testDelete() {
		int count = qusInfoService.deleteInfoById(5);
		System.out.println(count);
	}
	//添加
	@Test
	public void testAdd() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date time =new Date();
		String tempTime=format.format(time);
		QusInfo info = new QusInfo();
		info.setInfo_content("info_content");
		info.setInfo_u_d_id(1);
		info.setInfo_title("info_title");
		info.setInfo_content("info_content");
		info.setInfo_role_id(1);
		info.setInfo_startTime(time);
		int count = qusInfoService.addInfo(info);
		System.out.println(count);
	}
	//修改
	@Test
	public void testUpdate() {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
		Date time =new Date();
		String tempTime=format.format(time);
		QusInfo info = new QusInfo();
		info.setInfo_content("update_content");
		info.setInfo_u_d_id(1);
		info.setInfo_title("update");
		info.setInfo_content("update_content");
		info.setInfo_role_id(2);
		info.setInfo_modifyTime(time);
		info.setInfo_id(8);
		info.setInfo_startTime(time);
		int count = qusInfoService.updateInfo(info);
		System.out.println(count);
	}
	//测试
	@Test
	public void testSelectByTitle1() {
		List<QusInfo> qusInfoList= qusInfoService.selectInfoByTitle1("a");
		System.out.println(qusInfoList.size());
		if(qusInfoList!=null && qusInfoList.size()!=0) {
			System.out.println("个数是:"+qusInfoList.size());
		}else {
			System.out.println("无数据");
		}
	}
	@Test
	public void testSelectByTitle2() {
		List<QusInfo> qusInfoList1= qusInfoService.selectInfoByTitle1("a");
		List<QusInfo> qusInfoList2= qusInfoService.selectInfoByTitle2("a");
		qusInfoList1.addAll(qusInfoList2);
		List<QusInfo> tempList = new ArrayList<>();
//		for (QusInfo qusInfo : qusInfoList1) {
//			System.out.println(qusInfo.getRname());
//		}
		
		int currentIndex =2;
		int pageSize = 2;
		//循环加入到集合中----获得所需要的数据
		for (int i = (currentIndex-1)*pageSize; i < (currentIndex-1)*pageSize+pageSize; i++) {
			tempList.add(qusInfoList1.get(i));
		}
		System.out.println(qusInfoList1.size());
		for (QusInfo qusInfo : tempList) {
			System.out.println(qusInfo.getRname());
		}
	}
}
