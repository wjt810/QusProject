package springboot.dao.qususer;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import springboot.pojo.QusUser;

public interface QusUserDao {
	//用户列表
	@Select("select * from qus_user")
	List<QusUser> getUserList();
	//根据id修改用户信息
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
	//用户模糊查询
	@Select("SELECT * FROM qus_user WHERE u_name LIKE CONCAT('%',#{u_name}, '%')")
	List<QusUser>getByUserList();
}
