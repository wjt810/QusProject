package springboot.service.qusdoctor;

import java.util.List;

import org.apache.ibatis.annotations.Param;

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
}
