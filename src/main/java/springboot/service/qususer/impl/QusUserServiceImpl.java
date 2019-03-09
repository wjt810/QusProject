package springboot.service.qususer.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qususer.QusUserDao;
import springboot.pojo.QusUser;
import springboot.service.qususer.QusUserService;

@Service
public class QusUserServiceImpl implements QusUserService {
	
	@Resource
	private QusUserDao qusUserDao;
	/**
	 * 用户列表
	 * @return
	 */
	@Override
	public List<QusUser> getUserList() {
		return qusUserDao.getUserList();
	}
	/**
	 * 根据id来修改用户信息
	 */
	@Override
	public int updateUser(QusUser user) {
		// TODO Auto-generated method stub
		return  qusUserDao.updateUser(user);
	}
	@Override
	public List<QusUser> getByUser(String name) {
		// TODO Auto-generated method stub
		return qusUserDao.getByUserList();
	}

	@Override
	public QusUser getUser(Integer id) {
		return qusUserDao.getUser(id);
	}

}
