package springboot.dao.qusinfo;

import java.util.List;
import org.apache.ibatis.annotations.Many;
import org.apache.ibatis.annotations.One;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.web.bind.annotation.RequestParam;

import springboot.pojo.QusAdmin;
import springboot.pojo.QusDoctor;
import springboot.pojo.QusInfo;
import springboot.pojo.QusRoom1;
import springboot.pojo.QusRoom2;

public interface QusInfoDao {
	//按照标题名称  模糊查询新闻资讯--分页查询      "LIMIT #{pageIndex},#{pageSize}",
	@Select("<script> SELECT * from qus_info"
			+ " WHERE 1=1"
			+ "<if test='title != null'>"
			+" and info_title LIKE CONCAT('%',#{title},'%')"
			+ "</if>"
			+" limit #{pageIndex},#{pageSize}"
			+ "</script>")
	List<QusInfo> selectInfoByTitle(@Param("title")String title,@Param("pageIndex")Integer pageIndex,@Param("pageSize")Integer pageSize);
	//添加资讯标题
	@Insert("INSERT INTO qus_info(info_title, info_content, info_startTime, info_modifyTime, info_role_id, info_u_d_id) VALUES(#{info_title},#{info_content}, #{info_startTime},#{info_modifyTime},#{info_role_id},#{info_u_d_id})")
	int addInfo(QusInfo info);
	//根据资讯id删除资讯
	@Delete("DELETE FROM qus_info WHERE info_id = #{infoId}")
	int deleteInfoById(Integer infoId);
	
	//根据id来修改资讯的信息    
	@Update("<script> UPDATE qus_info set info_modifyTime=#{info_modifyTime},"
			+"<if test='info_title != null'> info_title=#{info_title},</if>"
			+"<if test='info_content != null'> info_content=#{info_content}</if>"
			+" where info_id=#{info_id}"
			+"</script>")
	int updateInfo(QusInfo info);//注意info  中包含要修改的infoId 和要修改的内容
	
	//查询数据的总量
	@Select("<script> select count(*) from qus_info where 1=1"
			+ "<if test='title !=null'>"
			+" and info_title LIKE CONCAT('%',#{title},'%')"
			+ "</if>"
			+ "</script>")
	int selectCount(@Param("title")String title);	
	
	//查询所有的管理员--然后把selectInfoByTitle1和selectInfoByTitle2两个集合合并
	@Select("<script> SELECT i.*,a_name AS rname,r.role_name FROM qus_admin a,qus_info i,qus_role r WHERE i.info_role_id = a.a_roleid AND i.info_u_d_id=a.a_id AND r.role_id=i.info_role_id"
			+ "<if test='title != null'>"
			+" and info_title LIKE CONCAT('%',#{title},'%')"
			+ "</if>"
			+ "</script>")
	List<QusInfo> selectInfoByTitle1(@Param("title")String title);
	
	//查询所有的医生
	@Select("<script> SELECT i.*, d_name AS rname,r.role_name FROM qus_doctor d,qus_info i,qus_role r WHERE i.info_role_id = d.d_role_id AND i.info_u_d_id=d.d_id AND r.role_id=i.info_role_id"
			+ "<if test='title != null'>"
			+" and info_title LIKE CONCAT('%',#{title},'%')"
			+ "</if>"
			+ "</script>")
	List<QusInfo> selectInfoByTitle2(@Param("title")String title);
	
	//根据传入的资讯id查询出来对应是哪个  类型的用户发表的  --再从对应的表中查询数据
	@Select("SELECT info_role_id FROM qus_info WHERE info_id = #{infoId}")
	int selectRoleIdByInfoId(@Param("infoId")Integer infoId);
	
	//根据资讯id 从对应的表中查询出来 发布人(管理员)的信息
	@Select("SELECT i.*,a_name AS rname,r.role_name FROM qus_admin a,qus_info i,qus_role r "
			+ "WHERE i.info_role_id = a.a_roleid AND i.info_u_d_id=a.a_id "
			+ "AND r.role_id=i.info_role_id "
			+ "AND i.info_id=#{infoId}")
	QusInfo selectAdminById(@Param("infoId")Integer infoId);
	//根据资讯id 从对应的表中查询出来 发布人(医生|医师)的信息
	@Select("SELECT i.*, d_name AS rname,r.role_name FROM qus_doctor d,qus_info i,qus_role r "
			+ "WHERE i.info_role_id = d.d_role_id "
			+ "AND i.info_u_d_id=d.d_id "
			+ "AND r.role_id=i.info_role_id "
			+ "AND i.info_id=#{infoId}")
	QusInfo selectDoctorById(@Param("infoId")Integer infoId);
	//查询杠插入一条数据的
	@Select("SELECT MAX(info_id) FROM qus_info")
	int selectMaxId();
	
	//查询科室 结果集的使用  一对一的使用
	@Select("<script> select * from qus_room1 r1 where 1=1"
			+ "<if test='r1_id !=null'> AND r1.r1_id=#{r1_id} </if>"
			+ "</script>")
	@Results({
		@Result(id=true,property="r1_id",column="r1_id"),
		@Result(id=true,property="r1_name",column="r1_name"),
		@Result(property="room2s",column="r1_id",
		many=@Many(select="springboot.dao.qusinfo.QusInfoDao.selectkeShi2"))
	})
	public List<QusRoom1> selectKeShi(@Param("r1_id")Integer r1_id);
	
	@Select("select * from qus_room2 r2 WHERE r2.r2_r1_id=#{r1_id}")
	@Results({
		@Result(id=true,property="r2_id",column="r2_id"),
		@Result(property="r2_name",column="r2_name"),
		@Result(property="r2_r1_id",column="r2_r1_id")
	})
	public List<QusRoom2> selectkeShi2(@Param("r1_id")Integer r1_id);
	
	/**
	 * 
	 * @return
	 */
	//查询医生的信息
	@Select("<script> select * from qus_doctor d where 1=1"
			+ "<if test='r2_id !=null'> AND d.d_r2_id=#{r2_id} </if>"
			+ "<if test='r1_id !=null'> AND d.d_r1_id=#{r1_id} </if>"
			+ "</script>")
	@Results({
		@Result(id=true,property="d_id",column="d_id"),
		@Result(property="qusRoom1",column="d_r1_id",one=@One(select="springboot.dao.qusinfo.QusInfoDao.selectRoom1ById")),
		@Result(property="qusRoom2",column="d_r2_id",one=@One(select="springboot.dao.qusinfo.QusInfoDao.selectRoom2ById"))
	})
	public List<QusDoctor> selectDoctorList(@Param("r1_id")Integer r1_id,@Param("r2_id")Integer r2_id);
	
	//查询一级科室
	@Select("select * from qus_room1 where r1_id =#{r1_id}")
	public QusRoom1 selectRoom1ById(@Param("r1_id")Integer r1_id);

	//查询二级科室
	@Select("select * from qus_room2 where r2_id = #{r2_id}")
	@Results({
		@Result(id=true,property="r2_id",column="r2_id"),
		@Result(property="r2_name",column="r2_name"),
		@Result(property="r2_r1_id",column="r2_r1_id")
	})
	public QusRoom2 selectRoom2ById(@Param("r2_id")Integer r2_id);
	

	
	
	
	
	
	
	
	
	
	

	
	
//
}
