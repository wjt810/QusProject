package springboot.qususer;
import java.util.List;

import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusAppointment;
import springboot.pojo.QusUser;
import springboot.service.qusappointment.QusAppointmentService;
import springboot.service.qususer.QusUserService;
@RunWith(SpringRunner.class)
@SpringBootTest
public class QusUserTest {
	@Resource
	private QusUserService qusUserService;
	
	@Resource
	private QusAppointmentService qusAppointmentService;
 
	/**
    * 用户列表
    */
	@Test
	public void testgetList() {
		
		List<QusAppointment> qusUserList= qusUserService.getUserList();
			System.out.println("姓名\t性别\t手机号\t科室名称\t就诊医生\t状态\t预约时间\t优先级");
			/*for(int i=0;i<qusUserList.size();i++) {
				System.out.println(qusUserList.get(i).getU_name()+"\t"+qusUserList.get(i).getU_sex()
						+"\t"+qusUserList.get(i).getU_phone()
						+"\t"+qusUserList.get(i).getQusRole().getQusDoctor().get(i).getD_name()
						+"\t"+qusUserList.get(i).getQusRole().getQusDoctor().get(i).getQusRoom1().getR1_name()
						+">"+qusUserList.get(i).getQusRole().getQusDoctor().get(i).getQusRoom2().getR2_name()
						+"\t"+qusUserList.get(i).getQusStatus().getS_name()
						);
			}*/
			for (QusAppointment q : qusUserList) {
				System.out.println("name:"+q.getU_name()+"  "+q.getU_sex()+ "  "+q.getU_phone()+ "  "+q.getR1_name()+""
						+ "  "+q.getD_name()+"  "+q.getSta_name()+ "  "+"   "+ q.getApp_time()+"   "+q.getApp_priority());
			}
			System.out.println(qusUserList.size());	
	}
		
	
	/**
	 * 修改
	 * 
	 */
	@Test
	public void testupdate() {
		QusUser user = new QusUser();
		user.setU_id(1);
		user.setU_name("修改王");
		user.setU_password("123456");
		user.setU_sex(2);
		user.setU_card("412721200005140636");
		user.setU_phone("19903695465");
		user.setU_role_id(2);
		int count =qusUserService.updateUser(user);
		System.out.println(count);
	}
	/**
	 * 模糊查询
	 * 
	 */
	@Test
	public void testBySelect() {
		List<QusUser> qusUserByList= qusUserService.getByUser("张");
		System.out.println("用户姓名\t用户密码\t性别\t身份证号\t\t\t手机号\t\t角色");
		for(QusUser user:qusUserByList) {
			System.out.println(user.getU_name()+"\t"+user.getU_password()+"\t"+user.getU_sex()+"\t"
					+user.getU_card()+"\t"+user.getU_phone()+"\t"+user.getU_role_id()
					);
		  }
	}

}
