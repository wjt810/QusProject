package springboot.dao.qusdoctor;

import java.util.List;

import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusDoctor;

public interface QusDoctorDao {
	/**
	 * 根据id查询医生
	 * @param id
	 * @return
	 */
	@Select("SELECT * FROM qus_doctor where d_id=#{id}")
	@Results({
		@Result(property="d_r1_id",column="d_r1_id"),
		@Result(property="d_r2_id",column="d_r2_id"),
		@Result(property="qusRoom2",column="d_r2_id",
				one=@One(select="springboot.dao.qusroom.QusRoomDao.getRoom2ById")),
		@Result(property="qusRoom1",column="d_r1_id",
				one=@One(select="springboot.dao.qusroom.QusRoomDao.getRoom1ById"))
	})
	public QusDoctor getDoctor(@Param("id") Integer id);
	
	/**
	 * 查询医生列表
	 * @return
	 */
	@Select("SELECT * FROM qus_doctor")
	@Results({
		@Result(property="d_r1_id",column="d_r1_id"),
		@Result(property="d_r2_id",column="d_r2_id"),
		@Result(property="d_role_id",column="d_role_id"),
		@Result(property="qusRoom2",column="d_r2_id",
				one=@One(select="springboot.dao.qusroom.QusRoomDao.getRoom2ById")),
		@Result(property="qusRoom1",column="d_r1_id",
				one=@One(select="springboot.dao.qusroom.QusRoomDao.getRoom1ById")),
		@Result(property="qusRole",column="d_role_id",
				one=@One(select="springboot.dao.qusRole.QusRoleDao.getRoleById"))
	})
	public List<QusDoctor> getDoctorList();
}
