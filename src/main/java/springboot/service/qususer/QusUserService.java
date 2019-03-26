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
	
	
	
}
