package springboot.qususer;
import java.util.List;

import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import springboot.pojo.QusInfo;
import springboot.pojo.QusUser;


import springboot.service.qususer.QusUserService;
@RunWith(SpringRunner.class)
@SpringBootTest
public class QusUserTest {
	@Resource
	private QusUserService qusUserService;
 
	/**
    * 用户列表
    */
	@Test
	public void testgetList() {
		List<QusUser> qusUserList= qusUserService.getUserList();
		if(qusUserList!=null) {
			System.out.println(qusUserList);
		}else {
			System.out.println("无数据");
		}
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
		  if(qusUserByList !=null) {
			  System.out.println(qusUserByList);
		  }
	}

}
