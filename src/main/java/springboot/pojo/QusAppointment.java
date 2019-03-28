package springboot.pojo;

import java.io.Serializable;
import java.util.Date;

/**
 * 预约表
 * 
 * @author dell
 *
 */
public class QusAppointment implements Serializable{

	private Integer app_id; // int(11)预约单id
	private Date app_time; // datetime预约日期
	private Integer app_status; // int(11)状态0失效1有效
	private Integer app_user_id; // int(11)用户id
	private Integer app_doc_id; // int(11)医生id
	private Integer app_priority; // int(1)0优先1不优先
	private String app_code; // varchar(50)预约编号
	private Integer app_sta_id;  //用户状态
	
	private String time;
	
	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public Integer getApp_sta_id() {
		return app_sta_id;
	}

	public void setApp_sta_id(Integer app_sta_id) {
		this.app_sta_id = app_sta_id;
	}

	private QusStatus qusStatus;
	
	public QusStatus getQusStatus() {
		return qusStatus;
	}

	public void setQusStatus(QusStatus qusStatus) {
		this.qusStatus = qusStatus;
	}

	private Integer u_id;
	private String u_name;//用户名
	private String u_sex;//性别
	private String u_phone;//电话
	private String sta_name;//状态名称
	private String d_name;//医生
	private String r1_name;//科室名称
	private String r2_name;//二级科室
	
	private Integer r1_id;
	private Integer r2_id;
	
	public Integer getR1_id() {
		return r1_id;
	}

	public void setR1_id(Integer r1_id) {
		this.r1_id = r1_id;
	}

	public Integer getR2_id() {
		return r2_id;
	}

	public void setR2_id(Integer r2_id) {
		this.r2_id = r2_id;
	}

	public Integer getU_id() {
		return u_id;
	}

	public void setU_id(Integer u_id) {
		this.u_id = u_id;
	}

	public String getU_name() {
		return u_name;
	}

	public void setU_name(String u_name) {
		this.u_name = u_name;
	}

	public String getU_sex() {
		return u_sex;
	}

	public void setU_sex(String u_sex) {
		this.u_sex = u_sex;
	}

	public String getU_phone() {
		return u_phone;
	}

	public void setU_phone(String u_phone) {
		this.u_phone = u_phone;
	}

	public String getSta_name() {
		return sta_name;
	}

	public void setSta_name(String sta_name) {
		this.sta_name = sta_name;
	}

	public String getD_name() {
		return d_name;
	}

	public void setD_name(String d_name) {
		this.d_name = d_name;
	}

	public String getR1_name() {
		return r1_name;
	}

	public void setR1_name(String r1_name) {
		this.r1_name = r1_name;
	}
	
	public String getR2_name() {
		return r2_name;
	}

	public void setR2_name(String r2_name) {
		this.r2_name = r2_name;
	}

	private QusUser qusUser;    //用户表
	private QusDoctor qusDoctor;//医生表

	public QusUser getQusUser() {
		return qusUser;
	}

	public void setQusUser(QusUser qusUser) {
		this.qusUser = qusUser;
	}

	public QusDoctor getQusDoctor() {
		return qusDoctor;
	}

	public void setQusDoctor(QusDoctor qusDoctor) {
		this.qusDoctor = qusDoctor;
	}

	public Integer getApp_id() {
		return app_id;
	}

	public void setApp_id(Integer app_id) {
		this.app_id = app_id;
	}

	public Date getApp_time() {
		return app_time;
	}

	public void setApp_time(Date app_time) {
		this.app_time = app_time;
	}

	public Integer getApp_status() {
		return app_status;
	}

	public void setApp_status(Integer app_status) {
		this.app_status = app_status;
	}

	public Integer getApp_user_id() {
		return app_user_id;
	}

	public void setApp_user_id(Integer app_user_id) {
		this.app_user_id = app_user_id;
	}

	public Integer getApp_doc_id() {
		return app_doc_id;
	}

	public void setApp_doc_id(Integer app_doc_id) {
		this.app_doc_id = app_doc_id;
	}

	public Integer getApp_priority() {
		return app_priority;
	}

	public void setApp_priority(Integer app_priority) {
		this.app_priority = app_priority;
	}

	public String getApp_code() {
		return app_code;
	}

	public void setApp_code(String app_code) {
		this.app_code = app_code;
	}

	@Override
	public String toString() {
		return "QusAppointment [app_id=" + app_id + ", app_time=" + app_time + ", app_status=" + app_status
				+ ", app_user_id=" + app_user_id + ", app_doc_id=" + app_doc_id + ", app_priority=" + app_priority
				+ ", app_code=" + app_code + ", qusUser=" + qusUser + ", qusDoctor=" + qusDoctor + "]";
	}
	

}
