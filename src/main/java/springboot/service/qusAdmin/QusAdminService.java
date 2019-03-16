package springboot.service.qusAdmin;

import java.util.List;
import springboot.pojo.QusAdmin;

public interface QusAdminService {
	
	//查看管理员
	List<QusAdmin> SeeAdminList();
	
	//管理员登录
	List<QusAdmin> AdminLogin(String a_name,String a_password);
	
	//添加管理员
	List<QusAdmin> AddAdmin(QusAdmin qusAdmin);
	
	//修改管理员信息
	List<QusAdmin> UpdateAdmin(int a_id);
	
	//删除管理员
	List<QusAdmin>	DelAdmin(int a_id);
}
