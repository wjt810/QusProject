package springboot.qusinfo;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
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
		int count = qusInfoService.selectCount();
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
}
