package springboot.dao.qususer;

import java.util.List;

import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import springboot.pojo.QusAppointment;
import springboot.pojo.QusUser;

public interface QusUserDao {
	//用户列表
	/*@Select("SELECT u_name,u_sex,u_phone, r1_name,d_name,sta_name,d_startTime,app_priority\r\n" + 
			"FROM qus_user u,qus_doctor d,qus_status s,qus_appointment a,qus_room1 r1\r\n" + 
			"WHERE u.sta_id=s.sta_id AND u.u_role_id=d.d_role_id AND a.app_user_id=u.u_id AND d.d_r1_id=r1.r1_id AND a.app_user_id=u.u_id;")*/
/*	@Select("select * from qus_user")
	@Results({
		@Result(property="u_sta_id",column="u_sta_id"),
		@Result(property="qusStatus",column="u_sta_id",
			one=@One(select="springboot.dao.qusstatus.QusStatus.getStatus"))
	})*/
	@Select("SELECT u.u_name,u.u_sex,u.u_phone,app_time,app_priority,sta_name,d.d_name,r.r1_name "+ 
			"FROM qus_user u,qus_appointment m,qus_status s,qus_doctor d,qus_room1 r "+ 
			"WHERE s.sta_id=m.app_status AND u.u_id=m.app_id AND d.d_id=m.app_doc_id AND r.r1_id=d.d_r1_id")
	List<QusAppointment> getUserList();
	
	/**
	 * 根据u_id查询数据
	 * @param id
	 * @return
	 */
	@Select("select * from qus_user where u_id = #{id}")
	QusUser getUser(@Param("id")Integer id);
	
	/**
	 * 根据id修改用户信息
	 * @param user
	 * @return
	 */
	@Update("<script> update qus_user set"
			+"<if test='u_name != null'> u_name=#{u_name},</if>"
			+"<if test='u_password !=null'> u_password=#{u_password},</if>"
			+"<if test='u_sex != null '> u_sex=#{u_sex},</if>"
			+"<if test='u_card != null'> u_card=#{u_card},</if>"
			+"<if test='u_phone !=null'> u_phone=#{u_phone},</if>"
			+"<if test='u_role_id !=null'> u_role_id=#{u_role_id}</if>"
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
	
	
	public int deleteUser();
}
