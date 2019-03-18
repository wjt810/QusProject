package springboot.dao.qususer;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import springboot.pojo.QusAppointment;
import springboot.pojo.QusUser;

public interface QusUserDao {
	//用户列表
	@Select("SELECT u.u_id,u.u_name,u.u_sex,u.u_phone,m.app_time,m.app_priority,s.sta_name,m.app_sta_id,d.d_name,r1.r1_name,r2.r2_name" + 
			"	FROM qus_user u,qus_appointment m,qus_status s,qus_doctor d,qus_room1 r1,qus_room2 r2" + 
			"	WHERE s.sta_id=m.app_sta_id AND u.u_id=m.app_user_id AND d.d_id=m.app_doc_id " + 
			"	AND r1.r1_id=d.d_r1_id AND r2.r2_id=d.d_r2_id ")
	List<QusAppointment> getUserList();
	
	/**
	 * 根据u_id查询数据
	 * @param id
	 * @return
	 */
	@Select("select * from qus_user where u_id = #{id}")
	QusUser getUser(@Param("id")Integer id);
	
	
	
	/**
	 * 根据app_id查询数据
	 * @param id
	 * @return
	 */
	@Select("SELECT u.u_id,u.u_name,u.u_sex,u.u_phone,m.app_time,m.app_id,m.app_priority,m.app_sta_id,s.sta_name,d.d_name,r1.r1_name,r2.r2_name  " + 
			"	FROM qus_user u,qus_appointment m,qus_status s,qus_doctor d,qus_order o,qus_room1 r1,qus_room2 r2" + 
			"	WHERE s.sta_id=m.app_sta_id AND u.u_id=m.app_user_id AND d.d_id=m.app_doc_id AND m.app_id=o.o_app_id" + 
			"	AND r1.r1_id=d.d_r1_id AND r2.r2_id=d.d_r2_id AND m.app_id=#{app_id}")
	QusAppointment getUserById(@Param("app_id")Integer app_id);
	
	
	/**
	 * 根据id修改用户信息
	 * @param user
	 * @return
	 */
	@Update("<script> update qus_user set"
			+"<if test='u_name != null'> u_name=#{u_name},</if>"
			+"<if test='u_sex != null '> u_sex=#{u_sex},</if>"
			+"<if test='u_phone !=null'> u_phone=#{u_phone},</if>"
			
			+" where u_id=#{u_id}"
			+"</script>"
			)
	int updateUser(QusUser user);
	
	
	/**
	 * 用户模糊查询
	 * @return
	 */
	@Select("SELECT * FROM qus_user WHERE u_name LIKE CONCAT('%',#{u_name}, '%')")
	List<QusUser>getByUserList(String name);
	
	/**
	 * 根据u_id删除用户
	 * @param u_id
	 * @return
	 */
	@Delete("DELETE FROM qus_user WHERE u_id=#{u_id}")
	public int deleteUserByuserId(@Param("u_id")Integer u_id);
}
