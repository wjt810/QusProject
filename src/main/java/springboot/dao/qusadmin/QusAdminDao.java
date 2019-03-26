package springboot.dao.qusadmin;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import springboot.pojo.QusAdmin;

//管理员管理
public interface QusAdminDao {
	
	//查看管理员
	@Select("SELECT * FROM qus_admin")
	List<QusAdmin> SeeAdminList();
	
	//管理员登录
	@Select("SELECT * FROM qus_admin WHERE a_name=#{a_name} and a_password = #{a_password}")
	List<QusAdmin> AdminLogin(@Param("a_name")String a_name,@Param("a_password")String a_password);
	
	//添加管理员
	@Insert("INSERT INTO qus_admin (a_name, a_password, a_sex, a_phone, a_realName, a_email, a_des, a_born, "
			+ "a_address, a_roleid, a_createBy, a_picpath)" + 
			"VALUES (#{a_name},#{a_password},#{a_sex},#{a_phone},#{a_realName},#{a_email},#{a_des},#{a_born},"
			+ "#{a_address},#{a_roleid},#{a_createBy},#{a_picpath});")
	int AddAdmin(QusAdmin qusAdmin);
	
	//修改管理员信息
	@Update("<script> UPDATE qus_admin SET " 
			+"<if test='a_name != null'> a_name = #{a_name} ,</if>" 
			+"<if test='a_sex != null'> a_sex = #{a_sex}, </if>"  
			+"<if test='a_phone != null'> a_phone =#{a_phone} , </if>" 
			+"<if test='a_realName != null'> a_realName =#{a_realName} , </if>" 
			+"<if test='a_email != null'> a_email = #{a_email} , </if>"  
			+"<if test='a_des != null'> a_des = #{a_des} , </if>" 
			+"<if test='a_born != null'> a_born = #{a_born}, </if>" 
			+"<if test='a_address != null'> a_address = #{a_address}, </if>"
			+"<if test='a_picpath != null'> a_picpath = #{a_picpath}, </if>"
			+"<if test='a_modify != null'> a_modify = #{a_modify} </if>"
			+"	WHERE a_id = #{a_id};"
			+"</script>")
	Integer UpdateAdmin(QusAdmin admin);
	
	//删除管理员
	@Delete("DELETE FROM qus_admin WHERE a_id =#{a_id} ;")
	Integer deleteAdmin(@Param("a_id") Integer a_id);
	
	/**
	 * 根据a_id查看管理员信息
	 * @param a_id
	 * @return
	 */
	@Select("SELECT * FROM qus_admin where a_id=#{a_id}")
	QusAdmin getAdminById(@Param("a_id") Integer a_id);
	
	/*
	 * 根据id修改密码
	 */
	@Update("UPDATE qus_admin SET a_password = #{pwd} WHERE a_id = #{id}")
	int changPwd(@Param("id")Integer id,@Param("pwd")String pwd);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
