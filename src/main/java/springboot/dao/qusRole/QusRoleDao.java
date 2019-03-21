 package springboot.dao.qusRole;

import java.util.List;

import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusRole;

public interface QusRoleDao {
	
	/**
	 * 根据角色ID查询角色名称
	 * @return
	 */
	@Select("SELECT * FROM qus_role where role_id=#{role_id}")
	public QusRole getRoleById(Integer role_id);
	
	/**
	 * 查询角色信息
	 * @return
	 */
	@Select("SELECT role_id, role_name FROM qus_role ")
	public List<QusRole> getRoleList();
}
