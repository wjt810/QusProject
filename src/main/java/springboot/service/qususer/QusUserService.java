package springboot.service.qususer;

import java.util.List;

import springboot.pojo.QusUser;

public interface QusUserService {
	
	List<QusUser> getUserList();
	
	/**
	 * 根据u_id查询数据
	 * @param id
	 * @return
	 */
	QusUser getUser(Integer id);
	
}
