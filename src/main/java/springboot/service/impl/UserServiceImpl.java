package springboot.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.UserDao;
import springboot.pojo.User;
import springboot.pojo.User1;
import springboot.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	
	@Resource
	private UserDao userDao;

	@Override
	public List<User1> selecteInfo() {
		return userDao.selecteInfo();
	}

	
}
