package springboot.service.qusinfo.impl;

import java.util.List;

import javax.annotation.Resource;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import springboot.dao.qusinfo.QusInfoDao;
import springboot.pojo.QusAdmin;
import springboot.pojo.QusDoctor;
import springboot.pojo.QusInfo;
import springboot.service.qusinfo.QusInfoService;
@Service
public class QusInfoServiceImpl implements QusInfoService {
	@Resource
	QusInfoDao qusInfoDao;
	/**
	 * 	按照标题名称  模糊查询新闻资讯--分页查询
	 */
	@Override
	public List<QusInfo> selectInfoByTitle(@Param("title")String title,@Param("pageIndex")Integer pageIndex, @Param("pageSize")Integer pageSize) {
		List<QusInfo> list = qusInfoDao.selectInfoByTitle(title, (pageIndex-1)*pageSize, pageSize);
		return list;
	}
	/**
	 * 添加资讯标题
	 */
	@Override
	public int addInfo(QusInfo info) {
		return qusInfoDao.addInfo(info);
	}
	/**
	 * 根据资讯id删除资讯
	 */
	@Override
	public int deleteInfoById(Integer infoId) {
		return qusInfoDao.deleteInfoById(infoId);
	}
	/**
	 * 根据id来修改资讯的信息    
	 */
	@Override
	public int updateInfo(QusInfo info) {
		return qusInfoDao.updateInfo(info);
	}
	/**
	 * 查询总量
	 */
	@Override
	public int selectCount(String title) {
		return qusInfoDao.selectCount(title);
	}
	/**
	 * 查询所有的管理员--然后把selectInfoByTitle1和selectInfoByTitle2两个集合合并
	 */
	@Override
	public List<QusInfo> selectInfoByTitle1(String title) {
		return qusInfoDao.selectInfoByTitle1(title);
	}
	/**
	 * 查询所有的管理员--然后把selectInfoByTitle1和selectInfoByTitle2两个集合合并
	 */
	@Override
	public List<QusInfo> selectInfoByTitle2(String title) {
		return qusInfoDao.selectInfoByTitle2(title);
	}
	@Override
	public QusInfo selectDoctorById(Integer infoId) {
		return qusInfoDao.selectDoctorById(infoId);
	}
	@Override
	public QusInfo selectAdminById(Integer infoId) {
		return qusInfoDao.selectAdminById(infoId);
	}
	@Override
	public int selectRoleIdByInfoId(Integer infoId) {
		return qusInfoDao.selectRoleIdByInfoId(infoId);
	}
	@Override
	public int selectMaxId() {
		return qusInfoDao.selectMaxId();
	}

}
