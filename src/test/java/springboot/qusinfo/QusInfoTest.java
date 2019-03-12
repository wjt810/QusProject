package springboot.qusinfo;

import static org.junit.Assert.*;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusDoctor;
import springboot.pojo.QusInfo;
import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;
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
		//int count = qusInfoService.deleteInfoById(5);
		/*System.out.println(count);*/
		int count = (int) Math.ceil(20/7);
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
	//根据资讯id查询角色id
	@Test
	public void testByInfoId(){
		int infoId=4;
		int roleId = qusInfoService.selectRoleIdByInfoId(infoId);
		System.out.println(roleId);
	}
	//根据资讯id来 进而查到对应的角色  进而去相应的表中查数据
	
	@Test
	public void testInfoList(){
		int infoId=2;
		int roleId = qusInfoService.selectRoleIdByInfoId(infoId);
		List<QusInfo> info = new ArrayList<>();
		QusInfo size = qusInfoService.selectDoctorById(infoId);
		if(size!=null) {
			System.out.println(size.getInfo_content());
		}
		else{
			System.out.println("null");
		}
	}
	//查询刚插入的资讯id
	@Test
	public void testMaxId(){
		int count = qusInfoService.selectMaxId();
		System.out.println(count);
	}
	//查询科室
	@Test
	public void testSelectKeShi(){
		List<QusRoom1> roomList = qusInfoService.selectKeShi(1);
		for (QusRoom1 q : roomList) {
			System.out.println("r1Id: "+q.getR1_id()+" r1Name:  "+q.getR1_name());
			for (QusRoom2 r : q.getRoom2s()) {
				System.out.println("\t\t\t r2Id: "+r.getR2_id()+"  r2Name"+  r.getR2_name());
			}
		}
	}
	//测试查询医生
	@Test
	public void testSelectDoctor(){
		List<QusDoctor> doctorList = qusInfoService.selectDoctorList(null,null);
		for (QusDoctor q : doctorList) {
			System.out.println(q);
			System.out.println("roome1: \tid:   "+q.getQusRoom1().getR1_id()+"name1: "+q.getQusRoom1().getR1_name()+"\n");
			System.out.println("roome2: \tid:   "+q.getQusRoom2().getR2_id()+"name2: "+q.getQusRoom2().getR2_name());
		}
	}
}
