package springboot.dao.qusdoctor;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
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
		@Result(id=true,property="d_id",column="d_id"),
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
	
	/**
	 * 根据角色Id查找医生信息
	 * @param d_role_id
	 * @return
	 */
	@Select("SELECT * FROM qus_doctor where d_role_id=#{d_role_id}")
	public QusDoctor getDoctors(Integer d_role_id);
	/**
	 * 查询改医生的预约单号的个数  如果为0个可以删除
	 * @param docId
	 * @return
	 */
	@Select("SELECT COUNT(1) FROM qus_appointment a,qus_doctor d WHERE a.app_doc_id = d.d_id AND  d.d_id =#{docId}")
	public int selectCountByDocId(@Param("docId")Integer docId);
	//删除医生
	@Delete("DELETE FROM  qus_doctor WHERE d_id = #{docId}")
	public int deleteByDocId(@Param("docId")Integer docId);
}
