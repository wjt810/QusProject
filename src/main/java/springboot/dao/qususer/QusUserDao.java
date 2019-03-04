package springboot.dao.qususer;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusUser;

public interface QusUserDao {
	
	@Select("select * from qus_user")
	List<QusUser> getUserList();
}
