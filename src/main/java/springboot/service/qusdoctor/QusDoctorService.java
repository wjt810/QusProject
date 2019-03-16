package springboot.service.qusdoctor;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import springboot.pojo.QusDoctor;


public interface QusDoctorService {
	/**
	 * 根据id查找医生
	 */
	public QusDoctor getDoctor(Integer id);
	/**
	 * 查询医生列表
	 * @return
	 */
	public List<QusDoctor> getDoctorList();
	/**
	 * 查询改医生的预约单号的个数  如果为0个可以删除
	 * @param docId
	 * @return
	 */
	public int selectCountByDocId(@Param("id")Integer docId);
	/**
	 * 删除医生
	 * @param docId
	 * @return
	 */
	public int deleteByDocId(@Param("docId")Integer docId);
}
