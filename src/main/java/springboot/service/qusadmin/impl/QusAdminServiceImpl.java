package springboot.service.qusadmin.impl;

import java.util.List;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import springboot.dao.qusadmin.QusAdminDao;
import springboot.pojo.QusAdmin;
import springboot.service.qusadmin.QusAdminService;

@Service
public class QusAdminServiceImpl implements QusAdminService{

	@Resource
	private QusAdminDao qusAdminDao;
	
	@Override
	public List<QusAdmin> SeeAdminList() {
		return qusAdminDao.SeeAdminList();
	}

	@Override
	public List<QusAdmin> AdminLogin(String a_name,String a_password) {
		// TODO Auto-generated method stub
		return qusAdminDao.AdminLogin(a_name, a_password)
				;
	}

	@Override
	public int AddAdmin(QusAdmin qusAdmin) {
		return qusAdminDao.AddAdmin(qusAdmin);
	}

	/**
	 * 修改管理員
	 */
	@Override
	public Integer UpdateAdmin(QusAdmin admin) {
		return qusAdminDao.UpdateAdmin(admin);
	}
	
	/**
	 * 根据a_id删除管理员
	 */
	@Override
	public Integer deleteAdmin(Integer a_id) {
		return qusAdminDao.deleteAdmin(a_id);
	}
	
	/**
	 * 根据a_id查看管理员信息
	 */
	@Override
	public QusAdmin getAdminById(Integer a_id) {
		return qusAdminDao.getAdminById(a_id);
	}

	

}
