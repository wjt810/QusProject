package springboot.dao.qusroom;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;

public interface QusRoomDao {
	
	/*
	 * 根据一级科室查询二级科室 
	 */
	@Select("SELECT r2.* FROM qus_room2 r2 WHERE r2.r2_r1_id=#{r1_id}")
	public List<QusRoom2> getRoom2List(Integer r1_id);
	
	/*
	 * 根据id查询一级科室及一级科室下的二级科室（一对多）
	 */
	@Select("SELECT r1.* FROM qus_room1 r1 WHERE r1.r1_id = #{r1_id}")
	@Results({
		@Result(property="r1_id",column="r1_id"),
		@Result(property="room2s",column="r1_id",
				many=@Many(select="springboot.dao.qusroom.QusRoomDao.getRoom2List"))
	})
	public List<QusRoom1> getRoom1List(Integer r1_id);
	
	/*
	 * 删除二级科室
	 */
	@Delete("DELETE FROM qus_room2 WHERE r2_id=#{r2_id}")
	public void delRoom2(Integer r2_id);
	
	/*
	 * 根据id获取一级科室
	 */
	@Select("SELECT * FROM qus_room1 WHERE r1_id = #{r1_id}")
	public QusRoom1 getRoom1ById(@Param("r1_id")Integer r1_id);
	
	/*
	 * 根据id获取二级科室
	 */
	@Select("SELECT * FROM qus_room2 WHERE r2_id = #{r2_id}")
	public QusRoom2 getRoom2ById(@Param("r2_id")Integer r2_id);
	
	
}
