package springboot.service.qususer.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qususer.QusUserDao;
import springboot.pojo.QusUser;
import springboot.service.qususer.QusUserService;

@Service("userService")
public class QusUserServiceImpl implements QusUserService {
	
	@Resource
	private QusUserDao qusUserDao;

	@Override
	public List<QusUser> getUserList() {
		return qusUserDao.getUserList();
	}

}
