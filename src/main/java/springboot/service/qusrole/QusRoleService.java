package springboot.service.qusrole;

import java.util.List;

import springboot.pojo.QusRole;

public interface QusRoleService {
	/**
	 * 根据角色ID查询角色名称
	 * @param role_id
	 * @return
	 */
	public QusRole getRoleById(Integer role_id);
	
	/**
	 * 角色信息
	 * @return
	 */
	public List<QusRole> getRoleList();
}
