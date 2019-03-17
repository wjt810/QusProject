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
			+ "a_address, a_roleid, a_createBy, a_picpath, a_modifyBy)\r\n" + 
			"VALUES (#{a_name},#{a_password},#{a_sex},#{a_phone},#{a_realName},#{a_email},#{a_des},#{a_born},"
			+ "#{a_address},#{a_roleid},#{a_createBy},#{a_picpath},#{a_modifyBy});")
	List<QusAdmin> AddAdmin(QusAdmin qusAdmin);
	
	//修改管理员信息
	@Update("UPDATE qus_admin \r\n" + 
			"SET\r\n" + 
			"	a_name = #{a_name}, \r\n" + 
			"	a_password = #{a_password}, \r\n" + 
			"	a_sex = #{a_sex} , \r\n" + 
			"	a_phone =#{a_phone} , \r\n" + 
			"	a_realName =#{a_realName} , \r\n" + 
			"	a_email = #{a_email} , \r\n" + 
			"	a_ddes = #{a_des} , \r\n" + 
			"	a_born = #{a_born}, \r\n" + 
			"	a_address = #{a_address}  \r\n" + 
			"	WHERE\r\n" + 
			"	a_id = #{a_id};")
	List<QusAdmin> UpdateAdmin(int a_id);
	
	//删除管理员
	@Delete("DELETE FROM qus_admin WHERE a_id =#{a_id} ;")
	List<QusAdmin>	DelAdmin(int a_id);
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

}
