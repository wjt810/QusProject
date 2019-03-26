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
	
	
}
