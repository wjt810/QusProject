package springboot.dao.qususer;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusUser;

public interface QusUserDao {
	
	@Select("select * from qus_user")
	List<QusUser> getUserList();
	
	/**
	 * 根据u_id查询数据
	 * @param id
	 * @return
	 */
	@Select("select * from qus_user where u_id = #{id}")
	QusUser getUser(@Param("id")Integer id);
}
