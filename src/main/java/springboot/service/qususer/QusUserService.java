package springboot.service.qususer;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import springboot.pojo.QusAppointment;
import springboot.pojo.QusUser;

public interface QusUserService {
	//用户列表
	List<QusAppointment> getUserList();

	//根据id修改用户信息
	int updateUser(QusAppointment user);
	//模糊查询用户列表
	List<QusUser>getByUser(String name);
	
	/**
	 * 根据u_id查询数据
	 * @param id
	 * @return
	 */
	QusUser getUser(@Param("id")Integer id);
	
	/**
	 * 根据app_id查询数据
	 * @param id
	 * @return
	 */
	QusAppointment getUserById(Integer app_id);
	
	/**
	 * 根据u_id删除用户
	 * @param u_id
	 * @return
	 */
	public int deleteUserByuserId(Integer u_id);
	
	
	
	
	/**
	 * 
	 * 
	 * 前台代码
	 * 
	 * 
	 */
	
	/**
	 * 用户登录
	 * @param u_name
	 * @param u_password
	 * @return
	 */
	public List<QusUser> getUserLogin(String u_name,String u_password);
	
	/**
	 * 根据id查找用户的信息
	 * @param u_id
	 * @return
	 */
	public QusUser findUserById(Integer u_id);
	
	/**
	 * 修改密码
	 * @param pwd
	 * @param id
	 * @return
	 */
	public Boolean changPwd(String pwd,Integer id);
}
