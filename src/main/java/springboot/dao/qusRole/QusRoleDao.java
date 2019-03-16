package springboot.dao.qusRole;

import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusRole;

public interface QusRoleDao {
	
	/**
	 * 根据角色ID查询角色名称
	 * @return
	 */
	@Select("SELECT * FROM qus_role where role_id=#{role_id}")
	public QusRole getRoleById(Integer role_id);
}
