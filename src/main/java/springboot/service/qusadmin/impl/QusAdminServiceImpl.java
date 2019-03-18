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
	public List<QusAdmin> AddAdmin(QusAdmin qusAdmin) {
		return qusAdminDao.AddAdmin(qusAdmin);
	}

	@Override
	public List<QusAdmin> UpdateAdmin(int a_id) {
		// TODO Auto-generated method stub
		return qusAdminDao.UpdateAdmin(a_id);
	}

	@Override
	public List<QusAdmin> DelAdmin(int a_id) {
		// TODO Auto-generated method stub
		return qusAdminDao.DelAdmin(a_id);
	}

}
