package springboot.dao;
import java.util.List;
import org.apache.ibatis.annotations.Mapper;

import springboot.pojo.User;
import springboot.pojo.User1;
@Mapper //自动被扫描
public interface UserDao {
	
//	@Select("SELECT * FROM plandnet_user WHERE puCode LIKE CONCAT('%',#{name},'%')")
	List<User1> selecteInfo();
}
