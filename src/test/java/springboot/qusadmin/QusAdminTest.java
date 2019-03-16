package springboot.qusadmin;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import springboot.pojo.QusAdmin;
import springboot.service.qusAdmin.QusAdminService;

@RunWith(SpringRunner.class)
@SpringBootTest

public class QusAdminTest {
	@Resource
	QusAdminService qusAdminService;
	
	
	@Test
	public void test() {
		
		//查看管理员
		/*List<QusAdmin> list = qusAdminService.SeeAdminList();
		for (QusAdmin a: list) {
			System.out.println(a.getA_id() + "\t" + a.getA_name());
		}*/
		
		
	/*	//管理员登录
		String a_name = "lll";
		String a_password = "123123";
		List<QusAdmin> list = qusAdminService.AdminLogin(a_name, a_password);
		for (QusAdmin a: list) {
			if (a != null) {
				System.out.println("------恭喜您成功登录------");
				System.out.println("------您的基本信息：------");
				System.out.println("姓名："+a.getA_name());
				System.out.println("电话：" + a.getA_password());
				System.out.println("登录成功");
			} else
				System.out.println("登录失败");
		}
		*/
		
		
		/*//添加管理员
		QusAdmin qusAdmin=new QusAdmin();
		qusAdmin.setA_name("大狗");
		qusAdmin.setA_password("123123");
		qusAdmin.setA_sex(1);
		qusAdmin.setA_realName("杨忠卫");
		qusAdmin.setA_phone("13826645234");
		qusAdmin.setA_email("yzw@zs.com");	
		qusAdmin.setA_address("郑州市");
		qusAdmin.setA_createBy(002);
		qusAdmin.setA_modifyBy(002);
		qusAdmin.setA_roleid(0);
		qusAdmin.setA_des("我最帅");
		qusAdmin.setA_picpath("C:\\Users\\a\\Pictures\\Saved Pictures");
		java.text.SimpleDateFormat formatter = new SimpleDateFormat( "yyyy-MM-dd ");
		String s= "2019-02-09 "; 
		Date date = null;
		try {
			date = formatter.parse(s);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		qusAdmin.setA_born(date);
		List<QusAdmin> Addlist = qusAdminService.AddAdmin(qusAdmin);
		for (QusAdmin a: Addlist) {
			System.out.println(a.getA_id() + "\t" + a.getA_name()+ "\t" +a.getA_password());
		}
		*/
		
		
/*		//修改管理员
		int a_id = 1;
		QusAdmin UpdateAdmin=new QusAdmin();
		UpdateAdmin.setA_name("yzw");
		UpdateAdmin.setA_password("123123");
		UpdateAdmin.setA_sex(1);
		UpdateAdmin.setA_realName("杨忠卫");
		UpdateAdmin.setA_phone("13836645234");
		UpdateAdmin.setA_email("yzw@yzw.com");	
		UpdateAdmin.setA_address("郑州市");
		UpdateAdmin.setA_createBy(002);
		UpdateAdmin.setA_modifyBy(002);
		UpdateAdmin.setA_roleid(0);
		UpdateAdmin.setA_des("我最帅的");
		UpdateAdmin.setA_picpath("C:\\Users\\a\\Pictures\\Saved Pictures");
		List<QusAdmin> Update=qusAdminService.UpdateAdmin(a_id);
		for (QusAdmin a: Update) {
			System.out.println(a.getA_id() + "\t" + a.getA_name()+ "\t" +a.getA_password()+ "\t" 
		+a.getA_email()+ "\t" +a.getA_phone()+ "\t" +a.getA_des());
		}
	*/
	
	/*
		//删除管理员
		int a_id = 9;
		List<QusAdmin> delAdmin=qusAdminService.DelAdmin(a_id);*/
		
		
		
		
	}
	
}
