package springboot.service.qusrole.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import springboot.dao.qusRole.QusRoleDao;
import springboot.pojo.QusRole;
import springboot.service.qusrole.QusRoleService;
@Service
public class QusRoleServiceimpl implements QusRoleService {
	
	@Resource
	public QusRoleDao qusRoleDao;
	@Override
	public QusRole getRoleById(Integer role_id) {
		return qusRoleDao.getRoleById(role_id);
	}
	@Override
	public List<QusRole> getRoleList() {
		return qusRoleDao.getRoleList();
	}

}
