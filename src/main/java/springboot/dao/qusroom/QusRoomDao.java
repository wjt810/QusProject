package springboot.dao.qusroom;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;

public interface QusRoomDao {
	
	/*
	 * 根据一级科室查询二级科室 
	 */
	@Select("SELECT r2.* FROM qus_room2 r2 WHERE r2.r2_r1_id=#{r1_id}")
	public List<QusRoom2> getRoom2List(@Param("r1_id")Integer r1_id);
	
	/*
	 * 根据id查询一级科室及一级科室下的二级科室（一对多）
	 */
	@Select("<script>"
			+ "SELECT * FROM qus_room1 where 1=1 "
			+ "<if test='r1_id != null'> AND r1_id = #{r1_id}</if> order by r1_id desc"
			+ "</script>")
	@Results({
		@Result(property="r1_id",column="r1_id"),
		@Result(property="room2s",column="r1_id",
				many=@Many(select="springboot.dao.qusroom.QusRoomDao.getRoom2List"))
		
	})
	public List<QusRoom1> getRoom1List(@Param("r1_id")Integer r1_id);
	
	/*
	 * 删除二级科室
	 */
	@Delete("DELETE FROM qus_room2 WHERE r2_id=#{r2_id}")
	public void delRoom2(@Param("r2_id")Integer r2_id);
	
	/*
	 * 删除一级科室
	 */
	@Delete("DELETE FROM qus_room1 WHERE r1_id=#{r1_id}")
	public void delRoom1(@Param("r1_id")Integer r1_id);
	
	/*
	 * 更新一级科室
	 */
	@Update("UPDATE qus_room1 SET r1_name = #{room1.r1_name} WHERE r1_id = #{room1.r1_id}")
	public int editRoom1(@Param("room1")QusRoom1 room1);
	
	/*
	 * 更新二级科室
	 */
	@Update("UPDATE qus_room2 SET r2_name = #{room2.r2_name},r2_r1_id = #{room2.r2_r1_id} WHERE r2_id = #{room2.r2_id}")
	public int editRoom2(@Param("room2")QusRoom2 room2);
	
	/*
	 * 添加二级科室
	 */
	@Insert("INSERT INTO qus_room2 (r2_name, r2_r1_id) VALUES (#{r2_name},#{r1_id})")
	public int addRoom2(@Param("r1_id")Integer r1_id,@Param("r2_name")String r2_name);
	
	/*
	 * 添加一级科室
	 */
	@Insert("INSERT INTO qus_room1 (r1_name) VALUES (#{r1_name})")
	public int addRoom1(@Param("r1_name")String r1_name);
	
	/*
	 * 根据id获取一级科室
	 */
	@Select("SELECT * FROM qus_room1 WHERE r1_id = #{r1_id}")
	public QusRoom1 getRoom1ById(Integer r1_id);
	
	/*
	 * 根据id获取二级科室
	 */
	@Select("SELECT * FROM qus_room2 WHERE r2_id = #{r2_id}")
	public QusRoom2 getRoom2ById(Integer r2_id);
}
