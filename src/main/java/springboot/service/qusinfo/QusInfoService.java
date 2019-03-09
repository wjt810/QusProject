package springboot.service.qusinfo;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusInfo;

public interface QusInfoService {
	//按照标题名称  模糊查询新闻资讯--分页查询
	List<QusInfo> selectInfoByTitle(String title,Integer pageIndex,Integer pageSize);
	//添加资讯标题
	int addInfo(QusInfo info);
	//根据资讯id删除资讯
	int deleteInfoById(Integer infoId);
	//根据id来修改资讯的信息    
	int updateInfo(QusInfo info);//注意info  中包含要修改的infoId 和要修改的内容
	//查询数据的总量
	int selectCount(String title);
	//查询所有的管理员和医生--然后把selectInfoByTitle1和selectInfoByTitle2两个集合合并
	List<QusInfo> selectInfoByTitle1(String title);
	List<QusInfo> selectInfoByTitle2(String title);
}
