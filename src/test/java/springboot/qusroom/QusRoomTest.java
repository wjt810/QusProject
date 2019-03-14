package springboot.qusroom;

import static org.junit.Assert.*;

import java.util.List;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;
import springboot.service.qusroom.QusRoomService;

@RunWith(SpringRunner.class)
@SpringBootTest
public class QusRoomTest {

	@Resource
	private QusRoomService qusRoomService;

	@Test
	public void getRoom() {
		List<QusRoom1> roomList = qusRoomService.getRoom1List(null);
		System.out.println("一级科室名称\t二级科室名称");
		for (QusRoom1 qusRoom1 : roomList) {
			System.out.println(qusRoom1.getR1_name()+" "+qusRoom1.getR1_id());
			for (QusRoom2 qusRoom2 : qusRoom1.getRoom2s()) {
				System.out.println("\t\t r2Name\t" + qusRoom2.getR2_name()+" r2Id \t"+qusRoom2.getR2_id());
			}
		}
	}
	
	/*
	 * 删除二级科室
	 */
	@Test
	public void delRoom2() {
		Boolean isok = qusRoomService.delRoom2(50);
		String mes = isok ? "删除成功" : "删除失败";
		System.out.println(mes);
	}

}
