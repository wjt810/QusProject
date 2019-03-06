package springboot.dao.qusinfo;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.annotations.Update;
import org.springframework.boot.web.servlet.ServletComponentScan;

import springboot.pojo.QusInfo;

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
			+"<if test='info_content != null'> info_content=#{info_content},</if>"
			+"<if test='info_role_id != null'> info_role_id=#{info_role_id},</if>"
			+"<if test='info_u_d_id != null'> info_u_d_id=#{info_u_d_id}</if>"
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
//	@Select("<script> SELECT i.*,r.role_Name from qus_info i,qus_role r"
//			+ " WHERE i.info_role_id=r.role_id"
//			+ "<if test='title != null'>"
//			+" and info_title LIKE CONCAT('%',#{title},'%')"
//			+ "</if>"
//			+" limit #{pageIndex},#{pageSize}"
//			+ "</script>")
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
}
