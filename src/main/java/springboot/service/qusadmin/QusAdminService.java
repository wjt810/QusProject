package springboot.service.qusadmin;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import springboot.pojo.QusAdmin;

public interface QusAdminService {
	
	//查看管理员
	List<QusAdmin> SeeAdminList();
	
	//管理员登录
	List<QusAdmin> AdminLogin(String a_name,String a_password);
	
	//添加管理员
	int AddAdmin(QusAdmin qusAdmin);
	
	//修改管理员信息
	Integer UpdateAdmin(QusAdmin admin);
	
	//删除管理员
	Integer deleteAdmin(@Param("a_id") Integer a_id);
	
	/**
	 * 根据a_id查询管理员信息
	 * @param a_id
	 * @return
	 */
	QusAdmin getAdminById(@Param("a_id") Integer a_id);
	
	void changPwd(Integer id,String pwd);
}
