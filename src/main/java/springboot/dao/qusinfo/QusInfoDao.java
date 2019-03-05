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
//	@Select({"<script>",
//    "SELECT * FROM qus_info",
//    "WHERE 1=1",
//    "<when test='info_title!=null'>",
//    "AND info_title like concat('%',#{title},'%')",
//    "</when>",
//    "</script>"})
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
	//@Update("UPDATE qus_info set info_title = #{info_title} , info_content = #{info_content} , info_startTime = #{info_startTime} , info_modifyTime = #{info_modifyTime} , info_role_id = #{info_role_id} , info_u_d_id = #{info_u_d_id} WHERE info_id = #{info_id}")
	@Update("<script> UPDATE qus_info set info_modifyTime=#{info_modifyTime},"
			+"<if test='info_title != null'> info_title=#{info_title},</if>"
			+"<if test='info_content != null'> info_content=#{info_content},</if>"
			+"<if test='info_role_id != null'> info_role_id=#{info_role_id},</if>"
			+"<if test='info_u_d_id != null'> info_u_d_id=#{info_u_d_id}</if>"
			+" where info_id=#{info_id}"
			+"</script>")
	int updateInfo(QusInfo info);//注意info  中包含要修改的infoId 和要修改的内容
	//查询数据的总量
	@Select("select count(*) from qus_info")
	int selectCount();

}
