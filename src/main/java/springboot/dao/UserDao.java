package springboot.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.User;

public interface UserDao {
	
	/*
	 * test
	 */
	@Select("SELECT * FROM plandnet_user WHERE puCode LIKE CONCAT('%',#{name},'%')")
	List<User> list(@Param("name")String name);

}
