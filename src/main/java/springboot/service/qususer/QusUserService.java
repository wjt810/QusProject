package springboot.service.qususer;

import java.util.List;

import springboot.pojo.QusUser;

public interface QusUserService {
	//用户列表
	List<QusUser> getUserList();
	//根据id修改用户信息
	int updateUser(QusUser user);
	//模糊查询用户列表
	List<QusUser>getByUser(String name);
	
}
