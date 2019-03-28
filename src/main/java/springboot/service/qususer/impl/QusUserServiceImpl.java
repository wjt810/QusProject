package springboot.service.qususer.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qususer.QusUserDao;
import springboot.pojo.QusAppointment;
import springboot.pojo.QusUser;
import springboot.service.qususer.QusUserService;

@Service
public class QusUserServiceImpl implements QusUserService {
	
	@Resource
	private QusUserDao qusUserDao;     //用户表
	
	/**
	 * 用户列表
	 * @return
	 */
	@Override
	public List<QusAppointment> getUserList() {
		return qusUserDao.getUserList();
	}
	/**
	 * 根据u_id查询用户信息
	 */
	@Override
	public QusUser getUser(Integer id) {
		// TODO Auto-generated method stub
		return qusUserDao.getUser(id);
	}
	
	
	/**
	 * 根据id来修改用户信息
	 */
	@Override
	public int updateUser(QusAppointment user) {
		// TODO Auto-generated method stub
		return  qusUserDao.updateUser(user);
	}
	
	/**
	 * 
	 */
	@Override
	public List<QusUser> getByUser(String name) {
		// TODO Auto-generated method stub
		return qusUserDao.getByUserList(name);
	}
	
	/**
	 * 根据app_id查询用户信息
	 */
	@Override
	public QusAppointment getUserById(Integer app_id) {
		return qusUserDao.getUserById(app_id);
	}
	
	/**
	 * 根据u_id删除用户
	 */
	@Override
	public int deleteUserByuserId(Integer u_id) {
		
		return qusUserDao.deleteUserByuserId(u_id);
	}
	
	
	
	/**
	 * 
	 * **************************************************************************
	 * ********************************前台代码**********************************
	 * **************************************************************************
	 * 
	 */
	
	/**
	 * 用户登录
	 */
	@Override
	public List<QusUser> getUserLogin(String u_name, String u_password) {
		return qusUserDao.getUserLogin(u_name, u_password);
	}
	/**
	 * 根据id查找用户信息
	 */
	@Override
	public QusUser findUserById(Integer u_id) {
		return qusUserDao.findUserById(u_id);
	}
	
	
	@Override
	public Boolean changPwd(String pwd, Integer id) {
		int re = qusUserDao.changePwd(pwd, id);
		if(re>0) {
			return true;
		}
		return false;
	}
	/**
	 * 注册
	 */
	@Override
	public int addUser(QusUser user) {
		// TODO Auto-generated method stub
		return qusUserDao.addUser(user);
	}
	
	
}
